# Component Reference

Complete catalog of @neynar/ui components organized by category.

## Forms & Input

### Button

Primary action trigger with multiple variants and sizes.

```tsx
import { Button } from "@neynar/ui/button";

<Button>Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button disabled>Disabled</Button>
```

**Variants:** `default` | `destructive` | `outline` | `secondary` | `ghost` | `link` | `success` | `warning` | `info`
**Sizes:** `default` | `xs` | `sm` | `lg` | `icon` | `icon-xs` | `icon-sm` | `icon-lg`

### Input

Text input field with support for various types.

```tsx
import { Input } from "@neynar/ui/input";

<Input placeholder="Enter text..." />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled" />
```

### Textarea

Multi-line text input.

```tsx
import { Textarea } from "@neynar/ui/textarea";

<Textarea placeholder="Enter description..." />
<Textarea rows={5} />
```

### Select

Dropdown selection component.

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@neynar/ui/select";

<Select value={value} onValueChange={(v) => v && setValue(v)}>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

### Combobox

Searchable select with autocomplete.

```tsx
import {
  Combobox,
  ComboboxTrigger,
  ComboboxInput,
  ComboboxContent,
  ComboboxItem,
} from "@neynar/ui/combobox";

<Combobox value={value} onValueChange={setValue}>
  <ComboboxTrigger>
    <ComboboxInput placeholder="Search..." />
  </ComboboxTrigger>
  <ComboboxContent>
    <ComboboxItem value="item1">Item 1</ComboboxItem>
    <ComboboxItem value="item2">Item 2</ComboboxItem>
  </ComboboxContent>
</Combobox>
```

### Checkbox

Boolean toggle with label support.

```tsx
import { Checkbox } from "@neynar/ui/checkbox";

<Checkbox id="terms" />
<label htmlFor="terms">Accept terms</label>
```

### Switch

Toggle switch for boolean settings.

```tsx
import { Switch } from "@neynar/ui/switch";

<Switch checked={enabled} onCheckedChange={setEnabled} />
```

### RadioGroup

Single selection from multiple options.

```tsx
import { RadioGroup, RadioGroupItem } from "@neynar/ui/radio-group";

<RadioGroup value={value} onValueChange={(v) => setValue(v as string)}>
  <RadioGroupItem value="option1" id="opt1" />
  <label htmlFor="opt1">Option 1</label>
  <RadioGroupItem value="option2" id="opt2" />
  <label htmlFor="opt2">Option 2</label>
</RadioGroup>
```

### Calendar

Date picker calendar component.

```tsx
import { Calendar } from "@neynar/ui/calendar";

// Single date
<Calendar mode="single" selected={date} onSelect={setDate} />

// Date range
<Calendar
  mode="range"
  selected={dateRange}
  onSelect={(range) => range?.from && setDateRange({ from: range.from, to: range.to })}
/>
```

### Slider

Range input slider.

```tsx
import { Slider } from "@neynar/ui/slider";

<Slider
  value={value}
  onValueChange={(v) => setValue(Array.isArray(v) ? [...v] : [v])}
  min={0}
  max={100}
/>
```

### InputOTP

One-time password input.

```tsx
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@neynar/ui/input-otp";

<InputOTP maxLength={6} value={otp} onChange={setOtp}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

### Label

Form field label.

```tsx
import { Label } from "@neynar/ui/label";

<Label htmlFor="email">Email address</Label>
```

---

## Layout & Structure

### Card

Container for grouped content.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@neynar/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>Footer actions</CardFooter>
</Card>
```

### Accordion

Collapsible content sections.

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@neynar/ui/accordion";

