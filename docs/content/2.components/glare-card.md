---
title: Glare Card
description: Card with dynamic glare effects that follow cursor movement for a shiny, reflective appearance.
navigation:
  icon: i-lucide-sparkles
---

# Glare Card

The GlareCard component creates a card with dynamic glare effects that follow cursor movement, giving it a shiny, reflective appearance.

## Usage

```vue
<template>
  <MGlareCard class="w-80 h-96">
    <template #header>
      <h2 class="text-2xl font-bold">Glare Card</h2>
    </template>
    
    <div class="text-center space-y-4">
      <UIcon name="i-heroicons-sparkles" class="w-12 h-12 mx-auto text-blue-400" />
      <p class="text-slate-400">
        Move your cursor to see the glare effect
      </p>
    </div>
  </MGlareCard>
</template>
```

## Props

::field-group
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the card.
  ::
  
  ::field{name="ui" type="object" default="{}"}
  UI configuration for the underlying UCard component.
  ::
::