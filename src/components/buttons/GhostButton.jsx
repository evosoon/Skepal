export const meta = {
  name: 'Ghost Button',
  description: 'Semi-transparent gradient ghost button with purple accent',
  category: 'Buttons',
  tags: ['button', 'ghost', 'outline', 'gradient', 'purple'],

  style: {
    mood: 'subtle, elegant',
    inspiration: 'Linear',
    audience: 'All products',
    useCase: 'Secondary actions, external links',
  },

  palette: {
    name: 'Skepal Dark',
    colors: ['#8b5cf6', '#a78bfa', '#fafafa'],
    source: 'custom',
  },

  variants: ['default', 'small', 'large'],

  createdAt: '2026-04-27',
}

// Main component for actual use
export default function GhostButton({ children = 'Button', onClick, size = 'default', className = '' }) {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-[12px]',
    default: 'px-4 py-2 text-[13px]',
    large: 'px-5 py-2.5 text-[14px]',
  }

  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden border border-skepal-accent/30 text-skepal-text font-medium rounded-md transition-all hover:border-skepal-accent/50 hover:bg-skepal-accent/5 ${sizeClasses[size]} ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(167, 139, 250, 0.04) 100%)',
      }}
    >
      {children}
    </button>
  )
}

// Demo component for preview
export function GhostButtonDemo() {
  return (
    <div className="flex gap-3 items-center">
      <GhostButton size="small">Small</GhostButton>
      <GhostButton>Default</GhostButton>
      <GhostButton size="large">Large</GhostButton>
    </div>
  )
}

// Source code for display
export const code = `export default function GhostButton({ children = 'Button', onClick, size = 'default', className = '' }) {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-[12px]',
    default: 'px-4 py-2 text-[13px]',
    large: 'px-5 py-2.5 text-[14px]',
  }

  return (
    <button
      onClick={onClick}
      className={\`relative overflow-hidden border border-skepal-accent/30 text-skepal-text font-medium rounded-md transition-all hover:border-skepal-accent/50 hover:bg-skepal-accent/5 \${sizeClasses[size]} \${className}\`}
      style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(167, 139, 250, 0.04) 100%)',
      }}
    >
      {children}
    </button>
  )
}

// Usage:
<GhostButton size="default" onClick={() => alert('Clicked')}>
  Learn More
</GhostButton>`
