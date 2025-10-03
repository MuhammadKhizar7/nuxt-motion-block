<template>
  <div>
    <component :is="exampleComponent" v-if="exampleComponent" />
  </div>
</template>

<script setup>
import { defineAsyncComponent, computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const toPascalCase = (str) => {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')
}

const exampleComponent = computed(() => {
  if (!props.name) {
    return null
  }
  const componentName = toPascalCase(props.name)
  return defineAsyncComponent(() => import(`./examples/${componentName}.vue`))
})
</script>
