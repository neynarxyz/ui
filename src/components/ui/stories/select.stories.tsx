import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import {
  CloudIcon,
  GlobeIcon,
  ServerIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../select";

const meta: Meta<typeof Select> = {
  title: "Components/Core Inputs/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  args: {
    onValueChange: fn(),
  },
  argTypes: {
    defaultValue: {
      control: "text",
      description: "The default selected value",
    },
    disabled: {
      control: "boolean",
      description: "Whether the select is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * API Configuration - A realistic scenario showing selects for choosing
 * API version, region, and environment in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function APIConfiguration() {
      const [apiVersion, setApiVersion] = useState("v2");
      const [region, setRegion] = useState("us-east-1");
      const [environment, setEnvironment] = useState("production");

      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">API Configuration</h2>
            <p className="text-muted-foreground text-sm">
              Configure your Neynar API settings for optimal performance.
            </p>
          </div>

          {/* Configuration Form */}
          <div className="border-border bg-card space-y-6 rounded-lg border p-6">
            {/* API Version */}
            <div className="space-y-2">
              <label htmlFor="api-version" className="text-sm font-medium">
                API Version
              </label>
              <Select
                value={apiVersion}
                onValueChange={(v) => v && setApiVersion(v)}
              >
                <SelectTrigger id="api-version" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Stable Versions</SelectLabel>
                    <SelectItem value="v2">
                      <CloudIcon data-icon="inline-start" />
                      v2 - Latest (Recommended)
                    </SelectItem>
                    <SelectItem value="v1">
                      <ServerIcon data-icon="inline-start" />
                      v1 - Stable
                    </SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Beta Versions</SelectLabel>
                    <SelectItem value="v3-beta">
                      v3 - Beta (Experimental)
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <p className="text-muted-foreground text-xs">
                Choose the API version for your application.
              </p>
            </div>

            {/* Region */}
            <div className="space-y-2">
              <label htmlFor="region" className="text-sm font-medium">
                Region
              </label>
              <Select value={region} onValueChange={(v) => v && setRegion(v)}>
                <SelectTrigger id="region" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="us-east-1">
                      <GlobeIcon data-icon="inline-start" />
                      US East (N. Virginia)
                    </SelectItem>
                    <SelectItem value="us-west-2">
                      <GlobeIcon data-icon="inline-start" />
                      US West (Oregon)
                    </SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Europe</SelectLabel>
                    <SelectItem value="eu-west-1">
                      <GlobeIcon data-icon="inline-start" />
                      EU (Ireland)
                    </SelectItem>
                    <SelectItem value="eu-central-1">
                      <GlobeIcon data-icon="inline-start" />
                      EU (Frankfurt)
                    </SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Asia Pacific</SelectLabel>
                    <SelectItem value="ap-southeast-1">
                      <GlobeIcon data-icon="inline-start" />
                      Asia Pacific (Singapore)
                    </SelectItem>
                    <SelectItem value="ap-northeast-1">
                      <GlobeIcon data-icon="inline-start" />
                      Asia Pacific (Tokyo)
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <p className="text-muted-foreground text-xs">
                Select the region closest to your users for lowest latency.
              </p>
            </div>

            {/* Environment */}
            <div className="space-y-2">
              <label htmlFor="environment" className="text-sm font-medium">
                Environment
              </label>
              <Select
                value={environment}
                onValueChange={(v) => v && setEnvironment(v)}
              >
                <SelectTrigger id="environment" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="production">Production</SelectItem>
                  <SelectItem value="staging">Staging</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-muted-foreground text-xs">
                Choose the environment for your API key.
              </p>
            </div>

            {/* Summary */}
            <div className="border-border bg-muted/50 rounded-md border p-4">
              <h4 className="mb-2 text-sm font-medium">
                Configuration Summary
              </h4>
              <dl className="text-muted-foreground space-y-1 text-sm">
                <div className="flex justify-between">
                  <dt>API Version:</dt>
                  <dd className="font-mono">{apiVersion}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Region:</dt>
                  <dd className="font-mono">{region}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Environment:</dt>
                  <dd className="font-mono capitalize">{environment}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* User Role Selection */}
          <div className="border-border bg-card space-y-4 rounded-lg border p-6">
            <div>
              <h3 className="font-medium">Team Member Permissions</h3>
              <p className="text-muted-foreground text-sm">
                Assign roles to control access levels.
              </p>
            </div>
            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-medium">
                Role
              </label>
              <Select defaultValue="developer">
                <SelectTrigger id="role" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">
                    <SettingsIcon data-icon="inline-start" />
                    Admin - Full access
                  </SelectItem>
                  <SelectItem value="developer">
                    <UserIcon data-icon="inline-start" />
                    Developer - API access
                  </SelectItem>
                  <SelectItem value="viewer">
                    <UsersIcon data-icon="inline-start" />
                    Viewer - Read only
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      );
    }

    return <APIConfiguration />;
  },
};

