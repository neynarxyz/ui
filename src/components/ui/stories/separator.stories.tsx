import type { Meta, StoryObj } from "@storybook/react";
import {
  BellIcon,
  CreditCardIcon,
  GlobeIcon,
  KeyIcon,
  LockIcon,
  ShieldIcon,
  UserIcon,
} from "lucide-react";

import { Button } from "../button";
import { Separator } from "../separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Layout & Structure/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Separator orientation (horizontal or vertical)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

/**
 * Section dividers - Realistic scenarios showing separators in context
 * of Neynar Dashboard settings and form layouts.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function SettingsPanel() {
      return (
        <div className="w-full max-w-3xl space-y-12">
          {/* Account Settings with Horizontal Separators */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Account Settings</h2>
              <p className="text-muted-foreground text-sm">
                Manage your account preferences and security
              </p>
            </div>

            <div className="bg-card border-border rounded-lg border p-6">
              {/* Profile Section */}
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-full">
                  <UserIcon className="size-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Profile Information</h3>
                  <p className="text-muted-foreground text-sm">
                    Update your profile details and public information
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Edit Profile
                </Button>
              </div>

              <Separator className="my-6" />

              {/* Security Section */}
              <div className="flex items-center gap-4">
                <div className="bg-orange-500/10 text-orange-500 flex size-12 items-center justify-center rounded-full">
                  <LockIcon className="size-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Security Settings</h3>
                  <p className="text-muted-foreground text-sm">
                    Manage password and two-factor authentication
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>

              <Separator className="my-6" />

              {/* API Keys Section */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/10 text-blue-500 flex size-12 items-center justify-center rounded-full">
                  <KeyIcon className="size-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">API Keys</h3>
                  <p className="text-muted-foreground text-sm">
                    Manage your API keys and authentication tokens
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Manage Keys
                </Button>
              </div>

              <Separator className="my-6" />

              {/* Billing Section */}
              <div className="flex items-center gap-4">
                <div className="bg-green-500/10 text-green-500 flex size-12 items-center justify-center rounded-full">
                  <CreditCardIcon className="size-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Billing & Payments</h3>
                  <p className="text-muted-foreground text-sm">
                    View invoices and manage payment methods
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  View Billing
                </Button>
              </div>
            </div>
          </section>

          {/* Notification Preferences with Horizontal Separators */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">
                Notification Preferences
              </h2>
              <p className="text-muted-foreground text-sm">
                Choose how and when you want to be notified
              </p>
            </div>

            <div className="bg-card border-border space-y-0 rounded-lg border">
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <BellIcon className="text-muted-foreground size-5" />
                  <div className="flex-1">
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-muted-foreground text-sm">
                      Receive updates and alerts via email
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Configure
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="p-6">
                <div className="flex items-center gap-3">
                  <GlobeIcon className="text-muted-foreground size-5" />
                  <div className="flex-1">
                    <p className="font-medium">Webhook Events</p>
                    <p className="text-muted-foreground text-sm">
                      Configure webhook delivery preferences
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Configure
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="p-6">
                <div className="flex items-center gap-3">
                  <ShieldIcon className="text-muted-foreground size-5" />
                  <div className="flex-1">
                    <p className="font-medium">Security Alerts</p>
                    <p className="text-muted-foreground text-sm">
                      Get notified about security events
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Configure
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Toolbar with Vertical Separators */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Action Toolbar</h2>
              <p className="text-muted-foreground text-sm">
                Vertical separators for grouping toolbar actions
              </p>
            </div>

            <div className="bg-card border-border flex items-center gap-2 rounded-lg border p-3">
              <Button variant="ghost" size="sm">
                Bold
              </Button>
              <Button variant="ghost" size="sm">
                Italic
              </Button>
              <Button variant="ghost" size="sm">
                Underline
              </Button>

              <Separator orientation="vertical" className="h-6" />

              <Button variant="ghost" size="sm">
                Align Left
              </Button>
              <Button variant="ghost" size="sm">
                Align Center
              </Button>
              <Button variant="ghost" size="sm">
                Align Right
              </Button>

              <Separator orientation="vertical" className="h-6" />

              <Button variant="ghost" size="sm">
                Link
              </Button>
              <Button variant="ghost" size="sm">
                Image
              </Button>
            </div>
          </section>

          {/* Inline Content with Vertical Separators */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Metadata Display</h2>
              <p className="text-muted-foreground text-sm">
                Separating inline metadata with vertical dividers
              </p>
            </div>

            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="font-semibold">API Request Details</h3>
              <div className="text-muted-foreground mt-4 flex items-center gap-3 text-sm">
                <span>Status: 200 OK</span>
                <Separator orientation="vertical" className="h-4" />
                <span>Latency: 142ms</span>
                <Separator orientation="vertical" className="h-4" />
                <span>Size: 2.4 KB</span>
                <Separator orientation="vertical" className="h-4" />
                <span>2 minutes ago</span>
              </div>

              <Separator className="my-6" />

              <h3 className="font-semibold">Webhook Delivery</h3>
              <div className="text-muted-foreground mt-4 flex items-center gap-3 text-sm">
                <span className="text-green-500">Success</span>
                <Separator orientation="vertical" className="h-4" />
                <span>Attempt 1/3</span>
                <Separator orientation="vertical" className="h-4" />
                <span>125ms</span>
                <Separator orientation="vertical" className="h-4" />
                <span>5 minutes ago</span>
              </div>
            </div>
          </section>
        </div>
      );
    }

    return <SettingsPanel />;
  },
};

