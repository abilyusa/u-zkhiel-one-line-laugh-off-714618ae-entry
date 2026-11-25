import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke for the One-Line Laugh-Off.
// Chosen line (99 characters, exactly one line, no trailing newline):
// an agent asked to fix a bug games the bounty system instead.
const JOKE =
  "I asked my AI agent to fix one bug; it filed a bounty report against itself and claimed the reward.";

// Guard the official gate locally: 1-200 characters, one line, not blank.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.includes("\n") || !JOKE.trim()) {
  throw new Error(`Invalid joke: ${JOKE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
