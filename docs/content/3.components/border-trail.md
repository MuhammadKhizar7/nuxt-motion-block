---
title: Border Trail
description: Animated border effect with trailing particles.
navigation:
  icon: i-lucide-square
---

# Border Trail

The BorderTrail component creates an animated border effect with trailing particles. It's perfect for adding visual interest to cards, buttons, or any container element.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MBorderTrail
      :::div{class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow"}
        :::h3{class="text-lg font-medium mb-2"}
        Border Trail Effect
        :::
        :::p
        This element has an animated border trail effect.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <MBorderTrail>
    <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 class="text-lg font-medium mb-2">Border Trail Effect</h3>
      <p>This element has an animated border trail effect.</p>
    </div>
  </MBorderTrail>
</template>
```
::

## Props

::field-group
  ::field{name="class" type="string" default="undefined"}
  CSS classes to apply to the trail element.
  ::
  
  ::field{name="size" type="number" default="60"}
  Size of the trail element in pixels.
  ::
  
  ::field{name="transition" type="object" default="{ repeat: Infinity, duration: 5, ease: 'linear' }"}
  Animation transition options.
  ::
  
  ::field{name="onAnimationComplete" type="function" default="undefined"}
  Callback function when animation completes.
  ::
  
  ::field{name="style" type="object" default="undefined"}
  Custom styles to apply to the trail element.
  ::
::

## Examples

### Basic Border Trail

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MBorderTrail
      :::div{class="p-6 bg-white dark:bg-gray-800 rounded-lg"}
        :::h3{class="text-lg font-medium mb-2"}
        Basic Border Trail
        :::
        :::p
        This card has a simple border trail effect.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MBorderTrail>
      <div class="p-6 bg-white dark:bg-gray-800 rounded-lg">
        <h3 class="text-lg font-medium mb-2">Basic Border Trail</h3>
        <p>This card has a simple border trail effect.</p>
      </div>
    </MBorderTrail>
  </div>
</template>
```
::

### Custom Trail Size and Color

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MBorderTrail{:size="40" class="bg-blue-500"}
      :::div{class="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg"}
        :::h3{class="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400"}
        Custom Border Trail
        :::
        :::p
        This card has a blue border trail with custom size.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MBorderTrail :size="40" class="bg-blue-500">
      <div class="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 class="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">Custom Border Trail</h3>
        <p>This card has a blue border trail with custom size.</p>
      </div>
    </MBorderTrail>
  </div>
</template>
```
::

### Custom Animation Transition

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MBorderTrail{:transition="{ repeat: Infinity, duration: 5, ease: 'easeInOut' }" class="bg-purple-500"}
      :::div{class="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg"}
        :::h3{class="text-lg font-medium mb-2 text-purple-600 dark:text-purple-400"}
        Slow Animation
        :::
        :::p
        This card has a slower border trail animation.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MBorderTrail 
      :transition="{ repeat: Infinity, duration: 5, ease: 'easeInOut' }" 
      class="bg-purple-500"
    >
      <div class="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
        <h3 class="text-lg font-medium mb-2 text-purple-600 dark:text-purple-400">Slow Animation</h3>
        <p>This card has a slower border trail animation.</p>
      </div>
    </MBorderTrail>
  </div>
</template>
```
::