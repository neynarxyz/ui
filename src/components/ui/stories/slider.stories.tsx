import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { AlertCircleIcon, CheckCircleIcon } from "lucide-react";
import { useState } from "react";

import { Slider } from "../slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Core Inputs/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  args: {
    onValueChange: fn(),
  },
  argTypes: {
    min: {
      control: "number",
      description: "Minimum value",
    },
    max: {
      control: "number",
      description: "Maximum value",
    },
    step: {
      control: "number",
      description: "Step increment value",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Slider orientation",
    },
    defaultValue: {
      control: "object",
      description: "Default value (uncontrolled)",
    },
    value: {
      control: "object",
      description: "Current value (controlled)",
    },
    onValueChange: { table: { disable: true } },
    onValueCommit: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

/**
 * Rate Limit Configuration - A realistic scenario showing sliders in the
 * context of configuring API rate limits in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function RateLimitConfig() {
      const [requestsPerMinute, setRequestsPerMinute] = useState([60]);
      const [burstLimit, setBurstLimit] = useState([100]);
      const [throttleRange, setThrottleRange] = useState([30, 80]);
      const [quotaPercent, setQuotaPercent] = useState([75]);

      const isWithinRecommended =
        (throttleRange[0] ?? 0) >= 20 && (throttleRange[1] ?? 100) <= 90;

      return (
        <div className="w-full max-w-2xl space-y-8">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">Rate Limit Configuration</h2>
            <p className="text-muted-foreground text-sm">
              Configure API rate limits and throttling thresholds for your
              production environment.
            </p>
          </div>

          {/* Single Value Sliders */}
          <div className="space-y-6">
            {/* Requests Per Minute */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  Requests Per Minute
                </label>
                <span className="bg-muted rounded-md px-2 py-1 font-mono text-sm">
                  {requestsPerMinute[0]}
                </span>
              </div>
              <Slider
                value={requestsPerMinute}
                onValueChange={(v) =>
                  setRequestsPerMinute(Array.isArray(v) ? [...v] : [v])
                }
                min={10}
                max={200}
                step={10}
              />
              <p className="text-muted-foreground text-xs">
                Maximum requests allowed per minute per API key
              </p>
            </div>

            {/* Burst Limit */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Burst Limit</label>
                <span className="bg-muted rounded-md px-2 py-1 font-mono text-sm">
                  {burstLimit[0]}
                </span>
              </div>
              <Slider
                value={burstLimit}
                onValueChange={(v) =>
                  setBurstLimit(Array.isArray(v) ? [...v] : [v])
                }
                min={50}
                max={500}
                step={10}
              />
              <p className="text-muted-foreground text-xs">
                Maximum burst requests allowed in a short time window
              </p>
            </div>

            {/* Quota Alert Threshold */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  Quota Alert Threshold
                </label>
                <span className="bg-muted rounded-md px-2 py-1 font-mono text-sm">
                  {quotaPercent[0]}%
                </span>
              </div>
              <Slider
                value={quotaPercent}
                onValueChange={(v) =>
                  setQuotaPercent(Array.isArray(v) ? [...v] : [v])
                }
                min={0}
                max={100}
                step={5}
              />
              <p className="text-muted-foreground text-xs">
                Trigger alert when quota usage exceeds this percentage
              </p>
            </div>
          </div>

          {/* Range Slider */}
          <div className="border-border rounded-lg border p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  Auto-Throttle Range
                </label>
                <div className="flex items-center gap-2">
                  {isWithinRecommended ? (
                    <CheckCircleIcon className="text-green-600 size-4" />
                  ) : (
                    <AlertCircleIcon className="text-amber-600 size-4" />
                  )}
                  <span className="bg-muted rounded-md px-2 py-1 font-mono text-sm">
                    {throttleRange[0]}% - {throttleRange[1]}%
                  </span>
                </div>
              </div>
              <Slider
                value={throttleRange}
                onValueChange={(v) =>
                  setThrottleRange(Array.isArray(v) ? [...v] : [v])
                }
                min={0}
                max={100}
                step={5}
              />
              <div className="flex items-start gap-2">
                {isWithinRecommended ? (
                  <p className="text-green-600 text-xs">
                    Within recommended range for optimal performance
                  </p>
                ) : (
                  <p className="text-amber-600 text-xs">
                    Consider keeping throttle range between 20% and 90%
                  </p>
                )}
              </div>
              <p className="text-muted-foreground text-xs">
                Automatically throttle requests when usage is within this range
                to prevent hitting hard limits
              </p>
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="mb-3 text-sm font-medium">Current Configuration</h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Rate Limit:</dt>
                <dd className="font-mono">{requestsPerMinute[0]} req/min</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Burst Capacity:</dt>
                <dd className="font-mono">{burstLimit[0]} requests</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Throttle Window:</dt>
                <dd className="font-mono">
                  {throttleRange[0]}% - {throttleRange[1]}%
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Alert Threshold:</dt>
                <dd className="font-mono">{quotaPercent[0]}%</dd>
              </div>
            </dl>
          </div>
        </div>
      );
    }

    return <RateLimitConfig />;
  },
};

