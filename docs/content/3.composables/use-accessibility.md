---
title: useAccessibility
description: Composable for enhancing accessibility in motion components.
navigation:
  icon: i-lucide-accessibility
---

# useAccessibility

The [useAccessibility](file:///e:/projects/javascript/nuxt-motion-block/src/runtime/composables/useAccessibility.ts#L3-L17) composable provides functionality for enhancing accessibility in motion components. It helps manage focus, keyboard navigation, and screen reader support for interactive components.

## Usage

```vue
<template>
  <div ref="containerRef" v-bind="containerAttrs">
    <button 
      v-for="(item, index) in items" 
      :key="index"
      :ref="el => itemRefs[index] = el"
      @keydown="handleKeyDown"
      @focus="handleFocus(index)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAccessibility } from '#imports'

const containerRef = ref()
const itemRefs = ref([])

const items = ref([
  { label: 'Item 1' },
  { label: 'Item 2' },
  { label: 'Item 3' }
])

const { 
  containerAttrs, 
  handleKeyDown, 
  handleFocus 
} = useAccessibility(containerRef, itemRefs)

// Handle custom key events
const onKeyDown = (event) => {
  handleKeyDown(event)
  // Add custom key handling here
}
</script>
```

## Parameters

::field-group
  ::field{name="containerRef" type="Ref<HTMLElement>"}
  Reference to the container element that holds the focusable items.
  ::
  
  ::field{name="itemRefs" type="Ref<HTMLElement[]>"}
  Reference to an array of focusable item elements.
  ::
  
  ::field{name="options" type="object" default="{}"}
  Configuration options for accessibility behavior.
  ::
  
  ::field{type="boolean" name="options.loop" default="true"}
  Whether focus should loop from last to first item and vice versa.
  ::
  
  ::field{type="string" name="options.orientation" default="'horizontal'"}
  The orientation of the focusable items ('horizontal' or 'vertical').
  ::
::

## Example

```vue
<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-center">Accessible Navigation Demo</h1>
      
      <nav 
        ref="navRef" 
        v-bind="navAttrs"
        class="bg-white rounded-xl shadow-lg p-2 mb-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <ul class="flex space-x-1">
          <li v-for="(item, index) in navItems" :key="item.id">
            <button
              :ref="el => itemRefs[index] = el"
              @keydown="handleNavKeyDown"
              @focus="handleNavFocus(index)"
              :class="[
                'px-4 py-2 rounded-lg transition-all',
                activeIndex === index 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              ]"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </nav>
      
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Content Area</h2>
        <p class="text-gray-600">
          Use arrow keys to navigate between the navigation items above. 
          The focus will loop from the last item back to the first.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAccessibility } from '#imports'

const navRef = ref()
const itemRefs = ref([])
const activeIndex = ref(0)

const navItems = ref([
  { id: 1, label: 'Home' },
  { id: 2, label: 'Products' },
  { id: 3, label: 'Services' },
  { id: 4, label: 'About' },
  { id: 5, label: 'Contact' }
])

const { 
  containerAttrs: navAttrs, 
  handleKeyDown: handleNavKeyDown, 
  handleFocus: handleNavFocus 
} = useAccessibility(navRef, itemRefs, {
  loop: true,
  orientation: 'horizontal'
})

// Update active index when an item is focused
const handleNavFocus = (index) => {
  activeIndex.value = index
  handleNavFocus(index)
}
</script>
```