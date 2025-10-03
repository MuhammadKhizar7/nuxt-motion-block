---
title: useFluidCursor
description: Fluid cursor effects with particle systems.
navigation:
  icon: i-lucide-droplets
---

# useFluidCursor

The useFluidCursor composable provides fluid cursor effects with particle systems. It creates realistic fluid dynamics that follow the mouse cursor with WebGL-based rendering.

## Usage

```ts
import { useFluidCursor } from '#imports'
import { ref, onMounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  useFluidCursor(canvasRef)
})
```

## Parameters

::field-group
  ::field{name="canvasRef" type="Ref<HTMLCanvasElement>" :required="true"}
  Reference to the canvas element.
  ::
  
  ::field{name="options" type="object" default="{}"}
  Configuration options for the cursor.
  ::
  
  ::field{name="options.color" type="string" default="undefined"}
  Color for the fluid effect.
  ::
::

## Methods

::field-group
  ::field{name="init" type="function"}
  Initialize the fluid cursor.
  ::
  
  ::field{name="destroy" type="function"}
  Destroy the fluid cursor and clean up resources.
  ::
::

## Configuration Options

The composable uses internal configuration for the fluid effects:

```ts
const config = {
  SIM_RESOLUTION: 128,           // Simulation resolution
  DYE_RESOLUTION: 1440,          // Dye resolution
  CAPTURE_RESOLUTION: 512,       // Capture resolution
  DENSITY_DISSIPATION: 3.5,      // Density dissipation
  VELOCITY_DISSIPATION: 2,       // Velocity dissipation
  PRESSURE: 0.1,                 // Pressure
  PRESSURE_ITERATIONS: 20,       // Pressure iterations
  CURL: 3,                       // Curl
  SPLAT_RADIUS: 0.2,             // Splat radius
  SPLAT_FORCE: 6000,             // Splat force
  SHADING: true,                 // Enable shading
  COLOR_UPDATE_SPEED: 10,        // Color update speed
  PAUSED: false,                 // Pause simulation
  BACK_COLOR: { r: 0.5, g: 0, b: 0 }, // Background color
  TRANSPARENT: true              // Transparent background
}
```

## Example

```vue
<template>
  <div class="relative">
    <canvas 
      ref="canvasRef" 
      class="fixed inset-0 pointer-events-none z-50"
    />
    
    <div class="p-8">
      <h1>Fluid Cursor Demo</h1>
      <p>Move your cursor around to see the fluid dynamics.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFluidCursor } from '#imports'

const canvasRef = ref(null)

onMounted(() => {
  useFluidCursor(canvasRef)
})
</script>
```

## Advanced Example

```vue
<template>
  <div class="relative min-h-screen bg-black">
    <canvas 
      ref="canvasRef" 
      class="fixed inset-0 pointer-events-none z-50"
    />
    
    <div class="container mx-auto p-8 relative z-10">
      <h1 class="text-3xl font-bold mb-4 text-white">Advanced Fluid Cursor</h1>
      <p class="mb-4 text-gray-300">This demo shows fluid dynamics with custom color.</p>
      <button 
        @click="togglePause" 
        class="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {{ isPaused ? 'Resume' : 'Pause' }} Simulation
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFluidCursor } from '#imports'

const canvasRef = ref(null)
const isPaused = ref(false)

const togglePause = () => {
  isPaused.value = !isPaused.value
  // You would need to access the internal config to pause/resume
}

onMounted(() => {
  useFluidCursor(canvasRef, { color: 'blue' })
})
</script>
```