---
title: Text Roll
description: Text that rolls in with 3D effects.
navigation:
  icon: i-lucide-rotate-cw
---

# Text Roll

The TextRoll component creates text that rolls in with 3D effects. It's perfect for creating dynamic text entrances with a rolling animation.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    <component-example name="text-roll-usage" />
  :::
#code
```vue
<template>
  <MTextRoll children="Rolling Text" />
</template>
```
::

## Props

::field-group
  ::field{name="children" type="string" :required="true"}
  Text to roll.
  ::
  
  ::field{name="duration" type="number" default="0.5"}
  Animation duration in seconds.
  ::
  
  ::field{name="getEnterDelay" type="function" default="(i) => i * 0.1"}
  Function to calculate enter delay for each character.
  ::
  
  ::field{name="getExitDelay" type="function" default="(i) => i * 0.1 + 0.2"}
  Function to calculate exit delay for each character.
  ::
  
  ::field{name="className" type="string" default="''"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="transition" type="object" default="{ ease: 'easeIn' }"}
  Animation transition options.
  ::
  
  ::field{name="variants" type="object" default="undefined"}
  Custom animation variants.
  ::
  
  ::field{name="onAnimationComplete" type="function" default="undefined"}
  Callback when animation completes.
  ::
::

## Examples

### Basic Text Roll

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    <component-example name="text-roll-basic" />
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextRoll children="Basic Roll" />
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
    <component-example name="text-roll-custom-duration" />
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextRoll children="Slow Roll" :duration="1" />
  </div>
</template>
```
::

### Custom Delay Function

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    <component-example name="text-roll-custom-delay" />
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextRoll 
      children="Staggered Roll"
      :get-enter-delay="(i) => i * 0.2" 
      :get-exit-delay="(i) => i * 0.2 + 0.5"
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
  :::div{class="p-4"}
    <component-example name="text-roll-custom-styling" />
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextRoll children="Styled Roll" className="text-2xl font-bold text-blue-600" />
  </div>
</template>
```
::

### With Custom Variants

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    <component-example name="text-roll-custom-variants" />
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextRoll 
      children="Custom Roll"
      :variants="{
        enter: { initial: { rotateX: 0 }, animate: { rotateX: 180 } },
        exit: { initial: { rotateX: 180 }, animate: { rotateX: 0 } }
      }"
    />
  </div>
</template>
```
::