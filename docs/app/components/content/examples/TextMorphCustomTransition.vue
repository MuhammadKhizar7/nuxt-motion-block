<template>
  <div class="p-4 space-y-4 flex flex-col items-center">
    <MTextMorph
      :text="currentText"
      :transition="{ type: 'spring', stiffness: 500, damping: 10 }"
    />
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      @click="cycleText"
    >
      Change Text
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const texts = ['Bouncy Morph', 'Has Custom', 'Spring Physics']
const currentIndex = ref(0)
const currentText = computed(() => texts[currentIndex.value])

const cycleText = () => {
  currentIndex.value = (currentIndex.value + 1) % texts.length
}
</script>
