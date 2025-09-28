<template>
  <Motion
    :is="component"
    :class="computedClass"
    :style="computedStyle"
    :initial="{ backgroundPosition: '100% center' }"
    :animate="{ backgroundPosition: '0% center' }"
    :transition="{
      repeat: Infinity,
      duration,
      ease: 'linear',
    }"
  >
    {{ children }}
  </Motion>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Motion } from 'motion-v'

interface TextShimmerProps {
  children: string
  as?: string
  className?: string
  duration?: number
  spread?: number
}

const props = withDefaults(defineProps<TextShimmerProps>(), {
  children: '',
  as: 'p',
  className: '',
  duration: 2,
  spread: 2
})

// Compute dynamic spread based on text length
const dynamicSpread = computed(() => {
  return props.children.length * props.spread
})

// Compute component class
const computedClass = computed(() => {
  return [
    'relative inline-block bg-[length:250%_100%,auto] bg-clip-text',
    'text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]',
    '[background-repeat:no-repeat,padding-box] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]',
    'dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]',
    props.className
  ].join(' ')
})

// Compute component style
const computedStyle = computed(() => {
  return {
    '--spread': `${dynamicSpread.value}px`,
    backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
  }
})

// Determine the component to render
const component = computed(() => props.as)
</script>
