<template>
  <UCard class="relative overflow-hidden">
    <template #header>
      <h2 class="text-xl font-semibold">
        Boxes Core
      </h2>
    </template>
    <p class="text-gray-600 dark:text-gray-400 mb-4">
      Animated boxes core effect
    </p>
    <MBoxesCore
      class="h-64 w-full"
      :rows="50"
      :cols="30"
    />
  </UCard>
</template>