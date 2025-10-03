---
title: Glow Effect
description: Glowing effect around elements with customizable properties.
navigation:
  icon: i-lucide-sun
---

# Glow Effect

The GlowEffect component creates a glowing effect around elements with customizable properties. It's perfect for adding visual interest to cards, buttons, and other UI elements.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="relative"}
    :::MGlowEffect
    :::
      :::UCard{class="relative"}
        :::h3{class="text-lg font-medium mb-2"}
          Glowing Card
        :::
        :::p
        This card has a glowing effect around it.
        :::
      :::
  :::
#code
```vue
<template>
  <div class="relative">
  <MGlowEffect>
    <UCard class="relative">
      <h3 class="text-lg font-medium mb-2">Glowing Card</h3>
      <p>This card has a glowing effect around it.</p>
    </UCard>
  </MGlowEffect>
  </div>
</template>
```
::

## Props

::field-group
  ::field{name="class" type="string" default="undefined"}
  CSS classes to apply to the glow element.
  ::
  
  ::field{name="style" type="Object" default="undefined"}
  Custom styles to apply to the glow element.
  ::
  
  ::field{name="colors" type="string[]" default="['#FF5733', '#33FF57', '#3357FF', '#F1C40F']"}
  Array of colors for the glow effect.
  ::
  
  ::field{name="mode" type="'rotate' | 'pulse' | 'breathe' | 'colorShift' | 'flowHorizontal' | 'static'" default="'rotate'"}
  Animation mode for the glow effect.
  ::
  
  ::field{name="blur" type="number | 'softest' | 'soft' | 'medium' | 'strong' | 'stronger' | 'strongest' | 'none'" default="'medium'"}
  Blur intensity of the glow effect.
  ::
  
  ::field{name="scale" type="number" default="1"}
  Scale factor for the glow effect.
  ::
  
  ::field{name="duration" type="number" default="5"}
  Animation duration in seconds.
  ::
::

## Examples

### Basic Glow Effect

::code-preview
---
label: Preview
---
  :::div{class="relative"}
    :::MGlowEffect{mode='colorShift' blur='soft' duration="3" scale="0.9"}
    :::
      :::UButton{class="relative" color="neutral" size="sm"}
        Glowing Button
      :::
  :::
#code
```vue
<template>
  <div class="reactive">
    <MGlowEffect mode='colorShift' blur='soft' duration="3" scale="0.9" />
     <UButton class="relative">Glowing Button</UButton>
  </div>
</template>
```
::

### Custom Colors and Mode

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::component-example{name="glow-effect-example"}
    :::
  :::
#code
```vue
<template>
  <div class="relative">
    <MGlowEffect 
      :colors="['#3498db', '#2ecc71', '#e74c3c']" 
      mode="pulse"
    >
    <UCard class="relative">
      <h3 class="text-lg font-medium mb-2">
        Pulsing Glow
      </h3>
      <p>This card has a pulsing glow effect.</p>
    </UCard>
    </MGlowEffect>
  </div>
</template>
```
::

### Strong Blur Effect

::code-preview
---
label: Preview
---
  :::div{class="relative"}
    :::MGlowEffect{blur="strong" :scale="1.2"}
    :::
      :::UCard{class="relative"}
        :::h3{class="text-lg font-medium mb-2"}
        Strong Glow
        :::
        :::p
        This card has a strong glowing effect.
        :::
      :::
  :::
#code
```vue
<template>
  <div class="relative">
    <MGlowEffect 
      blur="strong" 
      :scale="1.2"
    />
      <UCard class="relative">
        <h3 class="text-lg font-medium mb-2">Strong Glow</h3>
        <p>This card has a strong glowing effect.</p>
      </UCard>
  </div>
</template>
```
::