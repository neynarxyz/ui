# Hooks

React hooks provided by @neynar/ui.

## useIsMobile

Detects mobile viewport using `matchMedia`. Returns reactive boolean.

### Import

```tsx
import { useIsMobile } from "@neynar/ui/use-mobile"
```

### Returns

| Type | Description |
|------|-------------|
| `boolean` | `true` when viewport < 768px, `false` otherwise |

### Behavior

- Returns `false` during SSR (hydration-safe)
- Updates reactively on viewport resize
- Uses `matchMedia` for performance (no resize listener spam)
- Breakpoint: 768px (CSS `md:` equivalent)

### Example: Responsive Navigation

```tsx
import { useIsMobile } from "@neynar/ui/use-mobile"

function ResponsiveNav() {
  const isMobile = useIsMobile()
  return isMobile ? <MobileNav /> : <DesktopNav />
}
```

### Example: Responsive Modal

Use Sheet for mobile, Dialog for desktop:

```tsx
import { useIsMobile } from "@neynar/ui/use-mobile"
import { Sheet, SheetContent } from "@neynar/ui/sheet"
import { Dialog, DialogContent } from "@neynar/ui/dialog"

function ResponsiveModal({ open, onOpenChange, children }) {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="bottom">{children}</SheetContent>
      </Sheet>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}
```

### Example: Conditional Rendering

```tsx
import { useIsMobile } from "@neynar/ui/use-mobile"

function Dashboard() {
  const isMobile = useIsMobile()

  return (
    <div className="flex">
      {!isMobile && <Sidebar />}
      <main className="flex-1">
        <Content />
      </main>
      {isMobile && <MobileBottomNav />}
    </div>
  )
}
```

### Related

- [Sheet](./components/sheet.llm.md) - Often used with mobile detection for bottom sheets
- [Drawer](./components/drawer.llm.md) - Mobile-first bottom sheet component
- [Sidebar](./components/sidebar.llm.md) - Responsive sidebar that can use mobile detection
