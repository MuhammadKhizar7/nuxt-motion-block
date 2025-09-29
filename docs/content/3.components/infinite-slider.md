---
title: Infinite Slider
description: Continuously sliding content with seamless looping.
navigation:
  icon: i-lucide-move-horizontal
---

# Infinite Slider

The InfiniteSlider component creates continuously sliding content with seamless looping. It's perfect for displaying logos, testimonials, or any content that needs to scroll infinitely.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MInfiniteSlider
      :::div{class="flex space-x-8"}
        :::div{class="bg-blue-500 text-white px-6 py-3 rounded"}
        Slide 1
        :::
        :::div{class="bg-green-500 text-white px-6 py-3 rounded"}
        Slide 2
        :::
        :::div{class="bg-purple-500 text-white px-6 py-3 rounded"}
        Slide 3
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <MInfiniteSlider>
    <div class="flex space-x-8">
      <div class="bg-blue-500 text-white px-6 py-3 rounded">
        Slide 1
      </div>
      <div class="bg-green-500 text-white px-6 py-3 rounded">
        Slide 2
      </div>
      <div class="bg-purple-500 text-white px-6 py-3 rounded">
        Slide 3
      </div>
    </div>
  </MInfiniteSlider>
</template>
```
::

## Props

::field-group
  ::field{name="className" type="string" default="undefined"}
  CSS classes to apply to the slider container.
  ::
  
  ::field{name="duration" type="number" default="40"}
  Animation duration in seconds.
  ::
::

## Examples

### Basic Infinite Slider

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MInfiniteSlider
      :::div{class="flex space-x-6"}
        :::div{class="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-3 rounded-lg shadow"}
        Item 1
        :::
        :::div{class="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-lg shadow"}
        Item 2
        :::
        :::div{class="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-3 rounded-lg shadow"}
        Item 3
        :::
        :::div{class="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-6 py-3 rounded-lg shadow"}
        Item 4
        :::
        :::div{class="bg-gradient-to-r from-rose-400 to-rose-600 text-white px-6 py-3 rounded-lg shadow"}
        Item 5
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MInfiniteSlider>
      <div class="flex space-x-6">
        <div class="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-3 rounded-lg shadow">
          Item 1
        </div>
        <div class="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-lg shadow">
          Item 2
        </div>
        <div class="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-3 rounded-lg shadow">
          Item 3
        </div>
        <div class="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-6 py-3 rounded-lg shadow">
          Item 4
        </div>
        <div class="bg-gradient-to-r from-rose-400 to-rose-600 text-white px-6 py-3 rounded-lg shadow">
          Item 5
        </div>
      </div>
    </MInfiniteSlider>
  </div>
</template>
```
::

### Fast Animation

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MInfiniteSlider{:duration="20"}
      :::div{class="flex space-x-4"}
        :::div{class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded"}
        Fast 1
        :::
        :::div{class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded"}
        Fast 2
        :::
        :::div{class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded"}
        Fast 3
        :::
        :::div{class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded"}
        Fast 4
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MInfiniteSlider :duration="20">
      <div class="flex space-x-4">
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded">
          Fast 1
        </div>
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded">
          Fast 2
        </div>
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded">
          Fast 3
        </div>
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded">
          Fast 4
        </div>
      </div>
    </MInfiniteSlider>
  </div>
</template>
```
::

### With Custom Styling

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MInfiniteSlider{class-name="gap-8"}
      :::div{class="flex"}
        :::div{class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl shadow-lg"}
        Styled Slide 1
        :::
        :::div{class="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-8 py-4 rounded-xl shadow-lg"}
        Styled Slide 2
        :::
        :::div{class="bg-gradient-to-r from-lime-500 to-green-500 text-white px-8 py-4 rounded-xl shadow-lg"}
        Styled Slide 3
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MInfiniteSlider class-name="gap-8">
      <div class="flex">
        <div class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl shadow-lg">
          Styled Slide 1
        </div>
        <div class="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-8 py-4 rounded-xl shadow-lg">
          Styled Slide 2
        </div>
        <div class="bg-gradient-to-r from-lime-500 to-green-500 text-white px-8 py-4 rounded-xl shadow-lg">
          Styled Slide 3
        </div>
      </div>
    </MInfiniteSlider>
  </div>
</template>
```
::