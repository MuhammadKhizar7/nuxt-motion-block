---
title: Animated Group
description: Component that animates a group of elements with staggered delays.
navigation:
  icon: i-lucide-layers
---

# Animated Group

The AnimatedGroup component animates a group of elements with staggered delays. It's perfect for creating engaging entrance animations for lists, grids, and other collections of elements.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-group-example" />
  :::
#code
```vue
<template>
  <MAnimatedGroup>
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="i in 6"
        :key="i"
        class="h-20 w-20 rounded-lg bg-primary"
      />
    </div>
  </MAnimatedGroup>
</template>
```
::

## Props

::field-group
  ::field{name="stagger" type="number" default="0.1"}
  Delay between child animations in seconds.
  ::
  
  ::field{name="duration" type="number" default="0.5"}
  Animation duration in seconds.
  ::
  
  ::field{name="delay" type="number" default="0"}
  Initial delay before animation starts in seconds.
  ::
  
  ::field{name="easing" type="string" default="'ease-out'"}
  CSS easing function.
  ::
  
  ::field{name="animateOnMount" type="boolean" default="true"}
  Whether to animate on component mount.
  ::
::

## Examples

### Basic Animated Group

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-group-basic" />
  :::
#code
```vue
<template>
  <MAnimatedGroup>
    <div class="flex space-x-4">
      <div
        v-for="i in 4"
        :key="i"
        class="h-16 w-16 rounded-lg bg-secondary"
      />
    </div>
  </MAnimatedGroup>
</template>
```
::

### With Stagger Animation

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-group-stagger" />
  :::
#code
```vue
<template>
  <MAnimatedGroup :stagger="0.3">
    <div class="flex flex-wrap gap-4">
      <div
        v-for="i in 8"
        :key="i"
        class="h-12 w-12 rounded-lg bg-tertiary"
      />
    </div>
  </MAnimatedGroup>
</template>
```
::

### With Custom Duration

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-group-duration" />
  :::
#code
```vue
<template>
  <MAnimatedGroup :duration="1" easing="ease-in-out">
    <div class="grid grid-cols-4 gap-3">
      <div
        v-for="i in 12"
        :key="i"
        class="h-14 w-14 rounded-lg bg-primary"
      />
    </div>
  </MAnimatedGroup>
</template>
```
::

### With Refresh Trigger

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-group-with-refresh" />
  :::
#code
```vue
<template>
  <div class="space-y-4">
    <UButton @click="refreshKey++">Refresh Animation</UButton>
    <MAnimatedGroup :key="refreshKey">
      <div class="flex space-x-3">
        <div
          v-for="i in 5"
          :key="i"
          class="h-16 w-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"
        />
      </div>
    </MAnimatedGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const refreshKey = ref(0)
</script>
```
::
