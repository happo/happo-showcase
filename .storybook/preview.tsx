import type { Preview } from '@storybook/react-vite';
import happoDecorator from 'happo/storybook/decorator';

import '../src/styles/global.css';

const preview: Preview = {
  decorators: [happoDecorator],
  parameters: {
    layout: 'padded',
  },
};

export default preview;
