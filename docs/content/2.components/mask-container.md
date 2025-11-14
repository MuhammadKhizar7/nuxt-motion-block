---
title: Mask Container
description: Interactive mask reveal effect that follows cursor movement with customizable size.
navigation:
  icon: i-lucide-eye
---

# Mask Container

The MaskContainer component creates an interactive mask reveal effect that follows cursor movement. It features customizable mask sizes and smooth transitions between states.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="mask-container-example" />
  :::
#code
```vue
<template>
  <MMaskContainer
    :size="5"
    :reveal-size="800"
    class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800"
  >
    <template #content>
      <span class="text-black dark:text-white">Hover to Reveal</span>
    </template>

    <template #reveal>
      <div class="text-center">
        <h2 class="text-5xl font-bold text-black dark:text-white mb-6">
          Mask Reveal Effect
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Move your cursor around to reveal the content behind the mask. 
          The mask follows your cursor position with a smooth animation.
        </p>
      </div>
    </template>
  </MMaskContainer>
</template>
```
::

## Props

::field-group
  ::field{name="size" type="number" default="10"}
  Initial size of the mask in pixels.
  ::
  
  ::field{name="revealSize" type="number" default="600"}
  Size of the mask when revealed in pixels.
  ::
  
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the container.
  ::
::

## Slots

::field-group
  ::field{name="content" type="slot"}
  Content to display behind the mask.
  ::
  
  ::field{name="reveal" type="slot"}
  Content to reveal through the mask.
  ::
::

## Examples

### Basic Mask Container

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="mask-container-basic" />
  :::
#code
```vue
<template>
  <MMaskContainer class="bg-gray-100 dark:bg-gray-900">
    <template #content>
      <span class="text-black dark:text-white">Mask Container</span>
    </template>

    <template #reveal>
      <div class="text-center p-8">
        <h3 class="text-2xl font-bold text-black dark:text-white mb-2">
          Basic Mask
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          Move your cursor to reveal content
        </p>
      </div>
    </template>
  </MMaskContainer>
</template>
```
::

### Custom Mask Size

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="mask-container-custom" />
  :::
#code
```vue
<template>
  <MMaskContainer
    :size="20"
    :reveal-size="1000"
    class="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-slate-900 dark:to-slate-800 min-h-96"
  >
    <template #content>
      <span class="text-black dark:text-white">Large Reveal Area</span>
    </template>

    <template #reveal>
      <div class="text-center p-8">
        <h3 class="text-3xl font-bold text-black dark:text-white mb-4">
          Custom Mask Size
        </h3>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto">
          Larger initial mask with bigger reveal area for more content visibility
        </p>
      </div>
    </template>
  </MMaskContainer>
</template>
```
::
