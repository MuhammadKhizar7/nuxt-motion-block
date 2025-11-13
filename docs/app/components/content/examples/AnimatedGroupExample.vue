<template>
  <MAnimatedGroup>
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="i in 6"
        :key="i"
        class="h-20 w-20 rounded-lg bg-primary"
      />
    </div>
  </MAnimatedGroup>
</template>