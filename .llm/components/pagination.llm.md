# Pagination

A composable pagination component for navigating multi-page data sets with semantic HTML and full keyboard accessibility.

## Import

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@neynar/ui/pagination"
```

## Anatomy

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">10</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## Components

| Component | Description |
|-----------|-------------|
| `Pagination` | Root navigation container with semantic `<nav>` element |
| `PaginationContent` | Flex list container for pagination items |
| `PaginationItem` | Wrapper for individual pagination elements |
| `PaginationLink` | Clickable page number link |
| `PaginationPrevious` | Previous page control with chevron + "Previous" label |
| `PaginationNext` | Next page control with chevron + "Next" label |
| `PaginationEllipsis` | Ellipsis indicator for skipped pages |

## Props

### Pagination

Extends `React.ComponentProps<"nav">`.

Root container with `role="navigation"` and `aria-label="pagination"`.

### PaginationContent

Extends `React.ComponentProps<"ul">`.

Renders as a flexbox list with gap spacing between items.

### PaginationItem

Extends `React.ComponentProps<"li">`.

Simple list item wrapper for pagination elements.

### PaginationLink

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isActive` | `boolean` | `false` | Highlights the current active page |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"icon"` | Button size variant |
| `href` | `string` | - | Link destination |

Plus all standard `<a>` element props.

**Notes:**
- Uses Button component with `render` prop for link semantics
- Active pages use `outline` variant, inactive use `ghost`
- Sets `aria-current="page"` when `isActive={true}`
- Renders with `data-active` attribute for custom styling

### PaginationPrevious

Extends `PaginationLink` props.

**Auto-behaviors:**
- Sets `aria-label="Go to previous page"`
- Uses `size="default"` by default
- Displays chevron icon + "Previous" text (text hidden on mobile via `hidden sm:block`)

### PaginationNext

Extends `PaginationLink` props.

**Auto-behaviors:**
- Sets `aria-label="Go to next page"`
- Uses `size="default"` by default
- Displays "Next" text (hidden on mobile) + chevron icon

### PaginationEllipsis

Extends `React.ComponentProps<"span">`.

**Auto-behaviors:**
- Sets `aria-hidden` to hide from screen readers
- Includes screen reader text "More pages"
- Displays horizontal ellipsis icon

## Data Attributes

All components include `data-slot` attributes for targeted styling:

| Attribute | Component |
|-----------|-----------|
| `data-slot="pagination"` | Pagination |
| `data-slot="pagination-content"` | PaginationContent |
| `data-slot="pagination-item"` | PaginationItem |
| `data-slot="pagination-link"` | PaginationLink |
| `data-slot="pagination-ellipsis"` | PaginationEllipsis |

PaginationLink also includes:
- `data-active="true"` when `isActive={true}`

## Examples

### Basic Pagination

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### With Ellipsis (Large Data Sets)

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">42</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### Controlled with React State

```tsx
function APILogsTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 42

  function handlePageClick(page: number) {
    setCurrentPage(page)
  }

  return (
    <div>
      {/* Your table content */}

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (currentPage > 1) handlePageClick(currentPage - 1)
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={currentPage === 1}
              onClick={(e) => {
                e.preventDefault()
                handlePageClick(1)
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={currentPage === 2}
              onClick={(e) => {
                e.preventDefault()
                handlePageClick(2)
              }}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handlePageClick(totalPages)
              }}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (currentPage < totalPages) handlePageClick(currentPage + 1)
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
```

### Middle Page State (Dual Ellipsis)

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">12</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>13</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">14</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">25</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### Minimal (Controls Only)

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## Accessibility

- Uses semantic `<nav>` element with `role="navigation"` and `aria-label="pagination"`
- Active page links include `aria-current="page"` for screen reader context
- Previous/Next controls have descriptive `aria-label` attributes
- Ellipsis is hidden from screen readers via `aria-hidden` but includes visually hidden text "More pages"
- All links are keyboard navigable via Tab key
- Mobile-responsive: "Previous"/"Next" labels hidden on small screens

## Related

- [Button](./button.llm.md) - Used internally for pagination links
