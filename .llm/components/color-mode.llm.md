# Color Mode

SSR-safe color mode system with automatic system preference detection, cookie persistence, and FOUC prevention.

## Import

```tsx
import {
  ColorModeInitializer,
  ColorModeToggle,
  useColorMode,
  type ColorModePreference,
} from "@neynar/ui/color-mode"
```

## Components

| Component | Description |
|-----------|-------------|
| ColorModeInitializer | Inline script preventing flash of wrong color mode |
| ColorModeToggle | Dropdown button for switching between system/light/dark |
| useColorMode | Hook for programmatic color mode control |

## ColorModeInitializer

Prevents flash of unstyled content (FOUC) by applying the correct color mode before first paint.

### Usage

Place in your root layout's `<head>`:

```tsx
// app/layout.tsx
import { ColorModeInitializer } from "@neynar/ui/color-mode";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorModeInitializer />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### How It Works

1. Reads `color-mode` cookie for saved preference
2. Falls back to `prefers-color-scheme` media query
3. Applies `dark` class to `<html>` if needed
4. Sets `color-scheme` CSS property for native elements
5. Executes synchronously before first paint

### Props

No props. Zero configuration.

## ColorModeToggle

Dropdown button for switching between system, light, and dark modes.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | "xs" \| "sm" \| "default" \| "lg" | "default" | Button size |
| showLabel | boolean | false | Show mode name next to icon |
| align | "start" \| "center" \| "end" | "end" | Dropdown alignment |
| variant | ButtonVariant | "outline" | Button visual style |

Extends Button props (excluding `size`).

### Examples

```tsx
// Icon-only (default)
<ColorModeToggle />

// With label
<ColorModeToggle showLabel />

// Small ghost button
<ColorModeToggle variant="ghost" size="sm" />

// In a header
<header className="flex justify-between p-4">
  <Logo />
  <ColorModeToggle />
</header>
```

## useColorMode

Hook for programmatic color mode control.

### Returns

| Property | Type | Description |
|----------|------|-------------|
| preference | "system" \| "light" \| "dark" | User's saved preference |
| mode | "light" \| "dark" | Actual resolved mode |
| setPreference | (pref: ColorModePreference) => void | Update preference |

### Examples

```tsx
// Toggle between modes
function ToggleButton() {
  const { mode, setPreference } = useColorMode();

  return (
    <button onClick={() => setPreference(mode === "dark" ? "light" : "dark")}>
      Currently: {mode}
    </button>
  );
}

// Settings dropdown
function ColorModeSelect() {
  const { preference, setPreference } = useColorMode();

  return (
    <select
      value={preference}
      onChange={(e) => setPreference(e.target.value as ColorModePreference)}
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}

// Conditional rendering
function ThemedIcon() {
  const { mode } = useColorMode();
  return mode === "dark" ? <MoonIcon /> : <SunIcon />;
}
```

## Cookie Format

Stored in `color-mode` cookie as JSON:

```json
{
  "preference": "system" | "light" | "dark",
  "mode": "light" | "dark"
}
```

- `preference`: What user selected
- `mode`: Resolved value (for SSR)
- Max age: 1 year
- SameSite: lax

## Event System

Color mode changes broadcast via custom event:

```tsx
// Listen for changes
useEffect(() => {
  const handler = (e: CustomEvent) => {
    console.log('Mode changed:', e.detail.mode);
  };
  window.addEventListener('color-mode-change', handler);
  return () => window.removeEventListener('color-mode-change', handler);
}, []);
```

Multiple ColorModeToggle instances stay synchronized automatically.

## Data Attributes

Applied to `<html>` element:

| Attribute | Value |
|-----------|-------|
| class | "dark" when dark mode active |
| style.colorScheme | "light" \| "dark" |

## Accessibility

- ColorModeToggle has full keyboard navigation
- Screen reader announces current selection
- Focus indicators meet WCAG 2.1 AA
- Respects `prefers-color-scheme` for system mode

## Related

- [Theming](../theming.llm.md) - CSS variables, themes, customization
- [Button](./button.llm.md) - ColorModeToggle uses Button internally
- [DropdownMenu](./dropdown-menu.llm.md) - ColorModeToggle uses DropdownMenu
