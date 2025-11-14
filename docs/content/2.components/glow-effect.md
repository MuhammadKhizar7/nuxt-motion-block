---
title: Glow Effect
description: Component that adds a dynamic glow effect with customizable colors and animations.
navigation:
  icon: i-lucide-sun-medium
---

# Glow Effect

The GlowEffect component adds a dynamic glow effect with customizable colors and animations. It's perfect for creating eye-catching elements with vibrant, animated glows.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="glow-effect-example" />
  :::
#code
```vue
<template>
  <MGlowEffect>
    <div class="p-6 bg-primary rounded-lg">
      <h3 class="text-xl font-bold mb-2">Glow Effect</h3>
      <p class="text-gray-600 dark:text-gray-400">This element has a glow effect</p>
    </div>
  </MGlowEffect>
</template>
```
::

## Props

::field-group
  ::field{name="class" type="string" default="undefined"}
  CSS classes to apply to the glow element.
  ::
  
  ::field{name="style" type="Object" default="undefined"}
  Custom styles to apply to the glow element.
  ::
  
  ::field{name="colors" type="string[]" default="['#FF5733', '#33FF57', '#3357FF', '#F1C40F']"}
  Array of colors for the glow effect.
  ::
  
  ::field{name="mode" type="'rotate' | 'pulse' | 'breathe' | 'colorShift' | 'flowHorizontal' | 'static'" default="'rotate'"}
  Animation mode for the glow effect.
  ::
  
  ::field{name="blur" type="number | 'softest' | 'soft' | 'medium' | 'strong' | 'stronger' | 'strongest' | 'none'" default="'medium'"}
  Blur intensity of the glow effect.
  ::
  
  ::field{name="scale" type="number" default="1"}
  Scale factor for the glow effect.
  ::
  
  ::field{name="duration" type="number" default="5"}
  Animation duration in seconds.
  ::
::

## Examples

### Basic Glow Effect

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="glow-effect-basic" />
  :::
#code
```vue
<template>
  <MGlowEffect>
    <div class="p-4 bg-secondary rounded">
      <p>Basic glow effect</p>
    </div>
  </MGlowEffect>
</template>
```
::

### With Color Shift

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="glow-effect-color" />
  :::
#code
```vue
<template>
  <MGlowEffect mode="colorShift" blur="soft" :duration="3" :scale="0.9">
    <div class="p-4 bg-tertiary rounded">
      <p>Color shifting glow effect</p>
    </div>
  </MGlowEffect>
</template>
```
::

### With Strong Blur

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="glow-effect-blur" />
  :::
#code
```vue
<template>
  <MGlowEffect blur="strong" :scale="1.2">
    <div class="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded">
      <p>Strong blur glow effect</p>
    </div>
  </MGlowEffect>
</template>
```
::

