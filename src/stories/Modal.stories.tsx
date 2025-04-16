import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Modal } from './Modal';
import { SignupForm } from './SignupForm';

const meta = {
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onClose: fn(),
    open: true,
    title: 'Modal Title',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    title: 'Sign up',
    children: <SignupForm title={null} />,
  },
};

export const Closed: Story = {
  args: {
    open: false,
    ...Open.args,
  },
};
