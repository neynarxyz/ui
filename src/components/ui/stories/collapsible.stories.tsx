import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import {
  BellIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CodeIcon,
  DatabaseIcon,
  LockIcon,
  MailIcon,
  MonitorIcon,
  SettingsIcon,
  ShieldIcon,
  UserIcon,
  WebhookIcon,
  ZapIcon,
} from "lucide-react";
import { useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../collapsible";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import { Switch } from "../switch";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Layout & Structure/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
  args: {
    onOpenChange: fn(),
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "Controlled open state",
    },
    defaultOpen: {
      control: "boolean",
      description: "Initial open state (uncontrolled)",
    },
    onOpenChange: {
      description: "Callback when open state changes",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

/**
 * Advanced Settings - Realistic scenario showing collapsible sections in the
 * Neynar Dashboard for managing API settings, webhooks, and security preferences.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function AdvancedSettings() {
      const [apiSettingsOpen, setApiSettingsOpen] = useState(false);
      const [webhooksOpen, setWebhooksOpen] = useState(false);
      const [securityOpen, setSecurityOpen] = useState(true);
      const [notificationsOpen, setNotificationsOpen] = useState(false);

      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">Advanced Settings</h2>
            <p className="text-muted-foreground text-sm">
              Configure API settings, webhooks, security, and notifications for
              your Neynar project.
            </p>
          </div>

          <div className="space-y-3">
            {/* API Settings */}
            <Collapsible
              open={apiSettingsOpen}
              onOpenChange={setApiSettingsOpen}
              className="border-border bg-card rounded-lg border"
            >
              <CollapsibleTrigger className="hover:bg-muted/50 flex w-full items-center justify-between rounded-lg p-4 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-md p-2">
                    <CodeIcon className="size-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">API Settings</p>
                    <p className="text-muted-foreground text-sm">
                      Configure rate limits and API behavior
                    </p>
                  </div>
                </div>
                {apiSettingsOpen ? (
                  <ChevronUpIcon className="text-muted-foreground size-5 shrink-0" />
                ) : (
                  <ChevronDownIcon className="text-muted-foreground size-5 shrink-0" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="border-t p-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="rate-limit">
                        Rate Limit (requests/day)
                      </Label>
                      <Input
                        id="rate-limit"
                        type="number"
                        defaultValue="10000"
                        placeholder="10000"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Enable CORS</Label>
                        <p className="text-muted-foreground text-sm">
                          Allow cross-origin requests
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>API Versioning</Label>
                        <p className="text-muted-foreground text-sm">
                          Use versioned API endpoints
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Webhooks */}
            <Collapsible
              open={webhooksOpen}
              onOpenChange={setWebhooksOpen}
              className="border-border bg-card rounded-lg border"
            >
              <CollapsibleTrigger className="hover:bg-muted/50 flex w-full items-center justify-between rounded-lg p-4 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500/10 text-blue-500 rounded-md p-2">
                    <WebhookIcon className="size-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Webhooks</p>
                    <p className="text-muted-foreground text-sm">
                      Manage webhook endpoints and events
                    </p>
                  </div>
                </div>
                {webhooksOpen ? (
                  <ChevronUpIcon className="text-muted-foreground size-5 shrink-0" />
                ) : (
                  <ChevronDownIcon className="text-muted-foreground size-5 shrink-0" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="border-t p-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="webhook-url">Webhook URL</Label>
                      <Input
                        id="webhook-url"
                        placeholder="https://api.example.com/webhooks"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Cast Events</Label>
                        <p className="text-muted-foreground text-sm">
                          Trigger on new casts
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Reaction Events</Label>
                        <p className="text-muted-foreground text-sm">
                          Trigger on likes and recasts
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Follow Events</Label>
                        <p className="text-muted-foreground text-sm">
                          Trigger on new followers
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Security Settings */}
            <Collapsible
              open={securityOpen}
              onOpenChange={setSecurityOpen}
              className="border-border bg-card rounded-lg border"
            >
              <CollapsibleTrigger className="hover:bg-muted/50 flex w-full items-center justify-between rounded-lg p-4 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/10 text-green-600 dark:text-green-400 rounded-md p-2">
                    <ShieldIcon className="size-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Security</p>
                    <p className="text-muted-foreground text-sm">
                      Configure security and access controls
                    </p>
                  </div>
                </div>
                {securityOpen ? (
                  <ChevronUpIcon className="text-muted-foreground size-5 shrink-0" />
                ) : (
                  <ChevronDownIcon className="text-muted-foreground size-5 shrink-0" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="border-t p-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Two-Factor Authentication</Label>
                        <p className="text-muted-foreground text-sm">
                          Require 2FA for all team members
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>IP Whitelist</Label>
                        <p className="text-muted-foreground text-sm">
                          Restrict API access by IP address
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Audit Logging</Label>
                        <p className="text-muted-foreground text-sm">
                          Log all API requests and changes
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="session-timeout">
                        Session Timeout (hours)
                      </Label>
                      <Input
                        id="session-timeout"
                        type="number"
                        defaultValue="24"
                        placeholder="24"
                      />
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Notifications */}
            <Collapsible
              open={notificationsOpen}
              onOpenChange={setNotificationsOpen}
              className="border-border bg-card rounded-lg border"
            >
              <CollapsibleTrigger className="hover:bg-muted/50 flex w-full items-center justify-between rounded-lg p-4 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-md p-2">
                    <BellIcon className="size-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Notifications</p>
                    <p className="text-muted-foreground text-sm">
                      Email and alert preferences
                    </p>
                  </div>
                </div>
                {notificationsOpen ? (
                  <ChevronUpIcon className="text-muted-foreground size-5 shrink-0" />
                ) : (
                  <ChevronDownIcon className="text-muted-foreground size-5 shrink-0" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="border-t p-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Rate Limit Alerts</Label>
                        <p className="text-muted-foreground text-sm">
                          Notify when approaching rate limits
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Security Alerts</Label>
                        <p className="text-muted-foreground text-sm">
                          Notify on suspicious activity
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Billing Updates</Label>
                        <p className="text-muted-foreground text-sm">
                          Notify on billing changes
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Weekly Reports</Label>
                        <p className="text-muted-foreground text-sm">
                          Receive weekly usage reports
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Save Button */}
          <div className="flex justify-end border-t pt-4">
            <Button>
              <SettingsIcon data-icon="inline-start" />
              Save Settings
            </Button>
          </div>
        </div>
      );
    }

    return <AdvancedSettings />;
  },
};

/**
 * Complete design system reference showing all collapsible variants, states,
 * and composition patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-3xl space-y-10">
      {/* Basic Collapsible */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Basic Collapsible</h3>
          <p className="text-muted-foreground text-sm">
            Simple collapsible section with trigger and content.
          </p>
        </div>
        <div className="w-full max-w-md">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="border-border bg-card hover:bg-muted/50 flex w-full items-center justify-between rounded-lg border p-4 transition-colors">
              <span className="font-medium">Click to toggle</span>
              <ChevronDownIcon className="text-muted-foreground size-5" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="border-border bg-card border-x border-b p-4">
                <p className="text-sm">
                  This is the collapsible content. It can contain any elements
                  including text, forms, or other components.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* States - Open vs Closed */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">States</h3>
          <p className="text-muted-foreground text-sm">
            Collapsible in different states: closed, open, and disabled.
          </p>
        </div>
        <div className="space-y-3">
          <div className="w-full max-w-md">
            <Collapsible defaultOpen={false}>
              <CollapsibleTrigger className="border-border bg-card hover:bg-muted/50 flex w-full items-center justify-between rounded-lg border p-4 transition-colors">
                <span className="font-medium">Closed by default</span>
                <ChevronDownIcon className="text-muted-foreground size-5" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="border-border bg-card border-x border-b p-4">
                  <p className="text-sm">This section is closed by default.</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="w-full max-w-md">
            <Collapsible defaultOpen={true}>
              <CollapsibleTrigger className="border-border bg-card hover:bg-muted/50 flex w-full items-center justify-between rounded-lg border p-4 transition-colors">
                <span className="font-medium">Open by default</span>
                <ChevronUpIcon className="text-muted-foreground size-5" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="border-border bg-card border-x border-b p-4">
                  <p className="text-sm">This section is open by default.</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="w-full max-w-md">
            <Collapsible disabled>
              <CollapsibleTrigger className="border-border bg-card flex w-full items-center justify-between rounded-lg border p-4 opacity-50">
                <span className="font-medium">Disabled</span>
                <ChevronDownIcon className="text-muted-foreground size-5" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="border-border bg-card border-x border-b p-4">
                  <p className="text-sm">This section is disabled.</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>

      {/* Icon Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Icons</h3>
          <p className="text-muted-foreground text-sm">
            Different icon and styling variations for various use cases.
          </p>
        </div>
        <div className="space-y-3">
          <div className="w-full max-w-md">
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="border-border bg-card hover:bg-muted/50 flex w-full items-center justify-between rounded-lg border p-4 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-md p-2">
                    <UserIcon className="size-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">User Settings</p>
                    <p className="text-muted-foreground text-sm">
                      Profile and preferences
                    </p>
                  </div>
                </div>
                <ChevronUpIcon className="text-muted-foreground size-5 shrink-0" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="border-border bg-card border-x border-b p-4">
                  <p className="text-sm">
                    User profile and preference settings.
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="w-full max-w-md">
            <Collapsible>
              <CollapsibleTrigger className="border-border bg-card hover:bg-muted/50 flex w-full items-center justify-between rounded-lg border p-4 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-md p-2">
                    <MonitorIcon className="size-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Display Settings</p>
                    <p className="text-muted-foreground text-sm">
                      Theme and appearance
                    </p>
                  </div>
                </div>
                <ChevronDownIcon className="text-muted-foreground size-5 shrink-0" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="border-border bg-card border-x border-b p-4">
                  <p className="text-sm">
                    Theme, color scheme, and display preferences.
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="w-full max-w-md">
            <Collapsible>
              <CollapsibleTrigger className="border-border bg-card hover:bg-muted/50 flex w-full items-center justify-between rounded-lg border p-4 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="bg-red-500/10 text-red-600 dark:text-red-400 rounded-md p-2">
                    <LockIcon className="size-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Privacy Settings</p>
                    <p className="text-muted-foreground text-sm">
                      Data and permissions
                    </p>
                  </div>
                </div>
                <ChevronDownIcon className="text-muted-foreground size-5 shrink-0" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="border-border bg-card border-x border-b p-4">
                  <p className="text-sm">
                    Privacy controls and data permissions.
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>

      {/* Nested Collapsibles */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Nested Collapsibles</h3>
          <p className="text-muted-foreground text-sm">
            Collapsible sections can be nested for hierarchical content.
          </p>
        </div>
        <div className="w-full max-w-md">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="border-border bg-card hover:bg-muted/50 flex w-full items-center justify-between rounded-lg border p-4 transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md p-2">
                  <ZapIcon className="size-5" />
                </div>
                <span className="font-medium">Integrations</span>
              </div>
              <ChevronUpIcon className="text-muted-foreground size-5 shrink-0" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="border-border bg-muted/30 border-x border-b p-4">
                <div className="space-y-3">
                  <Collapsible>
                    <CollapsibleTrigger className="bg-card hover:bg-muted flex w-full items-center justify-between rounded border p-3 text-sm transition-colors">
                      <div className="flex items-center gap-2">
                        <MailIcon className="size-4" />
                        <span className="font-medium">Email Integration</span>
                      </div>
                      <ChevronDownIcon className="text-muted-foreground size-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="bg-card mt-1 rounded border p-3">
                        <p className="text-muted-foreground text-sm">
                          Configure email service provider settings.
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="bg-card hover:bg-muted flex w-full items-center justify-between rounded border p-3 text-sm transition-colors">
                      <div className="flex items-center gap-2">
                        <WebhookIcon className="size-4" />
                        <span className="font-medium">Webhook Integration</span>
                      </div>
                      <ChevronDownIcon className="text-muted-foreground size-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="bg-card mt-1 rounded border p-3">
                        <p className="text-muted-foreground text-sm">
                          Configure webhook endpoints and events.
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Controlled Collapsible */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Controlled State</h3>
          <p className="text-muted-foreground text-sm">
            Control the open state programmatically with external buttons.
          </p>
        </div>
        <div>
          {(() => {
            function ControlledExample() {
              const [open, setOpen] = useState(false);

              return (
                <div className="w-full max-w-md space-y-3">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setOpen(!open)}
                    >
                      Toggle
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setOpen(true)}
                    >
                      Open
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </Button>
                  </div>

                  <Collapsible open={open} onOpenChange={setOpen}>
                    <CollapsibleTrigger className="border-border bg-card hover:bg-muted/50 flex w-full items-center justify-between rounded-lg border p-4 transition-colors">
                      <span className="font-medium">Controlled Section</span>
                      {open ? (
                        <ChevronUpIcon className="text-muted-foreground size-5" />
                      ) : (
                        <ChevronDownIcon className="text-muted-foreground size-5" />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="border-border bg-card border-x border-b p-4">
                        <p className="text-sm">
                          This collapsible's state is controlled externally.
                          Current state:{" "}
                          <strong>{open ? "Open" : "Closed"}</strong>
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              );
            }

            return <ControlledExample />;
          })()}
        </div>
      </section>

      {/* Multiple Collapsibles */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Multiple Sections</h3>
          <p className="text-muted-foreground text-sm">
            Multiple independent collapsible sections in a list.
          </p>
        </div>
        <div className="w-full max-w-md space-y-3">
          {[
            { title: "Section 1", icon: UserIcon, color: "blue" },
            { title: "Section 2", icon: SettingsIcon, color: "green" },
            { title: "Section 3", icon: ShieldIcon, color: "purple" },
          ].map((section, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger className="border-border bg-card hover:bg-muted/50 flex w-full items-center justify-between rounded-lg border p-4 transition-colors">
                <div className="flex items-center gap-3">
                  <div
                    className={`bg-${section.color}-500/10 text-${section.color}-600 dark:text-${section.color}-400 rounded-md p-2`}
                  >
                    <section.icon className="size-5" />
                  </div>
                  <span className="font-medium">{section.title}</span>
                </div>
                <ChevronDownIcon className="text-muted-foreground size-5 shrink-0" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="border-border bg-card border-x border-b p-4">
                  <p className="text-sm">Content for {section.title}</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing collapsible props.
 */
export const Interactive: Story = {
  render: (args) => {
    function InteractiveExample() {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <div className="w-96">
          <Collapsible
            {...args}
            open={isOpen}
            onOpenChange={(open) => {
              setIsOpen(open);
              args.onOpenChange?.(open);
            }}
          >
            <CollapsibleTrigger className="border-border bg-card hover:bg-muted/50 flex w-full items-center justify-between rounded-lg border p-4 transition-colors">
              <div className="flex items-center gap-3">
                <DatabaseIcon className="text-primary size-5" />
                <div className="text-left">
                  <p className="font-medium">Database Settings</p>
                  <p className="text-muted-foreground text-sm">
                    Configure connection and pooling
                  </p>
                </div>
              </div>
              {isOpen ? (
                <ChevronUpIcon className="text-muted-foreground size-5 shrink-0" />
              ) : (
                <ChevronDownIcon className="text-muted-foreground size-5 shrink-0" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="border-border bg-card border-x border-b p-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="connection-string">Connection String</Label>
                    <Input
                      id="connection-string"
                      placeholder="postgresql://..."
                      type="password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pool-size">Connection Pool Size</Label>
                    <Input id="pool-size" type="number" defaultValue="10" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>SSL Mode</Label>
                      <p className="text-muted-foreground text-sm">
                        Require SSL connections
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      );
    }

    return <InteractiveExample />;
  },
};
