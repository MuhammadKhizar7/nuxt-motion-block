---
title: Dock
description: macOS-style dock with magnification effects and smooth animations.
navigation:
  icon: i-lucide-app-window
---

# Dock

The Dock component provides a macOS-style dock with magnification effects and smooth animations. It's highly customizable and supports multiple orientations and sizes.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="p-4"}
    :::MDock{variant="bottom" size="md"}
      :::MDockItem
        :::MDockIcon{name="i-lucide-home"}
        :::
        :::MDockLabel
        Home
        :::
      :::
      :::MDockItem
        :::MDockIcon{name="i-lucide-settings"}
        :::
        :::MDockLabel
        Settings
        :::
      :::
      :::MDockItem
        :::MDockIcon{name="i-lucide-user"}
        :::
        :::MDockLabel
        Profile
        :::
      :::
    :::
  :::
#code
```vue
<template>
  <MDock variant="bottom" size="md">
    <MDockItem>
      <MDockIcon name="i-lucide-home" />
      <MDockLabel>Home</MDockLabel>
    </MDockItem>
    <MDockItem>
      <MDockIcon name="i-lucide-settings" />
      <MDockLabel>Settings</MDockLabel>
    </MDockItem>
    <MDockItem>
      <MDockIcon name="i-lucide-user" />
      <MDockLabel>Profile</MDockLabel>
    </MDockItem>
  </MDock>
</template>
```
::

## MDock Props

::field-group
  ::field{name="distance" type="number" default="150"}
  Distance for magnification effect.
  ::
  
  ::field{name="panelHeight" type="number" default="64"}
  Height of the dock panel.
  ::
  
  ::field{name="magnification" type="number" default="80"}
  Magnification factor.
  ::
  
  ::field{name="spring" type="SpringOptions" default="{ mass: 0.1, stiffness: 150, damping: 12 }"}
  Spring physics options.
  ::
  
  ::field{name="variant" type="'bottom' | 'top' | 'left' | 'right' | 'floating' | 'compact'" default="'bottom'"}
  Dock position variant.
  ::
  
  ::field{name="size" type="'sm' | 'md' | 'lg'" default="'md'"}
  Dock size preset.
  ::
  
  ::field{name="ariaLabel" type="string" default="'Application dock'"}
  Accessibility label.
  ::
  
  ::field{name="showLabels" type="boolean" default="true"}
  Show/hide labels.
  ::
  
  ::field{name="background" type="'glass' | 'solid' | 'none'" default="'glass'"}
  Background style.
  ::
  
  ::field{name="animation" type="'spring' | 'ease' | 'none'" default="'spring'"}
  Animation type.
  ::
::

## MDock Slots

::field-group
  ::field{name="default" type="none"}
  Dock items.
  ::
::

## MDockItem Props

::field-group
  ::field{name="id" type="string" default="Random ID"}
  Unique identifier for the item.
  ::
  
  ::field{name="disabled" type="boolean" default="false"}
  Disable the item.
  ::
::

## MDockItem Slots

::field-group
  ::field{name="default" type="none"}
  Item content.
  ::
::

## MDockIcon Props

::field-group
  ::field{name="name" type="string" :required="true"}
  Icon name from icon library.
  ::
::

## MDockLabel Props

::field-group
  ::field{name="text" type="string" :required="true"}
  Label text.
  ::
::

## Examples

### Basic Dock

::code-preview
---
label: Preview
---
  :::MDock
    :::MDockItem
      :::MDockIcon{name="i-lucide-home"}
      :::
      :::MDockLabel
      Home
      :::
    :::
    :::MDockItem
      :::MDockIcon{name="i-lucide-search"}
      :::
      :::MDockLabel
      Search
      :::
    :::
    :::MDockItem
      :::MDockIcon{name="i-lucide-settings"}
      :::
      :::MDockLabel
      Settings
      :::
    :::
  :::
