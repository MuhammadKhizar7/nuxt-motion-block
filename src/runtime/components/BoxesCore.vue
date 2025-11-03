<template>
  <div
    :style="containerStyle"
    :class="[
      'absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4',
      props.class,
    ]"
    v-bind="rest"
  >
    <div
      v-for="(_, i) in rowsArray"
      :key="`row-${i}`"
      class="relative h-8 w-16 border-l border-slate-700"
    >
      <motion.div
        v-for="(_, j) in colsArray"
        :key="`col-${j}`"
        :while-hover="{
          backgroundColor: getRandomColor(),
          transition: { duration: 0 },
        }"
        :animate="{
          transition: { duration: 2 },
        }"
        class="relative h-8 w-16 border-t border-r border-slate-700"
      >
        <svg
          v-if="showPlusSigns && j % 2 === 0 && i % 2 === 0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
      </motion.div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { motion } from 'motion-v'

// Define props with defaults
interface Props {
  class: string
  rows?: number
  cols?: number
  colors?: string[]
  skew?: boolean
  showPlusSigns?: boolean
  [key: string]: any
}

const props = withDefaults(defineProps<Props>(), {
  rows: 150,
  cols: 100,
  skew: true,
  showPlusSigns: true,
  colors: () => [
    'var(--color-primary-500)',
    'var(--color-pink-500)',
    'var(--color-emerald-500)',
    'var(--color-yellow-500)',
    'var(--color-red-500)',
    'var(--color-purple-500)',
    'var(--color-primary-500)',
    'var(--color-indigo-500)',
    'var(--color-violet-500)',
  ],
})

const { ...rest } = props

// Computed properties for reactive arrays
const rowsArray = computed(() => Array.from({ length: props.rows }))
const colsArray = computed(() => Array.from({ length: props.cols }))

// Computed style for container with conditional skew
const containerStyle = computed(() => ({
  transform: props.skew
    ? `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`
    : `translate(-40%,-60%) scale(0.675) rotate(0deg) translateZ(0)`,
}))

const getRandomColor = () => {
  return props.colors[Math.floor(Math.random() * props.colors.length)]
}
</script>
