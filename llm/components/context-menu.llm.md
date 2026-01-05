# ContextMenu

Right-click context menu with support for nested submenus, checkboxes, radio groups, keyboard shortcuts, and destructive actions.

## Import

```tsx
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuRadioGroup,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@neynar/ui/context-menu"
```

## Anatomy

```tsx
<ContextMenu>
  <ContextMenuTrigger>Right-click target</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuGroup>
      <ContextMenuLabel>Section</ContextMenuLabel>
      <ContextMenuItem>Action</ContextMenuItem>
      <ContextMenuCheckboxItem>Toggle</ContextMenuCheckboxItem>
    </ContextMenuGroup>
    <ContextMenuSeparator />
    <ContextMenuRadioGroup>
      <ContextMenuRadioItem value="option">Option</ContextMenuRadioItem>
    </ContextMenuRadioGroup>
    <ContextMenuSub>
      <ContextMenuSubTrigger>More</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Nested action</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>
```

## Components

| Component | Description |
|-----------|-------------|
| ContextMenu | Root container, manages open/closed state |
| ContextMenuTrigger | Element that opens menu on right-click |
| ContextMenuContent | Menu popup with automatic portal and positioning |
| ContextMenuItem | Interactive menu action |
| ContextMenuCheckboxItem | Menu item with checkbox state |
| ContextMenuRadioItem | Menu item for mutually exclusive selection |
| ContextMenuRadioGroup | Container for radio items |
| ContextMenuLabel | Non-interactive section label |
| ContextMenuSeparator | Visual divider between items |
| ContextMenuShortcut | Keyboard shortcut hint (right-aligned) |
| ContextMenuGroup | Groups related items |
| ContextMenuSub | Root for nested submenu |
| ContextMenuSubTrigger | Item that opens submenu |
| ContextMenuSubContent | Submenu popup content |

## Props

### ContextMenu

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| onOpenChange | (open: boolean) => void | - | Called when open state changes |
| defaultOpen | boolean | false | Uncontrolled initial open state |

### ContextMenuContent

Automatically renders portal and positioner.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | "start" \| "end" \| "center" | "start" | Alignment relative to trigger |
| alignOffset | number | 4 | Offset from alignment edge (px) |
| side | "top" \| "right" \| "bottom" \| "left" | "right" | Which side to position menu |
| sideOffset | number | 0 | Offset from trigger (px) |

### ContextMenuItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | "default" \| "destructive" \| "success" \| "warning" \| "info" | "default" | Visual style variant |
| inset | boolean | false | Extra left padding for alignment |
| disabled | boolean | false | Disables interaction |
| closeOnClick | boolean | true | Close menu when clicked |

### ContextMenuCheckboxItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean \| "indeterminate" | - | Controlled checked state |
| onCheckedChange | (checked: boolean) => void | - | Called when checked changes |
| disabled | boolean | false | Disables interaction |

### ContextMenuRadioGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Controlled selected value |
| onValueChange | (value: string) => void | - | Called when selection changes |

### ContextMenuRadioItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Value for this radio option |
| disabled | boolean | false | Disables interaction |

### ContextMenuLabel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| inset | boolean | false | Extra left padding for alignment |

### ContextMenuSubTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| inset | boolean | false | Extra left padding for alignment |

Automatically includes chevron icon.

## Data Attributes

| Attribute | When Present | Applied To |
|-----------|--------------|------------|
| data-open | Menu is open | ContextMenuContent |
| data-closed | Menu is closed | ContextMenuContent |
| data-highlighted | Item is keyboard-focused | ContextMenuItem, ContextMenuSubTrigger |
| data-disabled | Item is disabled | ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem |
| data-inset | Inset prop is true | ContextMenuLabel, ContextMenuItem, ContextMenuSubTrigger |
| data-side | Position side | ContextMenuContent |

## Variants

ContextMenuItem supports semantic variants:

| Variant | Use Case |
|---------|----------|
| default | Standard actions |
| destructive | Delete, remove, irreversible actions |
| success | Approve, confirm actions |
| warning | Actions requiring caution |
| info | Informational actions |

## Examples

### Basic Context Menu

```tsx
<ContextMenu>
  <ContextMenuTrigger>
    <div className="border p-4 rounded">Right-click here</div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      <EditIcon />
      Edit
    </ContextMenuItem>
    <ContextMenuItem>
      <CopyIcon />
      Copy
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">
      <TrashIcon />
      Delete
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### With Keyboard Shortcuts

```tsx
<ContextMenuContent>
  <ContextMenuItem>
    <EditIcon />
    Edit
    <ContextMenuShortcut>⌘E</ContextMenuShortcut>
  </ContextMenuItem>
  <ContextMenuItem>
    <CopyIcon />
    Copy
    <ContextMenuShortcut>⌘C</ContextMenuShortcut>
  </ContextMenuItem>
