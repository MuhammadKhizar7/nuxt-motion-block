---
title: useFluidCursor
description: Fluid cursor effects with particle systems.
navigation:
  icon: i-lucide-droplets
---

# useFluidCursor

The useFluidCursor composable provides advanced fluid simulation cursor effects using WebGL. It creates realistic fluid dynamics for cursor interactions with customizable colors and physics.

## Usage

```vue
<template>
  <canvas ref="canvasRef" class="fixed inset-0 pointer-events-none z-50" />
</template>

<script setup>
import { ref } from 'vue'
import { useFluidCursor } from '#imports'

const canvasRef = ref()
useFluidCursor(canvasRef, { color: 'secondary' })
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
  Color of the fluid effect. Can be a theme color name.
  ::
::

## Configuration

The composable uses the following internal configuration:

```ts
const config = {
  SIM_RESOLUTION: 128,
  DYE_RESOLUTION: 1440,
  CAPTURE_RESOLUTION: 512,
  DENSITY_DISSIPATION: 3.5,
  VELOCITY_DISSIPATION: 2,
  PRESSURE: 0.1,
  PRESSURE_ITERATIONS: 20,
  CURL: 3,
  SPLAT_RADIUS: 0.2,
  SPLAT_FORCE: 6000,
  SHADING: true,
  COLOR_UPDATE_SPEED: 10,
  PAUSED: false,
  BACK_COLOR: { r: 0.5, g: 0, b: 0 },
  TRANSPARENT: true
}
```

## Example

```vue
<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <canvas ref="canvasRef" class="fixed inset-0 pointer-events-none z-50" />
    <div class="container mx-auto px-4 py-8 relative z-10">
      <h1 class="text-4xl font-bold mb-6">Fluid Cursor Demo</h1>
      <p class="text-xl mb-8">Move your cursor to create fluid dynamics effects</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gray-800 p-6 rounded-lg">
          <h2 class="text-2xl font-semibold mb-3">Realistic Physics</h2>
          <p>Experience fluid dynamics with realistic viscosity and movement.</p>
        </div>
        <div class="bg-gray-800 p-6 rounded-lg">
          <h2 class="text-2xl font-semibold mb-3">Interactive</h2>
          <p>Every cursor movement creates unique fluid interactions.</p>
        </div>
        <div class="bg-gray-800 p-6 rounded-lg">
          <h2 class="text-2xl font-semibold mb-3">Customizable</h2>
          <p>Adjust colors and physics parameters for different effects.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFluidCursor } from '#imports'

const canvasRef = ref()
useFluidCursor(canvasRef, { color: 'primary' })
</script>
```