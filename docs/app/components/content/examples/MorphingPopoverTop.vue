<template>
  <div class="flex justify-center min-h-48">
    <MMorphingPopover>
      <MMorphingPopoverTrigger>
        <UButton color="secondary">Top Popover</UButton>
      </MMorphingPopoverTrigger>
      
      <MMorphingPopoverContent side="top" class="p-4 w-64">
        <h3 class="font-bold text-lg mb-2">Top Popover</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          This popover appears above the trigger.
        </p>
      </MMorphingPopoverContent>
    </MMorphingPopover>
  </div>
</template>