/**
 * Complete design system reference showing all slider variants, orientations,
 * and states.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Single Value */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Single Value</h3>
          <p className="text-muted-foreground text-sm">
            Basic slider with a single thumb for selecting one value.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm">Default (0-100)</p>
            <Slider defaultValue={[50]} min={0} max={100} />
          </div>
          <div className="space-y-2">
            <p className="text-sm">With Step (increments of 10)</p>
            <Slider defaultValue={[50]} min={0} max={100} step={10} />
          </div>
          <div className="space-y-2">
            <p className="text-sm">Custom Range (20-80)</p>
            <Slider defaultValue={[50]} min={20} max={80} />
          </div>
        </div>
      </section>

      {/* Range Selection */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Range Selection</h3>
          <p className="text-muted-foreground text-sm">
            Slider with two thumbs for selecting a range of values.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm">Price Range</p>
            <Slider defaultValue={[25, 75]} min={0} max={100} />
          </div>
          <div className="space-y-2">
            <p className="text-sm">Time Window (with step)</p>
            <Slider defaultValue={[2, 8]} min={0} max={24} step={1} />
          </div>
          <div className="space-y-2">
            <p className="text-sm">Temperature Range</p>
            <Slider defaultValue={[18, 24]} min={10} max={30} step={0.5} />
          </div>
        </div>
      </section>

      {/* Multiple Thumbs */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Multiple Thumbs</h3>
          <p className="text-muted-foreground text-sm">
            Slider with three or more thumbs for advanced configurations.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm">Three Thresholds</p>
            <Slider defaultValue={[25, 50, 75]} min={0} max={100} />
          </div>
          <div className="space-y-2">
            <p className="text-sm">Four Alert Levels</p>
            <Slider defaultValue={[20, 40, 60, 80]} min={0} max={100} />
          </div>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">States</h3>
          <p className="text-muted-foreground text-sm">
            Different interaction states for various use cases.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm">Default</p>
            <Slider defaultValue={[50]} min={0} max={100} />
          </div>
          <div className="space-y-2">
            <p className="text-sm">Disabled</p>
            <Slider defaultValue={[50]} min={0} max={100} disabled />
          </div>
          <div className="space-y-2">
            <p className="text-sm">Disabled Range</p>
            <Slider defaultValue={[25, 75]} min={0} max={100} disabled />
          </div>
        </div>
      </section>

      {/* Controlled Example */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Controlled State</h3>
          <p className="text-muted-foreground text-sm">
            Slider with external state management and value display.
          </p>
        </div>
        <ControlledSliderExample />
      </section>

      {/* Vertical Orientation */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Vertical Orientation</h3>
          <p className="text-muted-foreground text-sm">
            Sliders can be oriented vertically for specific use cases like
            volume controls or vertical metrics.
          </p>
        </div>
        <div className="flex items-start gap-8">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm">Single Value</p>
            <Slider
              defaultValue={[50]}
              min={0}
              max={100}
              orientation="vertical"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm">Range</p>
            <Slider
              defaultValue={[25, 75]}
              min={0}
              max={100}
              orientation="vertical"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm">Disabled</p>
            <Slider
              defaultValue={[50]}
              min={0}
              max={100}
              orientation="vertical"
              disabled
            />
          </div>
        </div>
      </section>

      {/* Step Sizes Comparison */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Step Sizes</h3>
          <p className="text-muted-foreground text-sm">
            Different step increments for various precision needs.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm">Fine (step: 1)</p>
            <Slider defaultValue={[50]} min={0} max={100} step={1} />
          </div>
          <div className="space-y-2">
            <p className="text-sm">Coarse (step: 25)</p>
            <Slider defaultValue={[50]} min={0} max={100} step={25} />
          </div>
          <div className="space-y-2">
            <p className="text-sm">Decimal (step: 0.1)</p>
            <Slider defaultValue={[5.5]} min={0} max={10} step={0.1} />
          </div>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing slider props.
 */
export const Interactive: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
  },
  render: (args) => (
    <div className="w-80">
      <Slider {...args} />
    </div>
  ),
};

function ControlledSliderExample() {
  const [value, setValue] = useState([33]);
  const [rangeValue, setRangeValue] = useState([20, 80]);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm">Volume Control</p>
          <span className="bg-muted rounded-md px-2 py-1 font-mono text-sm">
            {value[0]}%
          </span>
        </div>
        <Slider
          value={value}
          onValueChange={(v) => setValue(Array.isArray(v) ? [...v] : [v])}
          min={0}
          max={100}
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm">Active Hours</p>
          <span className="bg-muted rounded-md px-2 py-1 font-mono text-sm">
            {rangeValue[0]}:00 - {rangeValue[1]}:00
          </span>
        </div>
        <Slider
          value={rangeValue}
          onValueChange={(v) => setRangeValue(Array.isArray(v) ? [...v] : [v])}
          min={0}
          max={24}
          step={1}
        />
      </div>
    </div>
  );
}
