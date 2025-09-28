<template>
  <div
    ref="containerRef"
    :class="containerClasses"
    role="text"
    :aria-label="accessibilityLabel"
    :aria-live="isAnimating ? 'polite' : 'off'"
    :aria-busy="isAnimating"
    @click="handleClick"
  >
    <span
      v-for="(char, index) in chars"
      :key="`${char}-${index}`"
      :class="charClasses"
      :style="getCharStyle(index)"
      aria-hidden="true"
    >
      <motion.span
        :initial="initialVariant"
        :animate="shouldAnimate ? getCharAnimateVariant(index) : initialVariant"
        :transition="getCharTransition(index) as any"
        class="inline-block"
      >
        {{ char === ' ' ? '\u00A0' : char }}
      </motion.span>
    </span>
    <!-- Screen reader accessible text -->
    <span class="sr-only">{{ props.text }}</span>
  </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useElementVisibility } from '@vueuse/core'

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'random'
type RevealEffect = 'fade' | 'slide' | 'bounce' | 'rotate' | 'scale' | 'blur'

interface TextRevealProps {
  text: string
  direction?: RevealDirection
  effect?: RevealEffect
  stagger?: number
  duration?: number
  delay?: number
  startOnView?: boolean
  once?: boolean
  class?: string
  charClass?: string
  trigger?: boolean
  ariaLabel?: string
  reduceMotion?: boolean
}

const props = withDefaults(defineProps<TextRevealProps>(), {
  text: '',
  direction: 'up',
  effect: 'slide',
  stagger: 0.05,
  duration: 0.6,
  delay: 0,
  startOnView: true,
  once: true,
  class: '',
  charClass: '',
  trigger: undefined,
  ariaLabel: '',
  reduceMotion: false
})

const emit = defineEmits(['complete', 'click'])

const containerRef = ref<HTMLElement>()
const isVisible = useElementVisibility(containerRef, {
  threshold: 0.1,
  rootMargin: '50px'
})
const hasAnimated = ref(false)
const isAnimating = ref(false)

// Check for reduced motion preference
const prefersReducedMotion = ref(false)
if (import.meta.client) {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Accessibility label
const accessibilityLabel = computed(() => {
  return props.ariaLabel || `Animated text: ${props.text}`
})

const chars = computed(() => {
  return props.text.split('')
})

const shouldAnimate = computed(() => {
  if (props.trigger !== undefined) {
    return props.trigger
  }
  // If startOnView is false, always animate (unless already animated and once=true)
  if (!props.startOnView) {
    return !props.once || !hasAnimated.value
  }
  // If startOnView is true, animate when visible (unless already animated and once=true)
  return isVisible.value && (!props.once || !hasAnimated.value)
})

const containerClasses = computed(() => {
  return [
    'text-reveal-container',
    'inline-block',
    props.class
  ].filter(Boolean).join(' ')
})

const charClasses = computed(() => {
  return [
    'text-reveal-char',
    'relative',
    props.charClass
  ].filter(Boolean).join(' ')
})

// Base animation variants
const getBaseVariant = (effect: RevealEffect, direction: RevealDirection, isInitial: boolean) => {
  const variants: Record<RevealEffect, any> = {
    fade: {
      opacity: isInitial ? 0 : 1
    },
    slide: {
      opacity: isInitial ? 0 : 1,
      y: isInitial ? getDirectionOffset(direction, 'y') : 0,
      x: isInitial ? getDirectionOffset(direction, 'x') : 0
    },
    bounce: {
      opacity: isInitial ? 0 : 1,
      y: isInitial ? getDirectionOffset(direction, 'y') : 0,
      scale: isInitial ? 0.8 : 1
    },
    rotate: {
      opacity: isInitial ? 0 : 1,
      rotateX: isInitial ? (direction === 'up' ? -90 : direction === 'down' ? 90 : 0) : 0,
      rotateY: isInitial ? (direction === 'left' ? -90 : direction === 'right' ? 90 : 0) : 0
    },
    scale: {
      opacity: isInitial ? 0 : 1,
      scale: isInitial ? 0 : 1
    },
    blur: {
      opacity: isInitial ? 0 : 1,
      filter: isInitial ? 'blur(10px)' : 'blur(0px)',
      y: isInitial ? getDirectionOffset(direction, 'y') : 0
    }
  }
  
  return variants[effect] || variants.slide
}

const getDirectionOffset = (direction: RevealDirection, axis: 'x' | 'y') => {
  if (direction === 'random') {
    return Math.random() * 40 - 20
  }
  
  const offsets = {
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 }
  }
  
  return offsets[direction][axis]
}

const initialVariant = computed(() => {
  return getBaseVariant(props.effect, props.direction, true)
})

const getCharAnimateVariant = (index: number) => {
  // Always return the final variant - Motion will handle the animation
  return getBaseVariant(props.effect, props.direction, false)
}

const getCharTransition = (index: number) => {
  // Respect reduced motion preferences
  if (prefersReducedMotion.value || props.reduceMotion) {
    return {
      duration: 0.1,
      delay: 0,
      ease: 'easeInOut'
    }
  }
  
  const baseTransition = {
    duration: props.duration,
    delay: props.delay + (index * props.stagger),
    ease: props.effect === 'bounce' ? 'easeOut' : 'easeInOut'
  }
  
  if (props.effect === 'bounce') {
    return {
      ...baseTransition,
      type: 'spring',
      bounce: 0.4
    }
  }
  
  return baseTransition
}

const getCharStyle = (index: number) => {
  return {
    transitionDelay: `${props.delay + (index * props.stagger)}s`
  }
}

const handleClick = () => {
  emit('click')
}

// Watch for animation trigger
watch(shouldAnimate, (newVal, oldVal) => {
  // Trigger animation when shouldAnimate becomes true
  if (newVal && !isAnimating.value) {
    // For manual triggers with once=false, reset hasAnimated to allow repeated animations
    if (props.trigger !== undefined && !props.once && oldVal === false) {
      hasAnimated.value = false
    }
    
    // Only animate if not already animated (or if once=false)
    if (!hasAnimated.value || !props.once) {
      isAnimating.value = true
      
      // Calculate total animation time
      const totalTime = props.delay + (chars.value.length * props.stagger) + props.duration
      
      // Mark as animated after starting the animation
      setTimeout(() => {
        hasAnimated.value = true
        isAnimating.value = false
        emit('complete')
      }, totalTime * 1000)
    }
  }
})

// Auto-trigger if not using in-view
onMounted(() => {
  if (!props.startOnView && props.trigger === undefined) {
    // Animation will be triggered by the shouldTriggerAnimation watcher
    // No need to manually trigger here
  }
})
</script>

<style scoped>
.text-reveal-container {
  overflow: hidden;
}

.text-reveal-char {
  display: inline-block;
  white-space: pre;
}
</style>
