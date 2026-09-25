import type { Meta, StoryObj } from '@storybook/react-vite';

import { projects, stats } from '../../fixtures';
import { Dashboard } from './Dashboard';

const meta = {
  component: Dashboard,
  parameters: { layout: 'fullscreen' },
  args: { userName: 'Maya Chen', stats, projects },
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
