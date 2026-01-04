import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import {
  AlertTriangleIcon,
  KeyIcon,
  ShieldAlertIcon,
  TrashIcon,
  UserXIcon,
  XCircleIcon,
} from "lucide-react";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../alert-dialog";
import { Button } from "../button";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/Overlays & Dialogs/AlertDialog",
  component: AlertDialog,
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
      description: "Default open state (uncontrolled)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

/**
 * Destructive Action Confirmations - Realistic scenarios showing AlertDialog
 * in the context of the Neynar Dashboard with various destructive actions
 * that require user confirmation.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function DestructiveActionsShowcase() {
      const [deletedItems, setDeletedItems] = useState<string[]>([]);
      const [revokedKeys, setRevokedKeys] = useState<string[]>([]);

      return (
        <div className="w-full max-w-2xl space-y-8">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">Alert Dialog Examples</h2>
            <p className="text-muted-foreground text-sm">
              Confirmation dialogs for destructive actions in the Neynar
              Dashboard.
            </p>
          </div>

          {/* API Key Management */}
          <section className="space-y-4">
            <h3 className="font-medium">API Key Management</h3>
            <div className="border-border bg-card rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-md p-2">
                    <KeyIcon className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium">Production Key</p>
                    <code className="text-muted-foreground font-mono text-sm">
                      neynar_sk_prod_****_****_8f3d
                    </code>
                    {revokedKeys.includes("prod-key") && (
                      <p className="text-destructive text-xs mt-1">Revoked</p>
                    )}
                  </div>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger
                    render={<Button variant="destructive" size="sm" />}
                    disabled={revokedKeys.includes("prod-key")}
                  >
                    <TrashIcon data-icon="inline-start" />
                    Revoke
                  </AlertDialogTrigger>
                  <AlertDialogContent size="default">
                    <AlertDialogHeader>
                      <AlertDialogMedia>
                        <ShieldAlertIcon className="text-destructive" />
                      </AlertDialogMedia>
                      <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will immediately invalidate the API key. Any
                        applications using this key will stop working. This
                        action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        variant="destructive"
                        onClick={() =>
                          setRevokedKeys([...revokedKeys, "prod-key"])
                        }
                      >
                        Revoke Key
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </section>

          {/* Webhook Management */}
          <section className="space-y-4">
            <h3 className="font-medium">Webhook Management</h3>
            <div className="border-border bg-card rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Production Webhook</p>
                  <code className="text-muted-foreground text-sm">
                    https://api.example.com/webhooks/farcaster
                  </code>
                  {deletedItems.includes("webhook-1") && (
                    <p className="text-destructive text-xs mt-1">Deleted</p>
                  )}
                </div>
                <AlertDialog>
                  <AlertDialogTrigger
                    render={<Button variant="destructive" size="sm" />}
                    disabled={deletedItems.includes("webhook-1")}
                  >
                    <TrashIcon data-icon="inline-start" />
                    Delete
                  </AlertDialogTrigger>
                  <AlertDialogContent size="sm">
                    <AlertDialogHeader>
                      <AlertDialogMedia>
                        <AlertTriangleIcon className="text-destructive" />
                      </AlertDialogMedia>
                      <AlertDialogTitle>Delete webhook?</AlertDialogTitle>
                      <AlertDialogDescription>
                        You will no longer receive events at this endpoint.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        variant="destructive"
                        onClick={() =>
                          setDeletedItems([...deletedItems, "webhook-1"])
                        }
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </section>

          {/* Team Member Management */}
          <section className="space-y-4">
            <h3 className="font-medium">Team Member Management</h3>
            <div className="border-border bg-card rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary flex size-10 items-center justify-center rounded-full font-medium">
                    JD
                  </div>
                  <div>
                    <p className="font-medium">Jane Developer</p>
                    <p className="text-muted-foreground text-sm">
                      jane@example.com
                    </p>
                    {deletedItems.includes("member-1") && (
                      <p className="text-destructive text-xs mt-1">Removed</p>
                    )}
                  </div>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger
                    render={<Button variant="destructive" size="sm" />}
                    disabled={deletedItems.includes("member-1")}
                  >
                    <UserXIcon data-icon="inline-start" />
                    Remove
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Remove team member?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Jane Developer will immediately lose access to this
                        workspace and all associated resources. They will be
                        notified by email.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        variant="destructive"
                        onClick={() =>
                          setDeletedItems([...deletedItems, "member-1"])
                        }
                      >
                        Remove Member
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </section>

          {/* Account Deletion */}
          <section className="space-y-4">
            <h3 className="font-medium">Account Management</h3>
            <div className="border-destructive/50 bg-destructive/5 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Delete Account</p>
                  <p className="text-muted-foreground text-sm">
                    Permanently delete your Neynar account and all data
                  </p>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger
                    render={<Button variant="destructive" size="sm" />}
                  >
                    <XCircleIcon data-icon="inline-start" />
                    Delete Account
                  </AlertDialogTrigger>
                  <AlertDialogContent size="default">
                    <AlertDialogHeader>
                      <AlertDialogMedia>
                        <XCircleIcon className="text-destructive" />
                      </AlertDialogMedia>
                      <AlertDialogTitle>Delete your account?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will permanently delete your account, all API keys,
                        webhooks, usage data, and team workspaces. This action
                        cannot be undone and you will not be able to recover any
                        data.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction variant="destructive">
                        Delete Account
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </section>
        </div>
      );
    }

    return <DestructiveActionsShowcase />;
  },
};

