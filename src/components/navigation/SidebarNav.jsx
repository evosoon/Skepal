export const meta = {
  name: 'Sidebar Navigation',
  description: 'Vertical navigation list with categories and active states',
  category: 'Navigation',
  tags: ['sidebar', 'nav', 'vertical', 'categories'],

  style: {
    mood: 'minimal, organized',
    inspiration: 'Linear',
    audience: 'Content-heavy apps',
    useCase: 'Secondary navigation, component browsers',
  },

  palette: {
    name: 'Skepal Dark',
    colors: ['#18181b', '#fafafa', '#a1a1aa', '#71717a'],
    source: 'custom',
  },

  variants: ['default', 'with-categories'],

  createdAt: '2026-04-27',
}

// Main component for actual use
export default function SidebarNav({ items = [], categories = null, onSelect, selectedId }) {
  if (categories) {
    // Categorized version
    return (
      <aside className="space-y-6">
        {Object.entries(categories).map(([category, categoryItems]) => (
          <div key={category}>
            <div className="text-[11px] uppercase tracking-wider text-skepal-text-tertiary font-semibold mb-2 px-2">
              {category}
            </div>
            <div className="space-y-0.5">
              {categoryItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelect?.(item)}
                  className={`w-full text-left px-2 py-1.5 rounded-md text-[13px] transition-colors ${
                    selectedId === item.id
                      ? 'text-skepal-text bg-skepal-elevated'
                      : 'text-skepal-text-secondary hover:text-skepal-text'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </aside>
    )
  }

  // Simple list version
  return (
    <aside className="space-y-0.5">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect?.(item)}
          className={`w-full text-left px-2 py-1.5 rounded-md text-[13px] transition-colors ${
            selectedId === item.id
              ? 'text-skepal-text bg-skepal-elevated'
              : 'text-skepal-text-secondary hover:text-skepal-text'
          }`}
        >
          {item.name}
        </button>
      ))}
    </aside>
  )
}

// Demo component for preview
export function SidebarNavDemo() {
  const mockCategories = {
    'BUTTONS': [
      { id: 'primary', name: 'Primary Button' },
      { id: 'secondary', name: 'Secondary Button' },
    ],
    'CARDS': [
      { id: 'basic', name: 'Basic Card' },
      { id: 'feature', name: 'Feature Card' },
    ],
  }

  return (
    <div className="w-[220px]">
      <SidebarNav
        categories={mockCategories}
        selectedId="primary"
        onSelect={(item) => console.log('Selected:', item)}
      />
    </div>
  )
}

// Source code for display
export const code = `export default function SidebarNav({ items = [], categories = null, onSelect, selectedId }) {
  if (categories) {
    return (
      <aside className="space-y-6">
        {Object.entries(categories).map(([category, categoryItems]) => (
          <div key={category}>
            <div className="text-[11px] uppercase tracking-wider text-skepal-text-tertiary font-semibold mb-2 px-2">
              {category}
            </div>
            <div className="space-y-0.5">
              {categoryItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelect?.(item)}
                  className={\`w-full text-left px-2 py-1.5 rounded-md text-[13px] transition-colors \${
                    selectedId === item.id
                      ? 'text-skepal-text bg-skepal-elevated'
                      : 'text-skepal-text-secondary hover:text-skepal-text'
                  }\`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </aside>
    )
  }

  return (
    <aside className="space-y-0.5">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect?.(item)}
          className={\`w-full text-left px-2 py-1.5 rounded-md text-[13px] transition-colors \${
            selectedId === item.id
              ? 'text-skepal-text bg-skepal-elevated'
              : 'text-skepal-text-secondary hover:text-skepal-text'
          }\`}
        >
          {item.name}
        </button>
      ))}
    </aside>
  )
}

// Usage:
<SidebarNav
  categories={{
    'BUTTONS': [
      { id: 'primary', name: 'Primary Button' },
      { id: 'secondary', name: 'Secondary Button' },
    ],
  }}
  selectedId="primary"
  onSelect={(item) => console.log(item)}
/>`
