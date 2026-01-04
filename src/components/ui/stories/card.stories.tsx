import type { Meta, StoryObj } from "@storybook/react";
import {
  ActivityIcon,
  AlertCircleIcon,
  ArrowUpRightIcon,
  CheckCircle2Icon,
  TrendingUpIcon,
  UsersIcon,
  WebhookIcon,
  XCircleIcon,
} from "lucide-react";

import { Badge } from "../badge";
import { Button } from "../button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";
import { Progress } from "../progress";

const meta: Meta<typeof Card> = {
  title: "Components/Layout & Structure/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
      description: "Card size variant affecting padding and spacing",
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
type Story = StoryObj<typeof Card>;

/**
 * Neynar Dashboard - Realistic scenarios showing cards in context
 * of managing API usage, webhooks, and user profiles.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function DashboardCards() {
      return (
        <div className="w-full max-w-5xl space-y-8">
          {/* API Usage Stats */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">API Usage Dashboard</h2>
              <p className="text-muted-foreground text-sm">
                Monitor your API consumption and limits
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Total Requests</CardTitle>
                  <CardDescription>Last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">1,284,563</div>
                    <div className="text-muted-foreground flex items-center gap-1 text-sm">
                      <TrendingUpIcon className="text-green-500 size-4" />
                      <span className="text-green-500">12.5%</span> from last
                      month
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Active Users</CardTitle>
                  <CardDescription>Monthly active users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">24,892</div>
                    <div className="text-muted-foreground flex items-center gap-1 text-sm">
                      <UsersIcon className="size-4" />
                      <span>8.2% growth</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Response Time</CardTitle>
                  <CardDescription>Average API latency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">145ms</div>
                    <div className="text-muted-foreground flex items-center gap-1 text-sm">
                      <ActivityIcon className="size-4" />
                      <span>P95: 280ms</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Rate Limit Card */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Current Usage</h2>
              <p className="text-muted-foreground text-sm">
                Your plan limits and consumption
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>API Rate Limit</CardTitle>
                <CardDescription>
                  Requests this month: 847,231 / 1,000,000
                </CardDescription>
                <CardAction>
                  <Button variant="outline">Upgrade Plan</Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Progress value={84.7} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">84.7% used</span>
                    <span className="text-muted-foreground">
                      152,769 remaining
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-border border-t">
                <p className="text-muted-foreground text-sm">
                  Resets on <span className="font-medium">January 1, 2024</span>
                </p>
              </CardFooter>
            </Card>
          </section>

          {/* Webhook Status Cards */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Webhook Endpoints</h2>
              <p className="text-muted-foreground text-sm">
                Monitor your webhook delivery status
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/10 text-green-500 rounded-md p-2">
                      <WebhookIcon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle>Production Webhook</CardTitle>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                      <CardDescription>
                        https://api.example.com/webhooks
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Success rate
                      </span>
                      <span className="font-medium">99.8%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Last delivery
                      </span>
                      <span className="font-medium">2 minutes ago</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-border border-t">
                  <Button variant="ghost">View Logs</Button>
                  <Button variant="ghost">Configure</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-500/10 text-red-500 rounded-md p-2">
                      <WebhookIcon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle>Staging Webhook</CardTitle>
                        <Badge variant="destructive">Failed</Badge>
                      </div>
                      <CardDescription>
                        https://staging.example.com/hooks
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Success rate
                      </span>
                      <span className="font-medium">12.3%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Last failure
                      </span>
                      <span className="font-medium">5 minutes ago</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-border border-t">
                  <Button variant="ghost">View Errors</Button>
                  <Button variant="ghost">Retry Failed</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* User Profile Card */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Team Members</h2>
              <p className="text-muted-foreground text-sm">
                Manage your team access
              </p>
            </div>
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-full text-lg font-semibold">
                    JD
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <CardTitle>Jane Doe</CardTitle>
                      <Badge variant="outline">Admin</Badge>
                    </div>
                    <CardDescription>jane.doe@example.com</CardDescription>
                  </div>
                </div>
                <CardAction>
                  <Button variant="ghost">Edit</Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">API Access</span>
                    <CheckCircle2Icon className="text-green-500 size-5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Webhook Access</span>
                    <CheckCircle2Icon className="text-green-500 size-5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Analytics Access</span>
                    <XCircleIcon className="text-muted-foreground size-5" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-border border-t">
                <div className="flex w-full items-center justify-between">
                  <span className="text-muted-foreground text-sm">
                    Last active: 2 hours ago
                  </span>
                  <Button variant="link">
                    View Activity
                    <ArrowUpRightIcon className="ml-1 size-3" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </section>
        </div>
      );
    }

    return <DashboardCards />;
  },
};

