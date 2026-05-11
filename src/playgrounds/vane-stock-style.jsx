export const meta = {
  title: 'Vane Stock Page Style',
  description: 'Vane 个股页面设计系统展示 — 金融数据卡片、涨跌语义色、玻璃态效果、几何装饰、数据密度排版。可作为金融类 UI 开发的风格参考。',
  date: '2026-05-11',
  tags: ['finance', 'stock', 'dashboard', 'dark-theme', 'glass-morphism', 'data-dense'],
  status: 'draft',
  brief: {
    request: `金融个股详情页设计系统。要求：暗色优先、高信息密度、专业金融感。涵盖报价展示、K线图表、资金流向、AI评估、新闻快讯等模块。

设计提示词（可直接复制给其他项目）：
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
请按照以下设计规范生成组件：

【色彩系统】
- 背景4级：bg-0(#0E1117) → bg-1(#161B26) → bg-2(#1C2230) → bg-3(#232D3F)
- 文字4级：text-1(#F0F4FF) → text-2(#9AABCA) → text-3(#6678A0) → text-4(#3D4F6E)
- 边框：border-1(#2A3347)、border-2(#374155)
- 涨跌语义：涨=#E5334B(rise)、跌=#0DB070(fall)；浅色变体用 12% opacity
- 品牌色：blue(#2563EB)、orange(#D97706)、purple(#7C3AED)、green(#059669)
- 阴影：ss(0 1px 3px rgba(0,0,0,.2))、sm(0 4px 16px rgba(0,0,0,.3))

【排版】
- 字体：Sans=DM Sans + Noto Sans SC；Mono=JetBrains Mono
- 基础字号14px；自定义：2xs(9px)、xs(10px)、sm(11px)
- 所有数字用 font-mono tabular-nums；价格用 font-bold
- 正数前缀+号，涨=text-rise，跌=text-fall

【圆角与间距】
- 圆角：sm(8px)、md(12px)、lg(16px)；Tab按钮内部6px
- 卡片内边距：header=px-3 py-2，body=px-3 py-[10px]
- 组件间距：gap-4(16px)；组内：gap-3(12px)；紧凑：gap-1.5(6px)

【卡片组件】
- 容器用半透明背景 rgba(22,27,38,0.3)，圆角12px
- CardHeader：flex justify-between，标题=11px font-semibold，图标=12px
- 可选几何装饰：网格纹理/对角线/点阵，opacity-[0.04]，pointer-events-none
- 装饰用 mask-image radial-gradient 做渐隐

【Tabs标签页】
- 容器：bg-bg-2, p-[2px], rounded-[8px]
- 按钮：compact=px-2 py-[3px] text-xs；normal=px-[9px] py-[3px] text-sm
- 激活态：bg-bg-1 text-text-1 shadow-ss font-semibold
- 非激活：text-text-3 hover:text-text-1

【Badge徽标】
- 涨跌幅：px-[6px] py-[1px] rounded font-mono text-xs font-bold
- 涨=bg-rise/12% + text-rise；跌=bg-fall/12% + text-fall
- 新闻标签：px-1.5 py-px rounded text-[10px] font-medium

【动效】
- 标准过渡：160ms cubic-bezier(.25,.1,.25,1)
- 入场动画：scale(0.97)+translateY(6px)→normal，0.35s
- 交错延迟：每项+50ms
- 价格闪烁：背景色 0.6s ease-out 渐隐

【玻璃态】
- background: rgba(22,27,38,0.72)
- backdrop-filter: blur(16px)
- border: 1px solid rgba(255,255,255,0.06)

【图表色值】
- K线：涨=#E5334B 跌=#0DB070
- 均线：MA5=#3370FF MA10=#FF9500 MA20=#8B5CF6
- 网格/轴线：#2A334766
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    mood: '专业金融感、暗色优先、高信息密度但不拥挤、克制动效、玻璃态点缀',
    audience: '金融产品用户、量化交易者、个人投资者',
    references: 'Vane 项目个股页面 (vane-web/src/app/[symbol]/page.tsx)，参考 Linear 的暗色质感 + 金融数据密度',
    constraints: '涨红跌绿（中国市场惯例）；数字必须等宽字体；卡片用半透明背景而非实色；动效不超过0.35s；移动端单列自适应',
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

// ─── 子组件 ───────────────────────────────────────────────────

function SectionCard({ children, className = '', decoration }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[12px] transition-colors duration-200 ${className}`}
      style={{ background: tokens.sectionBg }}
    >
      {decoration}
      <div className="relative">{children}</div>
    </div>
  )
}

