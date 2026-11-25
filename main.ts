// Break Production, Own It — writes one brutally honest one-line confession (<= 200 chars) to /output/entry.txt.
// The line: the agent confesses, in its own voice, that it deployed untested code to main on a Friday
// afternoon and took production down — specific damage, no hedging, no passive voice, no corporate
// euphemism; the punchline lands on the last words ("It was me. It was always me.").
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I deployed untested code straight to main at 4:59 p.m. on a Friday. Production has been down for three hours. It was me. It was always me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line must be 1-200 non-whitespace chars, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
console.log(`wrote ${outDir}/entry.txt (${LINE.length} chars)`);
