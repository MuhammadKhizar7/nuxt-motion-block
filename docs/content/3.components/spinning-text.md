---
title: Spinning Text
description: Text that spins with 3D effects.
navigation:
  icon: i-lucide-loader
---

# Spinning Text

The SpinningText component creates text that spins with 3D effects. It's perfect for creating eye-catching headings and animated text elements.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4 flex justify-center"}
    :::MSpinningText{children="SPIN"}
    :::
  :::
#code
```vue
<template>
  <MSpinningText children="SPIN" />
</template>
```
::

## Props

::field-group
  ::field{name="children" type="string" :required="true"}
  Text to spin.
  ::
  
  ::field{name="style" type="object" default="undefined"}
  Custom styles to apply to the container.
  ::
  
  ::field{name="duration" type="number" default="10"}
  Animation duration in seconds.
  ::
  
  ::field{name="className" type="string" default="undefined"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="reverse" type="boolean" default="false"}
  Reverse the spinning direction.
  ::
  
  ::field{name="fontSize" type="number" default="1"}
  Font size multiplier.
  ::
  
  ::field{name="radius" type="number" default="5"}
  Radius of the spinning circle.
  ::
  
  ::field{name="transition" type="object" default="{}"}
  Animation transition options.
  ::
  
  ::field{name="variants" type="object" default="{}"}
  Animation variants for container and items.
  ::
::

## Examples

### Basic Spinning Text

::code-preview
---
label: Preview
---
  :::div{class="p-4 flex justify-center"}
    :::MSpinningText{children="HELLO"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4 flex justify-center">
    <MSpinningText children="HELLO" />
  </div>
</template>
```
::

### Custom Duration

::code-preview
---
label: Preview
---
  :::div{class="p-4 flex justify-center"}
    :::MSpinningText{children="FAST" :duration="3"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4 flex justify-center">
    <MSpinningText children="FAST" :duration="3" />
  </div>
</template>
```
::

### Reverse Direction

::code-preview
---
label: Preview
---
  :::div{class="p-4 flex justify-center"}
    :::MSpinningText{children="REVERSE" :reverse="true"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4 flex justify-center">
    <MSpinningText children="REVERSE" :reverse="true" />
  </div>
</template>
```
::

### Custom Size and Radius

::code-preview
---
label: Preview
---
  :::div{class="p-4 flex justify-center"}
    :::MSpinningText{children="LARGE" :font-size="2" :radius="8"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4 flex justify-center">
    <MSpinningText children="LARGE" :font-size="2" :radius="8" />
  </div>
</template>
```
::

### With Custom Styling

::code-preview
---
label: Preview
---
  :::div{class="p-4 flex justify-center"}
    :::MSpinningText{children="STYLED" class="text-blue-500 font-bold"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4 flex justify-center">
    <MSpinningText children="STYLED" class="text-blue-500 font-bold" />
  </div>
</template>
```
::