---
description: Manage @neynar/ui components - document, scaffold, update indexes
argument-hint: [--new] [--doc] [--all] [component1] [component2] ...
---

# UI Component Manager

Manage @neynar/ui components: documentation, scaffolding, and index management.

## Usage

```bash
# Document a single component
/manage-component --doc dialog

# Document multiple components (runs in parallel)
/manage-component --doc button card dialog select

# Document all components
/manage-component --doc --all

# Scaffold a new component (creates source + story + docs + indexes)
/manage-component --new awesome-widget
```

## Modes

### Document Mode (`--doc`)

For each component, launches a `component-manager` agent that:

1. Reads source file and stories
2. Researches Base UI docs via Context7
3. Adds TSDoc comments to custom props and exports
4. Generates `llm/components/{component}.llm.md`
5. Updates indexes if component is new

### New Component Mode (`--new`)

Creates a new component from scratch:

1. Creates source file with Base UI primitive + data-slot
2. Creates Storybook story with Default and Variants
3. Generates `llm/components/{component}.llm.md`
4. Updates `llms.txt` with link
5. Updates `index.llm.md` with table row
6. Runs type-check to verify

## Execution

### Single Component
Runs the agent directly, shows progress.

### Multiple Components
Launches up to 5 agents in parallel using the Task tool:

```
/manage-component --doc button card dialog

→ Task(component-manager, "Document button component")
→ Task(component-manager, "Document card component")
→ Task(component-manager, "Document dialog component")

→ Wait for all to complete
→ Report results
```

### All Components
Scans `src/components/ui/*.tsx` and processes in batches of 5.

## Output Files

| Mode | Files Created/Updated |
|------|----------------------|
| `--doc` | Source TSDoc, `llm/components/{component}.llm.md` |
| `--new` | Source file, story, `.llm.md`, `llms.txt`, `index.llm.md` |

## Components List

Core UI components (from `src/components/ui/`):

**Inputs**: button, checkbox, input, radio-group, select, slider, switch, textarea, toggle, toggle-group, combobox

**Forms**: button-group, calendar, field, input-group, input-otp, label

**Layout**: accordion, aspect-ratio, card, collapsible, resizable, scroll-area, separator, table

**Navigation**: breadcrumb, context-menu, dropdown-menu, menubar, navigation-menu, pagination, sidebar, tabs

**Overlays**: alert-dialog, dialog, drawer, hover-card, popover, sheet, tooltip

**Feedback**: alert, badge, empty, progress, skeleton, sonner, spinner

**Advanced**: avatar, carousel, chart, command, kbd, item

Neynar components (from `src/components/neynar/`):

**Theme Utilities**: color-mode, first-light

**Typography**: typography (Title, Text, Code, Blockquote)

## Related Files

- Agent: `.claude/agents/component-manager.md`
- Output: `llm/components/`
- Index: `llm/index.llm.md`
- Entry point: `llms.txt`
