---
title: Spotlight
description: Spotlight effect that follows cursor movement.
navigation:
  icon: i-lucide-sun-medium
---

# Spotlight

The Spotlight component creates a spotlight effect that follows cursor movement. It's perfect for highlighting interactive elements and creating focus effects.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MSpotlight
      :::div{class="p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg"}
        :::h3{class="text-xl font-bold mb-2"}
        Spotlight Effect
        :::
        :::p
        Move your cursor over this area to see the spotlight effect.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <MSpotlight>
    <div class="p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg">
      <h3 class="text-xl font-bold mb-2">Spotlight Effect</h3>
      <p>Move your cursor over this area to see the spotlight effect.</p>
    </div>
  </MSpotlight>
</template>
```
::

## Props

::field-group
  ::field{name="class" type="string" default="'bg-primary-300/20 dark:bg-primary-600/20'"}
  CSS classes to apply to the spotlight element.
  ::
  
  ::field{name="size" type="number" default="200"}
  Size of the spotlight in pixels.
  ::
  
  ::field{name="springOptions" type="SpringOptions" default="{ bounce: 0 }"}
  Spring animation options.
  ::
::

## Examples

### Basic Spotlight

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MSpotlight
      :::div{class="p-8 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-lg"}
        :::h3{class="text-xl font-bold mb-2"}
        Emerald Spotlight
        :::
        :::p
        Move your cursor to see the emerald spotlight effect.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MSpotlight>
      <div class="p-8 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-lg">
        <h3 class="text-xl font-bold mb-2">Emerald Spotlight</h3>
        <p>Move your cursor to see the emerald spotlight effect.</p>
      </div>
    </MSpotlight>
  </div>
</template>
```
::

### Custom Size

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MSpotlight{:size="300"}
      :::div{class="p-8 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-lg"}
        :::h3{class="text-xl font-bold mb-2"}
        Large Spotlight
        :::
        :::p
        This spotlight is larger than the default size.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MSpotlight :size="300">
      <div class="p-8 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-lg">
        <h3 class="text-xl font-bold mb-2">Large Spotlight</h3>
        <p>This spotlight is larger than the default size.</p>
      </div>
    </MSpotlight>
  </div>
</template>
```
::

### Custom Styling

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MSpotlight{class="bg-rose-500/30"}
      :::div{class="p-8 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-lg"}
        :::h3{class="text-xl font-bold mb-2"}
        Custom Spotlight
        :::
        :::p
        This spotlight has custom styling.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MSpotlight class="bg-rose-500/30">
      <div class="p-8 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-lg">
        <h3 class="text-xl font-bold mb-2">Custom Spotlight</h3>
        <p>This spotlight has custom styling.</p>
      </div>
    </MSpotlight>
  </div>
</template>
```
::

### With Custom Spring Options

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MSpotlight{:spring-options="{ bounce: 0.5, stiffness: 300 }"}
      :::div{class="p-8 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-lg"}
        :::h3{class="text-xl font-bold mb-2"}
        Bouncy Spotlight
        :::
        :::p
        This spotlight has custom spring animation.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MSpotlight :spring-options="{ bounce: 0.5, stiffness: 300 }">
      <div class="p-8 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-lg">
        <h3 class="text-xl font-bold mb-2">Bouncy Spotlight</h3>
        <p>This spotlight has custom spring animation.</p>
      </div>
    </MSpotlight>
  </div>
</template>
```
::