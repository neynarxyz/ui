# Contributing to @neynar/ui

## Development Setup

```bash
# From monorepo root
yarn install
yarn storybook:ui  # Start Storybook on port 6006
```

## Adding a Component

### 1. Create the Component File

```bash
# File: src/components/ui/my-component.tsx
```

Follow this structure:

```tsx
import { Primitive } from "@base-ui/react/primitive"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const myComponentVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", secondary: "..." },
  },
  defaultVariants: { variant: "default" },
})

type MyComponentProps = Primitive.Props & VariantProps<typeof myComponentVariants>

/**
 * Brief description.
 *
 * @example
 * ```tsx
 * <MyComponent variant="secondary">Content</MyComponent>
 * ```
 */
function MyComponent({ className, variant, ...props }: MyComponentProps) {
  return (
    <Primitive
      data-slot="my-component"
      className={cn(myComponentVariants({ variant, className }))}
      {...props}
    />
  )
}

export { MyComponent, myComponentVariants, type MyComponentProps }
```

### 2. Create a Story

```bash
# File: src/components/ui/stories/my-component.stories.tsx
```

```tsx
import type { Meta, StoryObj } from "@storybook/react"
import { MyComponent } from "../my-component"

const meta: Meta<typeof MyComponent> = {
  title: "UI/MyComponent",
  component: MyComponent,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MyComponent>

export const Default: Story = {
  args: { children: "Example" },
}

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <MyComponent variant="default">Default</MyComponent>
      <MyComponent variant="secondary">Secondary</MyComponent>
    </div>
  ),
}
```

### 3. Generate Documentation

Use the `/ui:manage` skill to generate LLM documentation:

```bash
/ui:manage my-component
```

This runs the `ui-component-manager` agent which:
- Adds TSDoc comments to source files
- Creates `.llm/components/my-component.llm.md`

### 4. Build and Validate

```bash
yarn workspace @neynar/ui build       # Regenerates exports
yarn workspace @neynar/ui type-check  # TypeScript check
```

## Code Standards

### Naming
- **Files**: `kebab-case.tsx`
- **Components**: `PascalCase`
- **Exports**: Named exports only (no `export default`)

### TypeScript
- Use `type` not `interface`
- Export prop types: `type MyComponentProps`
- No `React.FC` - use function declarations

### Styling
- Use `data-slot="component-name"` on root element
- Use `cn()` for class merging
- Use CVA for variants
- Use semantic color tokens (`bg-primary`, `text-muted-foreground`)

### Accessibility
- Leverage Base UI primitives (they handle ARIA)
- Add `aria-label` for icon-only buttons
- Use `sr-only` for screen reader text
- Test with keyboard navigation

### Client Directive
- Add `"use client"` only if component uses React hooks
- Pure wrappers around Base UI primitives don't need it

## PR Checklist

- [ ] Component has `data-slot` attribute
- [ ] TypeScript types exported
- [ ] Storybook story created
- [ ] `yarn type-check` passes
- [ ] Tested keyboard navigation

## Component Categories

| Category | Components |
|----------|------------|
| **Inputs** | Button, Checkbox, Input, RadioGroup, Select, Slider, Switch, Textarea, Toggle, ToggleGroup |
| **Forms** | ButtonGroup, Calendar, Field, InputGroup, InputOTP, Label |
| **Layout** | Accordion, AspectRatio, Card, Collapsible, Resizable, Separator, Table |
| **Navigation** | Breadcrumb, ContextMenu, DropdownMenu, Menubar, NavigationMenu, Pagination, Tabs |
| **Overlays** | AlertDialog, Dialog, Drawer, HoverCard, Popover, Sheet, Tooltip |
| **Feedback** | Alert, Badge, Empty, Progress, Skeleton, Sonner, Spinner |
| **Advanced** | Avatar, Carousel, Chart, Command, Kbd, ScrollArea, Sidebar |
| **Neynar** | ColorModeInitializer, ColorModeToggle, Title, Text, Code, Blockquote |
