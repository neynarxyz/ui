import type { Meta, StoryObj } from "@storybook/react";
import {
  CheckIcon,
  CrownIcon,
  FlameIcon,
  RocketIcon,
  SparklesIcon,
  StarIcon,
  TrendingUpIcon,
  ZapIcon,
} from "lucide-react";

import { Badge } from "../badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Feedback & Status/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "destructive",
        "success",
        "warning",
        "info",
        "outline",
        "ghost",
        "link",
      ],
      description: "Visual style variant",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/**
 * API Plan Tiers - A realistic scenario showing badges for subscription tiers
 * and status indicators in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function PlanSelector() {
      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">Choose Your Plan</h2>
            <p className="text-muted-foreground text-sm">
              Select the plan that best fits your API usage needs.
            </p>
          </div>

          {/* Plan Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {/* Free Tier */}
            <div className="border-border bg-card rounded-lg border p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-medium">Free</h3>
                <Badge variant="secondary">Current</Badge>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                Perfect for getting started with the Farcaster API.
              </p>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-primary size-4" />
                  1,000 requests/day
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-primary size-4" />
                  Basic analytics
                </li>
              </ul>
            </div>

            {/* Pro Tier */}
            <div className="border-primary bg-card rounded-lg border-2 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-medium">Pro</h3>
                <Badge>
                  <SparklesIcon data-icon="inline-start" />
                  Popular
                </Badge>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                For growing applications and serious builders.
              </p>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-primary size-4" />
                  100,000 requests/day
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-primary size-4" />
                  Priority support
                </li>
              </ul>
            </div>

            {/* Enterprise Tier */}
            <div className="border-border bg-card rounded-lg border p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-medium">Enterprise</h3>
                <Badge variant="outline">
                  <CrownIcon data-icon="inline-start" />
                  Custom
                </Badge>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                Unlimited scale for large organizations.
              </p>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-primary size-4" />
                  Unlimited requests
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-primary size-4" />
                  Dedicated support
                </li>
              </ul>
            </div>
          </div>

          {/* Status Badges */}
          <div className="border-border rounded-lg border p-4">
            <h4 className="mb-3 font-medium">API Status</h4>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">Hub:</span>
                <Badge variant="secondary">
                  <span className="bg-green-500 mr-1 size-2 rounded-full" />
                  Operational
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">Webhooks:</span>
                <Badge variant="secondary">
                  <span className="bg-green-500 mr-1 size-2 rounded-full" />
                  Operational
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">
                  Rate Limit:
                </span>
                <Badge variant="destructive">
                  <TrendingUpIcon data-icon="inline-start" />
                  85% Used
                </Badge>
              </div>
            </div>
          </div>

          {/* Notification Badges */}
          <div className="border-border rounded-lg border p-4">
            <h4 className="mb-3 font-medium">Notifications</h4>
            <div className="flex flex-wrap gap-2">
              <Badge>3</Badge>
              <Badge variant="secondary">New</Badge>
              <Badge variant="destructive">Urgent</Badge>
              <Badge variant="outline">
                <FlameIcon data-icon="inline-start" />
                Trending
              </Badge>
            </div>
          </div>
        </div>
      );
    }

    return <PlanSelector />;
  },
};

