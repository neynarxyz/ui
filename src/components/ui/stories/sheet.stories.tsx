import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import {
  BellIcon,
  CheckIcon,
  FilterIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
  SettingsIcon,
  TrendingUpIcon,
  UserIcon,
  UsersIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import { RadioGroup, RadioGroupItem } from "../radio-group";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import { Switch } from "../switch";

const meta: Meta<typeof Sheet> = {
  title: "Components/Overlays & Dialogs/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
  },
  args: {
    onOpenChange: fn(),
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "Whether the sheet is open by default",
    },
    open: {
      control: "boolean",
      description: "Controlled open state",
    },
    onOpenChange: {
      description: "Callback when open state changes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

/**
 * Mobile Navigation & Filters - Realistic scenarios showing sheets in context
 * of the Neynar Dashboard for mobile navigation and data filtering.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function MobileNavigation() {
      const [activeNav, setActiveNav] = useState("home");

      return (
        <div className="w-full max-w-xl space-y-6">
          {/* Mobile Header */}
          <div className="bg-card border-border rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sheet>
                  <SheetTrigger render={<Button variant="ghost" size="icon" />}>
                    <MenuIcon />
                  </SheetTrigger>
                  <SheetContent side="left" className="p-0">
                    <div className="flex h-full flex-col">
                      <SheetHeader className="border-b p-6">
                        <SheetTitle>Neynar Dashboard</SheetTitle>
                        <SheetDescription>
                          Navigate your Farcaster analytics and settings
                        </SheetDescription>
                      </SheetHeader>

                      <nav className="flex-1 space-y-1 p-4">
                        {[
                          { id: "home", label: "Home", icon: HomeIcon },
                          {
                            id: "analytics",
                            label: "Analytics",
                            icon: TrendingUpIcon,
                          },
                          { id: "users", label: "Users", icon: UsersIcon },
                          {
                            id: "notifications",
                            label: "Notifications",
                            icon: BellIcon,
                          },
                          {
                            id: "settings",
                            label: "Settings",
                            icon: SettingsIcon,
                          },
                        ].map((item) => (
                          <button
                            key={item.id}
                            onClick={() => setActiveNav(item.id)}
                            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                              activeNav === item.id
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            <item.icon className="size-5" />
                            {item.label}
                          </button>
                        ))}
                      </nav>

                      <div className="border-t p-4">
                        <div className="flex items-center gap-3 rounded-lg p-3 bg-muted">
                          <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-full">
                            <UserIcon className="size-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="truncate font-medium text-sm">
                              @dwr.eth
                            </p>
                            <p className="text-muted-foreground truncate text-xs">
                              dan@farcaster.xyz
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                <h1 className="text-lg font-semibold">Dashboard</h1>
              </div>
              <Button variant="ghost" size="icon">
                <BellIcon />
              </Button>
            </div>
          </div>

          {/* Filter Panel */}
          <div className="bg-card border-border rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold">User Analytics</h2>
                <p className="text-muted-foreground text-sm">
                  1,234 users found
                </p>
              </div>
              <Sheet>
                <SheetTrigger render={<Button variant="outline" size="sm" />}>
                  <FilterIcon data-icon="inline-start" />
                  Filters
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Filter Users</SheetTitle>
                    <SheetDescription>
                      Refine your user list with advanced filters
                    </SheetDescription>
                  </SheetHeader>

                  <div className="space-y-6 p-4">
                    {/* Search */}
                    <div className="space-y-2">
                      <Label htmlFor="search">Search</Label>
                      <div className="relative">
                        <SearchIcon className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2" />
                        <Input
                          id="search"
                          placeholder="Search by username or FID"
                          className="pl-9"
                        />
                      </div>
                    </div>

                    {/* Activity Status */}
                    <div className="space-y-3">
                      <Label>Activity Status</Label>
                      <RadioGroup defaultValue="all">
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="all" id="all" />
                          <Label htmlFor="all" className="font-normal">
                            All Users
                          </Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="active" id="active" />
                          <Label htmlFor="active" className="font-normal">
                            Active (24h)
                          </Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="inactive" id="inactive" />
                          <Label htmlFor="inactive" className="font-normal">
                            Inactive (7d+)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Verification */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Verified Only</Label>
                        <p className="text-muted-foreground text-xs">
                          Show only verified accounts
                        </p>
                      </div>
                      <Switch />
                    </div>

                    {/* Power Badge */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Power Badge</Label>
                        <p className="text-muted-foreground text-xs">
                          Filter by power badge holders
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>

                  <SheetFooter>
                    <SheetClose render={<Button variant="outline" />}>
                      Cancel
                    </SheetClose>
                    <Button>Apply Filters</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>

            <div className="mt-4 border-t pt-4">
              <p className="text-muted-foreground text-sm">
                Active filters:{" "}
                <span className="text-foreground font-medium">None</span>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return <MobileNavigation />;
  },
};

