<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">
      Morphing Popover Demo
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Basic Morphing Popover -->
      <div class="p-6 border rounded-lg">
        <h2 class="text-xl font-semibold mb-4">
          Basic Morphing Popover
        </h2>
        <MMorphingPopover>
          <MMorphingPopoverTrigger>
            <UButton
              label="Open Basic Popover"
              color="primary"
            />
          </MMorphingPopoverTrigger>

          <template #content>
            <div class="p-4 w-64">
              <h3 class="text-lg font-semibold mb-2">
                Basic Popover
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                This is a basic morphing popover with default animations.
              </p>
              <UButton
                label="Action"
                color="primary"
                variant="outline"
                size="sm"
              />
            </div>
          </template>
        </MMorphingPopover>
      </div>

      <!-- Custom Animation Variants -->
      <div class="p-6 border rounded-lg">
        <h2 class="text-xl font-semibold mb-4">
          Custom Animation
        </h2>
        <MMorphingPopover
          :variants="customVariants"
          :transition="customTransition"
        >
          <MMorphingPopoverTrigger>
            <UButton
              label="Open Custom Popover"
              color="secondary"
            />
          </MMorphingPopoverTrigger>

          <template #content>
            <div class="p-4 w-64">
              <h3 class="text-lg font-semibold mb-2">
                Custom Animation
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                This popover has custom morphing animations with rotation effects.
              </p>
              <UButton
                label="Action"
                color="secondary"
                variant="outline"
                size="sm"
              />
            </div>
          </template>
        </MMorphingPopover>
      </div>

      <!-- With Anchor Slot -->
      <div class="p-6 border rounded-lg">
        <h2 class="text-xl font-semibold mb-4">
          With Anchor Slot
        </h2>
        <MMorphingPopover>
          <template #anchor>
            <UInput placeholder="Focus to open popover" />
          </template>

          <template #content>
            <div class="p-4 w-64">
              <h3 class="text-lg font-semibold mb-2">
                Anchor Slot
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                This popover uses the anchor slot for custom positioning.
              </p>
              <UButton
                label="Action"
                color="neutral"
                variant="outline"
                size="sm"
              />
            </div>
          </template>
        </MMorphingPopover>
      </div>

      <!-- Hover Mode -->
      <div class="p-6 border rounded-lg">
        <h2 class="text-xl font-semibold mb-4">
          Hover Mode
        </h2>
        <MMorphingPopover
          mode="hover"
          :open-delay="300"
          :close-delay="200"
        >
          <MMorphingPopoverTrigger>
            <UButton
              label="Hover Over Me"
              color="success"
            />
          </MMorphingPopoverTrigger>

          <template #content>
            <div class="p-4 w-64">
              <h3 class="text-lg font-semibold mb-2">
                Hover Popover
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                This popover opens on hover with custom delays.
              </p>
            </div>
          </template>
        </MMorphingPopover>
      </div>
      <!-- Nuxt ui Popover -->
       <div class="p-6 border rounded-lg">
        <h2 class="text-xl font-semibold mb-4">
          Nuxt ui Popover
        </h2>
       <UPopover>
      <UButton label="Open" color="neutral" variant="subtle" />

      <template #content>
        Popover Content
      </template>
    </UPopover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const customVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    rotate: -15,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    rotate: 15,
  },
}

const customTransition = {
  type: 'spring',
  bounce: 0.2,
  duration: 0.5,
}
</script>