import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import {
  CalendarIcon,
  HelpCircleIcon,
  InfoIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "../popover";

const meta: Meta<typeof Popover> = {
  title: "Components/Overlays & Dialogs/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  args: {
    onOpenChange: fn(),
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "Whether the popover is open by default",
    },
    open: {
      control: "boolean",
      description: "Controlled open state",
    },
    onOpenChange: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Realistic Neynar Dashboard scenarios demonstrating quick info popovers and mini forms.
 * Shows common use cases like user profile previews, filter forms, and contextual help.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function DashboardPopovers() {
      const [filterOpen, setFilterOpen] = useState(false);
      const [dateRange, setDateRange] = useState("last-7-days");
      const [minCasts, setMinCasts] = useState("10");

      return (
        <div className="w-full max-w-4xl space-y-12">
          {/* User Profile Preview */}
          <section className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">User Profile Preview</h3>
              <p className="text-muted-foreground text-sm">
                Hover or click on a user's avatar to see their profile summary
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">Cast by</span>
              <Popover>
                <PopoverTrigger>
                  <button className="hover:bg-accent flex items-center gap-2 rounded-md p-2 transition-colors">
                    <div className="bg-primary/10 text-primary flex size-8 items-center justify-center rounded-full">
                      <UserIcon className="size-4" />
                    </div>
                    <span className="font-medium">vitalik.eth</span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-80" side="bottom" align="start">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-full">
                        <UserIcon className="size-6" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">vitalik.eth</p>
                        <p className="text-muted-foreground text-sm">
                          @vitalik
                        </p>
                      </div>
                      <Button size="sm">Follow</Button>
                    </div>
                    <p className="text-sm">
                      Creator of Ethereum. Interested in crypto, mechanism
                      design, and more.
                    </p>
                    <div className="flex gap-4 text-sm">
                      <div>
                        <span className="font-semibold">1.2M</span>{" "}
                        <span className="text-muted-foreground">Followers</span>
                      </div>
                      <div>
                        <span className="font-semibold">856</span>{" "}
                        <span className="text-muted-foreground">Following</span>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </section>

          {/* Advanced Filters Form */}
          <section className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Inline Filter Form</h3>
              <p className="text-muted-foreground text-sm">
                Complex filtering UI without leaving the current view
              </p>
            </div>
            <div className="border-border bg-card rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Cast Analytics</p>
                  <p className="text-muted-foreground text-sm">
                    {dateRange === "last-7-days" && "Last 7 days"}
                    {dateRange === "last-30-days" && "Last 30 days"}
                    {dateRange === "all-time" && "All time"} · Min {minCasts}{" "}
                    casts
                  </p>
                </div>
                <Popover open={filterOpen} onOpenChange={setFilterOpen}>
                  <PopoverTrigger
                    render={
                      <Button variant="outline" size="sm">
                        <SettingsIcon className="mr-2 size-4" />
                        Filters
                      </Button>
                    }
                  />
                  <PopoverContent className="w-80" side="bottom" align="end">
                    <PopoverHeader>
                      <PopoverTitle>Filter Options</PopoverTitle>
                      <PopoverDescription>
                        Customize the data displayed in your analytics
                      </PopoverDescription>
                    </PopoverHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="date-range">Date Range</Label>
                        <select
                          id="date-range"
                          className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                          value={dateRange}
                          onChange={(e) => setDateRange(e.target.value)}
                        >
                          <option value="last-7-days">Last 7 days</option>
                          <option value="last-30-days">Last 30 days</option>
                          <option value="all-time">All time</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="min-casts">Minimum Casts</Label>
                        <Input
                          id="min-casts"
                          type="number"
                          placeholder="10"
                          value={minCasts}
                          onChange={(e) => setMinCasts(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setFilterOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button size="sm" onClick={() => setFilterOpen(false)}>
                          Apply Filters
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </section>

          {/* Contextual Help */}
          <section className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Contextual Help</h3>
              <p className="text-muted-foreground text-sm">
                Inline documentation without cluttering the interface
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Label htmlFor="api-key">API Key</Label>
                <Popover>
                  <PopoverTrigger>
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      <HelpCircleIcon className="size-4" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80" side="right">
                    <PopoverHeader>
                      <PopoverTitle>About API Keys</PopoverTitle>
                    </PopoverHeader>
                    <div className="space-y-2 text-sm">
                      <p>
                        API keys are used to authenticate requests to the Neynar
                        API. Keep them secure and never share them publicly.
                      </p>
                      <ul className="text-muted-foreground ml-4 list-disc space-y-1">
                        <li>Production keys have higher rate limits</li>
                        <li>Development keys are for testing only</li>
                        <li>Regenerate keys if compromised</li>
                      </ul>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <Input
                id="api-key"
                type="password"
                placeholder="neynar_sk_****_****_****"
                className="max-w-md"
              />
            </div>
          </section>

          {/* Quick Action Menu */}
          <section className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Quick Info Tooltip</h3>
              <p className="text-muted-foreground text-sm">
                Rich information tooltips with icons and links
              </p>
            </div>
            <div className="border-border bg-card flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <CalendarIcon className="text-muted-foreground size-5" />
                <div>
                  <p className="font-medium">Next billing date</p>
                  <p className="text-muted-foreground text-sm">
                    January 15, 2025
                  </p>
                </div>
              </div>
              <Popover>
                <PopoverTrigger
                  render={
                    <Button variant="ghost" size="icon-sm">
                      <InfoIcon className="size-4" />
                    </Button>
                  }
                />
                <PopoverContent className="w-80" side="left">
                  <PopoverHeader>
                    <PopoverTitle>Billing Information</PopoverTitle>
                    <PopoverDescription>
                      Your subscription details and payment schedule
                    </PopoverDescription>
                  </PopoverHeader>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Current plan
                      </span>
                      <span className="font-medium">Pro ($99/mo)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Billing cycle
                      </span>
                      <span className="font-medium">Monthly</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Next charge</span>
                      <span className="font-medium">$99.00</span>
                    </div>
                    <div className="border-t pt-3">
                      <Button variant="link" size="sm" className="h-auto p-0">
                        View billing history →
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </section>
        </div>
      );
    }

    return <DashboardPopovers />;
  },
};

/**
 * Complete design system reference showing all popover placements and variants.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Placement Options */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Placement Options</h3>
          <p className="text-muted-foreground text-sm">
            Popovers can be positioned on any side of the trigger element.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Popover>
            <PopoverTrigger render={<Button variant="outline">Top</Button>} />
            <PopoverContent side="top">
              <PopoverTitle>Top Placement</PopoverTitle>
              <p className="text-muted-foreground text-sm">
                Popover appears above the trigger
              </p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger render={<Button variant="outline">Right</Button>} />
            <PopoverContent side="right">
              <PopoverTitle>Right Placement</PopoverTitle>
              <p className="text-muted-foreground text-sm">
                Popover appears to the right
              </p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger
              render={<Button variant="outline">Bottom (Default)</Button>}
            />
            <PopoverContent side="bottom">
              <PopoverTitle>Bottom Placement</PopoverTitle>
              <p className="text-muted-foreground text-sm">
                Popover appears below the trigger
              </p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger render={<Button variant="outline">Left</Button>} />
            <PopoverContent side="left">
              <PopoverTitle>Left Placement</PopoverTitle>
              <p className="text-muted-foreground text-sm">
                Popover appears to the left
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </section>

      {/* Alignment Options */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Alignment Options</h3>
          <p className="text-muted-foreground text-sm">
            Control how the popover aligns with the trigger element.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Popover>
            <PopoverTrigger
              render={<Button variant="outline">Align Start</Button>}
            />
            <PopoverContent align="start">
              <PopoverTitle>Start Alignment</PopoverTitle>
              <p className="text-muted-foreground text-sm">
                Aligned to the start edge
              </p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger
              render={<Button variant="outline">Align Center (Default)</Button>}
            />
            <PopoverContent align="center">
              <PopoverTitle>Center Alignment</PopoverTitle>
              <p className="text-muted-foreground text-sm">
                Centered on trigger
              </p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger
              render={<Button variant="outline">Align End</Button>}
            />
            <PopoverContent align="end">
              <PopoverTitle>End Alignment</PopoverTitle>
              <p className="text-muted-foreground text-sm">
                Aligned to the end edge
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </section>

      {/* Content Variations */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Content Variations</h3>
          <p className="text-muted-foreground text-sm">
            Different types of content and layouts within popovers.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-4">
          {/* Simple Text */}
          <Popover>
            <PopoverTrigger
              render={<Button variant="outline">Simple Text</Button>}
            />
            <PopoverContent>
              <p className="text-sm">
                A simple popover with just text content and no header.
              </p>
            </PopoverContent>
          </Popover>

          {/* With Header */}
          <Popover>
            <PopoverTrigger
              render={<Button variant="outline">With Header</Button>}
            />
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>Popover Title</PopoverTitle>
                <PopoverDescription>
                  Optional description text
                </PopoverDescription>
              </PopoverHeader>
              <p className="text-sm">Content goes here.</p>
            </PopoverContent>
          </Popover>

          {/* With Form */}
          <Popover>
            <PopoverTrigger
              render={<Button variant="outline">With Form</Button>}
            />
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>Edit Profile</PopoverTitle>
              </PopoverHeader>
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    Cancel
                  </Button>
                  <Button size="sm">Save</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* With List */}
          <Popover>
            <PopoverTrigger
              render={<Button variant="outline">With List</Button>}
            />
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>Recent Activity</PopoverTitle>
              </PopoverHeader>
              <ul className="space-y-2 text-sm">
                <li className="border-border flex items-center gap-2 border-b pb-2">
                  <div className="bg-primary/10 size-2 rounded-full" />
                  <span>New cast published</span>
                </li>
                <li className="border-border flex items-center gap-2 border-b pb-2">
                  <div className="bg-primary/10 size-2 rounded-full" />
                  <span>Profile updated</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-primary/10 size-2 rounded-full" />
                  <span>Settings changed</span>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </section>

      {/* Width Variations */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Width Variations</h3>
          <p className="text-muted-foreground text-sm">
            Popovers can be sized to fit different content needs.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-4">
          <Popover>
            <PopoverTrigger
              render={<Button variant="outline">Small (w-56)</Button>}
            />
            <PopoverContent className="w-56">
              <PopoverTitle>Small Popover</PopoverTitle>
              <p className="text-muted-foreground text-sm">
                Compact width for simple content.
              </p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger
              render={<Button variant="outline">Default (w-72)</Button>}
            />
            <PopoverContent className="w-72">
              <PopoverTitle>Default Popover</PopoverTitle>
              <p className="text-muted-foreground text-sm">
                Standard width works for most use cases with moderate content.
              </p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger
              render={<Button variant="outline">Large (w-96)</Button>}
            />
            <PopoverContent className="w-96">
              <PopoverTitle>Large Popover</PopoverTitle>
              <p className="text-muted-foreground text-sm">
                Wider popovers can accommodate more complex layouts, forms, or
                detailed information that needs more horizontal space.
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </section>
    </div>
  ),
};

/**
 * Frosted popover effect with backdrop blur over colorful backgrounds.
 * Popovers use 75% opacity and backdrop-blur for a frosted glass appearance.
 */
export const Frosted: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-8">
      <div>
        <h3 className="text-lg font-semibold">Frosted Surface Effect</h3>
        <p className="text-muted-foreground text-sm">
          Popovers use transparent backgrounds with backdrop blur for a frosted
          glass look. Customize with{" "}
          <code className="bg-muted px-1 rounded">--surface-blur</code> and{" "}
          <code className="bg-muted px-1 rounded">--popover</code> tokens.
        </p>
      </div>

      {/* Gradient background */}
      <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
        <div className="absolute inset-0 bg-white/10" />
        <div className="relative flex items-center justify-center gap-4">
          <Popover defaultOpen>
            <PopoverTrigger
              render={<Button variant="secondary">Click for Popover</Button>}
            />
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>Frosted Glass</PopoverTitle>
                <PopoverDescription>
                  See through to the gradient behind
                </PopoverDescription>
              </PopoverHeader>
              <p className="text-sm">
                The popover's 75% opacity background combined with backdrop-blur
                creates a beautiful frosted glass effect.
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Cyan/Blue gradient */}
      <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="relative flex items-center justify-center gap-4">
          <Popover defaultOpen>
            <PopoverTrigger
              render={<Button variant="secondary">User Info</Button>}
            />
            <PopoverContent className="w-80">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 backdrop-blur-sm text-white flex size-10 items-center justify-center rounded-full">
                    <UserIcon className="size-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">vitalik.eth</p>
                    <p className="text-muted-foreground text-sm">@vitalik</p>
                  </div>
                  <Button size="sm">Follow</Button>
                </div>
                <p className="text-sm">
                  Creator of Ethereum. Interested in crypto, mechanism design,
                  and more.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Dark pattern background */}
      <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-white/5" />
        <div className="relative flex items-center justify-center">
          <Popover defaultOpen>
            <PopoverTrigger
              render={
                <Button variant="secondary">
                  <SettingsIcon className="mr-2 size-4" />
                  Settings
                </Button>
              }
            />
            <PopoverContent className="w-72">
              <PopoverHeader>
                <PopoverTitle>Quick Settings</PopoverTitle>
                <PopoverDescription>Adjust your preferences</PopoverDescription>
              </PopoverHeader>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Notifications</span>
                  <span className="font-medium">Enabled</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Theme</span>
                  <span className="font-medium">System</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Language</span>
                  <span className="font-medium">English</span>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  ),
};

/**
 * Interactive playground for testing popover props and behavior.
 */
export const Interactive: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger
        render={<Button variant="outline">Open Popover</Button>}
      />
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverDescription>
            This is a description of what this popover contains.
          </PopoverDescription>
        </PopoverHeader>
        <div className="space-y-2">
          <p className="text-sm">
            You can put any content here, including forms, links, or rich media.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  args: {
    defaultOpen: false,
  },
};
