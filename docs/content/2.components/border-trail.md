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
  :::div{class="flex justify-center"}
    <component-example name="border-trail-example" />
  :::
#code
```vue
<template>
  <MBorderTrail />
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
  :::div{class="flex justify-center"}
    <component-example name="border-trail-basic" />
  :::
#code
```vue
<template>
  <MBorderTrail />
</template>
```
::

### With Custom Size

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="border-trail-size" />
  :::
#code
```vue
<template>
  <MBorderTrail :size="40" class="bg-blue-500" />
</template>
```
::

### With Custom Transition

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="border-trail-transition" />
  :::
#code
```vue
<template>
  <MBorderTrail :transition="{ repeat: Infinity, duration: 5, ease: 'easeInOut' }" class="bg-purple-500" />
</template>
```
::

### With Custom Styling

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="border-trail-styling" />
  :::
#code
```vue
<template>
  <MBorderTrail class="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg" />
</template>
```
::
