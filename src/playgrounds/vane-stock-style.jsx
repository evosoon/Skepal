export const meta = {
  title: 'Vane Stock Page Style',
  description: 'Vane 个股页面设计系统展示 — 金融数据卡片、涨跌语义色、玻璃态效果、几何装饰、数据密度排版。可作为金融类 UI 开发的风格参考。',
  date: '2026-05-11',
  tags: ['finance', 'stock', 'dashboard', 'dark-theme', 'glass-morphism', 'data-dense'],
  status: 'draft',
  brief: {
    request: `Vane 设计语言 — 创作风格指南

一、设计理念

「让数据自己说话」— 界面是数据的画框，不是主角。所有视觉决策服务于一个目标：让用户在最短时间内捕获关键信息，同时感受到工具的专业与可靠。

二、核心原则

1. 暗色即画布
   深色背景不是"暗黑模式"，而是设计的起点。就像天文台的暗室让星光更清晰，深色画布让数据色彩更纯粹、层次更分明。背景应该"消失"，让内容浮现。

2. 层次即呼吸
   用 4 级背景色构建空间纵深（页面 → 卡片 → 交互态 → 嵌套），用 4 级文字色建立阅读节奏（标题 → 正文 → 辅助 → 占位）。层次不靠线条分割，靠色彩明度的微妙递进。

3. 语义即直觉
   颜色承载含义而非装饰。涨跌用固定的红绿对，品牌色各有职责（蓝=中性/链接，橙=警告/震荡，紫=AI/特殊）。用户不需要读图例，色彩本身就是信息。

4. 密度即效率
   信息密度高但不拥挤。秘诀在于：紧凑的字号（11-14px 为主）、精确的间距节奏（6/12/16px 三档）、等宽数字对齐。留白不是空，是让眼睛知道"这组数据到此为止"。

5. 克制即高级
   动效存在但不抢戏 — 160ms 的过渡让交互有反馈但不拖沓，0.35s 的入场让元素"生长"而非"弹跳"。玻璃态只用在浮动层，几何装饰只有 4% 透明度。每一个视觉效果都应该让用户感觉"恰到好处"而非"哇好炫"。

6. 半透明即空间
   卡片不用实色背景，用低透明度的深色。这让界面有"透气感"，暗示背后还有层次。配合微妙的 hover 态变化，整个界面像是有深度的空间而非平面贴纸。

三、视觉节奏

- 大节奏：页面分为"英雄区"（图表+报价，视觉重心）和"数据区"（卡片网格，信息密集）
- 中节奏：卡片之间用 16px 间距呼吸，卡片内部用 12px 分组
- 小节奏：数据项之间 6px，label 和 value 紧贴（1.5px gap），形成"词组"感

四、装饰哲学

装饰是"被发现的"而非"被展示的"：
- 几何纹理（网格/斜线/点阵）只在卡片角落以 4% 透明度存在
- 氛围渐变用 radial-gradient 暗示情绪（看多/看空），但不干扰阅读
- 噪点纹理 2.5% 透明度，给纯色背景一丝"质感"
- 所有装饰都用 mask-image 做边缘渐隐，绝不硬切

五、动效哲学

- 入场：从"略小+略低"到"正常"（scale 0.97 + translateY 6px），模拟"浮现"
- 交错：多个元素依次入场，每项延迟 50ms，形成"瀑布"节奏
- 反馈：价格变动时背景闪烁（涨红/跌绿 25% opacity → 透明），0.6s 渐隐
- 过渡：所有状态切换 160ms，曲线用 ease-out 变体，"快起慢停"

六、适用场景

此风格适合：数据密集型仪表盘、金融终端、监控面板、分析工具、专业级 SaaS
不适合：消费级产品、内容阅读类、儿童/娱乐类、需要大量留白的品牌站`,
    mood: '专业克制、暗色纵深、数据驱动、高密度呼吸感、工具级信赖感',
    audience: '需要高效获取信息的专业用户 — 交易者、分析师、工程师、数据从业者',
    references: '视觉气质参考：Bloomberg Terminal 的信息密度 + Linear 的暗色质感 + Figma 的层次克制 + 天文台暗室的"让光自己说话"',
    constraints: '语义色不可随意替换（红涨绿跌是领域共识）；数字必须等宽对齐；装饰永远不能干扰数据阅读；动效总时长不超过 0.4s；移动端优先保证数据可读性而非视觉效果',
  },
  style: {
    mood: 'professional, data-dense, premium financial',
    audience: '金融产品用户、量化交易者',
    useCase: '个股详情页、金融数据面板',
  },
  palette: {
    name: 'Vane Finance Dark',
    colors: ['#0E1117', '#161B26', '#1C2230', '#E5334B', '#0DB070', '#2563EB', '#F0F4FF'],
    source: 'custom',
  },
}

