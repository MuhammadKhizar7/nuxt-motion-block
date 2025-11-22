<template>
  <div
    ref="containerRef"
    class="background-ripple-effect"
    :class="[
      'absolute inset-0 h-full w-full',
      '[--cell-border-color:var(--color-neutral-300)] [--cell-fill-color:var(--color-neutral-100)] [--cell-shadow-color:var(--color-neutral-500)]',
      'dark:[--cell-border-color:var(--color-neutral-700)] dark:[--cell-fill-color:var(--color-neutral-900)] dark:[--cell-shadow-color:var(--color-neutral-800)]',
    ]"
  >
    <div class="relative h-auto w-auto overflow-hidden">
      <div class="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden" />
      <DivGrid
        :key="`base-${rippleKey}`"
        class="mask-radial-from-20% mask-radial-at-top opacity-600"
        :rows="rows"
        :cols="cols"
        :cell-size="cellSize"
        border-color="var(--cell-border-color)"
        fill-color="var(--cell-fill-color)"
        :clicked-cell="clickedCell"
        :interactive="true"
        @cell-click="handleCellClick"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DivGrid from './DivGrid.vue'

interface ClickedCell {
  row: number
  col: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  rows: {
    type: Number,
    default: 8,
  },
  cols: {
    type: Number,
    default: 27,
  },
  cellSize: {
    type: Number,
    default: 56,
  },
})

const clickedCell = ref<ClickedCell | null>(null)
const rippleKey = ref(0)
const containerRef = ref<HTMLElement>()

const handleCellClick = (row: number, col: number) => {
  clickedCell.value = { row, col }
  rippleKey.value += 1
}
</script>

<style>
@keyframes cell-ripple {
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.4;
  }
}

.animate-cell-ripple {
  animation: cell-ripple var(--duration, 200ms) ease-out none 1 var(--delay, 0ms);
}
</style>
