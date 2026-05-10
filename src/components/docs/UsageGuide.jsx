import { useState } from "react";

export default function UsageGuide() {
  const [lang, setLang] = useState("en");

  const content = {
    zh: {
      title: "使用指南",
      subtitle: "如何与 Claude 协作构建你的设计系统",
      sections: [
        {
          title: "1. 设计访谈（Design Brief）",
          items: [
            "在 Claude Code 中描述你的设计需求",
            "简单需求：直接开始，边做边调",
            "复杂需求：Claude 会通过自然对话了解你的想法（情绪、受众、参考、约束）",
            "访谈内容记录到 playground 的 brief 字段，初始状态 draft",
          ],
        },
        {
          title: "2. 选择配色（Color Selection）",
          items: [
            "访问 Huemint (https://huemint.com) 生成和谐配色",
            "或者向 Claude 描述配色需求，由 Claude 建议颜色",
            "配色方案记录到 palette 字段，标注来源",
          ],
        },
        {
          title: "3. 原型制作（Prototype）",
          items: [
            "Claude 在 src/playgrounds/ 创建初版文件（kebab-case 命名）",
            "使用内联 hex 颜色快速迭代（提升时会转为 theme token）",
            "文件自动注册并在 Playground 页面展示",
            "保持 status: draft",
          ],
        },
        {
          title: "4. 迭代优化（Iteration）",
          items: [
            "在对话中提供反馈",
            "Claude 直接修改 playground 文件",
            "状态更新为 iterating（迭代中）",
            "重复直到满意",
          ],
        },
        {
          title: "5. 最终确认（Finalization）",
          items: [
            "确认设计已完成",
            "状态更新为 final（最终版）",
            "Playground 页面显示绿色提升横幅",
            "设计已准备好提升到正式注册表",
          ],
        },
        {
          title: "6. 提升发布（Promotion）",
          items: [
            "Component：创建 src/components/{category}/{Name}.jsx，转换为 theme token，添加 props，导出 meta/Demo/code",
            "Layout：手动添加到 src/lib/layoutRegistry.jsx",
            "Palette：手动添加到 src/lib/paletteRegistry.js",
            "更新 playground：status: promoted，记录 promotedTo",
            "已提升的 playground 保留但排到列表底部",
          ],
        },
      ],
      plugins: {
        title: "推荐的 Claude Code 插件",
        subtitle: "提升前端开发效率的插件组合",
        essential: {
          title: "核心插件（必装）",
          items: [
            "typescript-lsp — React/TS 实时类型检查和代码诊断",
            "figma — 从 Figma 设计稿导入组件和 token",
            "frontend-design — 生成有设计感的 UI 代码（已集成到 Skepal 工作流）",
            "vercel — 一键部署到 Vercel",
            "github — GitHub PR 和 Issues 管理",
          ],
          note: "typescript-lsp 需要先安装：npm install -g typescript-language-server typescript",
        },
        browser: {
          title: "浏览器自动化与测试",
          items: [
            "Playwright MCP — 可以截图、检查 DOM、测试交互",
            "实现 代码 → 预览 → 截图 → 迭代 的闭环反馈",
            "Claude 可以看到实际渲染效果并基于视觉反馈优化",
          ],
        },
        additional: {
          title: "扩展插件",
          categories: [
            {
              name: "Git 工作流",
              items: ["commit-commands", "pr-review-toolkit", "code-review"],
            },
            {
              name: "后端服务",
              items: ["firebase", "supabase", "sentry"],
            },
            {
              name: "项目管理",
              items: ["linear", "slack", "notion"],
            },
          ],
        },
        commands: {
          title: "插件管理命令",
          items: [
            "/plugin install <插件名>@claude-plugins-official",
            "/reload-plugins — 重新加载插件",
            "/plugin — 打开插件管理器",
          ],
        },
      },
      tips: {
        title: "提示",
        items: [
          "brief 是完整上下文（留在 playground），style 是精简摘要（跟随提升）",
          "使用 Playground 页面的状态筛选器查看不同阶段的设计",
          "状态 badge 颜色：紫色=草稿/迭代中，绿色=最终版，灰色=已提升",
        ],
      },
    },
    en: {
      title: "Usage Guide",
      subtitle: "How to collaborate with Claude to build your design system",
      sections: [
        {
          title: "1. Design Brief",
          items: [
            "Describe your design needs in Claude Code",
            "Simple requests: start directly, iterate as you go",
            "Complex requests: Claude will have a natural conversation to understand your vision (mood, audience, references, constraints)",
            "Interview insights recorded in playground's brief field, initial status: draft",
          ],
        },
        {
          title: "2. Color Selection",
          items: [
            "Visit Huemint (https://huemint.com) to generate harmonious colors",
            "Or describe color needs to Claude for suggestions",
            "Color scheme recorded in palette field with source attribution",
          ],
        },
        {
          title: "3. Prototype",
          items: [
            "Claude creates initial file in src/playgrounds/ (kebab-case naming)",
            "Uses inline hex colors for rapid iteration (converts to theme tokens on promotion)",
            "File auto-registers and displays in Playground page",
            "Keeps status: draft",
          ],
        },
        {
          title: "4. Iteration",
          items: [
            "Provide feedback in conversation",
            "Claude modifies playground file directly",
            "Status updates to iterating",
            "Repeat until satisfied",
          ],
        },
        {
          title: "5. Finalization",
          items: [
            "Confirm design is complete",
            "Status updates to final",
            "Playground page shows green promotion banner",
            "Design is ready for promotion to permanent registry",
          ],
        },
        {
          title: "6. Promotion",
          items: [
            "Component: Create src/components/{category}/{Name}.jsx, convert to theme tokens, add props, export meta/Demo/code",
            "Layout: Manually add to src/lib/layoutRegistry.jsx",
            "Palette: Manually add to src/lib/paletteRegistry.js",
            "Update playground: status: promoted, record promotedTo",
            "Promoted playgrounds remain visible but sort to bottom",
          ],
        },
      ],
      plugins: {
        title: "Recommended Claude Code Plugins",
        subtitle: "Plugin combinations to boost frontend development",
        essential: {
          title: "Essential Plugins",
          items: [
            "typescript-lsp — Real-time type checking and diagnostics for React/TS",
            "figma — Import components and tokens from Figma designs",
            "frontend-design — Generate aesthetically distinctive UI code (integrated into Skepal workflow)",
            "vercel — One-command deployment to Vercel",
            "github — GitHub PR and Issues management",
          ],
          note: "typescript-lsp requires: npm install -g typescript-language-server typescript",
        },
        browser: {
          title: "Browser Automation & Testing",
          items: [
            "Playwright MCP — Take screenshots, inspect DOM, test interactions",
            "Enables code → preview → screenshot → iterate feedback loop",
            "Claude can see actual rendered output and refine based on visual feedback",
          ],
        },
        additional: {
          title: "Additional Plugins",
          categories: [
            {
              name: "Git Workflow",
              items: ["commit-commands", "pr-review-toolkit", "code-review"],
            },
            {
              name: "Backend Services",
              items: ["firebase", "supabase", "sentry"],
            },
            {
              name: "Project Management",
              items: ["linear", "slack", "notion"],
            },
          ],
        },
        commands: {
          title: "Plugin Management Commands",
          items: [
            "/plugin install <plugin-name>@claude-plugins-official",
            "/reload-plugins — Reload plugins",
            "/plugin — Open plugin manager",
          ],
        },
      },
      tips: {
        title: "Tips",
        items: [
          "brief is full context (stays in playground), style is compact summary (follows promotion)",
          "Use Playground page status filter to view designs at different stages",
          "Status badge colors: purple=draft/iterating, green=final, gray=promoted",
        ],
      },
    },
  };

  const t = content[lang];

  return (
    <div className="bg-skepal-surface border border-skepal-border rounded-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-[20px] font-semibold text-skepal-text mb-1">
            {t.title}
          </h2>
          <p className="text-[13px] text-skepal-text-secondary">
            {t.subtitle}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setLang("zh")}
            className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors ${
              lang === "zh"
                ? "bg-skepal-accent text-white"
                : "bg-skepal-elevated text-skepal-text-secondary hover:text-skepal-text"
            }`}
          >
            中文
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors ${
              lang === "en"
                ? "bg-skepal-accent text-white"
                : "bg-skepal-elevated text-skepal-text-secondary hover:text-skepal-text"
            }`}
          >
            English
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {t.sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-[14px] font-semibold text-skepal-text mb-3">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className="flex gap-3 items-start text-[13px] text-skepal-text-secondary"
                >
                  <span className="text-skepal-accent mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="pt-6 border-t border-skepal-border">
          <h3 className="text-[14px] font-semibold text-skepal-text mb-2">
            {t.plugins.title}
          </h3>
          <p className="text-[12px] text-skepal-text-secondary mb-4">
            {t.plugins.subtitle}
          </p>

          {/* Essential Plugins */}
          <div className="mb-5">
            <h4 className="text-[13px] font-medium text-skepal-text mb-2">
              {t.plugins.essential.title}
            </h4>
            <ul className="space-y-2 mb-2">
              {t.plugins.essential.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 items-start text-[13px] text-skepal-text-secondary"
                >
                  <span className="text-skepal-accent mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[12px] text-skepal-text-secondary italic pl-5">
              {t.plugins.essential.note}
            </p>
          </div>

          {/* Browser Automation */}
          <div className="mb-5">
            <h4 className="text-[13px] font-medium text-skepal-text mb-2">
              {t.plugins.browser.title}
            </h4>
            <ul className="space-y-2">
              {t.plugins.browser.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 items-start text-[13px] text-skepal-text-secondary"
                >
                  <span className="text-skepal-accent mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Plugins */}
          <div className="mb-5">
            <h4 className="text-[13px] font-medium text-skepal-text mb-2">
              {t.plugins.additional.title}
            </h4>
            <div className="space-y-3">
              {t.plugins.additional.categories.map((category, idx) => (
                <div key={idx}>
                  <p className="text-[12px] text-skepal-text mb-1">
                    {category.name}:
                  </p>
                  <p className="text-[12px] text-skepal-text-secondary pl-5">
                    {category.items.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Commands */}
          <div className="mb-5">
            <h4 className="text-[13px] font-medium text-skepal-text mb-2">
              {t.plugins.commands.title}
            </h4>
            <ul className="space-y-2">
              {t.plugins.commands.items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-[12px] font-mono text-skepal-text-secondary bg-skepal-elevated px-3 py-1.5 rounded border border-skepal-border"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-skepal-border">
          <h3 className="text-[14px] font-semibold text-skepal-text mb-3">
            {t.tips.title}
          </h3>
          <ul className="space-y-2">
            {t.tips.items.map((item, idx) => (
              <li
                key={idx}
                className="flex gap-3 items-start text-[13px] text-skepal-text-secondary"
              >
                <span className="text-skepal-accent mt-0.5">💡</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
