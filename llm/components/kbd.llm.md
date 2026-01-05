# Kbd

Display keyboard shortcuts and key combinations with consistent styling.

## Import

```tsx
import { Kbd, KbdGroup } from "@neynar/ui/kbd"
```

## Anatomy

```tsx
// Single key
<Kbd>K</Kbd>

// Key combination
<KbdGroup>
  <Kbd><CommandIcon /></Kbd>
  <Kbd>K</Kbd>
</KbdGroup>
```

## Components

| Component | Description |
|-----------|-------------|
| Kbd | Individual keyboard key display (text or icon) |
| KbdGroup | Container for multiple keys pressed together or in sequence |

## Props

### Kbd

Extends standard HTML `<kbd>` element props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Key text or icon (e.g., "K", `<CommandIcon />`) |
| className | string | - | Additional CSS classes |

**Auto-styling:**
- Fixed height (h-5), auto width with minimum size
- Muted background and foreground colors
- Non-interactive (pointer-events-none, select-none)
- Icons auto-sized to size-3
- Special styling when used in tooltips

### KbdGroup

Extends standard HTML `<div>` element props (rendered as `<kbd>` tag).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Multiple `<Kbd>` components |
| className | string | - | Additional CSS classes |

**Auto-behaviors:**
- Horizontal flex layout with gap-1
- Use for simultaneous keys (Cmd+K) or sequential keys (G→H)

## Data Attributes

| Attribute | Component | Description |
|-----------|-----------|-------------|
| data-slot="kbd" | Kbd | Identifies individual key element |
| data-slot="kbd-group" | KbdGroup | Identifies key combination container |

## Examples

### Single Keys

```tsx
<div className="flex gap-2">
  <Kbd>A</Kbd>
  <Kbd>Esc</Kbd>
  <Kbd>Enter</Kbd>
  <Kbd>Space</Kbd>
</div>
```

### Keys with Icons

```tsx
import { CommandIcon, ArrowUpIcon, CornerDownLeftIcon } from "lucide-react"

<div className="flex gap-2">
  <Kbd><CommandIcon /></Kbd>
  <Kbd><ArrowUpIcon /></Kbd>
  <Kbd><CornerDownLeftIcon /></Kbd>
</div>
```

Icons are automatically sized to fit the kbd container.

### Key Combinations (Simultaneous)

```tsx
// Cmd+K (command palette)
<KbdGroup>
  <Kbd><CommandIcon /></Kbd>
  <Kbd>K</Kbd>
</KbdGroup>

// Cmd+Shift+P
<KbdGroup>
  <Kbd><CommandIcon /></Kbd>
  <Kbd>Shift</Kbd>
  <Kbd>P</Kbd>
</KbdGroup>

// Ctrl+Alt+Delete
<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>Alt</Kbd>
  <Kbd><DeleteIcon /></Kbd>
</KbdGroup>
```

### Sequential Keys (Vim-like)

```tsx
// G then H (Go Home)
<KbdGroup>
  <Kbd>G</Kbd>
  <Kbd>H</Kbd>
</KbdGroup>

// G then D (Go Dashboard)
<KbdGroup>
  <Kbd>G</Kbd>
  <Kbd>D</Kbd>
</KbdGroup>
```

KbdGroup works for both simultaneous and sequential shortcuts - context determines meaning.

### In Documentation/Prose

```tsx
<p>
  To open the command palette, press{" "}
  <KbdGroup>
    <Kbd><CommandIcon /></Kbd>
    <Kbd>K</Kbd>
  </KbdGroup>{" "}
  at any time.
</p>

<p>
  Use <Kbd><ArrowUpIcon /></Kbd> and <Kbd><ArrowDownIcon /></Kbd> to navigate,
  then press <Kbd><CornerDownLeftIcon /></Kbd> to select.
</p>
```

### Keyboard Shortcuts Help Panel

```tsx
function ShortcutsHelp() {
  const shortcuts = [
    {
      keys: <KbdGroup><Kbd><CommandIcon /></Kbd><Kbd>K</Kbd></KbdGroup>,
      description: "Open command palette"
    },
    {
      keys: <KbdGroup><Kbd><CommandIcon /></Kbd><Kbd>S</Kbd></KbdGroup>,
      description: "Save changes"
    },
    {
      keys: <Kbd>Esc</Kbd>,
      description: "Close dialog"
    }
  ]

  return (
    <div className="space-y-2">
      {shortcuts.map((shortcut, idx) => (
        <div key={idx} className="flex justify-between">
          <span>{shortcut.description}</span>
          {shortcut.keys}
        </div>
      ))}
    </div>
  )
}
```

### Common Shortcuts Grid

```tsx
<div className="grid grid-cols-2 gap-4">
  <div className="flex justify-between">
    <span>Save</span>
    <KbdGroup><Kbd><CommandIcon /></Kbd><Kbd>S</Kbd></KbdGroup>
  </div>
  <div className="flex justify-between">
    <span>Copy</span>
    <KbdGroup><Kbd><CommandIcon /></Kbd><Kbd>C</Kbd></KbdGroup>
  </div>
  <div className="flex justify-between">
    <span>Paste</span>
    <KbdGroup><Kbd><CommandIcon /></Kbd><Kbd>V</Kbd></KbdGroup>
  </div>
  <div className="flex justify-between">
    <span>Undo</span>
    <KbdGroup><Kbd><CommandIcon /></Kbd><Kbd>Z</Kbd></KbdGroup>
  </div>
</div>
```

## Accessibility

- Uses semantic `<kbd>` HTML element for keyboard input
- Non-interactive by default (pointer-events-none, select-none)
- Text content is screen-reader accessible
- Icon-only keys may need aria-label on parent for context

## Related

- [Tooltip](/docs/components/tooltip.llm.md) - Often used together to show shortcuts on hover
- [Command](/docs/components/command.llm.md) - Command palette that displays kbd shortcuts
