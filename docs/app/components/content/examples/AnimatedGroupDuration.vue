<template>
  <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl max-w-md mx-auto">
    <div class="text-center mb-6">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Custom Duration</h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm">Custom animation timing and easing</p>
    </div>
    
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
      <MAnimatedGroup 
        :stagger-children="0.15"
        :variants="{
          item: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: 'easeInOut'
              }
            }
          }
        }"
      >
        <div class="grid grid-cols-4 gap-3">
          <div
            v-for="i in 8"
            :key="i"
            class="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold"
          >
            {{ i }}
          </div>
        </div>
      </MAnimatedGroup>
    </div>
    
    <div class="mt-4 text-center">
      <UButton 
        @click="toggleAnimation" 
        :color="isAnimating ? 'red' : 'primary'" 
        size="sm"
      >
        {{ isAnimating ? 'Stop' : 'Start' }} Animation
      </UButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isAnimating = ref(true)

const toggleAnimation = () => {
  isAnimating.value = !isAnimating.value
  // In a real implementation, you would control the animation state
  // For this example, we'll just show an alert
  alert(`Animation ${isAnimating.value ? 'started' : 'stopped'}`)
}
</script>