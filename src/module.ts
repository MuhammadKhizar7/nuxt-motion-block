import { defineNuxtModule, addPlugin, createResolver, addComponentsDir } from '@nuxt/kit'
import { defu } from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
  prefix: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-motion-block',
    configKey: 'motionBlock',
    compatibility: {
      nuxt: '>=4.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: 'M'
  },
  moduleDependencies: {
    '@nuxt/ui': {
      version: '>=4.0.0',
      optional: false
    },
    'motion-v': {
      version: '>=1.7.2',
      optional: false
    }
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Add all components from the runtime/components directory
    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
      prefix: options.prefix,
      global: true,
      watch: false
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
    
    // Add composables
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(resolver.resolve('./runtime/composables'))
    })
  },
})