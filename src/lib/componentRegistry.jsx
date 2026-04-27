// Auto-import all components from src/components/
// Each component should export: default component, Demo component, meta, and code

const componentModules = import.meta.glob('/src/components/**/*.jsx', { eager: true })

// Transform imported modules into registry format
const componentRegistry = {}

Object.entries(componentModules).forEach(([path, module]) => {
  if (!module.meta || !module.default) {
    console.warn(`Component at ${path} missing meta or default export`)
    return
  }

  const { meta, code } = module
  const componentName = path.split('/').pop().replace('.jsx', '')

  // Look for Demo component (e.g., NavigationBarDemo)
  const DemoComponent = module[`${componentName}Demo`]

  if (!DemoComponent) {
    console.warn(`Component at ${path} missing Demo export (expected ${componentName}Demo)`)
    return
  }

  const category = meta.category || 'Uncategorized'

  // Initialize category if needed
  if (!componentRegistry[category]) {
    componentRegistry[category] = []
  }

  componentRegistry[category].push({
    id: componentName,
    name: meta.name,
    description: meta.description,
    component: <DemoComponent />,  // Use Demo component for preview
    meta: meta,
    code: code || `// See ${path} for implementation`,
  })
})

// Sort categories alphabetically
const sortedRegistry = Object.keys(componentRegistry)
  .sort()
  .reduce((acc, key) => {
    acc[key] = componentRegistry[key].sort((a, b) => a.name.localeCompare(b.name))
    return acc
  }, {})

export default sortedRegistry

// Export helper functions
export function getComponentsByCategory(category) {
  return sortedRegistry[category] || []
}

export function getComponentsByTag(tag) {
  const results = []
  Object.values(sortedRegistry).forEach((components) => {
    components.forEach((comp) => {
      if (comp.meta.tags?.includes(tag)) {
        results.push(comp)
      }
    })
  })
  return results
}

export function getComponentsByStyle(style) {
  const results = []
  Object.values(sortedRegistry).forEach((components) => {
    components.forEach((comp) => {
      if (comp.meta.style?.inspiration?.toLowerCase().includes(style.toLowerCase())) {
        results.push(comp)
      }
    })
  })
  return results
}

export function searchComponents(query) {
  const lowerQuery = query.toLowerCase()
  const results = []

  Object.values(sortedRegistry).forEach((components) => {
    components.forEach((comp) => {
      const searchText = [
        comp.name,
        comp.description,
        comp.meta.category,
        ...(comp.meta.tags || []),
        comp.meta.style?.mood,
        comp.meta.style?.inspiration,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      if (searchText.includes(lowerQuery)) {
        results.push(comp)
      }
    })
  })

  return results
}

export function getAllTags() {
  const tags = new Set()
  Object.values(sortedRegistry).forEach((components) => {
    components.forEach((comp) => {
      comp.meta.tags?.forEach((tag) => tags.add(tag))
    })
  })
  return Array.from(tags).sort()
}

export function getAllStyles() {
  const styles = new Set()
  Object.values(sortedRegistry).forEach((components) => {
    components.forEach((comp) => {
      if (comp.meta.style?.inspiration) {
        styles.add(comp.meta.style.inspiration)
      }
    })
  })
  return Array.from(styles).sort()
}
