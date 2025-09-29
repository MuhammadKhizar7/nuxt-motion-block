---
title: Text Scramble
description: Text scramble effect with random character transitions.
navigation:
  icon: i-lucide-shuffle
---

# Text Scramble

The TextScramble component creates a text scramble effect with random character transitions. It's perfect for creating dynamic text entrances with a scrambling animation.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextScramble{text="Scramble Text"}
    :::
  :::
#code
```vue
<template>
  <MTextScramble text="Scramble Text" />
</template>
```
::

## Props

::field-group
  ::field{name="text" type="string" default="''"}
  Text to scramble.
  ::
  
  ::field{name="duration" type="number" default="0.8"}
  Animation duration in seconds.
  ::
  
  ::field{name="speed" type="number" default="0.04"}
  Speed of character transitions.
  ::
  
  ::field{name="characterSet" type="string" default="'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'"}
  Characters to use for scrambling.
  ::
  
  ::field{name="as" type="string" default="'p'"}
  HTML element to render as.
  ::
  
  ::field{name="className" type="string" default="''"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="trigger" type="boolean" default="true"}
  Enable/disable the scrambling.
  ::
  
  ::field{name="onScrambleComplete" type="function" default="undefined"}
  Callback when scramble completes.
  ::
::

## Examples

### Basic Text Scramble

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextScramble{text="Basic Scramble"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextScramble text="Basic Scramble" />
  </div>
</template>
```
::

### Custom Duration and Speed

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextScramble{text="Fast Scramble" :duration="0.5" :speed="0.02"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextScramble text="Fast Scramble" :duration="0.5" :speed="0.02" />
  </div>
</template>
```
::

### Custom Character Set

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextScramble{text="Symbol Scramble" character-set="!@#$%^&*()_+-=[]{}|;:,.<>?"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextScramble text="Symbol Scramble" character-set="!@#$%^&*()_+-=[]{}|;:,.<>?" />
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
    :::MTextScramble{text="Heading Scramble" as="h1" class="text-3xl font-bold"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextScramble text="Heading Scramble" as="h1" class="text-3xl font-bold" />
  </div>
</template>
```
::

### Manual Trigger

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-4"}
    :::MTextScramble{:text="scrambleText" :trigger="scrambleTrigger"}
    :::
    :::button{class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" @click="triggerScramble"}
    Scramble Text
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <MTextScramble :text="scrambleText" :trigger="scrambleTrigger" />
    <button 
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      @click="triggerScramble"
    >
      Scramble Text
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const scrambleText = ref("Click to scramble")
const scrambleTrigger = ref(false)

const triggerScramble = () => {
  scrambleTrigger.value = true
  setTimeout(() => {
    scrambleTrigger.value = false
  }, 100)
}
</script>
```
::