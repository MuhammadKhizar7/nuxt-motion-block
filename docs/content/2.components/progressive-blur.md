---
title: Progressive Blur
description: Progressive blur effect that increases with distance from focus.
navigation:
  icon: i-lucide-eye
---

# Progressive Blur

The `ProgressiveBlur` component creates a progressive blur effect that increases with distance from focus. It's perfect for creating depth effects and visual hierarchy in your UI.

The component works by applying a `backdrop-filter: blur()` to a series of layers, each with a different mask. This means it blurs the content *behind* it.

## Usage

::code-preview
---
label: Preview
---
  :::UCard{class="relative w-full h-64 overflow-hidden"}
    :::img{src="/hingol-national-park.jpg" alt="Hingol National Park" class="absolute inset-0 w-full h-full object-cover"}
    :::MProgressiveBlur
    :::
    :::div{class="absolute inset-0 flex items-center justify-center"}
      :::h3{class="text-white text-2xl font-bold"}
      Content on top
      :::
    :::
  :::
#code
```vue
<template>
  <UCard class="relative w-full h-64 overflow-hidden">
    <img src="/hingol-national-park.jpg" alt="Hingol National Park" class="absolute inset-0 w-full h-full object-cover" />
    <MProgressiveBlur />
    <div class="absolute inset-0 flex items-center justify-center">
      <h3 class="text-white text-2xl font-bold">Content on top</h3>
    </div>
  </UCard>
</template>
```
::

## Props

::field-group
  ::field{name="direction" type="'top' | 'right' | 'bottom' | 'left'" default="'bottom'"}
  Direction of the blur effect.
  ::
  
  ::field{name="blurLayers" type="number" default="8"}
  Number of blur layers.
  ::
  
  ::field{name="className" type="string" default="''"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="blurIntensity" type="number" default="0.25"}
  Intensity of the blur effect.
  ::
  
  ::field{name="animate" type="string | object" default="undefined"}
  Animation configuration.
  ::
  
  ::field{name="variants" type="object" default="undefined"}
  Animation variants.
  ::
  
  ::field{name="transition" type="object" default="undefined"}
  Transition configuration.
  ::
  
  ::field{name="initial" type="string | object" default="undefined"}
  Initial state configuration.
  ::
::

## Examples

### Blur Direction

You can change the direction of the blur effect using the `direction` prop.

::code-preview
---
label: Preview
---
  :::div{class="grid grid-cols-2 gap-4 w-full"}
    :::UCard{class="relative w-full h-64 overflow-hidden"}
      :::img{src="/hingol-national-park.jpg" alt="Hingol National Park" class="absolute inset-0 w-full h-full object-cover"}
      :::MProgressiveBlur{direction="top"}
      :::
      :::div{class="absolute inset-0 flex items-start justify-center pt-4"}
        :::h3{class="text-white text-xl font-bold"}
        Top
        :::
      :::
    :::
    :::UCard{class="relative w-full h-64 overflow-hidden"}
      :::img{src="/hingol-national-park.jpg" alt="Hingol National Park" class="absolute inset-0 w-full h-full object-cover"}
      :::MProgressiveBlur{direction="right"}
      :::
      :::div{class="absolute inset-0 flex items-center justify-end pr-4"}
        :::h3{class="text-white text-xl font-bold"}
        Right
        :::
      :::
    :::
    :::UCard{class="relative w-full h-64 overflow-hidden"}
      :::img{src="/hingol-national-park.jpg" alt="Hingol National Park" class="absolute inset-0 w-full h-full object-cover"}
      :::
      :::MProgressiveBlur{direction="bottom"}
      :::
      :::div{class="absolute inset-0 flex items-end justify-center pb-4"}
        :::h3{class="text-white text-xl font-bold"}
        Bottom
        :::
      :::
    :::
    :::UCard{class="relative w-full h-64 overflow-hidden"}
      :::img{src="/hingol-national-park.jpg" alt="Hingol National Park" class="absolute inset-0 w-full h-full object-cover"}
      :::
      :::MProgressiveBlur{direction="left"}
      :::
      :::div{class="absolute inset-0 flex items-center justify-start pl-4"}
        :::h3{class="text-white text-xl font-bold"}
        Left
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="grid grid-cols-2 gap-4">
    <UCard class="relative w-full h-64 overflow-hidden">
      <img src="/hingol-national-park.jpg" alt="Hingol National Park" class="absolute inset-0 w-full h-full object-cover" />
      <MProgressiveBlur direction="top" />
      <div class="absolute inset-0 flex items-start justify-center pt-4">
        <h3 class="text-white text-xl font-bold">Top</h3>
      </div>
    </UCard>
    <UCard class="relative w-full h-64 overflow-hidden">
      <img src="/hingol-national-park.jpg" alt="Hingol National Park" class="absolute inset-0 w-full h-full object-cover" />
      <MProgressiveBlur direction="right" />
      <div class="absolute inset-0 flex items-center justify-end pr-4">
        <h3 class="text-white text-xl font-bold">Right</h3>
      </div>
    </UCard>
    <UCard class="relative w-full h-64 overflow-hidden">
      <img src="/hingol-national-park.jpg" alt="Hingol National Park" class="absolute inset-0 w-full h-full object-cover" />
      <MProgressiveBlur direction="bottom" />
      <div class="absolute inset-0 flex items-end justify-center pb-4">
        <h3 class="text-white text-xl font-bold">Bottom</h3>
      </div>
    </UCard>
    <UCard class="relative w-full h-64 overflow-hidden">
      <img src="/hingol-national-park.jpg" alt="Hingol National Park" class="absolute inset-0 w-full h-full object-cover" />
      <MProgressiveBlur direction="left" />
      <div class="absolute inset-0 flex items-center justify-start pl-4">
        <h3 class="text-white text-xl font-bold">Left</h3>
      </div>
    </UCard>
  </div>
</template>
```
::

### Custom Intensity and Layers

You can customize the blur effect with `blurIntensity` and `blurLayers`.

::code-preview
---
label: Preview
---
  :::UCard{class="relative w-full h-64 overflow-hidden"}
    :::img{src="/hingol-national-park.jpg" alt="Hingol National Park" class="absolute inset-0 w-full h-full object-cover"}
    :::
    :::MProgressiveBlur{:blur-intensity="0.5" :blur-layers="12"}
    :::
    :::div{class="absolute inset-0 flex items-center justify-center"}
      :::h3{class="text-white text-2xl font-bold"}
      More Intense Blur
      :::
    :::
  :::
#code
```vue
<template>
  <UCard class="relative w-full h-64 overflow-hidden">
    <img src="/hingol-national-park.jpg" alt="Hingol National Park" class="absolute inset-0 w-full h-full object-cover" />
    <MProgressiveBlur :blur-intensity="0.5" :blur-layers="12" />
    <div class="absolute inset-0 flex items-center justify-center">
      <h3 class="text-white text-2xl font-bold">More Intense Blur</h3>
    </div>
  </UCard>
</template>
```
::