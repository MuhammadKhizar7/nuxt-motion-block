---
title: Animated Number
description: Animated numeric value with smooth transitions.
navigation:
  icon: i-lucide-hash
---

# Animated Number

The AnimatedNumber component animates numeric values with smooth transitions. It's perfect for displaying counters, statistics, and any numerical data that benefits from animation.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-number-example" />
  :::
#code
```vue
<template>
  <MAnimatedNumber :value="1234" />
</template>
```
::

## Props

::field-group
  ::field{name="value" type="number" :required="true"}
  Target value to animate to.
  ::
  
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the component.
  ::
  
  ::field{name="springOptions" type="SpringOptions" default="{ stiffness: 300, damping: 30, mass: 1 }"}
  Spring animation options.
  ::
  
  ::field{name="as" type="string" default="'span'"}
  HTML element to render as.
  ::
  
  ::field{name="format" type="function" default="(value: number) => Math.round(value).toLocaleString()"}
  Custom formatting function.
  ::
::

## Examples

### Basic Animated Number

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-number-basic" />
  :::
#code
```vue
<template>
  <MAnimatedNumber :value="1500" />
</template>
```
::

### With Custom Duration

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-number-duration" />
  :::
#code
```vue
<template>
  <MAnimatedNumber :value="123456" :duration="2" />
</template>
```
::

### With Custom Easing

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-number-easing" />
  :::
#code
```vue
<template>
  <MAnimatedNumber :value="100" easing="easeInOut" />
</template>
```
::

### With Custom Styling

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-number-styling" />
  :::
#code
```vue
<template>
  <MAnimatedNumber :value="42" as="div" class="text-2xl font-bold" />
</template>
```
::

### With Trigger

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-number-with-trigger" />
  :::
#code
```vue
<template>
  <div class="space-y-4">
    <UButton @click="value += 100">Increase Value</UButton>
    <MAnimatedNumber :value="value" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(1000)
</script>
```
::
