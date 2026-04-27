import { NavLink } from 'react-router-dom'

export const meta = {
  name: 'Navigation Bar',
  description: 'Minimal sticky navigation with logo and route links',
  category: 'Navigation',
  tags: ['header', 'nav', 'minimal', 'sticky', 'dark'],

  style: {
    mood: 'minimal, professional',
    inspiration: 'Linear',
    audience: 'SaaS products, design tools',
    useCase: 'Main app navigation',
  },

  palette: {
    name: 'Skepal Dark',
    colors: ['#09090b', '#18181b', '#1f1f23', '#fafafa', '#a1a1aa'],
    source: 'custom',
  },

  variants: ['default'],

  createdAt: '2026-04-27',
}

// Main component for actual use
export default function NavigationBar({ logo = 'Skepal', items = [] }) {
  return (
    <nav className="border-b border-skepal-border bg-skepal-bg/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center gap-8">
        <span className="text-[15px] font-semibold text-skepal-text">{logo}</span>
        <div className="flex gap-1">
          {items.map(({ to, label }) => (
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
  )
}

// Demo component for preview (with mock data)
export function NavigationBarDemo() {
  const mockItems = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/docs', label: 'Docs' },
  ]

  return <NavigationBar logo="Skepal" items={mockItems} />
}

// Source code for display
export const code = `import { NavLink } from 'react-router-dom'

export default function NavigationBar({ logo = 'Skepal', items = [] }) {
  return (
    <nav className="border-b border-skepal-border bg-skepal-bg/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center gap-8">
        <span className="text-[15px] font-semibold text-skepal-text">{logo}</span>
        <div className="flex gap-1">
          {items.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                \`px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors \${
                  isActive
                    ? 'text-skepal-text bg-skepal-elevated'
                    : 'text-skepal-text-secondary hover:text-skepal-text'
                }\`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

// Usage:
<NavigationBar
  logo="Skepal"
  items={[
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
  ]}
/>`
