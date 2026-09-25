import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    { directory: '../src/components', titlePrefix: 'Components' },
    { directory: '../src/pages', titlePrefix: 'Pages' },
  ],
  addons: ['happo/storybook/preset'],
  framework: '@storybook/react-vite',
};

export default config;
