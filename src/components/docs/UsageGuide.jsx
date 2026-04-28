import { useState } from "react";

export default function UsageGuide() {
  const [lang, setLang] = useState("zh");

  const content = {
    zh: {
      title: "使用指南",
      subtitle: "如何与 Claude 协作构建你的设计系统",
      sections: [
        {
          title: "1. 设计访谈（Design Brief）",
          items: [
            "在 Claude Code 中描述你的设计需求",
            "Claude 会询问：期望的情绪/感觉、目标受众、参考设计、约束条件",
            "所有访谈内容会记录到 playground 的 brief 字段",
            "初始状态设为 draft（草稿）",
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
            "Claude will ask about: desired mood/feeling, target audience, reference designs, constraints",
            "All interview content is recorded in the playground's brief field",
            "Initial status set to draft",
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
