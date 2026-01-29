require('dotenv').config();
const { defineConfig, devices } = require('@playwright/test');
const { debug } = require('console');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 1,
  timeout: process.env.CI ? 10000 : 5000,
  workers: process.env.CI ? 3 : 5,
  reporter: [
    ['@testdino/playwright', {
      serverUrl: 'https://staging-api.testdino.com',
      token: 'trx_staging_b68888caedc09f618f2541a85fc8ec478ff3900758f881fb5f82f8c592682512',
      debug: true,
      artifacts: false
    }]
  ],
  use: {
    trace: "retry-with-trace",
    screenshot: "on-first-failure",
    video: "on-first-retry",
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});