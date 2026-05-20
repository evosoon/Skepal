import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import playgroundRegistry, { getAllStatuses } from "../lib/playgroundRegistry";
import TagBadge from "../components/buttons/TagBadge";
import Dropdown from "../components/buttons/Dropdown";
import InfoCard from "../components/cards/InfoCard";
import PageHeader from "../components/typography/PageHeader";
import PreviewCanvas from "../components/layout/PreviewCanvas";
import ColorSwatch from "../components/layout/ColorSwatch";

const CORNER_OFFSET = 16;
const SNAP_THRESHOLD = 0.5;

function DraggableExitButton({ onClick }) {
  const btnRef = useRef(null);
  const [corner, setCorner] = useState("bottom-right");
  const dragState = useRef(null);

  const getCornerStyle = (c) => {
    const s = { position: "fixed", zIndex: 10000 };
    if (c.includes("top")) s.top = CORNER_OFFSET;
    else s.bottom = CORNER_OFFSET;
    if (c.includes("right")) s.right = CORNER_OFFSET;
    else s.left = CORNER_OFFSET;
    return s;
  };

  const handlePointerDown = (e) => {
    e.preventDefault();
    const rect = btnRef.current.getBoundingClientRect();
    dragState.current = {
      startX: e.clientX,
      startY: e.clientY,
      originX: rect.left,
      originY: rect.top,
      dragging: false,
    };
    btnRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    const ds = dragState.current;
    if (!ds) return;
    const dx = e.clientX - ds.startX;
    const dy = e.clientY - ds.startY;
    if (!ds.dragging && Math.abs(dx) + Math.abs(dy) < 4) return;
    ds.dragging = true;
    const el = btnRef.current;
    el.style.position = "fixed";
    el.style.left = `${ds.originX + dx}px`;
    el.style.top = `${ds.originY + dy}px`;
    el.style.right = "auto";
    el.style.bottom = "auto";
    el.style.transition = "none";
  };

  const handlePointerUp = (e) => {
    const ds = dragState.current;
    dragState.current = null;
    if (!ds) return;
    if (!ds.dragging) {
      onClick();
      return;
    }
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const cx = e.clientX / vw;
    const cy = e.clientY / vh;
    const newCorner =
      cy < SNAP_THRESHOLD
        ? cx < SNAP_THRESHOLD ? "top-left" : "top-right"
        : cx < SNAP_THRESHOLD ? "bottom-left" : "bottom-right";
    setCorner(newCorner);
    const el = btnRef.current;
    el.style.transition = "";
    el.style.left = "";
    el.style.top = "";
    el.style.right = "";
    el.style.bottom = "";
  };

  return (
    <button
      ref={btnRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={getCornerStyle(corner)}
      className="p-2.5 rounded-xl bg-white/10 text-white/50 hover:text-white hover:bg-white/20 transition-[background-color,color,opacity] duration-200 cursor-grab active:cursor-grabbing backdrop-blur-sm select-none touch-none"
      title="Exit fullscreen (Esc) · Drag to reposition"
    >
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 2 2 2 2 6" />
        <polyline points="10 14 14 14 14 10" />
        <line x1="2" y1="2" x2="6.5" y2="6.5" />
        <line x1="14" y1="14" x2="9.5" y2="9.5" />
      </svg>
    </button>
  );
}

export default function PlaygroundPage() {
  const [selectedId, setSelectedId] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    if (!fullscreen) return;
    const onKey = (e) => { if (e.key === "Escape") setFullscreen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [fullscreen]);

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

                <div className="relative">
                  <button
                    onClick={() => setFullscreen(true)}
                    className="absolute top-3 right-3 z-10 p-1.5 rounded-md bg-black/40 text-skepal-text-tertiary hover:text-skepal-text hover:bg-black/60 transition-colors"
                    title="Fullscreen preview"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="10 2 14 2 14 6" />
                      <polyline points="6 14 2 14 2 10" />
                      <line x1="14" y1="2" x2="9.5" y2="6.5" />
                      <line x1="2" y1="14" x2="6.5" y2="9.5" />
                    </svg>
                  </button>
                  <PreviewCanvas>
                    <selected.component />
                  </PreviewCanvas>
                </div>
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

      {fullscreen && selected && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-[#09090b] overflow-auto"
          style={{ isolation: "isolate" }}
        >
          <DraggableExitButton onClick={() => setFullscreen(false)} />
          <selected.component />
        </div>,
        document.body
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
