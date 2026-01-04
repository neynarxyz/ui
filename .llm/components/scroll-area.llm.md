# ScrollArea Component

## Overview
The ScrollArea component provides a customizable scrollable container with styled scrollbars, built on Base UI's ScrollArea primitive. It offers automatic overflow detection, custom scrollbar styling, and support for both vertical and horizontal scrolling.

## Component Exports

### ScrollArea
Main scrollable container component with custom-styled scrollbars.

**Props**: `ScrollAreaProps` (extends `ScrollAreaPrimitive.Root.Props`)
- `className?: string` - Additional CSS classes to apply
- `children: React.ReactNode` - Content to be rendered within the scrollable area
- All Base UI ScrollArea.Root props

**Key Features**:
- Automatic overflow detection
- Custom-styled scrollbars with border-based color
- Focus ring on keyboard navigation
- Inherits border radius from parent styling
- Smooth transitions for focus states

### ScrollBar
Custom scrollbar component that can be used independently or within ScrollArea.

**Props**: `ScrollBarProps` (extends `ScrollAreaPrimitive.Scrollbar.Props`)
- `className?: string` - Additional CSS classes to apply
- `orientation?: "vertical" | "horizontal"` - Scrollbar orientation (default: "vertical")
- All Base UI ScrollArea.Scrollbar props

**Key Features**:
- Draggable thumb for scroll control
- Adaptive sizing based on orientation (2.5 units height/width)
- Touch-optimized for mobile devices
- Rounded scrollbar thumb

## Usage Examples

### Basic Vertical Scrolling
```tsx
import { ScrollArea } from "@neynar/ui/scroll-area"

function ContentList() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border p-4">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id}>{item.content}</div>
        ))}
      </div>
    </ScrollArea>
  )
}
```

### Horizontal Scrolling
```tsx
import { ScrollArea } from "@neynar/ui/scroll-area"

function HorizontalGallery() {
  return (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex gap-4 p-4">
        {images.map((img) => (
          <img key={img.id} src={img.url} alt={img.alt} className="h-40 w-auto" />
        ))}
      </div>
    </ScrollArea>
  )
}
```

### Chat-Style Scrolling
```tsx
import { ScrollArea } from "@neynar/ui/scroll-area"

function ChatMessages() {
  return (
    <ScrollArea className="h-[600px] rounded-lg border p-4">
      <div className="flex flex-col gap-2">
        {messages.map((message) => (
          <div key={message.id} className="rounded-lg bg-muted p-3">
            <p className="text-sm font-medium">{message.author}</p>
            <p className="text-sm">{message.content}</p>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
```

### Sidebar Navigation
```tsx
import { ScrollArea } from "@neynar/ui/scroll-area"

function Sidebar() {
  return (
    <aside className="w-64 border-r">
      <ScrollArea className="h-screen p-4">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 hover:bg-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  )
}
```

### Custom Scrollbar Configuration
```tsx
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area"
import { ScrollBar } from "@neynar/ui/scroll-area"

function CustomScrollArea({ children }: { children: React.ReactNode }) {
  return (
    <ScrollAreaPrimitive.Root className="relative h-96 rounded-md border">
      <ScrollAreaPrimitive.Viewport className="size-full p-4">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation="horizontal" className="bg-muted/50" />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}
```

## Component Structure

```
ScrollArea (Root container)
├── Viewport (content wrapper with focus ring)
│   └── {children}
├── ScrollBar (vertical by default)
│   └── Thumb (draggable scrollbar handle)
└── Corner (intersection of scrollbars)
```

## Styling and Theming

### Default Styles
- **Root**: `relative` positioning for scrollbar placement
- **Viewport**: Full size with inherited border radius, focus ring on keyboard navigation
- **ScrollBar**: 2.5 units width/height depending on orientation, touch-optimized
- **Thumb**: Rounded, uses `border` color from theme

