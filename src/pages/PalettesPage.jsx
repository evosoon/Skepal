import paletteRegistry from "../lib/paletteRegistry";

export default function PalettesPage() {
  return (
    <div>
      <div className="mb-10 flex items-start justify-between">
        <div>
          <h1 className="inline-block text-[32px] font-semibold bg-gradient-to-r from-white/90 via-white/60 to-white/20 bg-clip-text text-transparent mb-2">
            Palettes
          </h1>
          <p className="text-[15px] text-skepal-text-secondary">
            Harmonious color schemes for your designs
          </p>
        </div>
        <a
          href="https://huemint.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-skepal-accent hover:bg-skepal-accent-hover text-white text-[13px] font-medium rounded-md transition-colors"
        >
          Generate with Huemint
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
