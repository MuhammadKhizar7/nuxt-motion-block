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
  :::div{class="p-4"}
    :::MTextShimmer
      Shimmer Text
    :::
  :::
#code
```vue
<template>
  <MTextShimmer>
    Shimmer Text
  </MTextShimmer>
</template>
```
::

## Props

::field-group
  ::field{name="children" type="string" :required="true"}
  Text to shimmer.
  ::
  
  ::field{name="as" type="string" default="'p'"}
  HTML element to render as.
  ::
  
  ::field{name="className" type="string" default="''"}
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
  :::div{class="p-4"}
    :::MTextShimmer
      Basic Shimmer
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextShimmer>
      Basic Shimmer
    </MTextShimmer>
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
    :::MTextShimmer{:duration="4"}
      Slow Shimmer
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextShimmer :duration="4">
      Slow Shimmer
    </MTextShimmer>
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
    :::MTextShimmer{as="h1" class="text-3xl font-bold"}
      Heading Shimmer
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextShimmer as="h1" class="text-3xl font-bold">
      Heading Shimmer
    </MTextShimmer>
  </div>
</template>
```
::

### Custom Spread

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextShimmer{:spread="5"}
      Wide Shimmer
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextShimmer :spread="5">
      Wide Shimmer
    </MTextShimmer>
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
    :::MTextShimmer{class="text-2xl font-bold text-blue-600"}
      Styled Shimmer
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextShimmer class="text-2xl font-bold text-blue-600">
      Styled Shimmer
    </MTextShimmer>
  </div>
</template>
```
::