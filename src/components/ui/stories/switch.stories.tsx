import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { BellIcon, DatabaseIcon, MailIcon, WebhookIcon } from "lucide-react";
import { useState } from "react";

import { Label } from "../label";
import { Switch } from "../switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Core Inputs/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  args: {
    onCheckedChange: fn(),
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default"],
      description: "Switch size",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    defaultChecked: {
      control: "boolean",
      description: "Initial checked state",
    },
    "aria-invalid": {
      control: "boolean",
      description: "Invalid state for form validation",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

/**
 * Webhook Settings - A realistic scenario showing switches in context
 * of managing webhook configurations in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function WebhookSettingsPanel() {
      const [emailNotifications, setEmailNotifications] = useState(true);
      const [webhooksEnabled, setWebhooksEnabled] = useState(true);
      const [castCreated, setCastCreated] = useState(true);
      const [userFollowed, setUserFollowed] = useState(false);
      const [reactionAdded, setReactionAdded] = useState(true);
      const [retryOnFailure, setRetryOnFailure] = useState(true);
      const [logAllRequests, setLogAllRequests] = useState(false);

      return (
        <div className="w-full max-w-xl space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">Webhook Configuration</h2>
            <p className="text-muted-foreground text-sm">
              Configure webhook events and delivery settings for your
              application.
            </p>
          </div>

          {/* Main Webhook Toggle */}
          <div className="border-border bg-card rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-md p-2">
                  <WebhookIcon className="size-5" />
                </div>
                <div>
                  <Label htmlFor="webhooks-enabled" className="font-medium">
                    Enable Webhooks
                  </Label>
                  <p className="text-muted-foreground text-sm">
                    Receive real-time events via HTTP POST requests
                  </p>
                </div>
              </div>
              <Switch
                id="webhooks-enabled"
                checked={webhooksEnabled}
                onCheckedChange={setWebhooksEnabled}
              />
            </div>
          </div>

          {/* Event Types */}
          <div className="space-y-3">
            <div>
              <h3 className="font-medium">Event Types</h3>
              <p className="text-muted-foreground text-sm">
                Select which events trigger webhook calls
              </p>
            </div>

            <div className="border-border divide-border divide-y rounded-lg border">
              <div className="flex items-center justify-between p-4">
                <div className="space-y-0.5">
                  <Label htmlFor="cast-created" className="text-sm font-medium">
                    Cast Created
                  </Label>
                  <p className="text-muted-foreground text-xs">
                    Notify when a new cast is published
                  </p>
                </div>
                <Switch
                  id="cast-created"
                  size="sm"
                  checked={castCreated}
                  onCheckedChange={setCastCreated}
                  disabled={!webhooksEnabled}
                />
              </div>

              <div className="flex items-center justify-between p-4">
                <div className="space-y-0.5">
                  <Label
                    htmlFor="user-followed"
                    className="text-sm font-medium"
                  >
                    User Followed
                  </Label>
                  <p className="text-muted-foreground text-xs">
                    Notify when a user gains a new follower
                  </p>
                </div>
                <Switch
                  id="user-followed"
                  size="sm"
                  checked={userFollowed}
                  onCheckedChange={setUserFollowed}
                  disabled={!webhooksEnabled}
                />
              </div>

              <div className="flex items-center justify-between p-4">
                <div className="space-y-0.5">
                  <Label
                    htmlFor="reaction-added"
                    className="text-sm font-medium"
                  >
                    Reaction Added
                  </Label>
                  <p className="text-muted-foreground text-xs">
                    Notify when a cast receives a like or recast
                  </p>
                </div>
                <Switch
                  id="reaction-added"
                  size="sm"
                  checked={reactionAdded}
                  onCheckedChange={setReactionAdded}
                  disabled={!webhooksEnabled}
                />
              </div>
            </div>
          </div>

          {/* Delivery Settings */}
          <div className="space-y-3">
            <div>
              <h3 className="font-medium">Delivery Settings</h3>
              <p className="text-muted-foreground text-sm">
                Configure webhook delivery behavior
              </p>
            </div>

            <div className="border-border space-y-4 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <DatabaseIcon className="text-muted-foreground size-5" />
                  <div className="space-y-0.5">
                    <Label
                      htmlFor="retry-on-failure"
                      className="text-sm font-medium"
                    >
                      Retry on Failure
                    </Label>
                    <p className="text-muted-foreground text-xs">
                      Automatically retry failed webhook deliveries
                    </p>
                  </div>
                </div>
                <Switch
                  id="retry-on-failure"
                  size="sm"
                  checked={retryOnFailure}
                  onCheckedChange={setRetryOnFailure}
                  disabled={!webhooksEnabled}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BellIcon className="text-muted-foreground size-5" />
                  <div className="space-y-0.5">
                    <Label
                      htmlFor="log-all-requests"
                      className="text-sm font-medium"
                    >
                      Log All Requests
                    </Label>
                    <p className="text-muted-foreground text-xs">
                      Store detailed logs for debugging
                    </p>
                  </div>
                </div>
                <Switch
                  id="log-all-requests"
                  size="sm"
                  checked={logAllRequests}
                  onCheckedChange={setLogAllRequests}
                  disabled={!webhooksEnabled}
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MailIcon className="text-muted-foreground size-5" />
                <div className="space-y-0.5">
                  <Label
                    htmlFor="email-notifications"
                    className="text-sm font-medium"
                  >
                    Email Notifications
                  </Label>
                  <p className="text-muted-foreground text-xs">
                    Receive alerts about webhook failures
                  </p>
                </div>
              </div>
              <Switch
                id="email-notifications"
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
          </div>
        </div>
      );
    }

    return <WebhookSettingsPanel />;
  },
};

