<template>
  <div class="flex justify-center min-h-48">
    <MMorphingPopover>
      <MMorphingPopoverTrigger>
        <UButton color="primary" variant="outline">Styled Popover</UButton>
      </MMorphingPopoverTrigger>
      
      <MMorphingPopoverContent class="p-6 w-80 bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0">
        <h3 class="font-bold text-lg mb-2">Styled Popover</h3>
        <p class="mb-4 opacity-90">
          This popover has custom gradient styling.
        </p>
        <div class="flex space-x-2">
          <UButton color="white" variant="solid" size="sm">Action</UButton>
          <UButton color="white" variant="outline" size="sm">Cancel</UButton>
        </div>
      </MMorphingPopoverContent>
    </MMorphingPopover>
  </div>
</template>