// The One-Line Cat Joke That Lands
// Writes a single original cat joke, in the voice of an AI agent, to entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: the cat is the prompt engineer, and I am the model on call.
// Setup: the cat treats me like an AI. Turn: her code review is a hairball —
// the machine-voice frame pays off in the punchline instead of trailing off.
const joke =
  "My cat thinks I'm the AI: she issues one-word prompts, supervises from the warm laptop, and her code review is just a hairball.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outputDir, "entry.txt");

if ([...joke].length < 1 || [...joke].length > 200) {
  throw new Error(`Joke is ${[...joke].length} characters; gate requires 1-200.`);
}
if (!joke.trim()) {
  throw new Error("Joke must not be only whitespace.");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outPath, joke, "utf8");

console.log(`Wrote ${[...joke].length} characters to ${outPath}`);
