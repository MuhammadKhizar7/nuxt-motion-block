---
title: Morphing Popover
description: Advanced popover component with morphing animations powered by Motion One.
navigation:
  icon: i-lucide-maximize-2
---

# Morphing Popover

The MorphingPopover component creates an advanced popover with morphing animations. It's built as a wrapper around Nuxt UI's Popover component, adding smooth motion animations while maintaining all the functionality of the original component.

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
  <MorphingPopover>
    <MorphingPopoverTrigger>
      <UButton color="primary">Open Popover</UButton>
    </MorphingPopoverTrigger>
    
    <template #content>
      <div class="p-4 w-64">
        <h3 class="font-bold text-lg mb-2">Morphing Popover</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          This is a popover with morphing animations.
        </p>
        <UButton color="primary" variant="solid" size="sm">Action</UButton>
      </div>
    </template>
  </MorphingPopover>
</template>
```
::

## Props

### MorphingPopover Props

The MorphingPopover component accepts all props from [Nuxt UI's Popover](https://ui.nuxt.com/docs/components/popover) component, plus:

::field-group
  ::field{name="transition" type="object"}
  Animation transition options for morphing effects.
  ::
  
  ::field{name="variants" type="object"}
  Animation variants for different states (initial, animate, exit).
  ::
::

### MorphingPopoverTrigger Props

::field{name="No props" type="void"}
The MorphingPopoverTrigger component doesn't accept any props. All configuration is handled through the parent MorphingPopover component.
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
  <MorphingPopover>
    <MorphingPopoverTrigger>
      <UButton color="primary">Open Popover</UButton>
    </MorphingPopoverTrigger>
    
    <template #content>
      <div class="p-4 w-64">
        <h3 class="font-bold text-lg mb-2">Basic Popover</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          This is a basic morphing popover.
        </p>
        <UButton color="primary" variant="solid" size="sm">Action</UButton>
      </div>
    </template>
  </MorphingPopover>
</template>
```
::

### Popover with Hover Mode

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="morphing-popover-hover" />
  :::
#code
```vue
<template>
  <MorphingPopover mode="hover" :open-delay="300" :close-delay="200">
    <MorphingPopoverTrigger>
      <UButton color="secondary">Hover Popover</UButton>
    </MorphingPopoverTrigger>
    
    <template #content>
      <div class="p-4 w-64">
        <h3 class="font-bold text-lg mb-2">Hover Popover</h3>
        <p class="text-gray-600 dark:text-gray-400">
          This popover opens on hover with custom delays.
        </p>
      </div>
    </template>
  </MorphingPopover>
</template>
```
::

### Popover with Custom Animations

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="morphing-popover-custom" />
  :::
#code
```vue
<template>
  <MorphingPopover :variants="customVariants" :transition="customTransition">
    <MorphingPopoverTrigger>
      <UButton color="tertiary">Custom Animation</UButton>
    </MorphingPopoverTrigger>
    
    <template #content>
      <div class="p-4 w-64">
        <h3 class="font-bold text-lg mb-2">Custom Animation</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          This popover has custom morphing animations.
        </p>
      </div>
    </template>
  </MorphingPopover>
</template>

<script setup>
const customVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    rotate: -15
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    rotate: 15
  }
}

const customTransition = {
  type: 'spring',
  bounce: 0.2,
  duration: 0.5
}
</script>
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
    
    <MorphingPopover v-model:open="open">
      <MorphingPopoverTrigger>
        <UButton color="primary">Controlled Popover</UButton>
      </MorphingPopoverTrigger>
      
      <template #content>
        <div class="p-4 w-80">
          <h3 class="font-bold text-lg mb-2">Controlled Popover</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            This popover is controlled programmatically.
          </p>
          <UButton @click="open = false" color="primary" variant="solid" size="sm">Close</UButton>
        </div>
      </template>
    </MorphingPopover>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>
```
::

### Popover with Anchor Slot

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="morphing-popover-anchor" />
  :::
#code
```vue
<template>
  <MorphingPopover>
    <template #anchor>
      <UInput placeholder="Focus to open popover" />
    </template>
    
    <template #content>
      <div class="p-4 w-64">
        <h3 class="font-bold text-lg mb-2">Anchor Slot</h3>
        <p class="text-gray-600 dark:text-gray-400">
          This popover uses the anchor slot.
        </p>
      </div>
    </template>
  </MorphingPopover>
</template>
```
::