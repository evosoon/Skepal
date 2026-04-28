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
    // 活跃状态优先，promoted 排到底部
    const statusOrder = { draft: 1, iterating: 2, final: 3, promoted: 4 }
    const statusA = statusOrder[a.meta.status] || 1
    const statusB = statusOrder[b.meta.status] || 1

    if (statusA !== statusB) {
      return statusA - statusB
    }

    // 同状态内按日期降序
    const dateA = a.meta.date || ''
    const dateB = b.meta.date || ''
    return dateB.localeCompare(dateA)
  })

export default playgroundRegistry

// 按状态过滤
export function getPlaygroundsByStatus(status) {
  return playgroundRegistry.filter(p => p.meta.status === status)
}

// 获取所有状态列表
export function getAllStatuses() {
  const statuses = new Set(playgroundRegistry.map(p => p.meta.status).filter(Boolean))
  return ['All', ...Array.from(statuses)]
}
