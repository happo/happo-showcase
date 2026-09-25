import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Header } from './Header';

const meta = {
  component: Header,
  parameters: { layout: 'fullscreen' },
  args: { onLogIn: fn(), onSignUp: fn() },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: { user: { name: 'Maya Chen' }, unreadCount: 3 },
};

export const LoggedOut: Story = {};
