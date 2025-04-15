// .happo.js
const { RemoteBrowserTarget } = require('happo.io');
const happoPluginStorybook = require('happo-plugin-storybook');

// https://docs.happo.io/docs/configuration
module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,

  // https://docs.happo.io/docs/configuration#plugins
  plugins: [happoPluginStorybook()],

  // https://docs.happo.io/docs/configuration#targets
  targets: {
    'chrome-large': new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
      prefersReducedMotion: true,
      freezeAnimations: 'last-frame',
    }),

    'chrome-large-dark': new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
      prefersReducedMotion: true,
      freezeAnimations: 'last-frame',
      prefersColorScheme: 'dark',
    }),

    'chrome-small': new RemoteBrowserTarget('chrome', {
      viewport: '375x667',
      prefersReducedMotion: true,
      freezeAnimations: 'last-frame',
    }),

    'chrome-small-dark': new RemoteBrowserTarget('chrome', {
      viewport: '375x667',
      prefersReducedMotion: true,
      freezeAnimations: 'last-frame',
      prefersColorScheme: 'dark',
    }),
  },
};
