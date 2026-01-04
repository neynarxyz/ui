import type { Meta, StoryObj } from "@storybook/react";
import { ImageIcon, PlayIcon, VideoIcon } from "lucide-react";

import { AspectRatio } from "../aspect-ratio";
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

const meta: Meta<typeof AspectRatio> = {
  title: "Components/Layout & Structure/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ratio: {
      control: { type: "number", min: 0.1, max: 5, step: 0.1 },
      description: "Aspect ratio as a number (width/height)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    children: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

/**
 * Neynar Dashboard - Realistic scenarios showing aspect ratio in context
 * of cast embeds, NFT previews, video thumbnails, and profile images.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function MediaGallery() {
      return (
        <div className="w-full max-w-5xl space-y-8">
          {/* Cast Embeds */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Cast Media Embeds</h2>
              <p className="text-muted-foreground text-sm">
                Display cast images and videos with consistent aspect ratios
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-0">
                  <AspectRatio ratio={16 / 9} className="overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=450&fit=crop"
                      alt="Landscape"
                      className="size-full object-cover transition-transform hover:scale-105"
                    />
                  </AspectRatio>
                </CardContent>
                <CardFooter className="gap-2">
                  <div className="flex-1">
                    <p className="text-sm font-medium">Beautiful landscape</p>
                    <p className="text-muted-foreground text-xs">
                      Posted 2h ago
                    </p>
                  </div>
                  <Badge variant="secondary">16:9</Badge>
                </CardFooter>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <AspectRatio ratio={1} className="overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1682687221363-72518513620e?w=800&h=800&fit=crop"
                      alt="Square image"
                      className="size-full object-cover transition-transform hover:scale-105"
                    />
                  </AspectRatio>
                </CardContent>
                <CardFooter className="gap-2">
                  <div className="flex-1">
                    <p className="text-sm font-medium">Square composition</p>
                    <p className="text-muted-foreground text-xs">
                      Posted 4h ago
                    </p>
                  </div>
                  <Badge variant="secondary">1:1</Badge>
                </CardFooter>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <AspectRatio ratio={4 / 3} className="overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&h=600&fit=crop"
                      alt="Classic ratio"
                      className="size-full object-cover transition-transform hover:scale-105"
                    />
                  </AspectRatio>
                </CardContent>
                <CardFooter className="gap-2">
                  <div className="flex-1">
                    <p className="text-sm font-medium">Classic 4:3 format</p>
                    <p className="text-muted-foreground text-xs">
                      Posted 6h ago
                    </p>
                  </div>
                  <Badge variant="secondary">4:3</Badge>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Video Thumbnails */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Video Content</h2>
              <p className="text-muted-foreground text-sm">
                Video thumbnails with play overlays
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-0">
                  <AspectRatio ratio={16 / 9} className="overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=1200&h=675&fit=crop"
                      alt="Video thumbnail"
                      className="size-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40">
                      <div className="flex size-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-110">
                        <PlayIcon className="ml-1 size-8 fill-current" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-xs font-medium text-white">
                      12:34
                    </div>
                  </AspectRatio>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <VideoIcon className="size-4" />
                    <p className="text-sm font-medium">
                      Introduction to Farcaster
                    </p>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Learn the basics of building on Farcaster protocol
                  </p>
                </CardFooter>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <AspectRatio ratio={16 / 9} className="overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1682687220198-88e9bdea9931?w=1200&h=675&fit=crop"
                      alt="Video thumbnail"
                      className="size-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40">
                      <div className="flex size-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-110">
                        <PlayIcon className="ml-1 size-8 fill-current" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-xs font-medium text-white">
                      8:45
                    </div>
                  </AspectRatio>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <VideoIcon className="size-4" />
                    <p className="text-sm font-medium">
                      API Integration Tutorial
                    </p>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Step-by-step guide to integrating Neynar APIs
                  </p>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* NFT Previews */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">NFT Gallery</h2>
              <p className="text-muted-foreground text-sm">
                Display NFT collections with square aspect ratios
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=500&fit=crop",
                "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=500&h=500&fit=crop",
                "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&h=500&fit=crop",
                "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=500&h=500&fit=crop",
              ].map((src, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <AspectRatio ratio={1} className="overflow-hidden">
                      <img
                        src={src}
                        alt={`NFT ${i + 1}`}
                        className="size-full object-cover transition-transform hover:scale-110"
                      />
                    </AspectRatio>
                  </CardContent>
                  <CardFooter>
                    <div>
                      <p className="text-sm font-medium">NFT #{1000 + i}</p>
                      <p className="text-muted-foreground text-xs">
                        Collection Name
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Hero Banners */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Profile Banners</h2>
              <p className="text-muted-foreground text-sm">
                Wide format banners for profiles and channels
              </p>
            </div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <AspectRatio ratio={21 / 9} className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1682687220866-c856f566f1bd?w=1400&h=600&fit=crop"
                    alt="Profile banner"
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold">Farcaster Developers</h3>
                    <p className="text-sm opacity-90">
                      Building the future of decentralized social
                    </p>
                  </div>
                  <div className="absolute right-6 top-6">
                    <Button variant="secondary">Edit Banner</Button>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </section>

          {/* Mixed Aspect Ratios */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Feed Layout</h2>
              <p className="text-muted-foreground text-sm">
                Mixed content types with different aspect ratios
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Featured Cast</CardTitle>
                  <CardDescription>
                    Highlighted community content
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 px-4 pb-4">
                  <AspectRatio
                    ratio={2 / 1}
                    className="overflow-hidden rounded-md"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1682687221363-72518513620e?w=1200&h=600&fit=crop"
                      alt="Featured content"
                      className="size-full object-cover"
                    />
                  </AspectRatio>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Trending</CardTitle>
                  <CardDescription>Popular right now</CardDescription>
                </CardHeader>
                <CardContent className="p-0 px-4 pb-4">
                  <AspectRatio ratio={1} className="overflow-hidden rounded-md">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 flex size-full items-center justify-center">
                      <ImageIcon className="size-12 text-white opacity-50" />
                    </div>
                  </AspectRatio>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      );
    }

    return <MediaGallery />;
  },
};

