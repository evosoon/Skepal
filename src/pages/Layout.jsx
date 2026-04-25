import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/components', label: 'Components' },
  { to: '/layouts', label: 'Layouts' },
  { to: '/palettes', label: 'Palettes' },
  { to: '/playground', label: 'Playground' },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-skepal-bg">
      <nav className="border-b border-skepal-border bg-skepal-bg/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center gap-8">
          <span className="text-[15px] font-semibold text-skepal-text">Skepal</span>
          <div className="flex gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                    isActive
                      ? 'text-skepal-text bg-skepal-elevated'
                      : 'text-skepal-text-secondary hover:text-skepal-text'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      <main className="max-w-[1400px] mx-auto px-6 py-12">
        <Outlet />
      </main>
    </div>
  )
}
