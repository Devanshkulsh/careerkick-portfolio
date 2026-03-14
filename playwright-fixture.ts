import { test as base, expect } from "@playwright/test";

/**
 * Custom Playwright test fixture layer.
 * Extend this file if shared setup or utilities are required.
 */

type Fixtures = {
  // Example:
  // authToken: string;
};

export const test = base.extend<Fixtures>({
  // Example fixture:
  // authToken: async ({}, use) => {
  //   const token = "mock-token";
  //   await use(token);
  // },
});

export { expect };