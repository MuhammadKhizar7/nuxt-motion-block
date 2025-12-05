// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@nuxt/content', 'nuxt-og-image', '@nuxtjs/sitemap', 'nuxt-llms', '../src/module', '@nuxtjs/robots'],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  content: {
    experimental: { nativeSqlite: true },
    build: {
      markdown: {
        toc: {
          searchDepth: 1,
        },
      },
    },
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        // '/',
      ],
      crawlLinks: false,
      autoSubfolderIndex: false,
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
      },
    },
  },

  icon: {
    provider: 'iconify',
  },

  llms: {
    domain: 'https://nuxt-motion-block.pages.dev/',
    title: 'Nuxt Motion Block',
    description: 'A streamlined UI library that extends Nuxt UI with motion capabilities powered by motion-v.',
    full: {
      title: 'Nuxt Motion Block - Full Documentation',
      description: 'This is the full documentation for Nuxt Motion Block, a streamlined UI library that extends Nuxt UI with motion capabilities powered by motion-v.',
    },
    sections: [
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' },
        ],
      },
      {
        title: 'Components',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/components%' },
        ],
      },
      {
        title: 'Composables',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/composables%' },
        ],
      },
      {
        title: 'Blocks',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/blocks%' },
        ],
      },
      {
        title: 'Template',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/template%' },
        ],
      },
    ],
  },

  motionBlock: {
    prefix: 'M',
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://nuxt-motion-block.pages.dev',
  },
})