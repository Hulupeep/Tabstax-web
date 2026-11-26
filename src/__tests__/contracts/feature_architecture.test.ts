/**
 * Contract tests for docs/contracts/feature_architecture.yml
 * ARCH-005: every dynamic route (src/app/**\/[param]/page.tsx) must export
 * `dynamicParams = false`, so the static export serves only pre-generated
 * slugs and an unknown slug is a 404.
 * Run with: npm test -- feature_architecture
 */

import { readdirSync, readFileSync, statSync } from "fs";
import { join, relative } from "path";

const root = join(__dirname, "../../..");
const appDir = join(root, "src", "app");

const DYNAMIC_PARAMS_FALSE = /^\s*export\s+const\s+dynamicParams\s*=\s*false\s*;?\s*$/m;

function findDynamicRoutePages(dir: string): string[] {
  const found: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (!statSync(full).isDirectory()) continue;
    if (/^\[.+\]$/.test(entry)) {
      const page = join(full, "page.tsx");
      try {
        statSync(page);
        found.push(page);
      } catch {
        // dynamic segment without a page.tsx here; its children are still scanned
      }
    }
    found.push(...findDynamicRoutePages(full));
  }
  return found;
}

describe("Contract: feature_architecture ARCH-005", () => {
  const pages = findDynamicRoutePages(appDir).map((p) => relative(root, p));

  it("pins the known dynamic routes", () => {
    expect(pages).toEqual(
      expect.arrayContaining([
        "src/app/blog/[slug]/page.tsx",
        "src/app/use-cases/[slug]/page.tsx",
      ]),
    );
  });

  it.each(pages)("%s exports dynamicParams = false", (relPath) => {
    const source = readFileSync(join(root, relPath), "utf-8");
    expect(source).toMatch(DYNAMIC_PARAMS_FALSE);
  });
});