/**
 * Complete design system reference showing all switch sizes, states, and variants.
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
            Two sizes available for different contexts and density needs.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Switch size="sm" defaultChecked id="size-sm" />
            <Label htmlFor="size-sm" className="text-sm">
              Small (sm) - Compact layouts
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch size="default" defaultChecked id="size-default" />
            <Label htmlFor="size-default" className="text-sm">
              Default - Standard size
            </Label>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">States</h3>
          <p className="text-muted-foreground text-sm">
            Checked, unchecked, and disabled states.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Switch defaultChecked={false} id="state-unchecked" />
            <Label htmlFor="state-unchecked" className="text-sm">
              Unchecked
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch defaultChecked id="state-checked" />
            <Label htmlFor="state-checked" className="text-sm">
              Checked
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch
              disabled
              defaultChecked={false}
              id="state-disabled-unchecked"
            />
            <Label
              htmlFor="state-disabled-unchecked"
              className="text-sm text-muted-foreground"
            >
              Disabled (Unchecked)
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch disabled defaultChecked id="state-disabled-checked" />
            <Label
              htmlFor="state-disabled-checked"
              className="text-sm text-muted-foreground"
            >
              Disabled (Checked)
            </Label>
          </div>
        </div>
      </section>

      {/* Invalid State */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Invalid State</h3>
          <p className="text-muted-foreground text-sm">
            Error state for form validation feedback.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Switch
              aria-invalid
              defaultChecked={false}
              id="invalid-unchecked"
            />
            <Label htmlFor="invalid-unchecked" className="text-sm">
              Invalid (Unchecked)
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch aria-invalid defaultChecked id="invalid-checked" />
            <Label htmlFor="invalid-checked" className="text-sm">
              Invalid (Checked)
            </Label>
          </div>
        </div>
      </section>

      {/* Size × State Matrix */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Size × State Matrix</h3>
          <p className="text-muted-foreground text-sm">
            Complete combination reference for all sizes and states.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-muted-foreground border-b text-left text-sm">
                <th className="pb-3 pr-4 font-medium">Size</th>
                <th className="pb-3 pr-4 font-medium">Unchecked</th>
                <th className="pb-3 pr-4 font-medium">Checked</th>
                <th className="pb-3 pr-4 font-medium">Disabled</th>
                <th className="pb-3 pr-4 font-medium">Invalid</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">sm</td>
                <td className="py-3 pr-4">
                  <Switch size="sm" defaultChecked={false} />
                </td>
                <td className="py-3 pr-4">
                  <Switch size="sm" defaultChecked />
                </td>
                <td className="py-3 pr-4">
                  <Switch size="sm" disabled defaultChecked />
                </td>
                <td className="py-3 pr-4">
                  <Switch size="sm" aria-invalid defaultChecked />
                </td>
              </tr>
              <tr className="border-b last:border-0">
                <td className="py-3 pr-4 font-mono text-sm">default</td>
                <td className="py-3 pr-4">
                  <Switch size="default" defaultChecked={false} />
                </td>
                <td className="py-3 pr-4">
                  <Switch size="default" defaultChecked />
                </td>
                <td className="py-3 pr-4">
                  <Switch size="default" disabled defaultChecked />
                </td>
                <td className="py-3 pr-4">
                  <Switch size="default" aria-invalid defaultChecked />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* With Labels */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Label Patterns</h3>
          <p className="text-muted-foreground text-sm">
            Common layout patterns for switches with labels and descriptions.
          </p>
        </div>
        <div className="border-border divide-border divide-y rounded-lg border">
          {/* Inline Label */}
          <div className="flex items-center justify-between p-4">
            <Label htmlFor="pattern-inline" className="text-sm font-medium">
              Inline Label
            </Label>
            <Switch id="pattern-inline" defaultChecked />
          </div>

          {/* Label with Description */}
          <div className="flex items-center justify-between p-4">
            <div className="space-y-0.5">
              <Label
                htmlFor="pattern-description"
                className="text-sm font-medium"
              >
                Label with Description
              </Label>
              <p className="text-muted-foreground text-xs">
                Additional context for the switch option
              </p>
            </div>
            <Switch id="pattern-description" size="sm" defaultChecked />
          </div>

          {/* With Icon */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <BellIcon className="text-muted-foreground size-5" />
              <div className="space-y-0.5">
                <Label htmlFor="pattern-icon" className="text-sm font-medium">
                  With Icon
                </Label>
                <p className="text-muted-foreground text-xs">
                  Visual indicator for the setting type
                </p>
              </div>
            </div>
            <Switch id="pattern-icon" size="sm" defaultChecked />
          </div>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing switch props.
 */
export const Interactive: Story = {
  args: {
    defaultChecked: false,
    size: "default",
    disabled: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.defaultChecked || false);

    return (
      <div className="flex items-center gap-3">
        <Switch
          {...args}
          checked={checked}
          onCheckedChange={(isChecked) => {
            setChecked(isChecked);
            args.onCheckedChange?.(isChecked);
          }}
          id="interactive-switch"
        />
        <Label htmlFor="interactive-switch" className="text-sm">
          {checked ? "Enabled" : "Disabled"}
        </Label>
      </div>
    );
  },
};
