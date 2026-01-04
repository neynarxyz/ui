import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  CalendarIcon,
  GridIcon,
  ItalicIcon,
  ListIcon,
  UnderlineIcon,
} from "lucide-react";
import { useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "../toggle-group";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components/Core Inputs/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
  args: {
    onValueChange: fn(),
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
      description: "Visual style variant inherited by all items",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      description: "Size variant inherited by all items",
    },
    spacing: {
      control: "number",
      description: "Gap between items in pixels (0 = joined buttons)",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Layout direction of the toggle group",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

/**
 * Analytics Dashboard - Time range selector for viewing metrics across different periods.
 * Demonstrates realistic usage in the Neynar Dashboard with single selection mode.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function AnalyticsDashboard() {
      const [timeRange, setTimeRange] = useState(["7d"]);
      const [view, setView] = useState(["grid"]);

      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Header with Time Range Selector */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Cast Analytics</h2>
                <p className="text-muted-foreground text-sm">
                  Track engagement metrics across your Farcaster casts
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <ToggleGroup
                value={timeRange}
                onValueChange={(value) => {
                  if (value) setTimeRange(value);
                }}
                variant="outline"
                spacing={0}
              >
                <ToggleGroupItem value="1d">1D</ToggleGroupItem>
                <ToggleGroupItem value="7d">7D</ToggleGroupItem>
                <ToggleGroupItem value="30d">30D</ToggleGroupItem>
                <ToggleGroupItem value="90d">90D</ToggleGroupItem>
              </ToggleGroup>

              <ToggleGroup
                value={view}
                onValueChange={(value) => {
                  if (value) setView(value);
                }}
                variant="outline"
                spacing={0}
              >
                <ToggleGroupItem value="grid" aria-label="Grid view">
                  <GridIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="List view">
                  <ListIcon />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-card border-border rounded-lg border p-4">
              <p className="text-muted-foreground text-sm">Impressions</p>
              <p className="mt-1 text-2xl font-semibold">
                {timeRange.includes("1d") && "1,234"}
                {timeRange.includes("7d") && "8,567"}
                {timeRange.includes("30d") && "32,145"}
                {timeRange.includes("90d") && "98,234"}
              </p>
              <p className="text-muted-foreground mt-1 text-xs">
                {timeRange.includes("1d") && "Last 24 hours"}
                {timeRange.includes("7d") && "Last 7 days"}
                {timeRange.includes("30d") && "Last 30 days"}
                {timeRange.includes("90d") && "Last 90 days"}
              </p>
            </div>
            <div className="bg-card border-border rounded-lg border p-4">
              <p className="text-muted-foreground text-sm">Engagement</p>
              <p className="mt-1 text-2xl font-semibold">
                {timeRange.includes("1d") && "234"}
                {timeRange.includes("7d") && "1,567"}
                {timeRange.includes("30d") && "5,234"}
                {timeRange.includes("90d") && "15,890"}
              </p>
              <p className="text-muted-foreground mt-1 text-xs">
                Likes + Recasts + Replies
              </p>
            </div>
            <div className="bg-card border-border rounded-lg border p-4">
              <p className="text-muted-foreground text-sm">New Followers</p>
              <p className="mt-1 text-2xl font-semibold">
                {timeRange.includes("1d") && "+12"}
                {timeRange.includes("7d") && "+89"}
                {timeRange.includes("30d") && "+234"}
                {timeRange.includes("90d") && "+567"}
              </p>
              <p className="text-muted-foreground mt-1 text-xs">Net growth</p>
            </div>
          </div>

          {/* Text Formatting Toolbar */}
          <div className="bg-card border-border space-y-3 rounded-lg border p-4">
            <p className="text-sm font-medium">Compose Cast</p>
            <div className="flex items-center gap-3">
              <ToggleGroup variant="outline" spacing={0}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <BoldIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <ItalicIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <UnderlineIcon />
                </ToggleGroupItem>
              </ToggleGroup>

              <ToggleGroup variant="outline" spacing={0}>
                <ToggleGroupItem value="left" aria-label="Align left">
                  <AlignLeftIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <AlignCenterIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <AlignRightIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="justify" aria-label="Justify">
                  <AlignJustifyIcon />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      );
    }

    return <AnalyticsDashboard />;
  },
};

