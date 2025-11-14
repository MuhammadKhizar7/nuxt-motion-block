---
title: Morphing Popover
description: Advanced popover component with morphing animations and collision detection.
navigation:
  icon: i-lucide-maximize-2
---

# Morphing Popover

The MorphingPopover component creates an advanced popover with morphing animations, collision detection, and smart positioning. It features smooth transitions, keyboard navigation, and responsive design for a premium user experience.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center min-h-48"}
    <component-example name="morphing-popover-example" />
  :::
#code
```vue
<template>
  <MMorphingPopover>
    <MMorphingPopoverTrigger>
      <UButton color="primary">Open Popover</UButton>
    </MMorphingPopoverTrigger>
    
    <MMorphingPopoverContent class="p-4 w-64">
      <h3 class="font-bold text-lg mb-2">Morphing Popover</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        This is a popover with morphing animations.
      </p>
      <UButton color="primary" variant="solid" size="sm">Action</UButton>
    </MMorphingPopoverContent>
  </MMorphingPopover>
</template>
```
::

## Props

### MMorphingPopover Props

::field-group
  ::field{name="defaultOpen" type="boolean" default="false"}
  Whether the popover is open by default.
  ::
  
  ::field{name="open" type="boolean"}
  Controlled open state.
  ::
  
  ::field{name="transition" type="Transition"}
  Animation transition options.
  ::
  
  ::field{name="variants" type="Variants"}
  Animation variants for different states.
  ::
  
  ::field{name="closeOnClickOutside" type="boolean" default="true"}
  Close popover when clicking outside.
  ::
  
  ::field{name="closeOnEscape" type="boolean" default="true"}
  Close popover when pressing Escape key.
  ::
::

### MMorphingPopoverTrigger Props

::field{name="No props" type="void"}
The MorphingPopoverTrigger component doesn't accept any props. All configuration is handled through the parent MorphingPopover component.
::

### MMorphingPopoverContent Props

::field-group
  ::field{name="side" type="string" default="'bottom'"}
  Side to position the popover: 'top', 'bottom', 'left', or 'right'.
  ::
  
  ::field{name="align" type="string" default="'center'"}
  Alignment of the popover: 'start', 'center', or 'end'.
  ::
  
  ::field{name="sideOffset" type="number" default="8"}
  Distance in pixels from the trigger element.
  ::
  
  ::field{name="alignOffset" type="number" default="0"}
  Offset for alignment positioning.
  ::
  
  ::field{name="arrowEnabled" type="boolean" default="true"}
  Show arrow pointing to the trigger element.
  ::
  
  ::field{name="collisionDetection" type="boolean" default="true"}
  Enable collision detection with viewport boundaries.
  ::
  
  ::field{name="sticky" type="boolean" default="false"}
  Keep popover attached to trigger when scrolling.
  ::
  
  ::field{name="boundary" type="string" default="'viewport'"}
  Boundary for collision detection: 'viewport' or CSS selector.
  ::
::

## Events

### MMorphingPopover Events

::field-group
  ::field{name="open-change" type="function"}
  Emitted when the popover open state changes. Returns the new open state.
  ::
::

### MMorphingPopoverTrigger Events

::field-group
  ::field{name="open" type="function"}
  Emitted when the popover is opened.
  ::
  
  ::field{name="close" type="function"}
  Emitted when the popover is closed.
  ::
::

## Examples

### Basic Morphing Popover

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="morphing-popover-basic" />
  :::
#code
```vue
<template>
  <MMorphingPopover>
    <MMorphingPopoverTrigger>
      <UButton color="primary">Open Popover</UButton>
    </MMorphingPopoverTrigger>
    
    <MMorphingPopoverContent class="p-4 w-64">
      <h3 class="font-bold text-lg mb-2">Basic Popover</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        This is a basic morphing popover.
      </p>
      <UButton color="primary" variant="solid" size="sm">Action</UButton>
    </MMorphingPopoverContent>
  </MMorphingPopover>
</template>
```
::

### Popover with Top Position

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="morphing-popover-top" />
  :::
#code
```vue
<template>
  <MMorphingPopover>
    <MMorphingPopoverTrigger>
      <UButton color="secondary">Top Popover</UButton>
    </MMorphingPopoverTrigger>
    
    <MMorphingPopoverContent side="top" class="p-4 w-64">
      <h3 class="font-bold text-lg mb-2">Top Popover</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        This popover appears above the trigger.
      </p>
    </MMorphingPopoverContent>
  </MMorphingPopover>
</template>
```
::

### Popover with Left Position

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="morphing-popover-left" />
  :::
#code
```vue
<template>
  <MMorphingPopover>
    <MMorphingPopoverTrigger>
      <UButton color="tertiary">Left Popover</UButton>
    </MMorphingPopoverTrigger>
    
    <MMorphingPopoverContent side="left" class="p-4 w-64">
      <h3 class="font-bold text-lg mb-2">Left Popover</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        This popover appears to the left of the trigger.
      </p>
    </MMorphingPopoverContent>
  </MMorphingPopover>
</template>
```
::

### Popover with Custom Styling

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="morphing-popover-styled" />
  :::
#code
```vue
<template>
  <MMorphingPopover>
    <MMorphingPopoverTrigger>
      <UButton color="primary" variant="outline">Styled Popover</UButton>
    </MMorphingPopoverTrigger>
    
    <MMorphingPopoverContent class="p-6 w-80 bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0">
      <h3 class="font-bold text-lg mb-2">Styled Popover</h3>
      <p class="mb-4 opacity-90">
        This popover has custom gradient styling.
      </p>
      <div class="flex space-x-2">
        <UButton color="white" variant="solid" size="sm">Action</UButton>
        <UButton color="white" variant="outline" size="sm">Cancel</UButton>
      </div>
    </MMorphingPopoverContent>
  </MMorphingPopover>
</template>
```
::

### Controlled Popover

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="morphing-popover-controlled" />
  :::
#code
```vue
<template>
  <div class="space-y-4">
    <div class="flex space-x-2">
      <UButton @click="open = true">Open</UButton>
      <UButton @click="open = false">Close</UButton>
    </div>
    
    <MMorphingPopover v-model:open="open">
      <MMorphingPopoverTrigger>
        <UButton color="primary">Controlled Popover</UButton>
      </MMorphingPopoverTrigger>
      
      <MMorphingPopoverContent class="p-4 w-80">
        <h3 class="font-bold text-lg mb-2">Controlled Popover</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          This popover is controlled programmatically.
        </p>
        <UButton @click="open = false" color="primary" variant="solid" size="sm">Close</UButton>
      </MMorphingPopoverContent>
    </MMorphingPopover>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>
```
::

