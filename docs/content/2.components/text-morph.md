---
title: Text Morph
description: Text that morphs between different strings.
navigation:
  icon: i-lucide-type
---

# Text Morph

The TextMorph component creates text that morphs between different strings with smooth animations. It's perfect for creating dynamic text transitions and content changes.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextMorph{text="Hello"}
    :::
  :::
#code
```vue
<template>
  <MTextMorph text="Hello" />
</template>
```
::

## Props

::field-group
  ::field{name="text" type="string" default="''"}
  Text to display and morph.
  ::
  
  ::field{name="as" type="string" default="'p'"}
  HTML element to render as.
  ::
  
  ::field{name="className" type="string" default="''"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="style" type="object" default="{}"}
  Custom styles to apply to the container.
  ::
  
  ::field{name="variants" type="object" default="{}"}
  Custom animation variants.
  ::
  
  ::field{name="transition" type="object" default="{}"}
  Animation transition options.
  ::
::

## Examples

### Basic Text Morph

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextMorph{text="Morphing Text"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextMorph text="Morphing Text" />
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
    :::MTextMorph{text="Heading Morph" as="h1" class="text-3xl font-bold"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextMorph text="Heading Morph" as="h1" class="text-3xl font-bold" />
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
    :::MTextMorph{text="Bouncy Morph" :transition="{ type: 'spring', stiffness: 500, damping: 10 }"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextMorph 
      text="Bouncy Morph" 
      :transition="{ type: 'spring', stiffness: 500, damping: 10 }"
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
    :::MTextMorph{text="Custom Morph" :variants="{ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 20 } }"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextMorph 
      text="Custom Morph"
      :variants="{
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 }
      }"
    />
  </div>
</template>
```
::

### Dynamic Text Change

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-4"}
    :::MTextMorph{:text="currentText"}
    :::
    :::button{class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" @click="cycleText"}
    Change Text
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <MTextMorph :text="currentText" />
    <button 
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      @click="cycleText"
    >
      Change Text
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const texts = ['First Text', 'Second Text', 'Third Text', 'Final Text']
const currentIndex = ref(0)
const currentText = computed(() => texts[currentIndex.value])

const cycleText = () => {
  currentIndex.value = (currentIndex.value + 1) % texts.length
}
</script>
```
::