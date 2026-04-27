import FeatureCard from '../components/cards/FeatureCard'

export default function Home() {
  return (
    <div className="max-w-[880px] mx-auto">
      <div className="pt-20 pb-16 text-center">
        <h1 className="text-[56px] font-semibold tracking-tight mb-4 leading-[1.1]">
          <span className="inline-flex">
            {/* Ske：不是死紫，而是微渐变紫 */}
            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Ske
            </span>

            {/* pal：柔和白渐变（带一点空气感） */}
            <span className="bg-gradient-to-r from-white/50 via-white/70 to-white bg-clip-text text-transparent">
              pal
            </span>
          </span>
        </h1>
        <p className="text-[17px] text-skepal-text-secondary mb-16">
          A conversation-driven design system for exploring UI elements,
          layouts, and color palettes.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-16">
        {[
          { label: "Components", desc: "Reusable UI elements", count: "8" },
          { label: "Layouts", desc: "Page structures", count: "3" },
          { label: "Palettes", desc: "Color harmonies", count: "4" },
        ].map(({ label, desc, count }) => (
          <FeatureCard
            key={label}
            title={label}
            description={desc}
            meta={`${count} items`}
          />
        ))}
      </div>

      <div className="bg-skepal-surface border border-skepal-border rounded-lg p-8">
        <h2 className="text-[15px] font-semibold text-skepal-text mb-6">
          How it works
        </h2>
        <div className="space-y-4">
          {[
            "Describe your design idea in Claude Code",
            "Claude interviews you about style and context",
            "Discuss color palettes (or use Huemint)",
            "Claude generates the component and adds it to Skepal",
          ].map((step, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-md bg-skepal-elevated border border-skepal-border flex items-center justify-center text-[13px] text-skepal-text-secondary font-medium shrink-0">
                {idx + 1}
              </div>
              <div className="text-[14px] text-skepal-text-secondary pt-0.5">
                {step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
