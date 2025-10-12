<template>
  <div class="p-4">
    <MAnimatedGroup :key="animationKey">
      <div class="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded mb-2">
        Animated Item 1
      </div>
      <div class="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded mb-2">
        Animated Item 2
      </div>
      <div class="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded mb-2">
        Animated Item 3
      </div>
    </MAnimatedGroup>
    <div class="mt-4">
      <UButton 
        icon="i-lucide-refresh-cw" 
        size="sm" 
        @click="refreshAnimation"
      >
        Replay Animation
      </UButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const animationKey = ref(0)

const refreshAnimation = () => {
  animationKey.value++
}
</script>