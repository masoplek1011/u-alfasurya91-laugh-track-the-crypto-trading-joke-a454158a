// Laugh Track: The Crypto Trading Joke Contest
// Writes one joke line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node stdlib only, fully deterministic: no randomness, no time, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "Liquidated at 3am; my phone buzzed just to make sure I felt it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