/**
 * Complete design system reference showing all AlertDialog variants,
 * sizes, compositions, and usage patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Basic Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Basic Variants</h3>
          <p className="text-muted-foreground text-sm">
            Alert dialogs with different action types and purposes.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive" />}>
              Destructive Action
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete this item?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. The item will be permanently
                  removed.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger render={<Button />}>
              Confirm Action
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm your choice</AlertDialogTitle>
                <AlertDialogDescription>
                  Please confirm you want to proceed with this action.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>
              Warning Dialog
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action may have unintended consequences. Please review
                  before continuing.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Go Back</AlertDialogCancel>
                <AlertDialogAction>I Understand</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Sizes</h3>
          <p className="text-muted-foreground text-sm">
            Different sizes for different content lengths and contexts.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>
              Small Dialog
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">
              <AlertDialogHeader>
                <AlertDialogTitle>Quick confirmation</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to do this?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>No</AlertDialogCancel>
                <AlertDialogAction>Yes</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>
              Default Dialog
            </AlertDialogTrigger>
            <AlertDialogContent size="default">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Standard confirmation dialog
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This is the default size alert dialog with room for more
                  detailed descriptions and content. It works well for most use
                  cases.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>

      {/* With Media Icons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Media Icons</h3>
          <p className="text-muted-foreground text-sm">
            Alert dialogs with visual indicators for different types of alerts.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive" />}>
              Destructive with Icon
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <TrashIcon className="text-destructive" />
                </AlertDialogMedia>
                <AlertDialogTitle>Delete permanently?</AlertDialogTitle>
                <AlertDialogDescription>
                  This item will be permanently deleted and cannot be recovered.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>
              Warning with Icon
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <AlertTriangleIcon className="text-yellow-500" />
                </AlertDialogMedia>
                <AlertDialogTitle>Warning: Potential issues</AlertDialogTitle>
                <AlertDialogDescription>
                  This action may cause problems with your configuration.
                  Proceed with caution.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Proceed Anyway</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>
              Security Alert
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <ShieldAlertIcon className="text-destructive" />
                </AlertDialogMedia>
                <AlertDialogTitle>
                  Security confirmation required
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This is a sensitive operation that affects your account
                  security. Please confirm you want to continue.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive">
                  Confirm
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>

      {/* Button Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Action Button Variants</h3>
          <p className="text-muted-foreground text-sm">
            Different button styles for actions and cancel buttons.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive" />}>
              Destructive Action
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Destructive action</AlertDialogTitle>
                <AlertDialogDescription>
                  This uses a destructive button variant for the action.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger render={<Button />}>
              Primary Action
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Primary action</AlertDialogTitle>
                <AlertDialogDescription>
                  This uses the default button variant for the action.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>
              Secondary Action
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Secondary action</AlertDialogTitle>
                <AlertDialogDescription>
                  This uses a secondary button variant for the action.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="secondary">
                  Confirm
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>

      {/* Complex Content */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Complex Content</h3>
          <p className="text-muted-foreground text-sm">
            Alert dialogs with lists, formatted text, and detailed content.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive" />}>
              Delete Multiple Items
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <TrashIcon className="text-destructive" />
                </AlertDialogMedia>
                <AlertDialogTitle>Delete 3 items?</AlertDialogTitle>
                <AlertDialogDescription>
                  The following items will be permanently deleted:
                  <ul className="mt-2 list-inside list-disc space-y-1">
                    <li>API Key: prod_****_8f3d</li>
                    <li>Webhook: https://api.example.com/hook</li>
                    <li>Team Member: jane@example.com</li>
                  </ul>
                  <p className="mt-2">This action cannot be undone.</p>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive">
                  Delete All
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>
              Terms & Conditions
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Accept terms and conditions</AlertDialogTitle>
                <AlertDialogDescription>
                  By continuing, you agree to:
                  <ul className="mt-2 list-inside list-disc space-y-1">
                    <li>Our Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Data Processing Agreement</li>
                  </ul>
                  <p className="mt-2">
                    You can review these documents in your{" "}
                    <a href="#" className="underline">
                      account settings
                    </a>
                    .
                  </p>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Decline</AlertDialogCancel>
                <AlertDialogAction>Accept</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>

      {/* Controlled State */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Controlled State</h3>
          <p className="text-muted-foreground text-sm">
            Alert dialog with controlled open state for programmatic control.
          </p>
        </div>
        <ControlledAlertDialog />
      </section>
    </div>
  ),
};

