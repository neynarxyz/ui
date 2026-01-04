import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertTriangleIcon,
  CopyIcon,
  KeyIcon,
  Loader2Icon,
  MailIcon,
  PlusIcon,
  TrashIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";

const meta: Meta<typeof Dialog> = {
  title: "Components/Overlays & Dialogs/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
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
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/**
 * Neynar Dashboard - Realistic scenarios showing dialogs for API key management,
 * confirmations, and form submissions.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function DashboardDialogs() {
      const [deleteOpen, setDeleteOpen] = useState(false);
      const [createOpen, setCreateOpen] = useState(false);
      const [inviteOpen, setInviteOpen] = useState(false);
      const [isDeleting, setIsDeleting] = useState(false);
      const [isCreating, setIsCreating] = useState(false);

      function handleDelete() {
        setIsDeleting(true);
        setTimeout(() => {
          setIsDeleting(false);
          setDeleteOpen(false);
        }, 1500);
      }

      function handleCreate() {
        setIsCreating(true);
        setTimeout(() => {
          setIsCreating(false);
          setCreateOpen(false);
        }, 1500);
      }

      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">Dialog Examples</h2>
            <p className="text-muted-foreground text-sm">
              Common dialog patterns used in the Neynar Dashboard.
            </p>
          </div>

          {/* API Key Card */}
          <div className="border-border bg-card rounded-lg border p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-md p-2">
                  <KeyIcon className="size-5" />
                </div>
                <div>
                  <p className="font-medium">Production API Key</p>
                  <code className="text-muted-foreground font-mono text-sm">
                    neynar_sk_prod_****_****_8f3d
                  </code>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm">
                <CopyIcon data-icon="inline-start" />
                Copy
              </Button>

              {/* Destructive Confirmation Dialog */}
              <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
                <DialogTrigger
                  render={<Button variant="destructive" size="sm" />}
                >
                  <TrashIcon data-icon="inline-start" />
                  Revoke
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Revoke API Key?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. Revoking this key will
                      immediately stop all applications using it from accessing
                      the Neynar API.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose render={<Button variant="outline" />}>
                      Cancel
                    </DialogClose>
                    <Button
                      variant="destructive"
                      onClick={handleDelete}
                      disabled={isDeleting}
                    >
                      {isDeleting ? (
                        <>
                          <Loader2Icon
                            data-icon="inline-start"
                            className="animate-spin"
                          />
                          Revoking...
                        </>
                      ) : (
                        <>
                          <TrashIcon data-icon="inline-start" />
                          Revoke Key
                        </>
                      )}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {/* Create API Key Dialog */}
            <Dialog open={createOpen} onOpenChange={setCreateOpen}>
              <DialogTrigger render={<Button />}>
                <PlusIcon data-icon="inline-start" />
                Create API Key
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New API Key</DialogTitle>
                  <DialogDescription>
                    Create a new API key for your application. You can set
                    restrictions and permissions after creation.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="key-name">Key Name</Label>
                    <Input
                      id="key-name"
                      placeholder="Production Key"
                      defaultValue=""
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="key-description">
                      Description (Optional)
                    </Label>
                    <Input
                      id="key-description"
                      placeholder="Used for production API calls"
                      defaultValue=""
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose render={<Button variant="outline" />}>
                    Cancel
                  </DialogClose>
                  <Button onClick={handleCreate} disabled={isCreating}>
                    {isCreating ? (
                      <>
                        <Loader2Icon
                          data-icon="inline-start"
                          className="animate-spin"
                        />
                        Creating...
                      </>
                    ) : (
                      <>
                        <PlusIcon data-icon="inline-start" />
                        Create Key
                      </>
                    )}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Invite Team Member Dialog */}
            <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
              <DialogTrigger render={<Button variant="outline" />}>
                <UserIcon data-icon="inline-start" />
                Invite Team Member
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Invite Team Member</DialogTitle>
                  <DialogDescription>
                    Send an invitation to join your Neynar team. They'll receive
                    an email with instructions to get started.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="colleague@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" placeholder="Developer" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose render={<Button variant="outline" />}>
                    Cancel
                  </DialogClose>
                  <Button>
                    <MailIcon data-icon="inline-start" />
                    Send Invitation
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      );
    }

    return <DashboardDialogs />;
  },
};