<Accordion defaultValue={["item-1"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Separator

Visual divider between content.

```tsx
import { Separator } from "@neynar/ui/separator";

<Separator />
<Separator orientation="vertical" />
```

### AspectRatio

Maintain aspect ratio for content.

```tsx
import { AspectRatio } from "@neynar/ui/aspect-ratio";

<AspectRatio ratio={16 / 9}>
  <img src="..." alt="..." className="object-cover" />
</AspectRatio>
```

### ScrollArea

Custom scrollable container.

```tsx
import { ScrollArea } from "@neynar/ui/scroll-area";

<ScrollArea className="h-72">
  {/* Long content */}
</ScrollArea>
```

### Resizable

Resizable panel layouts.

```tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@neynar/ui/resizable";

<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>Left</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Right</ResizablePanel>
</ResizablePanelGroup>
```

### Collapsible

Show/hide content.

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@neynar/ui/collapsible";

<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>Hidden content</CollapsibleContent>
</Collapsible>
```

---

## Navigation & Menus

### Tabs

Tabbed content navigation.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@neynar/ui/tabs";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### DropdownMenu

Contextual action menu.

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@neynar/ui/dropdown-menu";
import { Button } from "@neynar/ui/button";

<DropdownMenu>
  <DropdownMenuTrigger>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Action 1</DropdownMenuItem>
    <DropdownMenuItem>Action 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### ContextMenu

Right-click context menu.

```tsx
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@neynar/ui/context-menu";

<ContextMenu>
  <ContextMenuTrigger>Right-click me</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### Breadcrumb

Navigation path indicator.

```tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@neynar/ui/breadcrumb";

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>Current Page</BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Pagination

Page navigation controls.

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@neynar/ui/pagination";

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### Sidebar

Application sidebar navigation.

```tsx
import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter } from "@neynar/ui/sidebar";

<Sidebar>
  <SidebarHeader>Logo</SidebarHeader>
  <SidebarContent>Navigation items</SidebarContent>
  <SidebarFooter>Footer</SidebarFooter>
</Sidebar>
```

---

## Overlays & Dialogs

### Dialog

Modal dialog.

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@neynar/ui/dialog";
import { Button } from "@neynar/ui/button";

<Dialog>
  <DialogTrigger>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    Content here
  </DialogContent>
</Dialog>
```

### AlertDialog

Confirmation dialog.

```tsx
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@neynar/ui/alert-dialog";
import { Button } from "@neynar/ui/button";

<AlertDialog>
  <AlertDialogTrigger>
    <Button variant="destructive">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Sheet

Side panel overlay.

```tsx
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@neynar/ui/sheet";
import { Button } from "@neynar/ui/button";

<Sheet>
  <SheetTrigger>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
    </SheetHeader>
    Content
  </SheetContent>
</Sheet>
```

### Drawer

Bottom drawer (mobile-friendly).

```tsx
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from "@neynar/ui/drawer";
import { Button } from "@neynar/ui/button";

<Drawer>
  <DrawerTrigger>
    <Button>Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Drawer Title</DrawerTitle>
    </DrawerHeader>
    Content
  </DrawerContent>
</Drawer>
```

### Popover

Floating content panel.

```tsx
import { Popover, PopoverTrigger, PopoverContent } from "@neynar/ui/popover";
import { Button } from "@neynar/ui/button";

<Popover>
  <PopoverTrigger>
    <Button>Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>Popover content</PopoverContent>
</Popover>
```

### Tooltip

Hover information.

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@neynar/ui/tooltip";

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>Tooltip text</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### HoverCard

Rich hover preview.

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@neynar/ui/hover-card";

<HoverCard>
  <HoverCardTrigger>Hover for details</HoverCardTrigger>
  <HoverCardContent>
    Rich content preview
  </HoverCardContent>
</HoverCard>
```

---

## Data Display

### Table

Data table with headers and rows.

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@neynar/ui/table";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Item 1</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Badge

Status indicator.

```tsx
import { Badge } from "@neynar/ui/badge";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Error</Badge>
```

### Avatar

User profile image.

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@neynar/ui/avatar";

<Avatar>
  <AvatarImage src="https://..." alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### Alert

Notification message.

```tsx
import { Alert, AlertTitle, AlertDescription } from "@neynar/ui/alert";

<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>Important information here.</AlertDescription>
</Alert>
```

### Progress

Progress indicator.

```tsx
import { Progress } from "@neynar/ui/progress";

<Progress value={66} />
```

### Skeleton

Loading placeholder.

```tsx
import { Skeleton } from "@neynar/ui/skeleton";

<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-12 w-12 rounded-full" />
```

### Carousel

Image/content carousel.

```tsx
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@neynar/ui/carousel";

<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

---

## Interactive Controls

### Toggle

Single toggle button.

```tsx
import { Toggle } from "@neynar/ui/toggle";

<Toggle pressed={pressed} onPressedChange={setPressed}>
  Toggle
</Toggle>
```

### ToggleGroup

Group of toggle buttons.

```tsx
import { ToggleGroup, ToggleGroupItem } from "@neynar/ui/toggle-group";

<ToggleGroup value={value} onValueChange={setValue}>
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>
```

---

## Utilities

### Sonner (Toast)

Toast notifications.

```tsx
import { Toaster, toast } from "@neynar/ui/sonner";

// In your layout
<Toaster />

// Trigger toasts
toast("Event has been created");
toast.success("Success!");
toast.error("Something went wrong");
```

### Spinner

Loading spinner.

```tsx
import { Spinner } from "@neynar/ui/spinner";

<Spinner />
<Spinner size="lg" />
```

### Kbd

Keyboard shortcut indicator.

```tsx
import { Kbd } from "@neynar/ui/kbd";

<Kbd>⌘</Kbd><Kbd>K</Kbd>
```

---

## Hooks

### useIsMobile

Detect mobile viewport.

```tsx
import { useIsMobile } from "@neynar/ui/use-mobile";

function Component() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileView /> : <DesktopView />;
}
```

---

## Related Documentation

- [Theming Guide](./theming/index.md) - Themes, color mode, CSS variables
- [Next.js Integration](./integrations/nextjs.md) - Framework-specific setup
- [Vite Integration](./integrations/vite.md) - Vite + React setup
- [Troubleshooting](./troubleshooting.md) - Common issues
