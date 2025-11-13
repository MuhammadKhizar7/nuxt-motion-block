---
title: useMorphingPopover
description: Composable for creating morphing popover components with smooth transitions.
navigation:
  icon: i-lucide-maximize-2
---

# useMorphingPopover

The [useMorphingPopover](file:///e:/projects/javascript/nuxt-motion-block/src/runtime/composables/useMorphingPopover.ts#L11-L64) composable provides functionality for creating morphing popover components with smooth transitions. It handles the animation and positioning of popovers that morph from a trigger element to a full popover.

## Usage

```vue
<template>
  <div>
    <button ref="triggerRef" @click="open">
      Open Popover
    </button>
    
    <div v-if="isOpen" ref="popoverRef" class="popover-content">
      <h3>Popover Content</h3>
      <p>This is the morphing popover content.</p>
      <button @click="close">Close</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMorphingPopover } from '#imports'

const triggerRef = ref()
const popoverRef = ref()
const isOpen = ref(false)

const { open, close } = useMorphingPopover(triggerRef, popoverRef, {
  duration: 300,
  easing: 'easeInOut'
})

const openPopover = () => {
  isOpen.value = true
  open()
}

const closePopover = () => {
  close()
  setTimeout(() => {
    isOpen.value = false
  }, 300)
}
</script>
```

## Parameters

::field-group
  ::field{name="triggerRef" type="Ref<HTMLElement>"}
  Reference to the trigger element that initiates the popover.
  ::
  
  ::field{name="popoverRef" type="Ref<HTMLElement>"}
  Reference to the popover content element.
  ::
  
  ::field{name="options" type="object" default="{}"}
  Configuration options for the morphing behavior.
  ::
  
  ::field{type="number" name="options.duration" default="300"}
  Duration of the morphing animation in milliseconds.
  ::
  
  ::field{type="string" name="options.easing" default="'easeInOut'"}
  Easing function for the animation.
  ::
::

## Example

```vue
<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-6">Morphing Popover Demo</h1>
      
      <div class="relative inline-block">
        <button 
          ref="triggerRef"
          @click="openPopover"
          class="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
        >
          Open Morphing Popover
        </button>
        
        <div 
          v-if="isOpen"
          ref="popoverRef"
          class="absolute mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-10"
        >
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Morphing Popover</h3>
            <p class="text-gray-600 mb-4">
              This popover smoothly morphs from the trigger button to its full size with elegant animations.
            </p>
            <div class="flex space-x-3">
              <button 
                @click="closePopover"
                class="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button 
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMorphingPopover } from '#imports'

const triggerRef = ref()
const popoverRef = ref()
const isOpen = ref(false)

const { open, close } = useMorphingPopover(triggerRef, popoverRef, {
  duration: 400,
  easing: 'easeOutBack'
})

const openPopover = () => {
  isOpen.value = true
  open()
}

const closePopover = () => {
  close()
  setTimeout(() => {
    isOpen.value = false
  }, 400)
}
</script>
```