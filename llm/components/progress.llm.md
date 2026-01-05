# Progress

Progress bar for displaying task completion, loading states, and quota usage.

## Import

```tsx
import {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from "@neynar/ui/progress"
```

## Anatomy

```tsx
<Progress value={65}>
  <ProgressLabel>Loading</ProgressLabel>
  <ProgressValue />
  <ProgressTrack>
    <ProgressIndicator />
  </ProgressTrack>
</Progress>
```

## Components

| Component | Description |
|-----------|-------------|
| Progress | Root container managing progress state and rendering |
| ProgressLabel | Text label describing the task |
| ProgressValue | Formatted percentage display (auto-positioned right) |
| ProgressTrack | Container for the progress bar track |
| ProgressIndicator | Visual bar showing completion (auto-width based on value) |

## Props

### Progress

Root component providing progress state context to all children.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | number \| null | - | Progress value 0-100, or null for indeterminate |
| min | number | 0 | Minimum value |
| max | number | 100 | Maximum value |
| aria-valuetext | string | - | Custom accessible label for current value |
| getAriaValueText | (formatted: string \| null, value: number \| null) => string | - | Function to generate accessible label |
| locale | Intl.LocalesArgument | - | Locale for number formatting |
| format | Intl.NumberFormatOptions | - | Options for value formatting |
| className | string | - | Additional CSS classes |

### ProgressTrack

Container for the progress indicator. Customize height via className.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Override default styles (default: `h-1.5`) |

**Default styles**: `bg-muted h-1.5 rounded-full relative flex w-full items-center overflow-x-hidden`

### ProgressIndicator

Visual bar showing task completion. Width automatically adjusts based on parent Progress value.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Override colors/animation (default: `bg-primary`) |

**Default styles**: `bg-primary h-full transition-all`

Color customization examples:
- Success: `bg-green-500 dark:bg-green-400`
- Warning: `bg-yellow-500 dark:bg-yellow-400`
- Danger: `bg-red-500 dark:bg-red-400`

### ProgressLabel

Text label for the progress task.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Label text |

**Default styles**: `text-sm font-medium`

### ProgressValue

Displays formatted progress value (e.g., "65%").

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |
| children | (formatted: string \| null, value: number \| null) => ReactNode | - | Custom formatter function |

**Default styles**: `text-muted-foreground ml-auto text-sm tabular-nums`

## Data Attributes

All components share these data attributes for styling:

| Attribute | When Present |
|-----------|--------------|
| data-progressing | Value is between min and max |
| data-complete | Value equals max (100 by default) |
| data-indeterminate | Value is null (unknown duration) |

## Examples

### Basic Progress

```tsx
<Progress value={65}>
  <ProgressLabel>Loading</ProgressLabel>
  <ProgressValue />
  <ProgressTrack>
    <ProgressIndicator />
  </ProgressTrack>
</Progress>
```

### Minimal (No Label/Value)

```tsx
<Progress value={45}>
  <ProgressTrack>
    <ProgressIndicator />
  </ProgressTrack>
</Progress>
```

### Semantic Colors for States

```tsx
// Success state (healthy usage)
<Progress value={45}>
  <ProgressLabel>API Usage</ProgressLabel>
  <ProgressValue />
  <ProgressTrack>
    <ProgressIndicator className="bg-green-500 dark:bg-green-400" />
  </ProgressTrack>
</Progress>

// Warning state (approaching limit)
<Progress value={78}>
  <ProgressLabel>Rate Limit</ProgressLabel>
  <ProgressValue />
  <ProgressTrack>
    <ProgressIndicator className="bg-yellow-500 dark:bg-yellow-400" />
  </ProgressTrack>
</Progress>

// Critical state
<Progress value={94}>
  <ProgressLabel>Storage</ProgressLabel>
  <ProgressValue />
  <ProgressTrack>
    <ProgressIndicator className="bg-red-500 dark:bg-red-400" />
  </ProgressTrack>
</Progress>
```

### Size Variants

```tsx
// Small
<Progress value={65}>
  <ProgressLabel>Small</ProgressLabel>
  <ProgressValue />
  <ProgressTrack className="h-1">
    <ProgressIndicator />
  </ProgressTrack>
</Progress>

// Default
<Progress value={65}>
  <ProgressLabel>Default</ProgressLabel>
  <ProgressValue />
  <ProgressTrack className="h-1.5">
    <ProgressIndicator />
  </ProgressTrack>
</Progress>

// Large
<Progress value={65}>
  <ProgressLabel>Large</ProgressLabel>
  <ProgressValue />
  <ProgressTrack className="h-3">
    <ProgressIndicator />
  </ProgressTrack>
</Progress>
```

### Indeterminate State

For tasks with unknown duration:

```tsx
<Progress value={null}>
  <ProgressLabel>Processing...</ProgressLabel>
  <ProgressTrack>
    <ProgressIndicator className="w-1/3 animate-pulse" />
  </ProgressTrack>
</Progress>
```

### API Usage Dashboard Context

```tsx
<div className="border-border bg-card rounded-lg border p-5">
  <div className="mb-4 flex items-start justify-between">
    <div className="flex items-center gap-3">
      <div className="bg-primary/10 text-primary rounded-md p-2">
        <ActivityIcon className="size-5" />
      </div>
      <div>
        <p className="font-medium">Monthly API Calls</p>
        <p className="text-muted-foreground text-sm">
          Standard Plan: 1M requests/month
        </p>
      </div>
    </div>
    <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-600">
      Healthy
    </span>
  </div>

  <Progress value={45}>
    <ProgressLabel>API Requests</ProgressLabel>
    <ProgressValue />
    <ProgressTrack>
      <ProgressIndicator className="bg-green-500 dark:bg-green-400" />
    </ProgressTrack>
  </Progress>

  <p className="text-muted-foreground mt-2 text-sm">
    450,000 of 1,000,000 requests used
  </p>
</div>
```

## Accessibility

- Uses `role="progressbar"` with proper ARIA attributes
- Announces progress value and label to screen readers
- Supports `aria-valuetext` for custom accessible labels
- `getAriaValueText` prop allows dynamic accessible descriptions
- Indeterminate state properly announced when `value={null}`

## Related

- **Skeleton** - Loading placeholders for content
- **Spinner** - Circular loading indicator
- **Badge** - Status indicators with semantic colors
