import type { Meta, StoryObj } from "@storybook/react";
import { StarIcon, TrendingUpIcon, UsersIcon, ZapIcon } from "lucide-react";
import { useState } from "react";

import { Badge } from "../badge";
import { Button } from "../button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Advanced & Specialized/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Carousel scroll direction",
    },
    opts: {
      control: "object",
      description: "Embla carousel options (loop, align, etc.)",
    },
    setApi: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

/**
 * Featured Apps Showcase - Realistic scenario showing a carousel in the context
 * of browsing featured Neynar Frame apps in the dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function FeaturedAppsShowcase() {
      const [api, setApi] = useState<CarouselApi>();
      const [current, setCurrent] = useState(0);
      const [count, setCount] = useState(0);

      const featuredApps = [
        {
          name: "FrameCast",
          description:
            "Interactive polling and voting frames for your community",
          category: "Engagement",
          stats: { users: "12.4K", rating: 4.9, trend: "+24%" },
          color: "from-purple-500 to-pink-500",
          icon: <UsersIcon className="size-6" />,
        },
        {
          name: "TokenGate",
          description: "Token-gated content and exclusive access management",
          category: "Monetization",
          stats: { users: "8.2K", rating: 4.8, trend: "+18%" },
          color: "from-blue-500 to-cyan-500",
          icon: <ZapIcon className="size-6" />,
        },
        {
          name: "CastAnalytics",
          description: "Real-time analytics and insights for your casts",
          category: "Analytics",
          stats: { users: "15.7K", rating: 4.7, trend: "+32%" },
          color: "from-green-500 to-emerald-500",
          icon: <TrendingUpIcon className="size-6" />,
        },
        {
          name: "FrameBuilder",
          description: "No-code frame builder with drag-and-drop interface",
          category: "Developer Tools",
          stats: { users: "9.8K", rating: 4.9, trend: "+28%" },
          color: "from-orange-500 to-red-500",
          icon: <StarIcon className="size-6" />,
        },
      ];

      // Track current slide
      useState(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
          setCurrent(api.selectedScrollSnap());
        });
      });

      return (
        <div className="w-full max-w-5xl space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Featured Frame Apps</h2>
            <p className="text-muted-foreground">
              Discover the most popular apps built on Neynar's Frame platform
            </p>
          </div>

          {/* Carousel */}
          <div className="px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              setApi={setApi}
            >
              <CarouselContent>
                {featuredApps.map((app, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div
                          className={`bg-gradient-to-br ${app.color} mb-3 flex size-12 items-center justify-center rounded-lg text-white`}
                        >
                          {app.icon}
                        </div>
                        <CardTitle>{app.name}</CardTitle>
                        <CardDescription>{app.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <Badge variant="outline">{app.category}</Badge>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div>
                              <p className="text-muted-foreground text-xs">
                                Users
                              </p>
                              <p className="font-semibold text-sm">
                                {app.stats.users}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground text-xs">
                                Rating
                              </p>
                              <p className="font-semibold text-sm">
                                {app.stats.rating}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground text-xs">
                                Growth
                              </p>
                              <p className="text-green-500 font-semibold text-sm">
                                {app.stats.trend}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-border border-t">
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`size-2 rounded-full transition-all ${
                  index === current
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between border-t pt-6">
            <p className="text-muted-foreground text-sm">
              Showing {current + 1} of {count} featured apps
            </p>
            <Button>View All Apps</Button>
          </div>
        </div>
      );
    }

    return <FeaturedAppsShowcase />;
  },
};

/**
 * Complete design system reference showing all carousel variants, orientations,
 * and configuration options.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-5xl space-y-12">
      {/* Basic Horizontal */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Basic Horizontal Carousel</h3>
          <p className="text-muted-foreground text-sm">
            Default horizontal scrolling with navigation buttons
          </p>
        </div>
        <div className="px-12">
          <Carousel className="w-full max-w-sm">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Vertical Orientation */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Vertical Orientation</h3>
          <p className="text-muted-foreground text-sm">
            Vertical scrolling for timeline-style layouts
          </p>
        </div>
        <div className="py-14 px-12">
          <Carousel orientation="vertical" className="w-full max-w-xs">
            <CarouselContent className="h-[300px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pt-4 md:basis-1/2">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          Slide {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Multiple Items Per View */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Multiple Items Per View</h3>
          <p className="text-muted-foreground text-sm">
            Show multiple slides at once with responsive breakpoints
          </p>
        </div>
        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Loop Mode */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Loop Mode</h3>
          <p className="text-muted-foreground text-sm">
            Infinite looping for seamless browsing
          </p>
        </div>
        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="text-center">
                          <div className="text-3xl font-semibold">
                            {index + 1}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            Loop enabled
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* API Control with Indicators */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">API Control with Indicators</h3>
          <p className="text-muted-foreground text-sm">
            Programmatic control and custom indicator dots
          </p>
        </div>
        <CarouselWithIndicators />
      </section>

      {/* Alignment Options */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Alignment Options</h3>
          <p className="text-muted-foreground text-sm">
            Different alignment modes: start, center, end
          </p>
        </div>
        <div className="space-y-6 px-12">
          <div>
            <p className="text-muted-foreground mb-2 text-sm">Align: Start</p>
            <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="basis-1/3">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-4">
                        <span className="font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div>
            <p className="text-muted-foreground mb-2 text-sm">Align: Center</p>
            <Carousel opts={{ align: "center" }} className="w-full max-w-sm">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="basis-1/3">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-4">
                        <span className="font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div>
            <p className="text-muted-foreground mb-2 text-sm">Align: End</p>
            <Carousel opts={{ align: "end" }} className="w-full max-w-sm">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="basis-1/3">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-4">
                        <span className="font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing carousel props.
 */
export const Interactive: Story = {
  render: (args) => (
    <div className="px-12">
      <Carousel className="w-full max-w-xs" {...args}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
  args: {
    orientation: "horizontal",
    opts: {
      align: "start",
      loop: false,
    },
  },
};

// Helper component for API control demonstration
function CarouselWithIndicators() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useState(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  });

  return (
    <div className="space-y-4 px-12">
      <Carousel setApi={setApi} className="w-full max-w-sm">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Custom Indicators */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`size-2 rounded-full transition-all ${
              index === current
                ? "bg-primary w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Status Text */}
      <p className="text-muted-foreground text-center text-sm">
        Slide {current + 1} of {count}
      </p>
    </div>
  );
}
