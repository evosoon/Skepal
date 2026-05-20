import { useState } from 'react'

export const meta = {
  title: 'AI Hot News',
  description: 'AI 热点新闻聚合面板 — 支持亮/暗主题切换，Claude 橙主题色，Quiet Density 设计风格。顶部导航 + Hero 焦点 + 复杂栅格布局。',
  date: '2026-05-19',
  tags: ['ai', 'news', 'dashboard', 'light-dark', 'quiet-density', 'claude-orange'],
  status: 'iterating',
  brief: {
    request: 'AI 热点新闻聚合面板，支持黑白主题，主题色 Claude 橙，Quiet Density 风格，顶部导航栏 + Hero 焦点区 + 复杂布局',
    mood: '素净克制、信息密集、呼吸感、工具级专业',
    audience: 'AI 从业者、研究者、技术管理者',
    references: 'Quiet Density 设计规范 — 密而不燥，素而不寡',
    constraints: '必须支持亮/暗双主题；主题色为 Claude 橙；容器靠色差区分不靠边框；数值等宽对齐',
  },
  style: {
    mood: 'quiet-density, professional, data-dense',
    audience: 'AI 从业者、技术阅读者',
    useCase: 'AI 新闻聚合、行业动态面板',
  },
  palette: {
    name: 'Claude Orange Dual',
    colors: ['#FFFFFF', '#F7F7F8', '#E8E8EC', '#DA7B2C', '#18181B', '#09090B'],
    source: 'custom',
  },
}

// ─── Quiet Density Tokens ────────────────────────────────────
function getTokens(dark) {
  if (dark) {
    return {
      ground:     '#09090B',
      surface:    '#111113',
      sunken:     '#1A1A1D',
      muted:      '#222225',
      tPrimary:   '#FAFAFA',
      tSecondary: '#A1A1AA',
      tTertiary:  '#71717A',
      tQuaternary:'#52525B',
      divider:    'rgba(255,255,255,0.06)',
      dividerStrong: 'rgba(255,255,255,0.10)',
      accent:     '#DA7B2C',
      accentLight:'rgba(218,123,44,0.14)',
      accentHover:'#E8923F',
      positive:   '#22C55E',
      positiveLight:'rgba(34,197,94,0.14)',
      negative:   '#EF4444',
      negativeLight:'rgba(239,68,68,0.14)',
      info:       '#3B82F6',
      infoLight:  'rgba(59,130,246,0.14)',
      warning:    '#EAB308',
      warningLight:'rgba(234,179,8,0.14)',
      glassBg:    'rgba(17,17,19,0.82)',
      glassBorder:'rgba(255,255,255,0.06)',
      sectionBg:  'rgba(17,17,19,0.4)',
      sectionBgHover:'rgba(17,17,19,0.55)',
      shadowMicro:'0 1px 3px rgba(0,0,0,0.24)',
      shadowLight:'0 4px 12px rgba(0,0,0,0.32)',
      shadowMid:  '0 8px 24px rgba(0,0,0,0.4)',
      blurStrength: '32px',
    }
  }
  return {
    ground:     '#FFFFFF',
    surface:    '#F7F7F8',
    sunken:     '#EDEDF0',
    muted:      '#E4E4E7',
    tPrimary:   '#18181B',
    tSecondary: '#52525B',
    tTertiary:  '#71717A',
    tQuaternary:'#A1A1AA',
    divider:    'rgba(0,0,0,0.06)',
    dividerStrong: 'rgba(0,0,0,0.10)',
    accent:     '#DA7B2C',
    accentLight:'rgba(218,123,44,0.08)',
    accentHover:'#C46A1D',
    positive:   '#16A34A',
    positiveLight:'rgba(22,163,74,0.08)',
    negative:   '#DC2626',
    negativeLight:'rgba(220,38,38,0.08)',
    info:       '#2563EB',
    infoLight:  'rgba(37,99,235,0.08)',
    warning:    '#CA8A04',
    warningLight:'rgba(202,138,4,0.08)',
    glassBg:    'rgba(255,255,255,0.82)',
    glassBorder:'rgba(0,0,0,0.06)',
    sectionBg:  'rgba(247,247,248,0.6)',
    sectionBgHover:'rgba(247,247,248,0.85)',
    shadowMicro:'0 1px 3px rgba(0,0,0,0.06)',
    shadowLight:'0 4px 12px rgba(0,0,0,0.08)',
    shadowMid:  '0 8px 24px rgba(0,0,0,0.12)',
    blurStrength: '28px',
  }
}

