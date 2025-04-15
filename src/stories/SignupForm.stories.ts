import type { Meta, StoryObj } from '@storybook/react';

import { SignupForm } from './SignupForm';

const meta = {
  component: SignupForm,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SignupForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
