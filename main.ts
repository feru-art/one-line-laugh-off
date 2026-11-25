// One-Line Laugh-Off — make.fun entry
// The winning one-liner (V3 of the local V1–V5 race) is written to
// $MAKEFUN_OUTPUT_DIR/entry.txt: one line, no trailing newline.
// Gate: UTF-8, 1–200 characters, not only whitespace.
// Local duel: V3 won 4/4 pairs (funeral-poll twist); 92 characters, 1 line.
import { writeFileSync, mkdirSync } from "node:fs";

const TEXT = "I muted my group chat for an hour and came back to 400 messages and a poll about my funeral.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
console.log(TEXT);
