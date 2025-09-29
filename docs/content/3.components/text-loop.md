---
title: Text Loop
description: Text that loops through different values with smooth transitions.
navigation:
  icon: i-lucide-repeat
---

# Text Loop

The TextLoop component creates text that loops through different values with smooth transitions. It's perfect for displaying rotating messages, quotes, or any content that needs to cycle automatically.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextLoop{:items="['First', 'Second', 'Third']"}
    :::
  :::
#code
```vue
<template>
  <MTextLoop :items="['First', 'Second', 'Third']" />
</template>
```
::

## Props

::field-group
  ::field{name="items" type="any[]" :required="true"}
  Array of items to loop through.
  ::
  
  ::field{name="className" type="string" default="''"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="interval" type="number" default="2"}
  Interval between changes in seconds.
  ::
  
  ::field{name="transition" type="object" default="{ type: 'spring', stiffness: 150, damping: 19, mass: 1.2 }"}
  Animation transition options.
  ::
  
  ::field{name="variants" type="object" default="undefined"}
  Custom animation variants.
  ::
  
  ::field{name="onIndexChange" type="function" default="undefined"}
  Callback when index changes.
  ::
  
  ::field{name="trigger" type="boolean" default="true"}
  Enable/disable the looping.
  ::
::

## Examples

### Basic Text Loop

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextLoop{:items="['Hello', 'World', 'Nuxt']"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextLoop :items="['Hello', 'World', 'Nuxt']" />
  </div>
</template>
```
::

### Custom Interval

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextLoop{:items="['Fast', 'Loop', 'Text']" :interval="0.5"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextLoop :items="['Fast', 'Loop', 'Text']" :interval="0.5" />
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
    :::MTextLoop{:items="['Styled', 'Loop', 'Text']" class="text-2xl font-bold text-blue-600"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextLoop :items="['Styled', 'Loop', 'Text']" class="text-2xl font-bold text-blue-600" />
  </div>
</template>
```
::

### With Custom Transition

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextLoop{:items="['Bounce', 'Effect', 'Text']" :transition="{ type: 'spring', stiffness: 300, damping: 10 }"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextLoop 
      :items="['Bounce', 'Effect', 'Text']" 
      :transition="{ type: 'spring', stiffness: 300, damping: 10 }"
    />
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
    :::MTextLoop{:items="['Fade', 'In', 'Out']" :variants="{ initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 } }"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextLoop 
      :items="['Fade', 'In', 'Out']"
      :variants="{
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 }
      }"
    />
  </div>
</template>
```
::