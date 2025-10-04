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
    <component-example name="sliding-number-usage" />
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4 flex flex-col items-center">
    <MSlidingNumber :value="currentValue" />
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      @click="changeNumber"
    >
      Change Number
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentValue = ref(1234)

const changeNumber = () => {
  currentValue.value = Math.floor(Math.random() * 10000)
}
</script>
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
  :::div{class="p-4"}
    <component-example name="sliding-number-basic" />
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">Basic Sliding Number</h3>
      <MSlidingNumber :value="currentValue" />
    </div>
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      @click="changeNumber"
    >
      Change Number
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentValue = ref(1234)

const changeNumber = () => {
  currentValue.value = Math.floor(Math.random() * 10000)
}
</script>
```
::

### With Decimals

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    <component-example name="sliding-number-decimals" />
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">With Decimals</h3>
      <MSlidingNumber :value="currentValue" />
    </div>
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      @click="changeNumber"
    >
      Change Number
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentValue = ref(1234.56)

const changeNumber = () => {
  currentValue.value = Math.random() * 10000
}
</script>
```
::

### With Custom Precision

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    <component-example name="sliding-number-custom-precision" />
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">Custom Precision</h3>
      <MSlidingNumber :value="currentValue" :precision="2" />
    </div>
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      @click="changeNumber"
    >
      Change Number
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentValue = ref(1234.5)

const changeNumber = () => {
  currentValue.value = Math.random() * 10000
}
</script>
```
::

### With Padding

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    <component-example name="sliding-number-padding" />
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">With Padding</h3>
      <MSlidingNumber :value="currentValue" :pad-start="true" />
    </div>
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      @click="changeNumber"
    >
      Change Number
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentValue = ref(7)

const changeNumber = () => {
  currentValue.value = Math.floor(Math.random() * 10)
}
</script>
```
::

### Negative Numbers

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    <component-example name="sliding-number-negative" />
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">Negative Number</h3>
      <MSlidingNumber :value="currentValue" />
    </div>
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      @click="changeNumber"
    >
      Change Number
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentValue = ref(-123)

const changeNumber = () => {
  currentValue.value = -Math.floor(Math.random() * 1000)
}
</script>
```
::
