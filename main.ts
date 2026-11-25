import { mkdirSync, writeFileSync } from "node:fs";

// One commit message for the worst fix ever: the button did nothing,
// so the "fix" was to delete the button entirely. Short, plain,
// the kind of thing a tired engineer types at the end of a bad day.
const message = "fix: button did nothing, so I deleted the button";

// The gate wants 1 to 100 characters of real text, nothing else.
// Fail loudly here instead of shipping an entry the scorer refuses.
if (message.length < 1 || message.length > 100) {
  throw new Error(`entry is ${message.length} characters, must be 1-100`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, message, "utf8");
