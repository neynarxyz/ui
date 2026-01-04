import type { Meta, StoryObj } from "@storybook/react";
import {
  CopyIcon,
  HelpCircleIcon,
  InfoIcon,
  KeyIcon,
  LineChartIcon,
  RefreshCwIcon,
  SettingsIcon,
  TrashIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";

import { Button } from "../button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";

/**
 * Tooltip stories showcasing contextual help, feature explanations, and icon labels.
 *
 * Demonstrates placement options (top, bottom, left, right), icon button tooltips,
 * and realistic Neynar Dashboard scenarios for feature discovery and explanations.
 */
const meta: Meta<typeof Tooltip> = {
  title: "Components/Overlays & Dialogs/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "Whether the tooltip is open by default",
    },
    open: {
      control: "boolean",
      description: "Controlled open state",
    },
    onOpenChange: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Feature Explanations - A realistic Neynar Dashboard scenario showing tooltips
 * for feature discovery, icon buttons, and contextual help.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    return (
      <div className="w-full max-w-3xl space-y-8">
        {/* Dashboard Header with Feature Tooltips */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Dashboard Analytics</h3>
            <p className="text-muted-foreground text-sm">
              Tooltips provide contextual help for features and actions
            </p>
          </div>
          <div className="border-border bg-card rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">API Usage</h4>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <button className="text-muted-foreground hover:text-foreground inline-flex items-center transition-colors">
                        <HelpCircleIcon className="size-4" />
                      </button>
                    }
                  />
                  <TooltipContent>
                    <p className="max-w-xs">
                      Track your API requests, rate limits, and usage patterns
                      across all your applications.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="outline" size="icon-sm">
                        <RefreshCwIcon className="size-4" />
                      </Button>
                    }
                  />
                  <TooltipContent>
                    <p>Refresh data</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="outline" size="icon-sm">
                        <SettingsIcon className="size-4" />
                      </Button>
                    }
                  />
                  <TooltipContent>
                    <p>Configure analytics settings</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="border-border rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <LineChartIcon className="text-primary size-5" />
                  <p className="text-muted-foreground text-sm">
                    Requests Today
                  </p>
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <button className="text-muted-foreground hover:text-foreground inline-flex items-center transition-colors">
                          <InfoIcon className="size-3.5" />
                        </button>
                      }
                    />
                    <TooltipContent side="top">
                      <p className="max-w-xs">
                        Total API requests made today. Resets at midnight UTC.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="mt-2 text-2xl font-semibold">1,234</p>
              </div>
              <div className="border-border rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <TrendingUpIcon className="text-primary size-5" />
                  <p className="text-muted-foreground text-sm">Success Rate</p>
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <button className="text-muted-foreground hover:text-foreground inline-flex items-center transition-colors">
                          <InfoIcon className="size-3.5" />
                        </button>
                      }
                    />
                    <TooltipContent side="top">
                      <p className="max-w-xs">
                        Percentage of successful API requests (HTTP 2xx) in the
                        last 24 hours.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="mt-2 text-2xl font-semibold">99.8%</p>
              </div>
              <div className="border-border rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <UsersIcon className="text-primary size-5" />
                  <p className="text-muted-foreground text-sm">Active Users</p>
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <button className="text-muted-foreground hover:text-foreground inline-flex items-center transition-colors">
                          <InfoIcon className="size-3.5" />
                        </button>
                      }
                    />
                    <TooltipContent side="top">
                      <p className="max-w-xs">
                        Unique FIDs that interacted with your app in the last 7
                        days.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="mt-2 text-2xl font-semibold">567</p>
              </div>
            </div>
          </div>
        </section>

        {/* API Key Management with Tooltips */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">API Keys</h3>
            <p className="text-muted-foreground text-sm">
              Icon tooltips for quick actions
            </p>
          </div>
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
              <div className="flex gap-1">
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="ghost" size="icon-sm">
                        <CopyIcon className="size-4" />
                      </Button>
                    }
                  />
                  <TooltipContent>
                    <p>Copy API key</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="ghost" size="icon-sm">
                        <RefreshCwIcon className="size-4" />
                      </Button>
                    }
                  />
                  <TooltipContent>
                    <p>Regenerate key</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="ghost" size="icon-sm">
                        <TrashIcon className="size-4" />
                      </Button>
                    }
                  />
                  <TooltipContent>
                    <p>Revoke key</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  },
};

