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
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="animated-background-basic" />
  :::
#code
```vue
<template>
  <div class="p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl max-w-4xl mx-auto">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Dashboard Navigation</h2>
      <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Interactive navigation system with animated background effects that respond to user interactions for enhanced engagement
      </p>
    </div>
    
    <MAnimatedBackground class="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div class="p-2 bg-gray-50 dark:bg-gray-700/50">
        <div class="flex flex-wrap gap-2">
          <div 
            data-id="overview" 
            class="px-5 py-3 bg-white dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex items-center gap-3 border border-gray-200 dark:border-gray-600"
          >
            <div class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
              <UIcon name="i-lucide-layout-dashboard" class="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <span class="font-medium text-gray-900 dark:text-white">Overview</span>
          </div>
          
          <div 
            data-id="analytics" 
            class="px-5 py-3 bg-white dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex items-center gap-3 border border-gray-200 dark:border-gray-600"
          >
            <div class="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <UIcon name="i-lucide-bar-chart-3" class="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <span class="font-medium text-gray-900 dark:text-white">Analytics</span>
          </div>
          
          <div 
            data-id="reports" 
            class="px-5 py-3 bg-white dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex items-center gap-3 border border-gray-200 dark:border-gray-600"
          >
            <div class="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
              <UIcon name="i-lucide-file-text" class="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <span class="font-medium text-gray-900 dark:text-white">Reports</span>
          </div>
          
          <div 
            data-id="users" 
            class="px-5 py-3 bg-white dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex items-center gap-3 border border-gray-200 dark:border-gray-600"
          >
            <div class="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center">
              <UIcon name="i-lucide-users" class="w-4 h-4 text-orange-600 dark:text-orange-400" />
            </div>
            <span class="font-medium text-gray-900 dark:text-white">Users</span>
          </div>
          
          <div 
            data-id="settings" 
            class="px-5 py-3 bg-white dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex items-center gap-3 border border-gray-200 dark:border-gray-600"
          >
            <div class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <UIcon name="i-lucide-settings" class="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </div>
            <span class="font-medium text-gray-900 dark:text-white">Settings</span>
          </div>
        </div>
      </div>
      
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <UCard class="hover:shadow-md transition-shadow">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-500 dark:text-gray-400 text-sm">Total Revenue</p>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">$45,231</p>
              </div>
              <div class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <UIcon name="i-lucide-trending-up" class="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </UCard>
          
          <UCard class="hover:shadow-md transition-shadow">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-500 dark:text-gray-400 text-sm">Active Users</p>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">12,458</p>
              </div>
              <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <UIcon name="i-lucide-users" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </UCard>
          
          <UCard class="hover:shadow-md transition-shadow">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-500 dark:text-gray-400 text-sm">Conversion Rate</p>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">24.8%</p>
              </div>
              <div class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <UIcon name="i-lucide-percent" class="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </UCard>
        </div>
        
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
          <UButton color="primary" variant="ghost" size="sm">
            View All
          </UButton>
        </div>
        
        <div class="space-y-3">
          <div class="flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
            <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
              <UIcon name="i-lucide-shopping-cart" class="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div class="flex-1">
              <p class="font-medium text-gray-900 dark:text-white">New order received</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">2 minutes ago</p>
            </div>
            <UButton color="primary" variant="ghost" size="sm">
              View
            </UButton>
          </div>
          
          <div class="flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
            <div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
              <UIcon name="i-lucide-user-plus" class="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div class="flex-1">
              <p class="font-medium text-gray-900 dark:text-white">New user registered</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">15 minutes ago</p>
            </div>
            <UButton color="primary" variant="ghost" size="sm">
              View
            </UButton>
          </div>
        </div>
      </div>
    </MAnimatedBackground>
    
    <div class="mt-6 text-center">
      <p class="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center gap-2">
        <UIcon name="i-lucide-mouse-pointer" class="w-4 h-4" />
        Hover over navigation items to see the animated background effect
      </p>
    </div>
  </div>
</template>
```
::

### With Custom Styling

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
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
  :::div{class="flex justify-center w-full h-full"}
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
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="animated-background-transition" />
  :::
#code
```vue
<template>
  <MAnimatedBackground
    background-class="-z-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1"
    :transition="{ duration: 500, ease: 'ease-in-out' }"
    enable-hover
  >
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 rounded-lg">
      <div
        v-for="(item, index) in ITEMS"
        :key="index"
        :data-id="`card-${index}`"
      >
        <div class="flex select-none flex-col gap-2 p-4">
          <h3 class="text-base font-medium text-zinc-800 dark:text-zinc-50">
            {{ item.title }}
          </h3>
          <p class="text-base text-zinc-600 dark:text-zinc-400">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </MAnimatedBackground>
</template>

<script setup lang="ts">
const ITEMS = [
  {
    id: 1,
    title: 'Dialog',
    description: 'Enhances modal presentations.'
  },
  {
    id: 2,
    title: 'Popover',
    description: 'For small interactive overlays.'
  },
  {
    id: 3,
    title: 'Accordion',
    description: 'Collapsible sections for more content.'
  },
  {
    id: 4,
    title: 'Collapsible',
    description: 'Collapsible sections for more content.'
  },
  {
    id: 5,
    title: 'Drag to Reorder',
    description: 'Reorder items with drag and drop.'
  },
  {
    id: 6,
    title: 'Swipe to Delete',
    description: 'Delete items with swipe gestures.'
  }
]
</script>

```
::


