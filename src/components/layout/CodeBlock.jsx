export const meta = {
  name: 'Code Block',
  description: 'Collapsible code display with syntax highlighting',
  category: 'Layout',
  tags: ['code', 'details', 'collapsible', 'syntax'],

  style: {
    mood: 'technical, minimal',
    inspiration: 'GitHub, Linear',
    audience: 'Documentation, component libraries',
    useCase: 'Displaying source code',
  },

  palette: {
    name: 'Skepal Dark',
    colors: ['#0f0f11', '#09090b', '#1f1f23', '#fafafa', '#a1a1aa'],
    source: 'custom',
  },

  variants: ['default'],

  createdAt: '2026-04-27',
}

// Main component for actual use
export default function CodeBlock({ code, title = 'View code', className = '' }) {
  return (
    <details className={`bg-skepal-surface border border-skepal-border rounded-lg ${className}`}>
      <summary className="cursor-pointer px-4 py-3 text-[13px] text-skepal-text-secondary hover:text-skepal-text font-medium">
        {title}
      </summary>
      <div className="px-4 pb-4">
        <pre className="bg-skepal-bg rounded-md p-4 overflow-x-auto text-[12px] leading-relaxed">
          <code className="text-skepal-text-secondary">{code}</code>
        </pre>
      </div>
    </details>
  )
}

// Demo component for preview
export function CodeBlockDemo() {
  const sampleCode = `export default function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-purple-600 text-white rounded-md">
      {children}
    </button>
  )
}`

  return <CodeBlock code={sampleCode} />
}

// Source code for display
export const code = `export default function CodeBlock({ code, title = 'View code', className = '' }) {
  return (
    <details className={\`bg-skepal-surface border border-skepal-border rounded-lg \${className}\`}>
      <summary className="cursor-pointer px-4 py-3 text-[13px] text-skepal-text-secondary hover:text-skepal-text font-medium">
        {title}
      </summary>
      <div className="px-4 pb-4">
        <pre className="bg-skepal-bg rounded-md p-4 overflow-x-auto text-[12px] leading-relaxed">
          <code className="text-skepal-text-secondary">{code}</code>
        </pre>
      </div>
    </details>
  )
}

// Usage:
<CodeBlock
  code={\`const greeting = "Hello World"\`}
  title="View code"
/>`