/**
 * Complete design system reference showing all common aspect ratios and use cases.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Common Aspect Ratios */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Common Aspect Ratios</h3>
          <p className="text-muted-foreground text-sm">
            Standard ratios used in digital media and web design.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">16:9 (Widescreen)</h4>
              <Badge variant="outline">1.778</Badge>
            </div>
            <AspectRatio
              ratio={16 / 9}
              className="overflow-hidden rounded-md bg-gradient-to-br from-blue-500 to-cyan-500"
            >
              <div className="flex size-full items-center justify-center">
                <span className="text-lg font-semibold text-white">16:9</span>
              </div>
            </AspectRatio>
            <p className="text-muted-foreground text-xs">
              Standard for video content, YouTube thumbnails, and modern
              displays
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">4:3 (Traditional)</h4>
              <Badge variant="outline">1.333</Badge>
            </div>
            <AspectRatio
              ratio={4 / 3}
              className="overflow-hidden rounded-md bg-gradient-to-br from-purple-500 to-pink-500"
            >
              <div className="flex size-full items-center justify-center">
                <span className="text-lg font-semibold text-white">4:3</span>
              </div>
            </AspectRatio>
            <p className="text-muted-foreground text-xs">
              Classic television and computer monitors, still popular for
              certain content
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">1:1 (Square)</h4>
              <Badge variant="outline">1.000</Badge>
            </div>
            <AspectRatio
              ratio={1}
              className="overflow-hidden rounded-md bg-gradient-to-br from-green-500 to-emerald-500"
            >
              <div className="flex size-full items-center justify-center">
                <span className="text-lg font-semibold text-white">1:1</span>
              </div>
            </AspectRatio>
            <p className="text-muted-foreground text-xs">
              Instagram posts, profile pictures, and NFT artwork
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">21:9 (Ultrawide)</h4>
              <Badge variant="outline">2.333</Badge>
            </div>
            <AspectRatio
              ratio={21 / 9}
              className="overflow-hidden rounded-md bg-gradient-to-br from-orange-500 to-red-500"
            >
              <div className="flex size-full items-center justify-center">
                <span className="text-lg font-semibold text-white">21:9</span>
              </div>
            </AspectRatio>
            <p className="text-muted-foreground text-xs">
              Cinematic content, hero banners, and profile cover images
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">9:16 (Vertical)</h4>
              <Badge variant="outline">0.563</Badge>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <AspectRatio
                ratio={9 / 16}
                className="overflow-hidden rounded-md bg-gradient-to-br from-indigo-500 to-purple-500"
              >
                <div className="flex size-full items-center justify-center">
                  <span className="text-lg font-semibold text-white">9:16</span>
                </div>
              </AspectRatio>
            </div>
            <p className="text-muted-foreground text-xs">
              Mobile stories, TikTok, Instagram Reels, and vertical video
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">2:1 (Panoramic)</h4>
              <Badge variant="outline">2.000</Badge>
            </div>
            <AspectRatio
              ratio={2 / 1}
              className="overflow-hidden rounded-md bg-gradient-to-br from-teal-500 to-blue-500"
            >
              <div className="flex size-full items-center justify-center">
                <span className="text-lg font-semibold text-white">2:1</span>
              </div>
            </AspectRatio>
            <p className="text-muted-foreground text-xs">
              Twitter/X banners, landscape photography, and wide layouts
            </p>
          </div>
        </div>
      </section>

      {/* With Images */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Images</h3>
          <p className="text-muted-foreground text-sm">
            Aspect ratio preserves image proportions while controlling container
            size.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=450&fit=crop"
                alt="Landscape 16:9"
                className="size-full object-cover"
              />
            </AspectRatio>
            <p className="text-center text-xs text-muted-foreground">
              16:9 Landscape
            </p>
          </div>

          <div className="space-y-2">
            <AspectRatio ratio={1} className="overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1682687221363-72518513620e?w=800&h=800&fit=crop"
                alt="Square 1:1"
                className="size-full object-cover"
              />
            </AspectRatio>
            <p className="text-center text-xs text-muted-foreground">
              1:1 Square
            </p>
          </div>

          <div className="space-y-2">
            <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&h=600&fit=crop"
                alt="Traditional 4:3"
                className="size-full object-cover"
              />
            </AspectRatio>
            <p className="text-center text-xs text-muted-foreground">
              4:3 Traditional
            </p>
          </div>
        </div>
      </section>

      {/* With Custom Content */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Custom Content</h3>
          <p className="text-muted-foreground text-sm">
            Aspect ratio works with any content, not just images.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <AspectRatio
            ratio={16 / 9}
            className="bg-muted flex items-center justify-center rounded-md"
          >
            <div className="text-center">
              <ImageIcon className="text-muted-foreground mx-auto mb-2 size-12" />
              <p className="text-sm font-medium">Upload Image</p>
              <p className="text-muted-foreground text-xs">
                16:9 ratio recommended
              </p>
            </div>
          </AspectRatio>

          <AspectRatio
            ratio={16 / 9}
            className="bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center rounded-md"
          >
            <div className="text-center text-white">
              <PlayIcon className="mx-auto mb-2 size-12 fill-current" />
              <p className="text-sm font-medium">Video Player</p>
              <p className="text-xs opacity-90">Click to play</p>
            </div>
          </AspectRatio>
        </div>
      </section>

      {/* Responsive Behavior */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Responsive Behavior</h3>
          <p className="text-muted-foreground text-sm">
            AspectRatio maintains proportions across different container widths.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-full">
            <AspectRatio
              ratio={16 / 9}
              className="overflow-hidden rounded-md bg-gradient-to-br from-amber-500 to-orange-500"
            >
              <div className="flex size-full items-center justify-center text-white">
                <span className="text-sm font-medium">100% width</span>
              </div>
            </AspectRatio>
          </div>
          <div className="w-3/4">
            <AspectRatio
              ratio={16 / 9}
              className="overflow-hidden rounded-md bg-gradient-to-br from-amber-500 to-orange-500"
            >
              <div className="flex size-full items-center justify-center text-white">
                <span className="text-sm font-medium">75% width</span>
              </div>
            </AspectRatio>
          </div>
          <div className="w-1/2">
            <AspectRatio
              ratio={16 / 9}
              className="overflow-hidden rounded-md bg-gradient-to-br from-amber-500 to-orange-500"
            >
              <div className="flex size-full items-center justify-center text-white">
                <span className="text-sm font-medium">50% width</span>
              </div>
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Object Fit Comparison */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Object Fit Comparison</h3>
          <p className="text-muted-foreground text-sm">
            Different object-fit values affect how images fill the aspect ratio
            container.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <AspectRatio ratio={1} className="overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=450&fit=crop"
                alt="Cover fit"
                className="size-full object-cover"
              />
            </AspectRatio>
            <p className="text-center text-sm font-medium">object-cover</p>
            <p className="text-muted-foreground text-center text-xs">
              Fills container, may crop
            </p>
          </div>

          <div className="space-y-2">
            <AspectRatio
              ratio={1}
              className="bg-muted overflow-hidden rounded-md"
            >
              <img
                src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=450&fit=crop"
                alt="Contain fit"
                className="size-full object-contain"
              />
            </AspectRatio>
            <p className="text-center text-sm font-medium">object-contain</p>
            <p className="text-muted-foreground text-center text-xs">
              Fits fully, may letterbox
            </p>
          </div>

          <div className="space-y-2">
            <AspectRatio ratio={1} className="overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=450&fit=crop"
                alt="Fill fit"
                className="size-full object-fill"
              />
            </AspectRatio>
            <p className="text-center text-sm font-medium">object-fill</p>
            <p className="text-muted-foreground text-center text-xs">
              Stretches to fill
            </p>
          </div>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing aspect ratio props.
 */
export const Interactive: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <img
        src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=450&fit=crop"
        alt="Demo image"
        className="size-full object-cover"
      />
    ),
  },
  render: (args) => (
    <div className="w-[400px]">
      <AspectRatio {...args} />
    </div>
  ),
};
