---
title: In View
description: Trigger animations when elements enter the viewport.
navigation:
  icon: i-lucide-eye
---

# In View

The InView component triggers animations when elements enter the viewport. It's perfect for creating scroll-triggered animations and reveal effects.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-8 min-h-screen"}
    :::div{class="h-64"}
    :::
    :::MInView
      :::div{class="p-6 bg-blue-500 text-white rounded-lg"}
        :::h3{class="text-lg font-medium mb-2"}
        Animated when in view
        :::
        :::p
        This element animates when it enters the viewport.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-8 min-h-screen">
    <div class="h-64" />
    <MInView>
      <div class="p-6 bg-blue-500 text-white rounded-lg">
        <h3 class="text-lg font-medium mb-2">Animated when in view</h3>
        <p>This element animates when it enters the viewport.</p>
      </div>
    </MInView>
  </div>
</template>
```
::

## Props

::field-group
  ::field{name="threshold" type="number" default="0.1"}
  Visibility threshold (0-1).
  ::
  
  ::field{name="once" type="boolean" default="true"}
  Trigger only once.
  ::
  
  ::field{name="rootMargin" type="string" default="'0px'"}
  Root margin for intersection.
  ::
  
  ::field{name="delay" type="number" default="0"}
  Delay before triggering.
  ::
::

## Events

::field-group
  ::field{name="inView" type="(inView: boolean) => void"}
  Emitted when visibility changes.
  ::
::

## Slots

::field-group
  ::field{name="default" type="{ inView: boolean }"}
  Default slot with visibility state.
  ::
::

## Examples

### Basic InView

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-8 min-h-screen"}
    :::div{class="h-64 flex items-center justify-center text-gray-500"}
    Scroll down to see the animation
    :::
    
    :::MInView
      :::div{class="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg"}
        :::h3{class="text-lg font-medium mb-2"}
        Basic InView
        :::
        :::p
        This element fades in when it enters the viewport.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-8 min-h-screen">
    <div class="h-64 flex items-center justify-center text-gray-500">
      Scroll down to see the animation
    </div>
    
    <MInView>
      <div class="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
        <h3 class="text-lg font-medium mb-2">Basic InView</h3>
        <p>This element fades in when it enters the viewport.</p>
      </div>
    </MInView>
  </div>
</template>
```
::

### With Custom Threshold

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-8 min-h-screen"}
    :::div{class="h-64"}
    :::
    
    :::MInView{:threshold="0.5"}
      :::div{class="p-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg"}
        :::h3{class="text-lg font-medium mb-2"}
        50% Threshold
        :::
        :::p
        This element triggers when 50% is visible.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-8 min-h-screen">
    <div class="h-64" />
    
    <MInView :threshold="0.5">
      <div class="p-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg">
        <h3 class="text-lg font-medium mb-2">50% Threshold</h3>
        <p>This element triggers when 50% is visible.</p>
      </div>
    </MInView>
  </div>
</template>
```
::

### Repeated Animation

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-8 min-h-screen"}
    :::div{class="h-64"}
    :::
    
    :::MInView{:once="false"}
      :::div{class="p-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg"}
        :::h3{class="text-lg font-medium mb-2"}
        Repeated Animation
        :::
        :::p
        This element animates every time it enters the viewport.
        :::
      :::
    :::
    
    :::div{class="h-64"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-8 min-h-screen">
    <div class="h-64" />
    
    <MInView :once="false">
      <div class="p-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg">
        <h3 class="text-lg font-medium mb-2">Repeated Animation</h3>
        <p>This element animates every time it enters the viewport.</p>
      </div>
    </MInView>
    
    <div class="h-64" />
  </div>
</template>
```
::

### With Custom Animation

::code-preview
---
label: Preview
---
::div
  ::component-example{name="in-view-with-custom-animation"}
::
#code
```vue
<template>
  <div class="p-4 space-y-8 min-h-screen">
    <div class="h-64" />
    
    <MInView 
      :threshold="0.3"
      :variants="{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }"
      :transition="{
        duration: 0.5,
        ease: 'easeOut'
      }"
    >
      <div class="p-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg">
        <h3 class="text-lg font-medium mb-2">Custom Animation</h3>
        <p>This element uses custom variants for animation.</p>
      </div>
    </MInView>
  </div>
</template>
```
::


