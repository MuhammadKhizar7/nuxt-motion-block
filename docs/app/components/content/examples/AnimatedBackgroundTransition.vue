<template>
  <MAnimatedBackground
    background-class="-z-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1"
    :transition="{ duration: 500, ease: 'ease-in-out' }"
    enable-hover
  >
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 rounded-lg">
      <div
        v-for="(item, index) in ITEMS"
        :key="index"
        :data-id="`card-${index}`"
      >
        <div class="flex select-none flex-col gap-2 p-4">
          <h3 class="text-base font-medium text-zinc-800 dark:text-zinc-50">
            {{ item.title }}
          </h3>
          <p class="text-base text-zinc-600 dark:text-zinc-400">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </MAnimatedBackground>
</template>

<script setup lang="ts">
const ITEMS = [
  {
    id: 1,
    title: 'Dialog',
    description: 'Enhances modal presentations.'
  },
  {
    id: 2,
    title: 'Popover',
    description: 'For small interactive overlays.'
  },
  {
    id: 3,
    title: 'Accordion',
    description: 'Collapsible sections for more content.'
  },
  {
    id: 4,
    title: 'Collapsible',
    description: 'Collapsible sections for more content.'
  },
  {
    id: 5,
    title: 'Drag to Reorder',
    description: 'Reorder items with drag and drop.'
  },
  {
    id: 6,
    title: 'Swipe to Delete',
    description: 'Delete items with swipe gestures.'
  }
]
</script>
