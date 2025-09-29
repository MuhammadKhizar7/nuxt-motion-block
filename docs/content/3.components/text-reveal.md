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
  :::div{class="p-4"}
    :::MTextReveal
    Reveal this text with animation
    :::
  :::
#code
```vue
<template>
  <MTextReveal>
    Reveal this text with animation
  </MTextReveal>
</template>
```
::

## Props

::field-group
  ::field{name="effect" type="'fade' | 'slide' | 'typewriter'" default="'fade'"}
  Reveal effect.
  ::
  
  ::field{name="duration" type="number" default="1000"}
  Animation duration.
  ::
  
  ::field{name="delay" type="number" default="0"}
  Animation delay.
  ::
  
  ::field{name="stagger" type="number" default="0.05"}
  Delay between characters.
  ::
  
  ::field{name="easing" type="string" default="'easeOutCubic'"}
  Animation easing.
  ::
::

## Slots

::field-group
  ::field{name="default" type="none"}
  Text to reveal.
  ::
::

## Examples

### Fade Effect

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextReveal{effect="fade"}
    This text fades in character by character
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextReveal effect="fade">
      This text fades in character by character
    </MTextReveal>
  </div>
</template>
```
::

### Slide Effect

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextReveal{effect="slide" :duration="800"}
    This text slides in from below
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextReveal effect="slide" :duration="800">
      This text slides in from below
    </MTextReveal>
  </div>
</template>
```
::

### Typewriter Effect

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MTextReveal{effect="typewriter" :duration="2000" :delay="500"}
    This text is typed out like a typewriter
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MTextReveal 
      effect="typewriter" 
      :duration="2000" 
      :delay="500"
    >
      This text is typed out like a typewriter
    </MTextReveal>
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
    :::MTextReveal{:stagger="0.1"}
    Slow stagger effect
    :::
    
    :::MTextReveal{:stagger="0.02"}
    Fast stagger effect
    :::
  :::
#code
```vue
<template>
  <div class="p-4 space-y-6">
    <MTextReveal :stagger="0.1">
      Slow stagger effect
    </MTextReveal>
    
    <MTextReveal :stagger="0.02">
      Fast stagger effect
    </MTextReveal>
  </div>
</template>
```
::