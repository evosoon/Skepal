## 2026-04-28 内联 UI 元素提取为组件库组件

**Context**: Components 页面的 Dropdown 和色卡最初是内联实现，用户指出它们应该作为组件库的一部分存在，便于复用和展示。

**Decision**: 将 Dropdown 和 ColorSwatch 提取为独立组件，放入 `src/components/` 并包含完整的 meta/Demo/code 导出，自动注册到组件库。

**Alternatives**: 
- 保留为页面内局部组件：无法在组件库中展示和复用
- 只提取不注册：组件可复用但不在 showcase 中展示

**Rationale**: 
- Skepal 本身就是组件库/设计系统，所有可复用 UI 元素都应在 showcase 中可见
- 遵循项目已有的 auto-import glob 模式，新组件只需放对目录即可自动注册

**Consequences**: 
- Dropdown 和 ColorSwatch 出现在 Components showcase 中
- 全站色卡统一使用 ColorSwatch，获得点击复制能力

---

## 2026-04-28 Playground 生命周期状态管理

**Context**: Playground 与正式组件之间缺少结构化的协作流程，需要追踪设计从草稿到提升的完整生命周期。

**Decision**: 引入 status 字段（draft/iterating/final/promoted）追踪设计状态，brief 字段记录完整设计需求，promotedTo 字段记录提升去向。

**Alternatives**: 
- 无状态管理，依赖文件名或注释标记：难以可视化和筛选
- 只用 promoted 布尔值：无法区分草稿和迭代中的设计
- 状态存储在外部数据库：增加复杂度，违背文件驱动原则

**Rationale**: 
- 状态字段让 UI 可以直观展示设计进度（badge 颜色、排序、筛选）
- brief 与 style 分离：brief 是完整上下文（留在 playground），style 是精简摘要（跟随提升）
- promotedTo 建立双向追踪，方便回溯设计来源

**Consequences**: 
- Playground 页面支持按状态筛选和排序
- 活跃设计优先展示，已提升的沉底但保留可见
- final 状态显示绿色提升横幅，引导用户完成提升流程
- 需要手动为现有 playground 添加 status 字段

---

## 2026-04-28 TagBadge 状态变体系统

**Context**: 需要用颜色区分不同生命周期状态（draft/iterating/final/promoted），但原 TagBadge 只有灰色默认样式。

**Decision**: 为 TagBadge 添加 variant prop（default/accent/success），新增 skepal-success 主题 token。

**Alternatives**: 
- 创建独立的 StatusBadge 组件：增加组件数量，功能重复
- 直接用内联样式：失去主题一致性，难以维护
- 用现有 accent 颜色表示所有状态：无法区分 final（成功）和 draft（进行中）

**Rationale**: 
- 扩展现有组件比创建新组件更符合设计系统原则
- 颜色语义清晰：紫色（accent）=进行中，绿色（success）=已完成，灰色（default）=已归档
- 新增 success token 为未来其他成功状态组件提供一致性

**Consequences**: 
- TagBadge 可复用于其他需要状态指示的场景
- 主题系统扩展，支持成功/完成类 UI 元素
- 需要更新 TagBadge 的 Demo 和 code 导出

---

## 2026-04-28 首页文档默认语言选择

**Context**: UsageGuide 组件支持中英文切换，需要确定默认显示语言。

**Decision**: 默认显示英文（en）。

**Alternatives**: 
- 默认中文：项目主要开发者使用中文
- 根据浏览器语言自动检测：增加复杂度，可能误判

**Rationale**: 
- Skepal 作为开源设计系统，英文受众更广
- 项目 README、代码注释、commit message 均为英文优先
- 用户可一键切换到中文，无障碍

**Consequences**: 
- 国际用户首次访问体验更好
- 中文用户需要点击一次切换按钮

---
