<template>
  <div
    class="relative flex h-screen w-full items-center justify-center overflow-hidden bg-zinc-50 dark:bg-zinc-900"
    :class="className"
  >
    <!-- Aurora Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="h-full w-full animate-aurora opacity-50"
        :class="showRadialGradient ? 'mask-image-radial' : ''"
        :style="auroraStyles"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  showRadialGradient?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  showRadialGradient: true,
})

const auroraStyles = {
  backgroundImage: [
    'repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%)',
    'repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30%)',
  ].join(', '),
  backgroundSize: '300%, 200%',
}
</script>

<style scoped>
.mask-image-radial {
  mask-image: radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .dark [style*="background-image"] {
    background-image:
      repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%),
      repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30%) !important;
  }
}

@keyframes aurora {
  from {
    background-position: 50% 50%, 50% 50%;
  }
  to {
    background-position: 350% 50%, 350% 50%;
  }
}

.animate-aurora {
  animation: aurora 60s linear infinite;
}
</style>
