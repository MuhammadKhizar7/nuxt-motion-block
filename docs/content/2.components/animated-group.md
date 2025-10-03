---
title: Animated Group
description: Groups animations together with coordinated timing and effects.
navigation:
  icon: i-lucide-layers
---

# Animated Group

The AnimatedGroup component groups animations together with coordinated timing and effects. It's perfect for creating staggered animations where child elements animate in sequence with a delay between each one.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MAnimatedGroup
      :::div{class="p-4 bg-blue-500 text-white rounded mb-2"}
      Item 1
      :::
      :::div{class="p-4 bg-green-500 text-white rounded mb-2"}
      Item 2
      :::
      :::div{class="p-4 bg-purple-500 text-white rounded mb-2"}
      Item 3
      :::
    :::
  :::
#code
```vue
<template>
  <MAnimatedGroup>
    <div class="p-4 bg-blue-500 text-white rounded mb-2">
      Item 1
    </div>
    <div class="p-4 bg-green-500 text-white rounded mb-2">
      Item 2
    </div>
    <div class="p-4 bg-purple-500 text-white rounded mb-2">
      Item 3
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
  :::MAnimatedGroup
    :::div{class="p-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded mb-2"}
    First Item
    :::
    :::div{class="p-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded mb-2"}
    Second Item
    :::
    :::div{class="p-3 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded mb-2"}
    Third Item
    :::
  :::
#code
```vue
<template>
  <MAnimatedGroup>
    <div class="p-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded mb-2">
      First Item
    </div>
    <div class="p-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded mb-2">
      Second Item
    </div>
    <div class="p-3 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded mb-2">
      Third Item
    </div>
  </MAnimatedGroup>
</template>
```
::

### With Custom Stagger

::code-preview
---
label: Preview
---
  :::MAnimatedGroup{:stagger="0.3"}
    :::div{class="p-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded mb-2"}
    Slow Stagger 1
    :::
    :::div{class="p-3 bg-gradient-to-r from-rose-400 to-rose-600 text-white rounded mb-2"}
    Slow Stagger 2
    :::
    :::div{class="p-3 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white rounded mb-2"}
    Slow Stagger 3
    :::
  :::
#code
```vue
<template>
  <MAnimatedGroup :stagger="0.3">
    <div class="p-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded mb-2">
      Slow Stagger 1
    </div>
    <div class="p-3 bg-gradient-to-r from-rose-400 to-rose-600 text-white rounded mb-2">
      Slow Stagger 2
    </div>
    <div class="p-3 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white rounded mb-2">
      Slow Stagger 3
    </div>
  </MAnimatedGroup>
</template>
```
::

### With Custom Duration and Easing

::code-preview
---
label: Preview
---
  :::MAnimatedGroup{:duration="1" easing="ease-in-out"}
    :::div{class="p-3 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded mb-2"}
    Slow Ease 1
    :::
    :::div{class="p-3 bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 text-white rounded mb-2"}
    Slow Ease 2
    :::
    :::div{class="p-3 bg-gradient-to-r from-lime-400 to-lime-600 text-white rounded mb-2"}
    Slow Ease 3
    :::
  :::
#code
```vue
<template>
  <MAnimatedGroup :duration="1" easing="ease-in-out">
    <div class="p-3 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded mb-2">
      Slow Ease 1
    </div>
    <div class="p-3 bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 text-white rounded mb-2">
      Slow Ease 2
    </div>
    <div class="p-3 bg-gradient-to-r from-lime-400 to-lime-600 text-white rounded mb-2">
      Slow Ease 3
    </div>
  </MAnimatedGroup>
</template>
```
::