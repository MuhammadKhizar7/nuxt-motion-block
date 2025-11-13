<template>
  <MAnimatedGroup>
    <div class="flex space-x-4">
      <div
        v-for="i in 4"
        :key="i"
        class="h-16 w-16 rounded-lg bg-secondary"
      />
    </div>
  </MAnimatedGroup>
</template>