export const meta = {
  name: 'Info Card',
  description: 'Card with border for displaying structured information',
  category: 'Cards',
  tags: ['card', 'info', 'metadata', 'minimal'],

  style: {
    mood: 'clean, organized',
    inspiration: 'Linear',
    audience: 'Dashboards, detail views',
    useCase: 'Displaying metadata, properties, or key-value pairs',
  },

  palette: {
    name: 'Skepal Dark',
    colors: ['#0f0f11', '#1f1f23', '#fafafa', '#71717a'],
    source: 'custom',
  },

  variants: ['default'],

  createdAt: '2026-04-27',
}

// Main component for actual use
export default function InfoCard({ label, value, className = '' }) {
  return (
    <div className={`bg-skepal-surface border border-skepal-border rounded-lg p-3 ${className}`}>
      <div className="text-[11px] text-skepal-text-tertiary mb-1">{label}</div>
      <div className="text-[13px] text-skepal-text">{value}</div>
    </div>
  )
}

// Demo component for preview
export function InfoCardDemo() {
  return (
    <div className="max-w-xs">
      <InfoCard label="Mood" value="professional, clean" />
    </div>
  )
}

// Source code for display
export const code = `export default function InfoCard({ label, value, className = '' }) {
  return (
    <div className={\`bg-skepal-surface border border-skepal-border rounded-lg p-3 \${className}\`}>
      <div className="text-[11px] text-skepal-text-tertiary mb-1">{label}</div>
      <div className="text-[13px] text-skepal-text">{value}</div>
    </div>
  )
}

// Usage:
<InfoCard label="Mood" value="professional, clean" />`
