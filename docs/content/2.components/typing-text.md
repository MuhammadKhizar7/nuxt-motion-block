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
  :::div{class="p-4"}
    :::MTypingText{:texts="['First Text', 'Second Text', 'Third Text']" :loop="true"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTypingText 
      :texts="['First Text', 'Second Text', 'Third Text']" 
      :loop="true"
    />
  </div>
</template>
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