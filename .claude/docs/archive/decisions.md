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
