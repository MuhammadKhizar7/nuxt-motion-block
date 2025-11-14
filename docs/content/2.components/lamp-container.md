---
title: Lamp Container
description: Animated lamp effect container with customizable gradient colors and lighting effects.
navigation:
  icon: i-lucide-lamp
---

# Lamp Container

The LampContainer component creates an animated lamp effect with gradient lighting, glow effects, and customizable colors. It's perfect for creating eye-catching hero sections and visual dividers.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="lamp-container-example" />
  :::
#code
```vue
<template>
  <MLampContainer>
    <motion.h1
      :initial="{ opacity: 0.5, y: 100 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }"
      class="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
      Build lamps <br> the right way
    </motion.h1>
  </MLampContainer>
</template>
```
::

## Props

::field-group
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="fromColor" type="string" default="'var(--color-primary-500, #0ea5e9)'"}
  Starting color for the left gradient.
  ::
  
  ::field{name="toColor" type="string" default="'var(--color-primary-500, #0ea5e9)'"}
  Ending color for the right gradient.
  ::
  
  ::field{name="centerColor" type="string" default="'var(--color-primary-500, #0ea5e9)'"}
  Color for the center glow effect.
  ::
  
  ::field{name="glowColor" type="string" default="'var(--color-primary-400, #38bdf8)'"}
  Color for the glow effect.
  ::
  
  ::field{name="lineColor" type="string" default="'var(--color-primary-400, #38bdf8)'"}
  Color for the line effect.
  ::
::

## Examples

### Basic Lamp Container

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="lamp-container-basic" />
  :::
#code
```vue
<template>
  <MLampContainer>
    <div class="text-center">
      <h2 class="text-3xl font-bold text-white mb-4">Lamp Container</h2>
      <p class="text-gray-300">Basic lamp effect with default colors</p>
    </div>
  </MLampContainer>
</template>
```
::

### Custom Colors

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="lamp-container-custom" />
  :::
#code
```vue
<template>
  <MLampContainer
    from-color="var(--color-purple-500)"
    to-color="var(--color-pink-500)"
    center-color="var(--color-purple-400)"
    glow-color="var(--color-pink-400)"
    line-color="var(--color-purple-300)"
  >
    <div class="text-center">
      <h2 class="text-3xl font-bold text-white mb-4">Custom Lamp</h2>
      <p class="text-gray-300">Lamp effect with custom purple/pink colors</p>
    </div>
  </MLampContainer>
</template>
```
::
