# Changelog

All notable changes to `@neynar/ui` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.2] - 2025-01-20

### Added
- **Progress**: Added `smooth` prop for animated value transitions. Pass `true` for default 500ms, or a number for custom duration (e.g., `smooth={200}`).

---

## [1.2.1] - 2025-01-20

### Added
- **ResizablePanel**: Added `duration` prop (default 400ms) and `--resizable-easing` CSS variable for animation customization.

---

## [1.2.0] - 2025-01-20

### Added
- **ResizablePanel**: Added `collapsed` prop for declarative collapse control and `animated` prop for smooth CSS transitions. Just set `collapsed={isCollapsed}` - no ref needed. Drag resizing remains instant (no animation lag).

---

## [1.1.0] - 2025-01-18

### Fixed
- **Title**: Changed line-height from `leading-none` to `leading-[1.1]` for 5xl and 6xl sizes to prevent text overlap on multi-line headings
- **Storybook**: Made base path configurable via `STORYBOOK_BASE_PATH` env var for local development (defaults to `/`) vs production builds (`/ui/`)
- **ResizableHandle**: Added focus/hover/drag/active state styling with subtle 50% opacity primary color (`bg-primary/50`)

### Added
- **Claude Code Skill**: Added `/quick-fixes` skill for streamlined bug fixes and improvements workflow

---

## [1.0.6] - 2025-01-17

### Fixed
- **Resizable**: Clarified size prop documentation - numeric values are pixels, strings are percentages (e.g., `defaultSize={300}` = 300px, `defaultSize="25%"` = 25%)
- **ResizableHandle**: Changed focus/hover/drag colors to use primary theme color instead of white/ring color for better visibility in dark mode

---

## [1.0.5] - 2025-01-13

### Fixed
- **Button**: Added `"use client"` directive to fix crash when Button is used in Server Components that call `router.refresh()`. Base UI primitives require client-side rendering.

---

## [1.0.4] - 2025-01-11

### Fixed
- **Tabs**: Fixed disabled styling not applying on `TabsTrigger`. Changed `disabled:` Tailwind variant to `data-[disabled]:` to match Base UI's `data-disabled` attribute pattern.

---

## [0.5.0] - 2025-01-01

First production-ready release of @neynar/ui - a React component library built on Base UI primitives and Tailwind CSS v4.

### Components (53)

#### Layout & Structure
- **Accordion** - Expandable content sections with smooth animations
- **AspectRatio** - Maintain consistent width-to-height ratios
- **Card** - Container with header, content, footer, and description slots
- **Collapsible** - Toggle visibility of content sections
- **Resizable** - Draggable panel resizing with persist support
- **ScrollArea** - Custom scrollbars with cross-browser consistency
- **Separator** - Visual dividers (horizontal/vertical)
- **Sidebar** - Collapsible navigation with mobile sheet mode

#### Navigation
- **Breadcrumb** - Hierarchical page location with customizable separators
- **NavigationMenu** - Accessible dropdown navigation with viewport
- **Menubar** - Horizontal menu bar with keyboard navigation
- **Pagination** - Page navigation with prev/next and ellipsis
- **Tabs** - Tab-based content switching

#### Forms & Inputs
- **Button** - 9 variants (default, outline, secondary, ghost, destructive, success, warning, info, link) + 8 sizes
- **ButtonGroup** - Grouped buttons with connected styling
- **Checkbox** - Checkable input with indeterminate state
- **Combobox** - Searchable select with typeahead and multi-select
- **Field** - Form field wrapper with label, description, and error
- **Input** - Text input with validation states
- **InputGroup** - Input with prefix/suffix addons
- **InputOTP** - One-time password input
- **Label** - Accessible form labels
- **RadioGroup** - Radio button groups
- **Select** - Dropdown selection with groups and icons
- **Slider** - Range input with single/multi-thumb support
- **Switch** - Toggle switch control
- **Textarea** - Multi-line text input

#### Feedback & Status
- **Alert** - Contextual feedback messages (info, success, warning, destructive)
- **AlertDialog** - Confirmation dialogs requiring user action
- **Badge** - Status indicators with variants
- **Empty** - Empty state placeholder with icon and action
- **Progress** - Progress bars and indicators
- **Skeleton** - Loading placeholders
- **Sonner/Toaster** - Toast notifications
- **Spinner** - Loading spinner animation
- **Tooltip** - Contextual information on hover

#### Overlays & Modals
- **ContextMenu** - Right-click context menus
- **Dialog** - Modal dialogs with portal support
- **Drawer** - Slide-out panels from any edge
- **DropdownMenu** - Trigger-based dropdown menus
- **HoverCard** - Rich content on hover
- **Popover** - Positioned floating content
- **Sheet** - Slide-over panels (mobile-friendly)

#### Data Display
- **Avatar** - User avatars with fallback
- **Calendar** - Date picker calendar
- **Carousel** - Content slider with navigation
- **Chart** - Recharts integration with theme support
- **Command** - Command palette (cmdk)
- **Item** - List items with icons, descriptions, shortcuts
- **Kbd** - Keyboard shortcut display
- **Table** - Data tables with sorting

#### Utilities
- **Toggle** - Pressable toggle button
- **ToggleGroup** - Exclusive/multiple selection toggle groups

### Typography (4)
- **Text** - Paragraph text with size, weight, color variants
- **Title** - Heading component (h1-h6) with consistent sizing
- **Code** - Inline code styling
- **Blockquote** - Quote blocks with styling

### Theming System

#### Themes
- **purple-dawn** - Elegant translucent surfaces with purple tint (default)
- **first-light** - Hand-drawn wireframe aesthetic with SVG filters

#### Color Mode
- **ColorModeInitializer** - FOUC prevention script
- **ColorModeToggle** - Light/dark/system toggle button
- **useColorMode** - Hook for programmatic color mode control

### Hooks
- **useMobile** - Responsive breakpoint detection

### Utilities
- **cn()** - Class name merging (clsx + tailwind-merge)

### Developer Experience
- 58 Storybook stories with interactive examples
- 57 LLM component documentation files + 5 system docs
- TSDoc comments with @example tags on all components
- 60 granular export paths for optimal tree-shaking
- TypeScript declarations for all exports
- `data-slot` attributes on all components for CSS targeting

### Technical Foundation
- Built on Base UI primitives for accessibility
- Tailwind CSS v4 with OKLCH color system
- CVA (class-variance-authority) for variant management
- React 19 compatible
- ESM-only distribution

---

## Pre-release History

Versions prior to 0.5.0 were internal development iterations. This changelog begins with the first production-ready release.
