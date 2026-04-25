# Skepal Project Guidelines

## Project Overview
Skepal (Sketch + Palette) is a design system and component library for exploring UI/UX elements, layouts, and color palettes. It serves as a living collection of reusable design patterns.

## Design Workflow
When working on design-related tasks in this project, follow this process:

1. **Style Interview** - Before creating new designs, ask about:
   - Desired mood/feeling (playful, professional, minimal, etc.)
   - Target audience and use case
   - Reference designs or inspirations
   - Specific constraints (accessibility, brand colors, etc.)

2. **Color Selection** - For new color palettes:
   - Consider using Huemint (https://huemint.com) for harmonious color generation
   - User can visit the site and provide chosen colors
   - Or describe the desired palette mood and I'll suggest colors
   - Save palettes to `src/lib/paletteRegistry.js`

3. **Playground First** - For complex components/layouts:
   - Create interactive prototype in `src/playgrounds/` first
   - Iterate based on feedback
   - Move finalized version to appropriate registry

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
