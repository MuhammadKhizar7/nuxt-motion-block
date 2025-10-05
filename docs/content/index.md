---
seo:
  title: Nuxt Motion Block
  description: Enhance your Nuxt UI with beautiful motion components. A collection of 40+ motion-enhanced components for Nuxt applications.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
:component-example{name="hero-title-example"}

#description
A powerful collection of motion components for Nuxt applications. Enhance your UI with beautiful animations and interactions that just work.

#links
:component-example{name="hero-buttons-example"}

#default
  :::prose-pre
  ---
  code: |
    export default defineNuxtConfig({
      modules: [
        '@nuxt/ui',
        'motion-v/nuxt',
        'nuxt-motion-block'
      ]
    })
  filename: nuxt.config.ts
  ---

  ```ts [nuxt.config.ts]
  export default defineNuxtConfig({
    modules: [
      '@nuxt/ui',
      'motion-v/nuxt',
      'nuxt-motion-block'
    ]
  })
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
:component-example{name="component-count-example"}

#links
  :::u-button
  ---
  color: neutral
  size: lg
  target: _blank
  to: https://ui.nuxt.com/docs/getting-started/installation/nuxt
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  Explore Nuxt UI
  :::

#features
:component-example{name="feature-grid-example"}
  :::template{#feature-0}
  :::u-page-feature
  ---
  icon: i-lucide-palette
  ---
  #title
  100+ UI Components

  #description
  Access the complete Nuxt UI component library. From badges to modals, everything styled and accessible out of the box.
  :::
  :::

  :::template{#feature-1}
  :::u-page-feature
  ---
  icon: i-lucide-type
  ---
  #title
  Beautiful Typography

  #description
  Pre-styled prose components with perfect visual harmony. No need for @tailwindcss/typography - get precise control over every element.
  :::
  :::

  :::template{#feature-2}
  :::u-page-feature
  ---
  icon: i-lucide-layers
  ---
  #title
  Rich Prose Components

  #description
  Accordions, cards, callouts, tabs, steps, code blocks, and more - all provided by Nuxt UI for interactive documentation.
  :::
  :::

  :::template{#feature-3}
  :::u-page-feature
  ---
  icon: i-lucide-search
  ---
  #title
  Built-in Search

  #description
  Full-text search with ContentSearch component. No need for Algolia - instant, relevant results with keyboard shortcuts (⌘K).
  :::
  :::

  :::template{#feature-4}
  :::u-page-feature
  ---
  icon: i-lucide-navigation
  ---
  #title
  Smart Navigation

  #description
  Auto-generated navigation with ContentNavigation and ContentToc components. Sticky table of contents and prev/next links.
  :::
  :::

  :::template{#feature-5}
  :::u-page-feature
  ---
  icon: i-lucide-moon
  ---
  #title
  Dark Mode Ready

  #description
  Automatic theme switching with smooth transitions. Respects system preferences and remembers user choice.
  :::
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Enhanced with Motion Components

#links
  :::u-button
  ---
  color: neutral
  size: lg
  target: _blank
  to: https://content.nuxt.com/docs/getting-started/installation
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  Explore Nuxt Content
  :::

#features
:component-example{component="FeatureGridExample"}
  :::template{#feature-0}
  :::u-page-feature
  ---
  icon: i-lucide-code
  ---
  #title
  MDC Enhanced Markdown

  #description
  Write in Markdown while embedding Vue components. Seamlessly integrate interactive elements in your content.
  :::
  :::

  :::template{#feature-1}
  :::u-page-feature
  ---
  icon: i-lucide-file-text
  ---
  #title
  File-based Routing

  #description
  Organize content in folders and files. Your documentation structure automatically becomes your navigation.
  :::
  :::

  :::template{#feature-2}
  :::u-page-feature
  ---
  icon: i-lucide-layers
  ---
  #title
  Component Library

  #description
  Access to 40+ motion-enhanced components including text animations, visual effects, and interactive elements.
  :::
  :::

  :::template{#feature-3}
  :::u-page-feature
  ---
  icon: i-lucide-zap
  ---
  #title
  Performance Optimized

  #description
  All components are built with performance in mind, using efficient animations and minimal JavaScript.
  :::
  :::

  :::template{#feature-4}
  :::u-page-feature
  ---
  icon: i-lucide-accessibility
  ---
  #title
  Accessibility First

  #description
  Components follow accessibility best practices and work seamlessly with screen readers and keyboard navigation.
  :::
  :::

  :::template{#feature-5}
  :::u-page-feature
  ---
  icon: i-lucide-settings
  ---
  #title
  Highly Customizable

  #description
  Every component can be customized through props, slots, and CSS classes to match your design system.
  :::
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Start building
      to: '/getting-started'
      trailingIcon: i-lucide-arrow-right
    - label: View on GitHub
      to: 'https://github.com/nuxt-ui-templates/docs'
      target: _blank
      variant: subtle
      icon: i-simple-icons-github
  title: Ready to enhance your Nuxt application?
  description: Join thousands of developers building with Nuxt Motion Block. Install the module and start adding motion today.
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::