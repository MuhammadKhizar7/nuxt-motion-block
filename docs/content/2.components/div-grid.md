---
title: Div Grid
description: Grid of div elements with customizable size, colors, and interactive behavior.
navigation:
  icon: i-lucide-grid-3x3
---

# Div Grid

The DivGrid component creates a grid of div elements with customizable size, colors, and interactive behavior. It's perfect for creating background patterns and interactive grids.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="div-grid-example" />
  :::
#code
```vue
<template>
  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Div Grid</h3>
    <MDivGrid
      :rows="5"
      :cols="10"
      :cell-size="40"
      border-color="#4b5563"
      fill-color="rgba(59, 130, 246, 0.3)"
      class="mx-auto"
      @cell-click="handleCellClick"
    />
  </div>
</template>

<script setup lang="ts">
const handleCellClick = (row: number, col: number) => {
  console.log(`Cell clicked: row ${row}, col ${col}`)
}
</script>
```
::

## Props

::field-group
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the grid container.
  ::
  
  ::field{name="rows" type="number" default="7"}
  Number of rows in the grid.
  ::
  
  ::field{name="cols" type="number" default="30"}
  Number of columns in the grid.
  ::
  
  ::field{name="cellSize" type="number" default="56"}
  Size of each cell in pixels.
  ::
  
  ::field{name="borderColor" type="string" default="'#3f3f46'"}
  Border color of the cells.
  ::
  
  ::field{name="fillColor" type="string" default="'rgba(14,165,233,0.3)'"}
  Fill color of the cells.
  ::
  
  ::field{name="clickedCell" type="object" default="null"}
  Object representing the clicked cell with row and col properties.
  ::
  
  ::field{name="interactive" type="boolean" default="true"}
  Whether the grid is interactive.
  ::
::

## Events

::field-group
  ::field{name="cellClick" type="function"}
  Emitted when a cell is clicked. Returns the row and column indices.
  ::
::

## Examples

### Basic Div Grid

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="div-grid-basic" />
  :::
#code
```vue
<template>
  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Basic Div Grid</h3>
    <MDivGrid
      :rows="3"
      :cols="6"
      :cell-size="30"
      class="mx-auto"
    />
  </div>
</template>
```
::

### Custom Colors and Interaction

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="div-grid-custom" />
  :::
#code
```vue
<template>
  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Custom Div Grid</h3>
    <MDivGrid
      :rows="8"
      :cols="12"
      :cell-size="25"
      border-color="#7e22ce"
      fill-color="rgba(192, 132, 252, 0.3)"
      :interactive="true"
      class="mx-auto"
      @cell-click="handleCellClick"
    />
  </div>
</template>

<script setup lang="ts">
const handleCellClick = (row: number, col: number) => {
  console.log(`Custom grid cell clicked: row ${row}, col ${col}`)
}
</script>
```
::