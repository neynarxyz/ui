import type { Meta, StoryObj } from "@storybook/react";
import {
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  DownloadIcon,
  EditIcon,
  FilterIcon,
  KeyIcon,
  Loader2Icon,
  MailIcon,
  MoreHorizontalIcon,
  PauseIcon,
  PlayIcon,
  RefreshCwIcon,
  SearchIcon,
  SettingsIcon,
  TrashIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "../button-group";
import { Input } from "../input";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Form & Field/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Layout direction of the button group",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

/**
 * Bulk Actions - Realistic scenarios for managing API keys and webhooks
 * in the Neynar Dashboard with button groups for batch operations.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function BulkActionsDemo() {
      const [selectedKeys, setSelectedKeys] = useState(3);
      const [isProcessing, setIsProcessing] = useState(false);
      const [filter, setFilter] = useState("all");

      const handleBulkAction = (_action: string) => {
        setIsProcessing(true);
        setTimeout(() => setIsProcessing(false), 1500);
      };

      return (
        <div className="w-full max-w-4xl space-y-8">
          {/* API Keys Bulk Actions */}
          <section className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">API Keys Management</h3>
              <p className="text-muted-foreground text-sm">
                Bulk actions for managing multiple API keys
              </p>
            </div>

            {/* Selection Bar with Bulk Actions */}
            <div className="border-border bg-muted/30 flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-4">
                <ButtonGroupText>
                  <CheckIcon />
                  {selectedKeys} selected
                </ButtonGroupText>
                <ButtonGroup>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleBulkAction("regenerate")}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <Loader2Icon
                        data-icon="inline-start"
                        className="animate-spin"
                      />
                    ) : (
                      <RefreshCwIcon data-icon="inline-start" />
                    )}
                    Regenerate
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleBulkAction("export")}
                  >
                    <DownloadIcon data-icon="inline-start" />
                    Export
                  </Button>
                  <ButtonGroupSeparator />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleBulkAction("delete")}
                  >
                    <TrashIcon data-icon="inline-start" />
                    Delete
                  </Button>
                </ButtonGroup>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedKeys(0)}
              >
                <XIcon data-icon="inline-start" />
                Clear
              </Button>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex gap-2">
              <ButtonGroup className="flex-1">
                <Input placeholder="Search API keys..." className="flex-1" />
                <Button variant="outline" size="icon">
                  <SearchIcon />
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button
                  variant={filter === "all" ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setFilter("all")}
                >
                  All
                </Button>
                <Button
                  variant={filter === "active" ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setFilter("active")}
                >
                  Active
                </Button>
                <Button
                  variant={filter === "inactive" ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setFilter("inactive")}
                >
                  Inactive
                </Button>
              </ButtonGroup>
            </div>
          </section>

          {/* Webhook Actions */}
          <section className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Webhook Controls</h3>
              <p className="text-muted-foreground text-sm">
                Manage webhook endpoints with grouped actions
              </p>
            </div>

            {/* Webhook Card with Split Button */}
            <div className="border-border bg-card rounded-lg border p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-md p-2">
                    <MailIcon className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium">Production Webhook</p>
                    <code className="text-muted-foreground font-mono text-sm">
                      https://api.example.com/webhooks/farcaster
                    </code>
                  </div>
                </div>
                <ButtonGroup>
                  <Button variant="outline" size="sm">
                    <PlayIcon data-icon="inline-start" />
                    Enable
                  </Button>
                  <Button variant="outline" size="icon-sm">
                    <ChevronDownIcon />
                  </Button>
                </ButtonGroup>
              </div>

              <div className="mt-4 flex gap-2">
                <ButtonGroup>
                  <Button variant="outline" size="sm">
                    <CopyIcon data-icon="inline-start" />
                    Copy URL
                  </Button>
                  <Button variant="outline" size="sm">
                    <RefreshCwIcon data-icon="inline-start" />
                    Test
                  </Button>
                  <Button variant="outline" size="sm">
                    <EditIcon data-icon="inline-start" />
                    Edit
                  </Button>
                </ButtonGroup>
                <Button variant="destructive" size="sm">
                  <TrashIcon data-icon="inline-start" />
                  Delete
                </Button>
              </div>
            </div>

            {/* Webhook Status Card */}
            <div className="border-border bg-card rounded-lg border p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/10 text-green-600 dark:text-green-400 rounded-md p-2">
                    <MailIcon className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium">Development Webhook</p>
                    <code className="text-muted-foreground font-mono text-sm">
                      https://api-dev.example.com/webhooks/test
                    </code>
                  </div>
                </div>
                <ButtonGroup>
                  <Button variant="outline" size="sm">
                    <PauseIcon data-icon="inline-start" />
                    Pause
                  </Button>
                  <Button variant="outline" size="icon-sm">
                    <MoreHorizontalIcon />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </section>

          {/* Table Actions */}
          <section className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Data Table Actions</h3>
              <p className="text-muted-foreground text-sm">
                Common button group patterns for data tables
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* View Toggle */}
              <ButtonGroup>
                <Button variant="outline" size="sm">
                  Grid
                </Button>
                <Button variant="secondary" size="sm">
                  List
                </Button>
                <Button variant="outline" size="sm">
                  Compact
                </Button>
              </ButtonGroup>

              {/* Pagination */}
              <ButtonGroup>
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <ButtonGroupText>1 of 10</ButtonGroupText>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </ButtonGroup>

              {/* Actions with Separator */}
              <ButtonGroup>
                <Button variant="outline" size="sm">
                  <FilterIcon data-icon="inline-start" />
                  Filter
                </Button>
                <ButtonGroupSeparator />
                <Button variant="outline" size="sm">
                  <DownloadIcon data-icon="inline-start" />
                  Export
                </Button>
                <ButtonGroupSeparator />
                <Button variant="outline" size="sm">
                  <SettingsIcon data-icon="inline-start" />
                  Settings
                </Button>
              </ButtonGroup>
            </div>
          </section>
        </div>
      );
    }

    return <BulkActionsDemo />;
  },
};

