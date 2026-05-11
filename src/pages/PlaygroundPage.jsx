import { useState, useCallback } from "react";
import playgroundRegistry, { getAllStatuses } from "../lib/playgroundRegistry";
import TagBadge from "../components/buttons/TagBadge";
import Dropdown from "../components/buttons/Dropdown";
import InfoCard from "../components/cards/InfoCard";
import PageHeader from "../components/typography/PageHeader";
import PreviewCanvas from "../components/layout/PreviewCanvas";
import ColorSwatch from "../components/layout/ColorSwatch";

export default function PlaygroundPage() {
  const [selectedId, setSelectedId] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");

  const statuses = getAllStatuses();

  const filteredPlaygrounds = statusFilter === "All"
    ? playgroundRegistry
    : playgroundRegistry.filter(p => p.meta.status === statusFilter);

  const selected = filteredPlaygrounds.find((p) => p.id === selectedId);

  const getStatusVariant = (status) => {
    if (status === "final") return "success";
    if (status === "draft" || status === "iterating") return "accent";
    return "default";
  };

  return (
    <div>
      <PageHeader
        title="Playground"
        subtitle="Design experiments generated through conversation with Claude Code"
      >
        <Dropdown
          value={statusFilter}
          onChange={setStatusFilter}
          options={statuses}
          placeholder="All Statuses"
        />
      </PageHeader>

      {filteredPlaygrounds.length === 0 ? (
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
            {filteredPlaygrounds.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`w-full text-left p-3 rounded-lg border transition-colors ${
                  selectedId === item.id
                    ? "bg-skepal-elevated border-skepal-border-strong"
                    : "bg-skepal-surface border-skepal-border hover:border-skepal-border-strong"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="text-[13px] font-medium text-skepal-text">
                    {item.meta.title}
                  </div>
                  {item.meta.status && (
                    <TagBadge size="small" variant={getStatusVariant(item.meta.status)}>
                      {item.meta.status}
                    </TagBadge>
                  )}
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
                {/* Status badge and promotion banner */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h2 className="text-[20px] font-semibold text-skepal-text">
                      {selected.meta.title}
                    </h2>
                    {selected.meta.status && (
                      <TagBadge variant={getStatusVariant(selected.meta.status)}>
                        {selected.meta.status}
                      </TagBadge>
                    )}
                  </div>

                  {selected.meta.status === "final" && (
                    <div className="bg-skepal-success/10 border border-skepal-success/30 rounded-lg px-4 py-3 mb-4">
                      <p className="text-[13px] text-skepal-success">
                        This design is ready for promotion — ask Claude to promote it
                      </p>
                    </div>
                  )}

                  {selected.meta.description && (
                    <p className="text-[14px] text-skepal-text-secondary mb-4">
                      {selected.meta.description}
                    </p>
                  )}

                  {/* Design brief */}
                  {selected.meta.brief && (
                    <BriefSection brief={selected.meta.brief} />
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
                          <ColorSwatch key={idx} color={color} />
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

function formatBrief(brief) {
  const parts = [];
  if (brief.request) parts.push(`# Design Request\n\n${brief.request}`);
  if (brief.mood) parts.push(`# Mood\n\n${brief.mood}`);
  if (brief.audience) parts.push(`# Audience\n\n${brief.audience}`);
  if (brief.references) parts.push(`# References\n\n${brief.references}`);
  if (brief.constraints) parts.push(`# Constraints\n\n${brief.constraints}`);
  return parts.join("\n\n---\n\n");
}

function BriefSection({ brief }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(formatBrief(brief));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  }, [brief]);

  return (
    <details className="mb-6 bg-skepal-surface border border-skepal-border rounded-lg overflow-hidden">
      <summary className="px-4 py-3 cursor-pointer text-[13px] font-medium text-skepal-text hover:bg-skepal-elevated flex items-center justify-between gap-2">
        <span>Design Brief</span>
        <button
          type="button"
          onClick={handleCopy}
          className="text-[11px] px-2 py-1 rounded border border-skepal-border bg-skepal-bg text-skepal-text-secondary hover:text-skepal-text hover:border-skepal-border-strong transition-colors"
        >
          {copied ? "Copied!" : "Copy as prompt"}
        </button>
      </summary>
      <div className="px-4 py-3 border-t border-skepal-border space-y-4">
        {brief.request && (
          <div>
            <div className="text-[11px] uppercase tracking-wide text-skepal-text-tertiary mb-2">Request</div>
            <pre className="text-[12px] leading-[1.7] text-skepal-text-secondary font-mono whitespace-pre-wrap">{brief.request}</pre>
          </div>
        )}
        {brief.mood && (
          <div>
            <div className="text-[11px] uppercase tracking-wide text-skepal-text-tertiary mb-1">Mood</div>
            <p className="text-[13px] text-skepal-text-secondary whitespace-pre-wrap">{brief.mood}</p>
          </div>
        )}
        {brief.audience && (
          <div>
            <div className="text-[11px] uppercase tracking-wide text-skepal-text-tertiary mb-1">Audience</div>
            <p className="text-[13px] text-skepal-text-secondary whitespace-pre-wrap">{brief.audience}</p>
          </div>
        )}
        {brief.references && (
          <div>
            <div className="text-[11px] uppercase tracking-wide text-skepal-text-tertiary mb-1">References</div>
            <p className="text-[13px] text-skepal-text-secondary whitespace-pre-wrap">{brief.references}</p>
          </div>
        )}
        {brief.constraints && (
          <div>
            <div className="text-[11px] uppercase tracking-wide text-skepal-text-tertiary mb-1">Constraints</div>
            <p className="text-[13px] text-skepal-text-secondary whitespace-pre-wrap">{brief.constraints}</p>
          </div>
        )}
      </div>
    </details>
  );
}
