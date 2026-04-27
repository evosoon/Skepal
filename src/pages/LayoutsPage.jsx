import { useState } from "react";
import layoutRegistry from "../lib/layoutRegistry.jsx";
import PageHeader from "../components/typography/PageHeader";

export default function LayoutsPage() {
  const [selectedLayout, setSelectedLayout] = useState(null);

  return (
    <div>
      <PageHeader
        title="Layouts"
        subtitle="Page structures and composition patterns"
      />

      <div className="grid grid-cols-[220px_1fr] gap-8">
        <aside className="space-y-0.5">
          {layoutRegistry.map((layout) => (
            <button
              key={layout.id}
              onClick={() => setSelectedLayout(layout)}
              className={`w-full text-left px-2 py-1.5 rounded-md text-[13px] transition-colors ${
                selectedLayout?.id === layout.id
                  ? "text-skepal-text bg-skepal-elevated"
                  : "text-skepal-text-secondary hover:text-skepal-text"
              }`}
            >
              {layout.name}
            </button>
          ))}
        </aside>

        <div>
          {selectedLayout ? (
            <div>
              <div className="mb-8">
                <h2 className="text-[20px] font-semibold text-skepal-text mb-6">
                  {selectedLayout.name}
                </h2>
                <div className="bg-skepal-surface border border-skepal-border rounded-lg overflow-hidden">
                  {selectedLayout.component}
                </div>
              </div>
              <details className="bg-skepal-surface border border-skepal-border rounded-lg">
                <summary className="cursor-pointer px-4 py-3 text-[13px] text-skepal-text-secondary hover:text-skepal-text font-medium">
                  View code
                </summary>
                <div className="px-4 pb-4">
                  <pre className="bg-skepal-bg rounded-md p-4 overflow-x-auto text-[12px] leading-relaxed">
                    <code className="text-skepal-text-secondary">
                      {selectedLayout.code}
                    </code>
                  </pre>
                </div>
              </details>
            </div>
          ) : (
            <div className="h-[400px] flex items-center justify-center">
              <p className="text-[14px] text-skepal-text-tertiary">
                Select a layout to preview
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
