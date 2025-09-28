<template>
  <div>
    <!-- Content Search Implementation -->
    <ContentDoc />
  </div>
</template>

<script setup>
// Enhanced search functionality for content
const { $content } = useNuxtApp()

// Search implementation using Nuxt Content
const searchContent = async (query) => {
  if (!query.trim()) return []
  
  try {
    // Search through all content files
    const results = await $content()
      .where({
        $or: [
          { title: { $regex: new RegExp(query, 'i') } },
          { description: { $regex: new RegExp(query, 'i') } },
          { body: { $regex: new RegExp(query, 'i') } }
        ]
      })
      .limit(20)
      .find()
    
    return results.map(result => ({
      title: result.title || result._path.split('/').pop(),
      description: result.description || extractDescription(result.body),
      path: result._path,
      category: getCategoryFromPath(result._path),
      icon: getIconForCategory(getCategoryFromPath(result._path))
    }))
  } catch (error) {
    console.error('Search error:', error)
    return []
  }
}

// Extract description from content body
const extractDescription = (body) => {
  if (!body) return ''
  
  // Try to extract first paragraph
  const firstParagraph = body.children?.find(child => 
    child.type === 'element' && child.tag === 'p'
  )
  
  if (firstParagraph?.children?.[0]?.value) {
    return firstParagraph.children[0].value.substring(0, 150) + '...'
  }
  
  return ''
}

// Get category from file path
const getCategoryFromPath = (path) => {
  if (path.includes('/components/text/')) return 'Text Components'
  if (path.includes('/components/interactive/')) return 'Interactive Components'
  if (path.includes('/components/layout/')) return 'Layout Components'
  if (path.includes('/components/effects/')) return 'Effects Components'
  if (path.includes('/components/navigation/')) return 'Navigation Components'
  if (path.includes('/components/number/')) return 'Number Components'
  if (path.includes('/api/')) return 'API Reference'
  if (path.includes('/guides/')) return 'Guides'
  if (path.includes('/examples/')) return 'Examples'
  if (path.includes('/getting-started')) return 'Getting Started'
  return 'Documentation'
}

// Get icon for category
const getIconForCategory = (category) => {
  const iconMap = {
    'Text Components': 'i-lucide-type',
    'Interactive Components': 'i-lucide-mouse-pointer',
    'Layout Components': 'i-lucide-layout',
    'Effects Components': 'i-lucide-sparkles',
    'Navigation Components': 'i-lucide-navigation',
    'Number Components': 'i-lucide-hash',
    'API Reference': 'i-lucide-code',
    'Guides': 'i-lucide-book-open',
    'Examples': 'i-lucide-code-2',
    'Getting Started': 'i-lucide-rocket',
    'Documentation': 'i-lucide-file-text'
  }
  return iconMap[category] || 'i-lucide-file-text'
}

// Provide search function globally
provide('searchContent', searchContent)
</script>
