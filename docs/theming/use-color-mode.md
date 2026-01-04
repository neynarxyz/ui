# useColorMode

A React hook for programmatic access to the color mode system.

---

## Usage

```tsx
import { useColorMode } from "@neynar/ui/color-mode";

function MyComponent() {
  const { mode, preference, setPreference } = useColorMode();

  return (
    <div>
      <p>Current mode: {mode}</p>
      <p>User preference: {preference}</p>
      <button onClick={() => setPreference("dark")}>
        Set Dark
      </button>
    </div>
  );
}
```

---

## Return Value

| Property | Type | Description |
|----------|------|-------------|
| `mode` | `"light" \| "dark"` | The current resolved color mode |
| `preference` | `"system" \| "light" \| "dark"` | The user's saved preference |
| `setPreference` | `(pref) => void` | Function to update the preference |

---

## Examples

### Toggle Between Modes

```tsx
function ToggleButton() {
  const { mode, setPreference } = useColorMode();

  const toggle = () => {
    setPreference(mode === "dark" ? "light" : "dark");
  };

  return <button onClick={toggle}>Toggle</button>;
}
```

### Conditional Rendering

```tsx
function ThemedIcon() {
  const { mode } = useColorMode();

  return mode === "dark" ? <MoonIcon /> : <SunIcon />;
}
```

### Sync with External State

```tsx
function Settings() {
  const { preference, setPreference } = useColorMode();

  return (
    <select
      value={preference}
      onChange={(e) => setPreference(e.target.value)}
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}
```

---

## Notes

- Updates are reactive — components re-render when mode changes
- Persists to cookie — preferences survive page refreshes
- SSR-safe — works correctly with server-side rendering