/**
 * Complete design system reference showing all badge variants and use cases.
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
            Different styles for different purposes and emphasis levels.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="link">Link</Badge>
        </div>
        <div>
          <p className="text-muted-foreground text-sm mt-4 mb-3">
            Semantic variants for status and feedback.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </section>

      {/* With Icons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Icons</h3>
          <p className="text-muted-foreground text-sm">
            Icons can enhance badge meaning and scannability.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge>
            <StarIcon data-icon="inline-start" />
            Featured
          </Badge>
          <Badge variant="secondary">
            <RocketIcon data-icon="inline-start" />
            New
          </Badge>
          <Badge variant="outline">
            <ZapIcon data-icon="inline-start" />
            Fast
          </Badge>
          <Badge variant="destructive">
            <FlameIcon data-icon="inline-start" />
            Hot
          </Badge>
        </div>
      </section>

      {/* Status Indicators */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Status Indicators</h3>
          <p className="text-muted-foreground text-sm">
            Show operational status with colored dots.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="secondary">
            <span className="bg-green-500 mr-1 size-2 rounded-full" />
            Online
          </Badge>
          <Badge variant="secondary">
            <span className="bg-yellow-500 mr-1 size-2 rounded-full" />
            Degraded
          </Badge>
          <Badge variant="secondary">
            <span className="bg-red-500 mr-1 size-2 rounded-full" />
            Offline
          </Badge>
          <Badge variant="secondary">
            <span className="bg-muted-foreground mr-1 size-2 rounded-full" />
            Unknown
          </Badge>
        </div>
      </section>

      {/* Counter Badges */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Counter Badges</h3>
          <p className="text-muted-foreground text-sm">
            Numeric badges for counts and notifications.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge>1</Badge>
          <Badge>5</Badge>
          <Badge>12</Badge>
          <Badge>99+</Badge>
          <Badge variant="destructive">3</Badge>
          <Badge variant="secondary">New</Badge>
        </div>
      </section>

      {/* Plan/Tier Badges */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Plan & Tier Badges</h3>
          <p className="text-muted-foreground text-sm">
            Subscription tiers and membership levels.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="secondary">Free</Badge>
          <Badge>Pro</Badge>
          <Badge variant="outline">
            <CrownIcon data-icon="inline-start" />
            Enterprise
          </Badge>
          <Badge>
            <SparklesIcon data-icon="inline-start" />
            Popular
          </Badge>
        </div>
      </section>

      {/* All Variants Reference */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Variant Reference</h3>
          <p className="text-muted-foreground text-sm">
            Complete list of all badge variants.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-muted-foreground border-b text-left text-sm">
                <th className="pb-3 pr-4 font-medium">Variant</th>
                <th className="pb-3 pr-4 font-medium">Plain</th>
                <th className="pb-3 pr-4 font-medium">With Icon</th>
                <th className="pb-3 pr-4 font-medium">Use Case</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">default</td>
                <td className="py-3 pr-4">
                  <Badge variant="default">Badge</Badge>
                </td>
                <td className="py-3 pr-4">
                  <Badge variant="default">
                    <StarIcon data-icon="inline-start" />
                    Featured
                  </Badge>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Primary emphasis, key actions
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">secondary</td>
                <td className="py-3 pr-4">
                  <Badge variant="secondary">Badge</Badge>
                </td>
                <td className="py-3 pr-4">
                  <Badge variant="secondary">
                    <CheckIcon data-icon="inline-start" />
                    Active
                  </Badge>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Neutral status, secondary info
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">destructive</td>
                <td className="py-3 pr-4">
                  <Badge variant="destructive">Badge</Badge>
                </td>
                <td className="py-3 pr-4">
                  <Badge variant="destructive">
                    <FlameIcon data-icon="inline-start" />
                    Critical
                  </Badge>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Errors, destructive actions
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">success</td>
                <td className="py-3 pr-4">
                  <Badge variant="success">Badge</Badge>
                </td>
                <td className="py-3 pr-4">
                  <Badge variant="success">
                    <CheckIcon data-icon="inline-start" />
                    Complete
                  </Badge>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Success states, confirmations
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">warning</td>
                <td className="py-3 pr-4">
                  <Badge variant="warning">Badge</Badge>
                </td>
                <td className="py-3 pr-4">
                  <Badge variant="warning">
                    <FlameIcon data-icon="inline-start" />
                    Caution
                  </Badge>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Warnings, attention needed
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">info</td>
                <td className="py-3 pr-4">
                  <Badge variant="info">Badge</Badge>
                </td>
                <td className="py-3 pr-4">
                  <Badge variant="info">
                    <SparklesIcon data-icon="inline-start" />
                    Tip
                  </Badge>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Informational, tips, hints
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">outline</td>
                <td className="py-3 pr-4">
                  <Badge variant="outline">Badge</Badge>
                </td>
                <td className="py-3 pr-4">
                  <Badge variant="outline">
                    <RocketIcon data-icon="inline-start" />
                    Beta
                  </Badge>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Subtle, low emphasis
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">ghost</td>
                <td className="py-3 pr-4">
                  <Badge variant="ghost">Badge</Badge>
                </td>
                <td className="py-3 pr-4">
                  <Badge variant="ghost">
                    <ZapIcon data-icon="inline-start" />
                    Quick
                  </Badge>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Minimal, hover reveals
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-sm">link</td>
                <td className="py-3 pr-4">
                  <Badge variant="link">Badge</Badge>
                </td>
                <td className="py-3 pr-4">
                  <Badge variant="link">Learn more</Badge>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Clickable, link-style
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
 * Interactive playground for testing badge props.
 */
export const Interactive: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
};
