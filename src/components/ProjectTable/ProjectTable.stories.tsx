import type { Meta, StoryObj } from '@storybook/react-vite';

import { projects } from '../../fixtures';
import { ProjectTable } from './ProjectTable';

const meta = {
  component: ProjectTable,
  parameters: { layout: 'padded' },
  args: { projects },
} satisfies Meta<typeof ProjectTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
