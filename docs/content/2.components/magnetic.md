---
title: Magnetic
description: Magnetic effect that attracts elements to cursor proximity.
navigation:
  icon: i-lucide-magnet
---

# Magnetic

The Magnetic component creates a magnetic effect that attracts elements to cursor proximity. It's perfect for creating interactive buttons and cards that respond to mouse movement.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4 flex justify-center"}
    :::MMagnetic
      :::button{class="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"}
      Magnetic Button
      :::
    :::
  :::
#code
```vue
<template>
  <MMagnetic>
    <button class="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors">
      Magnetic Button
    </button>
  </MMagnetic>
</template>
```
::

## Props

::field-group
  ::field{name="intensity" type="number" default="0.6"}
  Magnetic intensity/strength.
  ::
  
  ::field{name="range" type="number" default="100"}
  Activation range in pixels.
  ::
  
  ::field{name="actionArea" type="string" default="'self'"}
  Area that triggers the effect ('self', 'parent', 'global').
  ::
  
  ::field{name="springOptions" type="object" default="{ stiffness: 26.7, damping: 4.1, mass: 0.2 }"}
  Spring physics options.
  ::
::

## Examples

### Basic Magnetic Button

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-6"}
    :::MMagnetic
      :::button{class="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all"}
      Basic Magnetic
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-6">
    <MMagnetic>
      <button class="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all">
        Basic Magnetic
      </button>
    </MMagnetic>
  </div>
</template>
```
::

### High Intensity

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-6"}
    :::MMagnetic{:intensity="1.2" :range="150"}
      :::button{class="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg shadow-lg hover:from-amber-600 hover:to-orange-700 transition-all"}
      Strong Magnetic
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-6">
    <MMagnetic :intensity="1.2" :range="150">
      <button class="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg shadow-lg hover:from-amber-600 hover:to-orange-700 transition-all">
        Strong Magnetic
      </button>
    </MMagnetic>
  </div>
</template>
```
::

### Parent Action Area

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MMagnetic{action-area="parent"}
      :::button{class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg shadow-lg hover:from-emerald-600 hover:to-teal-700 transition-all"}
      Parent Area
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MMagnetic action-area="parent">
      <button class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg shadow-lg hover:from-emerald-600 hover:to-teal-700 transition-all">
        Parent Area
      </button>
    </MMagnetic>
  </div>
</template>
```
::

### Custom Spring Options

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-6"}
    :::MMagnetic{:spring-options="{ stiffness: 50, damping: 5, mass: 0.5 }"}
      :::button{class="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg shadow-lg hover:from-rose-600 hover:to-pink-700 transition-all"}
      Custom Spring
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-6">
    <MMagnetic :spring-options="{ stiffness: 50, damping: 5, mass: 0.5 }">
      <button class="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg shadow-lg hover:from-rose-600 hover:to-pink-700 transition-all">
        Custom Spring
      </button>
    </MMagnetic>
  </div>
</template>
```
::