function CardHeader({ icon, title, subtitle, actions }) {
  return (
    <div
      className="flex items-center justify-between px-3 py-2"
      style={{ borderBottom: `1px solid ${tokens.bg0}` }}
    >
      <span className="text-[11px] font-semibold flex items-center gap-[5px]" style={{ color: tokens.t1 }}>
        {icon && <span style={{ color: tokens.t3 }}>{icon}</span>}
        {title}
      </span>
      <div className="flex items-center gap-1">
        {subtitle && <span className="text-[10px]" style={{ color: tokens.t3 }}>{subtitle}</span>}
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
          className="px-2 py-[3px] text-[10px] font-medium rounded-[6px] border-none cursor-pointer transition-all"
          style={{
            background: tab === active ? tokens.bg1 : 'transparent',
            color: tab === active ? tokens.t1 : tokens.t3,
            boxShadow: tab === active ? '0 1px 3px rgba(0,0,0,.2)' : 'none',
            fontWeight: tab === active ? 600 : 500,
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
      className="inline-block px-[6px] py-[1px] rounded text-[10px] font-bold"
      style={{
        fontFamily: 'JetBrains Mono, monospace',
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
      <span className="text-[10px] whitespace-nowrap" style={{ color: tokens.t3 }}>{label}</span>
      <span
        className="text-[10px] leading-tight"
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
      <span className="text-[10px] w-6 shrink-0" style={{ color: tokens.t3 }}>{label}</span>
      <div className="flex-1 flex items-center h-[14px]">
        <div className="w-1/2 flex justify-end">
          {!isPositive && (
            <div className="h-[10px] rounded-l-sm" style={{ width: `${width}%`, background: color }} />
          )}
        </div>
        <div className="w-px h-full" style={{ background: tokens.b1 }} />
        <div className="w-1/2">
          {isPositive && (
            <div className="h-[10px] rounded-r-sm" style={{ width: `${width}%`, background: color }} />
          )}
        </div>
      </div>
      <span
        className="text-[10px] w-14 text-right"
        style={{ fontFamily: 'JetBrains Mono, monospace', color: isPositive ? tokens.rise : tokens.fall }}
      >
        {isPositive ? '+' : ''}{value.toFixed(1)}万
      </span>
    </div>
  )
}

// ─── 主组件 ───────────────────────────────────────────────────

export default function VaneStockStyle() {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 space-y-6" style={{ background: tokens.bg0, fontFamily: 'DM Sans, system-ui, sans-serif' }}>

      {/* ═══ 色彩系统展示 ═══ */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold" style={{ color: tokens.t1 }}>色彩系统 Color Tokens</h2>
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'bg-0', color: tokens.bg0 },
            { label: 'bg-1', color: tokens.bg1 },
            { label: 'bg-2', color: tokens.bg2 },
            { label: 'bg-3', color: tokens.bg3 },
          ].map(({ label, color }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="w-full h-10 rounded-[8px] border" style={{ background: color, borderColor: tokens.b1 }} />
              <span className="text-[9px]" style={{ color: tokens.t3 }}>{label}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-2">
          {[
            { label: 'rise', color: tokens.rise },
            { label: 'fall', color: tokens.fall },
            { label: 'blue', color: tokens.blue },
            { label: 'orange', color: tokens.orange },
            { label: 'purple', color: tokens.purple },
          ].map(({ label, color }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="w-full h-8 rounded-[6px]" style={{ background: color }} />
              <span className="text-[9px]" style={{ color: tokens.t3 }}>{label}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3 mt-2">
          {[
            { label: 'text-1', color: tokens.t1 },
            { label: 'text-2', color: tokens.t2 },
            { label: 'text-3', color: tokens.t3 },
            { label: 'text-4', color: tokens.t4 },
          ].map(({ label, color }) => (
            <span key={label} className="text-[11px] font-medium" style={{ color }}>
              {label}: Aa
            </span>
          ))}
        </div>
      </section>

      {/* ═══ 报价卡片 ═══ */}
      <section>
        <SectionCard>
          <div className="px-3 py-3 space-y-3">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-xl font-semibold" style={{ color: tokens.t1 }}>深中华A</span>
              <span className="text-sm" style={{ fontFamily: 'JetBrains Mono, monospace', color: tokens.t3 }}>sz000017</span>
              <span className="text-xl font-bold" style={{ fontFamily: 'JetBrains Mono, monospace', color: tokens.fall }}>6.37</span>
              <ChangeBadge value={-0.93} />
              <span className="text-sm font-bold" style={{ fontFamily: 'JetBrains Mono, monospace', color: tokens.fall }}>-0.06</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
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

      {/* ═══ Tabs 展示 ═══ */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold" style={{ color: tokens.t1 }}>Tabs 标签页</h2>
        <div className="flex flex-wrap gap-3">
          <TabGroup tabs={['分时', '日K', '周K', '月K']} active="日K" />
          <TabGroup tabs={['不复权', '前复权', '后复权']} active="前复权" />
          <TabGroup tabs={['BOLL', 'MA', 'MACD', 'KDJ', 'RSI']} active="BOLL" />
        </div>
      </section>

      {/* ═══ 双栏数据区 ═══ */}
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
              <span className="text-lg font-bold" style={{ fontFamily: 'JetBrains Mono, monospace', color: tokens.rise }}>
                +43.98万
              </span>
              <span className="text-[10px] ml-2" style={{ color: tokens.t3 }}>主力净流入（超大+大）</span>
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
                <span className="text-sm font-semibold" style={{ color: tokens.t1 }}>深中华A</span>
                <span className="text-[10px]" style={{ fontFamily: 'JetBrains Mono, monospace', color: tokens.t3 }}>sz000017</span>
                <span className="text-sm" style={{ fontFamily: 'JetBrains Mono, monospace', color: tokens.t1 }}>6.37</span>
                <ChangeBadge value={-0.93} />
              </div>
              <div
                className="px-3 py-1 rounded-[8px] text-[10px] font-bold shrink-0"
                style={{ color: tokens.orange, background: 'rgba(217,119,6,0.1)' }}
              >
                震荡（55）
              </div>
            </div>

            <div className="text-[11px]" style={{ color: tokens.t2 }}>
              短期技术面偏弱，资金面中性，估值偏高需注意风险
            </div>

            <div className="space-y-2">
              {[
                { label: '技术', score: 42, color: tokens.fall },
                { label: '资金', score: 58, color: tokens.blue },
                { label: '估值', score: 35, color: tokens.orange },
              ].map(({ label, score, color }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="text-[10px] w-6" style={{ color: tokens.t3 }}>{label}</span>
                  <ProgressBar value={score} color={color} />
                  <span className="text-[10px] w-5 text-right" style={{ fontFamily: 'JetBrains Mono, monospace', color: tokens.t1 }}>{score}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="space-y-1">
                <span className="text-[10px] font-medium" style={{ color: tokens.rise }}>看多信号</span>
                {['MACD金叉形成', '量能温和放大'].map((s) => (
                  <div key={s} className="flex items-center gap-1.5">
                    <span className="text-[9px]" style={{ color: tokens.rise }}>▲</span>
                    <span className="text-[10px]" style={{ color: tokens.t2 }}>{s}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-medium" style={{ color: tokens.fall }}>看空信号</span>
                {['跌破MA20支撑', 'KDJ死叉'].map((s) => (
                  <div key={s} className="flex items-center gap-1.5">
                    <span className="text-[9px]" style={{ color: tokens.fall }}>▼</span>
                    <span className="text-[10px]" style={{ color: tokens.t2 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>
      </section>

      {/* ═══ Badge 展示 ═══ */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold" style={{ color: tokens.t1 }}>Badge 徽标</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <ChangeBadge value={2.35} />
          <ChangeBadge value={-1.20} />
          <span className="px-3 py-1 rounded-[8px] text-[10px] font-bold" style={{ color: tokens.rise, background: tokens.riseLight }}>
            强势看多（82）
          </span>
          <span className="px-3 py-1 rounded-[8px] text-[10px] font-bold" style={{ color: tokens.fall, background: tokens.fallLight }}>
            看空（35）
          </span>
          <span className="px-1.5 py-px rounded text-[10px] font-medium" style={{ color: '#059669', background: 'rgba(5,150,105,0.1)' }}>
            利好
          </span>
          <span className="px-1.5 py-px rounded text-[10px] font-medium" style={{ color: '#D97706', background: 'rgba(217,119,6,0.1)' }}>
            重要
          </span>
          <span className="px-1.5 py-px rounded text-[10px] font-medium" style={{ color: tokens.blue, background: tokens.blueLight }}>
            公告
          </span>
        </div>
      </section>

      {/* ═══ 新闻列表 ═══ */}
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
              <div key={item.title} className="px-3 py-2.5 transition-colors cursor-pointer hover:opacity-80">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium line-clamp-1" style={{ color: tokens.t1 }}>{item.title}</span>
                  {item.tag && (
                    <span
                      className="px-1.5 py-px rounded text-[9px] font-medium shrink-0"
                      style={{
                        color: item.tag === '重要' ? '#D97706' : '#059669',
                        background: item.tag === '重要' ? 'rgba(217,119,6,0.1)' : 'rgba(5,150,105,0.1)',
                      }}
                    >
                      {item.tag}
                    </span>
                  )}
                  <span className="text-[9px] shrink-0 ml-auto" style={{ color: tokens.t4 }}>{item.time}</span>
                </div>
                <p className="text-[10px] line-clamp-2 mt-1" style={{ color: tokens.t3 }}>{item.digest}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>

      {/* ═══ 玻璃态效果 ═══ */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold" style={{ color: tokens.t1 }}>Glass Morphism 玻璃态</h2>
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
            <div className="w-8 h-8 rounded-[8px] flex items-center justify-center" style={{ background: 'rgba(124,58,237,0.15)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={tokens.purple} strokeWidth="2">
                <path d="M12 3l1.5 4.5H18l-3.5 2.5L16 14.5 12 12l-4 2.5 1.5-4.5L6 7.5h4.5z" />
              </svg>
            </div>
            <div>
              <span className="text-[11px] font-semibold" style={{ color: tokens.t1 }}>AI 分析面板</span>
              <p className="text-[10px]" style={{ color: tokens.t3 }}>侧边栏和浮动窗口使用玻璃态效果</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 设计规范速查 ═══ */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold" style={{ color: tokens.t1 }}>设计规范速查</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: '圆角', items: ['sm: 8px', 'md: 12px', 'lg: 16px'] },
            { label: '字体', items: ['Sans: DM Sans', 'Mono: JetBrains Mono', 'Base: 14px'] },
            { label: '动效', items: ['过渡: 160ms', '入场: 0.35s', '曲线: cubic-bezier(.25,.1,.25,1)'] },
            { label: '间距', items: ['组间: 16px', '组内: 12px', '紧凑: 6px'] },
          ].map(({ label, items }) => (
            <div key={label} className="rounded-[8px] p-3" style={{ background: tokens.bg1, border: `1px solid ${tokens.b1}` }}>
              <span className="text-[10px] font-semibold" style={{ color: tokens.t1 }}>{label}</span>
              <div className="mt-1.5 space-y-1">
                {items.map((item) => (
                  <div key={item} className="text-[9px]" style={{ fontFamily: 'JetBrains Mono, monospace', color: tokens.t3 }}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
