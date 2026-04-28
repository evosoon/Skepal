import { useState } from 'react'

export const meta = {
  name: 'Color Swatch',
  description: 'Clickable color swatch with copy-to-clipboard feedback',
  category: 'Layout',
  tags: ['color', 'swatch', 'palette', 'clipboard', 'copy'],

  style: {
    mood: 'interactive, informative',
    inspiration: 'Coolors',
    audience: 'Design tools, palette showcases',
    useCase: 'Displaying color values with click-to-copy',
  },

  palette: {
    name: 'Skepal Dark',
    colors: ['#09090b', '#1f1f23', '#71717a'],
    source: 'custom',
  },

  variants: ['default'],

  createdAt: '2026-04-28',
}

export default function ColorSwatch({ color, className = '' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // fallback
    }
  }

  return (
    <button
      onClick={handleCopy}
      title={copied ? 'Copied!' : color}
      className={`group relative h-10 w-16 rounded-md border border-skepal-border cursor-pointer transition-transform hover:scale-105 active:scale-95 ${className}`}
      style={{ backgroundColor: color }}
    >
      <span className={`absolute inset-0 flex items-center justify-center rounded-md text-[10px] font-mono transition-opacity ${copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} ${isLight(color) ? 'text-black/70' : 'text-white/70'} ${copied ? (isLight(color) ? 'bg-black/10' : 'bg-white/10') : ''}`}>
        {copied ? 'Copied!' : color}
      </span>
    </button>
  )
}

function isLight(hex) {
  const c = hex.replace('#', '')
  const r = parseInt(c.substring(0, 2), 16)
  const g = parseInt(c.substring(2, 4), 16)
  const b = parseInt(c.substring(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 140
}

export function ColorSwatchDemo() {
  const colors = ['#a78bfa', '#f472b6', '#34d399', '#fbbf24', '#ffffff']

  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <ColorSwatch key={color} color={color} />
      ))}
    </div>
  )
}

export const code = `import { useState } from 'react'

export default function ColorSwatch({ color, className = '' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  return (
    <button
      onClick={handleCopy}
      title={copied ? 'Copied!' : color}
      className={\`group relative h-10 w-16 rounded-md border border-skepal-border cursor-pointer transition-transform hover:scale-105 active:scale-95 \${className}\`}
      style={{ backgroundColor: color }}
    >
      <span className={\`absolute inset-0 flex items-center justify-center rounded-md text-[10px] font-mono transition-opacity \${copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}\`}>
        {copied ? 'Copied!' : color}
      </span>
    </button>
  )
}

// Usage:
<ColorSwatch color="#a78bfa" />`
