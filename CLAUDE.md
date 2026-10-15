@AGENTS.md

## How this project tracks

Delivery is tracked in Backpack, workspace `portfolio` (see `.backpack.json`),
through the `backpack` MCP tools. There is no tracking document, and tracking
is never committed.

- **Orientation.** The session starts with "where are we". Ask `whats_next`
  for the next story and `get_story` for its detail. Don't guess the next task.
- **Record each move as it happens**, with `set_status`:
  - start work: `in_progress`, with the task branch (cut from `main`);
  - open the pull request into `main`: `in_review`, with its link;
  - merged into `main`: `merged`, with the merge commit;
  - the GitHub Pages deploy for that merge succeeded: `deployed`.

  `main` is the only long-lived branch, and every merge into it deploys
  (AGENTS.md, "Deployment").
- **While in progress,** keep the story's activity current with
  `update_story`: planning, building, testing, or waiting (and on what).
- **Log as you go** with `log`: decisions with their reason, notable commits,
  notes. Entries are never edited; fix a mistake with a `correction` that names
  the entry it corrects.
- **Stuck or no longer needed:** `on_hold` or `closed`, with a reason.
- **Search first.** Before adding a story or an idea, ask `search` whether
  one already covers it, by keyword or by meaning. Closed and dropped ones
  come back too, with their state.
- **New work** goes in with `add_story`, placed with `before` or `after`, with
  the `reasoning` for that spot. It waits as **proposed** until a person
  approves it (`set_status` to `backlog`, after `move_story` if they pick
  another spot) or declines it (`closed`, with a reason). Then add its
  dependencies with `add_dependency`. Backpack refuses an order that breaks a
  dependency; read its reason and place the story again.
- **Rough thoughts** that aren't work yet go in with `add_idea`, also with
  `reasoning`, and wait as proposed until a person approves them. Once the
  stories or phase it became exist, `refine_idea` links them and closes the
  idea; `drop_idea` closes one that became nothing, with a reason.

## Working through the backlog

"Complete the backlog" (or "work the backlog") means: deliver every ready
story, one at a time, with a sub-agent doing each build. This instruction is
the standing request to use sub-agents for it. Opening pull requests into
`main` is authorised; merging them is not, because a merge into `main`
deploys the live site.

The main session coordinates and keeps Backpack current; it does not write
the code. For each story:

1. `whats_next`. If no story is ready, stop and report.
2. Cut the task branch from an up-to-date `origin/main`, named as in
   AGENTS.md ("Deployment"); `set_status` `in_progress` with the branch.
3. Hand the story to the `executor` sub-agent (`.claude/agents/`), one at a
   time, never in parallel. Give it the story's id, goal and plan, the branch,
   and these rules on top of its own: follow the plan; if the change alters
   how the site is built, run, configured or deployed, update README.md and
   AGENTS.md to match and list the doc changes in the report; commit on the
   branch (don't push); report any deviation from the plan and why, and any
   gap or new work it found. Use the `planner` agent first only when the
   story's plan is thin.
4. Review the diff against the goal (`git diff origin/main...`); for such
   changes, check the docs match. Send it back to the same sub-agent
   (`SendMessage`) for fixes.
5. Push and open the pull request into `main` (`in_review`). Log decisions
   and deviations. Leave the merge to a person.
6. New work the sub-agent found: `search`, then `add_story` as proposed.
   Don't wait for approval; continue with the next ready story.
7. If the build fails twice or the plan doesn't hold, `on_hold` with the
   reason and move on.

Content-only edits to `app/data.ts` and refactors that don't change what the
site shows need no doc change.

Finish with a summary: pull requests opened (awaiting merge), stories on hold
and why, proposed stories awaiting approval.
