---
title: Directional Light
description: SVG-based directional light effect with customizable colors and positioning.
navigation:
  icon: i-lucide-sun
---

# Directional Light

The DirectionalLight component creates an SVG-based directional light effect that can be used to add ambient lighting to your UI. It features customizable colors, positioning, and smooth animations.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="directional-light-example" />
  :::
#code
```vue
<template>
  <div class="relative h-64 w-full overflow-hidden rounded-lg border bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
    <MDirectionalLight class="left-0 top-0" fill="#3B82F6" />
    <MDirectionalLight class="left-1/3 top-1/4" fill="#8B5CF6" />
    <MDirectionalLight class="left-2/3 top-1/2" fill="#EF4444" />
    <div class="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Directional Light</h3>
      <p class="text-gray-700 dark:text-gray-300">Multiple directional lights with different colors and positions</p>
    </div>
  </div>
</template>
```
::

## Props

::field-group
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the light element for positioning and styling.
  ::
  
  ::field{name="fill" type="string" default="'white'"}
  Fill color for the light effect.
  ::
::

## Examples

### Basic Directional Light

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="directional-light-basic" />
  :::
#code
```vue
<template>
  <div class="relative h-64 w-full overflow-hidden rounded-lg border bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800">
    <MDirectionalLight />
    <div class="relative z-10 h-full flex items-center justify-center">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">Basic Directional Light</h3>
    </div>
  </div>
</template>
```
::

### Custom Colors

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="directional-light-custom-colors" />
  :::
#code
```vue
<template>
  <div class="relative h-64 w-full overflow-hidden rounded-lg border bg-gradient-to-br from-purple-50 to-pink-100 dark:from-slate-900 dark:to-slate-800">
    <MDirectionalLight fill="#EC4899" class="left-1/2 top-1/2" />
    <div class="relative z-10 h-full flex items-center justify-center">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">Pink Directional Light</h3>
    </div>
  </div>
</template>
```
::

### Multiple Lights

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="directional-light-example" />
  :::
#code
```vue
<template>
  <div class="relative h-64 w-full overflow-hidden rounded-lg border bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
    <MDirectionalLight class="left-0 top-0" fill="#3B82F6" />
    <MDirectionalLight class="left-1/3 top-1/4" fill="#8B5CF6" />
    <MDirectionalLight class="left-2/3 top-1/2" fill="#EF4444" />
    <div class="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Directional Light</h3>
      <p class="text-gray-700 dark:text-gray-300">Multiple directional lights with different colors and positions</p>
    </div>
  </div>
</template>
```
::