#code
```vue
<template>
  <MDock>
    <MDockItem>
      <MDockIcon name="i-lucide-home" />
      <MDockLabel>Home</MDockLabel>
    </MDockItem>
    <MDockItem>
      <MDockIcon name="i-lucide-search" />
      <MDockLabel>Search</MDockLabel>
    </MDockItem>
    <MDockItem>
      <MDockIcon name="i-lucide-settings" />
      <MDockLabel>Settings</MDockLabel>
    </MDockItem>
  </MDock>
</template>
```
::

### Top Positioned Dock

::code-preview
---
label: Preview
---
  :::MDock{variant="top"}
    :::MDockItem
      :::MDockIcon{name="i-lucide-folder"}
      :::
      :::MDockLabel
      Files
      :::
    :::
    :::MDockItem
      :::MDockIcon{name="i-lucide-mail"}
      :::
      :::MDockLabel
      Mail
      :::
    :::
    :::MDockItem
      :::MDockIcon{name="i-lucide-calendar"}
      :::
      :::MDockLabel
      Calendar
      :::
    :::
  :::
#code
```vue
<template>
  <MDock variant="top">
    <MDockItem>
      <MDockIcon name="i-lucide-folder" />
      <MDockLabel>Files</MDockLabel>
    </MDockItem>
    <MDockItem>
      <MDockIcon name="i-lucide-mail" />
      <MDockLabel>Mail</MDockLabel>
    </MDockItem>
    <MDockItem>
      <MDockIcon name="i-lucide-calendar" />
      <MDockLabel>Calendar</MDockLabel>
    </MDockItem>
  </MDock>
</template>
```
::

### Compact Dock

::code-preview
---
label: Preview
---
  :::MDock{variant="floating" size="sm" :show-labels="false"}
    :::MDockItem
      :::MDockIcon{name="i-lucide-home"}
      :::
    :::
    :::MDockItem
      :::MDockIcon{name="i-lucide-heart"}
      :::
    :::
    :::MDockItem
      :::MDockIcon{name="i-lucide-star"}
      :::
    :::
    :::MDockItem
      :::MDockIcon{name="i-lucide-user"}
      :::
    :::
  :::
#code
```vue
<template>
  <MDock variant="floating" size="sm" :show-labels="false">
    <MDockItem>
      <MDockIcon name="i-lucide-home" />
    </MDockItem>
    <MDockItem>
      <MDockIcon name="i-lucide-heart" />
    </MDockItem>
    <MDockItem>
      <MDockIcon name="i-lucide-star" />
    </MDockItem>
    <MDockItem>
      <MDockIcon name="i-lucide-user" />
    </MDockItem>
  </MDock>
</template>
```
::

### Custom Styled Dock

::code-preview
---
label: Preview
---
  :::MDock
  ---
  variant="left"
  size="lg"
  background="solid"
  :distance="200"
  :magnification="100"
  ---
    :::MDockItem
      :::MDockIcon{name="i-lucide-monitor"}
      :::
      :::MDockLabel
      Dashboard
      :::
    :::
    :::MDockItem
      :::MDockIcon{name="i-lucide-bar-chart-3"}
      :::
      :::MDockLabel
      Analytics
      :::
    :::
    :::MDockItem
      :::MDockIcon{name="i-lucide-users"}
      :::
      :::MDockLabel
      Users
      :::
    :::
    :::MDockItem
      :::MDockIcon{name="i-lucide-settings"}
      :::
      :::MDockLabel
      Settings
      :::
    :::
  :::
#code
```vue
<template>
  <MDock 
    variant="left" 
    size="lg"
    background="solid"
    :distance="200"
    :magnification="100"
  >
    <MDockItem>
      <MDockIcon name="i-lucide-monitor" />
      <MDockLabel>Dashboard</MDockLabel>
    </MDockItem>
    <MDockItem>
      <MDockIcon name="i-lucide-bar-chart-3" />
      <MDockLabel>Analytics</MDockLabel>
    </MDockItem>
    <MDockItem>
      <MDockIcon name="i-lucide-users" />
      <MDockLabel>Users</MDockLabel>
    </MDockItem>
    <MDockItem>
      <MDockIcon name="i-lucide-settings" />
      <MDockLabel>Settings</MDockLabel>
    </MDockItem>
  </MDock>
</template>
```
::