import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import {
  BellIcon,
  DatabaseIcon,
  KeyIcon,
  ShieldIcon,
  WebhookIcon,
} from "lucide-react";
import { useState } from "react";

import { Checkbox } from "../checkbox";
import { Label } from "../label";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Core Inputs/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  args: {
    onCheckedChange: fn(),
  },
  argTypes: {
    checked: {
      control: "boolean",
      description: "Controlled checked state",
    },
    defaultChecked: {
      control: "boolean",
      description: "Default checked state (uncontrolled)",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    required: {
      control: "boolean",
      description: "Required field",
    },
    name: {
      control: "text",
      description: "Form input name",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/**
 * API Permission Settings - A realistic scenario showing checkboxes in context
 * of managing API key permissions in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function APIPermissionsPanel() {
      const [permissions, setPermissions] = useState({
        readCasts: true,
        writeCasts: false,
        readUsers: true,
        writeUsers: false,
        readChannels: true,
        writeChannels: false,
        webhooks: true,
        analytics: false,
        notifications: true,
        adminAccess: false,
      });

      function togglePermission(key: keyof typeof permissions) {
        setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
      }

      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">API Key Permissions</h2>
            <p className="text-muted-foreground text-sm">
              Configure which API endpoints this key can access.
            </p>
          </div>

          {/* Read Permissions */}
          <div className="border-border rounded-lg border p-4">
            <div className="mb-4 flex items-center gap-2">
              <DatabaseIcon className="text-muted-foreground size-5" />
              <h3 className="font-medium">Read Access</h3>
            </div>
            <div className="space-y-3">
              <label className="flex items-start gap-3">
                <Checkbox
                  checked={permissions.readCasts}
                  onCheckedChange={() => togglePermission("readCasts")}
                />
                <div className="flex-1">
                  <Label>Read Casts</Label>
                  <p className="text-muted-foreground text-xs">
                    Access to fetch casts, replies, and recasts
                  </p>
                </div>
              </label>
              <label className="flex items-start gap-3">
                <Checkbox
                  checked={permissions.readUsers}
                  onCheckedChange={() => togglePermission("readUsers")}
                />
                <div className="flex-1">
                  <Label>Read Users</Label>
                  <p className="text-muted-foreground text-xs">
                    Access to fetch user profiles and data
                  </p>
                </div>
              </label>
              <label className="flex items-start gap-3">
                <Checkbox
                  checked={permissions.readChannels}
                  onCheckedChange={() => togglePermission("readChannels")}
                />
                <div className="flex-1">
                  <Label>Read Channels</Label>
                  <p className="text-muted-foreground text-xs">
                    Access to fetch channel information
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Write Permissions */}
          <div className="border-border rounded-lg border p-4">
            <div className="mb-4 flex items-center gap-2">
              <KeyIcon className="text-muted-foreground size-5" />
              <h3 className="font-medium">Write Access</h3>
            </div>
            <div className="space-y-3">
              <label className="flex items-start gap-3">
                <Checkbox
                  checked={permissions.writeCasts}
                  onCheckedChange={() => togglePermission("writeCasts")}
                />
                <div className="flex-1">
                  <Label>Write Casts</Label>
                  <p className="text-muted-foreground text-xs">
                    Permission to publish casts and replies
                  </p>
                </div>
              </label>
              <label className="flex items-start gap-3">
                <Checkbox
                  checked={permissions.writeUsers}
                  onCheckedChange={() => togglePermission("writeUsers")}
                />
                <div className="flex-1">
                  <Label>Write Users</Label>
                  <p className="text-muted-foreground text-xs">
                    Permission to update user profiles
                  </p>
                </div>
              </label>
              <label className="flex items-start gap-3">
                <Checkbox
                  checked={permissions.writeChannels}
                  onCheckedChange={() => togglePermission("writeChannels")}
                />
                <div className="flex-1">
                  <Label>Write Channels</Label>
                  <p className="text-muted-foreground text-xs">
                    Permission to create and modify channels
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Advanced Features */}
          <div className="border-border rounded-lg border p-4">
            <div className="mb-4 flex items-center gap-2">
              <ShieldIcon className="text-muted-foreground size-5" />
              <h3 className="font-medium">Advanced Features</h3>
            </div>
            <div className="space-y-3">
              <label className="flex items-start gap-3">
                <Checkbox
                  checked={permissions.webhooks}
                  onCheckedChange={() => togglePermission("webhooks")}
                />
                <div className="flex-1">
                  <Label>
                    <WebhookIcon data-icon="inline-start" className="size-4" />
                    Webhooks
                  </Label>
                  <p className="text-muted-foreground text-xs">
                    Configure and manage webhook endpoints
                  </p>
                </div>
              </label>
              <label className="flex items-start gap-3">
                <Checkbox
                  checked={permissions.analytics}
                  onCheckedChange={() => togglePermission("analytics")}
                />
                <div className="flex-1">
                  <Label>Analytics</Label>
                  <p className="text-muted-foreground text-xs">
                    Access to analytics and usage metrics
                  </p>
                </div>
              </label>
              <label className="flex items-start gap-3">
                <Checkbox
                  checked={permissions.notifications}
                  onCheckedChange={() => togglePermission("notifications")}
                />
                <div className="flex-1">
                  <Label>
                    <BellIcon data-icon="inline-start" className="size-4" />
                    Notifications
                  </Label>
                  <p className="text-muted-foreground text-xs">
                    Receive notifications about API usage
                  </p>
                </div>
              </label>
              <label className="flex items-start gap-3">
                <Checkbox
                  checked={permissions.adminAccess}
                  onCheckedChange={() => togglePermission("adminAccess")}
                  disabled
                />
                <div className="flex-1">
                  <Label>Admin Access</Label>
                  <p className="text-muted-foreground text-xs">
                    Full administrative access (requires Pro plan)
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Summary */}
          <div className="border-border bg-muted/30 rounded-lg border p-4">
            <p className="text-sm">
              <span className="font-medium">
                {Object.values(permissions).filter(Boolean).length} of{" "}
                {Object.keys(permissions).length}
              </span>{" "}
              <span className="text-muted-foreground">permissions enabled</span>
            </p>
          </div>
        </div>
      );
    }

    return <APIPermissionsPanel />;
  },
};

