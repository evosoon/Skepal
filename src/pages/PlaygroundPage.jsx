import { useState } from "react";
import playgroundRegistry from "../lib/playgroundRegistry";
import TagBadge from "../components/buttons/TagBadge";
import InfoCard from "../components/cards/InfoCard";
import PageHeader from "../components/typography/PageHeader";
import PreviewCanvas from "../components/layout/PreviewCanvas";

export default function PlaygroundPage() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = playgroundRegistry.find((p) => p.id === selectedId);

  return (
    <div>
      <PageHeader
        title="Playground"
        subtitle="Design experiments generated through conversation with Claude Code"
      />

      {playgroundRegistry.length === 0 ? (
        <div className="bg-skepal-surface border border-skepal-border rounded-lg p-16 text-center">
          <p className="text-[15px] text-skepal-text mb-2">
            No playground experiments yet
          </p>
          <p className="text-[13px] text-skepal-text-secondary max-w-md mx-auto">
            Describe a design idea in Claude Code to generate your first
            experiment.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-[280px_1fr] gap-8">
          <aside className="space-y-2">
            {playgroundRegistry.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`w-full text-left p-3 rounded-lg border transition-colors ${
                  selectedId === item.id
                    ? "bg-skepal-elevated border-skepal-border-strong"
                    : "bg-skepal-surface border-skepal-border hover:border-skepal-border-strong"
                }`}
              >
                <div className="text-[13px] font-medium text-skepal-text mb-1">
                  {item.meta.title}
                </div>
                {item.meta.date && (
                  <div className="text-[11px] text-skepal-text-tertiary mb-2">
                    {item.meta.date}
                  </div>
                )}
                {item.meta.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {item.meta.tags.slice(0, 3).map((tag) => (
                      <TagBadge key={tag} size="small">
                        {tag}
                      </TagBadge>
                    ))}
                  </div>
                )}
              </button>
            ))}
          </aside>

          <div>
            {selected ? (
              <div>
                <div className="mb-6">
                  <h2 className="text-[20px] font-semibold text-skepal-text mb-2">
                    {selected.meta.title}
                  </h2>
                  {selected.meta.description && (
                    <p className="text-[14px] text-skepal-text-secondary mb-6">
                      {selected.meta.description}
                    </p>
                  )}

                  {selected.meta.style && (
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {selected.meta.style.mood && (
                        <InfoCard label="Mood" value={selected.meta.style.mood} />
                      )}
                      {selected.meta.style.audience && (
                        <InfoCard label="Audience" value={selected.meta.style.audience} />
                      )}
                      {selected.meta.style.useCase && (
                        <InfoCard label="Use Case" value={selected.meta.style.useCase} />
                      )}
                    </div>
                  )}

                  {selected.meta.palette?.colors && (
                    <div className="mb-6">
                      <div className="text-[11px] text-skepal-text-tertiary mb-2">
                        Palette: {selected.meta.palette.name}
                      </div>
                      <div className="flex gap-2">
                        {selected.meta.palette.colors.map((color, idx) => (
                          <div
                            key={idx}
                            className="h-10 flex-1 rounded-md border border-skepal-border"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <PreviewCanvas>
                  <selected.component />
                </PreviewCanvas>
              </div>
            ) : (
              <div className="h-[400px] flex items-center justify-center">
                <p className="text-[14px] text-skepal-text-tertiary">
                  Select an experiment to preview
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
