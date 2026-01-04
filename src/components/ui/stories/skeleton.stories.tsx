import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "../skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Feedback & Status/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

/**
 * Loading states for various Neynar Dashboard components including API data,
 * user profiles, casts, and analytics data.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    return (
      <div className="w-full max-w-4xl space-y-12">
        {/* User Profile Card Loading */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">User Profile Card</h3>
            <p className="text-muted-foreground text-sm">
              Loading state for user profile information
            </p>
          </div>
          <div className="border-border bg-card rounded-lg border p-6">
            <div className="flex items-center gap-4">
              <Skeleton className="size-16 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="mt-4 flex gap-2">
              <Skeleton className="h-9 w-20" />
              <Skeleton className="h-9 w-20" />
            </div>
          </div>
        </section>

        {/* Cast Feed Loading */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Cast Feed</h3>
            <p className="text-muted-foreground text-sm">
              Loading state for Farcaster cast feed
            </p>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border-border bg-card rounded-lg border p-4"
              >
                <div className="flex gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                      <Skeleton className="h-4 w-4/6" />
                    </div>
                    <div className="flex gap-4">
                      <Skeleton className="h-8 w-16" />
                      <Skeleton className="h-8 w-16" />
                      <Skeleton className="h-8 w-16" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* API Analytics Dashboard */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">API Analytics</h3>
            <p className="text-muted-foreground text-sm">
              Loading state for API usage statistics
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border-border bg-card rounded-lg border p-4"
              >
                <Skeleton className="mb-2 h-4 w-24" />
                <Skeleton className="mb-4 h-8 w-16" />
                <Skeleton className="h-2 w-full" />
              </div>
            ))}
          </div>
          <div className="border-border bg-card rounded-lg border p-6">
            <Skeleton className="mb-4 h-6 w-32" />
            <Skeleton className="h-64 w-full" />
          </div>
        </section>

        {/* API Key List */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">API Key List</h3>
            <p className="text-muted-foreground text-sm">
              Loading state for API key management
            </p>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border-border bg-card flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-md" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-48" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-8 w-20" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Table Loading */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Data Table</h3>
            <p className="text-muted-foreground text-sm">
              Loading state for tabular data
            </p>
          </div>
          <div className="border-border bg-card rounded-lg border">
            <div className="border-b p-4">
              <div className="flex items-center justify-between">
                <Skeleton className="h-8 w-64" />
                <Skeleton className="h-9 w-24" />
              </div>
            </div>
            <div className="divide-y">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4 p-4">
                  <Skeleton className="size-8 rounded" />
                  <Skeleton className="h-4 flex-1" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="size-8 rounded" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  },
};

/**
 * Complete design system reference showing all skeleton shapes and sizes.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Basic Shapes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Basic Shapes</h3>
          <p className="text-muted-foreground text-sm">
            Common skeleton shapes for different content types.
          </p>
        </div>
        <div className="space-y-3">
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Text Line</p>
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Short Text</p>
            <Skeleton className="h-4 w-48" />
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Heading</p>
            <Skeleton className="h-6 w-64" />
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Button</p>
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
      </section>

      {/* Circular Skeletons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Circular Skeletons</h3>
          <p className="text-muted-foreground text-sm">
            Round shapes for avatars and icons.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Small</p>
            <Skeleton className="size-8 rounded-full" />
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Medium</p>
            <Skeleton className="size-12 rounded-full" />
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Large</p>
            <Skeleton className="size-16 rounded-full" />
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Extra Large</p>
            <Skeleton className="size-24 rounded-full" />
          </div>
        </div>
      </section>

      {/* Card Skeletons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Card Skeletons</h3>
          <p className="text-muted-foreground text-sm">
            Common card loading patterns.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border-border bg-card rounded-lg border p-4">
            <Skeleton className="mb-4 h-32 w-full" />
            <Skeleton className="mb-2 h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-5/6" />
          </div>
          <div className="border-border bg-card rounded-lg border p-4">
            <div className="mb-4 flex items-center gap-3">
              <Skeleton className="size-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-4/5" />
          </div>
        </div>
      </section>

      {/* List Items */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">List Items</h3>
          <p className="text-muted-foreground text-sm">
            Loading states for list-based layouts.
          </p>
        </div>
        <div className="border-border bg-card divide-y rounded-lg border">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 p-4">
              <Skeleton className="size-10 rounded-md" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-3 w-32" />
              </div>
              <Skeleton className="h-8 w-20" />
            </div>
          ))}
        </div>
      </section>

      {/* Paragraph Text */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Paragraph Text</h3>
          <p className="text-muted-foreground text-sm">
            Multi-line text loading patterns.
          </p>
        </div>
        <div className="border-border bg-card rounded-lg border p-6">
          <Skeleton className="mb-4 h-6 w-64" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/6" />
          </div>
        </div>
      </section>

      {/* Image Placeholders */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Image Placeholders</h3>
          <p className="text-muted-foreground text-sm">
            Loading states for images and media.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Skeleton className="aspect-video w-full" />
          <Skeleton className="aspect-square w-full" />
          <Skeleton className="aspect-[4/3] w-full" />
        </div>
      </section>

      {/* Custom Sizes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Height Variants</h3>
          <p className="text-muted-foreground text-sm">
            Different heights for various use cases.
          </p>
        </div>
        <div className="space-y-3">
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing skeleton props.
 */
export const Interactive: Story = {
  args: {
    className: "h-12 w-full",
  },
};
