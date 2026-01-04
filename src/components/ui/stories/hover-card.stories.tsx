import type { Meta, StoryObj } from "@storybook/react";
import {
  CalendarIcon,
  CheckCircle2Icon,
  MapPinIcon,
  UsersIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Badge } from "../badge";
import { Button } from "../button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../hover-card";

const meta: Meta<typeof HoverCard> = {
  title: "Components/Overlays & Dialogs/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "Initial open state (uncontrolled)",
    },
    open: {
      control: "boolean",
      description: "Controlled open state",
    },
    openDelay: {
      control: { type: "number", min: 0, max: 1000, step: 50 },
      description: "Delay in ms before the hover card opens (default: 700)",
    },
    closeDelay: {
      control: { type: "number", min: 0, max: 1000, step: 50 },
      description: "Delay in ms before the hover card closes (default: 300)",
    },
    // Hide event handlers
    onOpenChange: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Farcaster User Profile Preview - A realistic scenario showing hover cards
 * for previewing user profiles in the Neynar Dashboard feed.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function UserProfileHoverCard({
      username,
      displayName,
      avatarUrl,
      bio,
      followers,
      following,
      location,
      joinDate,
      verified,
    }: {
      username: string;
      displayName: string;
      avatarUrl: string;
      bio: string;
      followers: number;
      following: number;
      location?: string;
      joinDate: string;
      verified?: boolean;
    }) {
      return (
        <HoverCard>
          <HoverCardTrigger>
            <button className="inline-flex items-center gap-2 rounded-md p-1 transition-colors hover:bg-muted">
              <Avatar size="sm">
                <AvatarImage src={avatarUrl} alt={displayName} />
                <AvatarFallback>
                  {displayName.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium hover:underline">@{username}</span>
            </button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-3">
              {/* Header with avatar and follow button */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar size="lg">
                    <AvatarImage src={avatarUrl} alt={displayName} />
                    <AvatarFallback>
                      {displayName.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-semibold">{displayName}</p>
                      {verified && (
                        <CheckCircle2Icon
                          className="text-primary size-4"
                          aria-label="Verified"
                        />
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">@{username}</p>
                  </div>
                </div>
                <Button size="sm">Follow</Button>
              </div>

              {/* Bio */}
              <p className="text-sm leading-relaxed">{bio}</p>

              {/* Stats */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UsersIcon className="text-muted-foreground size-3.5" />
                  <span className="font-semibold">
                    {followers.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">followers</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">
                    {following.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">following</span>
                </div>
              </div>

              {/* Metadata */}
              <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-xs">
                {location && (
                  <div className="flex items-center gap-1">
                    <MapPinIcon className="size-3.5" />
                    <span>{location}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <CalendarIcon className="size-3.5" />
                  <span>Joined {joinDate}</span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      );
    }

    return (
      <div className="w-full max-w-2xl space-y-6">
        {/* Feed simulation */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">Recent Casts</h2>
          <div className="space-y-4">
            {/* Cast 1 */}
            <div className="border-border rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <UserProfileHoverCard
                  username="dwr"
                  displayName="Dan Romero"
                  avatarUrl="https://i.imgur.com/DmDQRdx.jpg"
                  bio="Building Farcaster and Warpcast. Previously VP Eng at Coinbase."
                  followers={124500}
                  following={428}
                  location="Los Angeles, CA"
                  joinDate="Oct 2020"
                  verified
                />
                <span className="text-muted-foreground text-sm">2h ago</span>
              </div>
              <p className="text-sm">
                Excited to share the latest updates to Farcaster protocol. New
                features coming soon!
              </p>
            </div>

            {/* Cast 2 */}
            <div className="border-border rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <UserProfileHoverCard
                  username="v"
                  displayName="Varun Srinivasan"
                  avatarUrl="https://i.imgur.com/gF4B4Kl.jpg"
                  bio="Co-founder of Farcaster. Formerly at Coinbase and Microsoft."
                  followers={89200}
                  following={312}
                  location="San Francisco, CA"
                  joinDate="Oct 2020"
                  verified
                />
                <span className="text-muted-foreground text-sm">4h ago</span>
              </div>
              <p className="text-sm">
                Just pushed some performance improvements to the hub network.
                Should see faster sync times.
              </p>
            </div>

            {/* Cast 3 */}
            <div className="border-border rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <UserProfileHoverCard
                  username="deodad"
                  displayName="Rish"
                  avatarUrl="https://i.imgur.com/2WQtz2K.jpg"
                  bio="Building @neynar - developer tools for Farcaster. Previously at Meta."
                  followers={15800}
                  following={524}
                  location="New York, NY"
                  joinDate="Jan 2023"
                />
                <span className="text-muted-foreground text-sm">6h ago</span>
              </div>
              <p className="text-sm">
                New Neynar API endpoints just dropped. Check out the docs for
                more details!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Complete design system reference showing all positioning options,
 * content variations, and interaction patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-12">
      {/* Positioning Options */}
      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Positioning Options</h3>
          <p className="text-muted-foreground text-sm">
            HoverCard can be positioned on all sides of the trigger element.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Top */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-muted-foreground text-sm font-medium">
              Top
            </span>
            <HoverCard>
              <HoverCardTrigger>
                <Button variant="outline" size="sm">
                  Top
                </Button>
              </HoverCardTrigger>
              <HoverCardContent side="top">
                <div className="space-y-1">
                  <h4 className="font-semibold">Positioned Top</h4>
                  <p className="text-muted-foreground text-xs">
                    This card appears above the trigger.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-muted-foreground text-sm font-medium">
              Right
            </span>
            <HoverCard>
              <HoverCardTrigger>
                <Button variant="outline" size="sm">
                  Right
                </Button>
              </HoverCardTrigger>
              <HoverCardContent side="right">
                <div className="space-y-1">
                  <h4 className="font-semibold">Positioned Right</h4>
                  <p className="text-muted-foreground text-xs">
                    This card appears to the right.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          {/* Bottom (default) */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-muted-foreground text-sm font-medium">
              Bottom
            </span>
            <HoverCard>
              <HoverCardTrigger>
                <Button variant="outline" size="sm">
                  Bottom
                </Button>
              </HoverCardTrigger>
              <HoverCardContent side="bottom">
                <div className="space-y-1">
                  <h4 className="font-semibold">Positioned Bottom</h4>
                  <p className="text-muted-foreground text-xs">
                    This is the default position.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          {/* Left */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-muted-foreground text-sm font-medium">
              Left
            </span>
            <HoverCard>
              <HoverCardTrigger>
                <Button variant="outline" size="sm">
                  Left
                </Button>
              </HoverCardTrigger>
              <HoverCardContent side="left">
                <div className="space-y-1">
                  <h4 className="font-semibold">Positioned Left</h4>
                  <p className="text-muted-foreground text-xs">
                    This card appears to the left.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* Alignment Options */}
      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Alignment Options</h3>
          <p className="text-muted-foreground text-sm">
            Control how the card aligns relative to the trigger.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Start align */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-muted-foreground text-sm font-medium">
              Start
            </span>
            <HoverCard>
              <HoverCardTrigger>
                <Button variant="outline" size="sm">
                  Align Start
                </Button>
              </HoverCardTrigger>
              <HoverCardContent align="start">
                <div className="space-y-1">
                  <h4 className="font-semibold">Start Aligned</h4>
                  <p className="text-muted-foreground text-xs">
                    Aligned to the start edge.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          {/* Center align (default) */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-muted-foreground text-sm font-medium">
              Center
            </span>
            <HoverCard>
              <HoverCardTrigger>
                <Button variant="outline" size="sm">
                  Align Center
                </Button>
              </HoverCardTrigger>
              <HoverCardContent align="center">
                <div className="space-y-1">
                  <h4 className="font-semibold">Center Aligned</h4>
                  <p className="text-muted-foreground text-xs">
                    Centered on the trigger.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          {/* End align */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-muted-foreground text-sm font-medium">
              End
            </span>
            <HoverCard>
              <HoverCardTrigger>
                <Button variant="outline" size="sm">
                  Align End
                </Button>
              </HoverCardTrigger>
              <HoverCardContent align="end">
                <div className="space-y-1">
                  <h4 className="font-semibold">End Aligned</h4>
                  <p className="text-muted-foreground text-xs">
                    Aligned to the end edge.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* Content Variations */}
      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Content Variations</h3>
          <p className="text-muted-foreground text-sm">
            Different types of content that can be displayed in hover cards.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Simple text */}
          <HoverCard>
            <HoverCardTrigger>
              <Button variant="outline" className="w-full">
                Simple Text
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">
                A simple text-only hover card with helpful information.
              </p>
            </HoverCardContent>
          </HoverCard>

          {/* With image */}
          <HoverCard>
            <HoverCardTrigger>
              <Button variant="outline" className="w-full">
                With Avatar
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex gap-3">
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">John Doe</h4>
                  <p className="text-muted-foreground text-xs">
                    Product Designer
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* With badges */}
          <HoverCard>
            <HoverCardTrigger>
              <Button variant="outline" className="w-full">
                With Badges
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Project Tags</h4>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* With list */}
          <HoverCard>
            <HoverCardTrigger>
              <Button variant="outline" className="w-full">
                With List
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Quick Actions</h4>
                <ul className="text-muted-foreground space-y-1 text-xs">
                  <li>View details</li>
                  <li>Edit settings</li>
                  <li>Share link</li>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* Rich content */}
          <HoverCard>
            <HoverCardTrigger>
              <Button variant="outline" className="w-full">
                Rich Content
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Avatar size="sm">
                    <AvatarFallback>FC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-sm font-semibold">
                      Farcaster Protocol
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      A sufficiently decentralized social network.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="xs" variant="secondary">
                    Learn More
                  </Button>
                  <Button size="xs" variant="outline">
                    Documentation
                  </Button>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* Custom width */}
          <HoverCard>
            <HoverCardTrigger>
              <Button variant="outline" className="w-full">
                Custom Width
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-96">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Wide Content Card</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  This hover card has a custom width to accommodate longer
                  content. The width can be adjusted using the className prop on
                  HoverCardContent.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>

      {/* Delay Options */}
      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Timing Controls</h3>
          <p className="text-muted-foreground text-sm">
            Control when the hover card appears and disappears.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Quick open */}
          <HoverCard>
            <HoverCardTrigger>
              <Button variant="outline" className="w-full">
                Instant Open
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">No Delay</h4>
                <p className="text-muted-foreground text-xs">
                  Opens immediately on hover.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* Default timing */}
          <HoverCard>
            <HoverCardTrigger>
              <Button variant="outline" className="w-full">
                Default Timing
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Balanced</h4>
                <p className="text-muted-foreground text-xs">
                  Default delay settings.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* Slow open */}
          <HoverCard>
            <HoverCardTrigger>
              <Button variant="outline" className="w-full">
                Delayed Open
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Long Delay</h4>
                <p className="text-muted-foreground text-xs">
                  Opens after 500ms.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>

      {/* Interactive Triggers */}
      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Trigger Types</h3>
          <p className="text-muted-foreground text-sm">
            HoverCard works with any trigger element using.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {/* Button trigger */}
          <HoverCard>
            <HoverCardTrigger>
              <Button variant="default" size="sm">
                Button Trigger
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">Triggered by a button component.</p>
            </HoverCardContent>
          </HoverCard>

          {/* Link trigger */}
          <HoverCard>
            <HoverCardTrigger>
              <a
                href="#"
                className="text-primary text-sm font-medium hover:underline"
              >
                Link Trigger
              </a>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">Triggered by a link element.</p>
            </HoverCardContent>
          </HoverCard>

          {/* Badge trigger */}
          <HoverCard>
            <HoverCardTrigger>
              <span>
                <Badge variant="secondary" className="cursor-pointer">
                  Badge Trigger
                </Badge>
              </span>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">Triggered by a badge component.</p>
            </HoverCardContent>
          </HoverCard>

          {/* Avatar trigger */}
          <HoverCard>
            <HoverCardTrigger>
              <button>
                <Avatar className="cursor-pointer">
                  <AvatarFallback>AT</AvatarFallback>
                </Avatar>
              </button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Avatar Trigger</h4>
                <p className="text-muted-foreground text-xs">
                  Triggered by an avatar.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* Text trigger */}
          <HoverCard>
            <HoverCardTrigger>
              <span className="text-muted-foreground cursor-help text-sm underline decoration-dotted">
                Text Trigger
              </span>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">
                Triggered by inline text with help cursor.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>
    </div>
  ),
};

/**
 * Frosted hover card effect with backdrop blur over colorful backgrounds.
 * HoverCards use 75% opacity and backdrop-blur for a frosted glass appearance.
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
          HoverCards use transparent backgrounds with backdrop blur for a
          frosted glass look. Hover over the triggers to see the effect.
        </p>
      </div>

      {/* Busy background with color blocks */}
      <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        {/* Color blocks behind */}
        <div className="absolute inset-0 p-4 grid grid-cols-4 gap-3 opacity-90">
          <div className="rounded-lg bg-yellow-400 p-3">
            <p className="font-bold text-yellow-900 text-sm">Yellow</p>
            <p className="text-xs text-yellow-800">Lorem ipsum</p>
          </div>
          <div className="rounded-lg bg-green-400 p-3">
            <p className="font-bold text-green-900 text-sm">Green</p>
            <p className="text-xs text-green-800">Dolor sit amet</p>
          </div>
          <div className="rounded-lg bg-blue-400 p-3">
            <p className="font-bold text-blue-900 text-sm">Blue</p>
            <p className="text-xs text-blue-800">Consectetur</p>
          </div>
          <div className="rounded-lg bg-red-400 p-3">
            <p className="font-bold text-red-900 text-sm">Red</p>
            <p className="text-xs text-red-800">Adipiscing elit</p>
          </div>
          <div className="rounded-lg bg-orange-400 p-3">
            <p className="font-bold text-orange-900 text-sm">Orange</p>
            <p className="text-xs text-orange-800">Sed do eiusmod</p>
          </div>
          <div className="rounded-lg bg-teal-400 p-3">
            <p className="font-bold text-teal-900 text-sm">Teal</p>
            <p className="text-xs text-teal-800">Tempor incididunt</p>
          </div>
          <div className="rounded-lg bg-pink-300 p-3">
            <p className="font-bold text-pink-900 text-sm">Pink</p>
            <p className="text-xs text-pink-800">Ut labore et</p>
          </div>
          <div className="rounded-lg bg-cyan-400 p-3">
            <p className="font-bold text-cyan-900 text-sm">Cyan</p>
            <p className="text-xs text-cyan-800">Dolore magna</p>
          </div>
        </div>

        {/* Triggers on top */}
        <div className="relative flex items-center justify-center gap-8 mt-32 mb-8">
          <HoverCard>
            <HoverCardTrigger>
              <Button variant="secondary">Hover Me</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarFallback>FC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">Frosted Glass HoverCard</h4>
                    <p className="text-muted-foreground text-sm">@farcaster</p>
                  </div>
                  <Button size="sm">Follow</Button>
                </div>
                <p className="text-sm">
                  Notice how you can see the colorful blocks behind through the
                  75% opacity background with 12px blur.
                </p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="font-semibold">12.5K</span>{" "}
                    <span className="text-muted-foreground">followers</span>
                  </div>
                  <div>
                    <span className="font-semibold">428</span>{" "}
                    <span className="text-muted-foreground">following</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger>
              <Button variant="secondary">Profile Card</Button>
            </HoverCardTrigger>
            <HoverCardContent side="top" className="w-72">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Avatar size="lg">
                    <AvatarFallback>VB</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Vitalik Buterin</h4>
                    <p className="text-muted-foreground text-sm">
                      @vitalik.eth
                    </p>
                  </div>
                </div>
                <p className="text-sm">
                  Ethereum creator. The frosted effect lets you peek through!
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>

      {/* Gradient background */}
      <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="absolute inset-0 flex items-center justify-center text-white/20">
          <div className="text-center">
            <p className="text-6xl font-bold">BACKGROUND</p>
            <p className="text-2xl">This text is behind the hover card</p>
          </div>
        </div>
        <div className="relative flex items-center justify-center py-16">
          <HoverCard>
            <HoverCardTrigger>
              <Button variant="secondary" size="lg">
                Hover for Frosted Effect
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-semibold">Customizable Blur</h4>
                <p className="text-sm">
                  The frosted glass effect is controlled by CSS tokens:
                </p>
                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>
                    <code>--surface-blur: 12px</code>
                  </li>
                  <li>
                    <code>--popover</code> at 75% opacity
                  </li>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  ),
};

/**
 * Interactive playground for testing hover card props and positioning.
 */
export const Interactive: Story = {
  args: {
    defaultOpen: false,
    openDelay: 700,
    closeDelay: 300,
  },
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger>
        <Button variant="outline">Hover over me</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="font-semibold">Interactive HoverCard</h4>
          <p className="text-sm">
            This is a hover card that appears when you hover over the trigger
            element.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <Badge variant="secondary">Interactive</Badge>
            <Badge variant="outline">Customizable</Badge>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
