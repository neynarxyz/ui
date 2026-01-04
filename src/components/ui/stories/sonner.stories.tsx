import type { Meta, StoryObj } from "@storybook/react";
import { toast } from "sonner";
import {
  CopyIcon,
  KeyIcon,
  TrashIcon,
  RefreshCwIcon,
  SaveIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  InfoIcon,
  XCircleIcon,
} from "lucide-react";

import { Toaster } from "../sonner";
import { Button } from "../button";

const meta: Meta<typeof Toaster> = {
  title: "Components/Feedback & Status/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    position: {
      control: "select",
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      description: "Position of the toast notifications",
      defaultValue: "bottom-right",
    },
    expand: {
      control: "boolean",
      description: "Expand toasts by default",
      defaultValue: false,
    },
    richColors: {
      control: "boolean",
      description: "Use rich colors for toast variants",
      defaultValue: false,
    },
    closeButton: {
      control: "boolean",
      description: "Show close button on toasts",
      defaultValue: false,
    },
    duration: {
      control: "number",
      description: "Default duration in milliseconds",
      defaultValue: 4000,
    },
    visibleToasts: {
      control: "number",
      description: "Number of toasts visible at once",
      defaultValue: 3,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

/**
 * API Key Management - Realistic Neynar Dashboard scenario showing toast
 * notifications for common API actions like copying keys, regenerating,
 * saving settings, and handling errors.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function APIKeyDashboard() {
      const handleCopyKey = () => {
        toast.success("API key copied to clipboard", {
          description: "You can now use this key in your application",
          icon: <CopyIcon className="size-4" />,
        });
      };

      const handleRegenerateKey = () => {
        const toastId = toast.loading("Regenerating API key...", {
          description: "This may take a few seconds",
        });

        setTimeout(() => {
          toast.success("API key regenerated successfully", {
            id: toastId,
            description: "Your old key has been invalidated",
            icon: <RefreshCwIcon className="size-4" />,
          });
        }, 2000);
      };

      const handleRevokeKey = () => {
        toast.error("Failed to revoke API key", {
          description: "You cannot revoke your only production key",
          icon: <XCircleIcon className="size-4" />,
        });
      };

      const handleSaveSettings = () => {
        const toastId = toast.loading("Saving settings...", {
          description: "Updating your preferences",
        });

        setTimeout(() => {
          toast.success("Settings saved successfully", {
            id: toastId,
            description: "Your changes have been applied",
            icon: <SaveIcon className="size-4" />,
          });
        }, 1500);
      };

      const handleWarning = () => {
        toast.warning("Rate limit approaching", {
          description: "You've used 85% of your monthly quota",
          icon: <AlertTriangleIcon className="size-4" />,
        });
      };

      const handleInfo = () => {
        toast.info("New API version available", {
          description: "v2.0 includes improved performance and new endpoints",
          icon: <InfoIcon className="size-4" />,
        });
      };

      const handleCustomAction = () => {
        toast.success("API key copied!", {
          action: {
            label: "View Docs",
            onClick: () => console.log("Opening docs..."),
          },
        });
      };

      const handlePromise = () => {
        const promise = new Promise((resolve) => {
          setTimeout(() => resolve({ name: "Production Key" }), 2000);
        });

        toast.promise(promise, {
          loading: "Creating API key...",
          success: "API key created successfully",
          error: "Failed to create API key",
        });
      };

      return (
        <div className="w-full max-w-2xl space-y-6">
          <Toaster />

          <div>
            <h2 className="text-lg font-semibold">API Key Management</h2>
            <p className="text-muted-foreground text-sm">
              Test different toast notification types for common dashboard
              actions.
            </p>
          </div>

          <div className="border-border bg-card rounded-lg border p-6 space-y-6">
            <section className="space-y-3">
              <h3 className="text-sm font-medium">Common Actions</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" onClick={handleCopyKey}>
                  <CopyIcon data-icon="inline-start" />
                  Copy Key
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRegenerateKey}
                >
                  <RefreshCwIcon data-icon="inline-start" />
                  Regenerate
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleRevokeKey}
                >
                  <TrashIcon data-icon="inline-start" />
                  Revoke
                </Button>
                <Button size="sm" onClick={handleSaveSettings}>
                  <SaveIcon data-icon="inline-start" />
                  Save Settings
                </Button>
              </div>
            </section>

            <section className="space-y-3 border-t pt-4">
              <h3 className="text-sm font-medium">Toast Types</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" onClick={handleInfo}>
                  <InfoIcon data-icon="inline-start" />
                  Info
                </Button>
                <Button variant="outline" size="sm" onClick={handleWarning}>
                  <AlertTriangleIcon data-icon="inline-start" />
                  Warning
                </Button>
              </div>
            </section>

            <section className="space-y-3 border-t pt-4">
              <h3 className="text-sm font-medium">Advanced</h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleCustomAction}
                >
                  <CheckCircleIcon data-icon="inline-start" />
                  With Action
                </Button>
                <Button variant="secondary" size="sm" onClick={handlePromise}>
                  <KeyIcon data-icon="inline-start" />
                  Promise Toast
                </Button>
              </div>
            </section>
          </div>
        </div>
      );
    }

    return <APIKeyDashboard />;
  },
};

/**
 * Complete design system reference showing all toast variants and patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    const showBasicToast = () => {
      toast("Basic notification", {
        description: "This is a basic toast without any variant",
      });
    };

    const showSuccessToast = () => {
      toast.success("Operation successful", {
        description: "Your changes have been saved successfully",
      });
    };

    const showErrorToast = () => {
      toast.error("Operation failed", {
        description: "An error occurred while processing your request",
      });
    };

    const showWarningToast = () => {
      toast.warning("Warning message", {
        description: "Please review this action before proceeding",
      });
    };

    const showInfoToast = () => {
      toast.info("Information", {
        description: "Here's some helpful information for you",
      });
    };

    const showLoadingToast = () => {
      toast.loading("Loading...", {
        description: "Please wait while we process your request",
      });
    };

    const showWithAction = () => {
      toast.success("File uploaded", {
        description: "Your file has been uploaded successfully",
        action: {
          label: "View",
          onClick: () => console.log("View clicked"),
        },
      });
    };

    const showWithCancel = () => {
      toast("Meeting scheduled", {
        description: "Your meeting has been scheduled for tomorrow at 3 PM",
        cancel: {
          label: "Cancel",
          onClick: () => console.log("Cancelled"),
        },
      });
    };

    const showWithBothActions = () => {
      toast.success("Changes saved", {
        description: "Do you want to publish these changes now?",
        action: {
          label: "Publish",
          onClick: () => console.log("Publish clicked"),
        },
        cancel: {
          label: "Later",
          onClick: () => console.log("Later clicked"),
        },
      });
    };

    const showPromiseExample = () => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve({ name: "Success" });
          } else {
            reject("Error");
          }
        }, 2000);
      });

      toast.promise(promise, {
        loading: "Processing...",
        success: "Completed successfully",
        error: "Failed to complete",
      });
    };

    const showCustomDuration = () => {
      toast.success("This toast stays for 10 seconds", {
        duration: 10000,
      });
    };

    const showPersistent = () => {
      toast.info("This toast stays until dismissed", {
        duration: Infinity,
      });
    };

    return (
      <div className="w-full max-w-4xl space-y-10">
        <Toaster />

        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Toast Types</h3>
            <p className="text-muted-foreground text-sm">
              All available toast variants with their default icons.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={showBasicToast}>
              Basic
            </Button>
            <Button variant="outline" onClick={showSuccessToast}>
              Success
            </Button>
            <Button variant="outline" onClick={showErrorToast}>
              Error
            </Button>
            <Button variant="outline" onClick={showWarningToast}>
              Warning
            </Button>
            <Button variant="outline" onClick={showInfoToast}>
              Info
            </Button>
            <Button variant="outline" onClick={showLoadingToast}>
              Loading
            </Button>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">With Actions</h3>
            <p className="text-muted-foreground text-sm">
              Toasts can include action buttons for quick interactions.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={showWithAction}>
              With Action
            </Button>
            <Button variant="secondary" onClick={showWithCancel}>
              With Cancel
            </Button>
            <Button variant="secondary" onClick={showWithBothActions}>
              Both Actions
            </Button>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Advanced Patterns</h3>
            <p className="text-muted-foreground text-sm">
              Promise handling and custom duration configurations.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={showPromiseExample}>
              Promise Toast
            </Button>
            <Button variant="secondary" onClick={showCustomDuration}>
              Custom Duration (10s)
            </Button>
            <Button variant="secondary" onClick={showPersistent}>
              Persistent Toast
            </Button>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Position Options</h3>
            <p className="text-muted-foreground text-sm">
              Toasts can be positioned in different corners of the screen.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                toast.success("Top Left", { position: "top-left" });
              }}
            >
              Top Left
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                toast.success("Top Center", { position: "top-center" });
              }}
            >
              Top Center
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                toast.success("Top Right", { position: "top-right" });
              }}
            >
              Top Right
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                toast.success("Bottom Left", { position: "bottom-left" });
              }}
            >
              Bottom Left
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                toast.success("Bottom Center", { position: "bottom-center" });
              }}
            >
              Bottom Center
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                toast.success("Bottom Right", { position: "bottom-right" });
              }}
            >
              Bottom Right
            </Button>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Stacking Behavior</h3>
            <p className="text-muted-foreground text-sm">
              Multiple toasts stack automatically and can be dismissed
              individually.
            </p>
          </div>
          <Button
            onClick={() => {
              toast.success("First notification");
              setTimeout(() => toast.info("Second notification"), 200);
              setTimeout(() => toast.warning("Third notification"), 400);
              setTimeout(() => toast.error("Fourth notification"), 600);
            }}
          >
            Show Multiple Toasts
          </Button>
        </section>
      </div>
    );
  },
};

/**
 * Interactive playground for testing Toaster configuration.
 */
export const Interactive: Story = {
  args: {
    position: "bottom-right",
    expand: false,
    richColors: false,
    closeButton: false,
    duration: 4000,
    visibleToasts: 3,
  },
  render: (args) => (
    <div className="space-y-4">
      <Toaster {...args} />
      <Button
        onClick={() =>
          toast.success("Interactive toast", {
            description: "Configure the Toaster using the controls panel",
          })
        }
      >
        Show Toast
      </Button>
    </div>
  ),
};
