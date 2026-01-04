import type { Meta, StoryObj } from "@storybook/react";
import {
  BellIcon,
  HomeIcon,
  MailIcon,
  MenuIcon,
  MessageSquareIcon,
  SettingsIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../drawer";
import { Input } from "../input";
import { Label } from "../label";
import { Switch } from "../switch";

const meta: Meta<typeof Drawer> = {
  title: "Components/Overlays & Dialogs/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Core props - shown with descriptions
    direction: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Edge from which the drawer slides in",
    },
    open: {
      control: "boolean",
      description: "Controlled open state",
    },
    defaultOpen: {
      control: "boolean",
      description: "Initial open state (uncontrolled)",
    },
    modal: {
      control: "boolean",
      description: "Whether to block interaction with content behind",
    },
    dismissible: {
      control: "boolean",
      description:
        "Whether drawer can be closed by clicking outside or dragging",
    },
    shouldScaleBackground: {
      control: "boolean",
      description: "Whether to scale background when open (iOS-style effect)",
    },
    handleOnly: {
      control: "boolean",
      description: "Only allow dragging from the handle, not the entire drawer",
    },
    // Hide event handlers (go to Actions panel)
    onOpenChange: { table: { disable: true } },
    onDrag: { table: { disable: true } },
    onRelease: { table: { disable: true } },
    onClose: { table: { disable: true } },
    onAnimationEnd: { table: { disable: true } },
    // Hide internal Vaul props
    activeSnapPoint: { table: { disable: true } },
    setActiveSnapPoint: { table: { disable: true } },
    closeThreshold: { table: { disable: true } },
    noBodyStyles: { table: { disable: true } },
    setBackgroundColorOnScale: { table: { disable: true } },
    scrollLockTimeout: { table: { disable: true } },
    fixed: { table: { disable: true } },
    nested: { table: { disable: true } },
    disablePreventScroll: { table: { disable: true } },
    repositionInputs: { table: { disable: true } },
    snapToSequentialPoint: { table: { disable: true } },
    container: { table: { disable: true } },
    preventScrollRestoration: { table: { disable: true } },
    autoFocus: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

/**
 * Settings Panel - Realistic scenarios showing drawers in Neynar Dashboard context.
 * Demonstrates notification settings panel, mobile menu, and filter drawer patterns.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function NotificationSettingsPanel() {
      const [emailNotifications, setEmailNotifications] = useState(true);
      const [pushNotifications, setPushNotifications] = useState(false);
      const [mentions, setMentions] = useState(true);
      const [replies, setReplies] = useState(true);
      const [likes, setLikes] = useState(false);

      return (
        <div className="w-full max-w-4xl space-y-8">
          <div>
            <h2 className="text-lg font-semibold">Drawer Examples</h2>
            <p className="text-muted-foreground text-sm">
              Realistic drawer patterns for settings panels, mobile navigation,
              and filters.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Settings Panel - Right Drawer */}
            <Drawer direction="right">
              <DrawerTrigger>
                <Button variant="outline">
                  <SettingsIcon data-icon="inline-start" />
                  Notification Settings
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Notification Settings</DrawerTitle>
                  <DrawerDescription>
                    Manage how you receive notifications from Neynar.
                  </DrawerDescription>
                </DrawerHeader>

                <div className="flex-1 space-y-6 overflow-y-auto p-4">
                  {/* Notification Channels */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Channels</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label
                            htmlFor="email-notifications"
                            className="font-normal"
                          >
                            Email Notifications
                          </Label>
                          <p className="text-muted-foreground text-xs">
                            Receive updates via email
                          </p>
                        </div>
                        <Switch
                          id="email-notifications"
                          checked={emailNotifications}
                          onCheckedChange={setEmailNotifications}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label
                            htmlFor="push-notifications"
                            className="font-normal"
                          >
                            Push Notifications
                          </Label>
                          <p className="text-muted-foreground text-xs">
                            Receive browser push notifications
                          </p>
                        </div>
                        <Switch
                          id="push-notifications"
                          checked={pushNotifications}
                          onCheckedChange={setPushNotifications}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Notification Types */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="mentions" className="font-normal">
                            Mentions
                          </Label>
                          <p className="text-muted-foreground text-xs">
                            When someone mentions you
                          </p>
                        </div>
                        <Switch
                          id="mentions"
                          checked={mentions}
                          onCheckedChange={setMentions}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="replies" className="font-normal">
                            Replies
                          </Label>
                          <p className="text-muted-foreground text-xs">
                            When someone replies to your casts
                          </p>
                        </div>
                        <Switch
                          id="replies"
                          checked={replies}
                          onCheckedChange={setReplies}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="likes" className="font-normal">
                            Likes
                          </Label>
                          <p className="text-muted-foreground text-xs">
                            When someone likes your casts
                          </p>
                        </div>
                        <Switch
                          id="likes"
                          checked={likes}
                          onCheckedChange={setLikes}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email Frequency */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Email Frequency</h3>
                    <div className="space-y-2">
                      <Label htmlFor="email-frequency">Digest frequency</Label>
                      <select
                        id="email-frequency"
                        className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option>Real-time</option>
                        <option>Daily digest</option>
                        <option>Weekly digest</option>
                        <option>Never</option>
                      </select>
                    </div>
                  </div>
                </div>

                <DrawerFooter>
                  <Button>Save Changes</Button>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            {/* Mobile Menu - Left Drawer */}
            <Drawer direction="left">
              <DrawerTrigger>
                <Button variant="outline">
                  <MenuIcon data-icon="inline-start" />
                  Mobile Menu
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Navigation</DrawerTitle>
                  <DrawerDescription>
                    Access your dashboard and settings
                  </DrawerDescription>
                </DrawerHeader>

                <div className="flex-1 space-y-2 overflow-y-auto p-4">
                  <Button variant="ghost" className="w-full justify-start">
                    <HomeIcon data-icon="inline-start" />
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <MessageSquareIcon data-icon="inline-start" />
                    Casts
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <BellIcon data-icon="inline-start" />
                    Notifications
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <MailIcon data-icon="inline-start" />
                    Messages
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <UserIcon data-icon="inline-start" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <SettingsIcon data-icon="inline-start" />
                    Settings
                  </Button>
                </div>

                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline">Close Menu</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            {/* Filter Panel - Bottom Drawer */}
            <Drawer direction="bottom">
              <DrawerTrigger>
                <Button variant="outline">Filter Casts</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Filter Options</DrawerTitle>
                  <DrawerDescription>
                    Refine your cast feed with advanced filters
                  </DrawerDescription>
                </DrawerHeader>

                <div className="flex-1 space-y-4 overflow-y-auto p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="start-date">Start Date</Label>
                      <Input id="start-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-date">End Date</Label>
                      <Input id="end-date" type="date" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="channel">Channel</Label>
                    <select
                      id="channel"
                      className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option>All Channels</option>
                      <option>Farcaster</option>
                      <option>Design</option>
                      <option>Engineering</option>
                      <option>Product</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="min-likes">Minimum Likes</Label>
                    <Input id="min-likes" type="number" placeholder="0" />
                  </div>
                </div>

                <DrawerFooter>
                  <div className="flex gap-2">
                    <Button className="flex-1">Apply Filters</Button>
                    <Button variant="outline" className="flex-1">
                      Reset
                    </Button>
                  </div>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      );
    }

    return <NotificationSettingsPanel />;
  },
};

