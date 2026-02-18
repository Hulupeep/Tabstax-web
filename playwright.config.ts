import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3001",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    // Serves the static export from out/ — run `npm run build` first
    command: "npx serve out -l 3001 --no-clipboard",
    url: "http://localhost:3001",
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
});
