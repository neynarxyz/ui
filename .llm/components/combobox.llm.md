# Combobox

Searchable select component supporting single and multi-select with optional chips UI.

## Import

```tsx
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  useComboboxAnchor,
} from "@neynar/ui/combobox"
```

## Anatomy

### Single Select
```tsx
<Combobox>
  <ComboboxInput />
  <ComboboxContent>
    <ComboboxList>
      <ComboboxEmpty />
      <ComboboxItem />
    </ComboboxList>
  </ComboboxContent>
</Combobox>
```

### Multi-Select with Chips
```tsx
const anchorRef = useComboboxAnchor()

<Combobox multiple>
  <ComboboxChips ref={anchorRef}>
    <ComboboxChip />
    <ComboboxChipsInput />
  </ComboboxChips>
  <ComboboxContent anchor={anchorRef}>
    <ComboboxList>
      <ComboboxItem />
    </ComboboxList>
  </ComboboxContent>
</Combobox>
```

## Components

| Component | Description |
|-----------|-------------|
| Combobox | Root component managing state (doesn't render element) |
| ComboboxInput | Text input with optional trigger/clear buttons for single-select |
| ComboboxContent | Popup container with automatic portal and positioning |
| ComboboxList | Scrollable container for items with overflow handling |
| ComboboxItem | Selectable item with check indicator when selected |
| ComboboxChips | Container for selected chips in multi-select mode |
| ComboboxChip | Individual chip with optional remove button |
| ComboboxChipsInput | Text input for multi-select (use inside ComboboxChips) |
| ComboboxGroup | Groups related items together |
| ComboboxLabel | Label for item groups |
| ComboboxEmpty | Message shown when no results match search |
| ComboboxSeparator | Visual divider between groups |
| useComboboxAnchor | Hook returning ref for anchoring popup to chips |

## Props

### Combobox

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string \| string[] \| null | - | Controlled selected value(s) |
| onValueChange | (value) => void | - | Called when selection changes |
| defaultValue | string \| string[] \| null | - | Uncontrolled initial value |
| inputValue | string | - | Controlled input text value |
| onInputValueChange | (value) => void | - | Called when input text changes |
| defaultInputValue | string | - | Uncontrolled initial input text |
| multiple | boolean | false | Enable multi-select mode |
| disabled | boolean | false | Disable all interactions |
| open | boolean | - | Controlled open state |
| onOpenChange | (open) => void | - | Called when popup opens/closes |
| openOnInputClick | boolean | true | Whether clicking input opens popup |

### ComboboxInput

Single-select input wrapped in InputGroup with optional addons.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| showTrigger | boolean | true | Show dropdown trigger button |
| showClear | boolean | false | Show clear button when value selected |
| placeholder | string | - | Input placeholder text |
| disabled | boolean | false | Disable input |

### ComboboxContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | 'top' \| 'bottom' \| 'left' \| 'right' | 'bottom' | Popup placement side |
| align | 'start' \| 'center' \| 'end' | 'start' | Popup alignment |
| sideOffset | number | 6 | Distance from anchor |
| alignOffset | number | 0 | Alignment adjustment |
| anchor | RefObject | - | Ref to anchor element (for chips mode) |

**Anchoring for Multi-Select:**
```tsx
const anchorRef = useComboboxAnchor()
<ComboboxChips ref={anchorRef}>...</ComboboxChips>
<ComboboxContent anchor={anchorRef}>...</ComboboxContent>
```

### ComboboxItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | any | - | **Required**. Unique value identifying this item |
| disabled | boolean | false | Disable item interaction |
| onClick | MouseEventHandler | - | Click handler for item selection |

### ComboboxChips

Container for chips in multi-select mode. Must be used with `useComboboxAnchor()` hook.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ref | RefObject | - | Pass ref from useComboboxAnchor() |
| children | ReactNode | - | ComboboxChip and ComboboxChipsInput elements |

### ComboboxChip

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| showRemove | boolean | true | Show X button to remove chip |
| children | ReactNode | - | Chip content (usually text/icon) |

### ComboboxChipsInput

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| placeholder | string | - | Input placeholder text |

## Data Attributes

### ComboboxInput
- `data-popup-open` - Popup is open
- `data-disabled` - Input is disabled
- `data-focused` - Input has focus

### ComboboxContent
- `data-open` - Popup is open (triggers animations)
- `data-closed` - Popup is closed (triggers animations)
- `data-side` - Current placement side (top/bottom/left/right)
- `data-chips` - Anchored to chips container (multi-select)

### ComboboxItem
- `data-selected` - Item is selected
- `data-highlighted` - Item is keyboard highlighted
- `data-disabled` - Item is disabled

### ComboboxList
- `data-empty` - List has no items (shows ComboboxEmpty)

## Examples

### Basic Single Select

```tsx
function FrameworkPicker() {
  const [value, setValue] = useState<string | null>(null)

  const frameworks = [
    { value: "next", label: "Next.js" },
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
  ]

  return (
    <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
      <ComboboxInput placeholder="Select framework..." showClear />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No frameworks found</ComboboxEmpty>
          {frameworks.map((fw) => (
            <ComboboxItem key={fw.value} value={fw.value}>
              {fw.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
```

### Multi-Select with Chips

```tsx
function TagPicker() {
  const [tags, setTags] = useState<string[]>([])
  const anchorRef = useComboboxAnchor()

  const availableTags = ["react", "typescript", "nextjs", "tailwind"]

  return (
    <Combobox multiple value={tags} onValueChange={(v) => setTags(v as string[])}>
      <ComboboxChips ref={anchorRef}>
        {tags.map((tag) => (
          <ComboboxChip key={tag}>{tag}</ComboboxChip>
        ))}
        <ComboboxChipsInput placeholder="Add tags..." />
      </ComboboxChips>
      <ComboboxContent anchor={anchorRef}>
        <ComboboxList>
          <ComboboxEmpty>No tags found</ComboboxEmpty>
          {availableTags.map((tag) => (
            <ComboboxItem key={tag} value={tag}>
              {tag}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
```

### Grouped Items with Labels

```tsx
function FoodPicker() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
      <ComboboxInput placeholder="Select food..." showClear />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No food found</ComboboxEmpty>
          <ComboboxGroup>
            <ComboboxLabel>Fruits</ComboboxLabel>
            <ComboboxItem value="apple">Apple</ComboboxItem>
            <ComboboxItem value="banana">Banana</ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator />
          <ComboboxGroup>
            <ComboboxLabel>Vegetables</ComboboxLabel>
            <ComboboxItem value="carrot">Carrot</ComboboxItem>
            <ComboboxItem value="broccoli">Broccoli</ComboboxItem>
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
```

### Items with Icons and Metadata

```tsx
function ChannelPicker() {
  const [channel, setChannel] = useState<string | null>(null)

  const channels = [
    { id: "1", name: "farcaster", subscribers: 89450 },
    { id: "2", name: "base", subscribers: 45230 },
  ]

  return (
    <Combobox value={channel} onValueChange={(v) => setChannel(v as string)}>
      <ComboboxInput placeholder="Search channels..." showClear />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No channels found</ComboboxEmpty>
          {channels.map((ch) => (
            <ComboboxItem key={ch.id} value={ch.id}>
              <HashIcon className="text-muted-foreground size-4" />
              <div className="flex-1">
                <div className="font-medium">/{ch.name}</div>
                <div className="text-muted-foreground text-xs">
                  {ch.subscribers.toLocaleString()} subscribers
                </div>
              </div>
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
```

### Without Trigger Button

```tsx
<Combobox>
  <ComboboxInput
    placeholder="Type to search..."
    showTrigger={false}
    showClear
  />
  <ComboboxContent>
    <ComboboxList>
      <ComboboxItem value="item1">Item 1</ComboboxItem>
    </ComboboxList>
  </ComboboxContent>
</Combobox>
```

## Keyboard Interactions

| Key | Action |
|-----|--------|
| ArrowDown | Highlight next item (opens popup if closed) |
| ArrowUp | Highlight previous item (opens popup if closed) |
| Enter | Select highlighted item and close popup |
| Escape | Close popup and clear highlight |
| Home | Highlight first item |
| End | Highlight last item |
| Tab | Close popup and move focus |
| Backspace | Remove last chip (multi-select, when input empty) |

## Accessibility

- ARIA combobox pattern with `role="combobox"` on input
- `aria-expanded` indicates popup state
- `aria-controls` links input to popup listbox
- `aria-activedescendant` tracks highlighted item
- Items use `role="option"` with `aria-selected` state
- Automatic focus management when opening/closing
- Screen readers announce selection changes and item counts
- Keyboard navigation follows ARIA authoring practices

## Related

- [Select](/components/select.llm.md) - Simple dropdown without search
- [Input](/components/input.llm.md) - Basic text input
- [Command](/components/command.llm.md) - Command palette pattern
