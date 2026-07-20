/* eslint-disable react-refresh/only-export-components -- playground convention exports meta beside the demo */
import { useCallback, useEffect, useRef, useState } from 'react'

export const meta = {
  title: 'Relay — Linear × Apple AI Workflow',
  description: 'A restrained AI workflow homepage with direct manipulation and interruptible motion.',
  date: '2026-07-20',
  tags: ['ai', 'workflow', 'homepage', 'linear', 'apple-design', 'interactive'],
  status: 'draft',
  brief: {
    request: '使用 Linear 视觉语言与 apple-design 交互原则，重新设计 AI Workflow 产品首页。',
    mood: 'Precise, calm, technical, responsive',
    audience: 'Teams building and operating production AI workflows',
    references: 'Linear-inspired visual hierarchy; Apple-inspired direct manipulation, interruptibility, spatial continuity, and accessibility',
    constraints: 'Self-contained playground; no new dependencies; responsive; reduced-motion support',
  },
  style: {
    mood: 'Restrained technical clarity with physical interaction',
    audience: 'AI product and operations teams',
    useCase: 'AI workflow product homepage with an interactive control surface',
  },
  palette: {
    name: 'Graphite Signal',
    colors: ['#08090B', '#111216', '#1B1D22', '#F4F4F5', '#8B5CF6', '#32D583'],
    source: 'custom',
  },
}

const STEPS = [
  { id: '01', name: 'Collect context', detail: 'Docs · CRM · Support', type: 'Input' },
  { id: '02', name: 'Reason', detail: 'Route by confidence', type: 'Agent' },
  { id: '03', name: 'Human review', detail: 'Required below 92%', type: 'Gate' },
  { id: '04', name: 'Ship result', detail: 'Update every system', type: 'Action' },
]

const GATE_STOPS = [
  { value: 0, label: 'Auto' },
  { value: 0.5, label: 'Review' },
  { value: 1, label: 'Block' },
]

const STYLES = `
  .relay-shell {
    --bg: #08090b;
    --surface: #111216;
    --surface-2: #15171b;
    --line: #25272d;
    --line-strong: #353841;
    --text: #f4f4f5;
    --muted: #a0a3ad;
    --quiet: #686b75;
    --accent: #8b5cf6;
    --success: #32d583;
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-optical-sizing: auto;
  }
  .relay-shell * { box-sizing: border-box; }
  .relay-shell button, .relay-shell a { -webkit-tap-highlight-color: transparent; }
  .relay-press {
    transition: color 140ms ease, background-color 140ms ease, border-color 140ms ease, transform 90ms ease-out !important;
  }
  .relay-press:active { transform: scale(.975); }
  .relay-grid {
    background-image: linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
    background-size: 24px 24px;
  }
  .relay-node { transition: border-color 140ms ease, background-color 140ms ease, opacity 140ms ease !important; }
  .relay-node:hover { border-color: var(--line-strong); }
  .relay-node[data-active="true"] { border-color: rgba(139,92,246,.72); background: rgba(139,92,246,.08); }
  .relay-node[data-done="true"] { border-color: rgba(50,213,131,.35); }
  .relay-panel { will-change: transform, opacity; }
  .relay-thumb { touch-action: none; cursor: grab; will-change: transform; }
  .relay-thumb:active { cursor: grabbing; }
  @media (max-width: 900px) {
    .relay-hero { grid-template-columns: 1fr !important; }
    .relay-copy { max-width: 660px; }
  }
  @media (max-width: 640px) {
    .relay-nav-links { display: none; }
    .relay-workspace { grid-template-columns: 1fr !important; }
    .relay-sidebar { display: none; }
    .relay-nodes { grid-template-columns: 1fr 1fr !important; }
    .relay-proof { grid-template-columns: 1fr !important; }
  }
  @media (prefers-reduced-motion: reduce) {
    .relay-shell *, .relay-shell *::before, .relay-shell *::after {
      animation: none !important;
      scroll-behavior: auto !important;
      transition-duration: 1ms !important;
    }
  }
  @media (prefers-contrast: more) {
    .relay-shell { --line: #4a4d57; --muted: #c6c8cf; }
  }
`

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return reduced
}

