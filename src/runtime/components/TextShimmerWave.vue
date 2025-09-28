<template>
  <Motion
    :is="component"
    :class="computedClass"
    :style="{ color: 'var(--base-color)' }"
  >
    <Motion
      v-for="(char, i) in characters"
      :key="i"
      :class="['inline-block whitespace-pre [transform-style:preserve-3d]']"
      :initial="{
        translateZ: 0,
        scale: 1,
        rotateY: 0,
        color: 'var(--base-color)',
      }"
      :animate="{
        translateZ: [0, zDistance, 0],
        translateX: [0, xDistance, 0],
        translateY: [0, yDistance, 0],
        scale: [1, scaleDistance, 1],
        rotateY: [0, rotateYDistance, 0],
        color: [
          'var(--base-color)',
          'var(--base-gradient-color)',
          'var(--base-color)',
        ],
      }"
      :transition="{
        duration: duration,
        repeat: Infinity,
        repeatDelay: (characters.length * 0.05) / spread,
        delay: (i * duration * (1 / spread)) / characters.length,
        ease: 'easeInOut',
        ...transition,
      }"
    >
      {{ char }}
    </Motion>
  </Motion>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Motion } from 'motion-v'

interface TextShimmerWaveProps {
  children: string
  as?: string
  className?: string
  duration?: number
  zDistance?: number
  xDistance?: number
  yDistance?: number
  spread?: number
  scaleDistance?: number
  rotateYDistance?: number
  transition?: object
}

const props = withDefaults(defineProps<TextShimmerWaveProps>(), {
  children: '',
  as: 'p',
  className: '',
  duration: 1,
  zDistance: 10,
  xDistance: 2,
  yDistance: -2,
  spread: 1,
  scaleDistance: 1.1,
  rotateYDistance: 10,
  transition: () => ({})
})

// Split children into characters
const characters = computed(() => {
  return props.children.split('')
})

// Compute component class
const computedClass = computed(() => {
  return [
    'relative inline-block [perspective:500px]',
    '[--base-color:#a1a1aa] [--base-gradient-color:#000]',
    'dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff]',
    props.className
  ].join(' ')
})

// Determine the component to render
const component = computed(() => props.as)
</script>
