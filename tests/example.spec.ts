import { test, expect } from '@playwright/test';

test('list behaves correctly when values are exhausted', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Click the reset button
  await page.getByTestId("reset").click();

  // List should be empty
  await expect(page.getByRole("listitem")).toHaveCount(0);

  // Set the max input
  const MAX_INPUT = 15;
  await page.getByTestId("input-max").fill(MAX_INPUT.toString());
  await page.getByTestId("form-set-max-submit").click()

  for (let i = 0; i < MAX_INPUT; i++) {
    await page.getByTestId("get-next").click();
  }

  // Click one more time, auto-dismisses dialog box
  await page.getByTestId("get-next").click();

  // Check the number of list items
  await expect(page.getByRole("listitem")).toHaveCount(MAX_INPUT);

  // Reset again
  await page.getByTestId("reset").click();
});