/**
 * Complete design system reference showing all toggle group variants,
 * sizes, orientations, and spacing options.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-5xl space-y-10">
      {/* Visual Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Visual Variants</h3>
          <p className="text-muted-foreground text-sm">
            Different styles for different contexts and emphasis levels.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Default</p>
            <ToggleGroup variant="default" spacing={0}>
              <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
              <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
              <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Outline</p>
            <ToggleGroup variant="outline" spacing={0}>
              <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
              <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
              <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Sizes</h3>
          <p className="text-muted-foreground text-sm">
            Multiple sizes for different density and emphasis needs.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Small</p>
            <ToggleGroup variant="outline" size="sm" spacing={0}>
              <ToggleGroupItem value="sm1">Small 1</ToggleGroupItem>
              <ToggleGroupItem value="sm2">Small 2</ToggleGroupItem>
              <ToggleGroupItem value="sm3">Small 3</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Default</p>
            <ToggleGroup variant="outline" size="default" spacing={0}>
              <ToggleGroupItem value="default1">Default 1</ToggleGroupItem>
              <ToggleGroupItem value="default2">Default 2</ToggleGroupItem>
              <ToggleGroupItem value="default3">Default 3</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Large</p>
            <ToggleGroup variant="outline" size="lg" spacing={0}>
              <ToggleGroupItem value="lg1">Large 1</ToggleGroupItem>
              <ToggleGroupItem value="lg2">Large 2</ToggleGroupItem>
              <ToggleGroupItem value="lg3">Large 3</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Spacing</h3>
          <p className="text-muted-foreground text-sm">
            Control the gap between items - 0 creates joined buttons.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Joined (spacing=0)</p>
            <ToggleGroup variant="outline" spacing={0}>
              <ToggleGroupItem value="joined1">Joined 1</ToggleGroupItem>
              <ToggleGroupItem value="joined2">Joined 2</ToggleGroupItem>
              <ToggleGroupItem value="joined3">Joined 3</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Gap (spacing=2)</p>
            <ToggleGroup variant="outline" spacing={2}>
              <ToggleGroupItem value="gap1">Gap 1</ToggleGroupItem>
              <ToggleGroupItem value="gap2">Gap 2</ToggleGroupItem>
              <ToggleGroupItem value="gap3">Gap 3</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Spaced (spacing=4)</p>
            <ToggleGroup variant="outline" spacing={4}>
              <ToggleGroupItem value="space1">Spaced 1</ToggleGroupItem>
              <ToggleGroupItem value="space2">Spaced 2</ToggleGroupItem>
              <ToggleGroupItem value="space3">Spaced 3</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </section>

      {/* Orientation */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Orientation</h3>
          <p className="text-muted-foreground text-sm">
            Horizontal or vertical layout for different use cases.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-6">
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Horizontal</p>
            <ToggleGroup variant="outline" spacing={0} orientation="horizontal">
              <ToggleGroupItem value="h1">Horizontal 1</ToggleGroupItem>
              <ToggleGroupItem value="h2">Horizontal 2</ToggleGroupItem>
              <ToggleGroupItem value="h3">Horizontal 3</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Vertical</p>
            <ToggleGroup variant="outline" spacing={0} orientation="vertical">
              <ToggleGroupItem value="v1">Vertical 1</ToggleGroupItem>
              <ToggleGroupItem value="v2">Vertical 2</ToggleGroupItem>
              <ToggleGroupItem value="v3">Vertical 3</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </section>

      {/* Selection Types */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Selection Types</h3>
          <p className="text-muted-foreground text-sm">
            Single selection or multiple items can be active at once.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">
              Single (type="single")
            </p>
            <ToggleGroup variant="outline" spacing={0}>
              <ToggleGroupItem value="single1">Option 1</ToggleGroupItem>
              <ToggleGroupItem value="single2">Option 2</ToggleGroupItem>
              <ToggleGroupItem value="single3">Option 3</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">
              Multiple (type="multiple")
            </p>
            <ToggleGroup variant="outline" spacing={0}>
              <ToggleGroupItem value="multi1">Option 1</ToggleGroupItem>
              <ToggleGroupItem value="multi2">Option 2</ToggleGroupItem>
              <ToggleGroupItem value="multi3">Option 3</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </section>

      {/* Icon-Only Toggles */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Icon-Only</h3>
          <p className="text-muted-foreground text-sm">
            Common pattern for formatting toolbars and view switchers.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Text Formatting</p>
            <ToggleGroup variant="outline" spacing={0}>
              <ToggleGroupItem value="bold" aria-label="Bold">
                <BoldIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <ItalicIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <UnderlineIcon />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Text Alignment</p>
            <ToggleGroup variant="outline" spacing={0}>
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeftIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenterIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRightIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="justify" aria-label="Justify">
                <AlignJustifyIcon />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">View Mode</p>
            <ToggleGroup variant="outline" spacing={0}>
              <ToggleGroupItem value="grid" aria-label="Grid view">
                <GridIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="list" aria-label="List view">
                <ListIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="calendar" aria-label="Calendar view">
                <CalendarIcon />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </section>

      {/* Variant × Size Matrix */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Variant × Size Matrix</h3>
          <p className="text-muted-foreground text-sm">
            Complete combination reference for design system.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-muted-foreground border-b text-left text-sm">
                <th className="pb-3 pr-4 font-medium">Variant</th>
                <th className="pb-3 pr-4 font-medium">Small</th>
                <th className="pb-3 pr-4 font-medium">Default</th>
                <th className="pb-3 pr-4 font-medium">Large</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {(["default", "outline"] as const).map((variant) => (
                <tr key={variant} className="border-b last:border-0">
                  <td className="py-3 pr-4 font-mono text-sm capitalize">
                    {variant}
                  </td>
                  <td className="py-3 pr-4">
                    <ToggleGroup variant={variant} size="sm" spacing={0}>
                      <ToggleGroupItem value="1">One</ToggleGroupItem>
                      <ToggleGroupItem value="2">Two</ToggleGroupItem>
                      <ToggleGroupItem value="3">Three</ToggleGroupItem>
                    </ToggleGroup>
                  </td>
                  <td className="py-3 pr-4">
                    <ToggleGroup variant={variant} size="default" spacing={0}>
                      <ToggleGroupItem value="1">One</ToggleGroupItem>
                      <ToggleGroupItem value="2">Two</ToggleGroupItem>
                      <ToggleGroupItem value="3">Three</ToggleGroupItem>
                    </ToggleGroup>
                  </td>
                  <td className="py-3 pr-4">
                    <ToggleGroup variant={variant} size="lg" spacing={0}>
                      <ToggleGroupItem value="1">One</ToggleGroupItem>
                      <ToggleGroupItem value="2">Two</ToggleGroupItem>
                      <ToggleGroupItem value="3">Three</ToggleGroupItem>
                    </ToggleGroup>
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
 * Interactive playground for testing toggle group props.
 */
export const Interactive: Story = {
  args: {
    variant: "outline",
    size: "default",
    spacing: 0,
    orientation: "horizontal",
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
      <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
      <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
    </ToggleGroup>
  ),
};
