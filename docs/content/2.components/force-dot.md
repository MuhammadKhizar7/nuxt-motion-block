---
title: Force Dot
description: Interactive dot with physics-based movement.
navigation:
  icon: i-lucide-circle-dot
---

# Force Dot

The ForceDot component creates interactive dots with physics-based movement. Dots respond to mouse interactions with repulsion or attraction forces, and collide with each other and container boundaries.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MForceDot
    :::
  :::
#code
```vue
<template>
  <MForceDot />
</template>
```
::

## Props

::field-group
  ::field{name="count" type="number" default="80"}
  Number of dots.
  ::
  
  ::field{name="width" type="number" default="600"}
  Width of the container.
  ::
  
  ::field{name="height" type="number" default="600"}
  Height of the container.
  ::
  
  ::field{name="radius" type="number" default="12"}
  Collision radius of dots.
  ::
  
  ::field{name="repel" type="boolean" default="true"}
  Enable mouse repulsion.
  ::
  
  ::field{name="attract" type="boolean" default="false"}
  Enable mouse attraction.
  ::
  
  ::field{name="influenceRadius" type="number" default="250"}
  Radius of mouse effect in pixels.
  ::
  
  ::field{name="maxForce" type="number" default="3"}
  Strength of mouse effect.
  ::
  
  ::field{name="speed" type="number" default="1"}
  Velocity multiplier.
  ::
  
  ::field{name="dotClass" type="string" default="'fill-neutral-200'"}
  CSS classes for dots.
  ::
::

## Examples

### Basic Force Dot

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MForceDot
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MForceDot />
  </div>
</template>
```
::

### Custom Size and Dot Count

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MForceDot{:count="50" :width="400" :height="400"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MForceDot :count="50" :width="400" :height="400" />
  </div>
</template>
```
::

### With Attraction Force

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MForceDot{:repel="false" :attract="true" :max-force="5"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MForceDot 
      :repel="false" 
      :attract="true" 
      :max-force="5"
    />
  </div>
</template>
```
::

### Custom Styling

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MForceDot{dot-class="fill-blue-500" :radius="8"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MForceDot 
      dot-class="fill-blue-500" 
      :radius="8"
    />
  </div>
</template>
```
::