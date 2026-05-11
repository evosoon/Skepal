import { useState } from "react";

export default function UsageGuide() {
  const [lang, setLang] = useState("en");

  const content = {
    zh: {
      title: "使用指南",
      subtitle: "基于 frontend-design 插件的设计工作流",
      commands: {
        title: "插件命令",
        link: "https://www.claudedirectory.org/plugins/frontend-design",
        items: [
          { cmd: "/frontend-design", desc: "完整设计工作流（访谈 → 配色 → 生成）" },
          { cmd: "/design", desc: "快速样式调整" },
          { cmd: "/ui", desc: "带设计系统感知的组件生成" },
          { cmd: "/layout", desc: "响应式页面布局" },
        ],
      },
      workflow: {
        title: "工作流程",
        steps: [
          {
            title: "1. 生成",
            items: [
              "使用 /frontend-design 启动完整设计工作流",
              "插件自动引导风格访谈、配色选择、布局决策",
              "生成的组件保存到 src/playgrounds/（自动注册）",
              "初始状态为 draft",
            ],
          },
          {
            title: "2. 迭代",
            items: [
              "在对话中提供反馈，Claude 直接修改文件",
              "Playwright MCP 截图验证实际渲染效果",
              "代码 → 预览 → 截图 → 迭代 的闭环反馈",
              "状态更新为 iterating",
            ],
          },
          {
            title: "3. 提升",
            items: [
              "确认满意后，状态更新为 final",
              "Component：提升到 src/components/{category}/{Name}.jsx",
              "Layout：添加到 src/lib/layoutRegistry.jsx",
              "Palette：添加到 src/lib/paletteRegistry.js",
            ],
          },
        ],
      },
      plugins: {
        title: "推荐插件组合",
        essential: {
          title: "核心插件",
          items: [
            "frontend-design — 设计工作流（已安装）",
            "typescript-lsp — React/TS 实时类型检查",
            "figma — 从 Figma 设计稿导入 token 和组件",
            "vercel — 一键部署",
            "github — PR 和 Issues 管理",
          ],
        },
        browser: {
          title: "浏览器自动化",
          items: [
            "Playwright MCP — 截图、检查 DOM、测试交互",
            "实现视觉反馈闭环，Claude 可以看到渲染效果",
          ],
        },
        additional: {
          title: "扩展插件",
          categories: [
            { name: "Git 工作流", items: ["commit-commands", "pr-review-toolkit", "code-review"] },
            { name: "后端服务", items: ["firebase", "supabase", "sentry"] },
            { name: "项目管理", items: ["linear", "slack", "notion"] },
          ],
        },
      },
      tips: {
        title: "提示",
        items: [
          "安装插件：/plugin install <名称>@claude-plugins-official",
          "重载插件：/reload-plugins",
          "状态 badge：紫色=草稿/迭代中，绿色=最终版，灰色=已提升",
          "Playground 文件自动发现，无需手动注册",
        ],
      },
    },
    en: {
      title: "Usage Guide",
      subtitle: "Design workflow powered by the frontend-design plugin",
      commands: {
        title: "Plugin Commands",
        link: "https://www.claudedirectory.org/plugins/frontend-design",
        items: [
          { cmd: "/frontend-design", desc: "Full design workflow (interview → palette → generate)" },
          { cmd: "/design", desc: "Quick styling mode" },
          { cmd: "/ui", desc: "Design-system aware component generation" },
          { cmd: "/layout", desc: "Responsive page structures" },
        ],
      },
      workflow: {
        title: "Workflow",
        steps: [
          {
            title: "1. Generate",
            items: [
              "Use /frontend-design to launch the full design workflow",
              "Plugin guides you through style interview, color selection, layout decisions",
              "Generated components saved to src/playgrounds/ (auto-registered)",
              "Initial status: draft",
            ],
          },
          {
            title: "2. Iterate",
            items: [
              "Provide feedback in conversation, Claude modifies files directly",
              "Playwright MCP takes screenshots to verify actual rendering",
              "Code → preview → screenshot → iterate feedback loop",
              "Status updates to iterating",
            ],
          },
          {
            title: "3. Promote",
            items: [
              "Once satisfied, status updates to final",
              "Component: promote to src/components/{category}/{Name}.jsx",
              "Layout: add to src/lib/layoutRegistry.jsx",
              "Palette: add to src/lib/paletteRegistry.js",
            ],
          },
        ],
      },
      plugins: {
        title: "Recommended Plugin Stack",
        essential: {
          title: "Essential Plugins",
          items: [
            "frontend-design — Design workflow (installed)",
            "typescript-lsp — Real-time type checking for React/TS",
            "figma — Import tokens and components from Figma",
            "vercel — One-command deployment",
            "github — PR and Issues management",
          ],
        },
        browser: {
          title: "Browser Automation",
          items: [
            "Playwright MCP — Screenshots, DOM inspection, interaction testing",
            "Enables visual feedback loop, Claude can see rendered output",
          ],
        },
        additional: {
          title: "Additional Plugins",
          categories: [
            { name: "Git Workflow", items: ["commit-commands", "pr-review-toolkit", "code-review"] },
            { name: "Backend Services", items: ["firebase", "supabase", "sentry"] },
            { name: "Project Management", items: ["linear", "slack", "notion"] },
          ],
        },
      },
      tips: {
        title: "Tips",
        items: [
          "Install plugins: /plugin install <name>@claude-plugins-official",
          "Reload plugins: /reload-plugins",
          "Status badges: purple=draft/iterating, green=final, gray=promoted",
          "Playground files are auto-discovered, no manual registration needed",
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
        {/* Plugin Commands */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-[14px] font-semibold text-skepal-text">
              {t.commands.title}
            </h3>
            <a
              href={t.commands.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-skepal-accent hover:underline"
            >
              docs ↗
            </a>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {t.commands.items.map(({ cmd, desc }, idx) => (
              <div
                key={idx}
                className="bg-skepal-elevated border border-skepal-border rounded-md px-3 py-2.5"
              >
                <span className="text-[13px] font-mono text-skepal-accent">
                  {cmd}
                </span>
                <p className="text-[12px] text-skepal-text-secondary mt-0.5">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div>
          <h3 className="text-[14px] font-semibold text-skepal-text mb-3">
            {t.workflow.title}
          </h3>
          <div className="space-y-4">
            {t.workflow.steps.map((step, idx) => (
              <div key={idx}>
                <h4 className="text-[13px] font-medium text-skepal-text mb-2">
                  {step.title}
                </h4>
                <ul className="space-y-1.5">
                  {step.items.map((item, itemIdx) => (
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
          </div>
        </div>

        {/* Recommended Plugins */}
        <div className="pt-4 border-t border-skepal-border">
          <h3 className="text-[14px] font-semibold text-skepal-text mb-3">
            {t.plugins.title}
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-[13px] font-medium text-skepal-text mb-2">
                {t.plugins.essential.title}
              </h4>
              <ul className="space-y-1.5">
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
            </div>

            <div>
              <h4 className="text-[13px] font-medium text-skepal-text mb-2">
                {t.plugins.browser.title}
              </h4>
              <ul className="space-y-1.5">
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

            <div>
              <h4 className="text-[13px] font-medium text-skepal-text mb-2">
                {t.plugins.additional.title}
              </h4>
              <div className="space-y-2">
                {t.plugins.additional.categories.map((category, idx) => (
                  <div key={idx} className="flex gap-2 items-baseline">
                    <span className="text-[12px] text-skepal-text shrink-0">
                      {category.name}:
                    </span>
                    <span className="text-[12px] text-skepal-text-secondary">
                      {category.items.join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
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
