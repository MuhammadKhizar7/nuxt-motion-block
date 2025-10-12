<template>
  <div class="p-4 space-y-4">
    <MTextScramble text="Click to scramble" :trigger="scrambleTrigger" />
    <button 
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      @click="triggerScramble"
    >
      Scramble Text
    </button>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const scrambleTrigger = ref(true)

const triggerScramble = () => {
  // Toggle the trigger to initiate scramble
  scrambleTrigger.value = false
  nextTick(() => {
    scrambleTrigger.value = true
  })
}
</script>