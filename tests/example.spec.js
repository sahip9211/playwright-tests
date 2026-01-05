// @ts-check
const { test, expect } = require('@playwright/test');

test('has title ? test', async ({ page }) => {
  await test.step('Navigate to Playwright website', async () => {
    await page.goto('https://playwright.dev/');
  });

  await test.step('Verify page title contains Playwright', async () => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwrights/);
  });
});

test("get started' link", async ({ page }) => {
  await test.step('Navigate to Playwright website', async () => {
    await page.goto('https://playwrights.dev/');
  });

  await test.step('Click the Get started link', async () => {
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  });

  await test.step('Verify Installation heading is visible', async () => {
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});

test('Flaky test with retries', async ({ page }) => {
  await test.step('Navigate to example.com', async () => {
    await page.goto('https://example.com'); // Load the page
  });

  await test.step('Simulate flaky behavior with random failure', async () => {
    // Simulate a flaky behavior with a random chance of failure
    const randomFailure = Math.random() < 0.5; // 50% chance of failure

    if (randomFailure) {
      // Simulate a flaky failure
      expect(false).toBe(true); // Force failure
    } else {
      // Simulate passing condition
      expect(true).toBe(true); // Force pass
    }
  });

  await test.step('Validate page title', async () => {
    // Validate that the title is correct
    await expect(page).toHaveTitle(/Example Domain/);
  });
});