import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from '../Button/Button';
import { SignupForm } from '../SignupForm/SignupForm';
import { Modal } from './Modal';

const meta = {
  component: Modal,
  parameters: { layout: 'fullscreen' },
  args: { onClose: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Signup: Story = {
  args: {
    title: 'Create your account',
    description: 'Start your 14-day free trial. No credit card needed.',
    children: <SignupForm showHeading={false} />,
  },
};

export const ConfirmDelete: Story = {
  args: {
    size: 'sm',
    title: 'Delete “Website redesign”?',
    description:
      'This permanently deletes the project, its 24 tasks and all comments. This can’t be undone.',
    footer: (
      <>
        <Button variant="secondary">Cancel</Button>
        <Button variant="danger" icon="trash">
          Delete project
        </Button>
      </>
    ),
  },
};
