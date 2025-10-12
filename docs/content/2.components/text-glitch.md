---
title: Text Glitch
description: Glitch effect for text elements.
navigation:
  icon: i-lucide-zap
---

# Text Glitch

The TextGlitch component creates a glitch effect for text elements. It's perfect for creating eye-catching headings and animated text effects with a digital distortion style.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextGlitch{text="GLITCH"}
    :::
  :::
#code
```vue
<template>
  <MTextGlitch text="GLITCH" />
</template>
```
::

## Props

::field-group
  ::field{name="text" type="string" :required="true"}
  Text to glitch.
  ::
  
  ::field{name="trigger" type="'hover' | 'auto' | 'inView' | 'manual'" default="'hover'"}
  How to trigger the glitch effect.
  ::
  
  ::field{name="intensity" type="'low' | 'medium' | 'high' | 'extreme' | number" default="'medium'"}
  Intensity of the glitch effect.
  ::
  
  ::field{name="duration" type="number" default="2"}
  Duration of glitch effect in seconds.
  ::
  
  ::field{name="interval" type="number" default="3"}
  Interval between auto glitches in seconds.
  ::
  
  ::field{name="speed" type="number" default="500"}
  Animation speed in milliseconds.
  ::
  
  ::field{name="colors" type="string[]" default="['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']"}
  Colors for glitch layers.
  ::
  
  ::field{name="showScanLines" type="boolean" default="true"}
  Show scan lines effect.
  ::
  
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="autoStart" type="boolean" default="false"}
  Automatically start glitch effect.
  ::
::

## Examples

### Basic Text Glitch

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextGlitch{text="CYBER"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextGlitch text="CYBER" />
  </div>
</template>
```
::

### Auto Trigger

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextGlitch{text="AUTO" trigger="auto"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextGlitch text="AUTO" trigger="auto" />
  </div>
</template>
```
::

### High Intensity

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextGlitch{text="EXTREME" intensity="extreme" :speed="200"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextGlitch text="EXTREME" intensity="extreme" :speed="200" />
  </div>
</template>
```
::

### Custom Colors

::code-preview
---
label: Preview
---
::div
  ::component-example{name="text-glitch-custom-colors"}
::
#code
```vue
<template>
  <div class="p-4">
    <MTextGlitch 
      text="TEAL" 
      :colors="['#0d9488', '#14b8a6', '#2dd4bf']"
      trigger="auto"
      :interval="2"
    />
  </div>
</template>
```
::

### Manual Trigger

::code-preview
---
label: Preview
---
::div
  ::component-example{name="text-glitch-manual"}
::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <MTextGlitch ref="glitchRef" text="MANUAL" trigger="manual" />
    <button 
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      @click="triggerGlitch"
    >
      Trigger Glitch
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const glitchRef = ref(null)

const triggerGlitch = () => {
  if (glitchRef.value) {
    glitchRef.value.trigger()
  }
}
</script>
```
::
