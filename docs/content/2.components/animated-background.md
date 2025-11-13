---
title: Animated Background
description: Animated background that follows interactive elements.
navigation:
  icon: i-lucide-square-stack
---

# Animated Background

The AnimatedBackground component creates animated background effects that follow interactive elements. It's perfect for creating dynamic navigation menus, tab interfaces, or any interactive element group where you want to highlight the active element with a smooth animation.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    <component-example name="animated-background-example" />
  :::
#code
```vue
<template>
  <MAnimatedBackground
    :transition="{ duration: 300 }"
    background-class="bg-blue-500 rounded-lg -z-1"
  >
    <div class="flex space-x-2">
      <button 
        data-id="home" 
        class="px-4 py-2 rounded-md"
      >
        Home
      </button>
      <button 
        data-id="about" 
        class="px-4 py-2 rounded-md"
      >
        About
      </button>
      <button 
        data-id="contact" 
        class="px-4 py-2 rounded-md"
      >
        Contact
      </button>
    </div>
  </MAnimatedBackground>
</template>
```
::

## Props

::field-group
  ::field{name="defaultValue" type="string | null" default="null"}
  Default active element ID.
  ::
  
  ::field{name="enableHover" type="boolean" default="false"}
  Enable hover interactions.
  ::
  
  ::field{name="backgroundClass" type="string" default="'bg-blue-500 rounded-lg'"}
  CSS classes for the background element.
  ::
  
  ::field{name="containerClass" type="string" default="''"}
  CSS classes for the container.
  ::
  
  ::field{name="transition" type="object" default="{ duration: 300, ease: 'ease-out' }"}
  Transition settings.
  ::
::

## Events

::field-group
  ::field{name="valueChange" type="(value: string | null) => void"}
  Emitted when the active element changes.
  ::
::

## Slots

::field-group
  ::field{name="default" type="{ activeId: string | null, setActiveId: (id: string | null) => void }"}
  Default slot with active ID and setter function.
  ::
::

## Examples

### Basic Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-background-basic" />
  :::
#code
```vue
<template>
  <MAnimatedBackground>
    <div class="flex space-x-2">
      <div data-id="item1" class="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded">
        Item 1
      </div>
      <div data-id="item2" class="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded">
        Item 2
      </div>
    </div>
  </MAnimatedBackground>
</template>
```
::

### With Custom Styling

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-background-custom-styling" />
  :::
#code
```vue
<template>
  <MAnimatedBackground
    background-class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
    :transition="{ duration: 500, ease: 'ease-in-out' }"
  >
    <div class="flex space-x-4 p-2">
      <button 
        data-id="tab1" 
        class="px-6 py-3 font-medium transition-colors"
      >
        Tab 1
      </button>
      <button 
        data-id="tab2" 
        class="px-6 py-3 font-medium transition-colors"
      >
        Tab 2
      </button>
      <button 
        data-id="tab3" 
        class="px-6 py-3 font-medium transition-colors"
      >
        Tab 3
      </button>
    </div>
  </MAnimatedBackground>
</template>
```
::

### With Hover Activation

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-background-hover" />
  :::
#code
```vue
<template>
  <MAnimatedBackground
    enable-hover
    background-class="bg-emerald-500 rounded-lg shadow-lg -z-1"
  >
    <div class="flex space-x-3">
      <div data-id="nav1" class="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
        Navigation 1
      </div>
      <div data-id="nav2" class="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
        Navigation 2
      </div>
      <div data-id="nav3" class="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
        Navigation 3
      </div>
    </div>
  </MAnimatedBackground>
</template>
```
::

### With Custom Transition

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="animated-background-transition" />
  :::
#code
```vue
<template>
  <div class='grid grid-cols-2 p-10 md:grid-cols-3'>
    <MAnimatedBackground
      class='rounded-lg bg-zinc-100 dark:bg-zinc-800'
      :transition="{ type: 'spring', bounce: 0.2, duration: 0.6 }"
      enableHover
    >
      <div 
        v-for="(item, index) in ITEMS" 
        :key="index" 
        :data-id="`card-${index}`"
      >
        <div class='flex select-none flex-col space-y-1 p-4'>
          <h3 class='text-base font-medium text-zinc-800 dark:text-zinc-50'>
            {{ item.title }}
          </h3>
          <p class='text-base text-zinc-600 dark:text-zinc-400'>
            {{ item.description }}
          </p>
        </div>
      </div>
    </MAnimatedBackground>
  </div>
</template>

<script setup lang="ts">

const ITEMS = [
  {
    id: 1,
    title: 'Dialog',
    description: 'Enhances modal presentations.',
  },
  {
    id: 2,
    title: 'Popover',
    description: 'For small interactive overlays.',
  },
  {
    id: 3,
    title: 'Accordion',
    description: 'Collapsible sections for more content.',
  },
  {
    id: 4,
    title: 'Collapsible',
    description: 'Collapsible sections for more content.',
  },
  {
    id: 5,
    title: 'Drag to Reorder',
    description: 'Reorder items with drag and drop.',
  },
  {
    id: 6,
    title: 'Swipe to Delete',
    description: 'Delete items with swipe gestures.',
  },
];
</script>
```
::


