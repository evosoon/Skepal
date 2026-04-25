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
//     style: {                // 风格上下文（来自采访）
//       mood: string,
//       audience: string,
//       useCase: string,
//     },
//     palette: {              // 配色
//       name: string,
//       colors: string[],
//       source: string,       // 'huemint' | 'custom' | 'existing'
//     },
//   }
//
// 工作流：
//   1. 用户在 Claude Code 对话中描述设计需求
//   2. Claude 进行风格采访（对话方式）
//   3. Claude 讨论/建议配色
//   4. Claude 直接生成 playground 文件写入 src/playgrounds/
//   5. Skepal 展示页自动展示
//
// 命名约定：kebab-case，如 login-card.jsx, dashboard-header.jsx

export default {}