function useSpringValue(initial, reducedMotion) {
  const [display, setDisplay] = useState(initial)
  const value = useRef(initial)
  const velocity = useRef(0)
  const frame = useRef(null)

  const cancel = useCallback(() => {
    if (frame.current !== null) cancelAnimationFrame(frame.current)
    frame.current = null
  }, [])

  const setImmediate = useCallback((next) => {
    cancel()
    value.current = next
    velocity.current = 0
    setDisplay(next)
  }, [cancel])

  const animateTo = useCallback((target, initialVelocity) => {
    cancel()
    if (reducedMotion) {
      value.current = target
      velocity.current = 0
      setDisplay(target)
      return
    }

    if (typeof initialVelocity === 'number') velocity.current = initialVelocity
    let previous = performance.now()

    const tick = (now) => {
      const dt = Math.min((now - previous) / 1000, 1 / 30)
      previous = now
      const displacement = value.current - target
      const acceleration = -210 * displacement - 28 * velocity.current
      velocity.current += acceleration * dt
      value.current += velocity.current * dt
      setDisplay(value.current)

      if (Math.abs(value.current - target) < 0.001 && Math.abs(velocity.current) < 0.01) {
        value.current = target
        velocity.current = 0
        setDisplay(target)
        frame.current = null
        return
      }
      frame.current = requestAnimationFrame(tick)
    }

    frame.current = requestAnimationFrame(tick)
  }, [cancel, reducedMotion])

  useEffect(() => cancel, [cancel])

  return { display, animateTo, setImmediate, cancel }
}

