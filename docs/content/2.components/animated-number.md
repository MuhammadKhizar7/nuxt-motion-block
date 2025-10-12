---
title: Animated Number
description: Animated numeric value with smooth transitions.
navigation:
  icon: i-lucide-hash
---

# Animated Number

The AnimatedNumber component animates numeric values with smooth transitions. It's perfect for displaying counters, statistics, and any numerical data that benefits from animation.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MAnimatedNumber{:value="1234"}
    :::
  :::
#code
```vue
<template>
  <MAnimatedNumber :value="1234" />
</template>
```
::

## Props

::field-group
  ::field{name="value" type="number" :required="true"}
  Target value to animate to.
  ::
  
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the component.
  ::
  
  ::field{name="springOptions" type="SpringOptions" default="{ stiffness: 300, damping: 30, mass: 1 }"}
  Spring animation options.
  ::
  
  ::field{name="as" type="string" default="'span'"}
  HTML element to render as.
  ::
  
  ::field{name="format" type="function" default="(value: number) => Math.round(value).toLocaleString()"}
  Custom formatting function.
  ::
::

## Examples

### Basic Animated Number

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-4"}
    :::div
      :::h3{class="text-lg font-medium mb-2"}
      Basic Counter
      :::
      :::MAnimatedNumber{:value="1500"}
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">Basic Counter</h3>
      <MAnimatedNumber :value="1500" />
    </div>
  </div>
</template>
```
::

### With Custom Formatting

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-4"}
    :::div
      :::h3{class="text-lg font-medium mb-2"}
      Custom Format
      :::
      :::MAnimatedNumber{:value="123456"}
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">Custom Format</h3>
      <MAnimatedNumber 
        :value="123456" 
        :format="(value) => \`$\${value.toFixed(2)}\`" 
      />
    </div>
  </div>
</template>
```
::

### With Custom Spring Options

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-4"}
    :::div
      :::h3{class="text-lg font-medium mb-2"}
      Slow Animation
      :::
      :::MAnimatedNumber{:value="100"}
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">Slow Animation</h3>
      <MAnimatedNumber 
        :value="100" 
        :springOptions="{ stiffness: 100, damping: 20, mass: 1 }"
      />
    </div>
  </div>
</template>
```
::

### As a Different Element

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-4"}
    :::div
      :::h3{class="text-lg font-medium mb-2"}
      As a Div Element
      :::
      :::MAnimatedNumber{:value="42" as="div" class="text-2xl font-bold"}
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">As a Div Element</h3>
      <MAnimatedNumber 
        :value="42" 
        as="div" 
        class="text-2xl font-bold"
      />
    </div>
  </div>
</template>
```
::

### With Button Trigger

::code-preview
---
label: Preview
---
::div
  ::component-example{name="animated-number-with-trigger"}
::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">Button Triggered Animation</h3>
      <MAnimatedNumber 
        :value="targetValue" 
        class="text-2xl font-bold"
      />
    </div>
    <div class="flex gap-2">
      <UButton @click="triggerAnimation(1000)">
        Animate to 1000
      </UButton>
      <UButton @click="triggerAnimation(5000)">
        Animate to 5000
      </UButton>
      <UButton @click="triggerAnimation(0)">
        Reset to 0
      </UButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const targetValue = ref(0)

const triggerAnimation = (value) => {
  targetValue.value = value
}
</script>
```
::
