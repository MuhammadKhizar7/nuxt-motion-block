---
title: Aurora Background
description: Animated background with aurora-like gradient effects.
navigation:
  icon: i-lucide-sparkles
---

# Aurora Background

The AuroraBackground component creates an animated background with aurora-like gradient effects. It features smooth color transitions and animated patterns that create a mesmerizing visual experience.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="aurora-background-example" />
  :::
#code
```vue
<template>
  <div class="relative h-96 w-full overflow-hidden rounded-lg border bg-background">
    <MAuroraBackground>
      <div class="relative z-10 flex h-full flex-col items-center justify-center">
        <h2 class="text-3xl font-bold text-white">Aurora Background</h2>
        <p class="mt-4 text-lg text-white/90">Beautiful animated background effect</p>
        <button class="mt-6 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm hover:bg-white/20 transition-colors">
          Get Started
        </button>
      </div>
    </MAuroraBackground>
  </div>
</template>
```
::

## Props

::field-group
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="showRadialGradient" type="boolean" default="true"}
  Whether to show the radial gradient overlay.
  ::
::

## Examples

### Basic Aurora Background

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="aurora-background-basic" />
  :::
#code
```vue
<template>
  <div class="relative h-64 w-full overflow-hidden rounded-lg border bg-background">
    <MAuroraBackground>
      <div class="relative z-10 flex h-full items-center justify-center">
        <h3 class="text-xl font-bold text-white">Basic Aurora</h3>
      </div>
    </MAuroraBackground>
  </div>
</template>
```
::

### Without Radial Gradient

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="aurora-background-custom-styling" />
  :::
#code
```vue
<template>
  <div class="relative h-64 w-full overflow-hidden rounded-lg border bg-background">
    <MAuroraBackground :show-radial-gradient="false" class="bg-slate-900">
      <div class="relative z-10 flex h-full flex-col items-center justify-center space-y-4">
        <h3 class="text-2xl font-bold text-white">Custom Aurora</h3>
        <p class="text-white/80 text-center max-w-md">
          Aurora background without radial gradient and with custom background color
        </p>
      </div>
    </MAuroraBackground>
  </div>
</template>
```
::