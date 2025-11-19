<template>
  <div class="flex justify-center min-h-48">
    <MMorphingPopover>
      <MMorphingPopoverTrigger>
        <UButton color="secondary">Top Popover</UButton>
      </MMorphingPopoverTrigger>
      
      <template #content="{ close }">
        <div class="p-4 w-64">
          <div class="flex justify-between items-start mb-2">
            <h3 class="font-bold text-lg">Top Popover</h3>
            <UButton 
              color="neutral" 
              variant="ghost" 
              size="xs" 
              icon="i-lucide-x" 
              @click="close"
            />
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            This popover appears above the trigger.
          </p>
        </div>
      </template>
    </MMorphingPopover>
  </div>
</template>