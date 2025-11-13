<template>
  <div class="flex justify-center">
    <M3DCard>
      <template #header>
        <M3DItem :translate-z="30">
          <h2 class="text-xl font-semibold">Basic 3D Card</h2>
        </M3DItem>
      </template>
      
      <M3DItem :translate-z="15">
        <p class="text-gray-600 dark:text-gray-400">
          Move your cursor over the card to see the 3D effect.
        </p>
      </M3DItem>
    </M3DCard>
  </div>
</template>