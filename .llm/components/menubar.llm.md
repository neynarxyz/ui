# Menubar

Horizontal menubar for application-level navigation and actions, commonly seen in desktop applications with File, Edit, View, and Help menus.

## Import

```tsx
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarLabel,
  MenubarGroup,
} from "@neynar/ui/menubar"
```

## Anatomy

```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New</MenubarItem>
      <MenubarItem>Open</MenubarItem>
      <MenubarSeparator />
      <MenubarSub>
        <MenubarSubTrigger>Export</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>PDF</MenubarItem>
          <MenubarItem>CSV</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
      <MenubarItem>Redo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

## Components

| Component | Description |
|-----------|-------------|
| Menubar | Root container for the horizontal menubar |
| MenubarMenu | Individual menu within the menubar (manages open/close state) |
| MenubarTrigger | Button that opens the menu dropdown |
| MenubarContent | Dropdown panel containing menu items (auto-portals) |
| MenubarItem | Interactive menu item with optional variants |
| MenubarCheckboxItem | Menu item with checkbox for toggles |
| MenubarRadioGroup | Container for mutually exclusive radio items |
| MenubarRadioItem | Radio button menu item (use inside MenubarRadioGroup) |
| MenubarSub | Container for nested submenu |
| MenubarSubTrigger | Menu item that opens a submenu |
| MenubarSubContent | Dropdown panel for submenu items |
| MenubarGroup | Logical grouping of menu items |
| MenubarLabel | Non-interactive section label |
| MenubarSeparator | Visual divider between items |
| MenubarShortcut | Keyboard shortcut hint (display only) |

## Props

### Menubar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| loopFocus | boolean | true | Loop keyboard focus back to first item at end of list |
| modal | boolean | true | Whether menubar is modal |
| disabled | boolean | false | Disable entire menubar |
| orientation | "horizontal" \| "vertical" | "horizontal" | Menubar orientation |
| className | string | - | Additional CSS classes |

### MenubarMenu

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| defaultOpen | boolean | - | Default open state (uncontrolled) |
| onOpenChange | (open: boolean) => void | - | Callback when open state changes |

### MenubarContent

Automatically renders in a portal with backdrop blur (frosted glass effect).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | "start" \| "center" \| "end" | "start" | Alignment relative to trigger |
| alignOffset | number | -4 | Offset along alignment axis |
| side | "top" \| "right" \| "bottom" \| "left" | "bottom" | Preferred side of trigger |
| sideOffset | number | 8 | Distance from trigger |

### MenubarItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | false | Disable item |
| onClick | MouseEventHandler | - | Click handler |
| closeOnClick | boolean | true | Close menu on click |
| variant | "default" \| "destructive" \| "success" \| "warning" \| "info" | "default" | Visual variant |
| inset | boolean | false | Add left padding for alignment with icons/checkboxes |

### MenubarCheckboxItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | - | Controlled checked state |
| defaultChecked | boolean | - | Default checked state (uncontrolled) |
| onCheckedChange | (checked: boolean) => void | - | Callback when checked state changes |
| disabled | boolean | false | Disable item |

### MenubarRadioGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | any | - | Controlled selected value |
| defaultValue | any | - | Default selected value (uncontrolled) |
| onValueChange | (value: any) => void | - | Callback when value changes |

### MenubarRadioItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | any | **required** | Value when this item is selected |
| disabled | boolean | false | Disable item |

### MenubarSubTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | false | Disable submenu trigger |
| inset | boolean | false | Add left padding for alignment |

## Data Attributes

### MenubarTrigger
- `aria-expanded` - Present when menu is open

### MenubarItem
- `data-highlighted` - Present when item is highlighted
- `data-disabled` - Present when item is disabled

### MenubarCheckboxItem
- `data-checked` - Present when checked
- `data-disabled` - Present when disabled

### MenubarRadioItem
- `data-checked` - Present when selected
- `data-disabled` - Present when disabled

## Variants

MenubarItem supports semantic variants:

| Variant | Use Case |
|---------|----------|
| default | Standard menu actions |
| destructive | Dangerous actions (delete, sign out) |
| success | Positive actions (approve, confirm) |
| warning | Caution actions (mark for review) |
| info | Informational actions (view details) |

## Examples

### Basic Menubar

```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New</MenubarItem>
      <MenubarItem>Open</MenubarItem>
      <MenubarItem>Save</MenubarItem>
    </MenubarContent>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
      <MenubarItem>Redo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

