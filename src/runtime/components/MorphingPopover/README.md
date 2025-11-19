# Morphing Popover

A popover component with morphing animations powered by Motion One, built as a wrapper around Nuxt UI's Popover component.

## Installation

Make sure you have the required dependencies installed:

```bash
npm install @nuxt/ui motion-v
```

## Usage

### Basic Usage

```vue
<template>
  <MorphingPopover>
    <MorphingPopoverTrigger>
      <UButton label="Open Popover" color="primary" />
    </MorphingPopoverTrigger>
    
    <template #content>
      <div class="p-4 w-64">
        <h2 class="text-lg font-semibold mb-2">Morphing Popover</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          This is a popover with morphing animations.
        </p>
        <div class="flex gap-2">
          <UButton label="Action" color="primary" variant="outline" size="sm" />
        </div>
      </div>
    </template>
  </MorphingPopover>
</template>

<script setup>
import { MorphingPopover, MorphingPopoverTrigger } from '#components'
</script>
```

### With Custom Animation Variants

```vue
<template>
  <MorphingPopover :variants="customVariants" :transition="customTransition">
    <MorphingPopoverTrigger>
      <UButton label="Custom Animation" color="secondary" />
    </MorphingPopoverTrigger>
    
    <template #content>
      <div class="p-4 w-64">
        <h2 class="text-lg font-semibold mb-2">Custom Animation</h2>
        <p class="text-gray-600 dark:text-gray-300">
          This popover has custom morphing animations.
        </p>
      </div>
    </template>
  </MorphingPopover>
</template>

<script setup>
const customVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    rotate: -10
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    rotate: 10
  }
}

const customTransition = {
  type: 'spring',
  bounce: 0.2,
  duration: 0.5
}
</script>
```

### With Anchor Slot

```vue
<template>
  <MorphingPopover>
    <template #anchor>
      <UInput placeholder="Focus to open" />
    </template>
    
    <template #content>
      <div class="p-4 w-64">
        <h2 class="text-lg font-semibold mb-2">Anchor Slot</h2>
        <p class="text-gray-600 dark:text-gray-300">
          This popover uses the anchor slot.
        </p>
      </div>
    </template>
  </MorphingPopover>
</template>
```

## Props

The MorphingPopover component accepts all props from [Nuxt UI's Popover](https://ui.nuxt.com/docs/components/popover) component, plus:

| Prop         | Type   | Default            | Description                                              |
| ------------ | ------ | ------------------ | -------------------------------------------------------- |
| `variants`   | Object | Default variants   | Animation variants for initial, animate, and exit states |
| `transition` | Object | Default transition | Transition configuration for animations                  |

## Slots

| Slot      | Description                                            |
| --------- | ------------------------------------------------------ |
| `default` | The trigger element                                    |
| `content` | The popover content                                    |
| `anchor`  | Custom anchor element (only works with `mode="click"`) |

## Composables

### `useMorphingPopover`

A composable for creating custom morphing popover implementations:

```vue
<script setup>
import { useMorphingPopover } from '#imports'

const popover = useMorphingPopover({
  defaultOpen: false,
  variants: customVariants,
  transition: customTransition
})
</script>
```

## Customization

You can customize the appearance by passing classes through the `ui` prop or by using the `content` prop to configure the popover's positioning.