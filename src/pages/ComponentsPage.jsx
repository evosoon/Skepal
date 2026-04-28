import { useState } from "react";
import componentRegistry, {
  getAllTags,
  getAllStyles,
  searchComponents,
} from "../lib/componentRegistry.jsx";
import TagBadge from "../components/buttons/TagBadge";
import Dropdown from "../components/buttons/Dropdown";
import InfoCard from "../components/cards/InfoCard";
import PageHeader from "../components/typography/PageHeader";
import PreviewCanvas from "../components/layout/PreviewCanvas";
import CodeBlock from "../components/layout/CodeBlock";
import ColorSwatch from "../components/layout/ColorSwatch";

export default function ComponentsPage() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStyle, setSelectedStyle] = useState("All");

  const categories = ["All", ...Object.keys(componentRegistry)];
  const styles = ["All", ...getAllStyles()];

  // Filter components
  let filteredComponents = {};

  if (searchQuery) {
    const results = searchComponents(searchQuery);
    filteredComponents = { "Search Results": results };
  } else {
    filteredComponents = componentRegistry;

    if (selectedCategory !== "All") {
      filteredComponents = {
        [selectedCategory]: componentRegistry[selectedCategory] || [],
      };
    }

    if (selectedStyle !== "All") {
      const filtered = {};
      Object.entries(filteredComponents).forEach(([cat, comps]) => {
        const styleFiltered = comps.filter(
          (c) => c.meta.style?.inspiration === selectedStyle,
        );
        if (styleFiltered.length > 0) {
          filtered[cat] = styleFiltered;
        }
      });
      filteredComponents = filtered;
    }
  }

  return (
    <div>
      <PageHeader
        title="Components"
        subtitle="Reusable UI elements from Skepal and your designs"
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-1.5 w-[160px] bg-skepal-surface border border-skepal-border rounded-md text-[13px] text-skepal-text placeholder:text-skepal-text-tertiary focus:outline-none focus:border-skepal-accent transition-colors"
        />
        <Dropdown
          value={selectedCategory}
          onChange={setSelectedCategory}
          options={categories}
          placeholder="All Categories"
        />
        <Dropdown
          value={selectedStyle}
          onChange={setSelectedStyle}
          options={styles}
          placeholder="All Styles"
        />
      </PageHeader>

      <div className="grid grid-cols-[220px_1fr] gap-8">
        <aside className="space-y-6">
          {Object.entries(filteredComponents).map(([category, components]) => (
            <div key={category}>
              <div className="text-[11px] uppercase tracking-wider text-skepal-text-tertiary font-semibold mb-2 px-2">
                {category}
              </div>
              <div className="space-y-0.5">
                {components.map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedComponent(comp)}
                    className={`w-full text-left px-2 py-1.5 rounded-md text-[13px] transition-colors ${
                      selectedComponent?.id === comp.id
                        ? "text-skepal-text bg-skepal-elevated"
                        : "text-skepal-text-secondary hover:text-skepal-text"
                    }`}
                  >
                    {comp.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <div className="min-w-0">
          {selectedComponent ? (
            <div>
              {/* Component metadata */}
              <div className="flex items-start justify-between gap-6 mb-6">
                <div className="flex-1 min-w-0">
                  <h2 className="text-[20px] font-semibold text-skepal-text mb-1">
                    {selectedComponent.name}
                  </h2>
                  {selectedComponent.description && (
                    <p className="text-[14px] text-skepal-text-secondary mb-3">
                      {selectedComponent.description}
                    </p>
                  )}
                  {selectedComponent.meta.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {selectedComponent.meta.tags.map((tag) => (
                        <TagBadge key={tag}>{tag}</TagBadge>
                      ))}
                    </div>
                  )}
                </div>
                {selectedComponent.meta.palette?.colors && (
                  <div className="shrink-0 text-right">
                    <div className="text-[11px] text-skepal-text-tertiary mb-2">
                      {selectedComponent.meta.palette.name}
                    </div>
                    <div className="flex gap-1.5">
                      {selectedComponent.meta.palette.colors.map(
                        (color, idx) => (
                          <ColorSwatch key={idx} color={color} />
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Preview */}
              <div className="mb-8">
                <PreviewCanvas>{selectedComponent.component}</PreviewCanvas>
              </div>

              {/* Style info */}
              {selectedComponent.meta.style && (
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {selectedComponent.meta.style.mood && (
                    <InfoCard
                      label="Mood"
                      value={selectedComponent.meta.style.mood}
                    />
                  )}
                  {selectedComponent.meta.style.inspiration && (
                    <InfoCard
                      label="Inspiration"
                      value={selectedComponent.meta.style.inspiration}
                    />
                  )}
                </div>
              )}

              {/* Code */}
              <CodeBlock code={selectedComponent.code} />
            </div>
          ) : (
            <div className="h-[400px] flex items-center justify-center">
              <p className="text-[14px] text-skepal-text-tertiary">
                Select a component to preview
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
