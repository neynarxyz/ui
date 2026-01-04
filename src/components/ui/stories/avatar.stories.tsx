import type { Meta, StoryObj } from "@storybook/react";
import {
  CheckIcon,
  MessageCircleIcon,
  UserIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "../avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Advanced & Specialized/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Avatar size variant",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

/**
 * Farcaster User Profiles - A realistic scenario showing avatars in context
 * of Farcaster user profiles, team members, and social interactions in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    return (
      <div className="w-full max-w-xl space-y-6">
        {/* User Profile Header */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">User Profile</h3>
            <p className="text-muted-foreground text-sm">
              Farcaster user profile with avatar, username, and verification
              badge.
            </p>
          </div>
          <div className="border-border bg-card rounded-lg border p-6">
            <div className="flex items-center gap-4">
              <Avatar size="lg">
                <AvatarImage
                  src="https://i.imgur.com/xIe7Wlb.png"
                  alt="@dwr.eth"
                />
                <AvatarFallback>DW</AvatarFallback>
                <AvatarBadge>
                  <CheckIcon />
                </AvatarBadge>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">Dan Romero</p>
                  <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-medium">
                    Power User
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">@dwr.eth</p>
                <p className="text-muted-foreground mt-1 text-sm">
                  Co-founder of Farcaster. Building the future of decentralized
                  social.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            <p className="text-muted-foreground text-sm">
              Activity feed showing user avatars with different states and
              sizes.
            </p>
          </div>
          <div className="space-y-3">
            <div className="border-border bg-card rounded-lg border p-4">
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src="https://i.imgur.com/4jKKHVW.png" alt="@v" />
                  <AvatarFallback>V</AvatarFallback>
                  <AvatarBadge className="bg-green-500">
                    <ZapIcon />
                  </AvatarBadge>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">@v</span> cast a new post
                  </p>
                  <p className="text-muted-foreground text-xs">2 minutes ago</p>
                </div>
              </div>
            </div>

            <div className="border-border bg-card rounded-lg border p-4">
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage
                    src="https://i.imgur.com/xIe7Wlb.png"
                    alt="@dwr.eth"
                  />
                  <AvatarFallback>DW</AvatarFallback>
                  <AvatarBadge>
                    <MessageCircleIcon />
                  </AvatarBadge>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">@dwr.eth</span> replied to
                    your cast
                  </p>
                  <p className="text-muted-foreground text-xs">
                    15 minutes ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Team Members</h3>
            <p className="text-muted-foreground text-sm">
              Collaborative team view with avatar groups and counts.
            </p>
          </div>
          <div className="border-border bg-card rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Neynar Team</p>
                <p className="text-muted-foreground text-sm">12 members</p>
              </div>
              <AvatarGroup>
                <Avatar>
                  <AvatarImage
                    src="https://i.imgur.com/xIe7Wlb.png"
                    alt="Dan"
                  />
                  <AvatarFallback>DW</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://i.imgur.com/4jKKHVW.png" alt="V" />
                  <AvatarFallback>V</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JK</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <AvatarGroupCount>+8</AvatarGroupCount>
              </AvatarGroup>
            </div>
          </div>
        </section>

        {/* User Directory */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">User Directory</h3>
            <p className="text-muted-foreground text-sm">
              List of users with fallback states and initials.
            </p>
          </div>
          <div className="space-y-2">
            <div className="border-border bg-card flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <Avatar size="sm">
                  <AvatarImage
                    src="https://i.imgur.com/xIe7Wlb.png"
                    alt="Dan Romero"
                  />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Dan Romero</p>
                  <p className="text-muted-foreground text-xs">@dwr.eth</p>
                </div>
              </div>
              <span className="bg-green-500/10 text-green-500 rounded-full px-2 py-1 text-xs font-medium">
                Active
              </span>
            </div>

            <div className="border-border bg-card flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <Avatar size="sm">
                  <AvatarImage src="https://i.imgur.com/4jKKHVW.png" alt="V" />
                  <AvatarFallback>V</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">V</p>
                  <p className="text-muted-foreground text-xs">@v</p>
                </div>
              </div>
              <span className="bg-green-500/10 text-green-500 rounded-full px-2 py-1 text-xs font-medium">
                Active
              </span>
            </div>

            <div className="border-border bg-card flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <Avatar size="sm">
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Alice Brown</p>
                  <p className="text-muted-foreground text-xs">@alice</p>
                </div>
              </div>
              <span className="text-muted-foreground rounded-full px-2 py-1 text-xs font-medium">
                Offline
              </span>
            </div>
          </div>
        </section>
      </div>
    );
  },
};

