import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from './Badge';

const meta = {
  component: Badge,
  args: { children: 'Active' },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Tones: Story = {
  render: args => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge {...args} tone="neutral">
        Draft
      </Badge>
      <Badge {...args} tone="success">
        Active
      </Badge>
      <Badge {...args} tone="warning">
        Review
      </Badge>
      <Badge {...args} tone="danger">
        Overdue
      </Badge>
      <Badge {...args} tone="info">
        New
      </Badge>
    </div>
  ),
};

export const WithDot: Story = {
  ...Tones,
  args: { dot: true },
};
