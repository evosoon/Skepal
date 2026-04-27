export const meta = {
  name: 'Preview Canvas',
  description: 'Dark canvas with grid pattern for component previews',
  category: 'Layout',
  tags: ['canvas', 'preview', 'grid', 'background'],

  style: {
    mood: 'neutral, professional',
    inspiration: 'Figma, Sketch',
    audience: 'Design tools, component libraries',
    useCase: 'Component preview areas',
  },

  palette: {
    name: 'Skepal Dark',
    colors: ['#141416', '#1f1f23', '#ffffff'],
    source: 'custom',
  },

  variants: ['default'],

  createdAt: '2026-04-27',
}

// Main component for actual use
export default function PreviewCanvas({ children, className = '', minHeight = '500px' }) {
  return (
    <div
      className={`preview-canvas rounded-lg p-12 border border-skepal-border flex items-center justify-center ${className}`}
      style={{ minHeight }}
    >
      {children}
    </div>
  )
}

// Demo component for preview
export function PreviewCanvasDemo() {
  return (
    <PreviewCanvas minHeight="300px">
      <div className="bg-skepal-accent text-white px-4 py-2 rounded-md">
        Preview Content
      </div>
    </PreviewCanvas>
  )
}

// Source code for display
export const code = `export default function PreviewCanvas({ children, className = '', minHeight = '500px' }) {
  return (
    <div
      className={\`preview-canvas rounded-lg p-12 border border-skepal-border flex items-center justify-center \${className}\`}
      style={{ minHeight }}
    >
      {children}
    </div>
  )
}

// Usage:
<PreviewCanvas minHeight="400px">
  <YourComponent />
</PreviewCanvas>

// Note: Requires .preview-canvas CSS class in index.css:
// .preview-canvas {
//   background-color: #141416;
//   background-image:
//     linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
//     linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
//   background-size: 20px 20px;
// }`
