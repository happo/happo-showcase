import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from './Button';

const meta = {
  component: Button,
  args: { children: 'Save changes', onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Cancel' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Learn more' },
};

export const Danger: Story = {
  args: { variant: 'danger', icon: 'trash', children: 'Delete project' },
};

export const WithIcon: Story = {
  args: { icon: 'plus', children: 'New project' },
};

export const Loading: Story = {
  args: { loading: true, children: 'Saving…' },
};

export const Sizes: Story = {
  render: args => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button {...args} size="sm" />
      <Button {...args} size="md" />
      <Button {...args} size="lg" />
    </div>
  ),
};
