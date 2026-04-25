// Layout examples
const SidebarLayout = (
  <div className="flex h-64 bg-skepal-bg">
    <aside className="w-48 bg-skepal-surface border-r border-skepal-border p-4">
      <div className="space-y-2">
        <div className="h-8 bg-skepal-accent/20 rounded" />
        <div className="h-8 bg-skepal-border rounded" />
        <div className="h-8 bg-skepal-border rounded" />
      </div>
    </aside>
    <main className="flex-1 p-4">
      <div className="h-full bg-skepal-surface border border-skepal-border rounded-lg" />
    </main>
  </div>
)

const GridLayout = (
  <div className="grid grid-cols-3 gap-4 p-4 bg-skepal-bg h-64">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="bg-skepal-surface border border-skepal-border rounded-lg" />
    ))}
  </div>
)

const DashboardLayout = (
  <div className="bg-skepal-bg p-4 h-64">
    <div className="grid grid-cols-4 gap-4 mb-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-skepal-surface border border-skepal-border rounded-lg p-4 h-20" />
      ))}
    </div>
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 bg-skepal-surface border border-skepal-border rounded-lg" />
      <div className="bg-skepal-surface border border-skepal-border rounded-lg" />
    </div>
  </div>
)

const layoutRegistry = [
  {
    id: 'sidebar-layout',
    name: 'Sidebar Layout',
    component: SidebarLayout,
    code: `<div className="flex">
  <aside className="w-48 bg-skepal-surface border-r border-skepal-border p-4">
    {/* Sidebar content */}
  </aside>
  <main className="flex-1 p-4">
    {/* Main content */}
  </main>
</div>`,
  },
  {
    id: 'grid-layout',
    name: 'Grid Layout',
    component: GridLayout,
    code: `<div className="grid grid-cols-3 gap-4">
  {/* Grid items */}
</div>`,
  },
  {
    id: 'dashboard-layout',
    name: 'Dashboard Layout',
    component: DashboardLayout,
    code: `<div className="p-4">
  <div className="grid grid-cols-4 gap-4 mb-4">
    {/* Stat cards */}
  </div>
  <div className="grid grid-cols-3 gap-4">
    <div className="col-span-2">{/* Main chart */}</div>
    <div>{/* Side panel */}</div>
  </div>
</div>`,
  },
]

export default layoutRegistry
