---
title: useDock
description: Provides dock context for custom dock implementations.
navigation:
  icon: i-lucide-app-window
---

# useDock

The useDock composable provides dock context for custom dock implementations. It's used internally by dock components but can also be used to create custom dock-like components.

## Usage

```ts
import { useDockContext } from '#imports'

const dockContext = useDockContext()
```

## Returns

::field-group
  ::field{name="mouseX" type="MotionValue<number>"}
  Mouse position relative to dock.
  ::
  
  ::field{name="spring" type="SpringOptions"}
  Spring physics options.
  ::
  
  ::field{name="magnification" type="number"}
  Magnification factor.
  ::
  
  ::field{name="distance" type="number"}
  Distance for magnification effect.
  ::
::

## Example

```vue
<template>
  <div 
    ref="dockRef"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </div>
</template>

<script setup>
import { useDockContext } from '#imports'
import { useMotionValue } from 'motion-v'

const dockContext = useDockContext()
const mouseX = useMotionValue(Infinity)

const handleMouseMove = (event) => {
  if (!dockRef.value) return
  const dockRect = dockRef.value.getBoundingClientRect()
  const relativePosition = event.clientX - dockRect.left
  mouseX.set(relativePosition)
}

const handleMouseLeave = () => {
  mouseX.set(Infinity)
}
</script>
```