# Table

Compound component for displaying tabular data with semantic HTML table structure and automatic responsive scrolling.

## Import

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@neynar/ui/table"
```

## Anatomy

```tsx
<Table>
  <TableCaption>Optional description</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Column 1</TableHead>
      <TableHead>Column 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Data 1</TableCell>
      <TableCell>Data 2</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Summary</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

## Components

| Component | Description |
|-----------|-------------|
| Table | Root container with automatic horizontal scroll |
| TableHeader | Header section containing column titles |
| TableBody | Body section containing data rows |
| TableFooter | Footer section for summary rows (totals, etc.) |
| TableRow | Individual row within header, body, or footer |
| TableHead | Header cell for column titles |
| TableCell | Data cell for row content |
| TableCaption | Accessible description rendered below table |

## Props

All components extend standard HTML table element props (`React.ComponentProps<"table">`, `React.ComponentProps<"thead">`, etc.).

### Table

Automatically wraps content in a responsive scroll container.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional classes for the table element |
| ...props | ComponentProps<"table"> | - | Standard table element props |

### TableHeader

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional classes for thead element |
| ...props | ComponentProps<"thead"> | - | Standard thead element props |

### TableBody

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional classes for tbody element |
| ...props | ComponentProps<"tbody"> | - | Standard tbody element props |

### TableFooter

Styled with muted background for visual distinction.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional classes for tfoot element |
| ...props | ComponentProps<"tfoot"> | - | Standard tfoot element props |

### TableRow

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data-state | "selected" | - | Apply selected styling to row |
| className | string | - | Additional classes for tr element |
| ...props | ComponentProps<"tr"> | - | Standard tr element props |

### TableHead

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional classes for th element |
| ...props | ComponentProps<"th"> | - | Standard th element props (scope, etc.) |

### TableCell

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| colSpan | number | - | Number of columns to span |
| className | string | - | Additional classes for td element |
| ...props | ComponentProps<"td"> | - | Standard td element props |

### TableCaption

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional classes for caption element |
| ...props | ComponentProps<"caption"> | - | Standard caption element props |

## Data Attributes

| Attribute | Element | When Present |
|-----------|---------|--------------|
| data-state="selected" | TableRow | Row is visually highlighted as selected |
| data-slot | All | Identifies component part for styling ("table", "table-header", etc.) |

## Examples

### Basic Table

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV002</TableCell>
      <TableCell>Pending</TableCell>
      <TableCell className="text-right">$150.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">$400.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

### With Status Badges

```tsx
import { Badge } from "@neynar/ui/badge"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Service</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Uptime</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">API Gateway</TableCell>
      <TableCell>
        <Badge variant="secondary">
          <CheckCircle2Icon className="size-3" />
          Operational
        </Badge>
      </TableCell>
      <TableCell>99.99%</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Webhooks</TableCell>
      <TableCell>
        <Badge variant="destructive">
          <XCircleIcon className="size-3" />
          Offline
        </Badge>
      </TableCell>
      <TableCell>85.20%</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### With Action Buttons

```tsx
import { Button } from "@neynar/ui/button"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>API Key</TableHead>
      <TableHead>Environment</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-mono text-xs">neynar_sk_***_8f3d</TableCell>
      <TableCell>
        <Badge variant="default">Production</Badge>
      </TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          <Button variant="ghost" size="icon-sm">
            <ExternalLinkIcon className="size-4" />
          </Button>
          <Button variant="ghost" size="icon-sm">
            <MoreHorizontalIcon className="size-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Selectable Rows

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Alice Johnson</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
    <TableRow data-state="selected">
      <TableCell className="font-medium">Bob Smith</TableCell>
      <TableCell>Developer</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Carol White</TableCell>
      <TableCell>Designer</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### With Caption

```tsx
<Table>
  <TableCaption>A list of your recent transactions</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Transaction</TableHead>
      <TableHead>Date</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Purchase</TableCell>
      <TableCell>2025-12-29</TableCell>
      <TableCell className="text-right">$99.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Styling

### Responsive Scrolling

The Table component automatically provides horizontal scrolling for tables that exceed viewport width. No additional configuration needed.

### Compact Tables

Reduce spacing for dense data:

```tsx
<Table className="text-xs">
  <TableHeader>
    <TableRow>
      <TableHead className="h-8 px-2">ID</TableHead>
      <TableHead className="h-8 px-2">Event</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="p-1 px-2 font-mono">001</TableCell>
      <TableCell className="p-1 px-2">cast.created</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Alignment

Use Tailwind utility classes for text alignment:

```tsx
<TableHead className="text-right">Amount</TableHead>
<TableCell className="text-center">Status</TableCell>
```

## Accessibility

- Semantic HTML table structure (`<table>`, `<thead>`, `<tbody>`, `<tfoot>`)
- TableCaption provides accessible description for screen readers
- TableHead uses `<th>` elements with implicit scope
- Proper heading hierarchy maintained
- All standard table ARIA attributes supported via props

## Related

- [Badge](/components/badge) - Status indicators within table cells
- [Button](/components/button) - Action buttons for row operations
- [Checkbox](/components/checkbox) - Selectable rows
