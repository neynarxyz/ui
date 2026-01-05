# Drawer

A sliding panel that appears from any screen edge (top, bottom, left, right) with drag-to-dismiss support, frosted glass overlay, and flexible composition.

## Import

```tsx
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  DrawerPortal,
  DrawerOverlay,
} from "@neynar/ui/drawer"
```

## Anatomy

```tsx
<Drawer direction="right">
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Description</DrawerDescription>
    </DrawerHeader>
    {/* Content */}
    <DrawerFooter>
      <DrawerClose>Cancel</DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

## Components

| Component | Description |
|-----------|-------------|
| Drawer | Root container, manages open/close state |
| DrawerTrigger | Button or element that opens the drawer |
| DrawerContent | Panel with auto-portal, overlay, and drag handle (bottom drawers) |
| DrawerHeader | Header section, centered on top/bottom drawers |
| DrawerTitle | Accessible title announced when opened |
| DrawerDescription | Accessible description for screen readers |
| DrawerFooter | Footer with actions, auto-positioned at bottom |
| DrawerClose | Button or element that closes the drawer |
| DrawerPortal | Manual portal container (auto-used by DrawerContent) |
| DrawerOverlay | Frosted backdrop (auto-rendered by DrawerContent) |

## Props

### Drawer

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| direction | "top" \| "bottom" \| "left" \| "right" | "bottom" | Edge from which drawer slides |
| open | boolean | - | Controlled open state |
| defaultOpen | boolean | - | Initial open state (uncontrolled) |
| onOpenChange | (open: boolean) => void | - | Called when state changes |
| modal | boolean | true | Whether to block interaction with content behind |
| dismissible | boolean | true | Whether drawer can be closed by clicking outside or dragging |
| shouldScaleBackground | boolean | false | Whether to scale background when open |
| handleOnly | boolean | false | Only allow dragging from handle (not entire drawer) |

### DrawerContent

Automatically renders portal, overlay, and drag handle (bottom drawers only). Content panel is positioned based on `direction` prop:
- **bottom**: Slides up from bottom, 80vh max height, rounded top corners
- **top**: Slides down from top, 80vh max height, rounded bottom corners
- **left**: Slides from left, 75% width (max 24rem), rounded right corners
- **right**: Slides from right, 75% width (max 24rem), rounded left corners

Extends all standard div props via `React.ComponentProps<typeof DrawerPrimitive.Content>`.

### DrawerHeader

Centered text on top/bottom drawers, left-aligned on side drawers. Extends standard div props.

### DrawerFooter

Auto-positioned at bottom with `mt-auto`. Extends standard div props.

### DrawerTrigger / DrawerClose

Both support custom rendering via Radix's `asChild` pattern:

```tsx
<DrawerTrigger asChild>
  <Button>Open</Button>
</DrawerTrigger>
```

## Data Attributes

| Attribute | When Present | Applied To |
|-----------|--------------|------------|
| data-slot | Always | All components (for targeting) |
| data-vaul-drawer-direction | Always | DrawerContent (value: "top"\|"bottom"\|"left"\|"right") |
| data-open | Drawer open | DrawerOverlay (for animations) |
| data-closed | Drawer closed | DrawerOverlay (for animations) |

## Examples

### Basic Usage

```tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Drawer Title</DrawerTitle>
      <DrawerDescription>This is a description.</DrawerDescription>
    </DrawerHeader>
    <div className="p-4">
      <p>Your content here.</p>
    </div>
  </DrawerContent>
</Drawer>
```

### Controlled State

```tsx
function ControlledDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Controlled Drawer</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">
            <Button onClick={() => setOpen(false)}>Close Programmatically</Button>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
```

### Settings Panel (Right Drawer)

```tsx
<Drawer direction="right">
  <DrawerTrigger asChild>
    <Button variant="outline">
      <SettingsIcon />
      Settings
    </Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Notification Settings</DrawerTitle>
      <DrawerDescription>Manage your notification preferences</DrawerDescription>
    </DrawerHeader>
    <div className="flex-1 space-y-4 overflow-y-auto p-4">
      <div className="flex items-center justify-between">
        <Label>Email Notifications</Label>
        <Switch />
      </div>
      <div className="flex items-center justify-between">
        <Label>Push Notifications</Label>
        <Switch />
      </div>
    </div>
    <DrawerFooter>
      <Button>Save Changes</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

### Mobile Navigation (Left Drawer)

```tsx
<Drawer direction="left">
  <DrawerTrigger asChild>
    <Button variant="ghost" size="icon">
      <MenuIcon />
    </Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Navigation</DrawerTitle>
    </DrawerHeader>
    <div className="flex-1 space-y-2 p-4">
      <Button variant="ghost" className="w-full justify-start">
        <HomeIcon />
        Dashboard
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <UserIcon />
        Profile
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <SettingsIcon />
        Settings
      </Button>
    </div>
  </DrawerContent>
</Drawer>
```

### Filter Panel (Bottom Drawer)

```tsx
<Drawer direction="bottom">
  <DrawerTrigger asChild>
    <Button variant="outline">Filters</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Filter Options</DrawerTitle>
      <DrawerDescription>Refine your results</DrawerDescription>
    </DrawerHeader>
    <div className="space-y-4 p-4">
      <div className="space-y-2">
        <Label htmlFor="start-date">Start Date</Label>
        <Input id="start-date" type="date" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <select id="category" className="...">
          <option>All</option>
          <option>Design</option>
          <option>Engineering</option>
        </select>
      </div>
    </div>
    <DrawerFooter>
      <div className="flex gap-2">
        <Button className="flex-1">Apply</Button>
        <Button variant="outline" className="flex-1">Reset</Button>
      </div>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

### Non-Dismissible Drawer

```tsx
<Drawer dismissible={false}>
  <DrawerTrigger asChild>
    <Button>Important Action</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Confirm Action</DrawerTitle>
      <DrawerDescription>This action requires confirmation</DrawerDescription>
    </DrawerHeader>
    <div className="p-4">
      <p>You must explicitly confirm or cancel.</p>
    </div>
    <DrawerFooter>
      <Button>Confirm</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

### Custom Layout (No Header)

```tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button>Custom Layout</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="relative p-6">
      <DrawerClose asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="absolute top-4 right-4"
        >
          <XIcon />
        </Button>
      </DrawerClose>
      <h2 className="text-lg font-semibold">Custom Layout</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Full control over structure
      </p>
    </div>
  </DrawerContent>
</Drawer>
```

## Keyboard

| Key | Action |
|-----|--------|
| Escape | Close drawer (if dismissible) |
| Tab | Navigate focusable elements |

## Accessibility

- Uses Vaul library built on Radix UI primitives for ARIA compliance
- `DrawerTitle` sets `aria-labelledby` on content
- `DrawerDescription` sets `aria-describedby` on content
- Focus trap when modal (default), focus returns to trigger on close
- Drag gestures announce state changes to screen readers
- Overlay has proper backdrop semantics

## Related

- [Dialog](/Users/bobringer/work/neynar/worktrees/frontend-monorepo/neyn-8162-nas-baseui-upgrade./dialog.llm.md) - Modal dialog for desktop-first interactions
- [Sheet](https://ui.shadcn.com/docs/components/sheet) - Similar side panel component (if available)
- [Popover](/Users/bobringer/work/neynar/worktrees/frontend-monorepo/neyn-8162-nas-baseui-upgrade./popover.llm.md) - Floating content without blocking interaction
