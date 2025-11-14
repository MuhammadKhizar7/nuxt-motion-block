---
title: Meteors
description: Animated meteor shower effect with customizable density and timing.
navigation:
  icon: i-lucide-star
---

# Meteors

The Meteors component creates an animated meteor shower effect with customizable density and timing. It's perfect for adding dynamic background animations to your UI.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="meteors-example" />
  :::
#code
```vue
<template>
  <div class="relative h-64 w-full overflow-hidden rounded-lg border bg-gradient-to-br from-gray-900 to-black">
    <MMeteors :number="30" />
    <div class="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
      <h3 class="text-2xl font-bold text-white mb-2">Meteor Shower</h3>
      <p class="text-gray-300">Animated meteor shower effect</p>
    </div>
  </div>
</template>
```
::

## Props

::field-group
  ::field{name="number" type="number" default="20"}
  Number of meteors to display in the shower.
  ::
  
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the meteor elements.
  ::
::

## Examples

### Basic Meteor Shower

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="meteors-basic" />
  :::
#code
```vue
<template>
  <div class="relative h-64 w-full overflow-hidden rounded-lg border bg-gradient-to-br from-gray-900 to-black">
    <MMeteors />
    <div class="relative z-10 h-full flex items-center justify-center">
      <h3 class="text-xl font-bold text-white">Basic Meteor Shower</h3>
    </div>
  </div>
</template>
```
::

### Custom Meteor Count

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="meteors-custom-count" />
  :::
#code
```vue
<template>
  <div class="relative h-64 w-full overflow-hidden rounded-lg border bg-gradient-to-br from-gray-900 to-black">
    <MMeteors :number="50" />
    <div class="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
      <h3 class="text-xl font-bold text-white mb-2">Dense Meteor Shower</h3>
      <p class="text-gray-300">50 meteors for a more intense effect</p>
    </div>
  </div>
</template>
```
::
