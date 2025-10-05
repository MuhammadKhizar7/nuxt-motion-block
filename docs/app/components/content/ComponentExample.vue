<template>
  <div>
    <component
      :is="exampleComponent"
      v-if="exampleComponent"
    />
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const toPascalCase = (str) => {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')
}

const examples = import.meta.glob('./examples/*.vue')

const exampleComponent = computed(() => {
  if (!props.name) {
    return null
  }
  const componentName = toPascalCase(props.name)
  const path = `./examples/${componentName}.vue`
  if (path in examples) {
    return defineAsyncComponent(examples[path])
  }
  return null
})
</script>