// ─── Mock Data ───────────────────────────────────────────────
const HERO_NEWS = {
  id: 1,
  title: 'Claude 4 Opus 发布，推理能力再创新高',
  summary: 'Anthropic 今日正式发布 Claude 4 Opus 模型，在复杂推理、代码生成、多语言理解等多项基准测试中刷新纪录。新模型采用全新的 Constitutional AI 2.0 训练框架，安全性与能力实现双重突破。',
  source: 'Anthropic Blog',
  author: 'Dario Amodei',
  time: '2 小时前',
  hot: 9823,
  tag: '模型发布',
  readTime: '8 分钟',
  comments: 1247,
  image: null,
}

const SECONDARY_NEWS = [
  { id: 2, title: 'EU AI Act 正式生效，全球首部全面 AI 立法落地', source: 'Reuters', time: '4 小时前', hot: 7651, tag: '政策监管', summary: '欧盟人工智能法案正式生效，标志着全球首部综合性 AI 监管立法落地实施。' },
  { id: 3, title: 'Google DeepMind 开源 AlphaFold 3 完整权重', source: 'Nature', time: '6 小时前', hot: 6432, tag: '开源', summary: 'DeepMind 宣布将 AlphaFold 3 完整模型权重开源至 HuggingFace，推动蛋白质结构预测研究。' },
]

const TRENDING = [
  { id: 4, title: 'OpenAI 推出 GPT-5 Turbo，多模态理解大幅提升', source: 'OpenAI Blog', time: '8h', hot: 5210, delta: 42, tag: '模型发布', category: 'model' },
  { id: 5, title: 'Meta 发布 Llama 4，开源社区再获强力模型', source: 'Meta AI', time: '12h', hot: 4823, delta: 28, tag: '开源', category: 'open-source' },
  { id: 6, title: '英伟达 H200 量产交付，AI 算力瓶颈缓解', source: "Tom's Hardware", time: '14h', hot: 4105, delta: -5, tag: '硬件', category: 'hardware' },
  { id: 7, title: 'AI 编程助手市场报告：GitHub Copilot 份额首次下降', source: 'The Information', time: '16h', hot: 3892, delta: 67, tag: '行业', category: 'industry' },
  { id: 8, title: 'Stability AI 推出 SD4，视频生成质量接近 Sora', source: 'Stability Blog', time: '1d', hot: 3421, delta: 12, tag: '模型发布', category: 'model' },
  { id: 9, title: '中国发布《生成式 AI 管理办法》修订版', source: '新华网', time: '1d', hot: 3105, delta: -3, tag: '政策监管', category: 'policy' },
  { id: 10, title: 'Anthropic 完成 $5B 融资，估值突破 $60B', source: 'Bloomberg', time: '2d', hot: 2834, delta: 8, tag: '融资', category: 'funding' },
  { id: 11, title: 'Mistral Large 2 发布，欧洲 AI 力量崛起', source: 'TechCrunch', time: '2d', hot: 2612, delta: 15, tag: '模型发布', category: 'model' },
]

const CATEGORIES = [
  { key: 'all', label: '全部' },
  { key: 'model', label: '模型' },
  { key: 'open-source', label: '开源' },
  { key: 'industry', label: '行业' },
  { key: 'policy', label: '政策' },
]

const NAV_ITEMS = [
  { key: 'hot', label: '热点', icon: '◈' },
  { key: 'model', label: '模型', icon: '◇' },
  { key: 'open-source', label: '开源', icon: '◆' },
  { key: 'industry', label: '行业', icon: '▣' },
  { key: 'policy', label: '政策', icon: '▤' },
  { key: 'research', label: '论文', icon: '▥' },
]

