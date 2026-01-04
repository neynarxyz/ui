# NavigationMenu

Horizontal navigation menu with mega menu support for main site navigation and dashboard headers.

## Import

```tsx
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@neynar/ui/navigation-menu"
```

## Anatomy

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem value="item-1">
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        {/* Mega menu content */}
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem value="item-2">
      <NavigationMenuLink href="/pricing">Pricing</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## Components

| Component | Description |
|-----------|-------------|
| NavigationMenu | Root container, manages active state and keyboard navigation |
| NavigationMenuList | Container for navigation items, renders as horizontal list |
| NavigationMenuItem | Individual item, can contain Link or Trigger + Content |
| NavigationMenuTrigger | Button that opens content panel, includes chevron icon |
| NavigationMenuContent | Mega menu content panel with smooth transitions |
| NavigationMenuLink | Clickable link for direct navigation or panel content |
| NavigationMenuIndicator | Optional visual indicator (rarely used) |

## Props

### NavigationMenu

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Controlled active item value |
| defaultValue | string | - | Default active item (uncontrolled) |
| onValueChange | (value: string) => void | - | Called when active item changes |
| orientation | "horizontal" \| "vertical" | "horizontal" | Menu orientation |
| className | string | - | Additional CSS classes |

### NavigationMenuItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Unique identifier for controlled state |
| className | string | - | Additional CSS classes |

### NavigationMenuTrigger

Automatically includes a rotating chevron icon that animates on open/close.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |
| render | ReactElement | - | Custom render element |

### NavigationMenuContent

Automatically renders in a positioned portal with backdrop and smooth transitions.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |

### NavigationMenuLink

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| href | string | - | Link destination |
| active | boolean | false | Highlights link as active/current page |
| closeOnClick | boolean | true | Whether to close menu on click |
| className | string | - | Additional CSS classes |

### NavigationMenuList

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |

## Data Attributes

### NavigationMenuTrigger

| Attribute | When Present |
|-----------|--------------|
| data-open | Content panel is open |
| data-popup-open | Content panel is open |
| data-pressed | Trigger is pressed |

### NavigationMenuContent

| Attribute | When Present |
|-----------|--------------|
| data-open | Content is visible |
| data-closed | Content is hidden |
| data-starting-style | During opening animation |
| data-ending-style | During closing animation |

### NavigationMenuLink

| Attribute | When Present |
|-----------|--------------|
| data-active | Link is active/current page |

## Examples

### Basic Link Navigation

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem value="home">
      <NavigationMenuLink href="/">Home</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem value="about">
      <NavigationMenuLink href="/about">About</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem value="contact">
      <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### Mega Menu with Product Showcase

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem value="products">
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[600px] p-4">
          <div className="mb-4">
            <h4 className="font-semibold">Our Products</h4>
            <p className="text-muted-foreground text-sm">
              Everything you need to build on Farcaster
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <NavigationMenuLink href="/api" className="block rounded-md">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary rounded-md p-2">
                  <CodeIcon className="size-5" />
                </div>
                <div>
                  <div className="font-medium">Farcaster API</div>
                  <div className="text-muted-foreground text-xs">
                    REST APIs for casts, users, and feeds
                  </div>
                </div>
              </div>
            </NavigationMenuLink>
            {/* More product cards */}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### Grouped Content Panels

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem value="resources">
      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[400px] grid-cols-2 gap-4 p-4">
          <div className="space-y-3">
            <h4 className="text-muted-foreground text-xs font-semibold uppercase">
              Documentation
            </h4>
            <div className="space-y-2">
              <NavigationMenuLink href="/docs" className="block">
                Getting Started
              </NavigationMenuLink>
              <NavigationMenuLink href="/api-reference" className="block">
                API Reference
              </NavigationMenuLink>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-muted-foreground text-xs font-semibold uppercase">
              Community
            </h4>
            <div className="space-y-2">
              <NavigationMenuLink href="/discord" className="block">
                Discord
              </NavigationMenuLink>
              <NavigationMenuLink href="/github" className="block">
                GitHub
              </NavigationMenuLink>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### With Icons

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem value="home">
      <NavigationMenuLink href="/" className="flex items-center gap-2">
        <HomeIcon className="size-4" />
        Home
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem value="apps">
      <NavigationMenuTrigger>
        <LayoutDashboardIcon className="mr-2 size-4" />
        Apps
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[280px] space-y-2 p-4">
          <NavigationMenuLink href="/my-apps" className="flex items-center gap-2">
            <RocketIcon className="size-4" />
            My Apps
          </NavigationMenuLink>
          <NavigationMenuLink href="/templates" className="flex items-center gap-2">
            <PackageIcon className="size-4" />
            Templates
          </NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### Active State

```tsx
function Nav({ currentPath }: { currentPath: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem value="dashboard">
          <NavigationMenuLink
            href="/dashboard"
            active={currentPath === "/dashboard"}
          >
            Dashboard
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem value="analytics">
          <NavigationMenuLink
            href="/analytics"
            active={currentPath === "/analytics"}
          >
            Analytics
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
```

## Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Move focus to next item |
| Shift + Tab | Move focus to previous item |
| Arrow Right | Focus next item (horizontal) |
| Arrow Left | Focus previous item (horizontal) |
| Enter / Space | Activate trigger or link |
| Escape | Close open content panel |
| Home | Focus first item |
| End | Focus last item |

## Accessibility

- Implements ARIA navigation menu pattern with proper roles and states
- Keyboard navigation follows WAI-ARIA authoring practices
- Focus management automatically moves between items and panels
- Screen readers announce active states and panel open/close

## Styling Notes

- Content panel width is controlled by content wrapper (e.g., `w-[600px]`)
- Use grid layouts for multi-column mega menus
- Icons automatically size to `size-4` when not explicitly sized
- Active links receive muted background by default
- Smooth transitions use cubic-bezier easing for polish

## Related

- [Tabs](/components/tabs) - For tabbed content switching
- [DropdownMenu](/components/dropdown-menu) - For action menus
- [Command](/components/command) - For command palettes
- [Breadcrumb](/components/breadcrumb) - For hierarchical navigation
