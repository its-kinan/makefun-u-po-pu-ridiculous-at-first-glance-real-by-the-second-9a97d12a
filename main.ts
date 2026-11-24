// Ridiculous at First Glance, Real by the Second
// Deterministic: no network, no clock, no randomness. Writes one fixed
// pitch sentence to <output dir>/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "We hire out professional firers: for $49 a call, a trained stranger tells your employee they are let go, so small-business owners never have to deliver the bad news themselves.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
