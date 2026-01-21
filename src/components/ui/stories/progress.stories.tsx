import { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ActivityIcon,
  AlertTriangleIcon,
  CheckCircle2Icon,
  TrendingUpIcon,
  ZapIcon,
} from "lucide-react";

import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "../progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Feedback & Status/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Progress value (0-100)",
    },
    smooth: {
      control: "boolean",
      description: "Enable smooth CSS transitions on value changes",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

/**
 * API Usage Dashboard - A realistic scenario showing progress bars in context
 * of API usage tracking, rate limits, and quota management in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function APIUsageDashboard() {
      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">API Usage & Rate Limits</h2>
            <p className="text-muted-foreground text-sm">
              Monitor your API consumption across different endpoints and time
              windows.
            </p>
          </div>

          {/* Usage Cards */}
          <div className="space-y-4">
            {/* Monthly API Calls - Healthy */}
            <div className="border-border bg-card rounded-lg border p-5">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-md p-2">
                    <ActivityIcon className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium">Monthly API Calls</p>
                    <p className="text-muted-foreground text-sm">
                      Standard Plan: 1M requests/month
                    </p>
                  </div>
                </div>
                <span className="text-primary rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                  Healthy
                </span>
              </div>
              <Progress value={45}>
                <ProgressLabel>API Requests</ProgressLabel>
                <ProgressValue />
                <ProgressTrack>
                  <ProgressIndicator className="bg-green-500 dark:bg-green-400" />
                </ProgressTrack>
              </Progress>
              <p className="text-muted-foreground mt-2 text-sm">
                450,000 of 1,000,000 requests used
              </p>
            </div>

            {/* Rate Limit - Warning */}
            <div className="border-border bg-card rounded-lg border p-5">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-yellow-500/10 p-2 text-yellow-600 dark:text-yellow-400">
                    <AlertTriangleIcon className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium">Rate Limit (Hourly)</p>
                    <p className="text-muted-foreground text-sm">
                      10,000 requests/hour window
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-yellow-500/10 px-2.5 py-1 text-xs font-medium text-yellow-600 dark:text-yellow-400">
                  Warning
                </span>
              </div>
              <Progress value={78}>
                <ProgressLabel>Hourly Requests</ProgressLabel>
                <ProgressValue />
                <ProgressTrack>
                  <ProgressIndicator className="bg-yellow-500 dark:bg-yellow-400" />
                </ProgressTrack>
              </Progress>
              <p className="text-muted-foreground mt-2 text-sm">
                7,800 of 10,000 requests used - 22% remaining
              </p>
            </div>

            {/* Storage Quota - Critical */}
            <div className="border-border bg-card rounded-lg border p-5">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-red-500/10 p-2 text-red-600 dark:text-red-400">
                    <ZapIcon className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium">Cast Storage</p>
                    <p className="text-muted-foreground text-sm">
                      Cached cast data storage limit
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-600 dark:text-red-400">
                  Critical
                </span>
              </div>
              <Progress value={94}>
                <ProgressLabel>Storage Used</ProgressLabel>
                <ProgressValue />
                <ProgressTrack>
                  <ProgressIndicator className="bg-red-500 dark:bg-red-400" />
                </ProgressTrack>
              </Progress>
              <p className="text-muted-foreground mt-2 text-sm">
                9.4 GB of 10 GB used - Consider upgrading
              </p>
            </div>

            {/* Webhook Deliveries - Low Usage */}
            <div className="border-border bg-card rounded-lg border p-5">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-md p-2">
                    <TrendingUpIcon className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium">Webhook Deliveries</p>
                    <p className="text-muted-foreground text-sm">
                      100,000 webhooks/month included
                    </p>
                  </div>
                </div>
                <span className="text-primary rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                  Active
                </span>
              </div>
              <Progress value={12}>
                <ProgressLabel>Webhooks Sent</ProgressLabel>
                <ProgressValue />
                <ProgressTrack>
                  <ProgressIndicator className="bg-blue-500 dark:bg-blue-400" />
                </ProgressTrack>
              </Progress>
              <p className="text-muted-foreground mt-2 text-sm">
                12,000 of 100,000 webhooks delivered
              </p>
            </div>

            {/* Completed Upload */}
            <div className="border-border bg-card rounded-lg border p-5">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-green-500/10 p-2 text-green-600 dark:text-green-400">
                    <CheckCircle2Icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium">Database Sync</p>
                    <p className="text-muted-foreground text-sm">
                      Last sync completed successfully
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                  Complete
                </span>
              </div>
              <Progress value={100}>
                <ProgressLabel>Sync Progress</ProgressLabel>
                <ProgressValue />
                <ProgressTrack>
                  <ProgressIndicator className="bg-green-500 dark:bg-green-400" />
                </ProgressTrack>
              </Progress>
              <p className="text-muted-foreground mt-2 text-sm">
                All 125,450 records synced - Completed 2 minutes ago
              </p>
            </div>
          </div>
        </div>
      );
    }

    return <APIUsageDashboard />;
  },
};

