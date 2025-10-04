---
title: Text Reveal
description: Text reveal animation with various effects.
navigation:
  icon: i-lucide-eye
---

# Text Reveal

The TextReveal component animates text with various reveal effects. It's perfect for creating engaging headlines, descriptions, and content sections.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="w-full"}
    :::MTextReveal{text="Reveal this text with animation"}
    :::
  :::
#code
```vue
<template>
  <MTextReveal text="Reveal this text with animation" />
</template>
```
::

## Props

::field-group
  ::field{name="text" type="string" :required="true"}
  Text to reveal.
  ::
  ::field{name="effect" type="'fade' | 'slide' | 'bounce' | 'rotate' | 'scale' | 'blur'" default="'slide'"}
  Reveal effect.
  ::
  ::field{name="direction" type="'up' | 'down' | 'left' | 'right' | 'random'" default="'up'"}
  Reveal direction.
  ::
  ::field{name="duration" type="number" default="0.6"}
  Animation duration in seconds.
  ::
  ::field{name="delay" type="number" default="0"}
  Animation delay in seconds.
  ::
  ::field{name="stagger" type="number" default="0.05"}
  Delay between characters in seconds.
  ::
::

## Examples

### Fade Effect

::code-preview
---
label: Preview
---
  :::div{class="w-full"}
    :::MTextReveal{effect="fade" text="This text fades in character by character"}
    :::
  :::
#code
```vue
<template>
  <div class="w-full">
    <MTextReveal effect="fade" text="This text fades in character by character" />
  </div>
</template>
```
::

### Slide Effect

::code-preview
---
label: Preview
---
  :::div{class="w-full"}
    :::MTextReveal{effect="slide" :duration="0.8" text="This text slides in from below"}
    :::
  :::
#code
```vue
<template>
  <div class="w-full">
    <MTextReveal effect="slide" :duration="0.8" text="This text slides in from below" />
  </div>
</template>
```
::

### Typewriter Effect

This example simulates a typewriter effect by using the `fade` effect with a longer stagger between characters.

::code-preview
---
label: Preview
---
  :::div{class="w-full"}
    :::MTextReveal{effect="fade" :duration="2" :delay="0.5" :stagger="0.1" text="This text is typed out like a typewriter"}
    :::
  :::
#code
```vue
<template>
  <div class="w-full">
    <MTextReveal 
      effect="fade" 
      :duration="2" 
      :delay="0.5"
      :stagger="0.1"
      text="This text is typed out like a typewriter"
    />
  </div>
</template>
```
::

### With Stagger Delay

::code-preview
---
label: Preview
---
  :::div{class="p-4 space-y-6"}
    :::MTextReveal{:stagger="0.1" text="Slow stagger effect"}
    :::
    
    :::MTextReveal{:stagger="0.02" text="Fast stagger effect"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-6">
    <MTextReveal :stagger="0.1" text="Slow stagger effect" />
    
    <MTextReveal :stagger="0.02" text="Fast stagger effect" />
  </div>
</template>
```
::
