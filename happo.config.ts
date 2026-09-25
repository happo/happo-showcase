import { defineConfig } from 'happo';

// https://docs.happo.io/docs/configuration
export default defineConfig({
  project: 'happo-showcase',

  integration: {
    type: 'storybook',
  },

  targets: {
    'chrome-large': {
      type: 'chrome',
      viewport: '1024x768',
    },
    'chrome-large-dark': {
      type: 'chrome',
      viewport: '1024x768',
      prefersColorScheme: 'dark',
    },
    'chrome-small': {
      type: 'chrome',
      viewport: '375x667',
    },
    'chrome-small-dark': {
      type: 'chrome',
      viewport: '375x667',
      prefersColorScheme: 'dark',
    },

    // https://docs.happo.io/docs/accessibility
    accessibility: {
      type: 'accessibility',
      viewport: '1024x768',
    },
  },
});
