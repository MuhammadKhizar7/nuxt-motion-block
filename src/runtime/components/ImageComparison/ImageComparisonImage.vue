<template>
  <img
    :src="src"
    :alt="alt"
    :class="imageClasses"
    :style="clipPathStyle"
  >
</template>

<script setup lang="ts">
import { ref, computed, inject, onMounted, onUnmounted } from 'vue'
import type { MotionValue } from 'motion-v'

const props = defineProps<{
  class?: string
  alt: string
  src: string
  position: 'left' | 'right'
}>()

const imageClasses = computed(() => [
  'absolute inset-0 h-full w-full object-cover',
  props.class,
])

const motionSliderPosition = inject<MotionValue<number>>('motionSliderPosition')
const sliderValue = ref(motionSliderPosition?.get() || 50)

onMounted(() => {
  const unsubscribe = motionSliderPosition?.on('change', (latest) => {
    sliderValue.value = latest
  })
  onUnmounted(() => {
    unsubscribe?.()
  })
})

const clipPathStyle = computed(() => {
  const value = sliderValue.value
  if (props.position === 'left') {
    return { clipPath: `inset(0 0 0 ${value}%)` }
  }
  else {
    return { clipPath: `inset(0 ${100 - value}% 0 0)` }
  }
})
</script>