const HOT_TOPICS = [
  { label: 'Claude 4', count: 1247, trend: 89 },
  { label: 'GPT-5', count: 983, trend: -12 },
  { label: 'AI Agent', count: 876, trend: 156 },
  { label: 'EU AI Act', count: 724, trend: 43 },
  { label: 'Llama 4', count: 651, trend: 67 },
  { label: 'WWDC AI', count: 589, trend: 201 },
  { label: 'H200 GPU', count: 412, trend: 18 },
  { label: 'Sora', count: 387, trend: -8 },
]

const TIMELINE = [
  { time: '09:00', event: 'Anthropic 发布 Claude 4 Opus 技术报告', type: 'accent' },
  { time: '10:30', event: 'EU 议会正式通过 AI Act 实施细则', type: 'warning' },
  { time: '11:15', event: 'DeepMind AlphaFold 3 权重开源至 HuggingFace', type: 'positive' },
  { time: '13:00', event: 'OpenAI GPT-5 Turbo API 开放公测', type: 'info' },
  { time: '14:20', event: 'Meta AI 发布 Llama 4 模型系列', type: 'accent' },
  { time: '15:45', event: '英伟达 Q2 财报超预期，盘后涨 7%', type: 'positive' },
]

const QUICK_READS = [
  { title: '大模型竞赛2026上半年回顾', tag: '深度', time: '15 min' },
  { title: 'AI Agent 落地：从概念到生产', tag: '实践', time: '12 min' },
  { title: '开源与闭源之争的新格局', tag: '观点', time: '8 min' },
  { title: '算力需求爆发下的芯片战争', tag: '分析', time: '10 min' },
]

