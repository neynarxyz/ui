# Carousel

Embla-powered carousel component with horizontal/vertical scrolling, keyboard navigation, and programmatic control.

## Import

```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@neynar/ui/carousel"
```

## Anatomy

```tsx
<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

## Components

| Component | Description |
|-----------|-------------|
| Carousel | Root container, manages state and keyboard navigation |
| CarouselContent | Scrollable container with overflow handling |
| CarouselItem | Individual slide wrapper |
| CarouselPrevious | Previous button (auto-disabled at start) |
| CarouselNext | Next button (auto-disabled at end) |

## Props

### Carousel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | "horizontal" \| "vertical" | "horizontal" | Scroll direction |
| opts | EmblaOptionsType | - | Embla carousel options (loop, align, etc.) |
| plugins | EmblaPluginType[] | - | Embla carousel plugins |
| setApi | (api: CarouselApi) => void | - | Callback to receive carousel API for programmatic control |

### CarouselContent

Standard div props. Automatically applies flex layout and orientation-based spacing.

### CarouselItem

Standard div props. Use Tailwind `basis-*` classes to control items per view:
- `basis-full` - 1 item per view (default)
- `md:basis-1/2` - 2 items on medium screens
- `lg:basis-1/3` - 3 items on large screens

### CarouselPrevious / CarouselNext

Extends Button props with defaults: `variant="outline"`, `size="icon-sm"`.

## Embla Options (opts prop)

Common options passed to `opts`:

| Option | Type | Description |
|--------|------|-------------|
| loop | boolean | Enable infinite looping |
| align | "start" \| "center" \| "end" | Slide alignment |
| slidesToScroll | number | Number of slides to scroll at once |
| skipSnaps | boolean | Skip snapping to slides that are out of view |

Full options: https://www.embla-carousel.com/api/options/

## Data Attributes

| Attribute | Element | Description |
|-----------|---------|-------------|
| data-slot="carousel" | Carousel root | For styling hooks |
| data-slot="carousel-content" | Content wrapper | For styling hooks |
| data-slot="carousel-item" | Individual item | For styling hooks |
| data-slot="carousel-previous" | Previous button | For styling hooks |
| data-slot="carousel-next" | Next button | For styling hooks |

## Examples

### Basic Usage

```tsx
<Carousel className="w-full max-w-sm">
  <CarouselContent>
    {items.map((item, index) => (
      <CarouselItem key={index}>
        <Card>
          <CardContent>{item.content}</CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### Multiple Items Per View

```tsx
<Carousel className="w-full">
  <CarouselContent>
    {items.map((item, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
        <Card>
          <CardContent>{item.content}</CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### Loop Mode

```tsx
<Carousel
  opts={{
    loop: true,
    align: "start",
  }}
>
  <CarouselContent>
    {items.map((item, index) => (
      <CarouselItem key={index}>
        <Card>
          <CardContent>{item.content}</CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### Vertical Orientation

```tsx
<Carousel orientation="vertical" className="w-full max-w-xs">
  <CarouselContent className="h-[300px]">
    {items.map((item, index) => (
      <CarouselItem key={index}>
        <Card>
          <CardContent>{item.content}</CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### Programmatic Control with Custom Indicators

```tsx
function ControlledCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="space-y-4">
      <Carousel setApi={setApi} className="w-full max-w-sm">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent>{item.content}</CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Custom indicators */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "size-2 rounded-full transition-all",
              index === current
                ? "bg-primary w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Slide {current + 1} of {count}
      </p>
    </div>
  )
}
```

## Keyboard

| Key | Action |
|-----|--------|
| ArrowLeft | Previous slide (horizontal) |
| ArrowRight | Next slide (horizontal) |

## Accessibility

- Root has `role="region"` and `aria-roledescription="carousel"`
- Items have `role="group"` and `aria-roledescription="slide"`
- Navigation buttons include screen reader text ("Previous slide", "Next slide")
- Buttons automatically disabled when navigation not available
- Full keyboard support with arrow key navigation

## useCarousel Hook

Access carousel context in child components:

```tsx
function CustomCarouselControl() {
  const { api, scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel()

  return (
    <div>
      <Button onClick={scrollPrev} disabled={!canScrollPrev}>Prev</Button>
      <Button onClick={scrollNext} disabled={!canScrollNext}>Next</Button>
    </div>
  )
}
```

## CarouselApi Methods

Key methods available via `setApi` callback:

| Method | Description |
|--------|-------------|
| `scrollTo(index)` | Scroll to specific slide |
| `scrollPrev()` | Scroll to previous slide |
| `scrollNext()` | Scroll to next slide |
| `canScrollPrev()` | Check if can scroll backward |
| `canScrollNext()` | Check if can scroll forward |
| `selectedScrollSnap()` | Get current slide index |
| `scrollSnapList()` | Get array of all snap points |
| `on(event, callback)` | Subscribe to events (select, init, reInit) |

Full API: https://www.embla-carousel.com/api/

## Related

- Card - Common carousel item container
- Button - Used for navigation controls