// ─── 色彩 Token ───────────────────────────────────────────────
const tokens = {
  bg0: '#0E1117',
  bg1: '#161B26',
  bg2: '#1C2230',
  bg3: '#232D3F',
  t1: '#F0F4FF',
  t2: '#9AABCA',
  t3: '#6678A0',
  t4: '#3D4F6E',
  b1: '#2A3347',
  b2: '#374155',
  rise: '#E5334B',
  riseLight: 'rgba(229,51,75,0.12)',
  fall: '#0DB070',
  fallLight: 'rgba(13,176,112,0.12)',
  blue: '#2563EB',
  blueLight: 'rgba(37,99,235,0.15)',
  orange: '#D97706',
  purple: '#7C3AED',
  glassBg: 'rgba(22,27,38,0.72)',
  glassBorder: 'rgba(255,255,255,0.06)',
  sectionBg: 'rgba(22,27,38,0.3)',
  sectionBgHover: 'rgba(22,27,38,0.45)',
}

// ─── 全局样式（动效 + 噪点）─────────────────────────────────
const STYLE_INJECT = `
@keyframes vane-reveal {
  from { opacity: 0; transform: translateY(6px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0)   scale(1); }
}
.vane-reveal { animation: vane-reveal 0.35s cubic-bezier(.25,.1,.25,1) both; }
.vane-d-1 { animation-delay: 50ms; }
.vane-d-2 { animation-delay: 100ms; }
.vane-d-3 { animation-delay: 150ms; }
.vane-d-4 { animation-delay: 200ms; }
.vane-d-5 { animation-delay: 250ms; }
.vane-d-6 { animation-delay: 300ms; }
.vane-row { transition: background-color 160ms cubic-bezier(.25,.1,.25,1); }
.vane-row:hover { background-color: rgba(22,27,38,0.55); }
.vane-card { transition: background-color 160ms cubic-bezier(.25,.1,.25,1); }
.vane-card:hover { background-color: rgba(22,27,38,0.45); }
.vane-noise {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
  opacity: 0.025;
}
`

// ─── 子组件 ───────────────────────────────────────────────────

function Reveal({ children, delay = 0, className = '' }) {
  const cls = delay > 0 ? `vane-reveal vane-d-${delay} ${className}` : `vane-reveal ${className}`
  return <div className={cls}>{children}</div>
}

function SectionCard({ children, className = '', decoration, ambient }) {
  return (
    <div
      className={`vane-card relative overflow-hidden rounded-[12px] ${className}`}
      style={{ background: tokens.sectionBg }}
    >
      {ambient}
      <div className="vane-noise pointer-events-none absolute inset-0" />
      {decoration}
      <div className="relative">{children}</div>
    </div>
  )
}

function AmbientGradient({ tone = 'bear' }) {
  const color = tone === 'bull' ? 'rgba(229,51,75,0.10)' : 'rgba(13,176,112,0.08)'
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ background: `radial-gradient(ellipse 60% 50% at 20% 30%, ${color}, transparent 70%)` }}
    />
  )
}

function CardHeader({ icon, title, subtitle, actions }) {
  return (
    <div
      className="flex items-center justify-between px-3 py-2"
      style={{ borderBottom: `1px solid ${tokens.bg0}` }}
    >
      <span className="text-[12px] font-semibold flex items-center gap-[6px]" style={{ color: tokens.t1 }}>
        {icon && <span style={{ color: tokens.t3 }}>{icon}</span>}
        {title}
      </span>
      <div className="flex items-center gap-1.5">
        {subtitle && <span className="text-[11px]" style={{ color: tokens.t3 }}>{subtitle}</span>}
        {actions}
      </div>
    </div>
  )
}