/**
 * Complete design system reference showing all button group variants,
 * orientations, compositions, and integration patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Basic Horizontal Groups */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Horizontal Groups</h3>
          <p className="text-muted-foreground text-sm">
            Default horizontal layout for button groups.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <ButtonGroup>
            <Button variant="outline">Left</Button>
            <Button variant="outline">Center</Button>
            <Button variant="outline">Right</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="secondary">Option 1</Button>
            <Button variant="secondary">Option 2</Button>
            <Button variant="secondary">Option 3</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="default">Primary</Button>
            <Button variant="outline">Secondary</Button>
          </ButtonGroup>
        </div>
      </section>

      {/* Vertical Groups */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Vertical Groups</h3>
          <p className="text-muted-foreground text-sm">
            Vertical layout for stacked button groups.
          </p>
        </div>
        <div className="flex gap-6">
          <ButtonGroup orientation="vertical">
            <Button variant="outline">Top</Button>
            <Button variant="outline">Middle</Button>
            <Button variant="outline">Bottom</Button>
          </ButtonGroup>
          <ButtonGroup orientation="vertical">
            <Button variant="secondary">
              <KeyIcon data-icon="inline-start" />
              API Keys
            </Button>
            <Button variant="secondary">
              <MailIcon data-icon="inline-start" />
              Webhooks
            </Button>
            <Button variant="secondary">
              <SettingsIcon data-icon="inline-start" />
              Settings
            </Button>
          </ButtonGroup>
        </div>
      </section>

      {/* With Separators */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Separators</h3>
          <p className="text-muted-foreground text-sm">
            Visual separation between related button groups.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <ButtonGroup>
            <Button variant="outline" size="sm">
              <CopyIcon data-icon="inline-start" />
              Copy
            </Button>
            <Button variant="outline" size="sm">
              <EditIcon data-icon="inline-start" />
              Edit
            </Button>
            <ButtonGroupSeparator />
            <Button variant="outline" size="sm">
              <TrashIcon data-icon="inline-start" />
              Delete
            </Button>
          </ButtonGroup>
          <ButtonGroup orientation="vertical">
            <Button variant="outline">View</Button>
            <Button variant="outline">Edit</Button>
            <ButtonGroupSeparator orientation="horizontal" />
            <Button variant="outline">Delete</Button>
          </ButtonGroup>
        </div>
      </section>

      {/* With Text Labels */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Text Labels</h3>
          <p className="text-muted-foreground text-sm">
            Display status or information alongside buttons.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <ButtonGroup>
            <ButtonGroupText>Page</ButtonGroupText>
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <ButtonGroupText>1 of 5</ButtonGroupText>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonGroupText>
              <CheckIcon />3 selected
            </ButtonGroupText>
            <Button variant="outline" size="sm">
              Select All
            </Button>
            <Button variant="outline" size="sm">
              Clear
            </Button>
          </ButtonGroup>
        </div>
      </section>

      {/* Input Integration */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Input Integration</h3>
          <p className="text-muted-foreground text-sm">
            Combine inputs with buttons for search and filters.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <ButtonGroup>
            <Input placeholder="Search..." className="w-64" />
            <Button variant="outline" size="icon">
              <SearchIcon />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Input placeholder="Enter URL..." className="w-80" />
            <Button variant="default">
              <CopyIcon data-icon="inline-start" />
              Copy
            </Button>
          </ButtonGroup>
        </div>
      </section>

      {/* Different Sizes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Sizes</h3>
          <p className="text-muted-foreground text-sm">
            Button groups work with all button sizes.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <ButtonGroup>
            <Button variant="outline" size="xs">
              Extra Small
            </Button>
            <Button variant="outline" size="xs">
              Button
            </Button>
            <Button variant="outline" size="xs">
              Group
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline" size="sm">
              Small
            </Button>
            <Button variant="outline" size="sm">
              Button
            </Button>
            <Button variant="outline" size="sm">
              Group
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline">Default</Button>
            <Button variant="outline">Button</Button>
            <Button variant="outline">Group</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline" size="lg">
              Large
            </Button>
            <Button variant="outline" size="lg">
              Button
            </Button>
            <Button variant="outline" size="lg">
              Group
            </Button>
          </ButtonGroup>
        </div>
      </section>

      {/* Icon Buttons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Icon Button Groups</h3>
          <p className="text-muted-foreground text-sm">
            Groups of icon-only buttons for compact toolbars.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <ButtonGroup>
            <Button variant="outline" size="icon-sm">
              <CopyIcon />
            </Button>
            <Button variant="outline" size="icon-sm">
              <EditIcon />
            </Button>
            <Button variant="outline" size="icon-sm">
              <TrashIcon />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="ghost" size="icon">
              <SettingsIcon />
            </Button>
            <Button variant="ghost" size="icon">
              <FilterIcon />
            </Button>
            <ButtonGroupSeparator />
            <Button variant="ghost" size="icon">
              <MoreHorizontalIcon />
            </Button>
          </ButtonGroup>
        </div>
      </section>

      {/* Split Buttons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Split Buttons</h3>
          <p className="text-muted-foreground text-sm">
            Primary action with dropdown for additional options.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <ButtonGroup>
            <Button variant="default">Save Changes</Button>
            <Button variant="default" size="icon">
              <ChevronDownIcon />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline">
              <DownloadIcon data-icon="inline-start" />
              Download
            </Button>
            <Button variant="outline" size="icon">
              <ChevronDownIcon />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="destructive">
              <TrashIcon data-icon="inline-start" />
              Delete
            </Button>
            <Button variant="destructive" size="icon">
              <ChevronDownIcon />
            </Button>
          </ButtonGroup>
        </div>
      </section>

      {/* Mixed Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Mixed Variants</h3>
          <p className="text-muted-foreground text-sm">
            Combining different button variants in a group.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <ButtonGroup>
            <Button variant="default">Primary Action</Button>
            <Button variant="outline">Secondary</Button>
            <Button variant="outline">Tertiary</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="secondary">Apply</Button>
            <Button variant="ghost">Cancel</Button>
          </ButtonGroup>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">States</h3>
          <p className="text-muted-foreground text-sm">
            Disabled and loading states in button groups.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <ButtonGroup>
            <Button variant="outline" disabled>
              First
            </Button>
            <Button variant="outline" disabled>
              Second
            </Button>
            <Button variant="outline" disabled>
              Third
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline" disabled>
              <Loader2Icon data-icon="inline-start" className="animate-spin" />
              Processing...
            </Button>
            <Button variant="outline" disabled>
              Cancel
            </Button>
          </ButtonGroup>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing ButtonGroup props.
 */
export const Interactive: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="outline">Third</Button>
    </ButtonGroup>
  ),
};
