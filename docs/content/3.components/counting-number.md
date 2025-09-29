---
title: Counting Number
description: Number counter with various animation effects.
navigation:
  icon: i-lucide-hash
---

# Counting Number

The CountingNumber component creates animated number counters with various animation effects. It's perfect for displaying statistics, metrics, and any numerical data that benefits from a counting animation.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MCountingNumber{:to="1000"}
    :::
  :::
#code
```vue
<template>
  <MCountingNumber :to="1000" />
</template>
```
::

## Props

::field-group
  ::field{name="from" type="number" default="0"}
  Starting number.
  ::
  
  ::field{name="to" type="number" default="100"}
  Ending number.
  ::
  
  ::field{name="duration" type="number" default="2"}
  Animation duration in seconds.
  ::
  
  ::field{name="delay" type="number" default="0"}
  Animation delay in milliseconds.
  ::
  
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the component.
  ::
  
  ::field{name="startOnView" type="boolean" default="true"}
  Whether to start animation when element enters viewport.
  ::
  
  ::field{name="once" type="boolean" default="false"}
  Whether to animate only once.
  ::
  
  ::field{name="inViewMargin" type="string" default="'0px'"}
  Margin for viewport detection.
  ::
  
  ::field{name="format" type="function" default="undefined"}
  Custom formatting function.
  ::
::

## Events

::field-group
  ::field{name="complete" type="() => void"}
  Emitted when animation completes.
  ::
::

## Examples

### Basic Counting Number

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-4"}
    :::div
      :::h3{class="text-lg font-medium mb-2"}
      Basic Counter
      :::
      :::MCountingNumber{:to="1500"}
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">Basic Counter</h3>
      <MCountingNumber :to="1500" />
    </div>
  </div>
</template>
```
::

### With Custom Range and Duration

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-4"}
    :::div
      :::h3{class="text-lg font-medium mb-2"}
      Custom Range
      :::
      :::MCountingNumber{:from="100" :to="5000" :duration="3"}
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">Custom Range</h3>
      <MCountingNumber :from="100" :to="5000" :duration="3" />
    </div>
  </div>
</template>
```
::

### With Delay and Formatting

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-4"}
    :::div
      :::h3{class="text-lg font-medium mb-2"}
      With Delay and Formatting
      :::
      :::MCountingNumber{:to="123456" :delay="1000" :format="(value) => value.toLocaleString()"}
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">With Delay and Formatting</h3>
      <MCountingNumber 
        :to="123456" 
        :delay="1000" 
        :format="(value) => value.toLocaleString()" 
      />
    </div>
  </div>
</template>
```
::

### With Custom Styling

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-4"}
    :::div
      :::h3{class="text-lg font-medium mb-2"}
      Styled Counter
      :::
      :::MCountingNumber{:to="75" class="text-3xl font-bold text-blue-600"}
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">Styled Counter</h3>
      <MCountingNumber 
        :to="75" 
        class="text-3xl font-bold text-blue-600"
      />
    </div>
  </div>
</template>
```
::