---
title: Tilt
description: 3D tilt effect based on cursor movement.
navigation:
  icon: i-lucide-rotate-ccw
---

# Tilt

The Tilt component adds a 3D tilt effect to elements based on cursor movement. It's perfect for creating interactive cards, images, and other UI elements that respond to user movement.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTilt
      :::div{class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"}
        :::h3{class="text-lg font-medium mb-2"}
        Tilt Effect
        :::
        :::p
        Move your cursor around to see the 3D tilt effect.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <MTilt>
    <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h3 class="text-lg font-medium mb-2">Tilt Effect</h3>
      <p>Move your cursor around to see the 3D tilt effect.</p>
    </div>
  </MTilt>
</template>
```
::

## Props

::field-group
  ::field{name="rotationFactor" type="number" default="15"}
  Rotation factor for tilt effect.
  ::
  
  ::field{name="isReverse" type="boolean" default="false"}
  Reverse tilt direction.
  ::
  
  ::field{name="springOptions" type="SpringOptions" default="{}"}
  Spring animation options.
  ::
  
  ::field{name="className" type="string" default="''"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="style" type="object" default="{}"}
  CSS styles to apply to the container.
  ::
::

## Slots

::field-group
  ::field{name="default"}
  Tilted content.
  ::
::

## Examples

### Basic Tilt

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTilt
      :::div{class="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl shadow-xl"}
        :::h3{class="text-xl font-bold mb-2"}
        Basic Tilt
        :::
        :::p
        Move your cursor to see the tilt effect
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTilt>
      <div class="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl shadow-xl">
        <h3 class="text-xl font-bold mb-2">Basic Tilt</h3>
        <p>Move your cursor to see the tilt effect</p>
      </div>
    </MTilt>
  </div>
</template>
```
::

### Custom Rotation Factor

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTilt{:rotation-factor="25"}
      :::div{class="p-6 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl shadow-xl"}
        :::h3{class="text-xl font-bold mb-2"}
        Custom Tilt
        :::
        :::p
        Increased rotation effect
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTilt :rotation-factor="25">
      <div class="p-6 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl shadow-xl">
        <h3 class="text-xl font-bold mb-2">Custom Tilt</h3>
        <p>Increased rotation effect</p>
      </div>
    </MTilt>
  </div>
</template>
```
::

### Reverse Direction

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTilt{:rotation-factor="20" :is-reverse="true"}
      :::div{class="p-6 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-xl shadow-xl"}
        :::h3{class="text-xl font-bold mb-2"}
        Reverse Tilt
        :::
        :::p
        Reversed tilt direction
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTilt :rotation-factor="20" :is-reverse="true">
      <div class="p-6 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-xl shadow-xl">
        <h3 class="text-xl font-bold mb-2">Reverse Tilt</h3>
        <p>Reversed tilt direction</p>
      </div>
    </MTilt>
  </div>
</template>
```
::

### With Custom Spring Options

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTilt{:rotation-factor="15" :spring-options="{ stiffness: 200, damping: 15 }"}
      :::div{class="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl shadow-xl"}
        :::h3{class="text-xl font-bold mb-2"}
        Smooth Tilt
        :::
        :::p
        Custom spring animation
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTilt 
      :rotation-factor="15" 
      :spring-options="{ stiffness: 200, damping: 15 }"
    >
      <div class="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl shadow-xl">
        <h3 class="text-xl font-bold mb-2">Smooth Tilt</h3>
        <p>Custom spring animation</p>
      </div>
    </MTilt>
  </div>
</template>
```
::

### Card with Image

::code-preview
---
label: Preview
---
::div
  ::component-example{name="tilt-card"}
::
#code
```vue
<template>
  <div class="p-4">
    <MTilt :rotation-factor="10">
      <div class="max-w-sm bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl">
        <div class="bg-gradient-to-r from-[#0d9488] to-[#14b8a6] h-48 flex items-center justify-center">
          <span class="text-white text-2xl font-bold">TEAL GRADIENT</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">Theme-Aligned Tilt</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            This card uses theme-consistent teal colors with a subtle tilt effect.
          </p>
          <button class="px-4 py-2 bg-[#0d9488] text-white rounded-lg hover:bg-[#14b8a6] transition-colors">
            Click Me
          </button>
        </div>
      </div>
    </MTilt>
  </div>
</template>
```
::

### Manual Trigger Example

::code-preview
---
label: Preview
---
::div
  ::component-example{name="tilt-manual"}
::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <MTilt :rotation-factor="rotationFactor" :key="tiltKey">
      <div class="p-6 bg-gradient-to-br from-[#0d9488] to-[#14b8a6] text-white rounded-xl shadow-xl">
        <h3 class="text-xl font-bold mb-2">Manual Tilt</h3>
        <p>Click the button to reset the tilt effect</p>
      </div>
    </MTilt>
    <button 
      class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      @click="resetTilt"
    >
      Reset Tilt
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const rotationFactor = ref(15)
const tiltKey = ref(0)

const resetTilt = () => {
  tiltKey.value++
}
</script>
```
::
