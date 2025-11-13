---
title: useCanvasCursor
description: Custom cursor implementation with canvas-based effects.
navigation:
  icon: i-lucide-mouse-pointer-2
---

# useCanvasCursor

The useCanvasCursor composable provides a custom cursor implementation with canvas-based effects. It creates fluid, animated cursor trails that follow mouse movements.

## Usage

```vue
<template>
  <canvas ref="canvasRef" class="fixed inset-0 pointer-events-none z-50" />
</template>

<script setup>
import { ref } from 'vue'
import { useCanvasCursor } from '#imports'

const canvasRef = ref()
useCanvasCursor(canvasRef, { color: 'primary' })
</script>
```

## Parameters

::field-group
  ::field{name="canvasRef" type="Ref<HTMLCanvasElement>"}
  Reference to the canvas element.
  ::
  
  ::field{name="options" type="object" default="{}"}
  Configuration options.
  ::
  
  ::field{type="object" name="options.color" default="undefined"}
  Color of the cursor trail. Can be a theme color name or 'random'.
  ::
::

## Configuration

The composable uses the following internal configuration:

```ts
const config = {
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98
}
```

## Example

```vue
<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <canvas ref="canvasRef" class="fixed inset-0 pointer-events-none z-50" />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">Canvas Cursor Demo</h1>
      <p class="mb-4">Move your cursor around to see the fluid trail effect.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-2">Feature 1</h2>
          <p>Content with smooth cursor effects.</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-2">Feature 2</h2>
          <p>More content with cursor interactions.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCanvasCursor } from '#imports'

const canvasRef = ref()
useCanvasCursor(canvasRef, { color: 'primary' })
</script>
```