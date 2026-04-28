import { useState, useRef, useEffect } from 'react'

export const meta = {
  name: 'Dropdown',
  description: 'Custom dropdown select with click-outside dismiss',
  category: 'Buttons',
  tags: ['dropdown', 'select', 'filter', 'menu'],

  style: {
    mood: 'clean, functional',
    inspiration: 'Linear',
    audience: 'All products',
    useCase: 'Filters, selectors, settings',
  },

  palette: {
    name: 'Skepal Dark',
    colors: ['#09090b', '#1f1f23', '#71717a', '#a78bfa'],
    source: 'custom',
  },

  variants: ['default'],

  createdAt: '2026-04-28',
}

export default function Dropdown({ value, onChange, options, placeholder = 'Select...', className = '' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const label = value === 'All' ? placeholder : value

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-skepal-surface border border-skepal-border rounded-md text-[13px] text-skepal-text hover:border-skepal-accent/50 focus:outline-none focus:border-skepal-accent transition-colors"
      >
        <span className={value === 'All' ? 'text-skepal-text-tertiary' : ''}>{label}</span>
        <svg className={`w-3.5 h-3.5 text-skepal-text-tertiary transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full mt-1 right-0 min-w-[140px] bg-skepal-elevated border border-skepal-border rounded-md shadow-lg z-50 py-1 max-h-[240px] overflow-y-auto">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false) }}
              className={`w-full text-left px-3 py-1.5 text-[13px] transition-colors ${
                opt === value
                  ? 'text-skepal-accent bg-skepal-accent/10'
                  : 'text-skepal-text-secondary hover:text-skepal-text hover:bg-skepal-surface'
              }`}
            >
              {opt === 'All' ? placeholder : opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function DropdownDemo() {
  const [value, setValue] = useState('All')
  const options = ['All', 'Buttons', 'Cards', 'Layout', 'Typography']

  return (
    <div className="flex gap-4 items-center">
      <Dropdown
        value={value}
        onChange={setValue}
        options={options}
        placeholder="All Categories"
      />
      <span className="text-[13px] text-skepal-text-tertiary">
        Selected: {value}
      </span>
    </div>
  )
}

export const code = `import { useState, useRef, useEffect } from 'react'

export default function Dropdown({ value, onChange, options, placeholder = 'Select...' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const label = value === 'All' ? placeholder : value

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-skepal-surface border border-skepal-border rounded-md text-[13px] text-skepal-text hover:border-skepal-accent/50 focus:outline-none focus:border-skepal-accent transition-colors"
      >
        <span className={value === 'All' ? 'text-skepal-text-tertiary' : ''}>{label}</span>
        <svg className={\`w-3.5 h-3.5 text-skepal-text-tertiary transition-transform \${open ? 'rotate-180' : ''}\`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full mt-1 right-0 min-w-[140px] bg-skepal-elevated border border-skepal-border rounded-md shadow-lg z-50 py-1 max-h-[240px] overflow-y-auto">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false) }}
              className={\`w-full text-left px-3 py-1.5 text-[13px] transition-colors \${
                opt === value
                  ? 'text-skepal-accent bg-skepal-accent/10'
                  : 'text-skepal-text-secondary hover:text-skepal-text hover:bg-skepal-surface'
              }\`}
            >
              {opt === 'All' ? placeholder : opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// Usage:
const [value, setValue] = useState('All')
<Dropdown
  value={value}
  onChange={setValue}
  options={['All', 'Option A', 'Option B']}
  placeholder="All Options"
/>`
