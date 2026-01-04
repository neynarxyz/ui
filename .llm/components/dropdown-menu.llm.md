# DropdownMenu

A versatile dropdown menu component for displaying contextual actions and selections.

## Import

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuShortcut,
} from "@neynar/ui/dropdown-menu"
```

## Anatomy

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>
    <Button>Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Section</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>Item</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
```

## Components

| Component | Description |
|-----------|-------------|
| DropdownMenu | Root container, manages open/close state and keyboard navigation |
| DropdownMenuTrigger | Button that opens the menu |
| DropdownMenuContent | Content container with automatic portal and positioning |
| DropdownMenuItem | Individual menu item with optional variants |
| DropdownMenuCheckboxItem | Menu item with checkbox for independent toggles |
| DropdownMenuRadioGroup | Container for mutually exclusive radio items |
| DropdownMenuRadioItem | Radio item for single selection within a group |
| DropdownMenuLabel | Label for grouping related items |
| DropdownMenuSeparator | Visual divider between menu sections |
| DropdownMenuGroup | Logical container for related items |
| DropdownMenuSub | Root container for nested submenus |
| DropdownMenuSubTrigger | Trigger for opening a submenu |
| DropdownMenuSubContent | Content container for submenu items |
| DropdownMenuShortcut | Visual display of keyboard shortcuts |

## Props

### DropdownMenu

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| onOpenChange | (open: boolean) => void | - | Called when open state changes |
| defaultOpen | boolean | false | Uncontrolled initial open state |

### DropdownMenuTrigger

Uses `render` prop pattern for custom trigger elements:

```tsx
<DropdownMenuTrigger render={<Button variant="outline" />}>
  Open Menu
</DropdownMenuTrigger>
```

### DropdownMenuContent

Automatically renders in a portal with positioning system.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | "start" \| "center" \| "end" | "start" | Horizontal alignment relative to trigger |
| alignOffset | number | 0 | Offset in pixels from aligned position |
| side | "top" \| "right" \| "bottom" \| "left" | "bottom" | Preferred side to position menu |
| sideOffset | number | 4 | Distance in pixels from trigger |

### DropdownMenuItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | "default" \| "destructive" \| "success" \| "warning" \| "info" | "default" | Visual style variant |
| inset | boolean | false | Add extra left padding for alignment |
| disabled | boolean | false | Disable item interaction |

### DropdownMenuCheckboxItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean \| "indeterminate" | - | Checked state |
| onCheckedChange | (checked: boolean) => void | - | Called when checked state changes |

### DropdownMenuRadioGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Currently selected value |
| onValueChange | (value: string) => void | - | Called when selection changes |

### DropdownMenuRadioItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Value for this radio item |

### DropdownMenuLabel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| inset | boolean | false | Add extra left padding for alignment with icon items |

### DropdownMenuSubTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| inset | boolean | false | Add extra left padding for alignment |

Automatically displays chevron icon on the right.

### DropdownMenuSubContent

Same props as DropdownMenuContent, but with different defaults:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | "top" \| "right" \| "bottom" \| "left" | "right" | Preferred side to position submenu |
| alignOffset | number | -3 | Offset for better visual alignment |

## Data Attributes (for styling)

| Attribute | When Present |
|-----------|--------------|
| data-open | Menu or submenu is open |
| data-closed | Menu or submenu is closed |
| data-highlighted | Item is keyboard-highlighted or hovered |
| data-disabled | Item is disabled |
| data-inset | Item or label has inset padding |

## Variants

DropdownMenuItem supports semantic variants:

| Variant | Use Case |
|---------|----------|
| default | Standard actions |
| destructive | Delete, remove, or dangerous actions |
| success | Confirmations or positive actions |
| warning | Caution-required actions |
| info | Informational actions |

## Examples

### Basic Menu

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <EditIcon />
      Edit
    </DropdownMenuItem>
    <DropdownMenuItem>
      <CopyIcon />
      Duplicate
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">
      <TrashIcon />
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### User Account Menu

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>
    <Button variant="ghost" size="icon">
      <UserIcon />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end" className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <UserIcon />
      Profile
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <SettingsIcon />
      Settings
      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">
      <LogOutIcon />
      Log Out
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Checkbox Items

```tsx
function NotificationMenu() {
  const [notifications, setNotifications] = useState(true)
  const [marketing, setMarketing] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">Preferences</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={notifications}
          onCheckedChange={setNotifications}
        >
          <BellIcon />
          Push Notifications
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={marketing}
          onCheckedChange={setMarketing}
        >
          <MailIcon />
          Marketing Emails
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

### Radio Group

```tsx
function ThemeSelector() {
  const [theme, setTheme] = useState("system")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">Theme: {theme}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light">
            <SunIcon />
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            <MoonIcon />
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">
            <MonitorIcon />
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

### Nested Submenus

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>
    <Button variant="outline">Actions</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <EditIcon />
      Edit
    </DropdownMenuItem>
    <DropdownMenuItem>
      <CopyIcon />
      Duplicate
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <ShareIcon />
        Share
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>
          <MailIcon />
          Email
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CopyIcon />
          Copy Link
        </DropdownMenuItem>
        <DropdownMenuItem>
          <DownloadIcon />
          Export
        </DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">
      <TrashIcon />
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Organized with Groups

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>
    <Button variant="outline">Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <UserIcon />
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem>
        <SettingsIcon />
        Settings
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuLabel>Team</DropdownMenuLabel>
    </DropdownMenuGroup>
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <PlusIcon />
        Invite Members
      </DropdownMenuItem>
      <DropdownMenuItem>
        <MailIcon />
        Team Settings
      </DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
```

## Keyboard

| Key | Action |
|-----|--------|
| Space / Enter | Open menu (on trigger) / Activate item (in menu) |
| ArrowDown / ArrowUp | Navigate between items |
| ArrowRight | Open submenu |
| ArrowLeft | Close submenu |
| Escape | Close menu |
| Tab | Move focus out and close menu |

## Accessibility

- Built on Base UI Menu primitives with ARIA menu pattern
- Automatic focus management and keyboard navigation
- Screen reader announcements for menu state changes
- All items are properly labeled and keyboard accessible
- Checkbox and radio items announce their checked state
- Disabled items are properly marked with `aria-disabled`

## Related

- [ContextMenu](/components/context-menu) - Right-click menu with similar structure
- [Select](/components/select) - For form-based single selection
- [Combobox](/components/combobox) - For searchable selection
- [Button](/components/button) - Common trigger element
