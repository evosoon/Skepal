import { useState } from 'react'

export const meta = {
  title: 'Investor Dashboard',
  description: 'AI-native investment analysis dashboard with dock navigation, collapsible panels, and multi-agent workflow visualization.',
  date: '2026-05-10',
  tags: ['dashboard', 'finance', 'layout', 'dark-light', 'ai-native'],
  status: 'iterating',
  brief: {
    request: 'Redesign a stock analysis MVP with AI-native style, dock nav, collapsible history/news, prominent K-line + AI analysis side by side',
    mood: 'AI-native, focused, professional — agents working visibly for the investor',
    audience: 'Investors reviewing stock analysis and AI-generated insights',
    references: 'Linear app, macOS dock, ChatGPT-style agent flows',
    constraints: 'Dark/light theme, bottom dock nav, collapsible left panel, K-line + AI analysis must be viewable together',
  },
  style: {
    mood: 'AI-native, minimal, focused',
    audience: 'investors',
    useCase: 'Stock analysis with multi-agent AI',
  },
  palette: {
    name: 'Linear Mono',
    colors: ['#09090b', '#111113', '#1a1a1d', '#fafafa', '#a1a1aa', '#22c55e', '#ef4444', '#8b5cf6'],
    source: 'custom',
  },
}

const MOCK = {
  stock: { name: '贵州茅台', code: 'sh600519', price: 1372.99, change: +0.14, changeAmt: +1.94, open: 1371.66, close: 1371.05, high: 1382.77, low: 1370.00, volume: '3.34万', amount: '45.83亿', pe: 20.79, pb: 6.35, turnover: '0.27%', qr: 0.80 },
  watchlist: [
    { name: '贵州茅台', code: 'sh600519', active: true },
    { name: '大悦城', code: 'sz000031', active: false },
  ],
  news: [
    { title: 'DeepSeek融资猜想：阿里未参与 腾讯或入局', time: '00:19', tag: '热点' },
    { title: '十倍股预警、跨界者扩产 AI引爆的电子布正加速"泡沫化"？', time: '00:14', tag: 'AI' },
    { title: '中国汽车工业协会：网传"新能源车企因锁电问题被约谈、立案"为不实信息', time: '昨天 21:01', tag: '辟谣' },
    { title: '国常会：加强水网、新型电网、算力网、新一代通信网建设', time: '昨天 19:16', tag: '政策' },
    { title: '精神病院杀入A股！一图梳理上市公司"非主流"大股东', time: '昨天 19:11', tag: '趣闻' },
  ],
  agents: [
    { name: '技术面分析师', status: 'done' },
    { name: '情绪面分析师', status: 'done' },
    { name: '新闻面分析师', status: 'done' },
    { name: '基本面分析师', status: 'done' },
  ],
  flow: [
    { stage: '多空辩论', agents: ['多方研究员辩论', '空方研究员辩论'], status: 'done' },
    { stage: '研究经理', agents: ['研究经理·总结辩论'], status: 'done' },
    { stage: '交易员', agents: ['交易员·制定交易方案'], status: 'done' },
    { stage: '风控三方', agents: ['激进派风控评估', '保守派风控评估', '中立派风控评估'], status: 'done' },
    { stage: '组合经理', agents: ['组合经理·最终决策'], status: 'done' },
  ],
  verdict: { direction: '看空', score: 30.7, summary: '主力净流出，抛压较大，谨慎观望', tech: 5, fund: 40, value: 57 },
  aiTabs: ['概览', '报告', '多空辩论', '风控评论', '时间线'],
}

