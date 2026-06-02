# Handoff — throughline-system-test design system

A session-to-session handoff so work can continue on another device. For the
machine-readable state, see `design-system.json` (or run
`/throughline:design-system-status`). This doc captures the **context and
decisions** that aren't in the manifest.

_Last updated: 2026-06-02, after merging PR #6._

---

## What this is

A design system built with the **throughline** Claude Code plugin (v0.2.0): a
two-tier token system, icons, and components authored in **Figma**, synced to
**code** via Style Dictionary, with **Storybook + Chromatic**. "One unbroken line
from design to code."

- **Repo:** https://github.com/jrpease/throughline-system-test (monorepo, pnpm + turborepo)
- **Figma file:** key `OCiZiGpsJ4ncPD8r205BjC` — "Throughline Plugin Test"
- **UI framework:** shadcn (React + Vite + Tailwind)
- **Coding level on record:** `new` (explanations are scaled up)
- **Current branch:** `main` (PR #6 merged; everything is on main)

## Current state (high level)

- ✅ Tokens: 2-tier (Primitives + Semantic), light/dark modes, styles (Text, Elevation)
- ✅ Foundations page, Icons (Lucide, ~68-icon subset, `lucide-react` installed)
- ✅ Repo at `github` stage, token sync (shadcn adapter), Storybook + Chromatic
- ✅ Cover page (built this session)
- ✅ Components (14): Button, Spinner, Badge, Avatar, Input, Checkbox, Switch,
  Card, Select, Radio, Textarea, Tooltip, **Select Menu**, **Select Menu Item**

## What happened this session

1. **Brought the system up to date with plugin v0.2.0** (was built on v0.1.0).
2. **Cover page** — built a branded Cover page (first page of the Figma file),
   bound to semantic tokens + spacing tokens.
3. **Manifest migrated to schemaVersion 2** — added `figma.coverPageBuilt`,
   `canPublish`, `libraryPublished`, `publishedAt`, `components.meta`,
   `components.instanceSwapUpgradePending`.
4. **New component: Select Menu** — the dropdown options panel that pairs with
   the Select trigger. Built end-to-end via `/throughline:new-component`
   (Figma → tokens → code + stories). Shipped in **PR #6 (merged)**.

## Decisions & gotchas (read before continuing)

- **Figma default variable mode is Dark** (mode id `4:1`; Light is `4:2`). Do NOT
  pin/override the mode without a reason — let nodes inherit the default. (There's
  a memory note about this; the cover page initially got wrongly pinned to Light.)
- **Cover page thumbnail is a manual step.** The Figma API can't set a file
  thumbnail — right-click the Cover frame in Figma → **Set as thumbnail**. Not yet done.
- **Select Menu / Select Menu Item are `status: draft`.** Bump to `stable` in
  `design-system.json` (`components.meta`) + the Figma doc card when confident.
- **Code Connect is OFF** (`storybook.codeConnect: false`). It needs a Figma
  Organization plan AND a published library (`figma.libraryPublished: false`).
  Until then, the repo component spec records the Figma↔code mapping.
- **Publishing gate:** `components.instanceSwapUpgradePending` is empty now. If you
  build a component with a typed icon/component slot before publishing the library,
  it falls back to toggle + manual-swap and gets queued here for a later upgrade pass.
- **Elevation is a Figma _style_, not a synced variable** — it does not appear as a
  CSS var. In code, use Tailwind `shadow-md`/`shadow-lg` (see `Card`, `SelectMenu`).

## Code conventions (match these)

- Components in `packages/ui/src/components/<Name>/<Name>.tsx` + `<Name>.stories.tsx`,
  exported from `packages/ui/src/index.ts`.
- `cva` + `VariantProps`, `React.forwardRef`, `displayName`, `cn()` from `../../lib/cn`.
- **Never hardcode values** — consume tokens via Tailwind theme classes
  (`text-foreground`, `border-input`, `ring-ring`) or raw `var(--color-*)` /
  `var(--radius-*)` utilities. Token CSS vars live in `packages/tokens/build/css`.
- Stories: `Meta`/`StoryObj`, `title: "Components/<Name>"`, `tags: ["autodocs"]`,
  controls wired to props, a story per meaningful variant. One gallery story for icons.
- Deterministic naming: Figma `Button` ↔ code `Button`.
- Chromatic: **full snapshots, TurboSnap OFF** (token changes are global).

## ⚠️ The throughline plugin is SEPARATE from this repo

Pulling this repo does **not** install the throughline plugin — they're two
different things:

- **This repo** = design-system _output_ (tokens, components, manifest, code).
  Travels via `git pull`.
- **throughline plugin** = a Claude Code _extension_ (the `/throughline:*`
  commands, the skills, AND the bundled figma-console MCP config that connects
  Claude to Figma). Lives in its OWN repo: `github.com/jrpease/throughline`.
  Installed into Claude Code per-device.

On the original machine the plugin marketplace is a **local directory**
(`/Users/jordanpease/Dev/throughline`) — that path won't exist elsewhere, which
is why the commands are missing after a fresh pull.

**Do you even need it?**
- Code-only work (edit components, `pnpm typecheck`, `build-storybook`, run app)
  → no plugin required; it's plain pnpm/Node.
- Design-system workflow (`/throughline:*` commands/skills + Figma connection)
  → install the plugin.

**Install on the other device (from GitHub, not the local path):**
```
claude plugin marketplace add jrpease/throughline
claude plugin install throughline@throughline-marketplace
```
Then reload Claude Code and set `FIGMA_ACCESS_TOKEN`. The figma-console MCP
server downloads via `npx` from the bundled config. (This machine runs v0.2.0;
the default branch may be newer — check out the `v0.2.0` tag if you need an
exact match.)

## Environment setup needed on the other device

1. **throughline plugin** installed in Claude Code (see section above) — this is
   what restores the `/throughline:*` commands and the Figma MCP config.
2. **Figma desktop app** (NOT browser) installed, signed in, with the file open.
3. **Desktop Bridge plugin** running in that file (the figma-console-mcp bridge).
4. **`FIGMA_ACCESS_TOKEN`** env var set to your personal Figma token (starts
   `figd_`). _Never paste it into chat_ — place it in the MCP env yourself.
5. **Node + pnpm**, then `pnpm install` at the repo root.
6. CI already has the `CHROMATIC_PROJECT_TOKEN` GitHub secret (no action needed).

Verify the Figma connection with the `figma_get_status` tool (probe), or just run
`/throughline:design-system-status`.

## Verify the code side

```
cd packages/ui
pnpm typecheck        # tsc --noEmit
pnpm build-storybook  # compiles all stories
pnpm storybook        # dev server on :6006
```

## Open loops / suggested next steps

- [ ] Set the Cover frame as the file thumbnail (manual, in Figma).
- [ ] Bump Select Menu / Select Menu Item `draft` → `stable` when ready.
- [ ] (Optional) Publish the Figma library → unlocks Code Connect + typed
      instance-swap dropdowns; then re-run component-builder for the upgrade pass.
- [ ] Add more components via `/throughline:new-component`.
- [ ] Token changes flow through `/sync-figma-tokens` (opens a PR; Chromatic re-snapshots).

## How to resume in a new session

1. Pull the repo and open it in Claude Code on the other device.
2. Ensure the environment setup above is done.
3. Say: _"Read HANDOFF.md and run /throughline:design-system-status to get oriented."_