/**
 * Complete design system reference showing all placement options and use cases.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Placement Options */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Placement Options</h3>
          <p className="text-muted-foreground text-sm">
            Tooltips can be positioned on any side of the trigger element.
          </p>
        </div>
        <div className="flex min-h-[200px] items-center justify-center gap-4">
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline">Top</Button>} />
            <TooltipContent side="top">
              <p>Tooltip on top</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline">Right</Button>} />
            <TooltipContent side="right">
              <p>Tooltip on right</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={<Button variant="outline">Bottom</Button>}
            />
            <TooltipContent side="bottom">
              <p>Tooltip on bottom</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline">Left</Button>} />
            <TooltipContent side="left">
              <p>Tooltip on left</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      {/* Icon Buttons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Icon Buttons</h3>
          <p className="text-muted-foreground text-sm">
            Essential for providing labels to icon-only buttons.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon">
                  <SettingsIcon />
                </Button>
              }
            />
            <TooltipContent>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon">
                  <CopyIcon />
                </Button>
              }
            />
            <TooltipContent>
              <p>Copy to clipboard</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon">
                  <RefreshCwIcon />
                </Button>
              }
            />
            <TooltipContent>
              <p>Refresh data</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="destructive" size="icon">
                  <TrashIcon />
                </Button>
              }
            />
            <TooltipContent>
              <p>Delete item</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      {/* Different Trigger Types */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Different Trigger Types</h3>
          <p className="text-muted-foreground text-sm">
            Tooltips work with any focusable element.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Tooltip>
            <TooltipTrigger render={<Button>Button Trigger</Button>} />
            <TooltipContent>
              <p>Works with buttons</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <button className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors">
                  <HelpCircleIcon className="size-4" />
                  <span className="text-sm">Help Icon</span>
                </button>
              }
            />
            <TooltipContent>
              <p>Works with custom elements</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <span className="text-primary cursor-help border-b border-dotted">
                Inline Text
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Works with inline elements</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      {/* Content Variations */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Content Variations</h3>
          <p className="text-muted-foreground text-sm">
            Tooltips can contain simple text or more detailed explanations.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline">Short</Button>} />
            <TooltipContent>
              <p>Brief label</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={<Button variant="outline">Keyboard</Button>}
            />
            <TooltipContent>
              <div className="flex items-center gap-2">
                <span>Save</span>
                <kbd className="bg-background text-foreground rounded border px-1.5 py-0.5 font-mono text-xs">
                  ⌘S
                </kbd>
              </div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={<Button variant="outline">Detailed</Button>}
            />
            <TooltipContent>
              <p className="max-w-xs">
                This tooltip contains more detailed information that wraps
                across multiple lines to provide comprehensive context.
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      {/* Alignment Options */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Alignment Options</h3>
          <p className="text-muted-foreground text-sm">
            Control tooltip alignment relative to the trigger.
          </p>
        </div>
        <div className="flex min-h-[120px] items-center gap-4">
          <Tooltip>
            <TooltipTrigger
              render={<Button variant="outline">Start Aligned</Button>}
            />
            <TooltipContent side="bottom" align="start">
              <p>Aligned to start</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={<Button variant="outline">Center Aligned</Button>}
            />
            <TooltipContent side="bottom" align="center">
              <p>Aligned to center (default)</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={<Button variant="outline">End Aligned</Button>}
            />
            <TooltipContent side="bottom" align="end">
              <p>Aligned to end</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">States</h3>
          <p className="text-muted-foreground text-sm">
            Tooltips work with disabled and active states.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip>
            <TooltipTrigger render={<Button>Normal</Button>} />
            <TooltipContent>
              <p>Normal state tooltip</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button disabled>Disabled</Button>} />
            <TooltipContent>
              <p>Tooltips still work on disabled elements</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip defaultOpen>
            <TooltipTrigger
              render={<Button variant="outline">Always Open</Button>}
            />
            <TooltipContent>
              <p>This tooltip is always visible</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing tooltip props.
 */
export const Interactive: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};