function TabGroup({ tabs, active }) {
  return (
    <div className="inline-flex gap-px p-[2px] rounded-[8px]" style={{ background: tokens.bg2 }}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className="px-2.5 py-[4px] text-[11px] font-medium rounded-[6px] border-none cursor-pointer transition-all duration-[160ms]"
          style={{
            background: tab === active ? tokens.bg1 : 'transparent',
            color: tab === active ? tokens.t1 : tokens.t3,
            boxShadow: tab === active ? '0 1px 3px rgba(0,0,0,.2)' : 'none',
            fontWeight: tab === active ? 600 : 500,
            transitionTimingFunction: 'cubic-bezier(.25,.1,.25,1)',
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

function ChangeBadge({ value }) {
  const isPositive = value >= 0
  return (
    <span
      className="inline-block px-[6px] py-[2px] rounded text-[11px] font-bold"
      style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontVariantNumeric: 'tabular-nums',
        background: isPositive ? tokens.riseLight : tokens.fallLight,
        color: isPositive ? tokens.rise : tokens.fall,
      }}
    >
      {isPositive ? '+' : ''}{value.toFixed(2)}%
    </span>
  )
}

function QuoteItem({ label, value, color }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[11px] whitespace-nowrap" style={{ color: tokens.t3 }}>{label}</span>
      <span
        className="text-[12px] leading-tight font-medium"
        style={{ fontFamily: 'JetBrains Mono, monospace', fontVariantNumeric: 'tabular-nums', color: color || tokens.t1 }}
      >
        {value}
      </span>
    </div>
  )
}

function GridDecoration() {
  return (
    <div
      className="pointer-events-none absolute top-0 right-0 w-48 h-32 opacity-[0.04]"
      style={{
        backgroundImage: `linear-gradient(${tokens.t1} 1px, transparent 1px), linear-gradient(90deg, ${tokens.t1} 1px, transparent 1px)`,
        backgroundSize: '12px 12px',
        maskImage: 'radial-gradient(circle at 100% 0%, black 0%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(circle at 100% 0%, black 0%, transparent 70%)',
      }}
    />
  )
}

function DiagonalDecoration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.04]"
      style={{
        background: `repeating-linear-gradient(45deg, ${tokens.t1} 0 1px, transparent 1px 8px)`,
        maskImage: 'radial-gradient(circle at 100% 0%, black 0%, transparent 60%)',
        WebkitMaskImage: 'radial-gradient(circle at 100% 0%, black 0%, transparent 60%)',
      }}
    />
  )
}

