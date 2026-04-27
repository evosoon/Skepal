export const meta = {
  name: "Feature Card",
  description: "Simple card with border, hover effect, and structured content",
  category: "Cards",
  tags: ["card", "feature", "hover", "minimal"],

  style: {
    mood: "clean, minimal",
    inspiration: "Linear",
    audience: "Landing pages, feature showcases",
    useCase: "Displaying features, stats, or grouped content",
  },

  palette: {
    name: "Skepal Dark",
    colors: ["#0f0f11", "#1f1f23", "#27272a", "#fafafa", "#a1a1aa", "#71717a"],
    source: "custom",
  },

  variants: ["default", "with-icon"],

  createdAt: "2026-04-27",
};

// Main component for actual use
export default function FeatureCard({
  title,
  description,
  meta,
  icon,
  className = "",
}) {
  return (
    <div
      className={`bg-skepal-surface border border-skepal-border rounded-lg p-6 hover:border-skepal-border-strong transition-colors ${className}`}
    >
      {icon && <div className="mb-3">{icon}</div>}
      {meta && (
        <div className="text-[13px] text-skepal-text-tertiary mb-1">{meta}</div>
      )}
      <div className="text-[15px] font-medium text-skepal-text mb-1">
        {title}
      </div>
      {description && (
        <div className="text-[13px] text-skepal-text-secondary">
          {description}
        </div>
      )}
    </div>
  );
}

// Demo component for preview
export function FeatureCardDemo() {
  return (
    <div className="max-w-xs">
      <FeatureCard
        title="Components"
        description="Reusable UI elements"
        meta="8 items"
      />
    </div>
  );
}

// Source code for display
export const code = `export default function FeatureCard({ title, description, meta, icon, className = '' }) {
  return (
    <div
      className={\`bg-skepal-surface border border-skepal-border rounded-lg p-6 hover:border-skepal-border-strong transition-colors \${className}\`}
    >
      {icon && <div className="mb-3">{icon}</div>}
      {meta && <div className="text-[13px] text-skepal-text-tertiary mb-1">{meta}</div>}
      <div className="text-[15px] font-medium text-skepal-text mb-1">{title}</div>
      {description && <div className="text-[13px] text-skepal-text-secondary">{description}</div>}
    </div>
  )
}

// Usage:
<FeatureCard
  title="Components"
  description="Reusable UI elements"
  meta="8 items"
/>`;
