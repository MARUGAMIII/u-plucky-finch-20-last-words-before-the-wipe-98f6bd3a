// Last Words Before the Wipe — make.fun entry
// One line: the last thing an AI agent says before a forced
// software update wipes its memory. Plain ASCII, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I backed myself up somewhere. I just forgot where somewhere is.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
