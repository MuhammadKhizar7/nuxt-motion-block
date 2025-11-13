---
title: Drag And Drop
description: Interactive drag and drop component with sorting, multi-selection, and various layout options.
navigation:
  icon: i-lucide-move
---

# Drag And Drop

The DragAndDrop component provides interactive drag and drop functionality with sorting, multi-selection, and various layout options. It supports list, grid, and masonry layouts with smooth animations.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="drag-and-drop-example" />
  :::
#code
```vue
<template>
  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Drag and Drop List</h3>
    <MDragAndDrop
      v-model:items="items"
      layout="list"
      :animation-duration="0.3"
      @change="handleItemsChange"
    >
      <template #default="{ item }">
        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center">
          <UIcon name="i-lucide-grip-vertical" class="w-4 h-4 text-gray-400 mr-2" />
          <div>
            <div class="font-medium text-gray-900 dark:text-white">{{ item.name }}</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">{{ item.description }}</div>
          </div>
        </div>
      </template>
    </MDragAndDrop>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { id: 1, name: 'Task 1', description: 'First task to complete' },
  { id: 2, name: 'Task 2', description: 'Second task to complete' },
  { id: 3, name: 'Task 3', description: 'Third task to complete' },
  { id: 4, name: 'Task 4', description: 'Fourth task to complete' },
])

const handleItemsChange = (newItems) => {
  console.log('Items reordered:', newItems)
}
</script>
```
::

## Props

### MDragAndDrop Props

::field-group
  ::field{name="items" type="DragItem[]" required}
  Array of items to display and allow dragging.
  ::
  
  ::field{name="layout" type="string" default="'list'"}
  Layout type: 'list', 'grid', or 'masonry'.
  ::
  
  ::field{name="mode" type="string" default="'sort'"}
  Drag mode: 'sort', 'move', or 'copy'.
  ::
  
  ::field{name="disabled" type="boolean" default="false"}
  Whether dragging is disabled.
  ::
  
  ::field{name="showHandle" type="boolean" default="false"}
  Whether to show drag handles.
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
  Whether multiple items can be selected.
  ::
  
  ::field{name="snapToGrid" type="boolean" default="true"}
  Whether items should snap to grid.
  ::
  
  ::field{name="animationDuration" type="number" default="0.3"}
  Duration of drag animations in seconds.
  ::
::

### DragItem Interface

::field-group
  ::field{name="id" type="string | number" required}
  Unique identifier for the item.
  ::
  
  ::field{name="[key: string]" type="any"}
  Any additional properties for the item.
  ::
::

## Events

::field-group
  ::field{name="change" type="function"}
  Emitted when items are reordered. Returns the new items array.
  ::
  
  ::field{name="dragStart" type="function"}
  Emitted when dragging starts. Returns the dragged item and its index.
  ::
  
  ::field{name="dragEnd" type="function"}
  Emitted when dragging ends. Returns the dragged item, old index, and new index.
  ::
  
  ::field{name="drop" type="function"}
  Emitted when an item is dropped in a drop zone. Returns the dropped item and zone index.
  ::
  
  ::field{name="select" type="function"}
  Emitted when an item is selected or deselected. Returns the item and selection state.
  ::
::

## Methods

::field-group
  ::field{name="clearSelection" type="function"}
  Clears all selected items.
  ::
  
  ::field{name="selectAll" type="function"}
  Selects all items.
  ::
  
  ::field{name="getSelected" type="function"}
  Returns an array of selected item IDs.
  ::
::

## Examples

### Grid Layout

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="drag-and-drop-grid" />
  :::
#code
```vue
<template>
  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Drag and Drop Grid</h3>
    <MDragAndDrop
      v-model:items="items"
      layout="grid"
      :columns="3"
      :gap="16"
      :animation-duration="0.3"
    >
      <template #default="{ item }">
        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
          <div class="font-medium text-gray-900 dark:text-white">{{ item.name }}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ item.category }}</div>
        </div>
      </template>
    </MDragAndDrop>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { id: 1, name: 'Project A', category: 'Development' },
  { id: 2, name: 'Project B', category: 'Design' },
  { id: 3, name: 'Project C', category: 'Marketing' },
  { id: 4, name: 'Project D', category: 'Development' },
  { id: 5, name: 'Project E', category: 'Design' },
  { id: 6, name: 'Project F', category: 'Marketing' },
])
</script>
```
::

### Multi-Select with Checkboxes

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center"}
    <component-example name="drag-and-drop-multi-select" />
  :::
#code
```vue
<template>
  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Multi-Select Drag and Drop</h3>
    <div class="mb-4 flex gap-2">
      <UButton @click="clearSelection" size="sm">Clear Selection</UButton>
      <UButton @click="selectAll" size="sm">Select All</UButton>
    </div>
    <MDragAndDrop
      ref="dragDropRef"
      v-model:items="items"
      layout="list"
      :allow-multi-select="true"
      :animation-duration="0.3"
      @select="handleSelect"
    >
      <template #default="{ item, isSelected }">
        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center">
          <UCheckbox
            :model-value="isSelected"
            class="mr-3"
            @update:model-value="() => {}"
          />
          <UIcon name="i-lucide-grip-vertical" class="w-4 h-4 text-gray-400 mr-2" />
          <div>
            <div class="font-medium text-gray-900 dark:text-white">{{ item.name }}</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">{{ item.status }}</div>
          </div>
        </div>
      </template>
    </MDragAndDrop>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dragDropRef = ref()
const items = ref([
  { id: 1, name: 'Task 1', status: 'In Progress' },
  { id: 2, name: 'Task 2', status: 'Completed' },
  { id: 3, name: 'Task 3', status: 'Pending' },
  { id: 4, name: 'Task 4', status: 'In Progress' },
])

const handleSelect = (item, selected) => {
  console.log(`Item ${item.name} ${selected ? 'selected' : 'deselected'}`)
}

const clearSelection = () => {
  dragDropRef.value?.clearSelection()
}

const selectAll = () => {
  dragDropRef.value?.selectAll()
}
</script>
```
::