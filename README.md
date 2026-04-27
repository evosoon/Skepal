# Skepal

**Sketch + Palette** — A conversation-driven design system for exploring UI elements, layouts, and color palettes.

![Skepal](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-8-purple) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-cyan)

## What is Skepal?

Skepal is a design system tool that lets you accumulate reusable UI components, layouts, and color palettes through natural conversation with Claude Code. Instead of manually building a component library, you describe what you want, Claude interviews you about style and context, and generates production-ready React components that are automatically added to your collection.

## Features

- **Conversation-Driven Generation** — Describe design ideas in natural language, Claude handles the rest
- **Component Library** — Reusable UI elements organized by category (Buttons, Cards, Inputs, etc.)
- **Layout Patterns** — Page structures and composition patterns (Sidebar, Grid, Dashboard)
- **Color Palettes** — Harmonious color schemes with Huemint integration
- **Playground** — Design experiments with full context (style brief, palette, use case)
- **Linear-Inspired UI** — Minimal, elegant interface with precise typography and spacing

## How It Works

1. **Describe** — Tell Claude Code what you want to design (e.g., "I need a pricing card for a SaaS product")
2. **Interview** — Claude asks about mood, audience, use case, and constraints
3. **Palette** — Discuss colors or use [Huemint](https://huemint.com) to generate harmonious schemes
4. **Generate** — Claude creates the component and adds it to Skepal automatically

## Tech Stack

- **React 18** — UI framework
- **Vite 8** — Build tool with fast HMR
- **Tailwind CSS 4** — Utility-first styling
- **React Router** — Client-side routing

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
skepal/
├── src/
│   ├── components/        # Reusable UI components
│   ├── layouts/           # Layout patterns
│   ├── palettes/          # Color palette definitions
│   ├── playgrounds/       # Design experiments (auto-imported)
│   ├── lib/
│   │   ├── componentRegistry.jsx   # Component catalog
│   │   ├── layoutRegistry.jsx      # Layout catalog
│   │   ├── paletteRegistry.js      # Palette catalog
│   │   └── playgroundRegistry.js   # Auto-imports playgrounds
│   ├── pages/             # Route pages
│   └── index.css          # Global styles & theme
└── .claude/
    └── CLAUDE.md          # Project guidelines for Claude Code
```

## Adding New Content

### Via Claude Code (Recommended)

Simply describe what you want in conversation:

```
"Create a dark-themed notification card with an icon, title, and dismiss button"
```

Claude will:
1. Interview you about style preferences
2. Suggest or generate a color palette
3. Create the component file in the appropriate directory
4. Update the registry automatically

### Manually

1. **Components** — Add to `src/components/`, export in `src/lib/componentRegistry.jsx`
2. **Layouts** — Add to `src/layouts/`, export in `src/lib/layoutRegistry.jsx`
3. **Palettes** — Add to `src/lib/paletteRegistry.js`
4. **Playgrounds** — Add `.jsx` files to `src/playgrounds/` (auto-imported via Vite glob)

## Playground File Convention

Each playground experiment is a `.jsx` file in `src/playgrounds/`:

```jsx
export const meta = {
  title: 'Pricing Card',
  description: 'A SaaS pricing card with gradient accent',
  date: '2026-04-27',
  tags: ['card', 'pricing', 'saas'],
  style: {
    mood: 'professional, clean',
    audience: 'SaaS product users',
    useCase: 'Pricing page',
  },
  palette: {
    name: 'Default Dark',
    colors: ['#0a0a0f', '#8b5cf6', '#fafafa'],
    source: 'custom',
  },
}

export default function PricingCard() {
  return (
    <div className="max-w-sm mx-auto">
      {/* Your component JSX */}
    </div>
  )
}
```

Files are automatically discovered and displayed in the Playground page.

## Design Philosophy

Skepal follows Linear's design principles:

- **Extreme Minimalism** — Pure black backgrounds, subtle borders, no visual noise
- **Precise Typography** — Consistent font sizes (13px, 15px, 20px, 32px)
- **Generous Spacing** — Large gaps and padding for breathing room
- **Restrained Color** — Purple accent used sparingly, mostly grayscale
- **Content-First** — Let the work speak, not the interface

## Color System

```css
--color-skepal-bg: #09090b           /* Pure black background */
--color-skepal-surface: #0f0f11      /* Subtle surface */
--color-skepal-elevated: #18181b     /* Elevated elements */
--color-skepal-border: #1f1f23       /* Almost invisible borders */
--color-skepal-text: #fafafa         /* Primary text */
--color-skepal-text-secondary: #a1a1aa  /* Secondary text */
--color-skepal-accent: #8b5cf6       /* Purple accent */
```

## Integration with Claude Code

Skepal is designed to work seamlessly with Claude Code. The `.claude/CLAUDE.md` file contains project-specific guidelines that help Claude understand:

- File structure and naming conventions
- Design workflow (interview → palette → generate)
- When to update registries vs. create new files
- How to structure playground experiments

## License

MIT

## Credits

- Design inspiration: [Linear](https://linear.app)
- Color palette generation: [Huemint](https://huemint.com)
- Built with Claude Code
