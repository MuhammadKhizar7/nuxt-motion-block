# Animated Dialog

The AnimatedDialog component is a modal dialog that combines the functionality of Nuxt UI's UModal with smooth animations powered by motion-v. It provides an enhanced user experience with customizable entrance and exit animations.

## Usage

```vue
<template>
  <MAnimatedDialog>
    <UButton label="Open Dialog" />
    
    <template #body>
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">Dialog Content</h3>
        <p>This is the main content of the dialog.</p>
      </div>
    </template>
  </MAnimatedDialog>
</template>
```

## Props

### UModal Props

The AnimatedDialog component inherits all props from [UModal](https://ui.nuxt.com/docs/components/modal), including:

- `title` - Dialog title
- `description` - Dialog description
- `overlay` - Whether to show overlay (default: `true`)
- `fullscreen` - Whether dialog is fullscreen (default: `false`)
- `dismissible` - Whether dialog can be dismissed (default: `true`)
- `modal` - Whether dialog is modal (default: `true`)

### Animation Props

- `scale` - Scale factor for entrance/exit animations (default: `0.95`)
- `variants` - Custom animation variants
- `transitionOptions` - Custom transition options

## Slots

- `default` - Trigger element
- `body` - Main content of the dialog
- `header` - Custom header (overrides title/description)
- `footer` - Dialog footer
- `title` - Custom title
- `description` - Custom description
- `close` - Custom close button

## Examples

### Basic Usage

<component-example name="AnimatedDialogBasic" />

### Custom Animation

```vue
<template>
  <MAnimatedDialog 
    :variants="customVariants"
    :transition-options="{ type: 'spring', stiffness: 200, damping: 15 }"
  >
    <UButton label="Custom Animation" />
    
    <template #body>
      <div class="p-4">
        <p>This dialog has custom animations.</p>
      </div>
    </template>
  </MAnimatedDialog>
</template>

<script setup>
const customVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: -90 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  exit: { opacity: 0, scale: 0.8, rotate: 90 }
}
</script>
```

### With Header and Footer

```vue
<template>
  <MAnimatedDialog 
    title="Dialog with Header and Footer"
    description="This dialog has custom header and footer slots"
  >
    <UButton label="Open Complex Dialog" />
    
    <template #body>
      <div class="p-4">
        <p>Main content of the dialog.</p>
      </div>
    </template>
    
    <template #footer="{ close }">
      <div class="flex gap-2">
        <UButton label="Cancel" color="neutral" variant="outline" @click="close" />
        <UButton label="Confirm" color="primary" @click="close" />
      </div>
    </template>
  </MAnimatedDialog>
</template>
```