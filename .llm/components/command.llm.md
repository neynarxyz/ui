# Command

Fast, accessible command palette with keyboard navigation and fuzzy search built on cmdk.

## Import

```tsx
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@neynar/ui/command"
```

## Anatomy

```tsx
<CommandDialog open={open} onOpenChange={setOpen}>
  <Command>
    <CommandInput placeholder="Search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Navigation">
        <CommandItem onSelect={handleSelect}>
          Dashboard
          <CommandShortcut>⌘D</CommandShortcut>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Actions">
        <CommandItem>Create</CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</CommandDialog>
```

## Components

| Component | Description |
|-----------|-------------|
| Command | Root container with fuzzy search and keyboard navigation |
| CommandDialog | Command wrapped in modal dialog, typical for ⌘K palettes |
| CommandInput | Search input with integrated search icon |
| CommandList | Scrollable container for groups/items (max-h-72) |
| CommandEmpty | Displayed when search returns no results |
| CommandGroup | Groups related items with optional heading |
| CommandItem | Selectable item, automatically shows check icon when selected |
| CommandSeparator | Visual divider between groups |
| CommandShortcut | Keyboard shortcut label, auto-aligned right |

## Props

### Command

Extends cmdk's Command component.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Accessible label for screen readers |
| value | string | - | Controlled selected value |
| onValueChange | (value: string) => void | - | Called when selection changes |
| filter | (value: string, search: string) => number | - | Custom filter function (0-1 score) |
| className | string | - | Additional CSS classes |

### CommandDialog

Wraps Command in a modal dialog with portal and overlay.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| onOpenChange | (open: boolean) => void | - | Called when open state changes |
| title | string | "Command Palette" | Dialog title (screen readers only) |
| description | string | "Search for a command..." | Dialog description (screen readers only) |
| showCloseButton | boolean | false | Show X button in top-right corner |
| className | string | - | Additional CSS classes for content |

Title and description are visually hidden but read by screen readers for accessibility.

### CommandInput

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| placeholder | string | - | Input placeholder text |
| value | string | - | Controlled input value |
| onValueChange | (search: string) => void | - | Called when input changes |
| className | string | - | Additional CSS classes |

Search icon is automatically included on the right side of the input.

### CommandList

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |

Automatically handles scrolling with max height of 18rem (72). Hidden scrollbar for clean appearance.

### CommandEmpty

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Content shown when no results |
| className | string | - | Additional CSS classes |

Automatically displayed when search returns no matching items.

### CommandGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| heading | string | - | Optional group label |
| className | string | - | Additional CSS classes |

### CommandItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Unique value (auto-inferred from textContent if omitted) |
| keywords | string[] | - | Additional search keywords |
| onSelect | (value: string) => void | - | Called when item is selected |
| disabled | boolean | - | Disable selection |
| className | string | - | Additional CSS classes |

Check icon automatically appears when item is selected (hidden if CommandShortcut is present).

### CommandShortcut

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Shortcut text (e.g., "⌘K") |
| className | string | - | Additional CSS classes |

Automatically positioned at the end of the command item and hides the check icon.

### CommandSeparator

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |

## Data Attributes

### CommandItem

| Attribute | When Present |
|-----------|--------------|
| data-selected | Item is currently highlighted/active |
| data-disabled | Item is disabled (disabled={true}) |
| data-checked | Item is marked as checked/selected |

Use these for custom styling based on item state.

## Examples

### Basic Command Palette

```tsx
function QuickActions() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => console.log("Dashboard")}>
              <LayoutDashboardIcon />
              Dashboard
              <CommandShortcut>⌘D</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => console.log("Settings")}>
              <SettingsIcon />
              Settings
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
```

### Multiple Groups with Separators

```tsx
<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>

    <CommandGroup heading="Navigation">
      <CommandItem>
        <LayoutDashboardIcon />
        Dashboard
      </CommandItem>
      <CommandItem>
        <BarChart3Icon />
        Analytics
      </CommandItem>
    </CommandGroup>

    <CommandSeparator />

    <CommandGroup heading="Settings">
      <CommandItem>
        <UserIcon />
        Profile
      </CommandItem>
      <CommandItem>
        <SettingsIcon />
        Preferences
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

### Controlled with Loading States

```tsx
function CommandWithLoading() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedCommand, setSelectedCommand] = useState<string | null>(null)

  const handleSelect = (value: string) => {
    setSelectedCommand(value)
    setLoading(true)

    // Simulate async action
    setTimeout(() => {
      setLoading(false)
      setOpen(false)
      setSelectedCommand(null)
    }, 1000)
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command>
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => handleSelect("create")}
              disabled={loading && selectedCommand === "create"}
            >
              {loading && selectedCommand === "create" ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                <ZapIcon />
              )}
              Create API Key
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
```

### Custom Empty State

```tsx
<Command>
  <CommandInput placeholder="Search documentation..." />
  <CommandList>
    <CommandEmpty>
      <div className="py-6 text-center">
        <p className="text-sm">No results found.</p>
        <p className="text-muted-foreground mt-1 text-xs">
          Try a different search term or check the docs.
        </p>
      </div>
    </CommandEmpty>
    <CommandGroup heading="Documentation">
      <CommandItem>Getting Started</CommandItem>
      <CommandItem>API Reference</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

### Without Dialog (Inline)

```tsx
<Command className="w-full max-w-md rounded-lg border">
  <CommandInput placeholder="Search commands..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem>
        <FileTextIcon />
        New File
      </CommandItem>
      <CommandItem>
        <UserIcon />
        New User
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

## Keyboard

| Key | Action |
|-----|--------|
| ⌘K / Ctrl+K | Open command palette (app implementation) |
| ↓ / ↑ | Navigate items |
| Enter | Select highlighted item |
| Escape | Close dialog |
| Home / End | Jump to first/last item |
| Type | Filter items by fuzzy search |

## Accessibility

- Full keyboard navigation with arrow keys and Enter
- ARIA attributes automatically applied to items and groups
- Screen reader support for search input and results count
- Focus management when opening/closing dialog
- DialogTitle and DialogDescription provided for screen readers (visually hidden)
- Disabled items marked with `aria-disabled` and cannot be selected

## Related

- [Dialog](/Users/bobringer/work/neynar/worktrees/frontend-monorepo/neyn-8162-nas-baseui-upgrade./dialog.llm.md) - Command dialog uses Dialog internally
- [Input Group](/Users/bobringer/work/neynar/worktrees/frontend-monorepo/neyn-8162-nas-baseui-upgrade./input-group.llm.md) - CommandInput uses InputGroup for icon layout
