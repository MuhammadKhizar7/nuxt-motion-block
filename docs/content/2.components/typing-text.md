---
title: Typing Text
description: Typing effect for text content.
navigation:
  icon: i-lucide-type
---

# Typing Text

The TypingText component creates a typing effect for text content. It's perfect for creating dynamic text entrances that simulate typing on a keyboard.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTypingText{text="Typing Text"}
    :::
  :::
#code
```vue
<template>
  <MTypingText text="Typing Text" />
</template>
```
::

## Props

::field-group
  ::field{name="text" type="string" default="''"}
  Text to type.
  ::
  
  ::field{name="texts" type="string[]" default="undefined"}
  Array of texts to cycle through.
  ::
  
  ::field{name="speed" type="number" default="100"}
  Typing speed in milliseconds.
  ::
  
  ::field{name="delay" type="number" default="0"}
  Delay before starting animation.
  ::
  
  ::field{name="showCursor" type="boolean" default="true"}
  Whether to show cursor.
  ::
  
  ::field{name="cursor" type="string" default="'|'"}
  Cursor character.
  ::
  
  ::field{name="cursorClass" type="string" default="''"}
  CSS classes for cursor.
  ::
  
  ::field{name="loop" type="boolean" default="false"}
  Whether to loop through texts.
  ::
  
  ::field{name="pauseDuration" type="number" default="2000"}
  Pause duration between loops.
  ::
  
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="onComplete" type="function" default="undefined"}
  Callback when typing completes.
  ::
  
  ::field{name="startOnView" type="boolean" default="true"}
  Start animation when component enters viewport.
  ::
  
  ::field{name="once" type="boolean" default="false"}
  Animate only once.
  ::
  
  ::field{name="animation" type="string" default="'fadeIn'"}
  Animation preset to use.
  ::
  
  ::field{name="inViewMargin" type="string" default="'0px'"}
  Margin for in-view detection.
  ::
::

## Examples

### Basic Typing Text

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTypingText{text="Hello World"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTypingText text="Hello World" />
  </div>
</template>
```
::

### Custom Speed

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTypingText{text="Fast Typing" :speed="50"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTypingText text="Fast Typing" :speed="50" />
  </div>
</template>
```
::

### Text Cycling

::code-preview
---
label: Preview
---
::div
  ::component-example{name="typing-text-cycling"}
::
#code
```vue
<template>
  <div class="p-4">
    <MTypingText 
      :texts="['First Text', 'Second Text', 'Third Text']" 
      :loop="true"
      class="text-xl font-bold text-[#0d9488]"
    />
  </div>
</template>
```
::

### Manual Control Example

::code-preview
---
label: Preview
---
::div
  ::component-example{name="typing-text-manual"}
::
#code
```vue
<template>
  <div class="p-4 space-y-4">
    <MTypingText 
      :key="typingKey"
      :texts="typingTexts"
      :loop="isLooping"
      :speed="typingSpeed"
      class="text-xl font-bold"
    />
    <div class="flex flex-wrap gap-2">
      <button 
        class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
        @click="resetTyping"
      >
        Reset
      </button>
      <button 
        class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm"
        @click="toggleLoop"
      >
        {{ isLooping ? 'Disable Loop' : 'Enable Loop' }}
      </button>
      <button 
        class="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors text-sm"
        @click="changeSpeed"
      >
        Speed: {{ typingSpeed }}ms
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const typingKey = ref(0)
const isLooping = ref(true)
const typingSpeed = ref(100)

const typingTexts = [
  'Click buttons to control',
  'Adjust typing speed',
  'Toggle loop mode',
  'Reset animation'
]

const resetTyping = () => {
  typingKey.value++
}

const toggleLoop = () => {
  isLooping.value = !isLooping.value
}

const changeSpeed = () => {
  if (typingSpeed.value === 100) {
    typingSpeed.value = 50
  } else if (typingSpeed.value === 50) {
    typingSpeed.value = 150
  } else {
    typingSpeed.value = 100
  }
}
</script>
```
::

### Custom Cursor

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTypingText{text="Custom Cursor" cursor="█" cursor-class="text-blue-500"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTypingText 
      text="Custom Cursor" 
      cursor="█" 
      cursor-class="text-blue-500"
    />
  </div>
</template>
```
::

### With Animation

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTypingText{text="Slide Up" animation="slideUp"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTypingText text="Slide Up" animation="slideUp" />
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
    :::MTypingText{text="Styled Typing" class="text-2xl font-bold text-purple-600"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTypingText text="Styled Typing" class="text-2xl font-bold text-purple-600" />
  </div>
</template>
```
::