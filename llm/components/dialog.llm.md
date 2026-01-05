# Dialog

Modal overlay component for capturing user attention, gathering input, or confirming actions.

## Import

```tsx
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@neynar/ui/dialog"
```

## Anatomy

```tsx
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <DialogClose>Cancel</DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Components

| Component | Description |
|-----------|-------------|
| Dialog | Root container that manages open state (controlled or uncontrolled) |
| DialogTrigger | Button that opens the dialog, supports `render` prop for customization |
| DialogContent | Main content container with automatic portal, overlay, and animations |
| DialogHeader | Container for title and description with consistent spacing |
| DialogTitle | Accessible heading element, required for screen readers |
| DialogDescription | Optional description text with support for inline links |
| DialogFooter | Action button container, stacks vertically on mobile |
| DialogClose | Button that closes the dialog, works with `render` prop |
| DialogOverlay | Backdrop overlay with blur effect (auto-included in DialogContent) |
| DialogPortal | Portal to document root (auto-included in DialogContent) |

## Props

### Dialog

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| onOpenChange | (open: boolean) => void | - | Callback when open state changes |
| defaultOpen | boolean | - | Initial open state (uncontrolled) |

### DialogContent

Automatically renders into a portal with overlay backdrop. Centered on screen with fade and zoom animations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| showCloseButton | boolean | true | Show close button (X) in top-right corner |
| className | string | - | Additional CSS classes |

### DialogFooter

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| showCloseButton | boolean | false | Render a "Close" button automatically |
| className | string | - | Additional CSS classes |

### Render Prop Pattern

DialogTrigger and DialogClose support the `render` prop to customize the underlying element:

```tsx
<DialogTrigger render={<Button variant="destructive" />}>
  Delete Account
</DialogTrigger>

<DialogClose render={<Button variant="outline" />}>
  Cancel
</DialogClose>
```

This allows you to use any component while preserving dialog functionality.

## Data Attributes

Applied automatically for styling and animations:

| Attribute | When Present | Usage |
|-----------|--------------|-------|
| data-open | Dialog is open | Styling open state, animations |
| data-closed | Dialog is closed | Styling closed state, exit animations |
| data-slot | Always | Component identification ("dialog", "dialog-trigger", etc.) |

## Examples

### Basic Dialog

```tsx
<Dialog>
  <DialogTrigger render={<Button />}>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a description providing context about the dialog.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Controlled State

```tsx
function ControlledDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open from Outside</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger render={<Button />}>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled Dialog</DialogTitle>
            <DialogDescription>
              State is controlled by React state.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Close Programmatically</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
```

### Form Dialog

```tsx
<Dialog>
  <DialogTrigger render={<Button />}>
    <PlusIcon data-icon="inline-start" />
    Create Project
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Project</DialogTitle>
      <DialogDescription>
        Set up a new project to organize your API keys.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Project Name</Label>
        <Input id="name" placeholder="My Awesome Project" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input id="description" placeholder="Brief description" />
      </div>
    </div>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
      <Button>
        <PlusIcon data-icon="inline-start" />
        Create Project
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Destructive Confirmation

```tsx
function DeleteConfirmation() {
  const [isDeleting, setIsDeleting] = useState(false)

  function handleDelete() {
    setIsDeleting(true)
    // Perform delete operation
    setTimeout(() => setIsDeleting(false), 1500)
  }

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="destructive" />}>
        <TrashIcon data-icon="inline-start" />
        Revoke Key
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Revoke API Key?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Revoking this key will immediately
            stop all applications using it from accessing the API.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? (
              <>
                <Loader2Icon data-icon="inline-start" className="animate-spin" />
                Revoking...
              </>
            ) : (
              <>
                <TrashIcon data-icon="inline-start" />
                Revoke Key
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

### Without Close Button

For dialogs that require explicit user action:

```tsx
<Dialog>
  <DialogTrigger render={<Button />}>Forced Action</DialogTrigger>
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>Action Required</DialogTitle>
      <DialogDescription>
        Please choose one of the options below. This dialog cannot be
        dismissed without making a selection.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>Option A</DialogClose>
      <DialogClose render={<Button />}>Option B</DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Keyboard

| Key | Action |
|-----|--------|
| Escape | Closes the dialog (unless showCloseButton={false}) |
| Tab | Cycles through focusable elements within dialog |

## Accessibility

- Automatically sets `role="dialog"` and `aria-modal="true"`
- DialogTitle automatically provides `aria-labelledby` for the dialog
- DialogDescription provides `aria-describedby` when present
- Focus is trapped within the dialog when open
- Focus returns to trigger element when closed
- Escape key closes dialog by default

## Related

- **AlertDialog** - For simpler confirmations with pre-styled variants
- **Drawer** - For mobile-first slide-in panels
- **Popover** - For non-modal contextual overlays
- **Sheet** - For side-panel content