function LeftPanel({ t, collapsed, onToggle }) {
  if (collapsed) return (
    <div style={{ width: 40, borderRight: `1px solid ${t.border}`, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 12 }}>
      <button onClick={onToggle} style={{ background: 'none', border: 'none', color: t.tertiary, cursor: 'pointer', fontSize: 16 }}>☰</button>
    </div>
  )
  return (
    <div style={{ width: 280, borderRight: `1px solid ${t.border}`, display: 'flex', flexDirection: 'column', overflow: 'hidden', flexShrink: 0 }}>
      <div style={{ padding: '12px 16px', borderBottom: `1px solid ${t.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 12, color: t.tertiary, fontWeight: 500 }}>历史记录</span>
        <button onClick={onToggle} style={{ background: 'none', border: 'none', color: t.tertiary, cursor: 'pointer', fontSize: 14 }}>✕</button>
      </div>
      <div style={{ padding: '8px 12px', flex: '0 0 auto' }}>
        {MOCK.watchlist.map((s, i) => (
          <div key={i} style={{ padding: '8px 10px', borderRadius: 6, background: s.active ? t.elevated : 'transparent', marginBottom: 2, cursor: 'pointer' }}>
            <div style={{ fontSize: 13, fontWeight: s.active ? 500 : 400, color: s.active ? t.accent : t.text }}>{s.name}</div>
            <div style={{ fontSize: 11, color: t.tertiary }}>{s.code}</div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1px solid ${t.border}`, padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 12, color: t.tertiary, fontWeight: 500 }}>快讯</span>
        <span style={{ fontSize: 11, color: t.tertiary }}>全部</span>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '0 12px' }}>
        {MOCK.news.map((n, i) => (
          <div key={i} style={{ padding: '10px 4px', borderBottom: `1px solid ${t.border}`, cursor: 'pointer' }}>
            <p style={{ fontSize: 12, color: t.text, lineHeight: 1.5, margin: 0 }}>{n.title}</p>
            <div style={{ display: 'flex', gap: 8, marginTop: 4, alignItems: 'center' }}>
              {n.tag && <span style={{ fontSize: 10, color: t.accent, background: `${t.accent}15`, padding: '1px 5px', borderRadius: 3 }}>{n.tag}</span>}
              <span style={{ fontSize: 10, color: t.tertiary }}>{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AIPanel({ t }) {
  const [activeTab, setActiveTab] = useState('概览')
  return (
    <div style={{ width: 360, borderLeft: `1px solid ${t.border}`, display: 'flex', flexDirection: 'column', overflow: 'hidden', flexShrink: 0 }}>
      <div style={{ padding: '12px 16px', borderBottom: `1px solid ${t.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 13, fontWeight: 500 }}>AI 智能分析</span>
        <button style={{ background: t.accent, color: '#fff', border: 'none', borderRadius: 5, padding: '4px 12px', fontSize: 11, fontWeight: 500, cursor: 'pointer' }}>新分析</button>
      </div>
      {/* Agent Flow */}
      <div style={{ padding: '16px', flex: 1, overflow: 'auto' }}>
        <div style={{ fontSize: 11, color: t.tertiary, marginBottom: 12, fontWeight: 500, letterSpacing: '0.03em' }}>Multi-Agent 执行流程</div>
        {/* Analysts */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, color: t.tertiary, marginBottom: 8 }}>分析师团</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {MOCK.agents.map((a, i) => (
              <span key={i} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 14, border: `1px solid ${t.border}`, color: t.secondary, background: t.elevated }}>● {a.name}</span>
            ))}
          </div>
        </div>
        {/* Pipeline */}
        {MOCK.flow.map((step, i) => (
          <div key={i} style={{ marginBottom: 14, paddingLeft: 12, borderLeft: `2px solid ${t.border}` }}>
            <div style={{ fontSize: 11, color: t.tertiary, marginBottom: 6 }}>{step.stage}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {step.agents.map((a, j) => (
                <span key={j} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 14, border: `1px solid ${t.border}`, color: t.text, background: t.surface }}>◉ {a}</span>
              ))}
            </div>
          </div>
        ))}
        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, borderBottom: `1px solid ${t.border}`, marginTop: 20, marginBottom: 16 }}>
          {MOCK.aiTabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '8px 12px', fontSize: 11, color: activeTab === tab ? t.text : t.tertiary, fontWeight: activeTab === tab ? 500 : 400, background: 'none', border: 'none', borderBottom: activeTab === tab ? `2px solid ${t.accent}` : '2px solid transparent', cursor: 'pointer', marginBottom: -1 }}>
              {tab}
            </button>
          ))}
        </div>
        {/* Verdict */}
        <div style={{ background: `${t.down}10`, border: `1px solid ${t.down}30`, borderRadius: 8, padding: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: t.down, marginBottom: 4 }}>组合经理终裁</div>
          <div style={{ fontSize: 11, color: t.secondary, lineHeight: 1.6 }}>最终决定: 持有观望。趋势阶段：下跌中继，当前日线级别均线空头排列，4月30日放量跌破1400关键位...</div>
        </div>
        <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, textAlign: 'center' }}>
          {[['技术', MOCK.verdict.tech], ['资金', MOCK.verdict.fund], ['估值', MOCK.verdict.value]].map(([k, v]) => (
            <div key={k} style={{ padding: '8px', background: t.elevated, borderRadius: 6 }}>
              <div style={{ fontSize: 10, color: t.tertiary }}>{k}</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DockNav({ t }) {
  const items = [
    { icon: '📈', label: '个股', active: true },
    { icon: '🔥', label: '热门' },
    { icon: '🖥', label: '自选' },
    { icon: '🔍', label: '搜索' },
    { icon: '⏸', label: '休市' },
    { icon: '↻', label: '刷新' },
    { icon: '⚙', label: '设置' },
  ]
  return (
    <div style={{ position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 4, padding: '8px 16px', background: t.elevated, border: `1px solid ${t.border}`, borderRadius: 14, backdropFilter: 'blur(12px)', zIndex: 100 }}>
      {items.map((item, i) => (
        <button key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, padding: '6px 12px', borderRadius: 10, background: item.active ? t.accent + '20' : 'transparent', border: item.active ? `1px solid ${t.accent}40` : '1px solid transparent', color: item.active ? t.accent : t.tertiary, cursor: 'pointer', fontSize: 16 }}>
          <span>{item.icon}</span>
          <span style={{ fontSize: 9, fontWeight: 500 }}>{item.label}</span>
        </button>
      ))}
    </div>
  )
}

function CenterPanel({ t }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto', minWidth: 0 }}>
      {/* Stock Header */}
      <div style={{ padding: '12px 20px', borderBottom: `1px solid ${t.border}`, display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>{MOCK.stock.name}</span>
          <span style={{ color: t.tertiary, fontSize: 11 }}>{MOCK.stock.code}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontSize: 20, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{MOCK.stock.price}</span>
          <span style={{ color: t.up, fontSize: 12, fontWeight: 500 }}>+{MOCK.stock.change}%</span>
          <span style={{ color: t.up, fontSize: 11 }}>+{MOCK.stock.changeAmt}</span>
        </div>
        <div style={{ display: 'flex', gap: 16, marginLeft: 'auto' }}>
          {[['今开', MOCK.stock.open], ['最高', MOCK.stock.high], ['成交量', MOCK.stock.volume], ['市盈率', MOCK.stock.pe], ['量比', MOCK.stock.qr]].map(([k, v]) => (
            <div key={k} style={{ fontSize: 11 }}>
              <span style={{ color: t.tertiary }}>{k} </span>
              <span style={{ color: k === '最高' ? t.up : t.secondary, fontVariantNumeric: 'tabular-nums' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Chart Area */}
      <div style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {['BOLL', 'MACD', 'KDJ', 'RSI'].map((ind, i) => (
            <span key={ind} style={{ fontSize: 12, color: i === 0 ? t.accent : t.tertiary, cursor: 'pointer', fontWeight: i === 0 ? 500 : 400 }}>{ind}</span>
          ))}
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            {['分时', '日K', '周K', '月K'].map((p, i) => (
              <span key={p} style={{ fontSize: 11, padding: '3px 8px', borderRadius: 4, background: i === 1 ? t.elevated : 'transparent', color: i === 1 ? t.text : t.tertiary, cursor: 'pointer' }}>{p}</span>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, minHeight: 240, background: t.elevated, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.tertiary, fontSize: 12, border: `1px solid ${t.border}` }}>
          K线图 · BOLL(20,2) · UP: 1,485.96 · MID: 1,421.52 · DN: 1,357.07
        </div>
        <div style={{ height: 80, background: t.elevated, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.tertiary, fontSize: 11, border: `1px solid ${t.border}` }}>
          VOL / MACD 副图
        </div>
        {/* Bottom metrics row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 8, padding: 14 }}>
            <div style={{ fontSize: 11, color: t.tertiary, marginBottom: 8 }}>资金流向（5日）</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: t.down, fontVariantNumeric: 'tabular-nums' }}>-21,740.94万</div>
          </div>
          <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 8, padding: 14 }}>
            <div style={{ fontSize: 11, color: t.tertiary, marginBottom: 8 }}>综合评级</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: t.down }}>看空</span>
              <span style={{ fontSize: 11, color: t.tertiary }}>30.7分</span>
            </div>
          </div>
          <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 8, padding: 14 }}>
            <div style={{ fontSize: 11, color: t.tertiary, marginBottom: 8 }}>融资余额</div>
            <div style={{ fontSize: 16, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>184.63亿</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function InvestorDashboard() {
  const [theme, setTheme] = useState('dark')
  const [leftOpen, setLeftOpen] = useState(true)
  const isDark = theme === 'dark'

  const t = isDark
    ? { bg: '#09090b', surface: '#111113', elevated: '#151517', border: '#1e1e21', text: '#fafafa', secondary: '#a1a1aa', tertiary: '#636369', up: '#22c55e', down: '#ef4444', accent: '#8b5cf6' }
    : { bg: '#fafafa', surface: '#ffffff', elevated: '#f4f4f5', border: '#e4e4e7', text: '#09090b', secondary: '#52525b', tertiary: '#a1a1aa', up: '#16a34a', down: '#dc2626', accent: '#7c3aed' }

  return (
    <div style={{ background: t.bg, color: t.text, fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif', height: '100vh', fontSize: '13px', lineHeight: 1.5, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Main 3-column layout */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <LeftPanel t={t} collapsed={!leftOpen} onToggle={() => setLeftOpen(!leftOpen)} />
        <CenterPanel t={t} />
        <AIPanel t={t} />
      </div>
      {/* Dock */}
      <DockNav t={t} />
      {/* Theme toggle - subtle corner button */}
      <button onClick={() => setTheme(isDark ? 'light' : 'dark')} style={{ position: 'fixed', top: 8, right: 8, background: t.elevated, border: `1px solid ${t.border}`, borderRadius: 6, padding: '4px 8px', color: t.tertiary, cursor: 'pointer', fontSize: 10, zIndex: 100 }}>
        {isDark ? '☀' : '●'}
      </button>
    </div>
  )
}
