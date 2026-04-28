export const meta = {
  name: "Tag Badge",
  description: "Small badge for tags and labels",
  category: "Buttons",
  tags: ["badge", "tag", "label", "chip"],

  style: {
    mood: "subtle, informative",
    inspiration: "Linear",
    audience: "All products",
    useCase: "Tags, categories, status indicators",
  },

  palette: {
    name: "Skepal Dark",
    colors: ["#09090b", "#1f1f23", "#71717a"],
    source: "custom",
  },

  variants: ["default", "small", "accent", "success"],

  createdAt: "2026-04-27",
};

export default function TagBadge({
  children = "Tag",
  size = "default",
  variant = "default",
  className = "",
}) {
  const sizeClasses = {
    small: "text-[10px] px-1.5 py-0.5",
    default: "text-[11px] px-2 py-1",
  };

  const variantClasses = {
    default: "bg-skepal-bg border-skepal-border text-skepal-text-tertiary",
    accent: "bg-skepal-accent/10 border-skepal-accent/30 text-skepal-accent",
    success: "bg-skepal-success/10 border-skepal-success/30 text-skepal-success",
  };

  return (
    <span
      className={`inline-block border rounded ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

// Demo component for preview
export function TagBadgeDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <TagBadge>Default</TagBadge>
      <TagBadge variant="accent">Accent</TagBadge>
      <TagBadge variant="success">Success</TagBadge>
      <TagBadge size="small">Small</TagBadge>
    </div>
  );
}

// Source code for display
export const code = `export default function TagBadge({
  children = "Tag",
  size = "default",
  variant = "default",
  className = "",
}) {
  const sizeClasses = {
    small: "text-[10px] px-1.5 py-0.5",
    default: "text-[11px] px-2 py-1",
  };

  const variantClasses = {
    default: "bg-skepal-bg border-skepal-border text-skepal-text-tertiary",
    accent: "bg-skepal-accent/10 border-skepal-accent/30 text-skepal-accent",
    success: "bg-skepal-success/10 border-skepal-success/30 text-skepal-success",
  };

  return (
    <span
      className={\`inline-block border rounded \${sizeClasses[size]} \${variantClasses[variant]} \${className}\`}
    >
      {children}
    </span>
  );
}

// Usage:
<TagBadge>Default</TagBadge>
<TagBadge variant="accent">Accent</TagBadge>
<TagBadge variant="success">Success</TagBadge>
<TagBadge size="small">Small</TagBadge>`;