function GateControl() {
  const reducedMotion = useReducedMotion()
  const spring = useSpringValue(0.5, reducedMotion)
  const trackRef = useRef(null)
  const dragRef = useRef(null)

  const chooseStop = (stop) => spring.animateTo(stop)

  const handlePointerDown = (event) => {
    const track = trackRef.current
    if (!track) return
    spring.cancel()
    const rect = track.getBoundingClientRect()
    const thumbX = spring.display * rect.width
    dragRef.current = {
      pointerId: event.pointerId,
      grabOffset: event.clientX - (rect.left + thumbX),
      history: [{ x: event.clientX, time: performance.now() }],
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event) => {
    const drag = dragRef.current
    const track = trackRef.current
    if (!drag || !track || drag.pointerId !== event.pointerId) return
    const rect = track.getBoundingClientRect()
    const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left - drag.grabOffset))
    spring.setImmediate(x / rect.width)
    const now = performance.now()
    drag.history.push({ x: event.clientX, time: now })
    drag.history = drag.history.filter((sample) => now - sample.time <= 90)
  }

  const handlePointerUp = (event) => {
    const drag = dragRef.current
    const track = trackRef.current
    if (!drag || !track || drag.pointerId !== event.pointerId) return
    const samples = drag.history
    const first = samples[0]
    const last = samples[samples.length - 1]
    const elapsed = Math.max(last.time - first.time, 1)
    const velocityPx = ((last.x - first.x) / elapsed) * 1000
    const normalizedVelocity = velocityPx / track.getBoundingClientRect().width
    const projected = spring.display + normalizedVelocity * 0.1
    const target = GATE_STOPS.reduce((best, item) => (
      Math.abs(item.value - projected) < Math.abs(best - projected) ? item.value : best
    ), GATE_STOPS[0].value)
    dragRef.current = null
    spring.animateTo(target, normalizedVelocity)
  }

  const handleKeyDown = (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return
    event.preventDefault()
    const currentIndex = GATE_STOPS.reduce((best, item, index) => (
      Math.abs(item.value - spring.display) < Math.abs(GATE_STOPS[best].value - spring.display) ? index : best
    ), 0)
    const delta = event.key === 'ArrowRight' ? 1 : -1
    chooseStop(GATE_STOPS[Math.max(0, Math.min(GATE_STOPS.length - 1, currentIndex + delta))].value)
  }

  const selected = GATE_STOPS.reduce((best, item) => (
    Math.abs(item.value - spring.display) < Math.abs(best.value - spring.display) ? item : best
  ), GATE_STOPS[0])

  return (
    <div className="border-t border-[#25272D] px-4 py-4 sm:px-5">
      <div className="mb-3 flex items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-medium text-[#D8DAE0]">Approval behavior</div>
          <div className="mt-0.5 text-[10px] text-[#686B75]">Drag the control · velocity changes the landing point</div>
        </div>
        <span className="font-mono text-[10px] text-[#A78BFA]">{selected.label}</span>
      </div>
      <div className="relative px-2">
        <div ref={trackRef} className="relative h-8">
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[#353841]" />
          {GATE_STOPS.map((stop) => (
            <button
              key={stop.label}
              type="button"
              onClick={() => chooseStop(stop.value)}
              className="relay-press absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4A4D57] bg-[#111216] hover:border-[#8B5CF6]"
              style={{ left: `${stop.value * 100}%` }}
              aria-label={`Set approval behavior to ${stop.label}`}
            />
          ))}
          <div
            className="relay-thumb absolute top-1/2 z-10 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#A78BFA] bg-[#8B5CF6]"
            style={{ left: `${spring.display * 100}%` }}
            role="slider"
            tabIndex={0}
            aria-label="Approval behavior"
            aria-valuemin={0}
            aria-valuemax={2}
            aria-valuenow={GATE_STOPS.indexOf(selected)}
            aria-valuetext={selected.label}
            onKeyDown={handleKeyDown}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <span className="h-1 w-1 rounded-full bg-white" />
          </div>
        </div>
        <div className="flex justify-between text-[9px] text-[#686B75]">
          {GATE_STOPS.map((stop) => <span key={stop.label}>{stop.label}</span>)}
        </div>
      </div>
    </div>
  )
}

