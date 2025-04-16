import type { Meta, StoryObj } from '@storybook/react';

import { SignupForm } from './SignupForm';

const meta = {
  component: SignupForm,
  decorators: [
    Story => (
      <div style={{ padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SignupForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
