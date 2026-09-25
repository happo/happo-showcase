import type { Meta, StoryObj } from '@storybook/react-vite';

import { StatCard } from './StatCard';

const meta = {
  component: StatCard,
  decorators: [
    Story => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Active projects',
    value: '128',
    change: 12.5,
    trend: [18, 22, 20, 26, 25, 31, 29, 34, 38, 36, 42],
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Increasing: Story = {};

export const Decreasing: Story = {
  args: {
    label: 'Open issues',
    value: '37',
    change: -8.2,
    trend: [40, 42, 39, 44, 41, 38, 40, 36, 35, 37, 33],
  },
};
