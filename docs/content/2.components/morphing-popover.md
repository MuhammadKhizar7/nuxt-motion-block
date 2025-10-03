---
title: Morphing Popover
description: A popover component with morphing animations and smooth transitions.
navigation:
  icon: i-lucide-message-circle
---

# Morphing Popover

The MorphingPopover component provides a popover with morphing animations and smooth transitions. It's perfect for creating interactive tooltips, dropdowns, and contextual menus with beautiful animations.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MMorphingPopover
      :::MMorphingPopoverTrigger
        :::button{class="px-4 py-2 bg-blue-500 text-white rounded"}
        Open Popover
        :::
      :::
      :::MMorphingPopoverContent
        :::div{class="p-4"}
          :::p
          This is a morphing popover with smooth animations.
          :::
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <MMorphingPopover>
    <MMorphingPopoverTrigger>
      <button class="px-4 py-2 bg-blue-500 text-white rounded">
        Open Popover
      </button>
    </MMorphingPopoverTrigger>
    <MMorphingPopoverContent>
      <div class="p-4">
        <p>This is a morphing popover with smooth animations.</p>
      </div>
    </MMorphingPopoverContent>
  </MMorphingPopover>
</template>
```
::

## MMorphingPopover Props

::field-group
  ::field{name="placement" type="string" default="'bottom'"}
  Popover placement.
  ::
  
  ::field{name="arrow" type="boolean" default="true"}
  Show/hide arrow.
  ::
  
  ::field{name="offset" type="number" default="8"}
  Distance from trigger.
  ::
  
  ::field{name="duration" type="number" default="200"}
  Animation duration.
  ::
::

## MMorphingPopover Slots

::field-group
  ::field{name="default" type="none"}
  Trigger and content.
  ::
::

## MMorphingPopoverTrigger Slots

::field-group
  ::field{name="default" type="none"}
  Trigger element.
  ::
::

## MMorphingPopoverContent Slots

::field-group
  ::field{name="default" type="none"}
  Popover content.
  ::
::

## Examples

### Basic Morphing Popover

::code-preview
---
label: Preview
---
  :::MMorphingPopover
    :::MMorphingPopoverTrigger
      :::button{class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"}
      Click Me
      :::
    :::
    :::MMorphingPopoverContent
      :::div{class="p-4 max-w-xs"}
        :::h3{class="font-bold text-lg mb-2"}
        Popover Title
        :::
        :::p
        This is a morphing popover with smooth animations. It appears with a beautiful morphing effect.
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <MMorphingPopover>
    <MMorphingPopoverTrigger>
      <button class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors">
        Click Me
      </button>
    </MMorphingPopoverTrigger>
    <MMorphingPopoverContent>
      <div class="p-4 max-w-xs">
        <h3 class="font-bold text-lg mb-2">Popover Title</h3>
        <p>This is a morphing popover with smooth animations. It appears with a beautiful morphing effect.</p>
      </div>
    </MMorphingPopoverContent>
  </MMorphingPopover>
</template>
```
::

### With Custom Placement

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center space-x-4 p-8"}
    :::MMorphingPopover{placement="top"}
      :::MMorphingPopoverTrigger
        :::button{class="px-3 py-1.5 bg-emerald-500 text-white rounded text-sm"}
        Top
        :::
      :::
      :::MMorphingPopoverContent
        :::div{class="p-3 text-sm"}
        Popover on top
        :::
      :::
    :::
    
    :::MMorphingPopover{placement="right"}
      :::MMorphingPopoverTrigger
        :::button{class="px-3 py-1.5 bg-amber-500 text-white rounded text-sm"}
        Right
        :::
      :::
      :::MMorphingPopoverContent
        :::div{class="p-3 text-sm"}
        Popover on right
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <div class="flex justify-center space-x-4 p-8">
    <MMorphingPopover placement="top">
      <MMorphingPopoverTrigger>
        <button class="px-3 py-1.5 bg-emerald-500 text-white rounded text-sm">
          Top
        </button>
      </MMorphingPopoverTrigger>
      <MMorphingPopoverContent>
        <div class="p-3 text-sm">
          Popover on top
        </div>
      </MMorphingPopoverContent>
    </MMorphingPopover>
    
    <MMorphingPopover placement="right">
      <MMorphingPopoverTrigger>
        <button class="px-3 py-1.5 bg-amber-500 text-white rounded text-sm">
          Right
        </button>
      </MMorphingPopoverTrigger>
      <MMorphingPopoverContent>
        <div class="p-3 text-sm">
          Popover on right
        </div>
      </MMorphingPopoverContent>
    </MMorphingPopover>
  </div>
</template>
```
::

### With Form Content

::code-preview
---
label: Preview
---
  :::MMorphingPopover
    :::MMorphingPopoverTrigger
      :::button{class="px-4 py-2 bg-purple-500 text-white rounded flex items-center"}
        :::i{class="i-lucide-user mr-2"}
        :::
        Edit Profile
      :::
    :::
    :::MMorphingPopoverContent
      :::div{class="p-4 w-64"}
        :::h3{class="font-bold text-lg mb-3"}
        Edit Profile
        :::
        :::div{class="space-y-3"}
          :::div
            :::label{class="block text-sm font-medium mb-1"}
            Name
            :::
            :::input{type="text" class="w-full px-3 py-1.5 border rounded text-sm" placeholder="Your name"}
            :::
          :::
          :::div
            :::label{class="block text-sm font-medium mb-1"}
            Email
            :::
            :::input{type="email" class="w-full px-3 py-1.5 border rounded text-sm" placeholder="your@email.com"}
            :::
          :::
          :::div{class="flex justify-end space-x-2 pt-2"}
            :::button{class="px-3 py-1.5 text-sm border rounded"}
            Cancel
            :::
            :::button{class="px-3 py-1.5 text-sm bg-blue-500 text-white rounded"}
            Save
            :::
          :::
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <MMorphingPopover>
    <MMorphingPopoverTrigger>
      <button class="px-4 py-2 bg-purple-500 text-white rounded flex items-center">
        <i class="i-lucide-user mr-2"></i>
        Edit Profile
      </button>
    </MMorphingPopoverTrigger>
    <MMorphingPopoverContent>
      <div class="p-4 w-64">
        <h3 class="font-bold text-lg mb-3">Edit Profile</h3>
        <div class="space-y-3">
          <div>
            <label class="block text-sm font-medium mb-1">Name</label>
            <input 
              type="text" 
              class="w-full px-3 py-1.5 border rounded text-sm"
              placeholder="Your name"
            >
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              class="w-full px-3 py-1.5 border rounded text-sm"
              placeholder="your@email.com"
            >
          </div>
          <div class="flex justify-end space-x-2 pt-2">
            <button class="px-3 py-1.5 text-sm border rounded">
              Cancel
            </button>
            <button class="px-3 py-1.5 text-sm bg-blue-500 text-white rounded">
              Save
            </button>
          </div>
        </div>
      </div>
    </MMorphingPopoverContent>
  </MMorphingPopover>
</template>
```
::