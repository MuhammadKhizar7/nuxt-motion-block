<template>
  <Motion
    :class="progressClasses"
    :style="progressStyle"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, withDefaults, defineProps, type Ref } from 'vue'
import { Motion, useScroll, useSpring, useMotionValueEvent } from 'motion-v'
import type { SpringOptions } from 'motion-v'

const props = withDefaults(defineProps<{
  class?: string
  springOptions?: SpringOptions
  containerRef?: Ref<HTMLElement | null>
}>(), {
  springOptions: undefined,
  containerRef: undefined,
})

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
}

// Use scroll tracking
const { scrollYProgress } = useScroll({
  container: props.containerRef,
})

// Apply spring animation to the scroll progress
const scaleX = useSpring(scrollYProgress, {
  ...DEFAULT_SPRING_OPTIONS,
  ...(props.springOptions ?? {}),
})

const scaleXValue = ref(scaleX.get())

onMounted(() => {
  useMotionValueEvent(scaleX, 'change', (latest) => {
    scaleXValue.value = latest as number
  })
})

const progressClasses = computed(() => [
  'inset-x-0 top-0 h-1 origin-left',
  props.class,
])

const progressStyle = computed(() => ({
  scaleX: scaleXValue.value,
}))
</script>
