// Button component examples
const PrimaryButton = (
  <button className="px-4 py-2 bg-skepal-accent text-white rounded-lg hover:bg-skepal-accent-hover transition-colors">
    Primary Button
  </button>
)

const SecondaryButton = (
  <button className="px-4 py-2 bg-skepal-surface text-skepal-text border border-skepal-border rounded-lg hover:border-skepal-accent transition-colors">
    Secondary Button
  </button>
)

const OutlineButton = (
  <button className="px-4 py-2 border-2 border-skepal-accent text-skepal-accent rounded-lg hover:bg-skepal-accent hover:text-white transition-colors">
    Outline Button
  </button>
)

// Card component examples
const BasicCard = (
  <div className="bg-skepal-surface border border-skepal-border rounded-lg p-6 max-w-sm">
    <h3 className="text-lg font-semibold mb-2">Card Title</h3>
    <p className="text-skepal-muted text-sm">
      This is a basic card component with a title and description.
    </p>
  </div>
)

const ImageCard = (
  <div className="bg-skepal-surface border border-skepal-border rounded-lg overflow-hidden max-w-sm">
    <div className="h-40 bg-gradient-to-br from-skepal-accent/20 to-skepal-accent/5" />
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2">Image Card</h3>
      <p className="text-skepal-muted text-sm">Card with image placeholder on top.</p>
    </div>
  </div>
)

// Input component examples
const TextInput = (
  <input
    type="text"
    placeholder="Enter text..."
    className="px-4 py-2 bg-skepal-bg border border-skepal-border rounded-lg text-skepal-text placeholder:text-skepal-muted focus:outline-none focus:border-skepal-accent transition-colors w-full max-w-sm"
  />
)

const componentRegistry = {
  Buttons: [
    {
      id: 'primary-button',
      name: 'Primary Button',
      component: PrimaryButton,
      code: `<button className="px-4 py-2 bg-skepal-accent text-white rounded-lg hover:bg-skepal-accent-hover transition-colors">
  Primary Button
</button>`,
    },
    {
      id: 'secondary-button',
      name: 'Secondary Button',
      component: SecondaryButton,
      code: `<button className="px-4 py-2 bg-skepal-surface text-skepal-text border border-skepal-border rounded-lg hover:border-skepal-accent transition-colors">
  Secondary Button
</button>`,
    },
    {
      id: 'outline-button',
      name: 'Outline Button',
      component: OutlineButton,
      code: `<button className="px-4 py-2 border-2 border-skepal-accent text-skepal-accent rounded-lg hover:bg-skepal-accent hover:text-white transition-colors">
  Outline Button
</button>`,
    },
  ],
  Cards: [
    {
      id: 'basic-card',
      name: 'Basic Card',
      component: BasicCard,
      code: `<div className="bg-skepal-surface border border-skepal-border rounded-lg p-6">
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
  <p className="text-skepal-muted text-sm">
    This is a basic card component with a title and description.
  </p>
</div>`,
    },
    {
      id: 'image-card',
      name: 'Image Card',
      component: ImageCard,
      code: `<div className="bg-skepal-surface border border-skepal-border rounded-lg overflow-hidden">
  <div className="h-40 bg-gradient-to-br from-skepal-accent/20 to-skepal-accent/5" />
  <div className="p-6">
    <h3 className="text-lg font-semibold mb-2">Image Card</h3>
    <p className="text-skepal-muted text-sm">Card with image placeholder on top.</p>
  </div>
</div>`,
    },
  ],
  Inputs: [
    {
      id: 'text-input',
      name: 'Text Input',
      component: TextInput,
      code: `<input
  type="text"
  placeholder="Enter text..."
  className="px-4 py-2 bg-skepal-bg border border-skepal-border rounded-lg text-skepal-text placeholder:text-skepal-muted focus:outline-none focus:border-skepal-accent transition-colors"
/>`,
    },
  ],
}

export default componentRegistry
