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
    :::MTextShimmerWave
      Wave Shimmer
    :::
  :::
#code
```vue
<template>
  <MTextShimmerWave>
    Wave Shimmer
  </MTextShimmerWave>
</template>
```
::

## Props

::field-group
  ::field{name="children" type="string" :required="true"}
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
    :::MTextShimmerWave
      Basic Wave
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextShimmerWave>
      Basic Wave
    </MTextShimmerWave>
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
    :::MTextShimmerWave{:duration="2"}
      Slow Wave
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextShimmerWave :duration="2">
      Slow Wave
    </MTextShimmerWave>
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
    :::MTextShimmerWave{as="h1" class="text-3xl font-bold"}
      Heading Wave
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextShimmerWave as="h1" class="text-3xl font-bold">
      Heading Wave
    </MTextShimmerWave>
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
    :::MTextShimmerWave{:z-distance="20" :x-distance="5" :y-distance="-5" :scale-distance="1.3" :rotate-y-distance="20"}
      Big Wave
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextShimmerWave 
      :z-distance="20" 
      :x-distance="5" 
      :y-distance="-5" 
      :scale-distance="1.3" 
      :rotate-y-distance="20"
    >
      Big Wave
    </MTextShimmerWave>
  </div>
</template>
```
::

### With Custom Styling

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextShimmerWave{class="text-2xl font-bold text-purple-600"}
      Styled Wave
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextShimmerWave class="text-2xl font-bold text-purple-600">
      Styled Wave
    </MTextShimmerWave>
  </div>
</template>
```
::