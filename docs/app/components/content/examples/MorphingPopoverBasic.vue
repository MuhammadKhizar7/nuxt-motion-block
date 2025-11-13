<template>
  <div class="flex justify-center min-h-48">
    <MMorphingPopover>
      <MMorphingPopoverTrigger>
        <UButton color="primary">Open Popover</UButton>
      </MMorphingPopoverTrigger>
      
      <MMorphingPopoverContent class="p-4 w-64">
        <h3 class="font-bold text-lg mb-2">Basic Popover</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          This is a basic morphing popover.
        </p>
        <UButton color="primary" variant="solid" size="sm">Action</UButton>
      </MMorphingPopoverContent>
    </MMorphingPopover>
  </div>
</template>