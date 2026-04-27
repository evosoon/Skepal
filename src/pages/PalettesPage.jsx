import paletteRegistry from "../lib/paletteRegistry";
import PageHeader from "../components/typography/PageHeader";
import GhostButton from "../components/buttons/GhostButton";

export default function PalettesPage() {
  return (
    <div>
      <div className="mb-10 flex items-start justify-between">
        <PageHeader
          title="Palettes"
          subtitle="Harmonious color schemes for your designs"
          className="mb-0"
        />
        <a
          href="https://huemint.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GhostButton>Generate with Huemint</GhostButton>
        </a>
      </div>

      <div className="bg-skepal-surface border border-skepal-border rounded-lg p-4 mb-8">
        <p className="text-[13px] text-skepal-text-secondary">
          Use{" "}
          <a
            href="https://huemint.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-skepal-accent hover:text-skepal-accent-hover"
          >
            Huemint
          </a>{" "}
          to generate harmonious color palettes. Copy the hex codes and tell
          Claude Code to add them to Skepal.
        </p>
      </div>

      <div className="space-y-4">
        {paletteRegistry.map((palette) => (
          <div
            key={palette.id}
            className="bg-skepal-surface border border-skepal-border rounded-lg p-6 hover:border-skepal-border-strong transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[15px] font-semibold text-skepal-text">
                {palette.name}
              </h2>
              {palette.source && (
                <span className="text-[12px] text-skepal-text-tertiary">
                  {palette.source}
                </span>
              )}
            </div>
            <div className="flex gap-2">
              {palette.colors.map((color, idx) => (
                <div key={idx} className="flex-1">
                  <div
                    className="h-20 rounded-md border border-skepal-border"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-[11px] text-skepal-text-tertiary mt-2 font-mono text-center">
                    {color}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
