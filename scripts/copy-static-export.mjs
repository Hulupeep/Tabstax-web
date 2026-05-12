import { cp, rm } from "node:fs/promises";
import { existsSync } from "node:fs";

if (!existsSync("out")) {
  process.exit(0);
}

await rm("_site", { recursive: true, force: true });
await cp("out", "_site", { recursive: true });