function ProgressBar({ value, color, max = 100 }) {
  return (
    <div className="flex-1 h-[6px] rounded-full overflow-hidden" style={{ background: tokens.bg2 }}>
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${(value / max) * 100}%`, background: color }}
      />
    </div>
  )
}

function FlowBar({ label, value, maxAbs, tierIndex }) {
  const isPositive = value >= 0
  const width = Math.abs(value) / maxAbs * 100
  const posColors = ['#C42B1A', '#E5334B', '#F05A6A', '#F7A0A8']
  const negColors = ['#0A8A56', '#0DB070', '#3CC98A', '#82DEB1']
  const color = isPositive ? posColors[tierIndex] : negColors[tierIndex]

  return (
    <div className="flex items-center gap-2">
      <span className="text-[11px] w-7 shrink-0" style={{ color: tokens.t3 }}>{label}</span>
      <div className="flex-1 flex items-center h-[14px]">
        <div className="w-1/2 flex justify-end">
          {!isPositive && (
            <div className="h-[10px] rounded-l-sm transition-all duration-500" style={{ width: `${width}%`, background: color }} />
          )}
        </div>
        <div className="w-px h-full" style={{ background: tokens.b1 }} />
        <div className="w-1/2">
          {isPositive && (
            <div className="h-[10px] rounded-r-sm transition-all duration-500" style={{ width: `${width}%`, background: color }} />
          )}
        </div>
      </div>
      <span
        className="text-[11px] w-14 text-right font-medium"
        style={{ fontFamily: 'JetBrains Mono, monospace', fontVariantNumeric: 'tabular-nums', color: isPositive ? tokens.rise : tokens.fall }}
      >
        {isPositive ? '+' : ''}{value.toFixed(1)}万
      </span>
    </div>
  )
}

// ─── 主组件 ───────────────────────────────────────────────────

export default function VaneStockStyle() {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 space-y-4" style={{ background: tokens.bg0, fontFamily: 'DM Sans, system-ui, sans-serif' }}>
      <style>{STYLE_INJECT}</style>

      {/* ═══ 色彩系统展示 ═══ */}
      <Reveal delay={1}>
      <section className="space-y-3">
        <h2 className="text-[13px] font-semibold" style={{ color: tokens.t1 }}>色彩系统 Color Tokens</h2>
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'bg-0', color: tokens.bg0 },
            { label: 'bg-1', color: tokens.bg1 },
            { label: 'bg-2', color: tokens.bg2 },
            { label: 'bg-3', color: tokens.bg3 },
          ].map(({ label, color }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <div className="w-full h-10 rounded-[8px] border" style={{ background: color, borderColor: tokens.b1 }} />
              <span className="text-[11px]" style={{ color: tokens.t3 }}>{label}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-3">
          {[
            { label: 'rise', color: tokens.rise },
            { label: 'fall', color: tokens.fall },
            { label: 'blue', color: tokens.blue },
            { label: 'orange', color: tokens.orange },
            { label: 'purple', color: tokens.purple },
          ].map(({ label, color }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <div className="w-full h-8 rounded-[6px]" style={{ background: color }} />
              <span className="text-[11px]" style={{ color: tokens.t3 }}>{label}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-2">
          {[
            { label: 'text-1', color: tokens.t1 },
            { label: 'text-2', color: tokens.t2 },
            { label: 'text-3', color: tokens.t3 },
            { label: 'text-4', color: tokens.t4 },
          ].map(({ label, color }) => (
            <span key={label} className="text-[12px] font-medium" style={{ color }}>
              {label}: Aa
            </span>
          ))}
        </div>
      </section>
      </Reveal>

      {/* ═══ 报价卡片（英雄区，带氛围渐变）═══ */}
      <Reveal delay={2}>
      <section>
        <SectionCard ambient={<AmbientGradient tone="bear" />}>
          <div className="px-4 py-3 space-y-3">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-[22px] font-bold" style={{ color: tokens.t1 }}>深中华A</span>
              <span className="text-[13px]" style={{ fontFamily: 'JetBrains Mono, monospace', color: tokens.t3 }}>sz000017</span>
              <span className="text-[24px] font-bold leading-none" style={{ fontFamily: 'JetBrains Mono, monospace', fontVariantNumeric: 'tabular-nums', color: tokens.fall }}>6.37</span>
              <ChangeBadge value={-0.93} />
              <span className="text-[14px] font-bold" style={{ fontFamily: 'JetBrains Mono, monospace', fontVariantNumeric: 'tabular-nums', color: tokens.fall }}>-0.06</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <QuoteItem label="今开" value="6.44" />
              <QuoteItem label="昨收" value="6.43" />
              <QuoteItem label="最高" value="6.47" color={tokens.rise} />
              <QuoteItem label="最低" value="6.35" color={tokens.fall} />
              <QuoteItem label="成交量" value="3.25万" />
              <QuoteItem label="成交额" value="2072万" />
              <QuoteItem label="换手率" value="0.74%" />
              <QuoteItem label="市盈率" value="106.20" />
            </div>
          </div>
        </SectionCard>
      </section>
      </Reveal>

      {/* ═══ Tabs 展示 ═══ */}
      <Reveal delay={3}>
      <section className="space-y-3">
        <h2 className="text-[13px] font-semibold" style={{ color: tokens.t1 }}>Tabs 标签页</h2>
        <div className="flex flex-wrap gap-3">
          <TabGroup tabs={['分时', '日K', '周K', '月K']} active="日K" />
          <TabGroup tabs={['不复权', '前复权', '后复权']} active="前复权" />
          <TabGroup tabs={['BOLL', 'MA', 'MACD', 'KDJ', 'RSI']} active="BOLL" />
        </div>
      </section>
      </Reveal>

      {/* ═══ 双栏数据区 ═══ */}
      <Reveal delay={4}>
      <section className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-4">

        {/* 左栏：资金流向 */}
        <SectionCard decoration={<DiagonalDecoration />}>
          <CardHeader
            icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={tokens.blue} strokeWidth="2"><path d="M12 2v20M2 12h20" /></svg>}
            title="主力资金"
            subtitle="5日累计"
          />
          <div className="px-3 py-[10px] space-y-3">
            <div>
              <span className="text-[20px] font-bold" style={{ fontFamily: 'JetBrains Mono, monospace', fontVariantNumeric: 'tabular-nums', color: tokens.rise }}>
                +43.98万
              </span>
              <span className="text-[11px] ml-2" style={{ color: tokens.t3 }}>主力净流入（超大+大）</span>
            </div>
            <div className="space-y-1.5">
              <FlowBar label="超大" value={0.0} maxAbs={46.9} tierIndex={0} />
              <FlowBar label="大单" value={44.0} maxAbs={46.9} tierIndex={1} />
              <FlowBar label="中单" value={2.9} maxAbs={46.9} tierIndex={2} />
              <FlowBar label="小单" value={-46.9} maxAbs={46.9} tierIndex={3} />
            </div>
          </div>
        </SectionCard>

        {/* 右栏：AI 综合评估 */}
        <SectionCard decoration={<GridDecoration />}>
          <div className="px-3 py-[10px] space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[13px] font-semibold" style={{ color: tokens.t1 }}>深中华A</span>
                <span className="text-[11px]" style={{ fontFamily: 'JetBrains Mono, monospace', color: tokens.t3 }}>sz000017</span>
                <span className="text-[13px] font-medium" style={{ fontFamily: 'JetBrains Mono, monospace', fontVariantNumeric: 'tabular-nums', color: tokens.t1 }}>6.37</span>
                <ChangeBadge value={-0.93} />
              </div>
              <div
                className="px-2.5 py-1 rounded-[8px] text-[11px] font-bold shrink-0"
                style={{ color: tokens.orange, background: 'rgba(217,119,6,0.1)' }}
              >
                震荡（55）
              </div>
            </div>

            <div className="text-[12px] leading-relaxed" style={{ color: tokens.t2 }}>
              短期技术面偏弱，资金面中性，估值偏高需注意风险
            </div>

            <div className="space-y-2">
              {[
                { label: '技术', score: 42, color: tokens.fall },
                { label: '资金', score: 58, color: tokens.blue },
                { label: '估值', score: 35, color: tokens.orange },
              ].map(({ label, score, color }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="text-[11px] w-7" style={{ color: tokens.t3 }}>{label}</span>
                  <ProgressBar value={score} color={color} />
                  <span className="text-[11px] w-6 text-right font-medium" style={{ fontFamily: 'JetBrains Mono, monospace', fontVariantNumeric: 'tabular-nums', color: tokens.t1 }}>{score}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold" style={{ color: tokens.rise }}>看多信号</span>
                {['MACD金叉形成', '量能温和放大'].map((s) => (
                  <div key={s} className="flex items-center gap-1.5">
                    <span className="text-[10px]" style={{ color: tokens.rise }}>▲</span>
                    <span className="text-[11px]" style={{ color: tokens.t2 }}>{s}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold" style={{ color: tokens.fall }}>看空信号</span>
                {['跌破MA20支撑', 'KDJ死叉'].map((s) => (
                  <div key={s} className="flex items-center gap-1.5">
                    <span className="text-[10px]" style={{ color: tokens.fall }}>▼</span>
                    <span className="text-[11px]" style={{ color: tokens.t2 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>
      </section>
      </Reveal>

      {/* ═══ Badge 展示 ═══ */}
      <Reveal delay={5}>
      <section className="space-y-3">
        <h2 className="text-[13px] font-semibold" style={{ color: tokens.t1 }}>Badge 徽标</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <ChangeBadge value={2.35} />
          <ChangeBadge value={-1.20} />
          <span className="px-2.5 py-1 rounded-[8px] text-[11px] font-bold" style={{ color: tokens.rise, background: tokens.riseLight }}>
            强势看多（82）
          </span>
          <span className="px-2.5 py-1 rounded-[8px] text-[11px] font-bold" style={{ color: tokens.fall, background: tokens.fallLight }}>
            看空（35）
          </span>
          <span className="px-2 py-0.5 rounded text-[11px] font-medium" style={{ color: '#059669', background: 'rgba(5,150,105,0.1)' }}>
            利好
          </span>
          <span className="px-2 py-0.5 rounded text-[11px] font-medium" style={{ color: '#D97706', background: 'rgba(217,119,6,0.1)' }}>
            重要
          </span>
          <span className="px-2 py-0.5 rounded text-[11px] font-medium" style={{ color: tokens.blue, background: tokens.blueLight }}>
            公告
          </span>
        </div>
      </section>
      </Reveal>

      {/* ═══ 新闻列表 ═══ */}
      <Reveal delay={6}>
      <section>
        <SectionCard>
          <CardHeader
            icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={tokens.blue} strokeWidth="2"><rect x="2" y="3" width="20" height="18" rx="2" /><path d="M8 7h8M8 11h8M8 15h4" /></svg>}
            title="快讯"
            actions={<TabGroup tabs={['全部', '相关']} active="全部" />}
          />
          <div className="divide-y" style={{ borderColor: tokens.bg0 }}>
            {[
              { title: '创业板指突破3900点', time: '11:01', digest: '创业板指近期持续走高，盘中拉升涨近2.75%，突破3900点，为2015年6月16日以来新高。' },
              { title: '沪深两市成交额突破1万亿', time: '09:52', digest: '沪深两市成交额突破1万亿，较上一日此时放量超2000亿。', tag: '重要' },
              { title: '存储芯片概念大面积高开', time: '09:30', digest: '江波龙、同有科技涨超10%，普冉股份、佰维存储、朗科科技等涨超5%。', tag: '利好' },
            ].map((item) => (
              <div key={item.title} className="vane-row px-3 py-2.5 cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-medium line-clamp-1" style={{ color: tokens.t1 }}>{item.title}</span>
                  {item.tag && (
                    <span
                      className="px-1.5 py-px rounded text-[10px] font-medium shrink-0"
                      style={{
                        color: item.tag === '重要' ? '#D97706' : '#059669',
                        background: item.tag === '重要' ? 'rgba(217,119,6,0.1)' : 'rgba(5,150,105,0.1)',
                      }}
                    >
                      {item.tag}
                    </span>
                  )}
                  <span className="text-[10px] shrink-0 ml-auto" style={{ fontFamily: 'JetBrains Mono, monospace', fontVariantNumeric: 'tabular-nums', color: tokens.t4 }}>{item.time}</span>
                </div>
                <p className="text-[11px] line-clamp-2 mt-1 leading-relaxed" style={{ color: tokens.t3 }}>{item.digest}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>
      </Reveal>

      {/* ═══ 玻璃态效果（仅用于浮层）═══ */}
      <Reveal delay={6}>
      <section className="space-y-3">
        <h2 className="text-[13px] font-semibold" style={{ color: tokens.t1 }}>Glass Morphism 玻璃态</h2>
        <div
          className="relative rounded-[12px] p-4 overflow-hidden"
          style={{
            background: tokens.glassBg,
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: `1px solid ${tokens.glassBorder}`,
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[8px] flex items-center justify-center" style={{ background: 'rgba(124,58,237,0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={tokens.purple} strokeWidth="2">
                <path d="M12 3l1.5 4.5H18l-3.5 2.5L16 14.5 12 12l-4 2.5 1.5-4.5L6 7.5h4.5z" />
              </svg>
            </div>
            <div>
              <span className="text-[13px] font-semibold block" style={{ color: tokens.t1 }}>AI 分析面板</span>
              <p className="text-[11px] mt-0.5" style={{ color: tokens.t3 }}>仅用于浮层（侧边栏 / 浮动窗口）— 主内容区不使用玻璃态</p>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* ═══ 设计规范速查 ═══ */}
      <Reveal delay={6}>
      <section className="space-y-3">
        <h2 className="text-[13px] font-semibold" style={{ color: tokens.t1 }}>设计规范速查</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: '圆角', items: ['sm: 8px', 'md: 12px', 'lg: 16px'] },
            { label: '字体', items: ['Sans: DM Sans', 'Mono: JetBrains Mono', 'Base: 14px'] },
            { label: '动效', items: ['过渡: 160ms', '入场: 0.35s', '曲线: cubic-bezier(.25,.1,.25,1)'] },
            { label: '间距', items: ['组间: 16px', '组内: 12px', '紧凑: 6px'] },
          ].map(({ label, items }) => (
            <div key={label} className="vane-card rounded-[8px] p-3" style={{ background: tokens.bg1, border: `1px solid ${tokens.b1}` }}>
              <span className="text-[11px] font-semibold" style={{ color: tokens.t1 }}>{label}</span>
              <div className="mt-2 space-y-1">
                {items.map((item) => (
                  <div key={item} className="text-[10px]" style={{ fontFamily: 'JetBrains Mono, monospace', color: tokens.t3 }}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      </Reveal>
    </div>
  )
}
