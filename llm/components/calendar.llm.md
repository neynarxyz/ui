# Calendar

Date picker component supporting single date, date range, and multiple date selection modes with customizable appearance and navigation.

## Import

```tsx
import { Calendar } from "@neynar/ui/calendar"
```

## Anatomy

```tsx
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>
```

## Props

### Calendar

Built on react-day-picker's DayPicker component. All DayPicker props are supported.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| mode | "single" \| "multiple" \| "range" | - | Selection mode for dates |
| selected | Date \| Date[] \| { from: Date; to?: Date } | - | Currently selected date(s) |
| onSelect | (date) => void | - | Called when selection changes |
| buttonVariant | "default" \| "outline" \| "secondary" \| "ghost" \| "destructive" \| "link" | "ghost" | Visual style for navigation buttons |
| showOutsideDays | boolean | true | Show days from adjacent months |
| captionLayout | "label" \| "dropdown" \| "dropdown-months" \| "dropdown-years" | "label" | Layout style for month/year header |
| numberOfMonths | number | 1 | Number of months to display |
| disabled | (date: Date) => boolean \| boolean | - | Disable specific dates or all dates |
| fromDate | Date | - | Earliest selectable date |
| toDate | Date | - | Latest selectable date |
| fromYear | number | - | Earliest year for dropdown navigation |
| toYear | number | - | Latest year for dropdown navigation |
| showWeekNumber | boolean | false | Display ISO week numbers |
| formatters | Partial&lt;Formatters&gt; | - | Override default date formatting |
| footer | ReactNode | - | Content for calendar footer |
| className | string | - | Additional CSS classes |
| classNames | Record&lt;string, string&gt; | - | Class names for internal elements |

### Selection Modes

**Single Mode** - Select one date:
```tsx
const [date, setDate] = useState<Date | undefined>()
<Calendar mode="single" selected={date} onSelect={setDate} />
```

**Range Mode** - Select a date range:
```tsx
const [range, setRange] = useState<{ from: Date; to?: Date }>()
<Calendar
  mode="range"
  selected={range}
  onSelect={(range) => range?.from && setRange(range)}
/>
```

**Multiple Mode** - Select multiple dates:
```tsx
const [dates, setDates] = useState<Date[]>([])
<Calendar mode="multiple" selected={dates} onSelect={setDates} />
```

## Data Attributes

| Attribute | When Present | Applied To |
|-----------|--------------|------------|
| data-slot | Always "calendar" | Root element |
| data-selected-single | Single date selected (not in range) | Day button |
| data-range-start | First date in range selection | Day button |
| data-range-middle | Date within range | Day button |
| data-range-end | Last date in range selection | Day button |
| data-day | Always (date string) | Day button |

## Examples

### Basic Single Date Selection

```tsx
function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  )
}
```

### Date Range with Two Months

```tsx
function DateRangePicker() {
  const [dateRange, setDateRange] = useState<{ from: Date; to?: Date }>({
    from: subDays(new Date(), 7),
    to: new Date(),
  })

  return (
    <Calendar
      mode="range"
      selected={dateRange}
      onSelect={(range) => range?.from && setDateRange(range)}
      numberOfMonths={2}
    />
  )
}
```

### With Disabled Dates

```tsx
function RestrictedCalendar() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={(date) => date < new Date() || date > addDays(new Date(), 30)}
    />
  )
}
```

### Dropdown Navigation with Year Range

```tsx
function CalendarWithDropdown() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      captionLayout="dropdown"
      fromYear={2020}
      toYear={2030}
    />
  )
}
```

### With Week Numbers

```tsx
function CalendarWithWeeks() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      showWeekNumber
    />
  )
}
```

### Multiple Date Selection

```tsx
function MultiDatePicker() {
  const [dates, setDates] = useState<Date[]>([
    new Date(),
    addDays(new Date(), 2),
    addDays(new Date(), 5),
  ])

  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={(dates) => dates && setDates(dates)}
    />
  )
}
```

### Custom Button Variant

```tsx
function StyledCalendar() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      buttonVariant="outline"
    />
  )
}
```

### Hide Outside Days

```tsx
function CompactCalendar() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      showOutsideDays={false}
    />
  )
}
```

## Keyboard

| Key | Action |
|-----|--------|
| Arrow Keys | Navigate between days |
| Enter / Space | Select focused day |
| Page Up | Previous month |
| Page Down | Next month |
| Home | First day of week |
| End | Last day of week |
| Shift + Page Up | Previous year |
| Shift + Page Down | Next year |

## Accessibility

- Full keyboard navigation with arrow keys, Page Up/Down, and modifier keys
- ARIA labels for all navigation buttons and date selections
- Focus management with visual focus indicators
- Screen reader announcements for date selection changes
- Respects reduced-motion preferences

## Related

- [Button](./button.llm.md) - Used for navigation controls
- [Popover](./popover.llm.md) - Often used to contain calendar in dropdown
- [Card](./card.llm.md) - Can contain calendar for date range selection UI
