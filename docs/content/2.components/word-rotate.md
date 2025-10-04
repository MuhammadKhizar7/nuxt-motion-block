---
title: Word Rotate
description: Words that rotate with 3D effects.
navigation:
  icon: i-lucide-rotate-cw
---

# Word Rotate

The WordRotate component creates words that rotate with 3D effects. It's perfect for creating dynamic text that cycles through different words with smooth animations.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4 w-full"}
    :::component-example{name="word-rotate-basic"}
    :::
  :::
#code
```vue
<template>
  <MWordRotate :words="['First', 'Second', 'Third']" />
</template>
```
::

## Props

::field-group
  ::field{name="words" type="string[]" :required="true"}
  Array of words to rotate through.
  ::
  
  ::field{name="duration" type="number" default="1500"}
  Duration each word is visible in milliseconds.
  ::
  
  ::field{name="animationStyle" type="'fade' | 'slide-up' | 'slide-down' | 'scale' | 'flip'" default="'fade'"}
  Animation style for transitions.
  ::
  
  ::field{name="loop" type="boolean" default="true"}
  Whether to loop through words.
  ::
  
  ::field{name="pauseDuration" type="number" default="300"}
  Pause duration between word transitions.
  ::
  
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the word container.
  ::
  
  ::field{name="containerClass" type="string" default="''"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="startOnView" type="boolean" default="true"}
  Start animation when component enters viewport.
  ::
  
  ::field{name="once" type="boolean" default="false"}
  Animate only once.
  ::
  
  ::field{name="inViewMargin" type="string" default="'0px'"}
  Margin for in-view detection.
  ::
::

## Examples

### Basic Word Rotate

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::component-example{name="word-rotate-basic"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MWordRotate :words="['Hello', 'World', 'Nuxt']" />
  </div>
</template>
```
::

### Flip Animation

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::component-example{name="word-rotate-flip"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MWordRotate :words="['Flip', 'Rotate', 'Words']" animation-style="flip" />
  </div>
</template>
```
::

### Slide Up Animation

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::component-example{name="word-rotate-slide"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MWordRotate :words="['Slide', 'Up', 'Text']" animation-style="slide-up" />
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
    :::component-example{name="word-rotate-pause"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MWordRotate :words="['Fast', 'Words']" :duration="800" :pause-duration="200" />
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
    :::component-example{name="word-rotate-style"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MWordRotate :words="['Styled', 'Words']" class="text-2xl font-bold text-blue-600" />
  </div>
</template>
```
::

### No Loop

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::component-example{name="word-rotate-loop"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MWordRotate :words="['One', 'Two', 'Three']" :loop="false" />
  </div>
</template>
```
::