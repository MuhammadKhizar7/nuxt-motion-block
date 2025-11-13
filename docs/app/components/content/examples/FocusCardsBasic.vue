<template>
  <MFocusCards :cards="cards" />
</template>

<script setup>
const cards = [
  {
    id: 1,
    title: 'Mountain View',
    description: 'Beautiful mountain landscape',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    title: 'Ocean Sunset',
    description: 'Stunning ocean view at sunset',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    title: 'Forest Path',
    description: 'Peaceful walking trail through the woods',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
]
</script>