/**
 * Complete design system reference showing all progress states, colors, and variations.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-3xl space-y-10">
      {/* Progress States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Progress States</h3>
          <p className="text-muted-foreground text-sm">
            Different progress values showing various completion states.
          </p>
        </div>
        <div className="space-y-4">
          <Progress value={0}>
            <ProgressLabel>Not Started</ProgressLabel>
            <ProgressValue />
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
          <Progress value={25}>
            <ProgressLabel>Just Started</ProgressLabel>
            <ProgressValue />
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
          <Progress value={50}>
            <ProgressLabel>Halfway</ProgressLabel>
            <ProgressValue />
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
          <Progress value={75}>
            <ProgressLabel>Almost Done</ProgressLabel>
            <ProgressValue />
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
          <Progress value={100}>
            <ProgressLabel>Complete</ProgressLabel>
            <ProgressValue />
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
        </div>
      </section>

      {/* Color Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Color Variants</h3>
          <p className="text-muted-foreground text-sm">
            Different colors for semantic meaning and status indication.
          </p>
        </div>
        <div className="space-y-4">
          <Progress value={60}>
            <ProgressLabel>Default Primary</ProgressLabel>
            <ProgressValue />
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
          <Progress value={45}>
            <ProgressLabel>Success (Healthy)</ProgressLabel>
            <ProgressValue />
            <ProgressTrack>
              <ProgressIndicator className="bg-green-500 dark:bg-green-400" />
            </ProgressTrack>
          </Progress>
          <Progress value={70}>
            <ProgressLabel>Info</ProgressLabel>
            <ProgressValue />
            <ProgressTrack>
              <ProgressIndicator className="bg-blue-500 dark:bg-blue-400" />
            </ProgressTrack>
          </Progress>
          <Progress value={80}>
            <ProgressLabel>Warning (Approaching Limit)</ProgressLabel>
            <ProgressValue />
            <ProgressTrack>
              <ProgressIndicator className="bg-yellow-500 dark:bg-yellow-400" />
            </ProgressTrack>
          </Progress>
          <Progress value={92}>
            <ProgressLabel>Danger (Critical)</ProgressLabel>
            <ProgressValue />
            <ProgressTrack>
              <ProgressIndicator className="bg-red-500 dark:bg-red-400" />
            </ProgressTrack>
          </Progress>
        </div>
      </section>

      {/* Size Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Size Variants</h3>
          <p className="text-muted-foreground text-sm">
            Different heights for various contexts and visual hierarchy.
          </p>
        </div>
        <div className="space-y-4">
          <Progress value={65}>
            <ProgressLabel>Small Progress Bar</ProgressLabel>
            <ProgressValue />
            <ProgressTrack className="h-1">
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
          <Progress value={65}>
            <ProgressLabel>Default Progress Bar</ProgressLabel>
            <ProgressValue />
            <ProgressTrack className="h-1.5">
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
          <Progress value={65}>
            <ProgressLabel>Medium Progress Bar</ProgressLabel>
            <ProgressValue />
            <ProgressTrack className="h-2">
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
          <Progress value={65}>
            <ProgressLabel>Large Progress Bar</ProgressLabel>
            <ProgressValue />
            <ProgressTrack className="h-3">
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
        </div>
      </section>

      {/* Label Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Label Variants</h3>
          <p className="text-muted-foreground text-sm">
            Different label and value display options.
          </p>
        </div>
        <div className="space-y-4">
          <Progress value={55}>
            <ProgressLabel>With Label and Value</ProgressLabel>
            <ProgressValue />
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
          <Progress value={55}>
            <ProgressLabel>Label Only</ProgressLabel>
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
          <Progress value={55}>
            <ProgressValue />
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
          <Progress value={55}>
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
        </div>
      </section>

      {/* Indeterminate State */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Indeterminate State</h3>
          <p className="text-muted-foreground text-sm">
            Progress bar without specific value for unknown duration tasks.
          </p>
        </div>
        <div className="space-y-4">
          <Progress value={null}>
            <ProgressLabel>Processing...</ProgressLabel>
            <ProgressTrack>
              <ProgressIndicator className="w-1/3 animate-pulse" />
            </ProgressTrack>
          </Progress>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing progress props.
 */
export const Interactive: Story = {
  args: {
    value: 65,
  },
  render: (args) => (
    <div className="w-80">
      <Progress {...args}>
        <ProgressLabel>Loading</ProgressLabel>
        <ProgressValue />
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
    </div>
  ),
};

/**
 * Demonstrates the smooth prop for animated progress value changes.
 * Pass `true` for default 500ms, or a number for custom duration.
 */
export const SmoothAnimation: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function AnimatedProgress() {
      const [progress, setProgress] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) return 0;
            return prev + 10;
          });
        }, 1000);
        return () => clearInterval(interval);
      }, []);

      return (
        <div className="w-full max-w-md space-y-8">
          <div>
            <h3 className="text-lg font-semibold">Smooth Animation</h3>
            <p className="text-muted-foreground text-sm">
              Compare different transition durations.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium">
                <code className="bg-muted rounded px-1">smooth={"{200}"}</code>{" "}
                (fast)
              </p>
              <Progress value={progress} smooth={200}>
                <ProgressTrack className="h-2">
                  <ProgressIndicator />
                </ProgressTrack>
              </Progress>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">
                <code className="bg-muted rounded px-1">smooth</code> (default
                500ms)
              </p>
              <Progress value={progress} smooth>
                <ProgressTrack className="h-2">
                  <ProgressIndicator />
                </ProgressTrack>
              </Progress>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">
                <code className="bg-muted rounded px-1">smooth={"{1000}"}</code>{" "}
                (slow)
              </p>
              <Progress value={progress} smooth={1000}>
                <ProgressTrack className="h-2">
                  <ProgressIndicator />
                </ProgressTrack>
              </Progress>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">No smooth (instant)</p>
              <Progress value={progress}>
                <ProgressTrack className="h-2">
                  <ProgressIndicator />
                </ProgressTrack>
              </Progress>
            </div>
          </div>
        </div>
      );
    }

    return <AnimatedProgress />;
  },
};
