---
title: Direction Aware Hover
description: Card that reveals content based on the direction of mouse entry with smooth animations.
navigation:
  icon: i-lucide-move-diagonal
---

# Direction Aware Hover

The DirectionAwareHover component creates a card that reveals content based on the direction of mouse entry with smooth animations.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="direction-aware-hover-example" />
  :::
#code
```vue
<template>
  <MDirectionAwareHover image-url="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80">
    <template #content>
      <div class="space-y-3">
        <UIcon name="i-heroicons-computer-desktop" class="w-8 h-8 text-blue-400" />
        <h3 class="text-2xl font-bold">Web Development</h3>
        <p class="text-white/80">Modern responsive websites and applications</p>
        <UButton color="neutral" variant="solid" size="sm" class="mt-2">View Project</UButton>
      </div>
    </template>
  </MDirectionAwareHover>
</template>
```
::

## Props

::field-group
  ::field{name="imageUrl" type="string" required}
  URL of the image to display as the card background.
  ::
  
  ::field{name="childrenClass" type="string" default="''"}
  CSS classes to apply to the content container.
  ::
  
  ::field{name="imageClass" type="string" default="''"}
  CSS classes to apply to the image.
  ::
  
  ::field{name="class" type="string" default="'md:h-96 w-60 h-60 md:w-96'"}
  CSS classes to apply to the card container.
  ::
::

## Examples

### Basic Direction Aware Hover

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="direction-aware-hover-basic" />
  :::
#code
```vue
<template>
  <MDirectionAwareHover image-url="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80">
    <template #content>
      <h3 class="text-xl font-bold">Mountain Landscape</h3>
      <p class="text-white/80">Beautiful scenic mountain view</p>
    </template>
  </MDirectionAwareHover>
</template>
```
::

### Custom Content Styling

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="direction-aware-hover-custom-content" />
  :::
#code
```vue
<template>
  <MDirectionAwareHover 
    image-url="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
    children-class="text-center"
  >
    <template #content>
      <UIcon name="i-heroicons-camera" class="w-10 h-10 text-white mx-auto" />
      <h3 class="text-2xl font-bold">Ocean Photography</h3>
      <p class="text-white/80">Professional underwater photography</p>
    </template>
  </MDirectionAwareHover>
</template>
```
::

### Custom Image Styling

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="direction-aware-hover-custom-image" />
  :::
#code
```vue
<template>
  <MDirectionAwareHover 
    image-url="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
    image-class="object-top"
  >
    <template #content>
      <h3 class="text-xl font-bold">Forest Path</h3>
      <p class="text-white/80">Peaceful walking trail through the woods</p>
    </template>
  </MDirectionAwareHover>
</template>
```
::

### Custom Container Sizing

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="direction-aware-hover-custom-sizing" />
  :::
#code
```vue
<template>
  <MDirectionAwareHover 
    image-url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
    class="w-80 h-80"
  >
    <template #content>
      <h3 class="text-2xl font-bold">City Skyline</h3>
      <p class="text-white/80">Urban landscape at dusk</p>
    </template>
  </MDirectionAwareHover>
</template>
```
::