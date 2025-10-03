---
title: Scroll Progress
description: Progress bar that tracks scroll position through content.
navigation:
  icon: i-lucide-bar-chart-horizontal
---

# Scroll Progress

The ScrollProgress component creates a progress bar that tracks scroll position through content. It's perfect for indicating reading progress on articles, documentation, or long pages.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="relative"}
    :::MScrollProgress{class="bg-blue-500"}
    :::
    :::div{class="p-4 space-y-4"}
      :::h3{class="text-lg font-medium"}
      Scroll Down
      :::
      :::div{class="h-64 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center"}
      Content Section 1
      :::
      :::div{class="h-64 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center"}
      Content Section 2
      :::
      :::div{class="h-64 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center"}
      Content Section 3
      :::
    :::
  :::
#code
```vue
<template>
  <div class="relative">
    <MScrollProgress class="bg-blue-500" />
    <div class="p-4 space-y-4">
      <h3 class="text-lg font-medium">Scroll Down</h3>
      <div class="h-64 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
        Content Section 1
      </div>
      <div class="h-64 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
        Content Section 2
      </div>
      <div class="h-64 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center">
        Content Section 3
      </div>
    </div>
  </div>
</template>
```
::

## Props

::field-group
  ::field{name="class" type="string" default="undefined"}
  CSS classes to apply to the progress bar.
  ::
  
  ::field{name="springOptions" type="SpringOptions" default="undefined"}
  Spring animation options.
  ::
  
  ::field{name="containerRef" type="Ref<HTMLElement | null>" default="undefined"}
  Reference to scroll container element.
  ::
::

## Examples

### Basic Scroll Progress

::code-preview
---
label: Preview
---
  :::div{class="relative"}
    :::MScrollProgress{class="bg-gradient-to-r from-purple-500 to-indigo-600"}
    :::
    :::div{class="p-4 space-y-4 min-h-screen"}
      :::h3{class="text-lg font-medium mb-4"}
      Scroll Progress Example
      :::
      :::div{class="h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg flex items-center justify-center"}
      Scroll down to see progress
      :::
      :::div{class="h-96 bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900 rounded-lg flex items-center justify-center"}
      More content to scroll through
      :::
      :::div{class="h-96 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 rounded-lg flex items-center justify-center"}
      Almost there
      :::
      :::div{class="h-96 bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900 dark:to-pink-900 rounded-lg flex items-center justify-center"}
      End of content
      :::
    :::
  :::
#code
```vue
<template>
  <div class="relative">
    <MScrollProgress class="bg-gradient-to-r from-purple-500 to-indigo-600" />
    <div class="p-4 space-y-4 min-h-screen">
      <h3 class="text-lg font-medium mb-4">Scroll Progress Example</h3>
      <div class="h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg flex items-center justify-center">
        Scroll down to see progress
      </div>
      <div class="h-96 bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900 rounded-lg flex items-center justify-center">
        More content to scroll through
      </div>
      <div class="h-96 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 rounded-lg flex items-center justify-center">
        Almost there
      </div>
      <div class="h-96 bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900 dark:to-pink-900 rounded-lg flex items-center justify-center">
        End of content
      </div>
    </div>
  </div>
</template>
```
::

### Custom Spring Options

::code-preview
---
label: Preview
---
  :::div{class="relative"}
    :::MScrollProgress{:spring-options="{ stiffness: 100, damping: 30 }" class="bg-gradient-to-r from-emerald-500 to-teal-600"}
    :::
    :::div{class="p-4 space-y-4 min-h-screen"}
      :::h3{class="text-lg font-medium mb-4"}
      Custom Spring Progress
      :::
      :::div{class="h-96 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 rounded-lg flex items-center justify-center"}
      Smooth scrolling progress
      :::
      :::div{class="h-96 bg-gradient-to-br from-fuchsia-100 to-purple-100 dark:from-fuchsia-900 dark:to-purple-900 rounded-lg flex items-center justify-center"}
      With custom spring animation
      :::
    :::
  :::
#code
```vue
<template>
  <div class="relative">
    <MScrollProgress 
      :spring-options="{ stiffness: 100, damping: 30 }" 
      class="bg-gradient-to-r from-emerald-500 to-teal-600"
    />
    <div class="p-4 space-y-4 min-h-screen">
      <h3 class="text-lg font-medium mb-4">Custom Spring Progress</h3>
      <div class="h-96 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 rounded-lg flex items-center justify-center">
        Smooth scrolling progress
      </div>
      <div class="h-96 bg-gradient-to-br from-fuchsia-100 to-purple-100 dark:from-fuchsia-900 dark:to-purple-900 rounded-lg flex items-center justify-center">
        With custom spring animation
      </div>
    </div>
  </div>
</template>
```
::