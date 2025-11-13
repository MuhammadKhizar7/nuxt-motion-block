---
title: Tracing Beam
description: A beam that follows the user's scroll position.
navigation:
  icon: i-lucide-git-branch-plus
---

# Tracing Beam

The Tracing Beam component creates a visual beam that follows the user's scroll position, connecting different sections of a page.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="w-full"}
    <component-example name="tracing-beam-example" />
  :::
#code
```vue
<template>
  <MTracingBeam>
    <div class="h-[400px] w-full bg-gray-100 dark:bg-gray-800 rounded-lg mb-8"></div>
    <div class="h-[400px] w-full bg-gray-100 dark:bg-gray-800 rounded-lg mb-8"></div>
    <div class="h-[400px] w-full bg-gray-100 dark:bg-gray-800 rounded-lg mb-8"></div>
  </MTracingBeam>
</template>
```
::

## Props

::field-group
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the container element.
  ::
  ::field{name="beamColor" type="string[]" default="['#18CCFC', '#6344F5', '#AE48FF']"}
  An array of three colors to customize the beam gradient.
  ::
::

## Examples

### Custom Beam Color

::code-preview
---
label: Preview
---
  :::div{class="w-full"}
    <component-example name="tracing-beam-custom" />
  :::
#code
```vue
<template>
  <MTracingBeam :beam-color="['#FF0000', '#00FF00', '#0000FF']">
    <div class="h-[400px] w-full bg-gray-100 dark:bg-gray-800 rounded-.lg mb-8"></div>
    <div class="h-[400px] w-full bg-gray-100 dark:bg-gray-800 rounded-lg mb-8"></div>
    <div class="h-[400px] w-full bg-gray-100 dark:bg-gray-800 rounded-lg mb-8"></div>
  </MTracingBeam>
</template>
```
::
