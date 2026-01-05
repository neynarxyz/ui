# Sonner (Toast Notifications)

Toast notification system built on Sonner with themed icons and automatic color system integration.

## Import

```tsx
import { Toaster, toast } from "@neynar/ui/sonner"
```

## Anatomy

```tsx
// Add once to your app root
<Toaster position="bottom-right" />

// Trigger toasts anywhere in your app
toast.success("Saved successfully")
toast.error("Failed to save")
```

## Components

| Component | Description |
|-----------|-------------|
| Toaster | Container component rendered once at app root. Manages all toast notifications. |
| toast | Function API for triggering notifications. Includes type variants and promise handling. |

## Props

### Toaster

Pre-configured toast container with custom icons and theme integration. Renders at the specified position and manages all active toasts.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| position | "top-left" \| "top-center" \| "top-right" \| "bottom-left" \| "bottom-center" \| "bottom-right" | "bottom-right" | Screen position for toasts |
| theme | "light" \| "dark" \| "system" | "system" | Color theme for toasts |
| richColors | boolean | true | Enhanced colors for toast variants |
| expand | boolean | false | Expand toasts on hover |
| visibleToasts | number | 3 | Maximum visible toasts at once |
| closeButton | boolean | false | Show close button on all toasts |
| duration | number | 4000 | Default duration in milliseconds |
| toastOptions | object | - | Global toast styling options |

### toast Function API

Function for triggering toast notifications. Available variants:

```tsx
// Basic toast
toast("Message")

// Type variants
toast.success("Success message")
toast.error("Error message")
toast.warning("Warning message")
toast.info("Info message")
toast.loading("Loading...")

// Promise handling
toast.promise(promise, {
  loading: "Loading...",
  success: "Success!",
  error: "Failed"
})
```

### Toast Options

All toast functions accept an optional second parameter with these options:

| Option | Type | Description |
|--------|------|-------------|
| description | string | Secondary text below the title |
| duration | number | Override default duration (milliseconds) |
| icon | ReactNode | Custom icon (replaces default) |
| action | { label: string, onClick: () => void } | Primary action button |
| cancel | { label: string, onClick: () => void } | Secondary cancel button |
| id | string | Custom toast ID for updates |
| position | string | Override global position |
| dismissible | boolean | Allow manual dismissal (default: true) |
| onDismiss | () => void | Callback when dismissed |
| onAutoClose | () => void | Callback when auto-closed |

## Customizations

### Custom Icons

Default icons are automatically provided:
- Success: `CircleCheckIcon`
- Error: `OctagonXIcon`
- Warning: `TriangleAlertIcon`
- Info: `InfoIcon`
- Loading: `Loader2Icon` (animated)

Override with the `icon` option:

```tsx
toast.success("Copied!", {
  icon: <CopyIcon className="size-4" />
})
```

### Theme Integration

Toasts automatically integrate with your theme's CSS variables:
- Uses `--popover` colors for normal toasts
- Uses `--success`, `--destructive`, `--warning`, `--info` for variants
- Applies `--radius` for border radius
- Includes backdrop blur effect

### Styling

Customize appearance via `toastOptions`:

```tsx
<Toaster
  toastOptions={{
    classNames: {
      toast: "custom-toast-class",
      title: "custom-title-class",
      description: "custom-description-class"
    },
    style: {
      background: "var(--custom-bg)",
      border: "1px solid var(--custom-border)"
    }
  }}
/>
```

## Examples

### Basic Usage

```tsx
function SaveButton() {
  const handleSave = async () => {
    try {
      await saveData()
      toast.success("Data saved successfully")
    } catch (error) {
      toast.error("Failed to save data")
    }
  }

  return <Button onClick={handleSave}>Save</Button>
}
```

### With Description

```tsx
toast.error("Failed to save", {
  description: "Please check your internet connection and try again"
})
```

### With Action Button

```tsx
toast.success("File uploaded", {
  description: "Your file has been uploaded successfully",
  action: {
    label: "View",
    onClick: () => router.push("/files")
  }
})
```

### With Both Actions

```tsx
toast.success("Changes saved", {
  description: "Do you want to publish these changes now?",
  action: {
    label: "Publish",
    onClick: () => publishChanges()
  },
  cancel: {
    label: "Later",
    onClick: () => console.log("Cancelled")
  }
})
```

### Promise Handling

```tsx
function CreateButton() {
  const handleCreate = () => {
    const promise = createAPIKey()

    toast.promise(promise, {
      loading: "Creating API key...",
      success: "API key created successfully",
      error: "Failed to create API key"
    })
  }

  return <Button onClick={handleCreate}>Create Key</Button>
}
```

### Promise with Dynamic Messages

```tsx
toast.promise(fetchUser(), {
  loading: "Loading user...",
  success: (data) => ({
    message: `Welcome ${data.name}!`,
    description: data.email,
    duration: 5000
  }),
  error: (error) => ({
    message: "Failed to load user",
    description: error.message
  })
})
```

### Loading State Management

```tsx
function RegenerateButton() {
  const handleRegenerate = async () => {
    const toastId = toast.loading("Regenerating API key...", {
      description: "This may take a few seconds"
    })

    try {
      const newKey = await regenerateKey()
      toast.success("API key regenerated", {
        id: toastId, // Updates existing toast
        description: "Your old key has been invalidated"
      })
    } catch (error) {
      toast.error("Failed to regenerate", {
        id: toastId
      })
    }
  }

  return <Button onClick={handleRegenerate}>Regenerate</Button>
}
```

### Custom Duration

```tsx
// Short notification (2 seconds)
toast.success("Copied!", { duration: 2000 })

// Long notification (10 seconds)
toast.warning("Important update", { duration: 10000 })

// Persistent until dismissed
toast.info("Review required", { duration: Infinity })
```

### Multiple Positions

```tsx
// Override global position per toast
toast.success("Top notification", { position: "top-center" })
toast.error("Bottom notification", { position: "bottom-left" })
```

### Stack Multiple Toasts

```tsx
function showBatch() {
  toast.success("First notification")
  setTimeout(() => toast.info("Second notification"), 200)
  setTimeout(() => toast.warning("Third notification"), 400)
}
```

## Keyboard

| Key | Action |
|-----|--------|
| Escape | Dismiss all toasts |
| Swipe | Dismiss individual toast (touch devices) |

## Accessibility

- ARIA live regions announce toast messages to screen readers
- Toasts are automatically announced with appropriate politeness level based on type
- Keyboard accessible dismissal with Escape key
- Focus management preserves user context
- Action buttons are keyboard navigable

## Related

- [Alert](./alert.llm.md) - Static inline notifications
- [Alert Dialog](./alert-dialog.llm.md) - Modal confirmations
- [Dialog](./dialog.llm.md) - Modal dialogs
