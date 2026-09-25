import { defineConfig } from 'happo';

// The Playwright end-to-end tests report to their own Happo project, separate
// from the Storybook components in happo.config.ts.
// https://docs.happo.io/docs/multi-project
export default defineConfig({
  project: 'happo-showcase-e2e',

  integration: {
    type: 'playwright',
  },

  targets: {
    'chrome-large': {
      type: 'chrome',
      viewport: '1024x768',
    },
    'chrome-small': {
      type: 'chrome',
      viewport: '375x667',
    },
  },
});
