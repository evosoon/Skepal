export const meta = {
  name: 'Primary Button',
  description: 'Solid purple button with hover state',
  category: 'Buttons',
  tags: ['button', 'primary', 'cta', 'purple'],

  style: {
    mood: 'bold, actionable',
    inspiration: 'Linear',
    audience: 'All products',
    useCase: 'Primary actions, CTAs',
  },

  palette: {
    name: 'Skepal Dark',
    colors: ['#8b5cf6', '#a78bfa', '#ffffff'],
    source: 'custom',
  },

  variants: ['default', 'small', 'large'],

  createdAt: '2026-04-27',
}

// Main component for actual use
export default function PrimaryButton({ children = 'Button', onClick, size = 'default', className = '' }) {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-[12px]',
    default: 'px-4 py-2 text-[13px]',
    large: 'px-5 py-2.5 text-[14px]',
  }

  return (
    <button
      onClick={onClick}
      className={`bg-skepal-accent hover:bg-skepal-accent-hover text-white font-medium rounded-md transition-colors ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  )
}

// Demo component for preview
export function PrimaryButtonDemo() {
  return (
    <div className="flex gap-3 items-center">
      <PrimaryButton size="small">Small</PrimaryButton>
      <PrimaryButton>Default</PrimaryButton>
      <PrimaryButton size="large">Large</PrimaryButton>
    </div>
  )
}

// Source code for display
export const code = `export default function PrimaryButton({ children = 'Button', onClick, size = 'default', className = '' }) {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-[12px]',
    default: 'px-4 py-2 text-[13px]',
    large: 'px-5 py-2.5 text-[14px]',
  }

  return (
    <button
      onClick={onClick}
      className={\`bg-skepal-accent hover:bg-skepal-accent-hover text-white font-medium rounded-md transition-colors \${sizeClasses[size]} \${className}\`}
    >
      {children}
    </button>
  )
}

// Usage:
<PrimaryButton size="default" onClick={() => alert('Clicked')}>
  Get Started
</PrimaryButton>`