/**
 * Complete design system reference showing all checkbox states and variants.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Basic States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Basic States</h3>
          <p className="text-muted-foreground text-sm">
            Unchecked, checked, and indeterminate states.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <label className="flex items-center gap-2">
            <Checkbox />
            <Label>Unchecked</Label>
          </label>
          <label className="flex items-center gap-2">
            <Checkbox defaultChecked />
            <Label>Checked</Label>
          </label>
        </div>
      </section>

      {/* Disabled States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Disabled States</h3>
          <p className="text-muted-foreground text-sm">
            Disabled checkboxes in both checked and unchecked states.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <label className="flex items-center gap-2">
            <Checkbox disabled />
            <Label>Disabled Unchecked</Label>
          </label>
          <label className="flex items-center gap-2">
            <Checkbox disabled defaultChecked />
            <Label>Disabled Checked</Label>
          </label>
        </div>
      </section>

      {/* With Labels */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Labels</h3>
          <p className="text-muted-foreground text-sm">
            Checkboxes paired with descriptive labels.
          </p>
        </div>
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <Checkbox defaultChecked />
            <Label>I agree to the terms and conditions</Label>
          </label>
          <label className="flex items-center gap-2">
            <Checkbox />
            <Label>Subscribe to newsletter</Label>
          </label>
          <label className="flex items-center gap-2">
            <Checkbox defaultChecked />
            <Label>Enable notifications</Label>
          </label>
        </div>
      </section>

      {/* With Description */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Description</h3>
          <p className="text-muted-foreground text-sm">
            Checkboxes with additional context or help text.
          </p>
        </div>
        <div className="space-y-4">
          <label className="flex items-start gap-3">
            <Checkbox defaultChecked />
            <div className="flex-1">
              <Label>Email notifications</Label>
              <p className="text-muted-foreground text-xs">
                Receive email updates about your account activity
              </p>
            </div>
          </label>
          <label className="flex items-start gap-3">
            <Checkbox />
            <div className="flex-1">
              <Label>Marketing emails</Label>
              <p className="text-muted-foreground text-xs">
                Get the latest news and product updates
              </p>
            </div>
          </label>
          <label className="flex items-start gap-3">
            <Checkbox defaultChecked />
            <div className="flex-1">
              <Label>Security alerts</Label>
              <p className="text-muted-foreground text-xs">
                Important notifications about your account security
              </p>
            </div>
          </label>
        </div>
      </section>

      {/* Form Integration */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Form Integration</h3>
          <p className="text-muted-foreground text-sm">
            Checkboxes in form contexts with validation states.
          </p>
        </div>
        <div className="border-border rounded-lg border p-4">
          <form className="space-y-4">
            <fieldset className="space-y-3">
              <legend className="text-sm font-medium">Preferences</legend>
              <label className="flex items-center gap-2">
                <Checkbox name="preference-1" defaultChecked />
                <Label>Send me weekly summaries</Label>
              </label>
              <label className="flex items-center gap-2">
                <Checkbox name="preference-2" />
                <Label>Enable dark mode</Label>
              </label>
              <label className="flex items-center gap-2">
                <Checkbox name="preference-3" defaultChecked />
                <Label>Show profile publicly</Label>
              </label>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="text-sm font-medium">
                Required Agreement
              </legend>
              <label className="flex items-start gap-3">
                <Checkbox name="required" required />
                <div className="flex-1">
                  <Label>I accept the terms of service *</Label>
                  <p className="text-muted-foreground text-xs">
                    You must accept the terms to continue
                  </p>
                </div>
              </label>
            </fieldset>
          </form>
        </div>
      </section>

      {/* Grouped Checkboxes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Grouped Checkboxes</h3>
          <p className="text-muted-foreground text-sm">
            Multiple related checkboxes in a group.
          </p>
        </div>
        <div className="border-border rounded-lg border p-4">
          <div className="space-y-4">
            <div>
              <h4 className="mb-3 text-sm font-medium">Select Features</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <Checkbox defaultChecked />
                  <Label>Analytics Dashboard</Label>
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox defaultChecked />
                  <Label>Webhook Support</Label>
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox />
                  <Label>Priority Support</Label>
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox disabled />
                  <Label>Custom Branding (Enterprise only)</Label>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* State Reference Table */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">State Reference</h3>
          <p className="text-muted-foreground text-sm">
            Complete list of all checkbox states.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-muted-foreground border-b text-left text-sm">
                <th className="pb-3 pr-4 font-medium">State</th>
                <th className="pb-3 pr-4 font-medium">Checkbox</th>
                <th className="pb-3 pr-4 font-medium">With Label</th>
                <th className="pb-3 pr-4 font-medium">Use Case</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">unchecked</td>
                <td className="py-3 pr-4">
                  <Checkbox />
                </td>
                <td className="py-3 pr-4">
                  <label className="flex items-center gap-2">
                    <Checkbox />
                    <Label>Label</Label>
                  </label>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Default state, option not selected
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">checked</td>
                <td className="py-3 pr-4">
                  <Checkbox defaultChecked />
                </td>
                <td className="py-3 pr-4">
                  <label className="flex items-center gap-2">
                    <Checkbox defaultChecked />
                    <Label>Label</Label>
                  </label>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Option is selected
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">disabled</td>
                <td className="py-3 pr-4">
                  <Checkbox disabled />
                </td>
                <td className="py-3 pr-4">
                  <label className="flex items-center gap-2">
                    <Checkbox disabled />
                    <Label>Label</Label>
                  </label>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Cannot be interacted with
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-sm">
                  disabled+checked
                </td>
                <td className="py-3 pr-4">
                  <Checkbox disabled defaultChecked />
                </td>
                <td className="py-3 pr-4">
                  <label className="flex items-center gap-2">
                    <Checkbox disabled defaultChecked />
                    <Label>Label</Label>
                  </label>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Selected but cannot be changed
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing checkbox props.
 */
export const Interactive: Story = {
  render: (args) => {
    function InteractiveCheckbox() {
      const [checked, setChecked] = useState(args.defaultChecked ?? false);

      return (
        <label className="flex items-center gap-2">
          <Checkbox
            {...args}
            checked={checked}
            onCheckedChange={(isChecked) => {
              setChecked(isChecked as boolean);
              args.onCheckedChange?.(isChecked);
            }}
          />
          <Label>Accept terms and conditions</Label>
        </label>
      );
    }

    return <InteractiveCheckbox />;
  },
  args: {
    defaultChecked: false,
    disabled: false,
  },
};