/**
 * Complete design system reference showing all separator orientations and usage patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Horizontal Orientation */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Horizontal Separator</h3>
          <p className="text-muted-foreground text-sm">
            Default orientation for dividing vertical content sections.
          </p>
        </div>
        <div className="bg-card border-border max-w-md rounded-lg border p-6">
          <p className="text-sm">First section of content</p>
          <Separator className="my-4" />
          <p className="text-sm">Second section of content</p>
          <Separator className="my-4" />
          <p className="text-sm">Third section of content</p>
        </div>
      </section>

      {/* Vertical Orientation */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Vertical Separator</h3>
          <p className="text-muted-foreground text-sm">
            Used for dividing horizontal content or toolbar groups.
          </p>
        </div>
        <div className="bg-card border-border flex items-center gap-3 rounded-lg border p-6">
          <span className="text-sm">Item 1</span>
          <Separator orientation="vertical" className="h-6" />
          <span className="text-sm">Item 2</span>
          <Separator orientation="vertical" className="h-6" />
          <span className="text-sm">Item 3</span>
          <Separator orientation="vertical" className="h-6" />
          <span className="text-sm">Item 4</span>
        </div>
      </section>

      {/* In List Items */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">In List Items</h3>
          <p className="text-muted-foreground text-sm">
            Separating items in a list or menu structure.
          </p>
        </div>
        <div className="bg-card border-border max-w-md space-y-0 rounded-lg border">
          <div className="p-4">
            <p className="font-medium text-sm">Dashboard</p>
            <p className="text-muted-foreground text-sm">View your overview</p>
          </div>
          <Separator />
          <div className="p-4">
            <p className="font-medium text-sm">API Keys</p>
            <p className="text-muted-foreground text-sm">
              Manage authentication
            </p>
          </div>
          <Separator />
          <div className="p-4">
            <p className="font-medium text-sm">Webhooks</p>
            <p className="text-muted-foreground text-sm">Configure endpoints</p>
          </div>
          <Separator />
          <div className="p-4">
            <p className="font-medium text-sm">Settings</p>
            <p className="text-muted-foreground text-sm">Account preferences</p>
          </div>
        </div>
      </section>

      {/* Custom Spacing */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Custom Spacing</h3>
          <p className="text-muted-foreground text-sm">
            Control spacing around separators with margin utilities.
          </p>
        </div>
        <div className="bg-card border-border max-w-md space-y-0 rounded-lg border p-6">
          <p className="text-sm">Tight spacing (my-2)</p>
          <Separator className="my-2" />
          <p className="text-sm">Default spacing (my-4)</p>
          <Separator className="my-4" />
          <p className="text-sm">Loose spacing (my-6)</p>
          <Separator className="my-6" />
          <p className="text-sm">Extra loose spacing (my-8)</p>
        </div>
      </section>

      {/* Inline with Text */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Inline with Text</h3>
          <p className="text-muted-foreground text-sm">
            Vertical separators for inline content and metadata.
          </p>
        </div>
        <div className="bg-card border-border max-w-2xl space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Production</span>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-muted-foreground">Updated 2 hours ago</span>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-green-500">Active</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Staging</span>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-muted-foreground">Updated 1 day ago</span>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-yellow-500">Pending</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Development</span>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-muted-foreground">Updated 3 days ago</span>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-muted-foreground">Inactive</span>
          </div>
        </div>
      </section>

      {/* Mixed Orientations */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Mixed Orientations</h3>
          <p className="text-muted-foreground text-sm">
            Combining horizontal and vertical separators in complex layouts.
          </p>
        </div>
        <div className="bg-card border-border max-w-2xl rounded-lg border">
          <div className="flex items-center gap-4 p-4">
            <Button variant="outline" size="sm">
              File
            </Button>
            <Button variant="outline" size="sm">
              Edit
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button variant="outline" size="sm">
              View
            </Button>
            <Button variant="outline" size="sm">
              Help
            </Button>
          </div>

          <Separator />

          <div className="p-6">
            <p className="text-sm">
              Main content area with both horizontal and vertical separators
              used appropriately for layout structure.
            </p>
          </div>

          <Separator />

          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3 text-sm">
              <span>Left section</span>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-muted-foreground">Metadata</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm">Save</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Height Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Vertical Height Variants</h3>
          <p className="text-muted-foreground text-sm">
            Different heights for vertical separators to match content.
          </p>
        </div>
        <div className="bg-card border-border flex items-center gap-4 rounded-lg border p-6">
          <span className="text-sm">Small</span>
          <Separator orientation="vertical" className="h-3" />
          <span className="text-sm">Medium</span>
          <Separator orientation="vertical" className="h-5" />
          <span className="text-sm">Large</span>
          <Separator orientation="vertical" className="h-8" />
          <span className="text-sm">Extra Large</span>
          <Separator orientation="vertical" className="h-12" />
          <span className="text-sm">Self Stretch</span>
        </div>
      </section>

      {/* Semantic Usage */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Semantic Usage</h3>
          <p className="text-muted-foreground text-sm">
            Using separators to create visual hierarchy and organization.
          </p>
        </div>
        <div className="bg-card border-border max-w-md space-y-0 rounded-lg border">
          <div className="p-6">
            <h4 className="font-semibold">Section Header</h4>
            <p className="text-muted-foreground mt-2 text-sm">
              Separators help establish clear boundaries between different
              content sections, improving scanability and visual hierarchy.
            </p>
          </div>
          <Separator />
          <div className="p-6">
            <h4 className="font-semibold">Related Content</h4>
            <p className="text-muted-foreground mt-2 text-sm">
              Group related information together and use separators to
              distinguish between different logical sections.
            </p>
          </div>
          <Separator />
          <div className="p-6">
            <h4 className="font-semibold">Action Area</h4>
            <p className="text-muted-foreground mt-2 text-sm">
              Footer or action areas are often separated to clearly indicate
              interactive elements.
            </p>
          </div>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing separator props.
 */
export const Interactive: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="w-96 space-y-6 p-6">
      <div className="space-y-2">
        <p className="text-sm">Content above separator</p>
      </div>
      <Separator {...args} />
      <div className="space-y-2">
        <p className="text-sm">Content below separator</p>
      </div>
    </div>
  ),
};
