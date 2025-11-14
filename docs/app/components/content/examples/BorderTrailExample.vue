<template>
  <UCard class="relative overflow-hidden">
    <MBorderTrail 
      class="bg-gradient-to-r from-green-500 to-teal-500" 
      :size="40"
      :transition="{ duration: 3, ease: 'easeInOut' }"
    />
    <template #header>
      <h3 class="text-xl font-bold">Notification Card</h3>
    </template>
    <p class="text-gray-600 dark:text-gray-400">You have 3 new messages</p>
  </UCard>
</template>