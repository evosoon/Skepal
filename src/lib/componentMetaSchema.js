// Component metadata structure
// Each component should export a `meta` object with this shape

export const componentMetaSchema = {
  // Basic info
  name: 'string',              // Display name
  description: 'string',       // Brief description
  category: 'string',          // Primary category (Navigation, Cards, Buttons, Inputs, etc.)
  tags: ['string'],            // Searchable tags

  // Design context
  style: {
    mood: 'string',            // e.g., "minimal, professional"
    inspiration: 'string',     // e.g., "Linear", "Stripe"
    audience: 'string',        // Target audience
    useCase: 'string',         // Primary use case
  },

  // Color palette
  palette: {
    name: 'string',            // Palette name
    colors: ['string'],        // Hex codes
    source: 'string',          // e.g., "Huemint", "custom"
  },

  // Variants (optional)
  variants: ['string'],        // e.g., ['default', 'compact', 'with-icon']

  // Usage info (optional)
  props: {                     // Component props documentation
    propName: {
      type: 'string',
      required: false,
      default: 'value',
      description: 'string',
    },
  },

  // Metadata
  createdAt: 'string',         // ISO date
  updatedAt: 'string',         // ISO date
}

// Example usage:
/*
export const meta = {
  name: 'Navigation Bar',
  description: 'Minimal top navigation with logo and links',
  category: 'Navigation',
  tags: ['header', 'nav', 'minimal', 'sticky'],

  style: {
    mood: 'minimal, professional',
    inspiration: 'Linear',
    audience: 'SaaS products',
    useCase: 'Main app navigation',
  },

  palette: {
    name: 'Skepal Dark',
    colors: ['#09090b', '#8b5cf6', '#fafafa', '#a1a1aa'],
    source: 'custom',
  },

  variants: ['default', 'with-logo', 'compact'],

  createdAt: '2026-04-27',
}

export default function NavigationBar({ variant = 'default', items }) {
  // Component implementation
}
*/
