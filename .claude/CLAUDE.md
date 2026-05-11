# Skepal Project Guidelines

## Project Overview
Skepal (Sketch + Palette) is a design system and component library for exploring UI/UX elements, layouts, and color palettes. It serves as a living collection of reusable design patterns.

## Design Workflow
When working on design-related tasks in this project, follow this process:

### 1. Generate (via frontend-design plugin)
Use the official `frontend-design` plugin to handle design generation:
- `/frontend-design` — Full guided workflow (style interview → palette → generation)
- `/design` — Quick styling for existing components
- `/ui` — Design-system aware component generation
- `/layout` — Responsive page structures

The plugin handles style interviews, color selection, and code generation automatically.
Output files go to `src/playgrounds/` with kebab-case naming.

### 2. Prototype
- Generated playground file includes complete meta object (brief, style, palette, tags)
- Use inline hex colors for rapid iteration (converts to theme tokens on promotion)
- File auto-registers and displays in Playground page
- Set initial `status: "draft"`

### 3. Iteration
- User provides feedback in conversation
- Claude modifies the playground file directly
- Use Playwright MCP to screenshot and verify visual output
- Update `status: "iterating"` during active iteration
- Iterate until user is satisfied

### 4. Finalization
- User confirms design is ready
- Update `status: "final"`
- Playground page displays promotion banner
- Design is ready for promotion to permanent registry

### 5. Promotion
When user requests promotion, choose the appropriate path:

**Component Promotion:**
- Create new file in `src/components/{category}/{Name}.jsx`
- Convert inline hex colors to Skepal theme tokens
- Add configurable props (replace hardcoded values)
- Export required: `default`, `meta`, `{Name}Demo`, `code`
- Copy `meta.style` from playground (not full `brief`)
- Optionally add `promotedFrom: "playground-id"` to meta
- Auto-registers via glob pattern
- Update playground: `status: "promoted"`, `promotedTo: { type: "component", path: "..." }`

**Layout Promotion:**
- Manually add entry to `src/lib/layoutRegistry.jsx`
- Structure: `{ id, name, component, code }`
- Update playground: `status: "promoted"`, `promotedTo: { type: "layout", path: "..." }`

**Palette Promotion:**
- Manually add entry to `src/lib/paletteRegistry.js`
- Structure: `{ id, name, colors, source }`
- Update playground: `status: "promoted"`, `promotedTo: { type: "palette", path: "..." }`

Promoted playgrounds remain visible but sort to bottom of list.

## File Organization
- `src/components/` - Reusable UI components
- `src/layouts/` - Layout patterns and templates
- `src/palettes/` - Color scheme collections
- `src/playgrounds/` - Experimental/prototype components
- `src/lib/*Registry.js` - Component/layout/palette registries for the showcase

## Component Standards
- Use Tailwind CSS with custom theme tokens (defined in `src/index.css`)
- Components should be self-contained and copy-pasteable
- Include code examples in registry entries
- Keep components minimal - no unnecessary abstractions

## Adding New Content
When adding components/layouts/palettes:
1. Create the actual component/layout file if needed
2. Add entry to appropriate registry (`componentRegistry.js`, `layoutRegistry.js`, `paletteRegistry.js`)
3. Include rendered preview and code string
4. Test in the showcase pages

## Tech Stack
- React + Vite
- Tailwind CSS v4
- React Router for navigation
