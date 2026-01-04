# Using @neynar/ui with AI Assistants

@neynar/ui includes comprehensive documentation optimized for AI coding assistants like Claude, Cursor, GitHub Copilot, and others. This guide explains how to give your AI assistant the best context for working with our components.

---

## Available Documentation

| File | Tokens | Best For |
|------|--------|----------|
| `llms.txt` | ~1,500 | Primary reference — import patterns, component index |
| `.llm/` folder | ~500 each | Detailed docs for specific components |
| `llms-full.txt` | ~100,000 | RAG systems or 1M+ context models only |
| `context7.json` | — | Context7 MCP server integration |

---

## Claude Code / Cursor

### Quick Context

Tell your assistant where to find @neynar/ui documentation:

```
When working with @neynar/ui components, read node_modules/@neynar/ui/llms.txt
for import patterns and component reference. For detailed component docs,
check node_modules/@neynar/ui/.llm/components/[component-name].llm.md
```

The llms.txt file gives the AI:
- Import patterns (`import { Button } from "@neynar/ui/button"`)
- Available components organized by category
- Key conventions (themes, color mode, data-slot attributes)

### Specific Component Help

For detailed help with a specific component:

```
Read node_modules/@neynar/ui/.llm/components/dialog.llm.md
```

Each component doc includes complete props, examples, and accessibility notes.

### Full Documentation (Large Context Models)

The `llms-full.txt` file contains complete documentation for all components (~100k tokens). This is only practical for:
- Models with 1M+ token context (Gemini)
- RAG pipelines that chunk and retrieve

For Claude and most models, use `llms.txt` + specific `.llm/components/*.llm.md` files instead.

---

## Context7 MCP Server

[Context7](https://context7.com) is an MCP server that provides semantic documentation retrieval. Instead of loading entire docs into context, your AI queries what it needs on-demand.

### Setup

1. Install the Context7 MCP server in your AI tool (Claude Desktop, Cursor, etc.)

2. When asking about @neynar/ui, reference the library:
   ```
   Using context7, look up how to use Dialog from @neynar/ui
   ```

3. Context7 will fetch the relevant documentation automatically

### Why Use Context7

- **On-demand retrieval** — Only loads docs when needed, saves context window
- **Semantic search** — Finds relevant docs even with vague queries
- **Always current** — Fetches from source, not cached copies
- **Works across libraries** — Same workflow for any Context7-enabled package

@neynar/ui includes a `context7.json` that tells Context7 where our docs live and key usage patterns to include.

---

## System Prompts / Custom Setups

### Minimal Rules

If you just need the key conventions without full docs:

```
When using @neynar/ui components:
- Import from dedicated paths: import { Button } from "@neynar/ui/button"
- Import theme CSS: import "@neynar/ui/themes/purple-dawn"
- Use ColorModeInitializer in <head> for dark mode
- Use render prop for polymorphism (not asChild)
- All components have data-slot attributes for CSS targeting
```

### CLAUDE.md / Cursor Rules

Add to your project's AI configuration file:

```markdown
## @neynar/ui Components

When working with @neynar/ui, use these documentation sources:

1. **Quick reference**: Read `node_modules/@neynar/ui/llms.txt` for:
   - Import patterns and available components
   - Theming and color mode setup
   - Key conventions

2. **Component details**: Read `node_modules/@neynar/ui/.llm/components/[name].llm.md`
   - Example: `.llm/components/dialog.llm.md` for Dialog props and examples

3. **Full documentation**: Read `node_modules/@neynar/ui/llms-full.txt`
   - Complete reference for all 53+ components
```

### Embedding llms.txt

For tools that support embedding context, include the llms.txt content directly. At ~1,500 tokens it's compact enough for most context windows while providing:

- Complete component index with descriptions
- All import patterns
- Links to detailed per-component docs

---

## Component Discovery

Not sure which component to use? The llms.txt file organizes components by category:

- **Core Inputs**: Button, Input, Checkbox, Select, Switch, Slider, Toggle
- **Form & Field**: Field, InputGroup, Label, Calendar, InputOTP
- **Layout**: Card, Accordion, Collapsible, Separator, Table
- **Navigation**: Tabs, Breadcrumb, Pagination, NavigationMenu
- **Overlays**: Dialog, Sheet, Drawer, Popover, Tooltip, HoverCard
- **Feedback**: Alert, Badge, Progress, Skeleton, Spinner, Sonner (toast)
- **Menus**: DropdownMenu, ContextMenu, Menubar, Command

Ask your AI assistant: "What @neynar/ui component should I use for [your use case]?"

---

## Tips for Best Results

1. **Start with llms.txt** — It's compact and gives AI the patterns it needs
2. **Reference specific docs** — Point to `.llm/components/X.llm.md` for detailed component help
3. **Mention the package** — Say "@neynar/ui" so the AI knows which conventions to follow
4. **Ask about patterns** — The docs include accessibility, keyboard nav, and common patterns

---

## Related Documentation

- [Component Reference](./components.md) - Full component catalog
- [Theming Guide](./theming/index.md) - Themes and customization
- [Storybook](https://neynar-ui.vercel.app) - Interactive examples
