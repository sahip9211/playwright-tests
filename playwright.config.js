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
    ['html', { outputDir: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'playwright-report/report.json' }]
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