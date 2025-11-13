<template>
  <MAnimatedGroup :duration="1" easing="ease-in-out">
    <div class="grid grid-cols-4 gap-3">
      <div
        v-for="i in 12"
        :key="i"
        class="h-14 w-14 rounded-lg bg-primary"
      />
    </div>
  </MAnimatedGroup>
</template>