### Customization Points
- Apply height/width constraints via `className` on ScrollArea
- Customize scrollbar appearance via `className` on ScrollBar
- Border radius is inherited from parent container
- Colors follow the theme's `border` color token

### Data Attributes
- `data-slot="scroll-area"` - Root container
- `data-slot="scroll-area-viewport"` - Content viewport
- `data-slot="scroll-area-scrollbar"` - Scrollbar container
- `data-slot="scroll-area-thumb"` - Scrollbar thumb
- `data-orientation="vertical|horizontal"` - Scrollbar orientation state

## Accessibility

### Keyboard Navigation
- **Arrow Keys**: Scroll viewport when focused
- **Page Up/Down**: Scroll by page
- **Home/End**: Scroll to start/end
- **Tab**: Focus scrollbar (visible focus ring)

### Screen Reader Support
- Scrollable regions are properly announced
- Scrollbar controls are keyboard accessible
- Focus management follows standard patterns

### Touch Gestures
- Scrollbar is touch-optimized with `touch-none` for precise dragging
- Natural swipe scrolling on viewport

## Common Patterns

### Fixed Height Content
```tsx
<ScrollArea className="h-96 rounded-md border">
  {/* Content that exceeds 384px height will scroll */}
</ScrollArea>
```

### Full Viewport Height
```tsx
<ScrollArea className="h-screen">
  {/* Scrolls within viewport height */}
</ScrollArea>
```

### Responsive Heights
```tsx
<ScrollArea className="h-[50vh] md:h-[70vh] rounded-md border">
  {/* Adapts to viewport size */}
</ScrollArea>
```

### Preventing Text Selection During Scroll
The scrollbar uses `select-none` to prevent text selection while dragging, but content remains selectable.

## Base UI Integration

This component wraps Base UI's ScrollArea primitive:
- **Root**: Container with scroll detection
- **Viewport**: Scrollable content area
- **Scrollbar**: Custom scrollbar UI
- **Thumb**: Draggable scroll indicator
- **Corner**: Intersection element for dual scrollbars

Base UI handles:
- Overflow detection and scrollbar visibility
- Scroll position synchronization
- Touch and mouse interactions
- Accessibility features

## Implementation Notes

### Why Not Native Scrollbars?
- Consistent cross-browser appearance
- Better theming and customization
- Touch-optimized interactions
- Accessible keyboard controls

### Performance Considerations
- Viewport uses hardware-accelerated transitions
- Scrollbar only renders when content overflows
- Efficient re-renders with Base UI primitives

### Browser Compatibility
- Modern browsers with CSS Grid and Flexbox support
- Touch events for mobile devices
- Fallback to native scrolling if JavaScript disabled

## Comparison with Similar Components

### ScrollArea vs. Native Overflow
- **ScrollArea**: Custom styled scrollbars, consistent appearance
- **Native**: Browser-dependent styling, system scrollbars

### When to Use ScrollArea
- Consistent design across browsers and platforms
- Custom scrollbar styling requirements
- Need for touch-optimized scrolling
- Keyboard navigation requirements

### When to Use Native Scrolling
- Simple content with minimal styling needs
- Performance-critical rendering (native is slightly faster)
- Desire for OS-native scrollbar appearance

## Migration from Radix UI

If migrating from Radix UI ScrollArea:

```tsx
// Before (Radix UI)
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

<ScrollAreaPrimitive.Root>
  <ScrollAreaPrimitive.Viewport>
    {children}
  </ScrollAreaPrimitive.Viewport>
  <ScrollAreaPrimitive.Scrollbar orientation="vertical">
    <ScrollAreaPrimitive.Thumb />
  </ScrollAreaPrimitive.Scrollbar>
</ScrollAreaPrimitive.Root>

// After (Base UI)
import { ScrollArea } from "@neynar/ui/scroll-area"

<ScrollArea className="h-96">
  {children}
</ScrollArea>
```

Key differences:
- Base UI uses simpler composition
- Automatic scrollbar rendering
- Focus ring styling built-in
- Data attributes follow `data-slot` pattern
