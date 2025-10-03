---
title: useMorphingPopover
description: Provides popover context for custom popover implementations.
navigation:
  icon: i-lucide-message-circle
---

# useMorphingPopover

The useMorphingPopover composable provides popover context for custom popover implementations. It's used internally by morphing popover components but can also be used to create custom popover-like components.

## Usage

```ts
import { useMorphingPopover } from '#imports'

const popoverContext = useMorphingPopover()
```

## Parameters

::field-group
  ::field{name="defaultOpen" type="boolean" default="false"}
  Whether the popover is open by default.
  ::
  
  ::field{name="open" type="boolean" default="undefined"}
  Controlled open state.
  ::
  
  ::field{name="onOpenChange" type="function" default="undefined"}
  Callback when open state changes.
  ::
  
  ::field{name="transition" type="Transition" default="undefined"}
  Animation transition options.
  ::
  
  ::field{name="variants" type="Variants" default="undefined"}
  Animation variants.
  ::
  
  ::field{name="closeOnClickOutside" type="boolean" default="true"}
  Close popover when clicking outside.
  ::
  
  ::field{name="closeOnEscape" type="boolean" default="true"}
  Close popover when pressing escape.
  ::
  
  ::field{name="positioning" type="PositioningConfig" default="undefined"}
  Positioning configuration.
  ::
  
  ::field{name="morphingPath" type="MorphingPath" default="undefined"}
  Morphing path configuration.
  ::
  
  ::field{name="collisionDetection" type="boolean" default="true"}
  Enable collision detection.
  ::
  
  ::field{name="arrowEnabled" type="boolean" default="true"}
  Show/hide arrow.
  ::
::

## Returns

::field-group
  ::field{name="isOpen" type="Ref<boolean>"}
  Popover open state.
  ::
  
  ::field{name="uniqueId" type="string"}
  Unique identifier for the popover.
  ::
  
  ::field{name="open" type="function"}
  Open popover function.
  ::
  
  ::field{name="close" type="function"}
  Close popover function.
  ::
  
  ::field{name="toggle" type="function"}
  Toggle popover function.
  ::
  
  ::field{name="variants" type="Ref<Variants>"}
  Animation variants.
  ::
  
  ::field{name="transition" type="Ref<Transition>"}
  Animation transition options.
  ::
  
  ::field{name="position" type="Ref<PopoverPosition | null>"}
  Popover position.
  ::
  
  ::field{name="positioningConfig" type="Ref<PositioningConfig>"}
  Positioning configuration.
  ::
  
  ::field{name="isPositioning" type="Ref<boolean>"}
  Whether positioning is in progress.
  ::
  
  ::field{name="onOpenChange" type="function"}
  Callback when open state changes.
  ::
::

## Example

```vue
<template>
  <div>
    <button @click="toggle">
      Toggle Popover
    </button>
    
    <div v-if="isOpen" class="popover-content">
      <p>Custom popover content</p>
      <button @click="close">Close</button>
    </div>
  </div>
</template>

<script setup>
import { useMorphingPopover } from '#imports'

const { isOpen, open, close, toggle } = useMorphingPopover({
  defaultOpen: false,
  onOpenChange: (open) => {
    console.log('Popover is now', open ? 'open' : 'closed')
  }
})
</script>

<style scoped>
.popover-content {
  position: absolute;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
</style>
```