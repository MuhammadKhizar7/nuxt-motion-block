---
title: Text Shimmer
description: Text with shimmer effect that moves across the content.
navigation:
  icon: i-lucide-sparkles
---

# Text Shimmer

The TextShimmer component creates text with a shimmer effect that moves across the content. It's perfect for creating eye-catching headings and text elements with a sparkling animation.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4 w-full"}
    :::MTextShimmer{ text="Shimmering Text Effect" :duration="3" :spread="1.5" class="text-4xl font-bold"}
    :::
  :::
#code
```vue
<template>
  <MTextShimmer text="Shimmer Text" />
</template>
```
::

## Props

::field-group
  ::field{name="text" type="string" :required="true"}
  Text to shimmer.
  ::
  
  ::field{name="as" type="string" default="'p'"}
  HTML element to render as.
  ::
  
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="duration" type="number" default="2"}
  Animation duration in seconds.
  ::
  
  ::field{name="spread" type="number" default="2"}
  Spread of the shimmer effect.
  ::
::

## Examples

### Basic Text Shimmer

::code-preview
---
label: Preview
---
  :::div{class="p-4 w-full"}
    :::MTextShimmer{ text="Basic Shimmer"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4 w-full">
    <MTextShimmer text="Basic Shimmer" />
  </div>
</template>
```
::

### Custom Duration

::code-preview
---
label: Preview
---
  :::div{class="p-4 w-full"}
    :::MTextShimmer{ text="Slow Shimmer" :duration="4"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4 w-full">
    <MTextShimmer text="Slow Shimmer" :duration="4" />
  </div>
</template>
```
::

### As Heading Element

::code-preview
---
label: Preview
---
  :::div{class="p-4 w-full"}
    :::MTextShimmer{ text="Heading Shimmer" as="h1" class="text-3xl font-bold"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4 w-full">
    <MTextShimmer text="Heading Shimmer" as="h1" class="text-3xl font-bold" />
  </div>
</template>
```
::

### Custom Spread

::code-preview
---
label: Preview
---
  :::div{class="p-4 w-full"}
    :::MTextShimmer{ text="Wide Shimmer" :spread="5"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4 w-full">
    <MTextShimmer text="Wide Shimmer" :spread="5" />
  </div>
</template>
```
::

### With Custom Styling

::code-preview
---
label: Preview
---
  :::div{class="p-4 w-full"}
    :::MTextShimmer{ text="Styled Shimmer" class="text-2xl font-bold text-blue-600"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4 w-full">
    <MTextShimmer text="Styled Shimmer" class="text-2xl font-bold text-blue-600" />
  </div>
</template>
```
::
