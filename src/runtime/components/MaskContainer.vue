<template>
  <motion.div
    ref="containerRef"
    :class="['relative h-screen', props.class]"
    :animate="{
      backgroundColor: isHovered ? 'rgb(15 23 42)' : 'rgb(255 255 255)',
    }"
    :transition="{
      backgroundColor: { duration: 0.3 },
    }"
    @mousemove="updateMousePosition"
  >
    <motion.div
      class="absolute flex h-full w-full items-center justify-center bg-black text-6xl [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px] dark:bg-white"
      :animate="{
        maskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
        maskSize: `${maskSize}px`,
      }"
      :transition="{
        maskSize: { duration: 0.3, ease: 'easeInOut' },
        maskPosition: { duration: 0.15, ease: 'linear' },
      }"
    >
      <div class="absolute inset-0 z-0 h-full w-full bg-black opacity-50 dark:bg-white" />
      <div
        class="relative z-20 mx-auto max-w-4xl text-center text-4xl font-bold cursor-pointer"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <slot name="content" />
      </div>
    </motion.div>

    <div class="flex h-full w-full items-center justify-center">
      <slot name="reveal" />
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { computed, onMounted, ref } from 'vue'

interface MaskContainerProps {
  size?: number
  revealSize?: number
  class?: string
}

const props = withDefaults(defineProps<MaskContainerProps>(), {
  size: 10,
  revealSize: 600,
})

const containerRef = ref<HTMLElement | null>(null)
const isHovered = ref(false)
const mousePosition = ref({ x: 0, y: 0 })

const maskSize = computed(() => isHovered.value ? props.revealSize : props.size)

const updateMousePosition = (e: MouseEvent) => {
  if (!containerRef.value) return

  const rect = containerRef.value.$el.getBoundingClientRect()
  mousePosition.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  }
}

// Initialize mouse position to center
onMounted(() => {
  if (containerRef.value) {
    const rect = containerRef.value.$el.getBoundingClientRect()
    mousePosition.value = {
      x: rect.width / 2,
      y: rect.height / 2,
    }
  }
})
</script>
