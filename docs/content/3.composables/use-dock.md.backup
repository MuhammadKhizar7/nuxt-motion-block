---
title: useDock
description: Composable for creating macOS-style dock components with magnification effects.
navigation:
  icon: i-lucide-apple
---

# useDock

The [useDock](file:///e:/projects/javascript/nuxt-motion-block/src/runtime/composables/useDock.ts#L4-L42) composable provides functionality for creating macOS-style dock components with magnification effects. It handles the physics-based animation and scaling of dock items based on mouse proximity.

## Usage

```vue
<template>
  <div ref="dockRef" class="dock-container">
    <div 
      v-for="(item, index) in items" 
      :key="index"
      class="dock-item"
      :style="getItemStyle(index)"
    >
      <img :src="item.icon" :alt="item.label" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDock } from '#imports'

const dockRef = ref()
const items = ref([
  { icon: '/icons/finder.png', label: 'Finder' },
  { icon: '/icons/mail.png', label: 'Mail' },
  { icon: '/icons/app-store.png', label: 'App Store' }
])

const { getItemStyle } = useDock(dockRef, {
  magnification: 1.5,
  distance: 200,
  spring: { stiffness: 300, damping: 20 }
})
</script>
```

## Parameters

::field-group
  ::field{name="dockRef" type="Ref<HTMLElement>"}
  Reference to the dock container element.
  ::
  
  ::field{name="options" type="object" default="{}"}
  Configuration options for the dock behavior.
  ::
  
  ::field{type="number" name="options.magnification" default="1.5"}
  The maximum scale factor for dock items when hovered.
  ::
  
  ::field{type="number" name="options.distance" default="200"}
  The distance from the mouse where items start to magnify.
  ::
  
  ::field{type="object" name="options.spring" default="{ stiffness: 300, damping: 20 }"}
  Spring physics configuration for animations.
  ::
::

## Example

```vue
<template>
  <div class="flex justify-center items-end h-screen bg-gradient-to-br from-blue-400 to-purple-600">
    <div 
      ref="dockRef" 
      class="flex items-end p-2 rounded-2xl bg-black/20 backdrop-blur-lg"
    >
      <div
        v-for="(item, index) in dockItems"
        :key="index"
        class="dock-item mx-1 transition-all duration-100 ease-out"
        :style="getItemStyle(index)"
      >
        <button
          class="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
        >
          <img :src="item.icon" :alt="item.label" class="w-8 h-8" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDock } from '#imports'

const dockRef = ref()

const dockItems = ref([
  { icon: '/icons/finder.svg', label: 'Finder' },
  { icon: '/icons/mail.svg', label: 'Mail' },
  { icon: '/icons/messages.svg', label: 'Messages' },
  { icon: '/icons/photos.svg', label: 'Photos' },
  { icon: '/icons/app-store.svg', label: 'App Store' }
])

const { getItemStyle } = useDock(dockRef, {
  magnification: 2,
  distance: 150,
  spring: { stiffness: 400, damping: 25 }
})
</script>
```