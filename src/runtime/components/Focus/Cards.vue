<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
    <FocusCard
      v-for="(card, index) in cards"
      :key="card.title"
      :card="card"
      :index="index"
      :hovered="hoveredIndex"
      @mouseenter="hoveredIndex = index"
      @mouseleave="hoveredIndex = null"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FocusCard from './FocusCard.vue'

interface Card {
  title: string
  src: string
  description?: string
}

interface Props {
  cards: Card[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<Props>()
const hoveredIndex = ref<number | null>(null)
</script>
