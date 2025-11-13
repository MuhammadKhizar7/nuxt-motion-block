---
title: Flowing Stroke
description: Animated flowing stroke effect with customizable wave path and animation properties.
navigation:
  icon: i-lucide-waveform
---

# Flowing Stroke

The FlowingStroke component creates an animated flowing stroke effect with a customizable wave path and animation properties. It's perfect for creating dynamic visual elements that respond to user interaction.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="flowing-stroke-example" />
  :::
#code
```vue
<template>
  <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Flowing Stroke</h3>
    <MFlowingStroke
      :width="400"
      :height="150"
      :ribbon="20"
      :dash="40"
      :gap="25"
      :speed="1.5"
    />
  </div>
</template>
```
::

## Props

::field-group
  ::field{name="width" type="number" default="1200"}
  Width of the canvas in pixels.
  ::
  
  ::field{name="height" type="number" default="220"}
  Height of the canvas in pixels.
  ::
  
  ::field{name="ribbon" type="number" default="18"}
  Base ribbon stroke width.
  ::
  
  ::field{name="stripeInset" type="number" default="4"}
  How much thinner the stripe layer is.
  ::
  
  ::field{name="dash" type="number" default="34"}
  Dash length.
  ::
  
  ::field{name="gap" type="number" default="22"}
  Gap length.
  ::
  
  ::field{name="speed" type="number" default="1"}
  Multiplier for stripe travel speed.
  ::
::

## Examples

### Basic Flowing Stroke

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="flowing-stroke-basic" />
  :::
#code
```vue
<template>
  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Basic Flowing Stroke</h3>
    <MFlowingStroke
      :width="300"
      :height="100"
    />
  </div>
</template>
```
::

### Custom Flowing Stroke

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="flowing-stroke-custom" />
  :::
#code
```vue
<template>
  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Custom Flowing Stroke</h3>
    <MFlowingStroke
      :width="500"
      :height="200"
      :ribbon="25"
      :stripe-inset="6"
      :dash="50"
      :gap="30"
      :speed="2"
    />
  </div>
</template>
```
::