### With Icons and Shortcuts

```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        <FileIcon />
        New File
        <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        <FolderOpenIcon />
        Open
        <MenubarShortcut>⌘O</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        <SaveIcon />
        Save
        <MenubarShortcut>⌘S</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

### Checkbox Items (View Settings)

```tsx
function ViewMenu() {
  const [showSidebar, setShowSidebar] = useState(true)
  const [showToolbar, setShowToolbar] = useState(true)

  return (
    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarContent>
        <MenubarGroup>
          <MenubarLabel>Panels</MenubarLabel>
          <MenubarCheckboxItem
            checked={showSidebar}
            onCheckedChange={setShowSidebar}
          >
            Sidebar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={showToolbar}
            onCheckedChange={setShowToolbar}
          >
            Toolbar
          </MenubarCheckboxItem>
        </MenubarGroup>
      </MenubarContent>
    </MenubarMenu>
  )
}
```

### Radio Group (Theme Selection)

```tsx
function ThemeMenu() {
  const [theme, setTheme] = useState("system")

  return (
    <MenubarSub>
      <MenubarSubTrigger>
        <SunIcon />
        Theme
      </MenubarSubTrigger>
      <MenubarSubContent>
        <MenubarRadioGroup value={theme} onValueChange={setTheme}>
          <MenubarRadioItem value="light">
            <SunIcon />
            Light
          </MenubarRadioItem>
          <MenubarRadioItem value="dark">
            <MoonIcon />
            Dark
          </MenubarRadioItem>
          <MenubarRadioItem value="system">
            <MonitorIcon />
            System
          </MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarSubContent>
    </MenubarSub>
  )
}
```

### Nested Submenus

```tsx
<MenubarMenu>
  <MenubarTrigger>File</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>New File</MenubarItem>
    <MenubarSub>
      <MenubarSubTrigger>
        <DownloadIcon />
        Export
      </MenubarSubTrigger>
      <MenubarSubContent>
        <MenubarItem>Export as JSON</MenubarItem>
        <MenubarItem>Export as CSV</MenubarItem>
        <MenubarSeparator />
        <MenubarSub>
          <MenubarSubTrigger>More Formats</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>YAML</MenubarItem>
            <MenubarItem>TOML</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
      </MenubarSubContent>
    </MenubarSub>
  </MenubarContent>
</MenubarMenu>
```

### Item Variants

```tsx
<MenubarMenu>
  <MenubarTrigger>Actions</MenubarTrigger>
  <MenubarContent>
    <MenubarItem variant="success">
      <CheckCircleIcon />
      Approve
    </MenubarItem>
    <MenubarItem variant="warning">
      <AlertTriangleIcon />
      Mark for Review
    </MenubarItem>
    <MenubarItem variant="info">
      <InfoIcon />
      View Details
    </MenubarItem>
    <MenubarSeparator />
    <MenubarItem variant="destructive">
      <LogOutIcon />
      Sign Out
    </MenubarItem>
  </MenubarContent>
</MenubarMenu>
```

## Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Move focus to next menubar trigger |
| Shift+Tab | Move focus to previous menubar trigger |
| Enter/Space | Open menu or activate item |
| Arrow Down | Open menu or move to next item |
| Arrow Up | Move to previous item |
| Arrow Right | Move to next menubar trigger (or open submenu) |
| Arrow Left | Move to previous menubar trigger (or close submenu) |
| Escape | Close open menu |
| Home | Focus first item |
| End | Focus last item |

## Accessibility

- Full keyboard navigation with arrow keys and Tab
- ARIA attributes automatically managed (aria-expanded, aria-haspopup, role="menubar")
- Focus management with automatic focus trapping in open menus
- Screen reader announcements for menu state changes
- Supports `disabled` state with proper ARIA attributes

## Related

- [DropdownMenu](./dropdown-menu.llm.md) - For single-menu dropdowns
- [ContextMenu](./context-menu.llm.md) - For right-click menus
- [NavigationMenu](./navigation-menu.llm.md) - For site navigation with links
