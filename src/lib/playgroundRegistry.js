// Auto-import all playground files
// Vite's import.meta.glob loads all .jsx files from playgrounds/ at build time

const modules = import.meta.glob('../playgrounds/*.jsx', { eager: true })

const playgroundRegistry = Object.entries(modules)
  .filter(([path]) => !path.includes('_convention'))
  .map(([path, mod]) => {
    const fileName = path.split('/').pop().replace('.jsx', '')
    return {
      id: fileName,
      component: mod.default,
      meta: mod.meta || { title: fileName, description: '', tags: [] },
    }
  })
  .sort((a, b) => {
    // 按日期降序
    const dateA = a.meta.date || ''
    const dateB = b.meta.date || ''
    return dateB.localeCompare(dateA)
  })

export default playgroundRegistry
