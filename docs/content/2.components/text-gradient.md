---
title: Text Gradient
description: Text with gradient color effects.
navigation:
  icon: i-lucide-paintbrush
---

# Text Gradient

The TextGradient component creates text with gradient color effects. It's perfect for creating visually striking headings and text elements with animated gradients.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextGradient{text="GRADIENT"}
    :::
  :::
#code
```vue
<template>
  <MTextGradient text="GRADIENT" />
</template>
```
::

## Props

::field-group
  ::field{name="text" type="string" default="''"}
  Text to display with gradient.
  ::
  
  ::field{name="as" type="string" default="'span'"}
  HTML element to render as.
  ::
  
  ::field{name="colors" type="string[]" default="['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7']"}
  Array of colors for the gradient.
  ::
  
  ::field{name="direction" type="'horizontal' | 'vertical' | 'diagonal' | 'radial'" default="'horizontal'"}
  Direction of the gradient.
  ::
  
  ::field{name="animation" type="'wave' | 'pulse' | 'flow' | 'rainbow' | 'static'" default="'wave'"}
  Animation type for the gradient.
  ::
  
  ::field{name="duration" type="number" default="3"}
  Animation duration in seconds.
  ::
  
  ::field{name="speed" type="number" default="1"}
  Animation speed multiplier.
  ::
  
  ::field{name="size" type="number" default="200"}
  Size of the gradient background.
  ::
  
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the text.
  ::
  
  ::field{name="hover" type="boolean" default="false"}
  Enable hover effect.
  ::
  
  ::field{name="ariaLabel" type="string" default="''"}
  Accessibility label for the text.
  ::
  
  ::field{name="hideFromScreenReader" type="boolean" default="false"}
  Hide from screen readers.
  ::
  
  ::field{name="reduceMotion" type="boolean" default="false"}
  Reduce motion for accessibility.
  ::
::

## Examples

### Basic Text Gradient

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextGradient{text="BASIC GRADIENT"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextGradient text="BASIC GRADIENT" />
  </div>
</template>
```
::

### Custom Colors

::code-preview
---
label: Preview
---
::div
  ::component-example{name="text-gradient-custom-colors"}
::
#code
```vue
<template>
  <div class="p-4">
    <MTextGradient 
      text="TEAL GRADIENT" 
      :colors="['#0d9488', '#14b8a6', '#2dd4bf']"
      animation="wave"
    />
  </div>
</template>
```
::

### Vertical Direction

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextGradient{text="VERTICAL" direction="vertical"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextGradient text="VERTICAL" direction="vertical" />
  </div>
</template>
```
::

### Rainbow Animation

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextGradient{text="RAINBOW" animation="rainbow" :duration="2"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextGradient text="RAINBOW" animation="rainbow" :duration="2" />
  </div>
</template>
```
::

### With Hover Effect

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextGradient{text="HOVER ME" :hover="true"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextGradient text="HOVER ME" :hover="true" />
  </div>
</template>
```
::

### As Heading Element

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextGradient{text="Heading Text" as="h1" class="text-4xl"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextGradient text="Heading Text" as="h1" class="text-4xl" />
  </div>
</template>
```
::