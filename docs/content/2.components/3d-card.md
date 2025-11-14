---
title: 3D Card
description: Interactive 3D card with perspective effects that respond to mouse movement.
navigation:
  icon: i-lucide-box
---

# 3D Card

The 3D Card component creates an interactive card with 3D perspective effects that respond to mouse movement. It's perfect for creating engaging UI elements that add depth and interactivity to your application.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="three-d-card-example" />
  :::
#code
```vue
<template>
  <M3DCard :intensity="25">
    <template #header>
      <M3DItem :translate-z="40">
        <h2 class="text-xl font-semibold">3D Card</h2>
      </M3DItem>
    </template>
    
    <M3DItem :translate-z="20">
      <p class="text-gray-600 dark:text-gray-400">
        This is a 3D card that responds to mouse movement.
      </p>
      <div class="mt-4">
        <UButton color="primary">Interact</UButton>
      </div>
    </M3DItem>
  </M3DCard>
</template>
```
::

## Props

### M3DCard Props

::field-group
  ::field{name="intensity" type="number" default="25"}
  Controls the intensity of the 3D effect. Higher values result in more subtle movement.
  ::
  
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the card container.
  ::
  
  ::field{name="containerClass" type="string" default="''"}
  CSS classes to apply to the outer container.
  ::
  
  ::field{name="ui" type="object" default="{}"}
  UI configuration for the underlying UCard component.
  ::
::

### M3DItem Props

::field-group
  ::field{name="as" type="string" default="'div'"}
  HTML element to render as.
  ::
  
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the item.
  ::
  
  ::field{name="translateX" type="number|string" default="0"}
  X-axis translation in pixels.
  ::
  
  ::field{name="translateY" type="number|string" default="0"}
  Y-axis translation in pixels.
  ::
  
  ::field{name="translateZ" type="number|string" default="0"}
  Z-axis translation in pixels.
  ::
  
  ::field{name="rotateX" type="number|string" default="0"}
  X-axis rotation in degrees.
  ::
  
  ::field{name="rotateY" type="number|string" default="0"}
  Y-axis rotation in degrees.
  ::
  
  ::field{name="rotateZ" type="number|string" default="0"}
  Z-axis rotation in degrees.
  ::
::

## Examples

### Basic 3D Card

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="three-d-card-basic" />
  :::
#code
```vue
<template>
  <M3DCard>
    <template #header>
      <M3DItem :translate-z="30">
        <h2 class="text-xl font-semibold">Basic 3D Card</h2>
      </M3DItem>
    </template>
    
    <M3DItem :translate-z="15">
      <p class="text-gray-600 dark:text-gray-400">
        Move your cursor over the card to see the 3D effect.
      </p>
    </M3DItem>
  </M3DCard>
</template>
```
::

### High Intensity 3D Card

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="three-d-card-high-intensity" />
  :::
#code
```vue
<template>
  <M3DCard :intensity="10">
    <template #header>
      <M3DItem :translate-z="50">
        <h2 class="text-xl font-semibold">High Intensity</h2>
      </M3DItem>
    </template>
    
    <M3DItem :translate-z="25">
      <p class="text-gray-600 dark:text-gray-400">
        This card has a more pronounced 3D effect.
      </p>
    </M3DItem>
  </M3DCard>
</template>
```
::

### Multiple 3D Items

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="three-d-card-multiple-items" />
  :::
#code
```vue
<template>
  <M3DCard :intensity="15">
    <template #header>
      <M3DItem :translate-z="60" :rotate-x="5">
        <h2 class="text-2xl font-bold text-primary">3D Header</h2>
      </M3DItem>
    </template>
    
    <M3DItem :translate-z="30">
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        This card demonstrates multiple 3D items with different transformations.
      </p>
    </M3DItem>
    
    <M3DItem :translate-z="20" :rotate-y="3">
      <UButton color="primary" class="mr-2">Primary</UButton>
      <UButton color="secondary">Secondary</UButton>
    </M3DItem>
  </M3DCard>
</template>
```
::

### With Custom Styling

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="three-d-card-custom-styling" />
  :::
#code
```vue
<template>
  <M3DCard 
    :intensity="20" 
    class="bg-gradient-to-br from-purple-500 to-indigo-600 text-white divide-0"
    :ui="{ body: { background: 'none' } }"
  >
    <template #header>
      <M3DItem :translate-z="40">
        <h2 class="text-2xl font-bold">Custom Styled</h2>
      </M3DItem>
    </template>
    
    <M3DItem :translate-z="20">
      <p class="mb-4 opacity-90">
        This 3D card has custom gradient styling.
      </p>
      <UButton color="neutral" variant="solid" size="sm">Action</UButton>
    </M3DItem>
  </M3DCard>
</template>
```
::

### With Nuxt UI Components

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="three-d-card-nuxt-u-i" />
  :::
#code
```vue
<template>
  <M3DCard :intensity="30" class="max-w-md">
    <template #header>
      <M3DItem :translate-z="50">
        <h2 class="text-xl font-semibold">Nuxt UI Integration</h2>
      </M3DItem>
    </template>
    
    <M3DItem :translate-z="25">
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        3D Card works seamlessly with Nuxt UI components.
      </p>
    </M3DItem>
    
    <M3DItem :translate-z="15">
      <div class="flex items-center gap-3 mb-4">
        <UAvatar src="https://picsum.photos/200/200" alt="User" />
        <div>
          <p class="font-medium">John Doe</p>
          <p class="text-sm text-gray-500">Software Engineer</p>
        </div>
      </div>
    </M3DItem>
    
    <M3DItem :translate-z="10">
      <div class="flex gap-2">
        <UButton color="primary" icon="i-heroicons-heart">Like</UButton>
        <UButton color="neutral" icon="i-heroicons-chat-bubble-left-right">Comment</UButton>
      </div>
    </M3DItem>
  </M3DCard>
</template>
```
::