</ContextMenuContent>
```

### Grouped Items with Labels

```tsx
<ContextMenuContent>
  <ContextMenuGroup>
    <ContextMenuLabel>Actions</ContextMenuLabel>
    <ContextMenuItem>Edit</ContextMenuItem>
    <ContextMenuItem>Copy</ContextMenuItem>
  </ContextMenuGroup>
  <ContextMenuSeparator />
  <ContextMenuGroup>
    <ContextMenuLabel>Organization</ContextMenuLabel>
    <ContextMenuItem>Add to Favorites</ContextMenuItem>
    <ContextMenuItem>Pin</ContextMenuItem>
  </ContextMenuGroup>
</ContextMenuContent>
```

### Checkbox Items

```tsx
function ViewOptions() {
  const [showGrid, setShowGrid] = useState(true)
  const [showLabels, setShowLabels] = useState(false)

  return (
    <ContextMenuContent>
      <ContextMenuGroup>
        <ContextMenuLabel>View Options</ContextMenuLabel>
      </ContextMenuGroup>
      <ContextMenuCheckboxItem
        checked={showGrid}
        onCheckedChange={setShowGrid}
      >
        Show Grid
      </ContextMenuCheckboxItem>
      <ContextMenuCheckboxItem
        checked={showLabels}
        onCheckedChange={setShowLabels}
      >
        Show Labels
      </ContextMenuCheckboxItem>
    </ContextMenuContent>
  )
}
```

### Radio Group

```tsx
function SortMenu() {
  const [sortBy, setSortBy] = useState("name")

  return (
    <ContextMenuContent>
      <ContextMenuGroup>
        <ContextMenuLabel>Sort By</ContextMenuLabel>
      </ContextMenuGroup>
      <ContextMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
        <ContextMenuRadioItem value="name">Name</ContextMenuRadioItem>
        <ContextMenuRadioItem value="date">Date</ContextMenuRadioItem>
        <ContextMenuRadioItem value="size">Size</ContextMenuRadioItem>
      </ContextMenuRadioGroup>
    </ContextMenuContent>
  )
}
```

### Nested Submenus

```tsx
<ContextMenuContent>
  <ContextMenuItem>Edit</ContextMenuItem>
  <ContextMenuItem>Copy</ContextMenuItem>
  <ContextMenuSeparator />
  <ContextMenuSub>
    <ContextMenuSubTrigger>
      <ShareIcon />
      Share
    </ContextMenuSubTrigger>
    <ContextMenuSubContent>
      <ContextMenuItem>
        <MailIcon />
        Email
      </ContextMenuItem>
      <ContextMenuItem>
        <CopyIcon />
        Copy Link
      </ContextMenuItem>
      <ContextMenuItem>
        <DownloadIcon />
        Download
      </ContextMenuItem>
    </ContextMenuSubContent>
  </ContextMenuSub>
</ContextMenuContent>
```

### Inset Alignment

Use `inset` prop to align items that don't have icons with items that do:

```tsx
<ContextMenuContent>
  <ContextMenuGroup>
    <ContextMenuLabel>Navigation</ContextMenuLabel>
    <ContextMenuItem>
      <UserIcon />
      Profile
    </ContextMenuItem>
    <ContextMenuItem inset>Account Settings</ContextMenuItem>
    <ContextMenuItem inset>Privacy Settings</ContextMenuItem>
  </ContextMenuGroup>
</ContextMenuContent>
```

### Variant Examples

```tsx
<ContextMenuContent>
  <ContextMenuItem>Default Action</ContextMenuItem>
  <ContextMenuSeparator />
  <ContextMenuItem variant="success">
    <CheckCircle2Icon />
    Approve
  </ContextMenuItem>
  <ContextMenuItem variant="warning">
    <AlertTriangleIcon />
    Mark for Review
  </ContextMenuItem>
  <ContextMenuItem variant="info">
    <InfoIcon />
    View Details
  </ContextMenuItem>
  <ContextMenuSeparator />
  <ContextMenuItem variant="destructive">
    <TrashIcon />
    Delete
  </ContextMenuItem>
</ContextMenuContent>
```

## Keyboard

| Key | Action |
|-----|--------|
| Space / Enter | Activate focused item |
| ArrowDown | Move focus to next item |
| ArrowUp | Move focus to previous item |
| ArrowRight | Open submenu (when focused on SubTrigger) |
| ArrowLeft | Close submenu |
| Escape | Close menu |
| Tab | Move focus out and close |

## Accessibility

- Right-click or Shift+F10 opens context menu
- ARIA roles: `menu`, `menuitem`, `menuitemcheckbox`, `menuitemradio`
- Focus is trapped within open menu
- Screen readers announce menu state, selected items, and keyboard shortcuts
- CheckboxItem and RadioItem include proper ARIA checked states

## Related

- [DropdownMenu](./dropdown-menu.llm.md) - Click-triggered menu
- [Menubar](./menubar.llm.md) - Application menu bar
