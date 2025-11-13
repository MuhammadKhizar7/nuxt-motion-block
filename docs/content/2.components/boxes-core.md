---
title: Boxes Core
description: Animated grid of boxes with hover effects and customizable colors.
navigation:
  icon: i-lucide-grid-2x2
---

# Boxes Core

The BoxesCore component creates an animated grid of boxes with hover effects and customizable colors. It's perfect for creating dynamic background patterns and visual effects.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="boxes-core-example" />
  :::
#code
```vue
<template>
  <UCard class="relative overflow-hidden">
    <template #header>
      <h2 class="text-xl font-semibold">
        Boxes Core
      </h2>
    </template>
    <p class="text-gray-600 dark:text-gray-400 mb-4">
      Animated boxes core effect
    </p>
    <MBoxesCore
      class="h-64 w-full"
      :rows="50"
      :cols="30"
    />
  </UCard>
</template>
```
::

## Props

::field-group
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="rows" type="number" default="150"}
  Number of rows in the grid.
  ::
  
  ::field{name="cols" type="number" default="100"}
  Number of columns in the grid.
  ::
  
  ::field{name="colors" type="string[]" default="['var(--color-primary-500)', 'var(--color-pink-500)', 'var(--color-emerald-500)', 'var(--color-yellow-500)', 'var(--color-red-500)', 'var(--color-purple-500)', 'var(--color-primary-500)', 'var(--color-indigo-500)', 'var(--color-violet-500)']"}
  Array of colors to use for hover effects.
  ::
  
  ::field{name="skew" type="boolean" default="true"}
  Whether to apply skew transformation to the grid.
  ::
  
  ::field{name="showPlusSigns" type="boolean" default="true"}
  Whether to show plus signs at grid intersections.
  ::
::

## Examples

### Basic Boxes Core

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="boxes-core-basic" />
  :::
#code
```vue
<template>
  <div class="relative h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
    <MBoxesCore
      class="h-full w-full"
      :rows="30"
      :cols="20"
    />
    <div class="relative z-10 h-full flex items-center justify-center">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">Basic Boxes Core</h3>
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
    <component-example name="boxes-core-custom" />
  :::
#code
```vue
<template>
  <div class="relative h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
    <MBoxesCore
      class="h-full w-full"
      :rows="80"
      :cols="40"
      :colors="['var(--color-red-500)', 'var(--color-orange-500)', 'var(--color-yellow-500)']"
      :show-plus-signs="false"
    />
    <div class="relative z-10 h-full flex items-center justify-center">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">Custom Boxes Core</h3>
    </div>
  </div>
</template>
```
::