/**
 * Complete design system reference showing all card variants, sizes, and composition patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Size Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Size Variants</h3>
          <p className="text-muted-foreground text-sm">
            Default and small sizes for different density needs.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card size="default">
            <CardHeader>
              <CardTitle>Default Size Card</CardTitle>
              <CardDescription>Standard spacing and padding</CardDescription>
            </CardHeader>
            <CardContent>
              This card uses the default size with standard padding (py-6, px-6)
              and gap-6 between sections.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Small Size Card</CardTitle>
              <CardDescription>
                Compact spacing for dense layouts
              </CardDescription>
            </CardHeader>
            <CardContent>
              This card uses the small size with reduced padding (py-4, px-4)
              and gap-4 between sections.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Basic Composition */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Basic Composition</h3>
          <p className="text-muted-foreground text-sm">
            All subcomponents: Header, Title, Description, Content, Footer.
          </p>
        </div>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Complete Card Example</CardTitle>
            <CardDescription>
              Demonstrating all card subcomponents in a single composition
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              The card content area can contain any content including text,
              forms, lists, or other components. This is the main body of your
              card.
            </p>
          </CardContent>
          <CardFooter className="border-border border-t">
            <Button variant="outline">Secondary</Button>
            <Button>Primary</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Header with Action */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Header with Action</h3>
          <p className="text-muted-foreground text-sm">
            CardAction positions buttons or controls in the header area.
          </p>
        </div>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Manage your account preferences</CardDescription>
            <CardAction>
              <Button variant="outline">Save</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              The CardAction component automatically positions in the top-right
              corner of the header, spanning both title and description rows.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Content Only */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Content Only</h3>
          <p className="text-muted-foreground text-sm">
            Minimal card with just content.
          </p>
        </div>
        <Card className="max-w-md">
          <CardContent>
            <p className="text-sm">
              Cards don't require all subcomponents. You can use just
              CardContent for simple containers or when the context is already
              established.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Footer Variants</h3>
          <p className="text-muted-foreground text-sm">
            Different footer layouts and styles.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Without Border</CardTitle>
              <CardDescription>Default footer appearance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Footer without border styling.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>With Border</CardTitle>
              <CardDescription>Footer with top border</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Add border-t class to visually separate the footer.
              </p>
            </CardContent>
            <CardFooter className="border-border border-t">
              <Button>Action</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Status Indicators */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Status Indicators</h3>
          <p className="text-muted-foreground text-sm">
            Cards displaying different states and statuses.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="text-green-500 size-5" />
                <CardTitle>Success</CardTitle>
              </div>
              <CardDescription>Operation completed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Your changes have been saved successfully.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertCircleIcon className="text-yellow-500 size-5" />
                <CardTitle>Warning</CardTitle>
              </div>
              <CardDescription>Attention required</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Please review your settings before continuing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <XCircleIcon className="text-red-500 size-5" />
                <CardTitle>Error</CardTitle>
              </div>
              <CardDescription>Action failed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Unable to process your request. Please try again.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Complex Content */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Complex Content</h3>
          <p className="text-muted-foreground text-sm">
            Cards can contain forms, lists, and other complex layouts.
          </p>
        </div>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>
              Choose how you want to be notified
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Email Notifications</p>
                  <p className="text-muted-foreground text-sm">
                    Receive updates via email
                  </p>
                </div>
                <Badge variant="outline">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Push Notifications</p>
                  <p className="text-muted-foreground text-sm">
                    Get notified on your device
                  </p>
                </div>
                <Badge variant="outline">Disabled</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">SMS Notifications</p>
                  <p className="text-muted-foreground text-sm">
                    Text message alerts
                  </p>
                </div>
                <Badge variant="outline">Enabled</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-border border-t">
            <Button variant="outline">Reset</Button>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  ),
};

/**
 * Frosted card effect with backdrop blur over colorful backgrounds.
 * Cards use 75% opacity and backdrop-blur for a frosted glass appearance.
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
          Cards use transparent backgrounds with backdrop blur for a frosted
          glass look. Customize with{" "}
          <code className="bg-muted px-1 rounded">--surface-blur</code> and{" "}
          <code className="bg-muted px-1 rounded">--card</code> tokens.
        </p>
      </div>

      {/* Busy background with color blocks and text */}
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
        {/* Text content behind */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h2 className="text-xl font-bold">Background Content</h2>
          <p className="text-sm opacity-90">
            This text should be visible but blurred through the cards above.
          </p>
        </div>
        {/* Cards on top */}
        <div className="relative grid gap-4 md:grid-cols-2 mt-24">
          <Card>
            <CardHeader>
              <CardTitle>Frosted Glass Card</CardTitle>
              <CardDescription>See the color blocks through</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                The card's 75% opacity background combined with backdrop-blur
                creates a beautiful frosted glass effect over busy content.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary">Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Usage</CardTitle>
              <CardDescription>Current billing period</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-3xl font-bold">847,231</div>
                <Progress value={84.7} className="h-2" />
                <p className="text-muted-foreground text-sm">
                  84.7% of 1M requests
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Simple gradient for comparison */}
      <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="relative">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm text-white flex size-10 items-center justify-center rounded-full">
                  <UsersIcon className="size-5" />
                </div>
                <div>
                  <CardTitle>Team Plan</CardTitle>
                  <CardDescription>5 members active</CardDescription>
                </div>
              </div>
              <CardAction>
                <Badge variant="secondary">Pro</Badge>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly cost</span>
                  <span className="font-medium">$99/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Next billing</span>
                  <span className="font-medium">Jan 15, 2025</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-border border-t">
              <Button variant="outline">Manage</Button>
              <Button>Upgrade</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  ),
};

/**
 * Interactive playground for testing card props.
 */
export const Interactive: Story = {
  args: {
    size: "default",
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the card content area where your main content goes.</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Continue</Button>
        </CardFooter>
      </>
    ),
  },
};
