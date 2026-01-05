# Toggle

Two-state button that can be pressed (on) or unpressed (off).

## Import

```tsx
import { Toggle } from "@neynar/ui/toggle"
```

## Anatomy

```tsx
<Toggle>
  <Icon />
  Label
</Toggle>
```

## Props

### Toggle

Extends `@base-ui/react/toggle` Props with additional variant styling.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| pressed | boolean | - | Controlled pressed state |
| defaultPressed | boolean | false | Uncontrolled default pressed state |
| onPressedChange | (pressed: boolean) => void | - | Called when pressed state changes |
| disabled | boolean | false | Whether toggle is disabled |
| variant | "default" \| "outline" | "default" | Visual style variant |
| size | "sm" \| "default" \| "lg" | "default" | Toggle size |
| children | ReactNode | - | Toggle content (icon, text, or both) |
| className | string | - | Additional CSS classes |
| render | ReactElement \| function | - | Custom render prop |

### Variant Details

**variant="default"**: Transparent background, shows pressed state with muted background.

**variant="outline"**: Border with shadow, more prominent visual separation.

## Data Attributes

| Attribute | When Present |
|-----------|--------------|
| data-pressed | Toggle is in pressed state |
| data-disabled | Toggle is disabled |
| aria-pressed | "true" or "false" based on state |

## Variants

| Variant | Options |
|---------|---------|
| variant | default, outline |
| size | sm, default, lg |

## Examples

### Basic Toggle

```tsx
function BasicExample() {
  const [pressed, setPressed] = useState(false)

  return (
    <Toggle
      pressed={pressed}
      onPressedChange={setPressed}
    >
      Toggle me
    </Toggle>
  )
}
```

### Icon-Only Toggle

```tsx
import { BoldIcon } from "lucide-react"

function IconToggle() {
  return (
    <Toggle aria-label="Toggle bold">
      <BoldIcon />
    </Toggle>
  )
}
```

### Icon with Text

```tsx
import { GridIcon, ListIcon } from "lucide-react"

function ViewModeToggle() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="flex gap-2">
      <Toggle
        pressed={viewMode === "grid"}
        onPressedChange={(pressed) =>
          pressed && setViewMode("grid")
        }
        aria-label="Grid view"
      >
        <GridIcon />
        Grid
      </Toggle>
      <Toggle
        pressed={viewMode === "list"}
        onPressedChange={(pressed) =>
          pressed && setViewMode("list")
        }
        aria-label="List view"
      >
        <ListIcon />
        List
      </Toggle>
    </div>
  )
}
```

### Formatting Toolbar

```tsx
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

function FormattingToolbar() {
  const [formatting, setFormatting] = useState({
    bold: false,
    italic: false,
    underline: false,
  })

  return (
    <div className="flex gap-2">
      <Toggle
        size="sm"
        variant="outline"
        pressed={formatting.bold}
        onPressedChange={(pressed) =>
          setFormatting((prev) => ({ ...prev, bold: pressed }))
        }
        aria-label="Toggle bold"
      >
        <BoldIcon />
      </Toggle>
      <Toggle
        size="sm"
        variant="outline"
        pressed={formatting.italic}
        onPressedChange={(pressed) =>
          setFormatting((prev) => ({ ...prev, italic: pressed }))
        }
        aria-label="Toggle italic"
      >
        <ItalicIcon />
      </Toggle>
      <Toggle
        size="sm"
        variant="outline"
        pressed={formatting.underline}
        onPressedChange={(pressed) =>
          setFormatting((prev) => ({ ...prev, underline: pressed }))
        }
        aria-label="Toggle underline"
      >
        <UnderlineIcon />
      </Toggle>
    </div>
  )
}
```

### Theme Toggle

```tsx
import { SunIcon, MoonIcon } from "lucide-react"

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  return (
    <div className="flex gap-2">
      <Toggle
        variant="outline"
        pressed={theme === "light"}
        onPressedChange={(pressed) =>
          pressed && setTheme("light")
        }
        aria-label="Light theme"
      >
        <SunIcon />
        Light
      </Toggle>
      <Toggle
        variant="outline"
        pressed={theme === "dark"}
        onPressedChange={(pressed) =>
          pressed && setTheme("dark")
        }
        aria-label="Dark theme"
      >
        <MoonIcon />
        Dark
      </Toggle>
    </div>
  )
}
```

## Keyboard

| Key | Action |
|-----|--------|
| Space | Toggle pressed state |
| Enter | Toggle pressed state |

## Accessibility

- Renders semantic `<button>` element with `aria-pressed` attribute
- Icons automatically sized to 16px (size-4) unless custom size class provided
- Always provide `aria-label` when using icon-only toggles
- Disabled state prevents all interaction and reduces opacity
- Focus visible ring indicates keyboard focus

## Related

- [Button](./button.llm.md) - For actions instead of state toggles
- [Checkbox](./checkbox.llm.md) - For form selections
- [Switch](./switch.llm.md) - For on/off settings