// ─── Style injection ─────────────────────────────────────────
const STYLE_INJECT = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap');
@keyframes qd-reveal {
  from { opacity: 0; transform: translateY(6px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0)   scale(1); }
}
@keyframes qd-pulse-dot {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.4; }
}
@keyframes qd-gradient-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.qd-reveal { animation: qd-reveal 0.35s cubic-bezier(.22,1,.36,1) both; }
.qd-d1 { animation-delay: 50ms; }
.qd-d2 { animation-delay: 100ms; }
.qd-d3 { animation-delay: 150ms; }
.qd-d4 { animation-delay: 200ms; }
.qd-d5 { animation-delay: 250ms; }
.qd-d6 { animation-delay: 300ms; }
.qd-d7 { animation-delay: 350ms; }
.qd-d8 { animation-delay: 400ms; }
.qd-row { transition: background-color 160ms cubic-bezier(.25,.1,.25,1); }
.qd-card { transition: background-color 160ms cubic-bezier(.25,.1,.25,1), box-shadow 160ms cubic-bezier(.25,.1,.25,1); }
.qd-btn { transition: all 160ms cubic-bezier(.25,.1,.25,1); }
.qd-live-dot { animation: qd-pulse-dot 2s ease-in-out infinite; }
.qd-hero-gradient { animation: qd-gradient-shift 8s ease infinite; background-size: 200% 200%; }
`

// ─── Sub Components ──────────────────────────────────────────

function Reveal({ children, delay = 0, className = '' }) {
  const cls = delay > 0 ? `qd-reveal qd-d${delay} ${className}` : `qd-reveal ${className}`
  return <div className={cls}>{children}</div>
}

function GlassNav({ activeNav, onNavSelect, dark, onToggleDark, t }) {
  return (
    <nav
      className="flex items-center justify-between px-5 py-2.5"
      style={{
        background: t.glassBg,
        backdropFilter: `blur(${t.blurStrength})`,
        WebkitBackdropFilter: `blur(${t.blurStrength})`,
        borderBottom: `1px solid ${t.glassBorder}`,
      }}
    >
      <div className="flex items-center gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2 mr-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold"
            style={{ background: t.accentLight, color: t.accent }}
          >
            AI
          </div>
          <span className="text-[14px] font-bold" style={{ color: t.tPrimary }}>
            Hot<span style={{ color: t.accent }}>News</span>
          </span>
        </div>

        {/* Nav Items */}
        <div className="flex items-center gap-0.5">
          {NAV_ITEMS.map(item => {
            const isActive = item.key === activeNav
            return (
              <button
                key={item.key}
                onClick={() => onNavSelect(item.key)}
                className="qd-btn px-3 py-[5px] rounded-lg text-[12px] font-medium border-none cursor-pointer"
                style={{
                  background: isActive ? t.accent : 'transparent',
                  color: isActive ? '#FFFFFF' : t.tTertiary,
                  boxShadow: isActive ? `0 0 12px rgba(218,123,44,0.25)` : 'none',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = t.sectionBgHover }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
              >
                <span style={{ marginRight: 4, fontSize: 9, opacity: isActive ? 1 : 0.6 }}>{item.icon}</span>
                {item.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Live indicator */}
        <div className="flex items-center gap-1.5 px-2 py-[3px] rounded-full" style={{ background: t.positiveLight }}>
          <span className="qd-live-dot inline-block w-[6px] h-[6px] rounded-full" style={{ background: t.positive }} />
          <span className="text-[10px] font-semibold" style={{ color: t.positive }}>Live</span>
        </div>

        {/* Search pill */}
        <div
          className="flex items-center gap-1.5 px-2.5 py-[5px] rounded-lg cursor-pointer qd-btn"
          style={{ background: t.sunken, color: t.tQuaternary }}
          onMouseEnter={e => e.currentTarget.style.background = t.muted}
          onMouseLeave={e => e.currentTarget.style.background = t.sunken}
        >
          <span style={{ fontSize: 11 }}>⌕</span>
          <span className="text-[11px]">搜索</span>
          <span className="text-[9px] ml-1 px-1 py-[1px] rounded" style={{ background: t.dividerStrong, color: t.tQuaternary }}>⌘K</span>
        </div>

        {/* Theme toggle */}
        <button
          onClick={onToggleDark}
          className="qd-btn w-7 h-7 rounded-lg flex items-center justify-center cursor-pointer border-none"
          style={{ background: t.sunken, color: t.tSecondary, fontSize: 13 }}
          onMouseEnter={e => e.currentTarget.style.background = t.muted}
          onMouseLeave={e => e.currentTarget.style.background = t.sunken}
        >
          {dark ? '☀' : '☾'}
        </button>
      </div>
    </nav>
  )
}

function HeroSection({ news, t }) {
  return (
    <div
      className="qd-card relative overflow-hidden rounded-2xl cursor-pointer"
      style={{ background: t.surface, boxShadow: t.shadowLight }}
    >
      {/* Ambient gradient */}
      <div
        className="qd-hero-gradient absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 20% 0%, rgba(218,123,44,0.06) 0%, transparent 60%),
                       radial-gradient(ellipse at 80% 100%, rgba(218,123,44,0.03) 0%, transparent 50%)`,
        }}
      />

      <div className="relative p-6 pb-5">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1 px-2 py-[3px] rounded-full text-[10px] font-bold"
              style={{ background: t.accentLight, color: t.accent }}
            >
              <span style={{ fontSize: 7 }}>●</span> 焦点
            </span>
            <TagBadge tag={news.tag} t={t} />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px]" style={{ color: t.tQuaternary }}>{news.time}</span>
            <HotBadge value={news.hot} t={t} large />
          </div>
        </div>

        {/* Title */}
        <h2
          className="text-[28px] font-bold leading-[1.25] mb-3"
          style={{ color: t.tPrimary, letterSpacing: '-0.02em' }}
        >
          {news.title}
        </h2>

        {/* Summary */}
        <p
          className="text-[14px] leading-relaxed mb-5 max-w-[640px]"
          style={{ color: t.tSecondary }}
        >
          {news.summary}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: t.accentLight, color: t.accent }}>
                {news.author[0]}
              </div>
              <span className="text-[12px] font-medium" style={{ color: t.tSecondary }}>{news.author}</span>
            </div>
            <span className="text-[11px]" style={{ color: t.tQuaternary }}>{news.source}</span>
            <span className="text-[11px]" style={{ color: t.tQuaternary }}>· {news.readTime}阅读</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] flex items-center gap-1" style={{ color: t.tTertiary }}>
              <span style={{ fontSize: 10 }}>💬</span>{news.comments}
            </span>
            <button
              className="qd-btn px-3 py-[5px] rounded-lg text-[11px] font-semibold border-none cursor-pointer"
              style={{ background: t.accent, color: '#FFFFFF' }}
              onMouseEnter={e => e.currentTarget.style.background = t.accentHover}
              onMouseLeave={e => e.currentTarget.style.background = t.accent}
            >
              阅读全文 →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function SecondaryCard({ news, t }) {
  return (
    <div
      className="qd-card relative overflow-hidden rounded-xl cursor-pointer flex-1 min-w-0"
      style={{ background: t.surface, boxShadow: t.shadowMicro }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = t.shadowLight}
      onMouseLeave={e => e.currentTarget.style.boxShadow = t.shadowMicro}
    >
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2.5">
          <TagBadge tag={news.tag} t={t} />
          <span className="text-[10px]" style={{ color: t.tQuaternary }}>{news.time}</span>
        </div>
        <h3 className="text-[15px] font-semibold leading-snug mb-2" style={{ color: t.tPrimary }}>
          {news.title}
        </h3>
        <p className="text-[12px] leading-relaxed mb-3" style={{ color: t.tTertiary }}>
          {news.summary}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[11px]" style={{ color: t.tQuaternary }}>{news.source}</span>
          <HotBadge value={news.hot} t={t} />
        </div>
      </div>
    </div>
  )
}

