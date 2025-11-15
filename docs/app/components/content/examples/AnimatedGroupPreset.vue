<template>
  <MAnimatedGroup preset="bounce" :stagger-children="0.2">
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="i in 6"
        :key="i"
        class="h-20 w-20 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"
      />
    </div>
  </MAnimatedGroup>
</template>