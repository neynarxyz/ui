import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import {
  CopyIcon,
  KeyIcon,
  Loader2Icon,
  MoreHorizontalIcon,
  PlusIcon,
  RefreshCwIcon,
  SendIcon,
  SettingsIcon,
  TrashIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../button";

const meta: Meta<typeof Button> = {
  title: "Components/Core Inputs/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "destructive",
        "success",
        "warning",
        "info",
        "link",
      ],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
      description: "Button size",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * API Key Management - A realistic scenario showing buttons in context
 * of managing API keys in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function APIKeyCard() {
      const [copied, setCopied] = useState(false);
      const [isRegenerating, setIsRegenerating] = useState(false);

      const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };

      const handleRegenerate = () => {
        setIsRegenerating(true);
        setTimeout(() => setIsRegenerating(false), 1500);
      };

      return (
        <div className="w-full max-w-xl space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">API Keys</h2>
              <p className="text-muted-foreground text-sm">
                Manage your Neynar API keys for production and development.
              </p>
            </div>
            <Button>
              <PlusIcon data-icon="inline-start" />
              Create Key
            </Button>
          </div>

          {/* API Key Card */}
          <div className="border-border bg-card rounded-lg border p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-md p-2">
                  <KeyIcon className="size-5" />
                </div>
                <div>
                  <p className="font-medium">Production Key</p>
                  <code className="text-muted-foreground font-mono text-sm">
                    neynar_sk_prod_****_****_8f3d
                  </code>
                </div>
              </div>
              <Button variant="ghost" size="icon-sm">
                <MoreHorizontalIcon />
              </Button>
            </div>

            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm" onClick={handleCopy}>
                <CopyIcon data-icon="inline-start" />
                {copied ? "Copied!" : "Copy"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRegenerate}
                disabled={isRegenerating}
              >
                {isRegenerating ? (
                  <Loader2Icon
                    data-icon="inline-start"
                    className="animate-spin"
                  />
                ) : (
                  <RefreshCwIcon data-icon="inline-start" />
                )}
                {isRegenerating ? "Regenerating..." : "Regenerate"}
              </Button>
              <Button variant="destructive" size="sm">
                <TrashIcon data-icon="inline-start" />
                Revoke
              </Button>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex justify-between border-t pt-4">
            <Button variant="ghost">
              <SettingsIcon data-icon="inline-start" />
              Settings
            </Button>
            <div className="flex gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>
                <SendIcon data-icon="inline-start" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return <APIKeyCard />;
  },
};

/**
 * Complete design system reference showing all button variants, sizes, and states.
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
            Different styles for different purposes and hierarchy.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div>
          <p className="text-muted-foreground text-sm mb-3">
            Semantic variants for status and feedback.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="destructive">Destructive</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="info">Info</Button>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Sizes</h3>
          <p className="text-muted-foreground text-sm">
            Multiple sizes for different contexts and density needs.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* With Icons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Icons</h3>
          <p className="text-muted-foreground text-sm">
            Icons can be placed at the start or end of button text.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            <PlusIcon data-icon="inline-start" />
            Create
          </Button>
          <Button variant="outline">
            <CopyIcon data-icon="inline-start" />
            Copy
          </Button>
          <Button variant="secondary">
            Continue
            <SendIcon data-icon="inline-end" />
          </Button>
          <Button variant="ghost">
            <SettingsIcon data-icon="inline-start" />
            Settings
          </Button>
        </div>
      </section>

      {/* Icon Only */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Icon Only</h3>
          <p className="text-muted-foreground text-sm">
            Square buttons for icon-only actions.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="icon-xs" variant="ghost" aria-label="Settings">
            <SettingsIcon />
          </Button>
          <Button size="icon-sm" variant="ghost" aria-label="Settings">
            <SettingsIcon />
          </Button>
          <Button size="icon" variant="ghost" aria-label="Settings">
            <SettingsIcon />
          </Button>
          <Button size="icon-lg" variant="ghost" aria-label="Settings">
            <SettingsIcon />
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="icon" variant="default" aria-label="Add">
            <PlusIcon />
          </Button>
          <Button size="icon" variant="outline" aria-label="Copy">
            <CopyIcon />
          </Button>
          <Button size="icon" variant="secondary" aria-label="Refresh">
            <RefreshCwIcon />
          </Button>
          <Button size="icon" variant="destructive" aria-label="Delete">
            <TrashIcon />
          </Button>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">States</h3>
          <p className="text-muted-foreground text-sm">
            Disabled and loading states for async operations.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
          <Button disabled>
            <Loader2Icon data-icon="inline-start" className="animate-spin" />
            Loading...
          </Button>
        </div>
      </section>

      {/* All Variants × Sizes Matrix */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Variant × Size Matrix</h3>
          <p className="text-muted-foreground text-sm">
            Complete combination reference.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-muted-foreground border-b text-left text-sm">
                <th className="pb-3 pr-4 font-medium">Variant</th>
                <th className="pb-3 pr-4 font-medium">XS</th>
                <th className="pb-3 pr-4 font-medium">SM</th>
                <th className="pb-3 pr-4 font-medium">Default</th>
                <th className="pb-3 pr-4 font-medium">LG</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {(
                [
                  "default",
                  "secondary",
                  "outline",
                  "ghost",
                  "destructive",
                  "success",
                  "warning",
                  "info",
                  "link",
                ] as const
              ).map((variant) => (
                <tr key={variant} className="border-b last:border-0">
                  <td className="py-3 pr-4 font-mono text-sm capitalize">
                    {variant}
                  </td>
                  <td className="py-3 pr-4">
                    <Button variant={variant} size="xs">
                      Button
                    </Button>
                  </td>
                  <td className="py-3 pr-4">
                    <Button variant={variant} size="sm">
                      Button
                    </Button>
                  </td>
                  <td className="py-3 pr-4">
                    <Button variant={variant} size="default">
                      Button
                    </Button>
                  </td>
                  <td className="py-3 pr-4">
                    <Button variant={variant} size="lg">
                      Button
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing button props.
 */
export const Interactive: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
  },
};
