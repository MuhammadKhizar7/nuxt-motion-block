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
    :::component-example{name="dock-example"}
    :::
  :::
#code
```vue
<template>
  <MDock
    :magnification="dockSettings.magnification"
    :distance="dockSettings.distance"
    :panel-height="dockSettings.panelHeight"
    class="dock-custom"
    variant="bottom"
  >
    <MDockItem
      v-for="(app, index) in apps"
      :key="index"
      v-slot="{ width, isHovered, scale }"
      :aria-label="app.name"
      class="dock-item-custom"
      @click="handleAppClick(app)"
    >
      <MDockLabel :is-hovered="isHovered">
        {{ app.name }}
      </MDockLabel>
      <MDockIcon
        :width="width"
        :scale="scale"
        :name="app.icon"
        class="text-black dark:text-gray-50 aspect-square rounded-full hover:bg-black/5 dark:hover:bg-white/5"
      >
        <div
          :class="[
            'w-full h-full aspect-square rounded-full flex items-center justify-center text-2xl'
          ]"
          :style="{ fontSize: Math.max(16, width * 0.4) + 'px' }"
        />
      </MDockIcon>
    </MDockItem>
  </MDock>
</template>

<script setup lang="ts">
const apps = ref([
  { name: 'Home', icon: 'i-lucide-home' },
  { name: 'Products', icon: 'i-lucide-package' },
  { name: 'Messages', icon: 'i-lucide-message-circle' },
  { name: 'Mail', icon: 'i-lucide-mail' },
  { name: 'Photos', icon: 'i-lucide-image' },
  { name: 'Music', icon: 'i-lucide-music' },
  { name: 'Calendar', icon: 'i-lucide-calendar' },
  { name: 'Notes', icon: 'i-lucide-file' },
  { name: 'Settings', icon: 'i-lucide-settings' }
])

const dockSettings = reactive({
  magnification: 80,
  distance: 150,
  panelHeight: 64
})

const handleAppClick = (app: typeof apps.value[0]) => {
  const title = `Opening ${app.name}`
  const description = `Launching ${app.name} application...`
  const toast = useToast()
  toast.add({
    title,
    description,
    duration: 2000
  })
}
</script>

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

