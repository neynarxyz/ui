# Sidebar

Comprehensive collapsible sidebar system with responsive behavior, keyboard shortcuts, and state persistence.

## Import

```tsx
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarGroupAction,
  SidebarSeparator,
  SidebarInput,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarRail,
  useSidebar,
} from "@neynar/ui/sidebar"
```

## Anatomy

```tsx
<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>Header Content</SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>

    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Section</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Item</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>

    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>Footer Content</SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>

    <SidebarRail />
  </Sidebar>

  <SidebarInset>
    <header>
      <SidebarTrigger />
      <h1>Page Title</h1>
    </header>
    <main>Main content</main>
  </SidebarInset>
</SidebarProvider>
```

## Components

| Component | Description |
|-----------|-------------|
| SidebarProvider | Root provider managing state, keyboard shortcuts, persistence |
| Sidebar | Main sidebar container with responsive behavior |
| SidebarTrigger | Toggle button (hamburger icon) |
| SidebarInset | Main content area that adjusts to sidebar state |
| SidebarContent | Scrollable content area containing groups |
| SidebarHeader | Top section for branding/app switcher |
| SidebarFooter | Bottom section for user profile/settings |
| SidebarMenu | Menu list container |
| SidebarMenuItem | Menu item wrapper |
| SidebarMenuButton | Clickable menu button with variants |
| SidebarMenuSub | Nested submenu list |
| SidebarMenuSubButton | Submenu item button |
| SidebarMenuSubItem | Submenu item wrapper |
| SidebarGroup | Section container with optional label |
| SidebarGroupLabel | Section heading |
| SidebarGroupContent | Section content wrapper |
| SidebarGroupAction | Action button in group header |
| SidebarSeparator | Horizontal divider |
| SidebarInput | Search/filter input |
| SidebarMenuAction | Secondary action on menu items |
| SidebarMenuBadge | Notification badge on menu items |
| SidebarMenuSkeleton | Loading skeleton |
| SidebarRail | Drag-to-resize rail element |
| useSidebar | Hook to access sidebar context |

## Props

### SidebarProvider

Root wrapper managing all sidebar state and behavior.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultOpen | boolean | true | Initial open state on desktop |
| open | boolean | - | Controlled open state |
| onOpenChange | (open: boolean) => void | - | State change callback (persists to cookie) |

**Auto-behaviors:**
- Keyboard shortcut: Cmd/Ctrl+B toggles sidebar
- Mobile detection: Renders Sheet on mobile
- Cookie persistence: Saves state as `sidebar_state`
- 7-day cookie expiration

### Sidebar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | "left" \| "right" | "left" | Which side to display |
| variant | "sidebar" \| "floating" \| "inset" | "sidebar" | Visual variant |
| collapsible | "offcanvas" \| "icon" \| "none" | "offcanvas" | Collapse behavior |

**Variants:**
- `sidebar`: Standard edge-to-edge sidebar
- `floating`: Sidebar with padding and rounded corners
- `inset`: Sidebar with inset content area

**Collapsible modes:**
- `offcanvas`: Slides completely off screen
- `icon`: Collapses to icon-only mode
- `none`: Always visible, non-collapsible

### SidebarMenuButton

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isActive | boolean | false | Mark as active/current page |
| variant | "default" \| "outline" | "default" | Button variant |
| size | "default" \| "sm" \| "lg" | "default" | Button size |
| tooltip | string \| TooltipProps | - | Tooltip shown when collapsed |
| render | ReactElement | - | Custom element to render as |

### SidebarMenuAction

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| showOnHover | boolean | false | Only show on hover/focus |
| render | ReactElement | - | Custom element to render as |

### SidebarMenuSkeleton

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| showIcon | boolean | false | Show icon skeleton |

**Auto-behaviors:**
- Randomizes width between 50-90% for realistic loading state

### SidebarMenuSubButton

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | "sm" \| "md" | "md" | Button size |
| isActive | boolean | false | Mark as active/current page |
| render | ReactElement | - | Custom element to render as |

## Render Prop Pattern

Components with `render` prop support custom elements:

```tsx
// Render as link
<SidebarMenuButton render={<a href="/dashboard" />}>
  Dashboard
</SidebarMenuButton>

// Render as Next.js Link
<SidebarMenuButton render={<Link href="/settings" />}>
  Settings
</SidebarMenuButton>

// Render as custom component
<SidebarMenuSubButton render={<NavLink to="/docs" />}>
  Documentation
</SidebarMenuSubButton>
```

## Data Attributes

| Attribute | When Present | Applied To |
|-----------|--------------|------------|
| data-state | "expanded" \| "collapsed" | Sidebar container |
| data-collapsible | "offcanvas" \| "icon" | Sidebar when collapsed |
| data-variant | "sidebar" \| "floating" \| "inset" | Sidebar container |
| data-side | "left" \| "right" | Sidebar container |
| data-active | When isActive=true | SidebarMenuButton |
| data-open | When tooltip open | SidebarMenuButton |
| data-mobile | "true" | Mobile sidebar (Sheet) |

## Examples

### Basic Sidebar

```tsx
import { SidebarProvider, Sidebar, SidebarContent, SidebarInset, SidebarTrigger } from "@neynar/ui/sidebar"
import { HomeIcon } from "lucide-react"

function App() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <HomeIcon className="size-4" />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 items-center gap-4 border-b px-6">
          <SidebarTrigger />
          <h1>Dashboard</h1>
        </header>
        <main className="p-6">Content</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
```

### With Header and Footer

