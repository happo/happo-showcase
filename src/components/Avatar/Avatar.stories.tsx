import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar, AvatarGroup } from './Avatar';

const meta = {
  component: Avatar,
  args: { name: 'Maya Chen' },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: args => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup
      size="md"
      names={[
        'Maya Chen',
        'Jonas Weber',
        'Priya Raman',
        'Sam Okafor',
        'Lena Ortiz',
        'Theo Park',
      ]}
    />
  ),
};
