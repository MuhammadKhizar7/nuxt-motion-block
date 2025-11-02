<template>
  <div
    class="div-grid"
    :class="['relative z-[3]', props.class]"
    :style="gridStyle"
  >
    <div
      v-for="idx in cells"
      :key="idx"
      class="cell"
      :class="[
        'relative border-[0.5px] opacity-40 transition-opacity duration-150 will-change-transform hover:opacity-80 dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]',
        clickedCell && 'animate-cell-ripple [animation-fill-mode:none]',
        !interactive && 'pointer-events-none',
      ]"
      :style="getCellStyle(idx) as any"
      @click="interactive ? handleClick(idx) : undefined"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'

interface ClickedCell {
  row: number
  col: number
}

interface CellStyle {
  '--delay'?: string
  '--duration'?: string
  'backgroundColor': string
  'borderColor': string
}

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  rows: {
    type: Number,
    default: 7,
  },
  cols: {
    type: Number,
    default: 30,
  },
  cellSize: {
    type: Number,
    default: 56,
  },
  borderColor: {
    type: String,
    default: '#3f3f46',
  },
  fillColor: {
    type: String,
    default: 'rgba(14,165,233,0.3)',
  },
  clickedCell: {
    type: Object as PropType<ClickedCell | null>,
    default: null,
  },
  interactive: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits<{
  cellClick: [row: number, col: number]
}>()

const cells = computed(() =>
  Array.from({ length: props.rows * props.cols }, (_, idx) => idx),
)

const gridStyle = computed(() => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${props.cols}, ${props.cellSize}px)`,
  gridTemplateRows: `repeat(${props.rows}, ${props.cellSize}px)`,
  width: `${props.cols * props.cellSize}px`,
  height: `${props.rows * props.cellSize}px`,
  marginInline: 'auto',
}))

const getCellStyle = (idx: number): CellStyle => {
  const rowIdx = Math.floor(idx / props.cols)
  const colIdx = idx % props.cols

  if (!props.clickedCell) {
    return {
      backgroundColor: props.fillColor,
      borderColor: props.borderColor,
    }
  }

  const distance = Math.hypot(
    props.clickedCell.row - rowIdx,
    props.clickedCell.col - colIdx,
  )
  const delay = Math.max(0, distance * 55)
  const duration = 200 + distance * 80

  return {
    '--delay': `${delay}ms`,
    '--duration': `${duration}ms`,
    'backgroundColor': props.fillColor,
    'borderColor': props.borderColor,
  }
}

const handleClick = (idx: number) => {
  const rowIdx = Math.floor(idx / props.cols)
  const colIdx = idx % props.cols
  emit('cellClick', rowIdx, colIdx)
}
</script>
