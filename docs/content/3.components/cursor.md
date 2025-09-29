---
title: Cursor
description: Custom cursor with various effects and interactions.
navigation:
  icon: i-lucide-move
---

# Cursor

The Cursor component replaces the default system cursor with a custom animated cursor. It supports various styles and effects to enhance user interaction.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MCursor
    :::
    :::div{class="p-8 bg-gray-100 dark:bg-gray-800 rounded-lg"}
      :::h3{class="text-lg font-medium mb-2"}
      Custom Cursor Area
      :::
      :::p
      Move your cursor over this area to see the custom cursor effect.
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MCursor />
    <div class="p-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h3 class="text-lg font-medium mb-2">Custom Cursor Area</h3>
      <p>Move your cursor over this area to see the custom cursor effect.</p>
    </div>
  </div>
</template>
```
::

## Props

::field-group
  ::field{name="variant" type="'default' | 'ring' | 'dot' | 'crosshair'" default="'default'"}
  Cursor variant.
  ::
  
  ::field{name="color" type="string" default="'currentColor'"}
  Cursor color.
  ::
  
  ::field{name="size" type="number" default="30"}
  Cursor size.
  ::
  
  ::field{name="trail" type="boolean" default="false"}
  Enable trailing effect.
  ::
  
  ::field{name="magnetic" type="boolean" default="false"}
  Enable magnetic effect.
  ::
  
  ::field{name="hidden" type="boolean" default="false"}
  Hide native cursor.
  ::
::

## Examples

### Basic Custom Cursor

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MCursor
    :::
    :::div{class="p-8 bg-white dark:bg-gray-800 rounded-lg"}
      :::h3{class="text-lg font-medium mb-4"}
      Default Cursor
      :::
      :::p
      Move your cursor in this area to see the custom cursor effect.
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MCursor />
    <div class="p-8 bg-white dark:bg-gray-800 rounded-lg">
      <h3 class="text-lg font-medium mb-4">Default Cursor</h3>
      <p>Move your cursor in this area to see the custom cursor effect.</p>
    </div>
  </div>
</template>
```
::

### Ring Variant

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MCursor{variant="ring" color="#ec4899" :size="40"}
    :::
    :::div{class="p-8 bg-pink-50 dark:bg-pink-900/20 rounded-lg"}
      :::h3{class="text-lg font-medium mb-4 text-pink-600 dark:text-pink-400"}
      Ring Cursor
      :::
      :::p
      This area uses a pink ring cursor.
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MCursor 
      variant="ring" 
      color="#ec4899" 
      :size="40" 
    />
    <div class="p-8 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
      <h3 class="text-lg font-medium mb-4 text-pink-600 dark:text-pink-400">Ring Cursor</h3>
      <p>This area uses a pink ring cursor.</p>
    </div>
  </div>
</template>
```
::

### With Trail Effect

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MCursor{variant="dot" color="#10b981" :size="15" :trail="true"}
    :::
    :::div{class="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg"}
      :::h3{class="text-lg font-medium mb-4 text-emerald-600 dark:text-emerald-400"}
      Dot Cursor with Trail
      :::
      :::p
      This area uses a small green dot cursor with a trailing effect.
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MCursor 
      variant="dot" 
      color="#10b981" 
      :size="15" 
      :trail="true"
    />
    <div class="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
      <h3 class="text-lg font-medium mb-4 text-emerald-600 dark:text-emerald-400">Dot Cursor with Trail</h3>
      <p>This area uses a small green dot cursor with a trailing effect.</p>
    </div>
  </div>
</template>
```
::

### Magnetic Effect

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MCursor{:magnetic="true"}
    :::
    :::div{class="p-8 space-y-4"}
      :::div{class="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-center cursor-pointer"}
        :::h3{class="text-lg font-medium text-blue-700 dark:text-blue-300"}
        Magnetic Button 1
        :::
      :::
      :::div{class="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-center cursor-pointer"}
        :::h3{class="text-lg font-medium text-purple-700 dark:text-purple-300"}
        Magnetic Button 2
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MCursor 
      variant="default" 
      :magnetic="true"
    />
    <div class="p-8 space-y-4">
      <div class="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-center cursor-pointer">
        <h3 class="text-lg font-medium text-blue-700 dark:text-blue-300">Magnetic Button 1</h3>
      </div>
      <div class="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-center cursor-pointer">
        <h3 class="text-lg font-medium text-purple-700 dark:text-purple-300">Magnetic Button 2</h3>
      </div>
    </div>
  </div>
</template>
```
::