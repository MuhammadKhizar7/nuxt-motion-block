---
title: Wobble Card
description: Card with a wobble effect that responds to cursor movement.
navigation:
  icon: i-lucide-waves
---

# Wobble Card

The WobbleCard component creates a card with a wobble effect that responds to cursor movement. It's perfect for creating interactive cards with fluid, organic animations.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="wobble-card-example" />
  :::
#code
```vue
<template>
  <MWobbleCard>
    <template #header>
      <h3 class="text-xl font-bold">Wobble Card</h3>
    </template>
    <p>Move your cursor over this card to see the wobble effect.</p>
  </MWobbleCard>
</template>
```
::

## Props

::field-group
  ::field{name="containerClass" type="string" default="'bg-primary w-full h-full'"}
  CSS classes to apply to the card container.
  ::
  
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the card content.
  ::
  
  ::field{name="ui" type="object" default="{}"}
  UI configuration for the underlying UCard component.
  ::
::

## Examples

### Basic Wobble Card

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="wobble-card-basic" />
  :::
#code
```vue
<template>
  <MWobbleCard>
    <template #header>
      <h3 class="text-lg font-semibold">Basic Wobble</h3>
    </template>
    <p>This card has a basic wobble effect.</p>
  </MWobbleCard>
</template>
```
::

### With Custom Container Class

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="wobble-card-container" />
  :::
#code
```vue
<template>
  <MWobbleCard container-class="bg-primary w-full h-full">
    <template #header>
      <h3 class="text-lg font-semibold">Custom Container</h3>
    </template>
    <p>This card has a custom container class.</p>
  </MWobbleCard>
</template>
```
::

### With Gradient Styling

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="wobble-card-gradient" />
  :::
#code
```vue
<template>
  <MWobbleCard container-class="bg-gradient-to-r from-purple-500 to-pink-600 w-full h-full">
    <template #header>
      <h3 class="text-lg font-semibold text-white">Gradient Style</h3>
    </template>
    <p class="text-white">This card has gradient styling.</p>
  </MWobbleCard>
</template>
```
::

### With Dark Theme

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="wobble-card-dark" />
  :::
#code
```vue
<template>
  <MWobbleCard container-class="bg-indigo-800 w-full h-full">
    <template #header>
      <h3 class="text-lg font-semibold text-white">Dark Theme</h3>
    </template>
    <p class="text-indigo-200">This card uses a dark color scheme.</p>
  </MWobbleCard>
</template>
```
::

### With Slate Background

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="wobble-card-slate" />
  :::
#code
```vue
<template>
  <MWobbleCard container-class="bg-slate-800 w-full h-full">
    <template #header>
      <h3 class="text-lg font-semibold text-white">Slate Background</h3>
    </template>
    <p class="text-slate-300">This card uses a slate background.</p>
  </MWobbleCard>
</template>
```
::

