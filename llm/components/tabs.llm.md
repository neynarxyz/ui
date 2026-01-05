# Tabs

Organize content into multiple panels with tab navigation, supporting both horizontal and vertical layouts.

## Import

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@neynar/ui/tabs"
```

## Anatomy

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

## Components

| Component | Description |
|-----------|-------------|
| Tabs | Root container, manages active tab state and orientation |
| TabsList | Groups tab triggers, controls visual variant |
| TabsTrigger | Individual tab button with value identifier |
| TabsContent | Content panel shown when corresponding tab is active |

## Props

### Tabs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | string \| number \| null | `0` | Initial active tab (uncontrolled) |
| value | string \| number \| null | - | Controlled active tab value |
| onValueChange | (value, eventDetails) => void | - | Called when active tab changes |
| orientation | "horizontal" \| "vertical" | "horizontal" | Layout direction |

When `value` is `null`, no tab will be active.

### TabsList

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | "default" \| "line" | "default" | Visual style of tab list |
| activateOnFocus | boolean | - | Auto-activate tab on arrow key focus |
| loopFocus | boolean | - | Loop keyboard focus at list ends |

**Variants:**
- `default` - Tabs with muted background and active highlight
- `line` - Minimal tabs with underline indicator on active tab

### TabsTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string \| number | - | Identifier matching TabsContent value |
| disabled | boolean | - | Prevents tab activation |

Supports nested icons and badges as children.

### TabsContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string \| number | - | Identifier matching TabsTrigger value |
| keepMounted | boolean | false | Keep DOM element when hidden |

## Data Attributes

### Tabs, TabsList

| Attribute | When Present |
|-----------|--------------|
| data-orientation | "horizontal" or "vertical" |
| data-activation-direction | "left", "right", "up", "down", or "none" |

### TabsTrigger

| Attribute | When Present |
|-----------|--------------|
| data-active | Tab is currently active |
| data-disabled | Tab is disabled |

### TabsContent

| Attribute | When Present |
|-----------|--------------|
| data-hidden | Panel is not active |
| data-index | Panel index number |

## Examples

### Basic Usage

```tsx
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Manage your account settings.
  </TabsContent>
  <TabsContent value="password">
    Change your password here.
  </TabsContent>
</Tabs>
```

### Controlled State

```tsx
function ControlledTabs() {
  const [activeTab, setActiveTab] = useState("webhooks")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
        <TabsTrigger value="keys">API Keys</TabsTrigger>
        <TabsTrigger value="logs">Logs</TabsTrigger>
      </TabsList>
      <TabsContent value="webhooks">...</TabsContent>
      <TabsContent value="keys">...</TabsContent>
      <TabsContent value="logs">...</TabsContent>
    </Tabs>
  )
}
```

### With Icons and Badges

```tsx
<Tabs defaultValue="inbox">
  <TabsList variant="line">
    <TabsTrigger value="inbox">
      <MailIcon />
      Inbox
      <Badge variant="default" className="ml-1.5">12</Badge>
    </TabsTrigger>
    <TabsTrigger value="drafts">
      <FileTextIcon />
      Drafts
      <Badge variant="secondary" className="ml-1.5">3</Badge>
    </TabsTrigger>
    <TabsTrigger value="sent">
      <SendIcon />
      Sent
    </TabsTrigger>
  </TabsList>
  <TabsContent value="inbox">12 unread messages</TabsContent>
  <TabsContent value="drafts">3 draft messages</TabsContent>
  <TabsContent value="sent">Sent messages</TabsContent>
</Tabs>
```

### Line Variant

```tsx
<Tabs defaultValue="all">
  <TabsList variant="line">
    <TabsTrigger value="all">All</TabsTrigger>
    <TabsTrigger value="active">Active</TabsTrigger>
    <TabsTrigger value="completed">Completed</TabsTrigger>
  </TabsList>
  <TabsContent value="all">All items</TabsContent>
  <TabsContent value="active">Active items</TabsContent>
  <TabsContent value="completed">Completed items</TabsContent>
</Tabs>
```

### Vertical Orientation

```tsx
<Tabs defaultValue="profile" orientation="vertical" className="w-[600px]">
  <TabsList>
    <TabsTrigger value="profile">
      <UserIcon />
      Profile
    </TabsTrigger>
    <TabsTrigger value="account">
      <KeyIcon />
      Account
    </TabsTrigger>
    <TabsTrigger value="notifications">
      <BellIcon />
      Notifications
    </TabsTrigger>
  </TabsList>
  <TabsContent value="profile">Profile settings</TabsContent>
  <TabsContent value="account">Account security</TabsContent>
  <TabsContent value="notifications">Notification preferences</TabsContent>
</Tabs>
```

### Disabled Tabs

```tsx
<Tabs defaultValue="general">
  <TabsList>
    <TabsTrigger value="general">General</TabsTrigger>
    <TabsTrigger value="privacy">Privacy</TabsTrigger>
    <TabsTrigger value="billing" disabled>
      Billing
    </TabsTrigger>
    <TabsTrigger value="team" disabled>
      Team
      <Badge variant="outline" className="ml-1.5">Pro</Badge>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="general">General settings</TabsContent>
  <TabsContent value="privacy">Privacy settings</TabsContent>
</Tabs>
```

## Keyboard

| Key | Action |
|-----|--------|
| Tab | Move focus to next focusable element |
| ArrowLeft / ArrowRight | Navigate between tabs (horizontal) |
| ArrowUp / ArrowDown | Navigate between tabs (vertical) |
| Enter / Space | Activate focused tab (when activateOnFocus is false) |
| Home | Focus first tab |
| End | Focus last tab |

## Accessibility

- Uses `role="tablist"`, `role="tab"`, and `role="tabpanel"` for proper semantic structure
- Active tab marked with `aria-selected="true"`
- Tab panels linked via `aria-labelledby` and `aria-controls`
- Keyboard navigation follows ARIA Authoring Practices Guide
- Focus management automatically handled when switching tabs

## Related

- [Button](./button.llm.md) - For tab-like actions
- [Badge](./badge.llm.md) - For counts in tabs
- [Card](./card.llm.md) - For content panels
