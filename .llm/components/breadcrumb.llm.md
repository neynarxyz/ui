# Breadcrumb

Semantic navigation component displaying hierarchical page location with accessible breadcrumb trail.

## Import

```tsx
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@neynar/ui/breadcrumb"
```

## Anatomy

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Settings</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Components

| Component | Description |
|-----------|-------------|
| Breadcrumb | Root `<nav>` container with `aria-label="breadcrumb"` |
| BreadcrumbList | Ordered list (`<ol>`) with responsive flex layout |
| BreadcrumbItem | List item (`<li>`) wrapper for links/pages |
| BreadcrumbLink | Interactive link (`<a>`) for navigable pages, supports custom `render` prop |
| BreadcrumbPage | Current page indicator (`<span>`) with `aria-current="page"` |
| BreadcrumbSeparator | Visual separator (`<li>`) between items, defaults to chevron icon |
| BreadcrumbEllipsis | Collapsed section indicator (`<span>`) for long paths |

## Props

### Breadcrumb

Standard `<nav>` HTML attributes. Automatically includes `aria-label="breadcrumb"`.

### BreadcrumbList

Standard `<ol>` HTML attributes. Automatically styled with responsive spacing (1.5 gap on mobile, 2.5 on desktop).

### BreadcrumbItem

Standard `<li>` HTML attributes. Styled as inline-flex container.

### BreadcrumbLink

Extends standard `<a>` HTML attributes with Base UI's `render` prop support.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| render | ReactElement | - | Custom element to render as (e.g., Next.js Link) |
| href | string | - | Link destination |

**Using render prop:**
```tsx
import { Link } from "next/link"

<BreadcrumbLink render={<Link href="/dashboard" />}>
  Dashboard
</BreadcrumbLink>
```

### BreadcrumbPage

Standard `<span>` HTML attributes. Automatically includes `aria-current="page"` and `aria-disabled="true"`.

### BreadcrumbSeparator

Standard `<li>` HTML attributes with custom separator support.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | ChevronRightIcon | Custom separator content (icon or text) |

### BreadcrumbEllipsis

Standard `<span>` HTML attributes. Renders MoreHorizontalIcon with screen reader text "More".

## Data Attributes

All components include `data-slot` attributes for styling:

| Component | Attribute |
|-----------|-----------|
| Breadcrumb | `data-slot="breadcrumb"` |
| BreadcrumbList | `data-slot="breadcrumb-list"` |
| BreadcrumbItem | `data-slot="breadcrumb-item"` |
| BreadcrumbLink | `data-slot="breadcrumb-link"` |
| BreadcrumbPage | `data-slot="breadcrumb-page"` |
| BreadcrumbSeparator | `data-slot="breadcrumb-separator"` |
| BreadcrumbEllipsis | `data-slot="breadcrumb-ellipsis"` |

## Examples

### Basic Navigation

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Settings</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### With Icons

```tsx
import { HomeIcon, SettingsIcon } from "lucide-react"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" aria-label="Home">
        <HomeIcon className="size-4" />
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>
        <SettingsIcon className="mr-2 size-4" />
        Settings
      </BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Custom Separator

```tsx
import { SlashIcon } from "lucide-react"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <SlashIcon />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>Dashboard</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Truncated Long Paths

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>API Keys</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### With Next.js Link

```tsx
import { Link } from "next/link"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink render={<Link href="/" />}>
        Home
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink render={<Link href="/dashboard" />}>
        Dashboard
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Settings</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Accessibility

- Root component uses semantic `<nav>` with `aria-label="breadcrumb"`
- Uses ordered list (`<ol>`) for proper navigation structure
- Current page has `aria-current="page"` and `aria-disabled="true"`
- Separators marked with `role="presentation"` and `aria-hidden="true"`
- Ellipsis includes screen reader text "More"
- Links have hover state with color transition for visual feedback
- Automatically wraps on small screens for responsive behavior

## Related

- [Link](/docs/components/link) - For custom link rendering
- [Navigation Menu](/docs/components/navigation-menu) - For primary navigation
