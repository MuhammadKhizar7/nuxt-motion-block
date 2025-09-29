---
title: Sliding Number
description: Number that slides in with animation effects.
navigation:
  icon: i-lucide-move-vertical
---

# Sliding Number

The SlidingNumber component creates animated numbers that slide in with smooth animation effects. Each digit animates independently, creating a visually appealing counting experience.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MSlidingNumber{:value="1234"}
    :::
  :::
#code
```vue
<template>
  <MSlidingNumber :value="1234" />
</template>
```
::

## Props

::field-group
  ::field{name="value" type="number" :required="true"}
  Value to display.
  ::
  
  ::field{name="padStart" type="boolean" default="false"}
  Pad single digits with leading zero.
  ::
  
  ::field{name="decimalSeparator" type="string" default="'.'"}
  Character to use as decimal separator.
  ::
  
  ::field{name="precision" type="number | null" default="null"}
  Number of decimal places to show.
  ::
::

## Examples

### Basic Sliding Number

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-4"}
    :::div
      :::h3{class="text-lg font-medium mb-2"}
      Basic Sliding Number
      :::
      :::MSlidingNumber{:value="1234"}
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">Basic Sliding Number</h3>
      <MSlidingNumber :value="1234" />
    </div>
  </div>
</template>
```
::

### With Decimals

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-4"}
    :::div
      :::h3{class="text-lg font-medium mb-2"}
      With Decimals
      :::
      :::MSlidingNumber{:value="1234.56"}
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">With Decimals</h3>
      <MSlidingNumber :value="1234.56" />
    </div>
  </div>
</template>
```
::

### With Custom Precision

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-4"}
    :::div
      :::h3{class="text-lg font-medium mb-2"}
      Custom Precision
      :::
      :::MSlidingNumber{:value="1234.5" :precision="2"}
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">Custom Precision</h3>
      <MSlidingNumber :value="1234.5" :precision="2" />
    </div>
  </div>
</template>
```
::

### With Padding

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-4"}
    :::div
      :::h3{class="text-lg font-medium mb-2"}
      With Padding
      :::
      :::MSlidingNumber{:value="7" :pad-start="true"}
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">With Padding</h3>
      <MSlidingNumber :value="7" :pad-start="true" />
    </div>
  </div>
</template>
```
::

### Negative Numbers

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-4"}
    :::div
      :::h3{class="text-lg font-medium mb-2"}
      Negative Number
      :::
      :::MSlidingNumber{:value="-123"}
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">Negative Number</h3>
      <MSlidingNumber :value="-123" />
    </div>
  </div>
</template>
```
::