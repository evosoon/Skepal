import FeatureCard from '../components/cards/FeatureCard'
import UsageGuide from '../components/docs/UsageGuide'

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

      <div className="bg-skepal-surface border border-skepal-border rounded-lg p-8 mb-8">
        <h2 className="text-[15px] font-semibold text-skepal-text mb-2">
          How it works
        </h2>
        <p className="text-[13px] text-skepal-text-secondary mb-6">
          Powered by the <span className="text-skepal-accent font-medium">frontend-design</span> plugin
        </p>
        <div className="space-y-4">
          {[
            { cmd: "/frontend-design", desc: "Launch the design workflow — the plugin guides you through style, color, and layout decisions" },
            { cmd: "Generate", desc: "Production-grade component code is created and added to Skepal Playground" },
            { cmd: "Iterate", desc: "Provide feedback in conversation, Claude refines the design visually with Playwright" },
            { cmd: "Promote", desc: "When satisfied, promote to the permanent component library" },
          ].map(({ cmd, desc }, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-md bg-skepal-elevated border border-skepal-border flex items-center justify-center text-[13px] text-skepal-text-secondary font-medium shrink-0">
                {idx + 1}
              </div>
              <div className="pt-0.5">
                <span className="text-[14px] text-skepal-text font-medium">{cmd}</span>
                <span className="text-[14px] text-skepal-text-secondary"> — {desc}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-skepal-border">
          <p className="text-[12px] text-skepal-text-secondary">
            Also available: <span className="font-mono text-skepal-accent">/design</span> (quick styling) · <span className="font-mono text-skepal-accent">/ui</span> (design-system aware) · <span className="font-mono text-skepal-accent">/layout</span> (responsive structures)
          </p>
        </div>
      </div>

      <section className="bg-skepal-surface border border-skepal-border rounded-lg p-8 mb-8" aria-labelledby="apple-design-title">
        <div className="flex items-start justify-between gap-6 mb-6">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-skepal-accent mb-2">
              Interaction foundation
            </div>
            <h2 id="apple-design-title" className="text-[15px] font-semibold text-skepal-text mb-2">
              Apple Design Skill
            </h2>
            <p className="max-w-[620px] text-[13px] leading-6 text-skepal-text-secondary">
              Apple&apos;s principles for fluid web interaction: immediate feedback, direct manipulation,
              interruptible motion, spring behavior, spatial continuity, and accessible transitions.
              Skepal pairs these behaviors with its Linear-inspired visual language.
            </p>
          </div>
          <a
            href="https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-[12px] font-medium text-skepal-text-secondary hover:text-skepal-text"
          >
            Official skill ↗
          </a>
        </div>

        <div className="rounded-md border border-skepal-border bg-skepal-bg px-4 py-3">
          <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.1em] text-skepal-text-tertiary">
            Install
          </div>
          <code className="block overflow-x-auto whitespace-nowrap font-mono text-[12px] text-skepal-text">
            npx skills@latest add emilkowalski/skills
          </code>
        </div>

        <div className="mt-4 text-[12px] text-skepal-text-tertiary">
          Source:{' '}
          <a
            href="https://github.com/emilkowalski/skills"
            target="_blank"
            rel="noreferrer"
            className="text-skepal-text-secondary hover:text-skepal-text"
          >
            emilkowalski/skills ↗
          </a>
        </div>
      </section>

      <UsageGuide />
    </div>
  );
}
