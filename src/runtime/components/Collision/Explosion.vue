<script setup lang="ts">
import { motion } from 'motion-v'

const props = defineProps({
  fromColor: {
    type: String,
    default: 'from-green-500',
  },
  viaColor: {
    type: String,
    default: 'via-teal-500',
  },
  toColor: {
    type: String,
    default: 'to-purple-500',
  },
})

// Generate particle data
const spans = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  initialX: 0,
  initialY: 0,
  directionX: Math.floor(Math.random() * 80 - 40),
  directionY: Math.floor(Math.random() * -50 - 10),
}))
</script>

<template>
  <div class="absolute z-50 h-2 w-2">
    <motion.div
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 1.5, ease: 'easeOut' }"
      class="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
    />

    <motion.span
      v-for="span in spans"
      :key="span.id"
      :initial="{ x: span.initialX, y: span.initialY, opacity: 1 }"
      :animate="{
        x: span.directionX,
        y: span.directionY,
        opacity: 0,
      }"
      :transition="{ duration: Math.random() * 1.5 + 0.5, ease: 'easeOut' }"
      :class="[
        'absolute h-1 w-1 rounded-full bg-gradient-to-b',
        props.fromColor,
        props.viaColor,
        props.toColor,
      ]"
    />
  </div>
</template>