/**
 * Frosted alert dialog effect with backdrop blur over colorful backgrounds.
 * AlertDialogs use 75% opacity and backdrop-blur for a frosted glass appearance.
 */
export const Frosted: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Busy colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-lg bg-yellow-400 p-4 text-yellow-900">
            <p className="font-bold">Yellow Block</p>
            <p className="text-sm">Lorem ipsum dolor sit amet</p>
          </div>
          <div className="rounded-lg bg-green-400 p-4 text-green-900">
            <p className="font-bold">Green Block</p>
            <p className="text-sm">Consectetur adipiscing elit</p>
          </div>
          <div className="rounded-lg bg-blue-400 p-4 text-blue-900">
            <p className="font-bold">Blue Block</p>
            <p className="text-sm">Sed do eiusmod tempor</p>
          </div>
          <div className="rounded-lg bg-red-400 p-4 text-red-900">
            <p className="font-bold">Red Block</p>
            <p className="text-sm">Incididunt ut labore</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 text-white">
          <div>
            <h2 className="text-2xl font-bold">Background Content</h2>
            <p className="mt-2">
              This content is behind the alert dialog. The frosted glass effect
              blurs it while keeping it visible.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">More Content</h2>
            <p className="mt-2">
              Customize the blur with --surface-blur and opacity with --popover
              tokens.
            </p>
          </div>
        </div>
      </div>

      {/* Alert Dialog - defaultOpen */}
      <AlertDialog defaultOpen>
        <AlertDialogTrigger
          render={<Button className="absolute top-4 left-4 z-10" />}
        >
          Open Alert
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <ShieldAlertIcon className="text-destructive" />
            </AlertDialogMedia>
            <AlertDialogTitle>Frosted Glass Alert</AlertDialogTitle>
            <AlertDialogDescription>
              Notice how you can see the colorful background through the alert
              dialog. The 75% opacity + 12px blur creates a beautiful frosted
              glass effect.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
};

/**
 * Interactive playground for testing AlertDialog props.
 */
export const Interactive: Story = {
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        Delete Item
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the item.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

function ControlledAlertDialog() {
  const [open, setOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button onClick={() => setOpen(true)}>Open Alert Dialog</Button>
        {confirmed && (
          <p className="text-muted-foreground flex items-center text-sm">
            Action confirmed!
          </p>
        )}
      </div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Controlled alert dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This dialog's open state is controlled externally. The parent
              component manages when it opens and closes.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setConfirmed(true);
                setOpen(false);
                setTimeout(() => setConfirmed(false), 3000);
              }}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
