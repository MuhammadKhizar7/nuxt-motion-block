---
title: Drag and Drop
description: Drag and drop functionality with visual feedback.
navigation:
  icon: i-lucide-move
---

# Drag and Drop

The DragAndDrop component provides drag and drop functionality with visual feedback. It's perfect for creating interactive lists, grids, and sorting interfaces with smooth animations.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MDragAndDrop{:items="[{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, { id: 3, name: 'Item 3' }]"}
    :::
  :::
#code
```vue
<template>
  <MDragAndDrop :items="[{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, { id: 3, name: 'Item 3' }]" />
</template>
```
::

## Props

::field-group
  ::field{name="items" type="DragItem[]" :required="true"}
  Array of items to display and drag.
  ::
  
  ::field{name="layout" type="'list' | 'grid' | 'masonry'" default="'list'"}
  Layout type for items.
  ::
  
  ::field{name="mode" type="'sort' | 'move' | 'copy'" default="'sort'"}
  Drag mode behavior.
  ::
  
  ::field{name="disabled" type="boolean" default="false"}
  Disable drag and drop functionality.
  ::
  
  ::field{name="showHandle" type="boolean" default="false"}
  Show drag handle for each item.
  ::
  
  ::field{name="columns" type="number" default="3"}
  Number of columns for grid layout.
  ::
  
  ::field{name="gap" type="number" default="16"}
  Gap between items in pixels.
  ::
  
  ::field{name="class" type="string" default="''"}
  CSS classes to apply to the container.
  ::
  
  ::field{name="itemClass" type="string" default="''"}
  CSS classes to apply to each item.
  ::
  
  ::field{name="allowMultiSelect" type="boolean" default="false"}
  Allow selecting multiple items.
  ::
  
  ::field{name="snapToGrid" type="boolean" default="true"}
  Snap items to grid during drag.
  ::
  
  ::field{name="animationDuration" type="number" default="0.3"}
  Animation duration in seconds.
  ::
::

## Events

::field-group
  ::field{name="change" type="(items: DragItem[]) => void"}
  Emitted when items are reordered.
  ::
  
  ::field{name="dragStart" type="(item: DragItem, index: number) => void"}
  Emitted when drag starts.
  ::
  
  ::field{name="dragEnd" type="(item: DragItem, oldIndex: number, newIndex: number) => void"}
  Emitted when drag ends.
  ::
  
  ::field{name="drop" type="(item: DragItem, zone: number) => void"}
  Emitted when item is dropped in a zone.
  ::
  
  ::field{name="select" type="(item: DragItem, selected: boolean) => void"}
  Emitted when item selection changes.
  ::
::

## Slots

::field-group
  ::field{name="default" type="{ item: DragItem, index: number, isDragging: boolean, isOver: boolean, isSelected: boolean }"}
  Custom item rendering slot.
  ::
::

## Examples

### Basic Drag and Drop List

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MDragAndDrop{:items="[{ id: 1, name: 'First Item' }, { id: 2, name: 'Second Item' }, { id: 3, name: 'Third Item' }]"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MDragAndDrop 
      :items="[
        { id: 1, name: 'First Item' },
        { id: 2, name: 'Second Item' },
        { id: 3, name: 'Third Item' }
      ]"
    />
  </div>
</template>
```
::

### Grid Layout with Custom Items

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MDragAndDrop{:items="[{ id: 1, title: 'Card 1', content: 'Description 1' }, { id: 2, title: 'Card 2', content: 'Description 2' }, { id: 3, title: 'Card 3', content: 'Description 3' }, { id: 4, title: 'Card 4', content: 'Description 4' }]" layout="grid" :columns="2"}
      :::template{#default="{ item }"}
        :::div{class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"}
          :::h4{class="font-bold mb-2"}
          {{ item.title }}
          :::
          :::p{class="text-gray-600 dark:text-gray-400 text-sm"}
          {{ item.content }}
          :::
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MDragAndDrop 
      :items="[
        { id: 1, title: 'Card 1', content: 'Description 1' },
        { id: 2, title: 'Card 2', content: 'Description 2' },
        { id: 3, title: 'Card 3', content: 'Description 3' },
        { id: 4, title: 'Card 4', content: 'Description 4' }
      ]"
      layout="grid"
      :columns="2"
    >
      <template #default="{ item }">
        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h4 class="font-bold mb-2">{{ item.title }}</h4>
          <p class="text-gray-600 dark:text-gray-400 text-sm">{{ item.content }}</p>
        </div>
      </template>
    </MDragAndDrop>
  </div>
</template>
```
::

### With Drag Handles

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MDragAndDrop{:items="[{ id: 1, name: 'Item with Handle 1' }, { id: 2, name: 'Item with Handle 2' }, { id: 3, name: 'Item with Handle 3' }]" :show-handle="true"}
    :::
  :::
#code
```vue
<template>
  <div class="p-4">
    <MDragAndDrop 
      :items="[
        { id: 1, name: 'Item with Handle 1' },
        { id: 2, name: 'Item with Handle 2' },
        { id: 3, name: 'Item with Handle 3' }
      ]"
      :show-handle="true"
    />
  </div>
</template>
```
::