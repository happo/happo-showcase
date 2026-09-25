import type { Meta, StoryObj } from '@storybook/react-vite';

import { SignupForm } from './SignupForm';

const meta = {
  component: SignupForm,
  decorators: [
    Story => (
      <div className="signup-form-card">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SignupForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    defaultValues: {
      name: 'Maya Chen',
      email: 'maya@fernway.dev',
      password: 'correct horse',
    },
    errors: { email: 'An account with this email already exists.' },
  },
};
