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

  variants: ["default", "small"],

  createdAt: "2026-04-27",
};

export default function TagBadge({
  children = "Tag",
  size = "default",
  className = "",
}) {
  const sizeClasses = {
    small: "text-[10px] px-1.5 py-0.5",
    default: "text-[11px] px-2 py-1",
  };

  return (
    <span
      className={`inline-block bg-skepal-bg border border-skepal-border rounded text-skepal-text-tertiary ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
}
