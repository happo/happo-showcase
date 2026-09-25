import type { Meta, StoryObj } from '@storybook/react-vite';

import { PricingCard, type PricingCardProps } from './PricingCard';

const plans = {
  starter: {
    name: 'Starter',
    price: 0,
    description: 'For individuals trying things out.',
    features: ['Up to 3 projects', 'Basic reports', 'Community support'],
    cta: 'Get started',
  },
  team: {
    name: 'Team',
    price: 12,
    description: 'For growing teams that ship together.',
    features: [
      'Unlimited projects',
      'Advanced reports',
      'Guest access',
      'Priority support',
    ],
    cta: 'Start free trial',
    featured: true,
  },
  enterprise: {
    name: 'Enterprise',
    price: 24,
    description: 'For organizations with advanced needs.',
    features: ['Everything in Team', 'SAML single sign-on', 'Audit log'],
    cta: 'Contact sales',
  },
} satisfies Record<string, PricingCardProps>;

const meta = {
  component: PricingCard,
  args: plans.starter,
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Starter: Story = {};

export const Featured: Story = {
  args: plans.team,
};

export const Plans: Story = {
  render: () => (
    <div className="pricing-grid">
      {Object.values(plans).map(plan => (
        <PricingCard key={plan.name} {...plan} />
      ))}
    </div>
  ),
};