```tsx
<Sidebar>
  <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton className="h-12">
          <div className="bg-primary/10 flex size-8 items-center justify-center rounded-lg">
            <LayoutDashboardIcon className="size-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Neynar</span>
            <span className="text-muted-foreground text-xs">Developer Portal</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>

  <SidebarContent>
    {/* Menu groups */}
  </SidebarContent>

  <SidebarFooter>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton className="h-12">
          <Avatar className="size-8">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">John Developer</span>
            <span className="text-muted-foreground text-xs">john@example.com</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarFooter>
</Sidebar>
```

### Grouped Navigation

```tsx
<SidebarContent>
  <SidebarGroup>
    <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton isActive>
            <HomeIcon className="size-4" />
            <span>Overview</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <BarChartIcon className="size-4" />
            <span>Analytics</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>

  <SidebarSeparator />

  <SidebarGroup>
    <SidebarGroupLabel>Settings</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <SettingsIcon className="size-4" />
            <span>General</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</SidebarContent>
```

### With Nested Submenus

```tsx
<SidebarMenu>
  <SidebarMenuItem>
    <SidebarMenuButton>
      <BookOpenIcon className="size-4" />
      <span>Documentation</span>
    </SidebarMenuButton>
    <SidebarMenuSub>
      <SidebarMenuSubItem>
        <SidebarMenuSubButton href="#intro">
          Introduction
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
      <SidebarMenuSubItem>
        <SidebarMenuSubButton href="#install" isActive>
          Installation
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
      <SidebarMenuSubItem>
        <SidebarMenuSubButton href="#quickstart">
          Quick Start
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    </SidebarMenuSub>
  </SidebarMenuItem>
</SidebarMenu>
```

### With Badges and Actions

```tsx
<SidebarMenu>
  <SidebarMenuItem>
    <SidebarMenuButton>
      <MessageSquareIcon className="size-4" />
      <span>Messages</span>
      <Badge className="ml-auto">5</Badge>
    </SidebarMenuButton>
  </SidebarMenuItem>

  <SidebarMenuItem>
    <SidebarMenuButton>
      <KeyIcon className="size-4" />
      <span>API Keys</span>
    </SidebarMenuButton>
    <SidebarMenuAction showOnHover>
      <PlusIcon className="size-4" />
    </SidebarMenuAction>
  </SidebarMenuItem>
</SidebarMenu>
```

### Controlled State

```tsx
function App() {
  const [open, setOpen] = useState(true)

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <Sidebar>
        {/* sidebar content */}
      </Sidebar>

      <SidebarInset>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"} Sidebar
        </button>
      </SidebarInset>
    </SidebarProvider>
  )
}
```

### With Collapsible Groups

```tsx
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@neynar/ui/collapsible"

<SidebarGroup>
  <Collapsible defaultOpen>
    <SidebarGroupLabel>
      <CollapsibleTrigger className="flex w-full items-center">
        <BookOpenIcon className="mr-2 size-4" />
        Documentation
        <ChevronDownIcon className="ml-auto size-4 transition-transform group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
    </SidebarGroupLabel>
    <CollapsibleContent>
      <SidebarGroupContent>
        <SidebarMenuSub>
          {/* submenu items */}
        </SidebarMenuSub>
      </SidebarGroupContent>
    </CollapsibleContent>
  </Collapsible>
</SidebarGroup>
```

### Loading State

```tsx
<SidebarMenu>
  <SidebarMenuItem>
    <SidebarMenuSkeleton showIcon />
  </SidebarMenuItem>
  <SidebarMenuItem>
    <SidebarMenuSkeleton showIcon />
  </SidebarMenuItem>
  <SidebarMenuItem>
    <SidebarMenuSkeleton />
  </SidebarMenuItem>
</SidebarMenu>
```

### With Search Input

```tsx
<SidebarHeader>
  <SidebarInput
    type="search"
    placeholder="Search..."
    onChange={(e) => handleSearch(e.target.value)}
  />
</SidebarHeader>
```

### Using useSidebar Hook

```tsx
import { useSidebar } from "@neynar/ui/sidebar"

function CustomComponent() {
  const { state, open, toggleSidebar, isMobile } = useSidebar()

  return (
    <div>
      <p>Sidebar is {state}</p>
      <p>Mobile: {isMobile ? "Yes" : "No"}</p>
      <button onClick={toggleSidebar}>Toggle</button>
    </div>
  )
}
```

## Keyboard

| Key | Action |
|-----|--------|
| Cmd/Ctrl+B | Toggle sidebar open/closed |
| Escape | Close sidebar (mobile only) |
| Tab | Navigate between menu items |

## Accessibility

- Full keyboard navigation support with Tab/Shift+Tab
- Screen reader labels on SidebarTrigger and SidebarRail
- ARIA attributes managed automatically via data-attributes
- Focus management when toggling sidebar state
- Semantic HTML structure (nav, ul, li, button elements)
- Mobile sidebar uses Sheet with proper dialog semantics

## CSS Variables

| Variable | Description |
|----------|-------------|
| --sidebar-width | Desktop sidebar width (16rem) |
| --sidebar-width-mobile | Mobile sidebar width (18rem) |
| --sidebar-width-icon | Icon-only mode width (3rem) |

## Styling

Use data attributes for conditional styling:

```tsx
// Style based on sidebar state
className="hidden md:block group-data-[state=collapsed]:md:hidden"

// Style based on collapse mode
className="group-data-[collapsible=icon]:hidden"

// Style based on variant
className="group-data-[variant=floating]:rounded-lg"
```

## Related

- [Sheet](/components/sheet) - Used for mobile sidebar
- [Collapsible](/components/collapsible) - For collapsible groups
- [Button](/components/button) - SidebarMenuButton inherits from Button
- [Tooltip](/components/tooltip) - For collapsed state tooltips
- [Separator](/components/separator) - SidebarSeparator
