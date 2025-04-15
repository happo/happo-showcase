import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';

import 'happo-plugin-storybook/register';
import happoDecorator from 'happo-plugin-storybook/decorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [happoDecorator];

export default preview;