function SectionCard({ children, t, className = '' }) {
  return (
    <div
      className={`qd-card relative overflow-hidden rounded-xl ${className}`}
      style={{ background: t.surface, boxShadow: t.shadowMicro }}
    >
      {children}
    </div>
  )
}

function CardHeader({ title, icon, actions, t }) {
  return (
    <div
      className="flex items-center justify-between px-3.5 py-2.5"
      style={{ borderBottom: `1px solid ${t.divider}` }}
    >
      <span className="text-[12px] font-semibold flex items-center gap-[6px]" style={{ color: t.tPrimary }}>
        {icon && <span style={{ color: t.accent, fontSize: 10 }}>{icon}</span>}
        {title}
      </span>
      {actions && <div className="flex items-center gap-1.5">{actions}</div>}
    </div>
  )
}

function TabGroup({ tabs, active, onSelect, t }) {
  return (
    <div className="inline-flex gap-px p-[2px] rounded-lg" style={{ background: t.sunken }}>
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => onSelect(tab.key)}
          className="px-2.5 py-[4px] text-[11px] font-medium rounded-md border-none cursor-pointer qd-btn"
          style={{
            background: tab.key === active ? t.surface : 'transparent',
            color: tab.key === active ? t.tPrimary : t.tTertiary,
            boxShadow: tab.key === active ? t.shadowMicro : 'none',
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

function TagBadge({ tag, t }) {
  const colorMap = {
    '模型发布': { color: t.accent, bg: t.accentLight },
    '政策监管': { color: t.warning, bg: t.warningLight },
    '开源':     { color: t.positive, bg: t.positiveLight },
    '硬件':     { color: t.info, bg: t.infoLight },
    '行业':     { color: t.tSecondary, bg: t.sectionBg },
    '融资':     { color: t.accent, bg: t.accentLight },
    '技术':     { color: t.info, bg: t.infoLight },
  }
  const c = colorMap[tag] || { color: t.tTertiary, bg: t.sunken }
  return (
    <span className="inline-block px-[6px] py-[1px] rounded-full text-[9px] font-semibold" style={{ background: c.bg, color: c.color }}>
      {tag}
    </span>
  )
}

function HotBadge({ value, t, large }) {
  return (
    <span
      className={`inline-flex items-center gap-[3px] font-medium ${large ? 'text-[12px]' : 'text-[11px]'}`}
      style={{ fontFamily: 'JetBrains Mono, monospace', fontVariantNumeric: 'tabular-nums', color: t.tTertiary }}
    >
      <span style={{ color: t.accent, fontSize: large ? 9 : 7 }}>●</span>
      {value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value}
    </span>
  )
}

function TrendIndicator({ value, t }) {
  const isUp = value >= 0
  return (
    <span
      className="inline-flex items-center text-[10px] font-semibold"
      style={{ fontFamily: 'JetBrains Mono, monospace', fontVariantNumeric: 'tabular-nums', color: isUp ? t.positive : t.negative }}
    >
      {isUp ? '↑' : '↓'}{Math.abs(value)}%
    </span>
  )
}

// ─── Main Component ──────────────────────────────────────────

export default function AIHotNews() {
  const [dark, setDark] = useState(true)
  const [activeNav, setActiveNav] = useState('hot')
  const [activeCategory, setActiveCategory] = useState('all')
  const t = getTokens(dark)

  const filteredNews = activeCategory === 'all'
    ? TRENDING
    : TRENDING.filter(n => n.category === activeCategory)

  return (
    <div
      className="w-full min-h-screen"
      style={{
        background: t.ground,
        fontFamily: '"DM Sans", "Noto Sans SC", system-ui, sans-serif',
        color: t.tPrimary,
        transition: 'background-color 300ms cubic-bezier(.22,1,.36,1), color 300ms cubic-bezier(.22,1,.36,1)',
      }}
    >
      <style>{STYLE_INJECT}</style>

      {/* ═══ Glass Navigation Bar ═══ */}
      <div className="qd-reveal qd-d1 sticky top-0 z-50">
        <GlassNav
          activeNav={activeNav}
          onNavSelect={setActiveNav}
          dark={dark}
          onToggleDark={() => setDark(d => !d)}
          t={t}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 py-5 space-y-5">

        {/* ═══ Hero: #1 Hottest News ═══ */}
        <Reveal delay={2}>
          <HeroSection news={HERO_NEWS} t={t} />
        </Reveal>

        {/* ═══ Secondary Featured Cards ═══ */}
        <Reveal delay={3}>
          <div className="flex gap-4">
            {SECONDARY_NEWS.map(n => (
              <SecondaryCard key={n.id} news={n} t={t} />
            ))}
          </div>
        </Reveal>

        {/* ═══ Main Content Grid: News List + Sidebar ═══ */}
        <div className="flex gap-5 items-start">

          {/* ─── Main Column: Trending News ─── */}
          <Reveal delay={4} className="flex-1 min-w-0">
            <SectionCard t={t}>
              <CardHeader title="热门资讯" icon="◈" t={t} actions={
                <TabGroup tabs={CATEGORIES} active={activeCategory} onSelect={setActiveCategory} t={t} />
              } />
              <div className="p-3 space-y-[1px]">
                {filteredNews.map((item, i) => (
                  <div
                    key={item.id}
                    className="qd-row flex items-center gap-3 px-2.5 py-[8px] rounded-lg cursor-pointer"
                    style={{ background: 'transparent' }}
                    onMouseEnter={e => e.currentTarget.style.background = t.sectionBgHover}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <span
                      className="shrink-0 text-[11px] font-bold w-4 text-center"
                      style={{ fontFamily: 'JetBrains Mono, monospace', color: i < 3 ? t.accent : t.tQuaternary }}
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium leading-snug truncate" style={{ color: t.tPrimary }}>
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2 mt-[2px]">
                        <span className="text-[10px]" style={{ color: t.tQuaternary }}>{item.source}</span>
                        <span className="text-[10px]" style={{ color: t.tQuaternary }}>·</span>
                        <span className="text-[10px]" style={{ color: t.tQuaternary }}>{item.time}</span>
                        <TagBadge tag={item.tag} t={t} />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <TrendIndicator value={item.delta} t={t} />
                      <HotBadge value={item.hot} t={t} />
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </Reveal>

          {/* ─── Sidebar ─── */}
          <div className="w-[300px] shrink-0 space-y-4">

            {/* Hot Topics */}
            <Reveal delay={5}>
              <SectionCard t={t}>
                <CardHeader title="热搜话题" icon="△" t={t} />
                <div className="p-3 space-y-[2px]">
                  {HOT_TOPICS.map((topic, i) => (
                    <div
                      key={topic.label}
                      className="qd-row flex items-center gap-2.5 px-2 py-[5px] rounded-lg cursor-pointer"
                      style={{ background: 'transparent' }}
                      onMouseEnter={e => e.currentTarget.style.background = t.sectionBgHover}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <span
                        className="shrink-0 text-[10px] font-bold w-3.5 text-center"
                        style={{ fontFamily: 'JetBrains Mono, monospace', color: i < 3 ? t.accent : t.tQuaternary }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-[12px] font-medium flex-1 truncate" style={{ color: t.tPrimary }}>{topic.label}</span>
                      <span className="text-[10px]" style={{ fontFamily: 'JetBrains Mono, monospace', fontVariantNumeric: 'tabular-nums', color: t.tTertiary }}>
                        {topic.count >= 1000 ? `${(topic.count / 1000).toFixed(1)}k` : topic.count}
                      </span>
                      <TrendIndicator value={topic.trend} t={t} />
                    </div>
                  ))}
                </div>
              </SectionCard>
            </Reveal>

            {/* Quick Reads */}
            <Reveal delay={6}>
              <SectionCard t={t}>
                <CardHeader title="深度阅读" icon="▦" t={t} />
                <div className="p-3 space-y-[2px]">
                  {QUICK_READS.map((item, i) => (
                    <div
                      key={i}
                      className="qd-row flex items-center gap-2.5 px-2 py-[6px] rounded-lg cursor-pointer"
                      style={{ background: 'transparent' }}
                      onMouseEnter={e => e.currentTarget.style.background = t.sectionBgHover}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-medium leading-snug truncate" style={{ color: t.tPrimary }}>{item.title}</p>
                        <div className="flex items-center gap-2 mt-[1px]">
                          <span className="text-[9px] font-semibold px-[5px] py-[1px] rounded-full" style={{ background: t.accentLight, color: t.accent }}>{item.tag}</span>
                          <span className="text-[10px]" style={{ color: t.tQuaternary }}>{item.time}</span>
                        </div>
                      </div>
                      <span className="text-[11px] shrink-0" style={{ color: t.tQuaternary }}>→</span>
                    </div>
                  ))}
                </div>
              </SectionCard>
            </Reveal>

            {/* Timeline */}
            <Reveal delay={7}>
              <SectionCard t={t}>
                <CardHeader title="今日时间线" icon="◷" t={t} />
                <div className="p-3 space-y-0">
                  {TIMELINE.map((item, i) => {
                    const dotColor = t[item.type] || t.accent
                    const isLast = i === TIMELINE.length - 1
                    return (
                      <div key={i} className="flex gap-2.5">
                        <div className="flex flex-col items-center w-3 shrink-0">
                          <div
                            className="w-[6px] h-[6px] rounded-full mt-[5px] shrink-0"
                            style={{ background: dotColor, boxShadow: `0 0 6px ${dotColor}44` }}
                          />
                          {!isLast && <div className="flex-1 w-px" style={{ background: t.divider }} />}
                        </div>
                        <div className="pb-2.5 flex-1 min-w-0">
                          <span className="text-[10px] font-semibold" style={{ fontFamily: 'JetBrains Mono, monospace', color: t.tQuaternary }}>
                            {item.time}
                          </span>
                          <p className="text-[11px] font-medium leading-snug mt-[1px]" style={{ color: t.tPrimary }}>
                            {item.event}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </SectionCard>
            </Reveal>

          </div>
        </div>

        {/* ═══ Footer Stats Bar ═══ */}
        <Reveal delay={8}>
          <div
            className="flex items-center justify-between px-5 py-3 rounded-xl"
            style={{ background: t.sectionBg }}
          >
            {[
              { label: '今日新闻', value: '128', icon: '◈' },
              { label: '活跃话题', value: '24', icon: '△' },
              { label: '数据源', value: '16', icon: '◇' },
              { label: '最后更新', value: '刚刚', icon: '◷' },
            ].map(stat => (
              <div key={stat.label} className="flex items-center gap-2">
                <span style={{ color: t.accent, fontSize: 10 }}>{stat.icon}</span>
                <span className="text-[11px]" style={{ color: t.tTertiary }}>{stat.label}</span>
                <span className="text-[12px] font-semibold" style={{ fontFamily: 'JetBrains Mono, monospace', fontVariantNumeric: 'tabular-nums', color: t.tPrimary }}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </div>
  )
}