/**
 * Complete design system reference showing all dialog variants, compositions,
 * and usage patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-3xl space-y-10">
      {/* Basic Dialog */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Basic Dialog</h3>
          <p className="text-muted-foreground text-sm">
            Simple dialog with title, description, and actions.
          </p>
        </div>
        <div>
          <Dialog>
            <DialogTrigger render={<Button />}>Open Basic Dialog</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Basic Dialog</DialogTitle>
                <DialogDescription>
                  A simple dialog with header and footer sections.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  Close
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Confirmation Dialog */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Confirmation Dialog</h3>
          <p className="text-muted-foreground text-sm">
            Dialog for confirming destructive or important actions.
          </p>
        </div>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger render={<Button variant="destructive" />}>
              <TrashIcon data-icon="inline-start" />
              Delete Account
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  Cancel
                </DialogClose>
                <Button variant="destructive">
                  <TrashIcon data-icon="inline-start" />
                  Delete Account
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              <AlertTriangleIcon data-icon="inline-start" />
              Discard Changes
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Discard unsaved changes?</DialogTitle>
                <DialogDescription>
                  You have unsaved changes that will be lost if you continue.
                  Are you sure you want to discard them?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  Keep Editing
                </DialogClose>
                <Button variant="destructive">Discard Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Form Dialog */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Form Dialog</h3>
          <p className="text-muted-foreground text-sm">
            Dialog containing form inputs for data collection.
          </p>
        </div>
        <div>
          <Dialog>
            <DialogTrigger render={<Button />}>
              <PlusIcon data-icon="inline-start" />
              Create Project
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Project</DialogTitle>
                <DialogDescription>
                  Set up a new project to organize your API keys and team
                  members.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-name">Project Name</Label>
                  <Input id="project-name" placeholder="My Awesome Project" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-description">Description</Label>
                  <Input
                    id="project-description"
                    placeholder="A brief description of your project"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  Cancel
                </DialogClose>
                <Button>
                  <PlusIcon data-icon="inline-start" />
                  Create Project
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Without Close Button */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Without Close Button</h3>
          <p className="text-muted-foreground text-sm">
            Dialog that requires explicit action to close (no X button).
          </p>
        </div>
        <div>
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Forced Action
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>Action Required</DialogTitle>
                <DialogDescription>
                  Please choose one of the options below. This dialog cannot be
                  dismissed without making a selection.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  Option A
                </DialogClose>
                <DialogClose render={<Button />}>Option B</DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Information Dialog */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Information Dialog</h3>
          <p className="text-muted-foreground text-sm">
            Dialog for displaying information or announcements.
          </p>
        </div>
        <div>
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              View Details
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>API Key Details</DialogTitle>
                <DialogDescription>
                  Information about your API key and its usage.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 py-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Created:</span>
                  <span className="font-medium">January 15, 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last Used:</span>
                  <span className="font-medium">2 hours ago</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Requests (24h):</span>
                  <span className="font-medium">1,234</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Rate Limit:</span>
                  <span className="font-medium">10,000 / day</span>
                </div>
              </div>
              <DialogFooter showCloseButton>
                <Button>
                  <CopyIcon data-icon="inline-start" />
                  Copy Key
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Controlled Dialog */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Controlled Dialog</h3>
          <p className="text-muted-foreground text-sm">
            Dialog with controlled open state for programmatic control.
          </p>
        </div>
        <div>
          {(() => {
            function ControlledExample() {
              const [open, setOpen] = useState(false);

              return (
                <div className="flex gap-2">
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger render={<Button />}>
                      Open Controlled Dialog
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Controlled Dialog</DialogTitle>
                        <DialogDescription>
                          This dialog's open state is controlled by React state.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={() => setOpen(false)}
                        >
                          Close Programmatically
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" onClick={() => setOpen(true)}>
                    Open from Outside
                  </Button>
                </div>
              );
            }

            return <ControlledExample />;
          })()}
        </div>
      </section>
    </div>
  ),
};

/**
 * Frosted dialog effect with backdrop blur over colorful backgrounds.
 * Dialogs use 75% opacity and backdrop-blur for a frosted glass appearance.
 */
export const Frosted: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Busy colorful background with blocks and text */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
        <div className="grid grid-cols-4 gap-4">
          {/* Color blocks */}
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
          <div className="rounded-lg bg-orange-400 p-4 text-orange-900">
            <p className="font-bold">Orange Block</p>
            <p className="text-sm">Et dolore magna aliqua</p>
          </div>
          <div className="rounded-lg bg-teal-400 p-4 text-teal-900">
            <p className="font-bold">Teal Block</p>
            <p className="text-sm">Ut enim ad minim veniam</p>
          </div>
          <div className="rounded-lg bg-pink-400 p-4 text-pink-900">
            <p className="font-bold">Pink Block</p>
            <p className="text-sm">Quis nostrud exercitation</p>
          </div>
          <div className="rounded-lg bg-cyan-400 p-4 text-cyan-900">
            <p className="font-bold">Cyan Block</p>
            <p className="text-sm">Ullamco laboris nisi</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-6 text-white">
          <div>
            <h2 className="text-2xl font-bold">Background Content</h2>
            <p className="mt-2">
              This text demonstrates how the dialog's frosted glass effect blurs
              the content behind it while remaining readable.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">More Text Here</h2>
            <p className="mt-2">
              The backdrop-filter: blur() CSS property creates a nice frosted
              glass aesthetic that's popular in modern UIs.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Third Column</h2>
            <p className="mt-2">
              You can customize the blur intensity with the --surface-blur CSS
              variable and opacity with --card or --popover tokens.
            </p>
          </div>
        </div>
      </div>

      {/* Dialog - defaultOpen to show the effect */}
      <Dialog defaultOpen>
        <DialogTrigger
          render={<Button className="absolute top-4 left-4 z-10" />}
        >
          Open Dialog
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Frosted Glass Dialog</DialogTitle>
            <DialogDescription>
              Notice how you can see the colorful background through the dialog,
              but it's blurred for readability.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-sm">
            <p>
              The dialog uses 75% opacity combined with a 12px backdrop blur to
              create this effect. Customize via CSS tokens:
            </p>
            <ul className="mt-2 list-disc pl-4 space-y-1 text-muted-foreground">
              <li>
                <code>--surface-blur</code> controls blur intensity
              </li>
              <li>
                <code>--popover</code> controls background opacity
              </li>
            </ul>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              Close
            </DialogClose>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};

/**
 * Interactive playground for testing dialog props and composition.
 */
export const Interactive: Story = {
  args: {
    defaultOpen: false,
  },
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger render={<Button />}>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a description of what this dialog does. It provides context
            and helps users understand the purpose.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm">
            Dialog content goes here. You can include forms, information, or any
            other interactive elements.
          </p>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