/**
 * Complete design system reference showing all drawer directions and patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Directions */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Drawer Directions</h3>
          <p className="text-muted-foreground text-sm">
            Drawers can slide in from any edge of the screen.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Drawer direction="bottom">
            <DrawerTrigger>
              <Button variant="outline">Bottom Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Bottom Drawer</DrawerTitle>
                <DrawerDescription>
                  Slides up from the bottom of the screen.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-sm">
                  Bottom drawers are commonly used for mobile-friendly actions,
                  filters, and quick settings.
                </p>
              </div>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Drawer direction="top">
            <DrawerTrigger>
              <Button variant="outline">Top Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Top Drawer</DrawerTitle>
                <DrawerDescription>
                  Slides down from the top of the screen.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-sm">
                  Top drawers can be used for notifications or announcements
                  that need attention.
                </p>
              </div>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Drawer direction="left">
            <DrawerTrigger>
              <Button variant="outline">Left Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Left Drawer</DrawerTitle>
                <DrawerDescription>
                  Slides in from the left side.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-sm">
                  Left drawers are perfect for navigation menus and sidebars.
                </p>
              </div>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Drawer direction="right">
            <DrawerTrigger>
              <Button variant="outline">Right Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Right Drawer</DrawerTitle>
                <DrawerDescription>
                  Slides in from the right side.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-sm">
                  Right drawers work well for settings panels, details views,
                  and contextual actions.
                </p>
              </div>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </section>

      {/* Composition Patterns */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Composition Patterns</h3>
          <p className="text-muted-foreground text-sm">
            Different layouts and content structures for drawers.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {/* Simple Drawer */}
          <Drawer>
            <DrawerTrigger>
              <Button variant="outline">Simple Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Simple Content</DrawerTitle>
                <DrawerDescription>
                  Minimal drawer with just content.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-sm">
                  This is a basic drawer without footer actions.
                </p>
              </div>
            </DrawerContent>
          </Drawer>

          {/* With Form */}
          <Drawer>
            <DrawerTrigger>
              <Button variant="outline">Form Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Update Profile</DrawerTitle>
                <DrawerDescription>
                  Make changes to your profile information.
                </DrawerDescription>
              </DrawerHeader>
              <div className="space-y-4 p-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea
                    id="bio"
                    placeholder="Tell us about yourself"
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-20 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
              <DrawerFooter>
                <Button>Save Changes</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          {/* Without Header */}
          <Drawer>
            <DrawerTrigger>
              <Button variant="outline">Custom Layout</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="relative p-6">
                <DrawerClose>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="absolute top-4 right-4"
                    aria-label="Close"
                  >
                    <XIcon />
                  </Button>
                </DrawerClose>
                <h2 className="text-lg font-semibold">Custom Layout</h2>
                <p className="text-muted-foreground mt-2 text-sm">
                  This drawer uses a custom layout without the standard header
                  component.
                </p>
                <div className="mt-6">
                  <p className="text-sm">
                    You have full control over the drawer content structure.
                  </p>
                </div>
              </div>
            </DrawerContent>
          </Drawer>

          {/* Scrollable Content */}
          <Drawer>
            <DrawerTrigger>
              <Button variant="outline">Scrollable Content</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Terms and Conditions</DrawerTitle>
                <DrawerDescription>
                  Please review our terms before continuing.
                </DrawerDescription>
              </DrawerHeader>
              <div className="max-h-[300px] space-y-4 overflow-y-auto p-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-medium">Section {i + 1}</h4>
                    <p className="text-muted-foreground text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris.
                    </p>
                  </div>
                ))}
              </div>
              <DrawerFooter>
                <Button>Accept</Button>
                <DrawerClose>
                  <Button variant="outline">Decline</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </section>

      {/* Drawer States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Controlled State</h3>
          <p className="text-muted-foreground text-sm">
            Drawers can be controlled programmatically with state.
          </p>
        </div>
        <ControlledDrawerExample />
      </section>
    </div>
  ),
};

function ControlledDrawerExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap gap-3">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <Button variant="outline">Controlled Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Controlled Drawer</DrawerTitle>
            <DrawerDescription>
              This drawer's open state is controlled by React state.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p className="text-sm">
              You can programmatically open and close this drawer using the
              button below.
            </p>
          </div>
          <DrawerFooter>
            <Button onClick={() => setOpen(false)}>Close via State</Button>
            <DrawerClose>
              <Button variant="outline">Close via Component</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Open Programmatically
      </Button>
    </div>
  );
}

/**
 * Frosted effect demonstration - Drawers use a translucent background (75% opacity)
 * with backdrop blur (12px) creating a frosted glass effect. This story shows
 * how the drawer appears over colorful content.
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
        <Drawer direction="bottom">
          <DrawerTrigger>
            <Button>Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Frosted Drawer</DrawerTitle>
              <DrawerDescription>
                Notice the frosted glass effect - you can see the colorful
                background blurred through the drawer panel.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <p className="text-sm">
                The drawer uses a translucent background with backdrop blur,
                creating a modern frosted glass appearance that adapts to
                whatever content is behind it.
              </p>
            </div>
            <DrawerFooter>
              <Button>Confirm</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  ),
};

/**
 * Interactive playground for testing drawer props and behavior.
 */
export const Interactive: Story = {
  args: {
    direction: "bottom",
    modal: true,
    dismissible: true,
  },
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>
            This is a drawer description. Customize the drawer using the
            controls below.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm">
            This is the main content area of the drawer. You can put any content
            here.
          </p>
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
