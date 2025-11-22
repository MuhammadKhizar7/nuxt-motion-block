<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">
      Animated Dialog Demo
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Basic Animated Dialog -->
      <div class="p-6 border rounded-lg">
        <h2 class="text-xl font-semibold mb-4">
          Basic Animated Dialog
        </h2>
        <MAnimatedDialog>
          <UButton
            label="Open Dialog"
            color="primary"
          />
          <template #body>
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">
                Basic Dialog
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                This dialog opens with motion-v animations.
              </p>
              <UButton
                label="Action"
                color="primary"
                variant="outline"
                size="sm"
              />
            </div>
          </template>
        </MAnimatedDialog>
      </div>

      <!-- Custom Scale Animation -->
      <div class="p-6 border rounded-lg">
        <h2 class="text-xl font-semibold mb-4">
          Custom Scale Animation
        </h2>
        <MAnimatedDialog :scale="0.8">
          <UButton
            label="Strong Morph"
            color="secondary"
          />
          <template #body>
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">
                Strong Morphing
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                This dialog uses a stronger motion-v morphing effect.
              </p>
            </div>
          </template>
        </MAnimatedDialog>
      </div>

      <!-- Custom Variants and Transition -->
      <div class="p-6 border rounded-lg">
        <h2 class="text-xl font-semibold mb-4">
          Custom Variants & Transition
        </h2>
        <MAnimatedDialog
          :variants="customVariants"
          :transition-options="customTransition"
        >
          <UButton
            label="Custom Animation"
            color="warning"
          />
          <template #body>
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">
                Custom Animation
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                This dialog uses custom variants and transition props.
              </p>
            </div>
          </template>
        </MAnimatedDialog>
      </div>

      <!-- Rotate Animation -->
      <div class="p-6 border rounded-lg">
        <h2 class="text-xl font-semibold mb-4">
          Rotate Animation
        </h2>
        <MAnimatedDialog
          :variants="rotateVariants"
          :transition-options="{ type: 'spring', stiffness: 200, damping: 15 }"
        >
          <UButton
            label="Rotate Dialog"
            color="info"
          />
          <template #body>
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">
                Rotate Animation
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                This dialog rotates while animating.
              </p>
            </div>
          </template>
        </MAnimatedDialog>
      </div>

      <!-- With Header and Footer -->
      <div class="p-6 border rounded-lg md:col-span-2">
        <h2 class="text-xl font-semibold mb-4">
          With Header and Footer
        </h2>
        <MAnimatedDialog
          title="Dialog with Header and Footer"
          description="This dialog has custom header and footer slots"
        >
          <UButton
            label="Open Complex Dialog"
            color="primary"
          />
          <template #body>
            <div class="p-4">
              <p class="text-gray-600 dark:text-gray-300">
                This is the main content of the dialog. It can contain any Vue components or HTML elements.
              </p>
              <div class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                <p>You can include forms, images, or any other content here.</p>
              </div>
            </div>
          </template>
          <template #footer="{ close }">
            <div class="flex gap-2">
              <UButton
                label="Cancel"
                color="neutral"
                variant="outline"
                @click="close"
              />
              <UButton
                label="Confirm"
                color="primary"
                @click="close"
              />
            </div>
          </template>
        </MAnimatedDialog>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const customVariants = {
  initial: { opacity: 0, scale: 0.5, rotate: -15 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  exit: { opacity: 0, scale: 0.5, rotate: 15 },
}

const customTransition = {
  type: 'spring',
  bounce: 0.2,
  duration: 0.5,
}

const rotateVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: -90 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  exit: { opacity: 0, scale: 0.8, rotate: 90 },
}
</script>
