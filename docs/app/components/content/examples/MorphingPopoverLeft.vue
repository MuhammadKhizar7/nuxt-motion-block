<template>
  <div class="flex justify-center min-h-48">
    <MMorphingPopover>
      <MMorphingPopoverTrigger>
        <UButton color="tertiary">Left Popover</UButton>
      </MMorphingPopoverTrigger>
      
      <MMorphingPopoverContent side="left" class="p-4 w-64">
        <h3 class="font-bold text-lg mb-2">Left Popover</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          This popover appears to the left of the trigger.
        </p>
      </MMorphingPopoverContent>
    </MMorphingPopover>
  </div>
</template>