/**
 * Complete design system reference showing all select variants, sizes, and patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Basic Usage */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Basic Select</h3>
          <p className="text-muted-foreground text-sm">
            Simple select with a list of options.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Select defaultValue="option2">
            <SelectTrigger className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Sizes</h3>
          <p className="text-muted-foreground text-sm">
            Select components in different sizes for various contexts.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="space-y-2">
            <label className="text-xs text-muted-foreground">Small</label>
            <Select defaultValue="sm">
              <SelectTrigger size="sm" className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sm">Small option</SelectItem>
                <SelectItem value="sm2">Another small</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-xs text-muted-foreground">Default</label>
            <Select defaultValue="default">
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default option</SelectItem>
                <SelectItem value="default2">Another default</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Icons</h3>
          <p className="text-muted-foreground text-sm">
            Enhance options with icons for better visual clarity.
          </p>
        </div>
        <Select defaultValue="admin">
          <SelectTrigger className="w-[280px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">
              <SettingsIcon data-icon="inline-start" />
              Administrator
            </SelectItem>
            <SelectItem value="user">
              <UserIcon data-icon="inline-start" />
              Regular User
            </SelectItem>
            <SelectItem value="team">
              <UsersIcon data-icon="inline-start" />
              Team Member
            </SelectItem>
          </SelectContent>
        </Select>
      </section>

      {/* Grouped Options */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Grouped Options</h3>
          <p className="text-muted-foreground text-sm">
            Organize options into logical groups with labels.
          </p>
        </div>
        <Select defaultValue="react">
          <SelectTrigger className="w-[280px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Frontend</SelectLabel>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
              <SelectItem value="svelte">Svelte</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Backend</SelectLabel>
              <SelectItem value="node">Node.js</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="go">Go</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Fullstack</SelectLabel>
              <SelectItem value="next">Next.js</SelectItem>
              <SelectItem value="remix">Remix</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>

      {/* Placeholder State */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Placeholder State</h3>
          <p className="text-muted-foreground text-sm">
            Select with no default value showing placeholder text.
          </p>
        </div>
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </section>

      {/* Disabled State */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Disabled State</h3>
          <p className="text-muted-foreground text-sm">
            Select component and individual items can be disabled.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="space-y-2">
            <label className="text-xs text-muted-foreground">
              Disabled Select
            </label>
            <Select defaultValue="option1" disabled>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-xs text-muted-foreground">
              Disabled Items
            </label>
            <Select defaultValue="available">
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="unavailable" disabled>
                  Unavailable
                </SelectItem>
                <SelectItem value="coming-soon" disabled>
                  Coming Soon
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Scrollable Content */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Scrollable Content</h3>
          <p className="text-muted-foreground text-sm">
            Long lists automatically scroll with scroll indicators.
          </p>
        </div>
        <Select defaultValue="15">
          <SelectTrigger className="w-[280px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
              <SelectItem key={num} value={String(num)}>
                Option {num}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>

      {/* Form Integration */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Form Integration</h3>
          <p className="text-muted-foreground text-sm">
            Select components work seamlessly in forms with labels and
            descriptions.
          </p>
        </div>
        <div className="border-border bg-card max-w-md space-y-4 rounded-lg border p-6">
          <div className="space-y-2">
            <label htmlFor="country" className="text-sm font-medium">
              Country
            </label>
            <Select defaultValue="us">
              <SelectTrigger id="country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-muted-foreground text-xs">
              Select your country of residence.
            </p>
          </div>
          <div className="space-y-2">
            <label htmlFor="timezone" className="text-sm font-medium">
              Timezone
            </label>
            <Select defaultValue="utc">
              <SelectTrigger id="timezone">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>America</SelectLabel>
                  <SelectItem value="est">Eastern Time (ET)</SelectItem>
                  <SelectItem value="cst">Central Time (CT)</SelectItem>
                  <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                  <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Other</SelectLabel>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="gmt">GMT</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-muted-foreground text-xs">
              Choose your preferred timezone.
            </p>
          </div>
        </div>
      </section>

      {/* Width Variations */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Width Variations</h3>
          <p className="text-muted-foreground text-sm">
            Select components can be sized using width classes.
          </p>
        </div>
        <div className="space-y-3">
          <Select defaultValue="narrow">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="narrow">Narrow</SelectItem>
              <SelectItem value="compact">Compact</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="medium">
            <SelectTrigger className="w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="medium">Medium width</SelectItem>
              <SelectItem value="standard">Standard option</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="full">
            <SelectTrigger className="w-full max-w-lg">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full">Full width (with max-width)</SelectItem>
              <SelectItem value="responsive">Responsive option</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>
    </div>
  ),
};

/**
 * Frosted effect demonstration - Selects use a translucent background (75% opacity)
 * with backdrop blur (12px) creating a frosted glass effect.
 */
export const Frosted: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Colorful busy background */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-4">
        <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />
        <div className="rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500" />
        <div className="rounded-lg bg-gradient-to-br from-green-500 to-emerald-500" />
        <div className="rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500" />
        <div className="rounded-lg bg-gradient-to-br from-red-500 to-rose-500" />
        <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500" />
        <div className="rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500" />
        <div className="rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500" />
        <div className="rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-500" />
        <div className="rounded-lg bg-gradient-to-br from-lime-500 to-green-500" />
        <div className="rounded-lg bg-gradient-to-br from-sky-500 to-blue-500" />
        <div className="rounded-lg bg-gradient-to-br from-orange-500 to-red-500" />
        <div className="rounded-lg bg-gradient-to-br from-violet-500 to-purple-500" />
        <div className="rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500" />
        <div className="rounded-lg bg-gradient-to-br from-rose-500 to-pink-500" />
        <div className="rounded-lg bg-gradient-to-br from-emerald-500 to-lime-500" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-8">
        <div className="bg-card rounded-lg border p-4">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  ),
};

/**
 * Interactive playground for testing select props and behavior.
 */
export const Interactive: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[280px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="spinach">Spinach</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  args: {
    defaultValue: "apple",
    disabled: false,
  },
};
