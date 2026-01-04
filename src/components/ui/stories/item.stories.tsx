import type { Meta, StoryObj } from "@storybook/react";
import {
  CheckCircle2Icon,
  ChevronRightIcon,
  ClockIcon,
  CopyIcon,
  ExternalLinkIcon,
  FileIcon,
  KeyIcon,
  MoreHorizontalIcon,
  TrashIcon,
  UserIcon,
  WebhookIcon,
  XCircleIcon,
} from "lucide-react";

import { Badge } from "../badge";
import { Button } from "../button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "../item";

const meta: Meta<typeof Item> = {
  title: "Components/Advanced & Specialized/Item",
  component: Item,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "muted"],
      description: "Visual style variant for the item",
    },
    size: {
      control: "select",
      options: ["default", "sm", "xs"],
      description: "Size variant affecting padding and spacing",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Item>;

/**
 * Neynar Dashboard - Realistic scenarios showing generic list items
 * for API keys, webhooks, team members, and documents.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function DashboardLists() {
      return (
        <div className="w-full max-w-5xl space-y-8">
          {/* API Keys List */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">API Keys</h2>
              <p className="text-muted-foreground text-sm">
                Manage your Neynar API keys for production and development
              </p>
            </div>
            <ItemGroup>
              <Item variant="outline">
                <ItemMedia variant="icon">
                  <div className="bg-primary/10 text-primary rounded-md p-2">
                    <KeyIcon className="size-5" />
                  </div>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Production Key</ItemTitle>
                  <ItemDescription>
                    <code className="font-mono text-xs">
                      neynar_sk_prod_****_****_8f3d
                    </code>{" "}
                    • Created 3 months ago
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="ghost" size="icon-sm">
                    <CopyIcon />
                  </Button>
                  <Button variant="ghost" size="icon-sm">
                    <MoreHorizontalIcon />
                  </Button>
                </ItemActions>
              </Item>

              <Item variant="outline">
                <ItemMedia variant="icon">
                  <div className="bg-muted text-muted-foreground rounded-md p-2">
                    <KeyIcon className="size-5" />
                  </div>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Development Key</ItemTitle>
                  <ItemDescription>
                    <code className="font-mono text-xs">
                      neynar_sk_dev_****_****_2a1b
                    </code>{" "}
                    • Created 1 week ago
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="ghost" size="icon-sm">
                    <CopyIcon />
                  </Button>
                  <Button variant="ghost" size="icon-sm">
                    <MoreHorizontalIcon />
                  </Button>
                </ItemActions>
              </Item>

              <Item variant="outline">
                <ItemMedia variant="icon">
                  <div className="bg-red-500/10 text-red-500 rounded-md p-2">
                    <KeyIcon className="size-5" />
                  </div>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    Staging Key
                    <Badge variant="destructive">Revoked</Badge>
                  </ItemTitle>
                  <ItemDescription>
                    <code className="font-mono text-xs">
                      neynar_sk_stg_****_****_9c4e
                    </code>{" "}
                    • Revoked 2 days ago
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="ghost" size="icon-sm" disabled>
                    <CopyIcon />
                  </Button>
                  <Button variant="ghost" size="icon-sm">
                    <TrashIcon />
                  </Button>
                </ItemActions>
              </Item>
            </ItemGroup>
          </section>

          {/* Webhook Endpoints List */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Webhook Endpoints</h2>
              <p className="text-muted-foreground text-sm">
                Monitor delivery status and manage webhook endpoints
              </p>
            </div>
            <ItemGroup>
              <Item variant="muted">
                <ItemMedia variant="icon">
                  <WebhookIcon className="text-green-500 size-5" />
                </ItemMedia>
                <ItemContent>
                  <ItemHeader>
                    <div className="flex flex-col gap-1">
                      <ItemTitle>
                        Production Webhook
                        <Badge variant="secondary">Active</Badge>
                      </ItemTitle>
                      <ItemDescription>
                        https://api.example.com/webhooks/neynar
                      </ItemDescription>
                    </div>
                    <ItemActions>
                      <Button variant="ghost">
                        <ExternalLinkIcon data-icon="inline-start" />
                        Test
                      </Button>
                      <Button variant="ghost" size="icon-sm">
                        <MoreHorizontalIcon />
                      </Button>
                    </ItemActions>
                  </ItemHeader>
                </ItemContent>
              </Item>

              <ItemSeparator />

              <Item variant="muted">
                <ItemMedia variant="icon">
                  <WebhookIcon className="text-muted-foreground size-5" />
                </ItemMedia>
                <ItemContent>
                  <ItemHeader>
                    <div className="flex flex-col gap-1">
                      <ItemTitle>
                        Development Webhook
                        <Badge variant="outline">Paused</Badge>
                      </ItemTitle>
                      <ItemDescription>
                        https://dev.example.com/webhooks/neynar
                      </ItemDescription>
                    </div>
                    <ItemActions>
                      <Button variant="ghost">Resume</Button>
                      <Button variant="ghost" size="icon-sm">
                        <MoreHorizontalIcon />
                      </Button>
                    </ItemActions>
                  </ItemHeader>
                </ItemContent>
              </Item>

              <ItemSeparator />

              <Item variant="muted">
                <ItemMedia variant="icon">
                  <WebhookIcon className="text-red-500 size-5" />
                </ItemMedia>
                <ItemContent>
                  <ItemHeader>
                    <div className="flex flex-col gap-1">
                      <ItemTitle>
                        Staging Webhook
                        <Badge variant="destructive">Failed</Badge>
                      </ItemTitle>
                      <ItemDescription>
                        https://staging.example.com/webhooks/neynar
                      </ItemDescription>
                    </div>
                    <ItemActions>
                      <Button variant="ghost">Retry</Button>
                      <Button variant="ghost" size="icon-sm">
                        <MoreHorizontalIcon />
                      </Button>
                    </ItemActions>
                  </ItemHeader>
                  <ItemFooter className="border-border w-full border-t pt-2">
                    <div className="flex items-center gap-2 text-sm">
                      <XCircleIcon className="text-red-500 size-4" />
                      <span className="text-muted-foreground">
                        Last failure: Connection timeout (5xx)
                      </span>
                    </div>
                  </ItemFooter>
                </ItemContent>
              </Item>
            </ItemGroup>
          </section>

          {/* Team Members List */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Team Members</h2>
                <p className="text-muted-foreground text-sm">
                  Manage access for your team
                </p>
              </div>
              <Button>Invite Member</Button>
            </div>
            <ItemGroup>
              <Item>
                <ItemMedia variant="icon">
                  <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-full text-sm font-semibold">
                    JD
                  </div>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    Jane Doe
                    <Badge variant="outline">Owner</Badge>
                  </ItemTitle>
                  <ItemDescription>
                    jane.doe@example.com • Full access to all resources
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="ghost" size="icon-sm">
                    <MoreHorizontalIcon />
                  </Button>
                </ItemActions>
              </Item>

              <Item>
                <ItemMedia variant="icon">
                  <div className="bg-green-500/10 text-green-500 flex size-10 items-center justify-center rounded-full text-sm font-semibold">
                    AB
                  </div>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    Alex Brown
                    <Badge variant="outline">Admin</Badge>
                  </ItemTitle>
                  <ItemDescription>
                    alex.brown@example.com • Can manage API keys and webhooks
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="ghost">Edit</Button>
                  <Button variant="ghost" size="icon-sm">
                    <MoreHorizontalIcon />
                  </Button>
                </ItemActions>
              </Item>

              <Item>
                <ItemMedia variant="icon">
                  <div className="bg-blue-500/10 text-blue-500 flex size-10 items-center justify-center rounded-full text-sm font-semibold">
                    SM
                  </div>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    Sarah Miller
                    <Badge variant="outline">Developer</Badge>
                  </ItemTitle>
                  <ItemDescription>
                    sarah.miller@example.com • Read-only access to analytics
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="ghost">Edit</Button>
                  <Button variant="ghost" size="icon-sm">
                    <MoreHorizontalIcon />
                  </Button>
                </ItemActions>
              </Item>
            </ItemGroup>
          </section>

          {/* Recent Activity List */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Recent Activity</h2>
              <p className="text-muted-foreground text-sm">
                Track recent changes and events
              </p>
            </div>
            <ItemGroup>
              <Item size="xs">
                <ItemMedia variant="icon">
                  <CheckCircle2Icon className="text-green-500 size-4" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>API key created</ItemTitle>
                  <ItemDescription>
                    Production key created by jane.doe@example.com
                  </ItemDescription>
                </ItemContent>
                <ItemContent>
                  <div className="text-muted-foreground flex items-center gap-1 text-xs">
                    <ClockIcon className="size-3" />2 hours ago
                  </div>
                </ItemContent>
              </Item>

              <Item size="xs">
                <ItemMedia variant="icon">
                  <UserIcon className="text-blue-500 size-4" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Team member invited</ItemTitle>
                  <ItemDescription>
                    Invitation sent to sarah.miller@example.com
                  </ItemDescription>
                </ItemContent>
                <ItemContent>
                  <div className="text-muted-foreground flex items-center gap-1 text-xs">
                    <ClockIcon className="size-3" />5 hours ago
                  </div>
                </ItemContent>
              </Item>

              <Item size="xs">
                <ItemMedia variant="icon">
                  <XCircleIcon className="text-red-500 size-4" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Webhook delivery failed</ItemTitle>
                  <ItemDescription>
                    Staging webhook failed with 5xx error
                  </ItemDescription>
                </ItemContent>
                <ItemContent>
                  <div className="text-muted-foreground flex items-center gap-1 text-xs">
                    <ClockIcon className="size-3" />1 day ago
                  </div>
                </ItemContent>
              </Item>
            </ItemGroup>
          </section>

          {/* Document List with Images */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Recent Documents</h2>
              <p className="text-muted-foreground text-sm">
                Access your recent files
              </p>
            </div>
            <ItemGroup>
              <Item variant="outline">
                <ItemMedia variant="image">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 flex size-full items-center justify-center">
                    <FileIcon className="text-white size-6" />
                  </div>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>API Documentation.pdf</ItemTitle>
                  <ItemDescription>
                    Last modified 3 days ago • 2.4 MB
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="ghost">Download</Button>
                  <Button variant="ghost" size="icon-sm">
                    <ChevronRightIcon />
                  </Button>
                </ItemActions>
              </Item>

              <Item variant="outline">
                <ItemMedia variant="image">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 flex size-full items-center justify-center">
                    <FileIcon className="text-white size-6" />
                  </div>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Integration Guide.docx</ItemTitle>
                  <ItemDescription>
                    Last modified 1 week ago • 1.8 MB
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="ghost">Download</Button>
                  <Button variant="ghost" size="icon-sm">
                    <ChevronRightIcon />
                  </Button>
                </ItemActions>
              </Item>

              <Item variant="outline">
                <ItemMedia variant="image">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 flex size-full items-center justify-center">
                    <FileIcon className="text-white size-6" />
                  </div>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Webhook Setup.pdf</ItemTitle>
                  <ItemDescription>
                    Last modified 2 weeks ago • 980 KB
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="ghost">Download</Button>
                  <Button variant="ghost" size="icon-sm">
                    <ChevronRightIcon />
                  </Button>
                </ItemActions>
              </Item>
            </ItemGroup>
          </section>
        </div>
      );
    }

    return <DashboardLists />;
  },
};

/**
 * Complete design system reference showing all item variants, sizes,
 * media types, and composition patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Visual Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Visual Variants</h3>
          <p className="text-muted-foreground text-sm">
            Different styles for different list contexts and emphasis levels.
          </p>
        </div>
        <ItemGroup>
          <Item variant="default">
            <ItemMedia variant="icon">
              <KeyIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Default Variant</ItemTitle>
              <ItemDescription>
                Clean appearance with transparent border
              </ItemDescription>
            </ItemContent>
          </Item>

          <Item variant="outline">
            <ItemMedia variant="icon">
              <KeyIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Outline Variant</ItemTitle>
              <ItemDescription>
                Visible border for clear separation
              </ItemDescription>
            </ItemContent>
          </Item>

          <Item variant="muted">
            <ItemMedia variant="icon">
              <KeyIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Muted Variant</ItemTitle>
              <ItemDescription>
                Subtle background for grouped items
              </ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </section>

      {/* Size Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Size Variants</h3>
          <p className="text-muted-foreground text-sm">
            Multiple sizes for different density needs and content complexity.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="font-mono text-sm">size="default"</p>
            <ItemGroup>
              <Item variant="outline" size="default">
                <ItemMedia variant="icon">
                  <UserIcon className="size-5" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Default Size Item</ItemTitle>
                  <ItemDescription>
                    Standard padding (py-3.5, px-4) with gap-3.5 for regular
                    content
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="ghost" size="icon-sm">
                    <MoreHorizontalIcon />
                  </Button>
                </ItemActions>
              </Item>
            </ItemGroup>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-sm">size="sm"</p>
            <ItemGroup>
              <Item variant="outline">
                <ItemMedia variant="icon">
                  <UserIcon className="size-5" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Small Size Item</ItemTitle>
                  <ItemDescription>
                    Reduced padding (py-2.5, px-3) with gap-2.5 for compact
                    layouts
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="ghost" size="icon-sm">
                    <MoreHorizontalIcon />
                  </Button>
                </ItemActions>
              </Item>
            </ItemGroup>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-sm">size="xs"</p>
            <ItemGroup>
              <Item variant="outline" size="xs">
                <ItemMedia variant="icon">
                  <UserIcon className="size-4" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Extra Small Size Item</ItemTitle>
                  <ItemDescription>
                    Minimal padding (py-2, px-2.5) with gap-2 for dense lists
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="ghost" size="icon-xs">
                    <MoreHorizontalIcon />
                  </Button>
                </ItemActions>
              </Item>
            </ItemGroup>
          </div>
        </div>
      </section>

      {/* Media Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Media Variants</h3>
          <p className="text-muted-foreground text-sm">
            Different media types for icons, images, and avatars.
          </p>
        </div>
        <ItemGroup>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <WebhookIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Icon Variant</ItemTitle>
              <ItemDescription>
                Direct icon placement with auto-sizing
              </ItemDescription>
            </ItemContent>
          </Item>

          <Item variant="outline">
            <ItemMedia variant="icon">
              <div className="bg-primary/10 text-primary rounded-md p-2">
                <WebhookIcon className="size-5" />
              </div>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Icon with Background</ItemTitle>
              <ItemDescription>
                Icon wrapped in colored container
              </ItemDescription>
            </ItemContent>
          </Item>

          <Item variant="outline">
            <ItemMedia variant="image">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 flex size-full items-center justify-center">
                <FileIcon className="text-white size-6" />
              </div>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Image Variant</ItemTitle>
              <ItemDescription>
                Fixed size container (size-10) that scales with item size
              </ItemDescription>
            </ItemContent>
          </Item>

          <Item variant="outline">
            <ItemMedia variant="icon">
              <div className="bg-blue-500 text-white flex size-10 items-center justify-center rounded-full text-sm font-semibold">
                AB
              </div>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Avatar Style</ItemTitle>
              <ItemDescription>
                Custom avatar with initials or profile image
              </ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </section>

      {/* With Badges and Status */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Badges and Status</h3>
          <p className="text-muted-foreground text-sm">
            Items with status indicators and badges in titles.
          </p>
        </div>
        <ItemGroup>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <CheckCircle2Icon className="text-green-500 size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>
                Active Status
                <Badge variant="secondary">Active</Badge>
              </ItemTitle>
              <ItemDescription>
                Item is currently active and operational
              </ItemDescription>
            </ItemContent>
          </Item>

          <Item variant="outline">
            <ItemMedia variant="icon">
              <ClockIcon className="text-yellow-500 size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>
                Pending Status
                <Badge variant="outline">Pending</Badge>
              </ItemTitle>
              <ItemDescription>
                Item is waiting for approval or action
              </ItemDescription>
            </ItemContent>
          </Item>

          <Item variant="outline">
            <ItemMedia variant="icon">
              <XCircleIcon className="text-red-500 size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>
                Failed Status
                <Badge variant="destructive">Failed</Badge>
              </ItemTitle>
              <ItemDescription>
                Item encountered an error or failure
              </ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </section>

      {/* Composition Patterns */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Composition Patterns</h3>
          <p className="text-muted-foreground text-sm">
            Advanced layouts with header, footer, and multiple content areas.
          </p>
        </div>
        <ItemGroup>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <WebhookIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemHeader>
                <div className="flex flex-col gap-1">
                  <ItemTitle>
                    With Header Section
                    <Badge variant="secondary">Active</Badge>
                  </ItemTitle>
                  <ItemDescription>
                    Using ItemHeader for complex layouts
                  </ItemDescription>
                </div>
                <ItemActions>
                  <Button variant="outline">Configure</Button>
                  <Button variant="ghost" size="icon-sm">
                    <MoreHorizontalIcon />
                  </Button>
                </ItemActions>
              </ItemHeader>
            </ItemContent>
          </Item>

          <Item variant="outline">
            <ItemMedia variant="icon">
              <WebhookIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>With Footer Section</ItemTitle>
              <ItemDescription>
                Using ItemFooter for additional information
              </ItemDescription>
              <ItemFooter className="border-border w-full border-t pt-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2Icon className="text-green-500 size-4" />
                  <span className="text-muted-foreground">
                    Last delivery: 2 minutes ago
                  </span>
                </div>
              </ItemFooter>
            </ItemContent>
          </Item>

          <Item variant="outline">
            <ItemMedia variant="icon">
              <KeyIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Multiple Content Areas</ItemTitle>
              <ItemDescription>
                First content area with description
              </ItemDescription>
            </ItemContent>
            <ItemContent>
              <div className="text-muted-foreground flex items-center gap-1 text-xs">
                <ClockIcon className="size-3" />2 hours ago
              </div>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="icon-sm">
                <MoreHorizontalIcon />
              </Button>
            </ItemActions>
          </Item>
        </ItemGroup>
      </section>

      {/* ItemGroup with Separator */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">ItemGroup with Separators</h3>
          <p className="text-muted-foreground text-sm">
            Using ItemGroup to organize related items with separators.
          </p>
        </div>
        <ItemGroup>
          <Item>
            <ItemMedia variant="icon">
              <UserIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>First Item</ItemTitle>
              <ItemDescription>Part of a grouped list</ItemDescription>
            </ItemContent>
          </Item>

          <ItemSeparator />

          <Item>
            <ItemMedia variant="icon">
              <UserIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Second Item</ItemTitle>
              <ItemDescription>Separated from first item</ItemDescription>
            </ItemContent>
          </Item>

          <ItemSeparator />

          <Item>
            <ItemMedia variant="icon">
              <UserIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Third Item</ItemTitle>
              <ItemDescription>Separated from second item</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </section>

      {/* Variant × Size Matrix */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Variant × Size Matrix</h3>
          <p className="text-muted-foreground text-sm">
            Complete combination reference.
          </p>
        </div>
        <div className="space-y-6">
          {(["default", "outline", "muted"] as const).map((variant) => (
            <div key={variant} className="space-y-2">
              <p className="font-mono text-sm capitalize">
                variant="{variant}"
              </p>
              <ItemGroup>
                <Item variant={variant} size="default">
                  <ItemMedia variant="icon">
                    <KeyIcon className="size-5" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Size: Default</ItemTitle>
                    <ItemDescription>
                      Standard spacing and padding
                    </ItemDescription>
                  </ItemContent>
                </Item>

                <Item variant={variant}>
                  <ItemMedia variant="icon">
                    <KeyIcon className="size-5" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Size: Small</ItemTitle>
                    <ItemDescription>
                      Reduced spacing for compact layouts
                    </ItemDescription>
                  </ItemContent>
                </Item>

                <Item variant={variant} size="xs">
                  <ItemMedia variant="icon">
                    <KeyIcon className="size-4" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Size: Extra Small</ItemTitle>
                    <ItemDescription>
                      Minimal spacing for dense lists
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </ItemGroup>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing item props.
 */
export const Interactive: Story = {
  args: {
    variant: "default",
    size: "default",
    children: (
      <>
        <ItemMedia variant="icon">
          <div className="bg-primary/10 text-primary rounded-md p-2">
            <KeyIcon className="size-5" />
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Item Title</ItemTitle>
          <ItemDescription>This is a description of the item</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon-sm">
            <MoreHorizontalIcon />
          </Button>
        </ItemActions>
      </>
    ),
  },
};
