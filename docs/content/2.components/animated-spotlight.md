---
title: Animated Spotlight
description: Animated spotlight effect with customizable gradients and movement.
navigation:
  icon: i-lucide-sun
---

# Animated Spotlight

The AnimatedSpotlight component creates an animated spotlight effect with customizable gradients and movement. It's perfect for adding dynamic lighting effects to your UI.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-spotlight-example" />
  :::
#code
```vue
<template>
  <UCard class="relative">
    <template #header>
      <h2 class="text-xl font-semibold">
        Animated spotlight effect
      </h2>
    </template>
    <p class="text-gray-600 dark:text-gray-400 mb-4">
      Animated spotlight effect
    </p>
    <MAnimatedSpotlight />
  </UCard>
</template>
```
::

## Props

::field-group
  ::field{name="gradientFirst" type="string" default="'radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)'"}
  First gradient for the spotlight effect.
  ::
  
  ::field{name="gradientSecond" type="string" default="'radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)'"}
  Second gradient for the spotlight effect.
  ::
  
  ::field{name="gradientThird" type="string" default="'radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)'"}
  Third gradient for the spotlight effect.
  ::
  
  ::field{name="translateY" type="number" default="-350"}
  Vertical translation of the spotlight.
  ::
  
  ::field{name="width" type="number" default="560"}
  Width of the spotlight in pixels.
  ::
  
  ::field{name="height" type="number" default="1380"}
  Height of the spotlight in pixels.
  ::
  
  ::field{name="smallWidth" type="number" default="240"}
  Width of the smaller spotlight elements.
  ::
  
  ::field{name="duration" type="number" default="7"}
  Duration of the animation in seconds.
  ::
  
  ::field{name="xOffset" type="number" default="100"}
  Horizontal offset for the animation.
  ::
::

## Examples

### Basic Animated Spotlight

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-spotlight-basic" />
  :::
#code
```vue
<template>
  <div class="relative h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-900">
    <MAnimatedSpotlight
      :translate-y="-200"
      :width="400"
      :height="1000"
    />
    <div class="relative z-10 h-full flex items-center justify-center">
      <h3 class="text-xl font-bold text-white">Basic Animated Spotlight</h3>
    </div>
  </div>
</template>
```
::

### Custom Animated Spotlight

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-spotlight-custom" />
  :::
#code
```vue
<template>
  <div class="relative h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-900">
    <MAnimatedSpotlight
      :translate-y="-150"
      :width="600"
      :height="1200"
      :small-width="300"
      :duration="5"
      :x-offset="150"
      gradient-first="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(280, 100%, 85%, .08) 0, hsla(280, 100%, 55%, .02) 50%, hsla(280, 100%, 45%, 0) 80%)"
      gradient-second="radial-gradient(50% 50% at 50% 50%, hsla(280, 100%, 85%, .06) 0, hsla(280, 100%, 55%, .02) 80%, transparent 100%)"
      gradient-third="radial-gradient(50% 50% at 50% 50%, hsla(280, 100%, 85%, .04) 0, hsla(280, 100%, 45%, .02) 80%, transparent 100%)"
    />
    <div class="relative z-10 h-full flex items-center justify-center">
      <h3 class="text-xl font-bold text-white">Custom Animated Spotlight</h3>
    </div>
  </div>
</template>
```
::