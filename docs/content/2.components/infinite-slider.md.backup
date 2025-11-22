---
title: Infinite Slider
description: Infinite horizontal slider with customizable duration and content.
navigation:
  icon: i-lucide-move-horizontal
---

# Infinite Slider

The InfiniteSlider component creates an infinite horizontal sliding animation with customizable duration. It's perfect for creating continuous scrolling effects for logos, cards, or other content.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="infinite-slider-example" />
  :::
#code
```vue
<template>
  <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Infinite Slider</h3>
    <MInfiniteSlider :duration="20" class="gap-4">
      <div
        v-for="i in 10"
        :key="i"
        class="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl"
      >
        {{ i }}
      </div>
    </MInfiniteSlider>
  </div>
</template>
```
::

## Props

::field-group
  ::field{name="className" type="string" default="''"}
  CSS classes to apply to the slider container.
  ::
  
  ::field{name="duration" type="number" default="40"}
  Duration of the animation in seconds.
  ::
::

## Examples

### Basic Infinite Slider

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="infinite-slider-basic" />
  :::
#code
```vue
<template>
  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Basic Infinite Slider</h3>
    <MInfiniteSlider class="gap-2">
      <div
        v-for="i in 5"
        :key="i"
        class="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
      >
        {{ i }}
      </div>
    </MInfiniteSlider>
  </div>
</template>
```
::

### Slow Infinite Slider

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="infinite-slider-slow" />
  :::
#code
```vue
<template>
  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Slow Infinite Slider</h3>
    <MInfiniteSlider :duration="60" class="gap-6">
      <div
        v-for="i in 8"
        :key="i"
        class="flex-shrink-0 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl"
      >
        {{ i }}
      </div>
    </MInfiniteSlider>
  </div>
</template>
```
::
