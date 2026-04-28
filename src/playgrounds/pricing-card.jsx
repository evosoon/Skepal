export const meta = {
  title: 'Pricing Card',
  description: 'A SaaS pricing card with gradient accent, feature list, and CTA button.',
  date: '2026-04-25',
  tags: ['card', 'pricing', 'saas'],
  status: 'draft',
  style: {
    mood: 'professional, clean',
    audience: 'SaaS product users',
    useCase: 'Pricing page',
  },
  palette: {
    name: 'Default Dark',
    colors: ['#0f0f14', '#1a1a24', '#2a2a3a', '#a78bfa', '#e4e4ed'],
    source: 'existing',
  },
}

export default function PricingCard() {
  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-[#1a1a24] border border-[#2a2a3a] rounded-2xl overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#a78bfa] to-[#7c3aed]" />
        <div className="p-8">
          <h3 className="text-[#e4e4ed] text-xl font-semibold mb-1">Pro Plan</h3>
          <p className="text-[#8888a0] text-sm mb-6">For growing teams</p>

          <div className="mb-6">
            <span className="text-4xl font-bold text-[#e4e4ed]">$29</span>
            <span className="text-[#8888a0] ml-1">/month</span>
          </div>

          <ul className="space-y-3 mb-8">
            {['Unlimited projects', 'Team collaboration', 'Priority support', 'Custom domains', 'Analytics dashboard'].map(
              (feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-[#e4e4ed]">
                  <span className="text-[#a78bfa]">✓</span>
                  {feature}
                </li>
              )
            )}
          </ul>

          <button className="w-full py-3 bg-[#a78bfa] text-white rounded-lg font-medium hover:bg-[#c4b5fd] transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