/**
 * Complete design system reference showing all sheet variants and positions.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Side Positions */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Side Positions</h3>
          <p className="text-muted-foreground text-sm">
            Sheets can slide in from any edge of the screen.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>
              Left Side
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Left Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the left.
                </SheetDescription>
              </SheetHeader>
              <div className="py-6">
                <p className="text-sm">
                  Perfect for navigation menus and hierarchical content.
                </p>
              </div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>
              Right Side
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Right Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the right.
                </SheetDescription>
              </SheetHeader>
              <div className="py-6">
                <p className="text-sm">
                  Ideal for filters, settings, and contextual panels.
                </p>
              </div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>
              Top Side
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Top Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the top.
                </SheetDescription>
              </SheetHeader>
              <div className="py-6">
                <p className="text-sm">
                  Great for notifications and announcements.
                </p>
              </div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>
              Bottom Side
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Bottom Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the bottom.
                </SheetDescription>
              </SheetHeader>
              <div className="py-6">
                <p className="text-sm">
                  Popular for mobile action sheets and quick actions.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </section>

      {/* With Footer */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Footer Actions</h3>
          <p className="text-muted-foreground text-sm">
            Sheets with action buttons in the footer for form submissions.
          </p>
        </div>
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Edit Profile
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 py-6">
              <div className="space-y-2">
                <Label htmlFor="name">Display Name</Label>
                <Input id="name" defaultValue="Dan Romero" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@dwr.eth" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" defaultValue="Building Farcaster" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose render={<Button variant="outline" />}>
                Cancel
              </SheetClose>
              <Button>Save Changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </section>

      {/* Without Close Button */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Custom Close Handling</h3>
          <p className="text-muted-foreground text-sm">
            Sheets can hide the default close button for custom workflows.
          </p>
        </div>
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Confirmation Required
          </SheetTrigger>
          <SheetContent showCloseButton={false}>
            <SheetHeader>
              <SheetTitle>Confirm Action</SheetTitle>
              <SheetDescription>
                This action requires confirmation. You must choose an option to
                continue.
              </SheetDescription>
            </SheetHeader>
            <div className="py-6">
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm">
                  Are you sure you want to delete this item? This action cannot
                  be undone.
                </p>
              </div>
            </div>
            <SheetFooter>
              <SheetClose render={<Button variant="outline" />}>
                <XIcon data-icon="inline-start" />
                Cancel
              </SheetClose>
              <SheetClose render={<Button variant="destructive" />}>
                <CheckIcon data-icon="inline-start" />
                Confirm Delete
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </section>

      {/* Nested Content */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Rich Content</h3>
          <p className="text-muted-foreground text-sm">
            Sheets can contain complex layouts with lists, forms, and mixed
            content.
          </p>
        </div>
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Notifications
          </SheetTrigger>
          <SheetContent className="p-0">
            <SheetHeader className="border-b p-6">
              <SheetTitle>Notifications</SheetTitle>
              <SheetDescription>
                You have 3 unread notifications
              </SheetDescription>
            </SheetHeader>

            <div className="divide-y">
              {[
                {
                  title: "New follower",
                  description: "@alice started following you",
                  time: "2m ago",
                },
                {
                  title: "Cast liked",
                  description: "@bob liked your cast about Farcaster",
                  time: "1h ago",
                },
                {
                  title: "Mention",
                  description: "@charlie mentioned you in a cast",
                  time: "3h ago",
                },
              ].map((notification, index) => (
                <div
                  key={index}
                  className="hover:bg-muted p-4 transition-colors"
                >
                  <div className="flex gap-3">
                    <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-full">
                      <BellIcon className="size-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">
                        {notification.title}
                      </p>
                      <p className="text-muted-foreground truncate text-sm">
                        {notification.description}
                      </p>
                      <p className="text-muted-foreground mt-1 text-xs">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t p-4">
              <Button variant="outline" className="w-full">
                Mark All as Read
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </section>
    </div>
  ),
};

/**
 * Frosted effect demonstration - Sheets use a translucent background (75% opacity)
 * with backdrop blur (12px) creating a frosted glass effect. This story shows
 * how the sheet appears over colorful content.
 */
export const Frosted: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Colorful busy background */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-4">
        <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />
        <div className="rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500" />
        <div className="rounded-lg bg-gradient-to-br from-green-500 to-emerald-500" />
        <div className="rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500" />
        <div className="rounded-lg bg-gradient-to-br from-red-500 to-rose-500" />
        <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500" />
        <div className="rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500" />
        <div className="rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500" />
        <div className="rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-500" />
        <div className="rounded-lg bg-gradient-to-br from-lime-500 to-green-500" />
        <div className="rounded-lg bg-gradient-to-br from-sky-500 to-blue-500" />
        <div className="rounded-lg bg-gradient-to-br from-orange-500 to-red-500" />
        <div className="rounded-lg bg-gradient-to-br from-violet-500 to-purple-500" />
        <div className="rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500" />
        <div className="rounded-lg bg-gradient-to-br from-rose-500 to-pink-500" />
        <div className="rounded-lg bg-gradient-to-br from-emerald-500 to-lime-500" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center gap-4 p-8">
        <Sheet>
          <SheetTrigger render={<Button />}>Open Sheet</SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Frosted Sheet</SheetTitle>
              <SheetDescription>
                Notice the frosted glass effect - you can see the colorful
                background blurred through the sheet panel.
              </SheetDescription>
            </SheetHeader>
            <div className="p-4">
              <p className="text-sm">
                The sheet uses a translucent background with backdrop blur,
                creating a modern frosted glass appearance that adapts to
                whatever content is behind it.
              </p>
            </div>
            <SheetFooter>
              <SheetClose render={<Button variant="outline" />}>
                Cancel
              </SheetClose>
              <Button>Save Changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  ),
};

/**
 * Interactive playground for testing sheet props.
 */
export const Interactive: Story = {
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger render={<Button variant="outline" />}>
        Open Sheet
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This is a description of the sheet content. Use sheets for slide-in
            panels and mobile navigation.
          </SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <p className="text-sm">
            Sheet content goes here. This component is perfect for mobile
            navigation menus, filter panels, and side drawers.
          </p>
        </div>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  args: {
    defaultOpen: false,
  },
};
