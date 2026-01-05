# Sheet

Slide-in panels that overlay the page from any edge, ideal for mobile navigation, filters, and contextual content.

## Import

```tsx
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@neynar/ui/sheet"
```

## Anatomy

```tsx
<Sheet>
  <SheetTrigger />
  <SheetContent>
    <SheetHeader>
      <SheetTitle />
      <SheetDescription />
    </SheetHeader>
    {/* Content */}
    <SheetFooter>
      <SheetClose />
    </SheetFooter>
  </SheetContent>
</Sheet>
```

## Components

| Component | Description |
|-----------|-------------|
| Sheet | Root container, manages open/closed state |
| SheetTrigger | Button that opens the sheet |
| SheetContent | Main panel with automatic portal, overlay, and animations |
| SheetHeader | Header section for title and description |
| SheetFooter | Footer section for action buttons (auto-sticks to bottom) |
| SheetTitle | Accessible title (linked to sheet for screen readers) |
| SheetDescription | Accessible description (provides context) |
| SheetClose | Button that closes the sheet |

## Props

### Sheet

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| defaultOpen | boolean | - | Uncontrolled default open state |
| onOpenChange | (open: boolean) => void | - | Callback when open state changes |
| modal | boolean | true | Whether to block interaction with page content |

### SheetContent

Automatically renders in a portal with overlay backdrop.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | "top" \| "right" \| "bottom" \| "left" | "right" | Which edge the sheet slides in from |
| showCloseButton | boolean | true | Show close button (X) in top-right corner |
| className | string | - | Additional CSS classes |
| initialFocus | HTMLElement \| (() => HTMLElement) | - | Element to focus when sheet opens |
| finalFocus | HTMLElement \| (() => HTMLElement) | - | Element to focus when sheet closes |

### SheetTrigger / SheetClose

Both support the `render` prop pattern:

```tsx
<SheetTrigger render={<Button variant="outline" />}>
  Open Sheet
</SheetTrigger>

<SheetClose render={<Button variant="ghost" />}>
  Close
</SheetClose>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| render | React.ReactElement | - | Custom element to render as trigger/close |
| className | string | - | Additional CSS classes |

### SheetHeader / SheetFooter

Both are simple `<div>` wrappers with consistent spacing.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |

## Data Attributes

Available for styling via CSS:

| Attribute | When Present | Applied To |
|-----------|--------------|------------|
| data-open | Sheet is open | SheetContent, SheetOverlay |
| data-closed | Sheet is closed | SheetContent, SheetOverlay |
| data-starting-style | During open animation start | SheetContent, SheetOverlay |
| data-ending-style | During close animation end | SheetContent, SheetOverlay |
| data-side | Always (value: top/right/bottom/left) | SheetContent |

## Examples

### Basic Usage

```tsx
<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    Open Settings
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
      <SheetDescription>
        Manage your account settings and preferences
      </SheetDescription>
    </SheetHeader>
    <div className="py-6">
      {/* Settings content */}
    </div>
  </SheetContent>
</Sheet>
```

### Mobile Navigation (Left Side)

```tsx
<Sheet>
  <SheetTrigger render={<Button variant="ghost" size="icon" />}>
    <MenuIcon />
  </SheetTrigger>
  <SheetContent side="left" className="p-0">
    <SheetHeader className="border-b p-6">
      <SheetTitle>Neynar Dashboard</SheetTitle>
      <SheetDescription>
        Navigate your Farcaster analytics
      </SheetDescription>
    </SheetHeader>
    <nav className="flex-1 space-y-1 p-4">
      {/* Navigation items */}
    </nav>
  </SheetContent>
</Sheet>
```

### Filter Panel with Footer Actions

```tsx
<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    <FilterIcon data-icon="inline-start" />
    Filters
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Filter Users</SheetTitle>
      <SheetDescription>
        Refine your user list with advanced filters
      </SheetDescription>
    </SheetHeader>

    <div className="space-y-6 p-4">
      <div className="space-y-2">
        <Label htmlFor="search">Search</Label>
        <Input id="search" placeholder="Search by username" />
      </div>
      {/* More filters */}
    </div>

    <SheetFooter>
      <SheetClose render={<Button variant="outline" />}>
        Cancel
      </SheetClose>
      <Button>Apply Filters</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

### Controlled State

```tsx
function ProfileEditor() {
  const [open, setOpen] = useState(false)

  const handleSave = async () => {
    await saveProfile()
    setOpen(false) // Close after saving
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button />}>
        Edit Profile
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSave}>
          {/* Form fields */}
        </form>
        <SheetFooter>
          <Button onClick={handleSave}>Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
```

### Without Close Button (Forced Choice)

```tsx
<Sheet>
  <SheetTrigger render={<Button variant="destructive" />}>
    Delete Account
  </SheetTrigger>
  <SheetContent showCloseButton={false}>
    <SheetHeader>
      <SheetTitle>Confirm Action</SheetTitle>
      <SheetDescription>
        This action requires confirmation
      </SheetDescription>
    </SheetHeader>
    <div className="py-6">
      <p className="text-sm">
        Are you sure? This cannot be undone.
      </p>
    </div>
    <SheetFooter>
      <SheetClose render={<Button variant="outline" />}>
        Cancel
      </SheetClose>
      <SheetClose render={<Button variant="destructive" />}>
        Confirm Delete
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

## Keyboard

| Key | Action |
|-----|--------|
| Escape | Close sheet (unless `modal={false}`) |
| Tab | Navigate through focusable elements |

## Accessibility

- **Focus Management**: Focus moves to sheet content when opened, returns to trigger when closed
- **ARIA**: Title and description are automatically linked via `aria-labelledby` and `aria-describedby`
- **Keyboard**: Full keyboard navigation support with Escape to close
- **Screen Readers**: Announced as dialog/modal with proper labeling

## Related

- [Dialog](./dialog.llm.md) - For centered modal dialogs
- [Drawer](./drawer.llm.md) - Similar to Sheet but with dismissible overlay behavior
- [Popover](./popover.llm.md) - For smaller contextual overlays anchored to elements
