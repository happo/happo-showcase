import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from '../Button/Button';
import { ENTER_DURATION_MS, Toast, ToastStack } from './Toast';

const meta = {
  component: Toast,
  args: {
    title: 'Changes saved',
    children: 'Your project settings are up to date.',
    onDismiss: fn(),
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {};

export const Error: Story = {
  args: {
    tone: 'error',
    title: 'Couldn’t save changes',
    children: 'Check your connection and try again.',
    action: (
      <Button size="sm" variant="secondary">
        Retry
      </Button>
    ),
  },
};

export const Stack: Story = {
  render: args => (
    <ToastStack>
      <Toast {...args} tone="info" title="Maya invited you to “Q3 launch”">
        You now have edit access.
      </Toast>
      <Toast {...args} />
    </ToastStack>
  ),
};

// Captured as an animated snapshot, so reviewers can see (and diff) how the
// toast enters. https://docs.happo.io/docs/animated-snapshots
//
// The stage leaves room around the toast, so the snapshot stays the same size
// while the toast moves.
export const Entering: Story = {
  decorators: [
    Story => (
      <div style={{ width: 480, padding: '40px 24px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    happo: {
      animate: {
        mode: 'always',
        duration: ENTER_DURATION_MS,
        fps: 30,
        prefersReducedMotion: false,
      },
    },
  },
};
