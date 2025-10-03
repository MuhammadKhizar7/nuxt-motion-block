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
  ::field{name="maxAngle" type="number" default="15"}
  Maximum tilt angle.
  ::
  
  ::field{name="perspective" type="number" default="1000"}
  3D perspective.
  ::
  
  ::field{name="scale" type="number" default="1.05"}
  Scale on tilt.
  ::
  
  ::field{name="speed" type="number" default="500"}
  Transition speed.
  ::
  
  ::field{name="reset" type="boolean" default="true"}
  Reset on leave.
  ::
::

## Slots

::field-group
  ::field{name="default" type="{ tilt: number, rotate: number }"}
  Tilted content with state.
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

### Custom Angle and Scale

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTilt{:max-angle="25" :scale="1.1" :speed="300"}
      :::div{class="p-6 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl shadow-xl"}
        :::h3{class="text-xl font-bold mb-2"}
        Custom Tilt
        :::
        :::p
        Increased angle and scale effect
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTilt 
      :max-angle="25" 
      :scale="1.1"
      :speed="300"
    >
      <div class="p-6 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl shadow-xl">
        <h3 class="text-xl font-bold mb-2">Custom Tilt</h3>
        <p>Increased angle and scale effect</p>
      </div>
    </MTilt>
  </div>
</template>
```
::

### With Slot Data

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTilt{:max-angle="20"}
      :::template{#default="{ tilt, rotate }"}
        :::div{class="p-6 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-xl shadow-xl transition-all" :style="{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }"}
          :::h3{class="text-xl font-bold mb-2"}
          Advanced Tilt
          :::
          :::p{class="mb-2"}
          Tilt values: {{ Math.round(tilt) }}°
          :::
          :::p
          Rotate X: {{ Math.round(rotate.x) }}°, Y: {{ Math.round(rotate.y) }}°
          :::
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTilt :max-angle="20">
      <template #default="{ tilt, rotate }">
        <div 
          class="p-6 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-xl shadow-xl transition-all"
          :style="{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }"
        >
          <h3 class="text-xl font-bold mb-2">Advanced Tilt</h3>
          <p class="mb-2">Tilt values: {{ Math.round(tilt) }}°</p>
          <p>Rotate X: {{ Math.round(rotate.x) }}°, Y: {{ Math.round(rotate.y) }}°</p>
        </div>
      </template>
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
  :::div{class="p-4"}
    :::MTilt{:max-angle="10" :scale="1.03"}
      :::div{class="max-w-sm bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl"}
        :::div{class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48"}
        :::
        :::div{class="p-6"}
          :::h3{class="text-xl font-bold mb-2"}
          Tilt Card
          :::
          :::p{class="text-gray-600 dark:text-gray-300 mb-4"}
          This card has a subtle tilt effect that responds to cursor movement.
          :::
          :::button{class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"}
          Click Me
          :::
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTilt :max-angle="10" :scale="1.03">
      <div class="max-w-sm bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl">
        <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">Tilt Card</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            This card has a subtle tilt effect that responds to cursor movement.
          </p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Click Me
          </button>
        </div>
      </div>
    </MTilt>
  </div>
</template>
```
::