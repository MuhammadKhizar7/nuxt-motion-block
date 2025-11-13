---
title: usePerformance
description: Composable for monitoring and optimizing component performance.
navigation:
  icon: i-lucide-gauge
---

# usePerformance

The [usePerformance](file:///e:/projects/javascript/nuxt-motion-block/src/runtime/composables/usePerformance.ts#L3-L23) composable provides functionality for monitoring and optimizing component performance. It helps track rendering performance, detect performance bottlenecks, and optimize animations for smooth user experiences.

## Usage

```vue
<template>
  <div>
    <div v-if="performance.isSlow" class="performance-warning">
      Performance is degraded. Simplifying animations.
    </div>
    
    <div :class="{ 'reduce-motion': performance.reduceMotion }">
      <!-- Animated content -->
    </div>
  </div>
</template>

<script setup>
import { usePerformance } from '#imports'

const performance = usePerformance({
  fpsThreshold: 30,
  sampleInterval: 1000
})

// Use performance data to optimize components
const shouldReduceMotion = computed(() => {
  return performance.reduceMotion.value || performance.isSlow.value
})
</script>
```

## Parameters

::field-group
  ::field{name="options" type="object" default="{}"}
  Configuration options for performance monitoring.
  ::
  
  ::field{type="number" name="options.fpsThreshold" default="30"}
  The FPS threshold below which performance is considered slow.
  ::
  
  ::field{type="number" name="options.sampleInterval" default="1000"}
  The interval in milliseconds for sampling performance metrics.
  ::
  
  ::field{type="boolean" name="options.autoDetect" default="true"}
}
Whether to automatically detect performance issues.
::

## Example

```vue
<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-2">Performance Optimization Demo</h1>
      <p class="text-gray-600 mb-6">Monitoring component performance in real-time</p>
      
      <div 
        v-if="performance.isSlow" 
        class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded"
        role="alert"
      >
        <p>Performance warning: Frame rate is below {{ performance.fpsThreshold }} FPS. 
        Reducing animation complexity to improve performance.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Performance Metrics</h2>
          <div class="space-y-3">
            <div class="flex justify-between">
              <span>Current FPS:</span>
              <span class="font-mono">{{ Math.round(performance.fps.value) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Frame Time:</span>
              <span class="font-mono">{{ Math.round(performance.frameTime.value) }}ms</span>
            </div>
            <div class="flex justify-between">
              <span>Performance Status:</span>
              <span :class="performance.isSlow ? 'text-red-600' : 'text-green-600'">
                {{ performance.isSlow ? 'Slow' : 'Good' }}
              </span>
            </div>
            <div class="flex justify-between">
              <span>Reduce Motion:</span>
              <span :class="performance.reduceMotion ? 'text-red-600' : 'text-green-600'">
                {{ performance.reduceMotion ? 'Enabled' : 'Disabled' }}
              </span>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Animation Controls</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2">
                Animation Complexity
              </label>
              <select 
                v-model="animationComplexity" 
                class="w-full p-2 border rounded-lg"
                :disabled="performance.isSlow"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            
            <button 
              @click="performance.reset()"
              class="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Reset Performance Metrics
            </button>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Animated Content</h2>
        <div 
          class="h-64 rounded-lg relative overflow-hidden"
          :class="{ 'reduce-motion': shouldReduceMotion }"
        >
          <div 
            v-for="i in particleCount" 
            :key="i"
            class="absolute w-4 h-4 bg-indigo-500 rounded-full"
            :style="getParticleStyle(i)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePerformance } from '#imports'

const animationComplexity = ref('medium')

const performance = usePerformance({
  fpsThreshold: 30,
  sampleInterval: 500,
  autoDetect: true
})

// Adjust particle count based on performance
const particleCount = computed(() => {
  if (performance.isSlow.value) return 10
  switch (animationComplexity.value) {
    case 'low': return 20
    case 'medium': return 50
    case 'high': return 100
    default: return 50
  }
})

// Simplify animations when performance is poor
const shouldReduceMotion = computed(() => {
  return performance.reduceMotion.value || performance.isSlow.value
})

const getParticleStyle = (index) => {
  const delay = index * 0.1
  return {
    left: `${(index * 10) % 100}%`,
    top: `${(index * 7) % 100}%`,
    animation: shouldReduceMotion.value 
      ? 'none' 
      : `float 3s ease-in-out ${delay}s infinite`
  }
}
</script>

<style scoped>
.reduce-motion * {
  animation: none !important;
  transition: none !important;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
</style>
```