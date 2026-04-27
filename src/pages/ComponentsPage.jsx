import { useState } from 'react'
import componentRegistry, { getAllTags, getAllStyles, searchComponents } from '../lib/componentRegistry.jsx'
import TagBadge from '../components/buttons/TagBadge'
import InfoCard from '../components/cards/InfoCard'
import PageHeader from '../components/typography/PageHeader'
import PreviewCanvas from '../components/layout/PreviewCanvas'
import CodeBlock from '../components/layout/CodeBlock'

export default function ComponentsPage() {
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedStyle, setSelectedStyle] = useState('All')

  const categories = ['All', ...Object.keys(componentRegistry)]
  const styles = ['All', ...getAllStyles()]

  // Filter components
  let filteredComponents = {}

  if (searchQuery) {
    const results = searchComponents(searchQuery)
    filteredComponents = { 'Search Results': results }
  } else {
    filteredComponents = componentRegistry

    if (selectedCategory !== 'All') {
      filteredComponents = { [selectedCategory]: componentRegistry[selectedCategory] || [] }
    }

    if (selectedStyle !== 'All') {
      const filtered = {}
      Object.entries(filteredComponents).forEach(([cat, comps]) => {
        const styleFiltered = comps.filter(
          (c) => c.meta.style?.inspiration === selectedStyle
        )
        if (styleFiltered.length > 0) {
          filtered[cat] = styleFiltered
        }
      })
      filteredComponents = filtered
    }
  }

  return (
    <div>
      <PageHeader
        title="Components"
        subtitle="Reusable UI elements from Skepal and your designs"
      />

      {/* Filters */}
      <div className="mb-8 flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search components..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 max-w-xs px-3 py-2 bg-skepal-surface border border-skepal-border rounded-md text-[13px] text-skepal-text placeholder:text-skepal-text-tertiary focus:outline-none focus:border-skepal-accent transition-colors"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 bg-skepal-surface border border-skepal-border rounded-md text-[13px] text-skepal-text focus:outline-none focus:border-skepal-accent transition-colors"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={selectedStyle}
          onChange={(e) => setSelectedStyle(e.target.value)}
          className="px-3 py-2 bg-skepal-surface border border-skepal-border rounded-md text-[13px] text-skepal-text focus:outline-none focus:border-skepal-accent transition-colors"
        >
          {styles.map((style) => (
            <option key={style} value={style}>
              {style === 'All' ? 'All Styles' : style}
            </option>
          ))}
        </select>
      </div>

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
                        ? 'text-skepal-text bg-skepal-elevated'
                        : 'text-skepal-text-secondary hover:text-skepal-text'
                    }`}
                  >
                    {comp.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <div>
          {selectedComponent ? (
            <div>
              {/* Component metadata */}
              <div className="mb-6">
                <h2 className="text-[20px] font-semibold text-skepal-text mb-2">
                  {selectedComponent.name}
                </h2>
                {selectedComponent.description && (
                  <p className="text-[14px] text-skepal-text-secondary mb-4">
                    {selectedComponent.description}
                  </p>
                )}

                {/* Tags */}
                {selectedComponent.meta.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedComponent.meta.tags.map((tag) => (
                      <TagBadge key={tag}>{tag}</TagBadge>
                    ))}
                  </div>
                )}

                {/* Style info */}
                {selectedComponent.meta.style && (
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {selectedComponent.meta.style.mood && (
                      <InfoCard label="Mood" value={selectedComponent.meta.style.mood} />
                    )}
                    {selectedComponent.meta.style.inspiration && (
                      <InfoCard label="Inspiration" value={selectedComponent.meta.style.inspiration} />
                    )}
                  </div>
                )}

                {/* Palette */}
                {selectedComponent.meta.palette?.colors && (
                  <div className="mb-6">
                    <div className="text-[11px] text-skepal-text-tertiary mb-2">
                      Palette: {selectedComponent.meta.palette.name}
                    </div>
                    <div className="flex gap-2">
                      {selectedComponent.meta.palette.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="h-10 w-16 rounded-md border border-skepal-border"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Preview */}
              <div className="mb-8">
                <PreviewCanvas>
                  {selectedComponent.component}
                </PreviewCanvas>
              </div>

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
  )
}
