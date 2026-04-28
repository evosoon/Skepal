export const meta = {
  name: "Page Header",
  description: "Page title with gradient effect and subtitle",
  category: "Typography",
  tags: ["header", "title", "gradient", "page"],

  style: {
    mood: "elegant, minimal",
    inspiration: "Linear",
    audience: "All pages",
    useCase: "Page section headers",
  },

  palette: {
    name: "Skepal Dark",
    colors: ["#ffffff", "#a1a1aa"],
    source: "custom",
  },

  variants: ["default"],

  createdAt: "2026-04-27",
};

// Main component for actual use
export default function PageHeader({
  title,
  subtitle,
  children,
  className = "",
}) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-center justify-between gap-4">
        <h1 className="inline-block text-[32px] font-semibold bg-gradient-to-r from-white/90 via-white/90 to-white/85 bg-clip-text text-transparent">
          {title}
        </h1>
        {children && <div className="flex items-center gap-3">{children}</div>}
      </div>
      {subtitle && (
        <p className="text-[15px] text-skepal-text-secondary mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Demo component for preview
export function PageHeaderDemo() {
  return (
    <PageHeader
      title="Components"
      subtitle="Reusable UI elements from Skepal and your designs"
    />
  );
}

// Source code for display
export const code = `export default function PageHeader({ title, subtitle, className = '' }) {
  return (
    <div className={\`mb-10 \${className}\`}>
      <h1 className="inline-block text-[32px] font-semibold bg-gradient-to-r from-white/90 via-white/60 to-white/20 bg-clip-text text-transparent mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[15px] text-skepal-text-secondary">{subtitle}</p>
      )}
    </div>
  )
}

// Usage:
<PageHeader
  title="Components"
  subtitle="Reusable UI elements from Skepal and your designs"
/>`;
