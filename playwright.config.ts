import { defineConfig, devices } from '@playwright/test';

// End-to-end tests of the app, which take Happo screenshots as they go.
// Run them with `pnpm happo:e2e`.
export default defineConfig({
  testDir: 'e2e',
  use: {
    baseURL: 'http://localhost:5173',
    ...devices['Desktop Chrome'],
  },
  webServer: {
    command: 'pnpm dev --port 5173 --strictPort',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
  },
});