/**
 * Complete design system reference showing all avatar sizes, states, and compositions.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Sizes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Sizes</h3>
          <p className="text-muted-foreground text-sm">
            Three size variants for different contexts and density needs.
          </p>
        </div>
        <div className="flex items-end gap-6">
          <div className="flex flex-col items-center gap-2">
            <Avatar size="sm">
              <AvatarImage src="https://i.imgur.com/xIe7Wlb.png" alt="Small" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground text-xs">Small (24px)</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="default">
              <AvatarImage
                src="https://i.imgur.com/xIe7Wlb.png"
                alt="Default"
              />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground text-xs">
              Default (32px)
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg">
              <AvatarImage src="https://i.imgur.com/xIe7Wlb.png" alt="Large" />
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground text-xs">Large (40px)</span>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">States</h3>
          <p className="text-muted-foreground text-sm">
            Image loaded, fallback initials, and icon fallback states.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Avatar>
              <AvatarImage
                src="https://i.imgur.com/xIe7Wlb.png"
                alt="With image"
              />
              <AvatarFallback>DW</AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground text-xs">With Image</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground text-xs">Initials</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar>
              <AvatarFallback>
                <UserIcon className="size-4" />
              </AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground text-xs">Icon Fallback</span>
          </div>
        </div>
      </section>

      {/* With Badges */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Badges</h3>
          <p className="text-muted-foreground text-sm">
            Status indicators and notification badges.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Avatar>
              <AvatarImage
                src="https://i.imgur.com/xIe7Wlb.png"
                alt="Verified"
              />
              <AvatarFallback>DW</AvatarFallback>
              <AvatarBadge>
                <CheckIcon />
              </AvatarBadge>
            </Avatar>
            <span className="text-muted-foreground text-xs">Verified</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar>
              <AvatarImage src="https://i.imgur.com/4jKKHVW.png" alt="Active" />
              <AvatarFallback>V</AvatarFallback>
              <AvatarBadge className="bg-green-500" />
            </Avatar>
            <span className="text-muted-foreground text-xs">Active</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar>
              <AvatarFallback>SM</AvatarFallback>
              <AvatarBadge className="bg-yellow-500">
                <ZapIcon />
              </AvatarBadge>
            </Avatar>
            <span className="text-muted-foreground text-xs">Power User</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar>
              <AvatarFallback>JK</AvatarFallback>
              <AvatarBadge className="bg-red-500" />
            </Avatar>
            <span className="text-muted-foreground text-xs">Busy</span>
          </div>
        </div>
      </section>

      {/* Avatar Groups */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Avatar Groups</h3>
          <p className="text-muted-foreground text-sm">
            Stacked avatars for team members and collaborators.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <AvatarGroup>
              <Avatar size="sm">
                <AvatarImage src="https://i.imgur.com/xIe7Wlb.png" alt="Dan" />
                <AvatarFallback>DW</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="https://i.imgur.com/4jKKHVW.png" alt="V" />
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarFallback>JK</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <span className="text-muted-foreground text-sm">Small group</span>
          </div>

          <div className="flex items-center gap-3">
            <AvatarGroup>
              <Avatar>
                <AvatarImage src="https://i.imgur.com/xIe7Wlb.png" alt="Dan" />
                <AvatarFallback>DW</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://i.imgur.com/4jKKHVW.png" alt="V" />
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JK</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <span className="text-muted-foreground text-sm">Default group</span>
          </div>

          <div className="flex items-center gap-3">
            <AvatarGroup>
              <Avatar size="lg">
                <AvatarImage src="https://i.imgur.com/xIe7Wlb.png" alt="Dan" />
                <AvatarFallback>DW</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://i.imgur.com/4jKKHVW.png" alt="V" />
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarFallback>JK</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <span className="text-muted-foreground text-sm">Large group</span>
          </div>

          <div className="flex items-center gap-3">
            <AvatarGroup>
              <Avatar>
                <AvatarImage src="https://i.imgur.com/xIe7Wlb.png" alt="Dan" />
                <AvatarFallback>DW</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://i.imgur.com/4jKKHVW.png" alt="V" />
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JK</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+12</AvatarGroupCount>
            </AvatarGroup>
            <span className="text-muted-foreground text-sm">With count</span>
          </div>

          <div className="flex items-center gap-3">
            <AvatarGroup>
              <Avatar>
                <AvatarFallback>
                  <UsersIcon className="size-4" />
                </AvatarFallback>
              </Avatar>
              <AvatarGroupCount>24</AvatarGroupCount>
            </AvatarGroup>
            <span className="text-muted-foreground text-sm">
              Icon with count
            </span>
          </div>
        </div>
      </section>

      {/* Size × Badge Combinations */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Size × Badge Matrix</h3>
          <p className="text-muted-foreground text-sm">
            Badge scaling across different avatar sizes.
          </p>
        </div>
        <div className="flex items-end gap-6">
          <div className="flex flex-col items-center gap-2">
            <Avatar size="sm">
              <AvatarImage
                src="https://i.imgur.com/xIe7Wlb.png"
                alt="Small with badge"
              />
              <AvatarFallback>SM</AvatarFallback>
              <AvatarBadge>
                <CheckIcon />
              </AvatarBadge>
            </Avatar>
            <span className="text-muted-foreground text-xs">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="default">
              <AvatarImage
                src="https://i.imgur.com/xIe7Wlb.png"
                alt="Default with badge"
              />
              <AvatarFallback>MD</AvatarFallback>
              <AvatarBadge>
                <CheckIcon />
              </AvatarBadge>
            </Avatar>
            <span className="text-muted-foreground text-xs">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg">
              <AvatarImage
                src="https://i.imgur.com/xIe7Wlb.png"
                alt="Large with badge"
              />
              <AvatarFallback>LG</AvatarFallback>
              <AvatarBadge>
                <CheckIcon />
              </AvatarBadge>
            </Avatar>
            <span className="text-muted-foreground text-xs">Large</span>
          </div>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing avatar props.
 */
export const Interactive: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://i.imgur.com/xIe7Wlb.png" alt="User avatar" />
      <AvatarFallback>DW</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: "default",
  },
};
