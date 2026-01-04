# Chart

Flexible chart container built on Recharts with theming, configuration, and accessibility support for all chart types.

## Import

```tsx
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@neynar/ui/chart"
```

## Anatomy

```tsx
<ChartContainer config={chartConfig}>
  <LineChart data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Line dataKey="value" />
  </LineChart>
</ChartContainer>
```

## Components

| Component | Description |
|-----------|-------------|
| ChartContainer | Root container providing responsive layout, theme context, and CSS variables |
| ChartTooltip | Re-export of Recharts Tooltip for positioning (use with ChartTooltipContent) |
| ChartTooltipContent | Custom tooltip content with series indicators and formatting |
| ChartLegend | Re-export of Recharts Legend for positioning (use with ChartLegendContent) |
| ChartLegendContent | Custom legend content with icons and colors |

## Props

### ChartContainer

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| config | ChartConfig | - | Chart configuration defining series labels, colors, and icons |
| children | ReactNode | - | Recharts chart component (LineChart, BarChart, AreaChart, etc.) |
| className | string | - | Additional classes for sizing (e.g., "h-[400px]") |
| id | string | - | Optional unique identifier for the chart |

### ChartConfig

The config object maps series keys to their display configuration:

```tsx
const config = {
  revenue: {
    label: "Revenue",
    color: "hsl(142 76% 36%)", // Single color
  },
  expenses: {
    label: "Expenses",
    theme: { // Theme-aware colors
      light: "hsl(0 84% 60%)",
      dark: "hsl(0 72% 50%)",
    },
    icon: TrendingDown, // Optional icon component
  },
} satisfies ChartConfig
```

Each series can have:
- `label`: Display name for tooltips and legends
- `color`: Single color for both themes, OR
- `theme`: Object with `light` and `dark` colors
- `icon`: Optional React component for legend

### ChartTooltipContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| indicator | "dot" \| "line" \| "dashed" | "dot" | Visual indicator style for series |
| hideLabel | boolean | false | Hide the tooltip label (x-axis value) |
| hideIndicator | boolean | false | Hide series color indicators |
| nameKey | string | - | Override key for series names |
| labelKey | string | - | Override key for tooltip label |
| formatter | function | - | Custom value formatter |
| labelFormatter | function | - | Custom label formatter |

### ChartLegendContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| hideIcon | boolean | false | Hide series icons, showing only color squares |
| nameKey | string | - | Override key for series names |
| verticalAlign | "top" \| "bottom" | "bottom" | Legend position |

## Data Attributes

| Attribute | Applied To | Description |
|-----------|------------|-------------|
| data-slot | ChartContainer | Always "chart" |
| data-chart | ChartContainer | Unique chart ID for CSS variable scoping |

## Chart Types

The container works with all Recharts chart types:

- **LineChart**: Trends over time
- **BarChart**: Comparing values (vertical or horizontal)
- **AreaChart**: Filled regions showing volume
- **PieChart**: Proportional data
- **RadialBarChart**: Circular progress or gauges

## Examples

### Basic Line Chart

```tsx
import { Line, LineChart, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", value: 2400 },
  { month: "Feb", value: 1398 },
  { month: "Mar", value: 9800 },
]

const config = {
  value: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

<ChartContainer config={config} className="h-[300px]">
  <LineChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Line dataKey="value" stroke="var(--color-value)" strokeWidth={2} />
  </LineChart>
</ChartContainer>
```

### Multi-Series with Legend

```tsx
import { Area, AreaChart, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", revenue: 12400, expenses: 8200 },
  { month: "Feb", revenue: 18200, expenses: 9100 },
]

const config = {
  revenue: { label: "Revenue", color: "hsl(142 76% 36%)" },
  expenses: { label: "Expenses", color: "hsl(0 84% 60%)" },
} satisfies ChartConfig

<ChartContainer config={config} className="h-[400px]">
  <AreaChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Area
      dataKey="revenue"
      fill="var(--color-revenue)"
      stroke="var(--color-revenue)"
      fillOpacity={0.6}
    />
    <Area
      dataKey="expenses"
      fill="var(--color-expenses)"
      stroke="var(--color-expenses)"
      fillOpacity={0.4}
    />
  </AreaChart>
</ChartContainer>
```

### Bar Chart with Custom Tooltip

```tsx
import { Bar, BarChart, XAxis, YAxis } from "recharts"

const config = {
  requests: { label: "API Requests", color: "var(--chart-1)" },
} satisfies ChartConfig

<ChartContainer config={config} className="h-[300px]">
  <BarChart data={apiData}>
    <XAxis dataKey="endpoint" />
    <YAxis />
    <ChartTooltip
      content={
        <ChartTooltipContent
          formatter={(value) => [value.toLocaleString(), "Requests"]}
        />
      }
    />
    <Bar dataKey="requests" fill="var(--color-requests)" radius={4} />
  </BarChart>
</ChartContainer>
```

### Theme-Aware Colors

```tsx
const config = {
  active: {
    label: "Active Users",
    theme: {
      light: "hsl(220 70% 50%)",
      dark: "hsl(220 70% 60%)",
    },
  },
} satisfies ChartConfig

<ChartContainer config={config}>
  <LineChart data={data}>
    {/* Color automatically switches with theme */}
    <Line dataKey="active" stroke="var(--color-active)" />
  </LineChart>
</ChartContainer>
```

### Tooltip Indicators

```tsx
// Dot indicator (default)
<ChartTooltip content={<ChartTooltipContent indicator="dot" />} />

// Line indicator
<ChartTooltip content={<ChartTooltipContent indicator="line" />} />

// Dashed indicator
<ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
```

## Color Variables

ChartContainer generates CSS variables for each config key:

```tsx
const config = {
  revenue: { color: "hsl(142 76% 36%)" },
}
// Generates: --color-revenue: hsl(142 76% 36%)
// Use in charts: var(--color-revenue)
```

Recharts built-in chart colors are also available:
- `var(--chart-1)` through `var(--chart-5)`: Pre-defined theme colors

## Accessibility

- Uses Recharts' `accessibilityLayer` prop for keyboard navigation
- Tooltips provide screen reader-friendly descriptions of data points
- Color indicators supplement with text labels in tooltips/legends
- CSS variables respect color mode preferences

## Best Practices

- Set explicit height via className (e.g., "h-[400px]") - default is aspect-video
- Use `satisfies ChartConfig` for type-safe configuration
- Reference colors with `var(--color-{key})` to match config
- Include `accessibilityLayer` prop on Recharts components
- Format large numbers in tooltips with `formatter` prop
- Use theme-aware colors for charts that will be viewed in both modes

## Related

- [Recharts Documentation](https://recharts.org/) - Full chart component reference
- Card - Container for chart sections with headers
- Tooltip - Related tooltip pattern for non-chart UI
