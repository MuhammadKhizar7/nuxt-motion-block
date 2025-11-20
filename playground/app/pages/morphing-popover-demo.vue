<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">
      Morphing Popover Demo
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Basic Morphing Popover (Click Mode) -->
      <div class="p-6 border rounded-lg">
        <h2 class="text-xl font-semibold mb-4">
          Click Mode Popover
        </h2>
        <MMorphingPopover mode="click" :scale="0.95">
          <UButton
            label="Open Click Popover"
            color="primary"
          />
          <template #content>
            <div class="p-4 w-64">
              <h3 class="text-lg font-semibold mb-2">
                Click Popover
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                This popover opens on click with motion-v animations.
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

      <!-- Hover Mode -->
      <div class="p-6 border rounded-lg">
        <h2 class="text-xl font-semibold mb-4">
          Hover Mode Popover
        </h2>
        <MMorphingPopover
          mode="hover"
          :open-delay="300"
          :close-delay="200"
          :scale="0.95"
        >
          <UButton
            label="Hover Over Me"
            color="success"
          />
          <template #content>
            <div class="p-4 w-64">
              <h3 class="text-lg font-semibold mb-2">
                Hover Popover
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                This popover opens on hover with motion-v animations.
              </p>
            </div>
          </template>
        </MMorphingPopover>
      </div>
      
      <!-- Custom Scale -->
      <div class="p-6 border rounded-lg">
        <h2 class="text-xl font-semibold mb-4">
          Custom Scale Animation
        </h2>
        <MMorphingPopover mode="click" :scale="0.9">
          <UButton
            label="Strong Morph"
            color="secondary"
          />
          <template #content>
            <div class="p-4 w-64">
              <h3 class="text-lg font-semibold mb-2">
                Strong Morphing
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                This popover uses a stronger motion-v morphing effect.
              </p>
            </div>
          </template>
        </MMorphingPopover>
      </div>
      
      <!-- Custom Variants and Transition -->
      <div class="p-6 border rounded-lg">
        <h2 class="text-xl font-semibold mb-4">
          Custom Variants & Transition
        </h2>
        <MMorphingPopover 
          mode="click"
          :variants="customVariants"
          :transition="customTransition"
        >
          <UButton
            label="Custom Animation"
            color="warning"
          />
          <template #content>
            <div class="p-4 w-64">
              <h3 class="text-lg font-semibold mb-2">
                Custom Animation
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                This popover uses custom variants and transition props.
              </p>
            </div>
          </template>
        </MMorphingPopover>
      </div>
      
      <!-- Rotate Animation -->
      <div class="p-6 border rounded-lg">
        <h2 class="text-xl font-semibold mb-4">
          Rotate Animation
        </h2>
        <MMorphingPopover 
          mode="click"
          :variants="rotateVariants"
          :transition="{ type: 'spring', stiffness: 200, damping: 15 }"
        >
          <UButton
            label="Rotate Popover"
            color="info"
          />
          <template #content>
            <div class="p-4 w-64">
              <h3 class="text-lg font-semibold mb-2">
                Rotate Animation
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                This popover rotates while morphing.
              </p>
            </div>
          </template>
        </MMorphingPopover>
      </div>
      
      <!-- Nuxt UI Popover (Control) -->
      <div class="p-6 border rounded-lg">
        <h2 class="text-xl font-semibold mb-4">
          Nuxt UI Popover (Control)
        </h2>
        <UPopover mode="click">
          <UButton label="Open Control" color="neutral" variant="subtle" />
          <template #content>
            Control Popover Content
          </template>
        </UPopover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const customVariants = {
  initial: { opacity: 0, scale: 0.5, rotate: -15 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  exit: { opacity: 0, scale: 0.5, rotate: 15 }
}

const customTransition = {
  type: 'spring',
  bounce: 0.2,
  duration: 0.5
}

const rotateVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: -90 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  exit: { opacity: 0, scale: 0.8, rotate: 90 }
}
</script>