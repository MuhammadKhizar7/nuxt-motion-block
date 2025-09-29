---
title: Flowing Stroke
description: Animated stroke effect that flows along SVG paths.
navigation:
  icon: i-lucide-waves
---

# Flowing Stroke

The FlowingStroke component creates an animated stroke effect that flows along SVG paths. It's perfect for adding dynamic visual effects to illustrations, logos, and decorative elements.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MFlowingStroke
    :::
  :::
#code
```vue
<template>
  <MFlowingStroke />
</template>
```
::

## Props

::field-group
  ::field{name="width" type="number" default="1200"}
  Width of the SVG canvas.
  ::
  
  ::field{name="height" type="number" default="220"}
  Height of the SVG canvas.
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
  :::div{class="p-4"}
    :::MFlowingStroke
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MFlowingStroke />
  </div>
</template>
```
::

### Custom Size

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MFlowingStroke{:width="600" :height="150"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MFlowingStroke :width="600" :height="150" />
  </div>
</template>
```
::

### Custom Style

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MFlowingStroke{:ribbon="24" :stripe-inset="6" :dash="40" :gap="15" :speed="1.5"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MFlowingStroke 
      :ribbon="24" 
      :stripe-inset="6" 
      :dash="40" 
      :gap="15" 
      :speed="1.5"
    />
  </div>
</template>
```
::