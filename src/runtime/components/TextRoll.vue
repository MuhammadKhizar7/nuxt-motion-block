<template>
  <span :class="props.class">
    <span
      v-for="(letter, i) in letters"
      :key="i"
      class="relative inline-block [perspective:10000px] [transform-style:preserve-3d] [width:auto]"
      aria-hidden="true"
    >
      <!-- @vue-ignore -->
      <Motion
        class="absolute inline-block [backface-visibility:hidden] [transform-origin:50%_25%]"
        :initial="enterInitial"
        :animate="enterAnimate"
        :transition="{
          ...transition,
          duration,
          delay: getEnterDelay(i),
        }"
      >
        {{ letter === ' ' ? '\u00A0' : letter }}
      </Motion>
      <!-- @vue-ignore -->
      <Motion
        class="absolute inline-block [backface-visibility:hidden] [transform-origin:50%_100%]"
        :initial="exitInitial"
        :animate="exitAnimate"
        :transition="{
          ...transition,
          duration,
          delay: getExitDelay(i),
        }"
        @motioncomplete="i === letters.length - 1 ? onAnimationComplete?.() : undefined"
      >
        {{ letter === ' ' ? '\u00A0' : letter }}
      </Motion>
      <span class="invisible">
        {{ letter === ' ' ? '\u00A0' : letter }}
      </span>
    </span>
    <span class="sr-only">{{ children }}</span>
  </span>
</template>

<script setup lang="ts">
import { Motion } from 'motion-v'
import { computed } from 'vue'

interface TextRollProps {
  children?: string
  duration?: number
  getEnterDelay?: (index: number) => number
  getExitDelay?: (index: number) => number
  class?: string
  transition?: object
  variants?: {
    enter: {
      initial: object | string | boolean
      animate: object | string
    }
    exit: {
      initial: object | string | boolean
      animate: object | string
    }
  }
  onAnimationComplete?: () => void
}

const props = withDefaults(defineProps<TextRollProps>(), {
  children: '',
  duration: 0.5,
  getEnterDelay: (i: number) => i * 0.1,
  getExitDelay: (i: number) => i * 0.1 + 0.2,
  className: '',
  transition: () => ({ ease: 'easeIn' }),
})

// Default variants
const defaultVariants = {
  enter: {
    initial: { rotateX: 0 },
    animate: { rotateX: 90 },
  },
  exit: {
    initial: { rotateX: 90 },
    animate: { rotateX: 0 },
  },
}

// Compute variants with fallback to defaults
const enterInitial = computed(() => {
  return props.variants?.enter?.initial || defaultVariants.enter.initial
})

const enterAnimate = computed(() => {
  return props.variants?.enter?.animate || defaultVariants.enter.animate
})

const exitInitial = computed(() => {
  return props.variants?.exit?.initial || defaultVariants.exit.initial
})

const exitAnimate = computed(() => {
  return props.variants?.exit?.animate || defaultVariants.exit.animate
})

// Split text into letters
const letters = computed(() => {
  return props.children.split('')
})
</script>
