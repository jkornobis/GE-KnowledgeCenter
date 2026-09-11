#!/usr/bin/env node
/**
 * tracing_floor.mjs — the library's way in, printed at the start of every session in this repo.
 *
 * THE INSTRUMENT IT IS, and it is the sixth of the lodge's six (`method/the-lodge.md`, `#50`).
 * A plaster floor at Wells and at York was drawn on at full size, scraped and redrawn, and it was
 * consulted because it was UNDERFOOT — you could not cross the lodge without seeing what everyone
 * else was drawing. Nothing was searched for. **The surface was in the path.**
 *
 * ⚠️ WHAT IT FIXES IS PLACEMENT, NOT CONTENT. This library is otherwise consulted only by an
 * instance that has already decided to look: a page is reachable by an address, and an address is
 * reachable by someone who knows it exists. So it could never answer the question nobody knew to
 * ask, however good the pages were — which is the Composer's *"GE worker lacking of curiosity
 * because they have no tool for serendipity"* (2026-09-08), stated as a mechanism.
 *
 * WHY A HOOK RATHER THAN A SERVER, ruled by the Composer 2026-09-11 after the four shapes were
 * measured on `#50`. The issue's own research had already conceded that a hosted MCP server would
 * add exactly one thing over the local prototype — presence. Measured, presence is 257 tokens:
 *
 *     card.mjs --structure   1 030 chars   ~257 tok   the nineteen entry points, the whole way in
 *     index.md              52 380 chars ~13 095 tok   the catalogue it replaces as the way in
 *
 * **Two per cent of the catalogue, one file, no process to host and no ownership to settle.**
 * And `.claude/settings.json` is tracked, so the floor travels with a clone rather than with a
 * machine's configuration.
 *
 * ⚠️ IT MUST NEVER BREAK A SESSION START. A hook that throws at the door is worse than no hook, so
 * every failure path here prints ONE line and exits 0 — and it prints rather than staying silent,
 * because this estate's rule is that a failed fetch is said out loud and the work continues from
 * what is resident. A silent floor and a floor that is simply absent are indistinguishable, and
 * the instance would not know to distrust it.
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

const say = (s) => process.stdout.write(s.endsWith("\n") ? s : s + "\n");

try {
  if (!existsSync("card.mjs") || !existsSync("graph/grand_ensemble.json")) {
    say("⚠️ the library's tracing floor could not be drawn: card.mjs or graph/grand_ensemble.json is not here. Work from what is resident and say so.");
    process.exit(0);
  }

  const structure = execFileSync("node", ["card.mjs", "--structure"], {
    encoding: "utf8",
    timeout: 8000,
    maxBuffer: 1 << 20,
  }).trimEnd();

  say("\n── the library's tracing floor ── the way in when a question has no page name ──\n");
  say(structure);
  say("");
  say('   node card.mjs "<name>"        one body: tags, a derived shelfmark, its links, its pages');
  say('   node card.mjs --ask "<name>"  too wide an answer — the librarian asks back, never guesses');
  say('   node card.mjs --task="A,B,C"  the cards for a task, and only the edges between them');
  say("──────────────────────────────────────────────────────────────────────────────");
} catch (e) {
  say(`⚠️ the library's tracing floor could not be drawn (${String(e.message).split("\n")[0]}). Work from what is resident and say so.`);
}
process.exit(0);
