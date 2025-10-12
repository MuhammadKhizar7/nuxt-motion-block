---
title: Text Shimmer Wave
description: Text with wave-like shimmer effect.
navigation:
  icon: i-lucide-waves
---

# Text Shimmer Wave

The TextShimmerWave component creates text with a wave-like shimmer effect. Each character animates independently with 3D transformations and color transitions.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextShimmerWave{text="Wave Shimmer"}
    :::
  :::
#code
```vue
<template>
  <MTextShimmerWave text="Wave Shimmer" /> 
</template>
```
::

## Props

::field-group
  ::field{name="text" type="string" :required="true"}
  Text to shimmer with wave effect.
  ::
  
  ::field{name="as" type="string" default="'p'"}
  HTML element to render as.
  ::
  
  ::field{name="className" type="string" default="''"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="duration" type="number" default="1"}
  Animation duration in seconds.
  ::
  
  ::field{name="zDistance" type="number" default="10"}
  Z-axis movement distance.
  ::
  
  ::field{name="xDistance" type="number" default="2"}
  X-axis movement distance.
  ::
  
  ::field{name="yDistance" type="number" default="-2"}
  Y-axis movement distance.
  ::
  
  ::field{name="spread" type="number" default="1"}
  Spread of the wave effect.
  ::
  
  ::field{name="scaleDistance" type="number" default="1.1"}
  Scale transformation distance.
  ::
  
  ::field{name="rotateYDistance" type="number" default="10"}
  Y-axis rotation distance.
  ::
  
  ::field{name="transition" type="object" default="{}"}
  Custom transition options.
  ::
::

## Examples

### Basic Text Shimmer Wave

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextShimmerWave{text="Basic Wave"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextShimmerWave text="Basic Wave" />
  </div>
</template>
```
::

### Custom Duration

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextShimmerWave{:duration="2" text="Slow Wave"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextShimmerWave text="Slow Wave" :duration="2" />
  </div>
</template>
```
::

### As Heading Element

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextShimmerWave{as="h1" class="text-3xl font-bold" text="Heading Wave"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextShimmerWave as="h1" class="text-3xl font-bold" text="Heading Wave" />
  </div>
</template>
```
::

### Custom Wave Parameters

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextShimmerWave{text="Big Wave" :z-distance="20" :x-distance="5" :y-distance="-5" :scale-distance="1.3" :rotate-y-distance="20"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextShimmerWave 
      text="Big Wave" 
      :z-distance="20" 
      :x-distance="5" 
      :y-distance="-5" 
      :scale-distance="1.3" 
      :rotate-y-distance="20"
    />
  </div>
</template>
```
::

### With Custom Styling

::code-preview
---
label: Preview
---
::div
  ::component-example{name="text-shimmer-wave-styled"}
::
#code
```vue
<template>
  <div class="p-4">
    <MTextShimmerWave 
      text="TEAL WAVE" 
      class="text-2xl font-bold text-[#0d9488]" 
      :z-distance="15"
      :duration="1.5"
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
  ::component-example{name="text-shimmer-wave-manual"}
::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <MTextShimmerWave 
      :text="waveText" 
      :key="waveKey"
      class="text-xl font-bold"
    />
    <button 
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      @click="triggerWave"
    >
      Replay Wave Animation
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const waveText = ref("Click Me")
const waveKey = ref(0)

const triggerWave = () => {
  waveKey.value++
}
</script>
```
::
