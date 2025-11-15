<template>
  <MAnimatedGroup 
    :stagger-children="0.1"
    :variants="{
      item: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 1,
            ease: 'easeInOut'
          }
        }
      }
    }"
  >
    <div class="grid grid-cols-4 gap-3">
      <div
        v-for="i in 12"
        :key="i"
        class="h-14 w-14 rounded-lg bg-primary"
      />
    </div>
  </MAnimatedGroup>
</template>