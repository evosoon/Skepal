# Skepal Project Guidelines

## Project Overview
Skepal (Sketch + Palette) is a design system and component library for exploring UI/UX elements, layouts, and color palettes. It serves as a living collection of reusable design patterns.

## Design Workflow
When working on design-related tasks in this project, follow this process:

### Design direction: Linear visuals × Apple interactions

Skepal combines two complementary preferences:

- **Visual language — Linear-inspired.** Favor precise typography, restrained color, clear density, subtle borders, purposeful whitespace, and content-first hierarchy. Use Linear as a set of visual principles, not as a page to copy.
- **Interaction language — Apple-inspired.** Use `apple-design` for immediate press feedback, direct manipulation, interruptible transitions, spatial continuity, spring behavior, and accessible motion.

Design them together: establish the static hierarchy with the Linear visual language, then make every touched or moving element behave according to `apple-design`. Apple interaction principles do **not** imply Apple brand styling, and glass, blur, bounce, or animation must earn a functional role rather than become decoration.

For every interactive playground, review both states and transitions: a still screenshot should feel precise and restrained; using it should feel responsive, physical, and interruptible.

Execution contract:

- Before coding an interactive playground, read `.claude/skills/apple-design/SKILL.md`; do not infer its behavior from the name alone.
- Keep the visual system neutral with one restrained accent unless the brief explicitly asks otherwise. Avoid decorative gradients, excessive pills, and stacked glass surfaces.
- Pressable controls need immediate press feedback. Timed or animated flows must support cancel/restart. Gesture-driven controls must track 1:1 and settle from their live position and velocity.
- Verify the result twice: screenshot the static hierarchy, then exercise the primary interaction including interruption and reduced-motion behavior.

### 1. Generate (via frontend-design plugin)
Use the official `frontend-design` plugin to handle design generation:
- `/frontend-design` — Full guided workflow (style interview → palette → generation)
- `/design` — Quick styling for existing components
- `/ui` — Design-system aware component generation
- `/layout` — Responsive page structures

For any interactive playground, also invoke `/apple-design` when available. Apply its full gesture and spring guidance when the UI includes sheets, drawers, drag/swipe, or other direct manipulation.

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
