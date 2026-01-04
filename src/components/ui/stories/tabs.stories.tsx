import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import {
  ActivityIcon,
  BellIcon,
  KeyIcon,
  LineChartIcon,
  SettingsIcon,
  WebhookIcon,
} from "lucide-react";
import { useState } from "react";

import { Badge } from "../badge";
import { Button } from "../button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Navigation & Menus/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  args: {
    onValueChange: fn(),
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Layout orientation of tabs",
    },
    defaultValue: {
      control: "text",
      description: "Default active tab value",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/**
 * Dashboard Navigation - A realistic scenario showing tabs in the context
 * of the Neynar Dashboard for switching between different sections.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function DashboardTabs() {
      const [activeTab, setActiveTab] = useState("webhooks");

      return (
        <div className="w-full max-w-4xl space-y-6">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Developer Dashboard</h2>
              <p className="text-muted-foreground text-sm">
                Manage your API keys, webhooks, and monitor your usage.
              </p>
            </div>
            <Button variant="outline">
              <SettingsIcon data-icon="inline-start" />
              Settings
            </Button>
          </div>

          {/* Main Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="webhooks">
                <WebhookIcon />
                Webhooks
                <Badge variant="secondary" className="ml-1.5">
                  3
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="keys">
                <KeyIcon />
                API Keys
              </TabsTrigger>
              <TabsTrigger value="logs">
                <ActivityIcon />
                Activity Logs
              </TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                <LineChartIcon />
                Analytics
                <Badge variant="outline" className="ml-1.5">
                  Soon
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="webhooks" className="space-y-4">
              <div className="border-border rounded-lg border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Webhook Endpoints</h3>
                    <p className="text-muted-foreground text-sm">
                      Configure webhooks to receive real-time notifications
                    </p>
                  </div>
                  <Button>Add Webhook</Button>
                </div>
                <div className="mt-4 space-y-2">
                  {[
                    {
                      url: "https://api.example.com/webhooks/cast-created",
                      events: "cast.created",
                    },
                    {
                      url: "https://api.example.com/webhooks/user-followed",
                      events: "user.followed",
                    },
                    {
                      url: "https://api.example.com/webhooks/reactions",
                      events: "reaction.created",
                    },
                  ].map((webhook, i) => (
                    <div
                      key={i}
                      className="border-border bg-muted/50 flex items-center justify-between rounded-md border p-3"
                    >
                      <div>
                        <code className="text-xs">{webhook.url}</code>
                        <p className="text-muted-foreground mt-1 text-xs">
                          Events: {webhook.events}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Configure
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="keys" className="space-y-4">
              <div className="border-border rounded-lg border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">API Keys</h3>
                    <p className="text-muted-foreground text-sm">
                      Manage authentication keys for your applications
                    </p>
                  </div>
                  <Button>Create Key</Button>
                </div>
                <div className="mt-4 space-y-2">
                  {[
                    { name: "Production Key", key: "neynar_sk_prod_****_8f3d" },
                    { name: "Development Key", key: "neynar_sk_dev_****_2a1c" },
                  ].map((apiKey, i) => (
                    <div
                      key={i}
                      className="border-border bg-muted/50 flex items-center justify-between rounded-md border p-3"
                    >
                      <div>
                        <p className="text-sm font-medium">{apiKey.name}</p>
                        <code className="text-muted-foreground mt-1 text-xs">
                          {apiKey.key}
                        </code>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Copy
                        </Button>
                        <Button variant="ghost" size="sm">
                          Revoke
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="logs" className="space-y-4">
              <div className="border-border rounded-lg border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Activity Logs</h3>
                    <p className="text-muted-foreground text-sm">
                      Recent API activity and webhook deliveries
                    </p>
                  </div>
                  <Button variant="outline">Export</Button>
                </div>
                <div className="mt-4 space-y-2">
                  {[
                    {
                      action: "GET /v2/farcaster/user",
                      status: "200",
                      time: "2 min ago",
                    },
                    {
                      action: "POST /v2/farcaster/cast",
                      status: "201",
                      time: "5 min ago",
                    },
                    {
                      action: "Webhook delivered",
                      status: "200",
                      time: "12 min ago",
                    },
                  ].map((log, i) => (
                    <div
                      key={i}
                      className="border-border bg-muted/50 flex items-center justify-between rounded-md border p-3"
                    >
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={
                            log.status === "200" || log.status === "201"
                              ? "default"
                              : "destructive"
                          }
                        >
                          {log.status}
                        </Badge>
                        <code className="text-xs">{log.action}</code>
                      </div>
                      <span className="text-muted-foreground text-xs">
                        {log.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <div className="border-border rounded-lg border p-6">
                <p className="text-muted-foreground text-sm">
                  Analytics dashboard coming soon...
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      );
    }

    return <DashboardTabs />;
  },
};

/**
 * Complete design system reference showing all tab variants, orientations, and states.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Default Variant */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Default Variant</h3>
          <p className="text-muted-foreground text-sm">
            Tabs with background highlighting for clear active states.
          </p>
        </div>
        <Tabs defaultValue="overview">
          <TabsList variant="default">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="py-4">
            <p className="text-sm">Overview content</p>
          </TabsContent>
          <TabsContent value="analytics" className="py-4">
            <p className="text-sm">Analytics content</p>
          </TabsContent>
          <TabsContent value="reports" className="py-4">
            <p className="text-sm">Reports content</p>
          </TabsContent>
          <TabsContent value="settings" className="py-4">
            <p className="text-sm">Settings content</p>
          </TabsContent>
        </Tabs>
      </section>

      {/* Line Variant */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Line Variant</h3>
          <p className="text-muted-foreground text-sm">
            Underlined tabs for a minimal, clean appearance.
          </p>
        </div>
        <Tabs defaultValue="all">
          <TabsList variant="line">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="py-4">
            <p className="text-sm">All items</p>
          </TabsContent>
          <TabsContent value="active" className="py-4">
            <p className="text-sm">Active items</p>
          </TabsContent>
          <TabsContent value="completed" className="py-4">
            <p className="text-sm">Completed items</p>
          </TabsContent>
          <TabsContent value="archived" className="py-4">
            <p className="text-sm">Archived items</p>
          </TabsContent>
        </Tabs>
      </section>

      {/* With Icons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Icons</h3>
          <p className="text-muted-foreground text-sm">
            Tabs with icons for better visual communication.
          </p>
        </div>
        <Tabs defaultValue="activity">
          <TabsList>
            <TabsTrigger value="activity">
              <ActivityIcon />
              Activity
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <BellIcon />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="settings">
              <SettingsIcon />
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="activity" className="py-4">
            <p className="text-sm">Recent activity and updates</p>
          </TabsContent>
          <TabsContent value="notifications" className="py-4">
            <p className="text-sm">Notification preferences</p>
          </TabsContent>
          <TabsContent value="settings" className="py-4">
            <p className="text-sm">Account settings</p>
          </TabsContent>
        </Tabs>
      </section>

      {/* With Badges */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Badges</h3>
          <p className="text-muted-foreground text-sm">
            Tabs with count badges and status indicators.
          </p>
        </div>
        <Tabs defaultValue="inbox">
          <TabsList variant="line">
            <TabsTrigger value="inbox">
              Inbox
              <Badge variant="default" className="ml-1.5">
                12
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="drafts">
              Drafts
              <Badge variant="secondary" className="ml-1.5">
                3
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="sent">Sent</TabsTrigger>
            <TabsTrigger value="trash">
              Trash
              <Badge variant="outline" className="ml-1.5">
                5
              </Badge>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="inbox" className="py-4">
            <p className="text-sm">12 unread messages</p>
          </TabsContent>
          <TabsContent value="drafts" className="py-4">
            <p className="text-sm">3 draft messages</p>
          </TabsContent>
          <TabsContent value="sent" className="py-4">
            <p className="text-sm">Sent messages</p>
          </TabsContent>
          <TabsContent value="trash" className="py-4">
            <p className="text-sm">5 items in trash</p>
          </TabsContent>
        </Tabs>
      </section>

      {/* Disabled State */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Disabled State</h3>
          <p className="text-muted-foreground text-sm">
            Some tabs can be disabled to prevent interaction.
          </p>
        </div>
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="billing" disabled>
              Billing
            </TabsTrigger>
            <TabsTrigger value="team" disabled>
              Team
              <Badge variant="outline" className="ml-1.5">
                Pro
              </Badge>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="py-4">
            <p className="text-sm">General settings</p>
          </TabsContent>
          <TabsContent value="privacy" className="py-4">
            <p className="text-sm">Privacy settings</p>
          </TabsContent>
        </Tabs>
      </section>

      {/* Vertical Orientation */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Vertical Orientation</h3>
          <p className="text-muted-foreground text-sm">
            Tabs stacked vertically for sidebar-style navigation.
          </p>
        </div>
        <div className="flex gap-6">
          <Tabs
            defaultValue="profile"
            orientation="vertical"
            className="w-[600px]"
          >
            <TabsList variant="default">
              <TabsTrigger value="profile">
                <SettingsIcon />
                Profile
              </TabsTrigger>
              <TabsTrigger value="account">
                <KeyIcon />
                Account
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <BellIcon />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="display">Display</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="py-4">
              <div className="space-y-2">
                <h4 className="font-medium">Profile Settings</h4>
                <p className="text-muted-foreground text-sm">
                  Update your profile information and public visibility.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="account" className="py-4">
              <div className="space-y-2">
                <h4 className="font-medium">Account Settings</h4>
                <p className="text-muted-foreground text-sm">
                  Manage your account security and authentication.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="notifications" className="py-4">
              <div className="space-y-2">
                <h4 className="font-medium">Notification Preferences</h4>
                <p className="text-muted-foreground text-sm">
                  Control how and when you receive notifications.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="display" className="py-4">
              <div className="space-y-2">
                <h4 className="font-medium">Display Settings</h4>
                <p className="text-muted-foreground text-sm">
                  Customize the appearance and theme.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Vertical with Line Variant */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Vertical with Line Variant</h3>
          <p className="text-muted-foreground text-sm">
            Vertical tabs with line indicator on the right edge.
          </p>
        </div>
        <div className="flex gap-6">
          <Tabs
            defaultValue="docs"
            orientation="vertical"
            className="w-[600px]"
          >
            <TabsList variant="line">
              <TabsTrigger value="docs">Documentation</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="api">API Reference</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>
            <TabsContent value="docs" className="py-4">
              <div className="space-y-2">
                <h4 className="font-medium">Documentation</h4>
                <p className="text-muted-foreground text-sm">
                  Browse comprehensive documentation for all features.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="guides" className="py-4">
              <div className="space-y-2">
                <h4 className="font-medium">Guides</h4>
                <p className="text-muted-foreground text-sm">
                  Step-by-step tutorials and how-to guides.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="api" className="py-4">
              <div className="space-y-2">
                <h4 className="font-medium">API Reference</h4>
                <p className="text-muted-foreground text-sm">
                  Complete API documentation and endpoint references.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="examples" className="py-4">
              <div className="space-y-2">
                <h4 className="font-medium">Examples</h4>
                <p className="text-muted-foreground text-sm">
                  Code examples and implementation patterns.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing tabs props.
 */
export const Interactive: Story = {
  args: {
    defaultValue: "account",
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="w-[500px]">
      <Tabs {...args}>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="py-4">
          <p className="text-sm">
            Manage your account settings and preferences here.
          </p>
        </TabsContent>
        <TabsContent value="password" className="py-4">
          <p className="text-sm">
            Change your password and update security settings.
          </p>
        </TabsContent>
        <TabsContent value="notifications" className="py-4">
          <p className="text-sm">
            Configure how you receive notifications and alerts.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  ),
};
