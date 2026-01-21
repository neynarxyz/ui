# Resizable

Create resizable panel layouts with draggable handles for complex dashboard, editor, and split-view interfaces.

## Import

```tsx
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@neynar/ui/resizable"
```

## Anatomy

```tsx
<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize="50%">
    Content 1
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize="50%">
    Content 2
  </ResizablePanel>
</ResizablePanelGroup>
```

**Important:** Size values have different meanings based on type:
- **Numbers are pixels:** `defaultSize={300}` = 300px
- **Strings are percentages:** `defaultSize="25%"` or `defaultSize="25"` = 25%

## Components

| Component | Description |
|-----------|-------------|
| ResizablePanelGroup | Root container that manages layout orientation and panel resizing |
| ResizablePanel | Individual resizable panel with size constraints and collapse behavior |
| ResizableHandle | Draggable separator between panels with optional visible grip |

## Props

### ResizablePanelGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | "horizontal" \| "vertical" | "horizontal" | Layout direction for panels |
| id | string | - | Unique ID for localStorage persistence of panel sizes |
| defaultLayout | number[] | - | Initial panel sizes as percentages |
| onLayoutChange | (layout: Record\<string, number\>) => void | - | Called when panel sizes change |
| disabled | boolean | false | Disable all resizing |
| className | string | - | Additional CSS classes |

### ResizablePanel

All panels inherit props from react-resizable-panels Panel component.

**Size Value Formats:**
- **number** (e.g., `500`) → Pixels
- **string without unit** (e.g., `"25"`) → Percentage (0-100)
- **string with %** (e.g., `"25%"`) → Percentage
- **string with px** (e.g., `"300px"`) → Pixels
- **string with other units** (e.g., `"1rem"`, `"50vh"`) → CSS units

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Panel identifier (required for persistence) |
| defaultSize | number \| string | - | Initial size (number=pixels, string=percentage or CSS unit) |
| minSize | number \| string | 0 | Minimum size (number=pixels, string=percentage or CSS unit) |
| maxSize | number \| string | 100 | Maximum size (number=pixels, string=percentage or CSS unit) |
| collapsible | boolean | false | Allow panel to collapse below minSize |
| collapsedSize | number \| string | 0 | Size when collapsed |
| collapsed | boolean | - | Controlled collapsed state. Panel syncs to this value. |
| animated | boolean | false | Enable smooth CSS transition for collapse/expand. Drag resizing stays instant. |
| duration | number | 400 | Animation duration in milliseconds. Only applies when `animated` is true. |
| onResize | (size: { asPercentage: number; inPixels: number }) => void | - | Called when panel is resized |
| onCollapse | () => void | - | Called when panel collapses |
| onExpand | () => void | - | Called when panel expands |
| className | string | - | Additional CSS classes |

### ResizableHandle

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| withHandle | boolean | false | Display visible grip indicator |
| className | string | - | Additional CSS classes |

## Data Attributes

| Attribute | When Present | Applied To |
|-----------|--------------|------------|
| data-slot="resizable-panel-group" | Always | ResizablePanelGroup |
| data-slot="resizable-panel" | Always | ResizablePanel |
| data-slot="resizable-handle" | Always | ResizableHandle |
| aria-orientation | Inherits from parent group | All components |

## Examples

### Basic Horizontal Layout (Percentages)

```tsx
<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize="40%">
    <div className="p-4">Sidebar</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize="60%">
    <div className="p-4">Main Content</div>
  </ResizablePanel>
</ResizablePanelGroup>
```

### Fixed Pixel Sidebar

```tsx
<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={300} minSize={200} maxSize={500}>
    <div className="p-4">Fixed width sidebar (300px default)</div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel>
    <div className="p-4">Main content fills remaining space</div>
  </ResizablePanel>
</ResizablePanelGroup>
```

### Vertical Split with Handle

```tsx
<ResizablePanelGroup orientation="vertical">
  <ResizablePanel defaultSize="70%">
    <div className="p-4">Editor</div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize="30%">
    <div className="p-4">Terminal Output</div>
  </ResizablePanel>
</ResizablePanelGroup>
```

### Three Panels with Constraints

```tsx
<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize="25%" minSize="15%" maxSize="40%">
    <div className="p-4">Navigation</div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize="50%" minSize="30%">
    <div className="p-4">Content</div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize="25%" minSize="15%" maxSize="40%">
    <div className="p-4">Inspector</div>
  </ResizablePanel>
</ResizablePanelGroup>
```

### Nested Layouts (Editor + Terminal)

```tsx
<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={250} minSize={150}>
    <div className="p-4">File Explorer (250px)</div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel>
    <ResizablePanelGroup orientation="vertical">
      <ResizablePanel defaultSize="70%">
        <div className="p-4">Code Editor</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="30%" minSize="20%">
        <div className="p-4">Terminal</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>
```

### Persisted Layout

```tsx
function Dashboard() {
  return (
    <ResizablePanelGroup
      id="dashboard-layout"
      orientation="horizontal"
    >
      <ResizablePanel id="sidebar" defaultSize="25%">
        <div className="p-4">Sidebar</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel id="main" defaultSize="75%">
        <div className="p-4">Main Content</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

### Controlled with Callbacks

```tsx
function MonitoredPanels() {
  const [sizes, setSizes] = useState({ left: 30, right: 70 })

  return (
    <ResizablePanelGroup
      orientation="horizontal"
      onLayoutChange={(layout) => {
        setSizes({
          left: layout.left || 0,
          right: layout.right || 0
        })
      }}
    >
      <ResizablePanel id="left" defaultSize="30%">
        <div className="p-4">Left: {sizes.left.toFixed(1)}%</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel id="right">
        <div className="p-4">Right: {sizes.right.toFixed(1)}%</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

### Animated Collapse/Expand

Use `collapsed` prop for declarative control and `animated` for smooth transitions. Drag resizing remains instant (no animation lag).

**Customization:**
- `duration` prop controls speed (default 400ms)
- `--resizable-easing` CSS variable controls easing curve (default `cubic-bezier(0.16, 1, 0.3, 1)`)

```tsx
// Custom duration
<ResizablePanel animated duration={200} collapsed={isCollapsed} />

// Custom easing via Tailwind arbitrary property
<ResizablePanel
  className="[--resizable-easing:ease-out]"
  animated
  collapsed={isCollapsed}
/>
```

```tsx
import { useState } from "react"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@neynar/ui/resizable"
import { Button } from "@neynar/ui/button"

function CollapsibleSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="h-[400px]">
      <Button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "Expand" : "Collapse"} Sidebar
      </Button>
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel
          collapsed={isCollapsed}
          animated
          defaultSize="25%"
          minSize="15%"
          collapsible
          collapsedSize="0%"
        >
          <div className="p-4">Sidebar content</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <div className="p-4">Main content</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
```

## Keyboard

| Key | Action |
|-----|--------|
| Tab | Focus next handle |
| Shift + Tab | Focus previous handle |
| Arrow Keys | Resize panels (direction depends on orientation) |
| Enter | Expand collapsed panel |
| Home | Resize to minimum |
| End | Resize to maximum |

## Accessibility

- Resize handles are keyboard-navigable with proper focus states
- ARIA attributes automatically reflect orientation and state
- Supports keyboard resizing via arrow keys
- Focus ring visible on keyboard navigation

## Related

- [Collapsible](./collapsible.llm.md) - For simpler expand/collapse UI
- [Tabs](./tabs.llm.md) - Alternative to split views
- [Card](./card.llm.md) - Static panel container
