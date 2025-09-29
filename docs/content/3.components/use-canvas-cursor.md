---
title: useCanvasCursor
description: Custom cursor implementation with canvas-based effects.
navigation:
  icon: i-lucide-mouse-pointer
---

# useCanvasCursor

The useCanvasCursor composable provides a custom cursor implementation with canvas-based effects. It creates animated trailing effects that follow the mouse cursor.

## Usage

```ts
import { useCanvasCursor } from '#imports'
import { ref, onMounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  useCanvasCursor(canvasRef, { color: 'blue' })
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
  Color for the cursor effect.
  ::
::

## Methods

::field-group
  ::field{name="init" type="function"}
  Initialize the canvas cursor.
  ::
  
  ::field{name="destroy" type="function"}
  Destroy the canvas cursor and clean up resources.
  ::
::

## Configuration Options

The composable uses internal configuration for the cursor effects:

```ts
const config = {
  friction: 0.5,     // Movement friction
  trails: 20,        // Number of trailing lines
  size: 50,          // Size of the effect
  dampening: 0.25,   // Movement dampening
  tension: 0.98      // Line tension
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
      <h1>Canvas Cursor Demo</h1>
      <p>Move your cursor around to see the canvas-based effects.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCanvasCursor } from '#imports'

const canvasRef = ref(null)

onMounted(() => {
  useCanvasCursor(canvasRef, { color: 'purple' })
})
</script>
```

## Advanced Example

```vue
<template>
  <div class="relative min-h-screen">
    <canvas 
      ref="canvasRef" 
      class="fixed inset-0 pointer-events-none z-50"
    />
    
    <div class="container mx-auto p-8">
      <h1 class="text-3xl font-bold mb-4">Advanced Canvas Cursor</h1>
      <p class="mb-4">This demo shows a custom colored cursor effect.</p>
      <button 
        @click="changeColor" 
        class="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Change Color
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCanvasCursor } from '#imports'

const canvasRef = ref(null)
const colors = ['red', 'green', 'blue', 'purple', 'orange']
let currentColorIndex = 0

const changeColor = () => {
  currentColorIndex = (currentColorIndex + 1) % colors.length
  // Reinitialize cursor with new color
  if (canvasRef.value) {
    useCanvasCursor(canvasRef, { color: colors[currentColorIndex] })
  }
}

onMounted(() => {
  useCanvasCursor(canvasRef, { color: colors[currentColorIndex] })
})
</script>
```