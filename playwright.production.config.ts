import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  testMatch: "production_*.spec.ts",
  fullyParallel: true,
  retries: 1,
  reporter: "list",
  timeout: 30000,
  use: {
    baseURL: "https://www.tabstax.app",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
