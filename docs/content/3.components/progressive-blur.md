---
title: Progressive Blur
description: Progressive blur effect that increases with distance from focus.
navigation:
  icon: i-lucide-eye
---

# Progressive Blur

The ProgressiveBlur component creates a progressive blur effect that increases with distance from focus. It's perfect for creating depth effects and visual hierarchy in your UI.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MProgressiveBlur
      :::div{class="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"}
        :::h3{class="text-lg font-medium mb-2"}
        Blurred Content
        :::
        :::p
        This content has a progressive blur effect.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <MProgressiveBlur>
    <div class="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
      <h3 class="text-lg font-medium mb-2">Blurred Content</h3>
      <p>This content has a progressive blur effect.</p>
    </div>
  </MProgressiveBlur>
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

### Basic Progressive Blur

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MProgressiveBlur
      :::div{class="p-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg"}
        :::h3{class="text-lg font-medium mb-2"}
        Emerald Blur
        :::
        :::p
        This content has a progressive blur effect.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MProgressiveBlur>
      <div class="p-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg">
        <h3 class="text-lg font-medium mb-2">Emerald Blur</h3>
        <p>This content has a progressive blur effect.</p>
      </div>
    </MProgressiveBlur>
  </div>
</template>
```
::

### Top Direction

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MProgressiveBlur{direction="top"}
      :::div{class="p-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg"}
        :::h3{class="text-lg font-medium mb-2"}
        Top Blur
        :::
        :::p
        This content has a top-to-bottom blur effect.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MProgressiveBlur direction="top">
      <div class="p-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg">
        <h3 class="text-lg font-medium mb-2">Top Blur</h3>
        <p>This content has a top-to-bottom blur effect.</p>
      </div>
    </MProgressiveBlur>
  </div>
</template>
```
::

### Custom Blur Intensity

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MProgressiveBlur{:blur-intensity="0.5" :blur-layers="12"}
      :::div{class="p-6 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg"}
        :::h3{class="text-lg font-medium mb-2"}
        Strong Blur
        :::
        :::p
        This content has a stronger progressive blur effect.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MProgressiveBlur :blur-intensity="0.5" :blur-layers="12">
      <div class="p-6 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg">
        <h3 class="text-lg font-medium mb-2">Strong Blur</h3>
        <p>This content has a stronger progressive blur effect.</p>
      </div>
    </MProgressiveBlur>
  </div>
</template>
```
::