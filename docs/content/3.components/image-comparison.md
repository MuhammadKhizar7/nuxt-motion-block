---
title: Image Comparison
description: Interactive image comparison component with various modes and controls.
navigation:
  icon: i-lucide-image
---

# Image Comparison

The ImageComparison component provides an interactive way to compare two images side by side. It supports multiple comparison modes, customizable controls, and various interaction methods.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MImageComparison
      :::MImageComparisonImage{src="https://picsum.photos/seed/a/600/400" alt="Before" position="left"}
      :::
      :::MImageComparisonImage{src="https://picsum.photos/seed/b/600/400" alt="After" position="right"}
      :::
    :::
  :::
#code
```vue
<template>
  <MImageComparison>
    <MImageComparisonImage 
      src="https://picsum.photos/seed/a/600/400" 
      alt="Before" 
      position="left" 
    />
    <MImageComparisonImage 
      src="https://picsum.photos/seed/b/600/400" 
      alt="After" 
      position="right" 
    />
  </MImageComparison>
</template>
```
::

## MImageComparison Props

::field-group
  ::field{name="enableHover" type="boolean" default="false"}
  Enable hover interaction.
  ::
  
  ::field{name="springOptions" type="SpringOptions" default="{ bounce: 0, duration: 0.1 }"}
  Spring animation options.
  ::
  
  ::field{name="initialPosition" type="number" default="50"}
  Initial slider position (0-100%).
  ::
  
  ::field{name="mode" type="'slide' | 'fade' | 'curtain' | 'circle'" default="'slide'"}
  Comparison mode.
  ::
  
  ::field{name="orientation" type="'horizontal' | 'vertical'" default="'horizontal'"}
  Slider orientation.
  ::
  
  ::field{name="enableZoom" type="boolean" default="false"}
  Enable zoom functionality.
  ::
  
  ::field{name="showControls" type="boolean" default="true"}
  Show control buttons.
  ::
  
  ::field{name="showPosition" type="boolean" default="false"}
  Show position indicator.
  ::
  
  ::field{name="autoPlay" type="boolean" default="false"}
  Enable autoplay.
  ::
  
  ::field{name="autoPlayDuration" type="number" default="3000"}
  Autoplay interval in ms.
  ::
  
  ::field{name="snapToSteps" type="boolean" default="false"}
  Snap to predefined steps.
  ::
  
  ::field{name="steps" type="number[]" default="[0, 25, 50, 75, 100]"}
  Snap positions.
  ::
  
  ::field{name="ariaLabel" type="string" default="'Image comparison slider'"}
  Accessibility label.
  ::
  
  ::field{name="leftImageLabel" type="string" default="'Before image'"}
  Left image label.
  ::
  
  ::field{name="rightImageLabel" type="string" default="'After image'"}
  Right image label.
  ::
::

## MImageComparison Events

::field-group
  ::field{name="positionChange" type="(position: number) => void"}
  Emitted when slider position changes.
  ::
  
  ::field{name="dragStart" type="() => void"}
  Emitted when dragging starts.
  ::
  
  ::field{name="dragEnd" type="() => void"}
  Emitted when dragging ends.
  ::
::

## MImageComparison Slots

::field-group
  ::field{name="default" type="none"}
  Comparison images.
  ::
::

## MImageComparisonImage Props

::field-group
  ::field{name="src" type="string" :required="true"}
  Image source.
  ::
  
  ::field{name="alt" type="string" :required="true"}
  Image alt text.
  ::
  
  ::field{name="position" type="'left' | 'right'" default="'left'"}
  Image position.
  ::
::

## MImageComparisonSlider Props

::field-group
  ::field{name="thickness" type="number" default="2"}
  Slider thickness.
  ::
  
  ::field{name="color" type="string" default="'white'"}
  Slider color.
  ::
::

## Examples

### Basic Image Comparison

::code-preview
---
label: Preview
---
  :::MImageComparison
    :::MImageComparisonImage{src="https://picsum.photos/seed/before/800/500" alt="Before editing" position="left"}
    :::
    :::MImageComparisonImage{src="https://picsum.photos/seed/after/800/500" alt="After editing" position="right"}
    :::
  :::
#code
```vue
<template>
  <MImageComparison>
    <MImageComparisonImage 
      src="https://picsum.photos/seed/before/800/500" 
      alt="Before editing" 
      position="left" 
    />
    <MImageComparisonImage 
      src="https://picsum.photos/seed/after/800/500" 
      alt="After editing" 
      position="right" 
    />
  </MImageComparison>
</template>
```
::

### Vertical Orientation

::code-preview
---
label: Preview
---
  :::MImageComparison{orientation="vertical"}
    :::MImageComparisonImage{src="https://picsum.photos/seed/summer/600/600" alt="Summer view" position="left"}
    :::
    :::MImageComparisonImage{src="https://picsum.photos/seed/winter/600/600" alt="Winter view" position="right"}
    :::
  :::
#code
```vue
<template>
  <MImageComparison orientation="vertical">
    <MImageComparisonImage 
      src="https://picsum.photos/seed/summer/600/600" 
      alt="Summer view" 
      position="left" 
    />
    <MImageComparisonImage 
      src="https://picsum.photos/seed/winter/600/600" 
      alt="Winter view" 
      position="right" 
    />
  </MImageComparison>
</template>
```
::

### With Custom Controls

::code-preview
---
label: Preview
---
  :::MImageComparison
  ---
  :initial-position="30"
  :show-position="true"
  :show-controls="true"
  mode="fade"
  ---
    :::MImageComparisonImage{src="https://picsum.photos/seed/day/700/400" alt="Day view" position="left"}
    :::
    :::MImageComparisonImage{src="https://picsum.photos/seed/night/700/400" alt="Night view" position="right"}
    :::
  :::
#code
```vue
<template>
  <MImageComparison
    :initial-position="30"
    :show-position="true"
    :show-controls="true"
    mode="fade"
  >
    <MImageComparisonImage 
      src="https://picsum.photos/seed/day/700/400" 
      alt="Day view" 
      position="left" 
    />
    <MImageComparisonImage 
      src="https://picsum.photos/seed/night/700/400" 
      alt="Night view" 
      position="right" 
    />
  </MImageComparison>
</template>
```
::

### With Hover Interaction

::code-preview
---
label: Preview
---
  :::MImageComparison
  ---
  enable-hover
  :spring-options="{ bounce: 0.2, duration: 0.3 }"
  ---
    :::MImageComparisonImage{src="https://picsum.photos/seed/plain/600/400" alt="Plain design" position="left"}
    :::
    :::MImageComparisonImage{src="https://picsum.photos/seed/creative/600/400" alt="Creative design" position="right"}
    :::
  :::
#code
```vue
<template>
  <MImageComparison
    enable-hover
    :spring-options="{ bounce: 0.2, duration: 0.3 }"
  >
    <MImageComparisonImage 
      src="https://picsum.photos/seed/plain/600/400" 
      alt="Plain design" 
      position="left" 
    />
    <MImageComparisonImage 
      src="https://picsum.photos/seed/creative/600/400" 
      alt="Creative design" 
      position="right" 
    />
  </MImageComparison>
</template>
```
::