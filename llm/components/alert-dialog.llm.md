# AlertDialog

Modal dialog for critical confirmations requiring user attention, typically for destructive or irreversible actions.

## Import

```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@neynar/ui/alert-dialog"
```

## Anatomy

```tsx
<AlertDialog>
  <AlertDialogTrigger />
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogMedia />
      <AlertDialogTitle />
      <AlertDialogDescription />
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel />
      <AlertDialogAction />
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

## Components

| Component | Description |
|-----------|-------------|
| AlertDialog | Root container managing open state and accessibility |
| AlertDialogTrigger | Button that opens the dialog (supports `render` prop) |
| AlertDialogContent | Main dialog content with portal and backdrop |
| AlertDialogHeader | Container for title, description, and optional media |
| AlertDialogTitle | Dialog title (automatically announced to screen readers) |
| AlertDialogDescription | Description text with automatic link styling |
| AlertDialogMedia | Optional icon container for visual indicators |
| AlertDialogFooter | Container for action buttons |
| AlertDialogAction | Primary action button (inherits Button variants) |
| AlertDialogCancel | Cancel button that closes the dialog |
| AlertDialogPortal | Portal container (automatically used by AlertDialogContent) |
| AlertDialogOverlay | Backdrop overlay (automatically used by AlertDialogContent) |

## Props

### AlertDialog

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| defaultOpen | boolean | false | Uncontrolled default open state |
| onOpenChange | (open: boolean) => void | - | Called when open state changes |

### AlertDialogContent

Automatically renders portal and backdrop overlay. Centered with fade + zoom animations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | "default" \| "sm" | "default" | Dialog size variant |

**Size Behavior:**
- `sm` - Compact dialog, footer buttons in 2-column grid on mobile
- `default` - Standard size, left-aligned on desktop when using media icon

### AlertDialogTrigger

Supports `render` prop to customize the trigger element:

```tsx
<AlertDialogTrigger render={<Button variant="destructive" />}>
  Delete Item
</AlertDialogTrigger>
```

### AlertDialogCancel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | Button variant | "outline" | Button variant (inherits from Button) |
| size | Button size | "default" | Button size (inherits from Button) |

Automatically renders as a Button via `render` prop. Closes dialog when clicked.

### AlertDialogAction

Inherits all Button props and variants. Does not automatically close the dialog - handle close in `onClick`:

```tsx
<AlertDialogAction
  variant="destructive"
  onClick={() => {
    deleteItem()
    // Dialog closes via state change
  }}
>
  Delete
</AlertDialogAction>
```

## Data Attributes

| Attribute | When Present |
|-----------|--------------|
| data-open | Dialog is open |
| data-closed | Dialog is closed |
| data-size | Size variant ("default" or "sm") |
| data-slot | Component identifier for styling |

## Examples

### Basic Destructive Action

```tsx
<AlertDialog>
  <AlertDialogTrigger render={<Button variant="destructive" />}>
    Delete Item
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete this item?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. The item will be permanently removed.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### With Media Icon

```tsx
<AlertDialog>
  <AlertDialogTrigger render={<Button variant="destructive" />}>
    Revoke Key
  </AlertDialogTrigger>
  <AlertDialogContent size="default">
    <AlertDialogHeader>
      <AlertDialogMedia>
        <ShieldAlertIcon className="text-destructive" />
      </AlertDialogMedia>
      <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>
      <AlertDialogDescription>
        This will immediately invalidate the API key. Any applications using
        this key will stop working. This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Revoke Key</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Small Dialog for Quick Confirmations

```tsx
<AlertDialog>
  <AlertDialogTrigger render={<Button variant="destructive" />}>
    Delete Webhook
  </AlertDialogTrigger>
  <AlertDialogContent size="sm">
    <AlertDialogHeader>
      <AlertDialogMedia>
        <AlertTriangleIcon className="text-destructive" />
      </AlertDialogMedia>
      <AlertDialogTitle>Delete webhook?</AlertDialogTitle>
      <AlertDialogDescription>
        You will no longer receive events at this endpoint.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Controlled State

```tsx
function ControlledExample() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm action</AlertDialogTitle>
            <AlertDialogDescription>
              This dialog is controlled externally.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                performAction()
                setOpen(false)
              }}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
```

### Complex Content with Lists

```tsx
<AlertDialog>
  <AlertDialogTrigger render={<Button variant="destructive" />}>
    Delete Multiple Items
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogMedia>
        <TrashIcon className="text-destructive" />
      </AlertDialogMedia>
      <AlertDialogTitle>Delete 3 items?</AlertDialogTitle>
      <AlertDialogDescription>
        The following items will be permanently deleted:
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>API Key: prod_****_8f3d</li>
          <li>Webhook: https://api.example.com/hook</li>
          <li>Team Member: jane@example.com</li>
        </ul>
        <p className="mt-2">This action cannot be undone.</p>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Delete All</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

## Keyboard

| Key | Action |
|-----|--------|
| Escape | Close dialog |
| Tab | Navigate between action and cancel buttons |
| Space/Enter | Activate focused button |

## Accessibility

- Title is announced to screen readers via `aria-labelledby`
- Description is associated via `aria-describedby`
- Focus is trapped within dialog when open
- Focus returns to trigger element when closed
- Escape key closes dialog
- Backdrop click closes dialog

## Related

- [Dialog](./dialog.llm.md) - For non-critical confirmations and general content
- [Button](./button.llm.md) - Used for action and cancel buttons
- [Popover](./popover.llm.md) - For non-modal contextual content
