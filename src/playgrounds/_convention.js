// Playground 文件约定
//
// 每个 playground 实验是 src/playgrounds/ 下的一个 .jsx 文件
// 文件结构：
//   - default export: React 组件（渲染实验内容）
//   - named export `meta`: 描述信息
//
// meta 结构：
//   {
//     title: string,          // 实验标题
//     description: string,    // 简要说明
//     date: string,           // 创建日期 YYYY-MM-DD
//     tags: string[],         // 标签
//     status: string,         // 生命周期状态: 'draft' | 'iterating' | 'final' | 'promoted'
//     brief: {                // 设计需求原始记录（完整上下文，留在 playground）
//       request: string,      // 用户原始需求
//       mood: string,         // 期望的情绪/感觉
//       audience: string,     // 目标受众
//       references: string,   // 参考设计
//       constraints: string,  // 约束条件
//     },
//     style: {                // 风格摘要（精简版，跟随 promote 到组件）
//       mood: string,
//       audience: string,
//       useCase: string,
//     },
//     palette: {              // 配色
//       name: string,
//       colors: string[],
//       source: string,       // 'huemint' | 'custom' | 'existing'
//     },
//     promotedTo: {           // promotion 记录（可选）
//       type: string,         // 'component' | 'layout' | 'palette'
//       path: string,         // 目标路径
//     },
//   }
//
// 工作流（6 阶段）：
//   1. Design Brief - Claude 访谈用户需求，记录到 meta.brief，status='draft'
//   2. Color Selection - Huemint 或 Claude 建议调色板
//   3. Prototype - Claude 生成 playground 文件写入 src/playgrounds/
//   4. Iteration - 用户反馈 → Claude 修改，status='iterating'
//   5. Finalization - 用户确认满意，status='final'
//   6. Promotion - Claude 协助提取为正式组件/布局/调色板，status='promoted'
//
// Promotion 路径：
//   - Component: 创建 src/components/{category}/{Name}.jsx（auto-glob 注册）
//                需要：内联色值→theme token、添加 props、导出 meta/Demo/code
//   - Layout: 在 src/lib/layoutRegistry.jsx 手动添加条目
//   - Palette: 在 src/lib/paletteRegistry.js 手动添加条目
//
// 命名约定：kebab-case，如 login-card.jsx, dashboard-header.jsx

export default {}
