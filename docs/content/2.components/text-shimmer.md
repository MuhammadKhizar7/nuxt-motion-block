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
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="text-shimmer-wave-styled" />
  :::
#code
```vue
<template>
  <MTextShimmer text="Shimmering Text Effect" :duration="3" :spread="1.5" class="text-4xl font-bold" />
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
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="text-shimmer-basic" />
  :::
#code
```vue
<template>
  <MTextShimmer text="Basic Shimmer" />
</template>
```
::

### Slow Shimmer

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="text-shimmer-slow" />
  :::
#code
```vue
<template>
  <MTextShimmer text="Slow Shimmer" :duration="4" />
</template>
```
::

### As Heading

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="text-shimmer-heading" />
  :::
#code
```vue
<template>
  <MTextShimmer text="Heading Shimmer" as="h1" class="text-3xl font-bold" />
</template>
```
::

### Wide Shimmer

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="text-shimmer-wide" />
  :::
#code
```vue
<template>
  <MTextShimmer text="Wide Shimmer" :spread="5" />
</template>
```
::

### Styled Shimmer

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="text-shimmer-styled" />
  :::
#code
```vue
<template>
  <MTextShimmer text="Styled Shimmer" class="text-2xl font-bold text-blue-600" />
</template>
```
::

