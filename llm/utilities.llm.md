# Utilities

Helper functions provided by @neynar/ui.

## cn()

Merges class names with Tailwind CSS conflict resolution.

### Import

```tsx
import { cn } from "@neynar/ui/utils"
```

### Signature

```tsx
function cn(...inputs: ClassValue[]): string
```

### How It Works

1. **clsx** - Handles conditionals, arrays, and objects
2. **tailwind-merge** - Resolves Tailwind conflicts (last class wins)

### Examples

```tsx
// Conditional classes
cn("px-4", isActive && "bg-primary")

// Merge with className prop
cn("rounded-lg border", className)

// Tailwind conflict resolution
cn("text-red-500", "text-blue-500") // → "text-blue-500"
cn("px-4 py-2", "px-8") // → "px-8 py-2"

// Objects and arrays
cn({ "opacity-50": disabled }, ["flex", "items-center"])
```

### Common Patterns

```tsx
// Component with className prop
function Card({ className, ...props }) {
  return (
    <div className={cn("rounded-lg border bg-card", className)} {...props} />
  )
}

// Conditional styling
<Button className={cn(isLoading && "opacity-50 cursor-wait")}>
  Submit
</Button>

// Variant-based styling
<div className={cn(
  "p-4",
  variant === "destructive" && "bg-destructive text-destructive-foreground",
  variant === "success" && "bg-success text-success-foreground"
)}>
  {children}
</div>
```

---

## Internal Utilities

The following utilities are used internally by components but are **not exported**:

### CVA Variants (lib/variants.ts)

Internal variant definitions for consistent styling across components:

- **menuItemVariants** - Styling for DropdownMenuItem, ContextMenuItem, MenubarItem
- **typographyColorVariants** - Color options for Title, Text, Code, Blockquote
- **titleVariants** - Size and weight options for Title
- **textVariants** - Size, weight, alignment for Text

These are exposed via component props rather than direct imports:

```tsx
// Use component props (correct)
<Text color="muted" size="sm">Helper text</Text>
<DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>

// Don't try to import variants directly (not exported)
// import { menuItemVariants } from "@neynar/ui/lib/variants" // ❌
```

## Related

- [Theming](./theming.llm.md) - CSS variables and themes
- [Hooks](./hooks.llm.md) - React hooks
