<template>
  <MScrollProgress class="bg-primary fixed top-0 z-50" />
  <div class="space-y-4 p-4">
    <div v-for="i in 10" :key="i" class="h-32 bg-secondary rounded"></div>
  </div>
</template>