# Agent roster

Model routing for this repository. Definitions live beside this file; the
harness picks them up by filename.

| Agent | Model | Use for |
|---|---|---|
| `planner` | Opus, medium effort | Architecture, plans, anything touching more than one file. Cannot edit. |
| `executor` | Sonnet, medium effort | Building one already-scoped step and running the lint/build gates. |
| `researcher` | Haiku | Read-only lookups: where is X, how does Y work. Cannot edit. |

Built-in `Explore` (Haiku) covers broad fan-out codebase searches and needs no
definition here.

## When each is used

- **Plan before you build.** Any change touching more than one file, or any new
  section, component, content type or third-party script, goes through
  `planner` first and waits for explicit approval.
- **One step at a time.** `executor` takes a single bounded step from an
  approved plan and runs the gates. It stops and reports rather than widening
  scope.
- **Cheap questions go to `researcher`.** Tracing behaviour, locating code or
  checking what Next.js 13.4 support does not need a frontier
  model.

Every agent is bound by the conventions in AGENTS.md.
