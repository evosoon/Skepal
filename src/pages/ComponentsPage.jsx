import { useState } from "react";
import componentRegistry from "../lib/componentRegistry.jsx";

export default function ComponentsPage() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const categories = Object.keys(componentRegistry);

  return (
    <div>
      <div className="mb-10">
        <h1 className="inline-block text-[32px] font-semibold bg-gradient-to-r from-white/90 via-white/60 to-white/20 bg-clip-text text-transparent mb-2">
          Components
        </h1>
        <p className="text-[15px] text-skepal-text-secondary">
          Reusable UI elements ready to copy and customize
        </p>
      </div>

      <div className="grid grid-cols-[220px_1fr] gap-8">
        <aside className="space-y-6">
          {categories.map((category) => (
            <div key={category}>
              <div className="text-[11px] uppercase tracking-wider text-skepal-text-tertiary font-semibold mb-2 px-2">
                {category}
              </div>
              <div className="space-y-0.5">
                {componentRegistry[category].map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedComponent(comp)}
                    className={`w-full text-left px-2 py-1.5 rounded-md text-[13px] transition-colors ${
                      selectedComponent?.id === comp.id
                        ? "text-skepal-text bg-skepal-elevated"
                        : "text-skepal-text-secondary hover:text-skepal-text"
                    }`}
                  >
                    {comp.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <div>
          {selectedComponent ? (
            <div>
              <div className="mb-8">
                <h2 className="text-[20px] font-semibold text-skepal-text mb-6">
                  {selectedComponent.name}
                </h2>
                <div className="bg-white rounded-lg p-12 border border-gray-200">
                  {selectedComponent.component}
                </div>
              </div>
              <details className="bg-skepal-surface border border-skepal-border rounded-lg">
                <summary className="cursor-pointer px-4 py-3 text-[13px] text-skepal-text-secondary hover:text-skepal-text font-medium">
                  View code
                </summary>
                <div className="px-4 pb-4">
                  <pre className="bg-skepal-bg rounded-md p-4 overflow-x-auto text-[12px] leading-relaxed">
                    <code className="text-skepal-text-secondary">
                      {selectedComponent.code}
                    </code>
                  </pre>
                </div>
              </details>
            </div>
          ) : (
            <div className="h-[400px] flex items-center justify-center">
              <p className="text-[14px] text-skepal-text-tertiary">
                Select a component to preview
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
