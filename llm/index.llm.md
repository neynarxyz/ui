# @neynar/ui

> React component library built on Base UI primitives + Tailwind CSS v4. 53 production-ready components with per-component imports, SSR-safe dark mode, and two visual themes.

## For AI Agents

**How to use this documentation:**

1. **Start here** for quick reference and component discovery
2. **Load specific component docs** from `./components/{name}.llm.md` when working with that component
3. **Load theming.llm.md** when dealing with themes, colors, or dark mode
4. **Each doc is self-contained** with imports, props, examples, and accessibility info

**Key patterns to remember:**
- Import path: `import { X } from "@neynar/ui/x"` (lowercase, kebab-case)
- All components have `data-slot` attributes for CSS targeting
- Compound components export multiple parts from same path
- `render` prop (not `asChild`) for polymorphism

## Quick Start

```tsx
import { Button } from "@neynar/ui/button";
import { Card, CardHeader, CardContent } from "@neynar/ui/card";
import "@neynar/ui/themes/purple-dawn";

export function App() {
  return (
    <Card>
      <CardHeader>Welcome</CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## Import Pattern

Each component has its own entry point:

```tsx
import { Button } from "@neynar/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@neynar/ui/dialog";
import { Input } from "@neynar/ui/input";
import { cn } from "@neynar/ui/utils";
```

## Themes

```tsx
// Purple Dawn - elegant translucent surfaces (default)
import "@neynar/ui/themes/purple-dawn";

// First Light - hand-drawn wireframe aesthetic
import "@neynar/ui/themes/first-light";
```

## Color Mode

SSR-safe dark mode with automatic system detection:

```tsx
import { ColorModeInitializer, ColorModeToggle } from "@neynar/ui/color-mode";

// In layout.tsx <head>
<ColorModeInitializer />

// Anywhere for user control
<ColorModeToggle />
```

## Component Index

### Core Inputs
| Component | Import Path | Description |
|-----------|-------------|-------------|
| Button | `@neynar/ui/button` | 9 variants, 8 sizes |
| Checkbox | `@neynar/ui/checkbox` | Boolean toggle |
| Input | `@neynar/ui/input` | Text input |
| RadioGroup | `@neynar/ui/radio-group` | Single selection |
| Select | `@neynar/ui/select` | Dropdown selection |
| Slider | `@neynar/ui/slider` | Range input |
| Switch | `@neynar/ui/switch` | Toggle switch |
| Textarea | `@neynar/ui/textarea` | Multi-line text |
| Toggle | `@neynar/ui/toggle` | Pressable toggle |
| ToggleGroup | `@neynar/ui/toggle-group` | Multiple toggles |
| Combobox | `@neynar/ui/combobox` | Searchable select |

### Form & Field
| Component | Import Path | Description |
|-----------|-------------|-------------|
| ButtonGroup | `@neynar/ui/button-group` | Connected buttons |
| Calendar | `@neynar/ui/calendar` | Date picker |
| Field | `@neynar/ui/field` | Form field wrapper |
| InputGroup | `@neynar/ui/input-group` | Input with addons |
| InputOTP | `@neynar/ui/input-otp` | One-time password |
| Label | `@neynar/ui/label` | Form labels |

### Layout & Structure
| Component | Import Path | Description |
|-----------|-------------|-------------|
| Accordion | `@neynar/ui/accordion` | Expandable sections |
| AspectRatio | `@neynar/ui/aspect-ratio` | Maintain ratio |
| Card | `@neynar/ui/card` | Content container |
| Collapsible | `@neynar/ui/collapsible` | Show/hide content |
| Resizable | `@neynar/ui/resizable` | Resizable panels |
| ScrollArea | `@neynar/ui/scroll-area` | Custom scrollbars |
| Separator | `@neynar/ui/separator` | Visual divider |
| Table | `@neynar/ui/table` | Data tables |

### Navigation & Menus
| Component | Import Path | Description |
|-----------|-------------|-------------|
| Breadcrumb | `@neynar/ui/breadcrumb` | Path indicator |
| ContextMenu | `@neynar/ui/context-menu` | Right-click menu |
| DropdownMenu | `@neynar/ui/dropdown-menu` | Trigger dropdown |
| Menubar | `@neynar/ui/menubar` | Horizontal menu |
| NavigationMenu | `@neynar/ui/navigation-menu` | Site navigation |
| Pagination | `@neynar/ui/pagination` | Page navigation |
| Sidebar | `@neynar/ui/sidebar` | Collapsible nav |
| Tabs | `@neynar/ui/tabs` | Tabbed content |

### Overlays & Dialogs
| Component | Import Path | Description |
|-----------|-------------|-------------|
| AlertDialog | `@neynar/ui/alert-dialog` | Confirmation |
| Dialog | `@neynar/ui/dialog` | Modal dialog |
| Drawer | `@neynar/ui/drawer` | Bottom drawer |
| HoverCard | `@neynar/ui/hover-card` | Rich hover preview |
| Popover | `@neynar/ui/popover` | Floating content |
| Sheet | `@neynar/ui/sheet` | Side panel |
| Tooltip | `@neynar/ui/tooltip` | Hover info |

### Feedback & Status
| Component | Import Path | Description |
|-----------|-------------|-------------|
| Alert | `@neynar/ui/alert` | Contextual messages |
| Badge | `@neynar/ui/badge` | Status indicators |
| Empty | `@neynar/ui/empty` | Empty state |
| Progress | `@neynar/ui/progress` | Progress bars |
| Skeleton | `@neynar/ui/skeleton` | Loading placeholders |
| Sonner | `@neynar/ui/sonner` | Toast notifications |
| Spinner | `@neynar/ui/spinner` | Loading spinner |

### Advanced
| Component | Import Path | Description |
|-----------|-------------|-------------|
| Avatar | `@neynar/ui/avatar` | User avatars |
| Carousel | `@neynar/ui/carousel` | Content slider |
| Chart | `@neynar/ui/chart` | Recharts wrapper |
| Command | `@neynar/ui/command` | Command palette |
| Kbd | `@neynar/ui/kbd` | Keyboard shortcuts |
| Item | `@neynar/ui/item` | List items |

### Typography
| Component | Import Path | Description |
|-----------|-------------|-------------|
| Title | `@neynar/ui/typography` | Headings (h1-h6) |
| Text | `@neynar/ui/typography` | Paragraph text |
| Code | `@neynar/ui/typography` | Inline code |
| Blockquote | `@neynar/ui/typography` | Quote blocks |

### Theme Utilities
| Component | Import Path | Description |
|-----------|-------------|-------------|
| ColorModeInitializer | `@neynar/ui/color-mode` | FOUC prevention script |
| ColorModeToggle | `@neynar/ui/color-mode` | Mode switcher dropdown |
| useColorMode | `@neynar/ui/color-mode` | Programmatic control hook |
| FirstLightFilters | `@neynar/ui/first-light` | SVG wobble filters |

## Additional Documentation

- [Theming](./theming.llm.md) - Themes, color mode, CSS variables, customization
- [Hooks](./hooks.llm.md) - useIsMobile responsive hook
- [Utilities](./utilities.llm.md) - cn() class merging utility
- [Contributing](./contributing.llm.md) - Component patterns, data-slot, templates