function WorkflowPreview() {
  const reducedMotion = useReducedMotion()
  const panel = useSpringValue(0, reducedMotion)
  const [selected, setSelected] = useState(0)
  const [phase, setPhase] = useState(-1)
  const timers = useRef([])

  const clearRun = useCallback(() => {
    timers.current.forEach(window.clearTimeout)
    timers.current = []
  }, [])

  const startRun = () => {
    clearRun()
    setPhase(0)
    timers.current = STEPS.slice(1).map((_, index) => window.setTimeout(() => setPhase(index + 1), (index + 1) * 720))
    timers.current.push(window.setTimeout(() => setPhase(STEPS.length), STEPS.length * 720))
  }

  const stopRun = () => {
    clearRun()
    setPhase(-1)
  }

  const openPanel = (index) => {
    setSelected(index)
    panel.animateTo(1)
  }

  useEffect(() => clearRun, [clearRun])

  const running = phase >= 0 && phase < STEPS.length

  return (
    <div id="demo" className="overflow-hidden rounded-xl border border-[#25272D] bg-[#111216]">
      <div className="flex h-11 items-center justify-between border-b border-[#25272D] px-4">
        <div className="flex items-center gap-2 text-[11px] font-medium text-[#D8DAE0]">
          <span className="h-2 w-2 rounded-sm bg-[#8B5CF6]" />
          Customer escalation
          <span className="font-mono text-[9px] text-[#686B75]">v12</span>
        </div>
        <button
          type="button"
          onClick={running ? stopRun : startRun}
          className="relay-press rounded-md border border-[#353841] bg-[#1B1D22] px-3 py-1.5 text-[10px] font-medium text-[#E6E7EA] hover:border-[#4A4D57]"
        >
          {running ? 'Stop run' : phase === STEPS.length ? 'Run again' : 'Run workflow'}
        </button>
      </div>

      <div className="relay-workspace grid grid-cols-[118px_1fr]">
        <aside className="relay-sidebar border-r border-[#25272D] p-3">
          <div className="mb-3 text-[9px] font-medium uppercase tracking-[0.12em] text-[#5E616A]">Workspace</div>
          {['Overview', 'Runs', 'Versions'].map((item, index) => (
            <div key={item} className={`mb-1 rounded-md px-2 py-1.5 text-[10px] ${index === 0 ? 'bg-[#1B1D22] text-[#E6E7EA]' : 'text-[#777A84]'}`}>{item}</div>
          ))}
        </aside>

        <div className="relay-grid relative min-h-[390px] overflow-hidden">
          <div className="border-b border-[#25272D] px-4 py-4 sm:px-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] text-[#686B75]">Production workflow</div>
                <div className="mt-1 text-[12px] font-medium text-[#E6E7EA]">Resolve high-priority customer issues</div>
              </div>
              <div className="flex items-center gap-2 font-mono text-[9px] text-[#777A84]">
                <span className={`h-1.5 w-1.5 rounded-full ${running ? 'bg-[#8B5CF6]' : phase === STEPS.length ? 'bg-[#32D583]' : 'bg-[#4A4D57]'}`} />
                {running ? `STEP ${phase + 1}/${STEPS.length}` : phase === STEPS.length ? 'COMPLETED' : 'READY'}
              </div>
            </div>

            <div className="relay-nodes grid grid-cols-4 gap-2">
              {STEPS.map((step, index) => {
                const done = phase === STEPS.length || (phase >= 0 && index < phase)
                const active = running && index === phase
                return (
                  <button
                    key={step.id}
                    type="button"
                    className="relay-node relay-press min-h-[112px] rounded-lg border border-[#25272D] bg-[#111216] p-3 text-left"
                    data-active={active}
                    data-done={done}
                    onClick={() => openPanel(index)}
                  >
                    <div className="flex items-center justify-between font-mono text-[9px] text-[#686B75]">
                      <span>{step.id}</span>
                      <span className={done ? 'text-[#32D583]' : active ? 'text-[#A78BFA]' : ''}>{done ? 'DONE' : active ? 'LIVE' : step.type.toUpperCase()}</span>
                    </div>
                    <div className="mt-5 text-[11px] font-medium text-[#E1E2E5]">{step.name}</div>
                    <div className="mt-1 text-[9px] leading-4 text-[#686B75]">{step.detail}</div>
                  </button>
                )
              })}
            </div>
          </div>

          <GateControl />

          <div
            className="relay-panel absolute inset-y-0 right-0 z-20 w-[min(300px,88%)] border-l border-[#353841] bg-[#15171B] p-5"
            style={{
              transform: `translateX(${(1 - panel.display) * 104}%)`,
              opacity: 0.45 + panel.display * 0.55,
              pointerEvents: panel.display > 0.05 ? 'auto' : 'none',
            }}
            aria-hidden={panel.display < 0.05}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-mono text-[9px] text-[#686B75]">STEP {STEPS[selected].id}</div>
                <h3 className="mt-2 text-[15px] font-medium tracking-[-0.02em] text-[#F4F4F5]">{STEPS[selected].name}</h3>
              </div>
              <button type="button" onClick={() => panel.animateTo(0)} className="relay-press flex h-7 w-7 items-center justify-center rounded-md border border-[#353841] text-[13px] text-[#A0A3AD]">×</button>
            </div>
            <p className="mt-3 text-[11px] leading-5 text-[#8A8D97]">{STEPS[selected].detail}. Inspect inputs, policy, and output without leaving the workflow.</p>
            <div className="mt-6 space-y-2">
              {['Inputs mapped', 'Permissions scoped', 'Trace retained'].map((item) => (
                <div key={item} className="flex items-center justify-between border-b border-[#25272D] py-2 text-[10px] text-[#A0A3AD]">
                  <span>{item}</span><span className="text-[#32D583]">Ready</span>
                </div>
              ))}
            </div>
            <button type="button" onClick={() => panel.animateTo(0)} className="relay-press mt-6 w-full rounded-md bg-[#8B5CF6] px-3 py-2 text-[10px] font-medium text-white">Done</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AIWorkflowHome() {
  return (
    <div className="relay-shell w-full overflow-hidden">
      <style>{STYLES}</style>

      <header className="border-b border-[#1B1D22]">
        <nav className="mx-auto flex h-14 max-w-[1180px] items-center justify-between px-5 sm:px-8" aria-label="Primary navigation">
          <a href="#" className="relay-press flex items-center gap-2 text-[13px] font-semibold tracking-[-0.02em] text-[#F4F4F5]">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#8B5CF6] text-[10px] text-white">R</span>
            Relay
          </a>
          <div className="relay-nav-links flex items-center gap-6 text-[11px] text-[#8A8D97]">
            <a href="#product" className="relay-press hover:text-[#F4F4F5]">Product</a>
            <a href="#principles" className="relay-press hover:text-[#F4F4F5]">Principles</a>
            <a href="#demo" className="relay-press hover:text-[#F4F4F5]">Demo</a>
          </div>
          <a href="#demo" className="relay-press rounded-md bg-[#F4F4F5] px-3 py-1.5 text-[10px] font-medium text-[#08090B]">Build a workflow</a>
        </nav>
      </header>

      <main>
        <section id="product" className="px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24">
          <div className="relay-hero mx-auto grid max-w-[1180px] grid-cols-[.82fr_1.18fr] items-center gap-12 lg:gap-16">
            <div className="relay-copy">
              <div className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#777A84]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#32D583]" />
                AI operations, under control
              </div>
              <h1 className="max-w-[560px] text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[.98] tracking-[-0.055em] text-[#F4F4F5]">
                Reliable AI<br />starts with the flow.
              </h1>
              <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-[#A0A3AD]">
                Design, run, and inspect agent workflows in one precise control surface. Every decision stays visible; every action stays interruptible.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#demo" className="relay-press rounded-md bg-[#8B5CF6] px-4 py-2.5 text-[11px] font-medium text-white">Try the live workflow</a>
                <button type="button" className="relay-press rounded-md border border-[#353841] px-4 py-2.5 text-[11px] font-medium text-[#D8DAE0] hover:border-[#4A4D57]">Watch 90 sec</button>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.08em] text-[#5E616A]">
                <span>Human gates</span><span>Versioned runs</span><span>Full traces</span>
              </div>
            </div>

            <WorkflowPreview />
          </div>
        </section>

        <section id="principles" className="border-y border-[#1B1D22] bg-[#0C0D10] px-5 py-12 sm:px-8">
          <div className="relay-proof mx-auto grid max-w-[1180px] grid-cols-3 divide-x divide-[#25272D]">
            {[
              ['01', 'See every decision', 'Inputs, model choices, approvals, and outputs stay in one trace.'],
              ['02', 'Interrupt safely', 'Stop, inspect, or redirect a run without waiting for the interface.'],
              ['03', 'Move with intent', 'Direct manipulation and restrained motion make state changes predictable.'],
            ].map(([number, title, description]) => (
              <article key={number} className="px-5 first:pl-0 last:pr-0 sm:px-8">
                <div className="font-mono text-[9px] text-[#686B75]">{number}</div>
                <h2 className="mt-4 text-[13px] font-medium text-[#E6E7EA]">{title}</h2>
                <p className="mt-2 text-[11px] leading-5 text-[#777A84]">{description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-8 font-mono text-[9px] text-[#5E616A] sm:px-8">
        <span>RELAY / AI WORKFLOW CONTROL</span>
        <span>© 2026</span>
      </footer>
    </div>
  )
}
