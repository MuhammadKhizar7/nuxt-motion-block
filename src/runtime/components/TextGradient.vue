<template>
  <Motion
    :is="component"
    :class="computedClasses"
    :style="computedStyles"
    :initial="initialVariant"
    :animate="animateVariant"
    :transition="transition"
    :while-hover="hoverVariant"
    role="text"
    :aria-label="accessibilityLabel"
    :aria-hidden="hideFromScreenReader"
  >
    <slot>{{ text }}</slot>
    <!-- Screen reader accessible text if needed -->
    <span
      v-if="hideFromScreenReader"
      class="sr-only"
    >{{ text }}</span>
  </Motion>
</template>

<script setup lang="ts">
import { Motion } from 'motion-v'
import { computed, ref } from 'vue'

type GradientDirection = 'horizontal' | 'vertical' | 'diagonal' | 'radial'
type AnimationType = 'wave' | 'pulse' | 'flow' | 'rainbow' | 'static'

interface TextGradientProps {
  text?: string
  as?: string
  colors?: string[]
  direction?: GradientDirection
  animation?: AnimationType
  duration?: number
  speed?: number
  size?: number
  class?: string
  hover?: boolean
  ariaLabel?: string
  hideFromScreenReader?: boolean
  reduceMotion?: boolean
}

const props = withDefaults(defineProps<TextGradientProps>(), {
  text: '',
  as: 'span',
  colors: () => ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'],
  direction: 'horizontal',
  animation: 'wave',
  duration: 3,
  speed: 1,
  size: 200,
  class: '',
  hover: false,
  ariaLabel: '',
  hideFromScreenReader: false,
  reduceMotion: false,
})

const component = computed(() => props.as)

// Check for reduced motion preference
const prefersReducedMotion = ref(false)
if (import.meta.client) {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Accessibility label
const accessibilityLabel = computed(() => {
  return props.ariaLabel || (props.text ? `Animated gradient text: ${props.text}` : 'Animated gradient text')
})

const getGradientDirection = () => {
  const directions = {
    horizontal: '90deg',
    vertical: '180deg',
    diagonal: '45deg',
    radial: 'circle',
  }
  return directions[props.direction]
}

const createGradient = () => {
  const colors = props.colors.join(', ')
  const direction = getGradientDirection()

  if (props.direction === 'radial') {
    return `radial-gradient(${direction}, ${colors})`
  }
  return `linear-gradient(${direction}, ${colors})`
}

const computedClasses = computed(() => {
  return [
    'text-gradient',
    'bg-clip-text',
    'text-transparent',
    'font-bold',
    props.class,
  ].filter(Boolean).join(' ')
})

const computedStyles = computed(() => {
  const gradient = createGradient()

  const styles: any = {
    backgroundImage: gradient,
    backgroundSize: `${props.size}% ${props.size}%`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }

  if (props.animation === 'static') {
    return styles
  }

  // Add animation-specific styles
  if (props.animation === 'wave' || props.animation === 'flow') {
    styles.backgroundPosition = '0% 50%'
  }

  return styles
})

const initialVariant = computed(() => {
  const variants: Record<AnimationType, any> = {
    static: {},
    wave: {
      backgroundPosition: '0% 50%',
    },
    pulse: {
      backgroundSize: `${props.size}% ${props.size}%`,
      opacity: 1,
    },
    flow: {
      backgroundPosition: '-100% 50%',
    },
    rainbow: {
      backgroundPosition: '0% 50%',
    },
  }

  return variants[props.animation] || {}
})

const animateVariant = computed(() => {
  const variants: Record<AnimationType, any> = {
    static: {},
    wave: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    },
    pulse: {
      backgroundSize: [`${props.size}%`, `${props.size * 1.2}%`, `${props.size}%`],
      opacity: [1, 0.8, 1],
    },
    flow: {
      backgroundPosition: ['100% 50%', '-100% 50%'],
    },
    rainbow: {
      backgroundPosition: ['0% 50%', '100% 50%', '200% 50%', '0% 50%'],
    },
  }

  return variants[props.animation] || {}
})

const transition = computed(() => {
  if (props.animation === 'static' || prefersReducedMotion.value || props.reduceMotion) {
    return {}
  }

  const baseTransition = {
    duration: props.duration / props.speed,
    repeat: Infinity,
    ease: 'linear',
  }

  const transitions: Record<AnimationType, any> = {
    static: {},
    wave: {
      ...baseTransition,
      ease: 'easeInOut',
    },
    pulse: {
      ...baseTransition,
      ease: 'easeInOut',
    },
    flow: {
      ...baseTransition,
    },
    rainbow: {
      ...baseTransition,
      duration: props.duration * 2 / props.speed,
    },
  }

  return transitions[props.animation] || baseTransition
})

const hoverVariant = computed(() => {
  if (!props.hover) return {}

  return {
    scale: 1.05,
    backgroundSize: `${props.size * 1.1}% ${props.size * 1.1}%`,
  }
})
</script>

<style scoped>
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
}
</style>
