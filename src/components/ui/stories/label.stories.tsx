import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from "lucide-react";

import { Input } from "../input";
import { Label } from "../label";
import { Checkbox } from "../checkbox";
import { RadioGroup, RadioGroupItem } from "../radio-group";
import { Switch } from "../switch";
import { Textarea } from "../textarea";

const meta: Meta<typeof Label> = {
  title: "Components/Form & Field/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    htmlFor: {
      control: "text",
      description: "ID of the form element this label is associated with",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

/**
 * API Settings Form - A realistic scenario showing labels in context
 * of a comprehensive settings form in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function APISettingsForm() {
      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">API Settings</h2>
            <p className="text-muted-foreground text-sm">
              Configure your API access and notification preferences.
            </p>
          </div>

          {/* API Configuration */}
          <div className="border-border bg-card rounded-lg border p-4">
            <h3 className="mb-4 font-medium">API Configuration</h3>
            <div className="space-y-4">
              {/* Simple label with input */}
              <div className="space-y-2">
                <Label htmlFor="api-name">API Key Name</Label>
                <Input
                  id="api-name"
                  placeholder="e.g., Production Key"
                  defaultValue="Production API"
                />
              </div>

              {/* Label with required indicator */}
              <div className="space-y-2">
                <Label htmlFor="api-endpoint">
                  API Endpoint
                  <span className="text-destructive ml-1">*</span>
                </Label>
                <Input
                  id="api-endpoint"
                  placeholder="https://api.neynar.com/v2"
                  defaultValue="https://api.neynar.com/v2"
                  required
                />
              </div>

              {/* Label with helper icon */}
              <div className="space-y-2">
                <Label htmlFor="rate-limit">
                  Rate Limit (requests/min)
                  <InfoIcon className="text-muted-foreground ml-1 size-3.5" />
                </Label>
                <Input
                  id="rate-limit"
                  type="number"
                  placeholder="100"
                  defaultValue="100"
                />
                <p className="text-muted-foreground text-sm">
                  Maximum number of requests per minute
                </p>
              </div>

              {/* Label with textarea */}
              <div className="space-y-2">
                <Label htmlFor="api-description">Description</Label>
                <Textarea
                  id="api-description"
                  placeholder="Describe the purpose of this API key..."
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Permissions */}
          <div className="border-border bg-card rounded-lg border p-4">
            <h3 className="mb-4 font-medium">Permissions</h3>
            <div className="space-y-4">
              {/* Label with checkbox group */}
              <div className="space-y-3">
                <Label>API Scopes</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="scope-read" defaultChecked />
                    <Label
                      htmlFor="scope-read"
                      className="font-normal cursor-pointer"
                    >
                      Read access to casts and users
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="scope-write" defaultChecked />
                    <Label
                      htmlFor="scope-write"
                      className="font-normal cursor-pointer"
                    >
                      Write access to publish casts
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="scope-webhooks" />
                    <Label
                      htmlFor="scope-webhooks"
                      className="font-normal cursor-pointer"
                    >
                      Manage webhooks
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="scope-analytics" disabled />
                    <Label
                      htmlFor="scope-analytics"
                      className="font-normal cursor-not-allowed"
                    >
                      Analytics access (Premium only)
                    </Label>
                  </div>
                </div>
              </div>

              {/* Label with radio group */}
              <div className="space-y-3">
                <Label>Environment</Label>
                <RadioGroup defaultValue="production">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="production" id="env-prod" />
                    <Label
                      htmlFor="env-prod"
                      className="font-normal cursor-pointer"
                    >
                      Production
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="staging" id="env-staging" />
                    <Label
                      htmlFor="env-staging"
                      className="font-normal cursor-pointer"
                    >
                      Staging
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="development" id="env-dev" />
                    <Label
                      htmlFor="env-dev"
                      className="font-normal cursor-pointer"
                    >
                      Development
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="border-border bg-card rounded-lg border p-4">
            <h3 className="mb-4 font-medium">Notification Settings</h3>
            <div className="space-y-4">
              {/* Label with switch */}
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">
                    Email Notifications
                  </Label>
                  <p className="text-muted-foreground text-sm">
                    Receive alerts when API limits are reached
                  </p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="webhook-failures">
                    Webhook Failure Alerts
                  </Label>
                  <p className="text-muted-foreground text-sm">
                    Get notified when webhooks fail to deliver
                  </p>
                </div>
                <Switch id="webhook-failures" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="security-alerts" className="text-destructive">
                    Security Alerts
                    <span className="ml-1">*</span>
                  </Label>
                  <p className="text-muted-foreground text-sm">
                    Critical security notifications (cannot be disabled)
                  </p>
                </div>
                <Switch id="security-alerts" defaultChecked disabled />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <APISettingsForm />;
  },
};

/**
 * Complete design system reference showing all label patterns, states, and use cases.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Basic Label Usage */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Basic Usage</h3>
          <p className="text-muted-foreground text-sm">
            Standard label patterns with different form controls.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="basic-text">Text Input</Label>
            <Input id="basic-text" placeholder="Enter text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="basic-email">Email Input</Label>
            <Input id="basic-email" type="email" placeholder="your@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="basic-textarea">Textarea</Label>
            <Textarea id="basic-textarea" placeholder="Enter longer text..." />
          </div>
        </div>
      </section>

      {/* Label States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Label States</h3>
          <p className="text-muted-foreground text-sm">
            Different states and visual treatments for labels.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Default */}
          <div className="space-y-2">
            <Label htmlFor="state-default">Default Label</Label>
            <Input id="state-default" placeholder="Normal state" />
          </div>

          {/* Required */}
          <div className="space-y-2">
            <Label htmlFor="state-required">
              Required Field
              <span className="text-destructive ml-1">*</span>
            </Label>
            <Input id="state-required" placeholder="Required input" required />
          </div>

          {/* Disabled */}
          <div className="space-y-2">
            <Label htmlFor="state-disabled" className="opacity-50">
              Disabled Field
            </Label>
            <Input id="state-disabled" placeholder="Disabled input" disabled />
          </div>

          {/* With Helper Icon */}
          <div className="space-y-2">
            <Label htmlFor="state-icon">
              With Helper Icon
              <InfoIcon className="text-muted-foreground ml-1 size-3.5" />
            </Label>
            <Input id="state-icon" placeholder="With info icon" />
          </div>

          {/* With Description */}
          <div className="space-y-2">
            <Label htmlFor="state-desc">With Description</Label>
            <Input id="state-desc" placeholder="Enter value" />
            <p className="text-muted-foreground text-sm">
              Helper text providing additional context
            </p>
          </div>

          {/* Error State */}
          <div className="space-y-2">
            <Label htmlFor="state-error" className="text-destructive">
              Error State
            </Label>
            <Input
              id="state-error"
              placeholder="Invalid input"
              aria-invalid="true"
            />
            <p className="text-destructive text-sm">This field is required</p>
          </div>
        </div>
      </section>

      {/* Checkbox and Radio Labels */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Checkbox & Radio Labels</h3>
          <p className="text-muted-foreground text-sm">
            Labels for checkbox and radio button controls.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Checkboxes */}
          <div className="space-y-3">
            <Label className="font-medium">Checkbox Group</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="cb-1" defaultChecked />
                <Label htmlFor="cb-1" className="font-normal cursor-pointer">
                  Option 1 (selected)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="cb-2" />
                <Label htmlFor="cb-2" className="font-normal cursor-pointer">
                  Option 2
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="cb-3" disabled />
                <Label
                  htmlFor="cb-3"
                  className="font-normal cursor-not-allowed"
                >
                  Option 3 (disabled)
                </Label>
              </div>
            </div>
          </div>

          {/* Radio Buttons */}
          <div className="space-y-3">
            <Label className="font-medium">Radio Group</Label>
            <RadioGroup defaultValue="radio-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="radio-1" id="radio-1" />
                <Label htmlFor="radio-1" className="font-normal cursor-pointer">
                  Radio 1 (selected)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="radio-2" id="radio-2" />
                <Label htmlFor="radio-2" className="font-normal cursor-pointer">
                  Radio 2
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="radio-3" id="radio-3" disabled />
                <Label
                  htmlFor="radio-3"
                  className="font-normal cursor-not-allowed"
                >
                  Radio 3 (disabled)
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </section>

      {/* Switch Labels */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Switch Labels</h3>
          <p className="text-muted-foreground text-sm">
            Labels for toggle switches with descriptions.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="switch-1">Enable notifications</Label>
              <p className="text-muted-foreground text-sm">
                Receive email notifications for updates
              </p>
            </div>
            <Switch id="switch-1" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="switch-2">Dark mode</Label>
              <p className="text-muted-foreground text-sm">
                Switch to dark theme
              </p>
            </div>
            <Switch id="switch-2" />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="switch-3" className="opacity-50">
                Premium feature
              </Label>
              <p className="text-muted-foreground text-sm opacity-50">
                Available with premium subscription
              </p>
            </div>
            <Switch id="switch-3" disabled />
          </div>
        </div>
      </section>

      {/* Label Alignment */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Label Alignment</h3>
          <p className="text-muted-foreground text-sm">
            Different alignment patterns for form layouts.
          </p>
        </div>
        <div className="space-y-6">
          {/* Vertical (default) */}
          <div>
            <h4 className="text-muted-foreground mb-3 text-sm font-medium">
              Vertical Layout (Default)
            </h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="align-v1">First Name</Label>
                <Input id="align-v1" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="align-v2">Last Name</Label>
                <Input id="align-v2" placeholder="Doe" />
              </div>
            </div>
          </div>

          {/* Horizontal */}
          <div>
            <h4 className="text-muted-foreground mb-3 text-sm font-medium">
              Horizontal Layout
            </h4>
            <div className="space-y-3">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="align-h1" className="text-right">
                  Username
                </Label>
                <Input
                  id="align-h1"
                  className="col-span-2"
                  placeholder="johndoe"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="align-h2" className="text-right">
                  Email
                </Label>
                <Input
                  id="align-h2"
                  className="col-span-2"
                  type="email"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complex Labels */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Complex Labels</h3>
          <p className="text-muted-foreground text-sm">
            Labels with rich content and multiple elements.
          </p>
        </div>
        <div className="space-y-4">
          {/* Label with badge */}
          <div className="space-y-2">
            <Label htmlFor="complex-1" className="flex items-center gap-2">
              API Key
              <span className="bg-primary/10 text-primary rounded px-1.5 py-0.5 text-xs font-medium">
                Required
              </span>
            </Label>
            <Input id="complex-1" placeholder="Enter your API key" />
          </div>

          {/* Label with multiple indicators */}
          <div className="space-y-2">
            <Label
              htmlFor="complex-2"
              className="flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                Password
                <span className="text-destructive">*</span>
                <InfoIcon className="text-muted-foreground size-3.5" />
              </span>
              <span className="text-muted-foreground text-xs font-normal">
                Min 8 characters
              </span>
            </Label>
            <Input id="complex-2" type="password" placeholder="••••••••" />
          </div>

          {/* Label with link */}
          <div className="space-y-2">
            <Label htmlFor="complex-3">
              Webhook URL
              <a
                href="#"
                className="text-primary hover:underline ml-1 text-xs font-normal"
                onClick={(e) => e.preventDefault()}
              >
                (Learn more)
              </a>
            </Label>
            <Input id="complex-3" placeholder="https://example.com/webhook" />
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Accessibility</h3>
          <p className="text-muted-foreground text-sm">
            Labels properly associate with form controls using htmlFor.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="a11y-1">
              Clicking this label focuses the input below
            </Label>
            <Input id="a11y-1" placeholder="Click the label to focus" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="a11y-2" />
            <Label htmlFor="a11y-2" className="font-normal cursor-pointer">
              Clicking this text toggles the checkbox
            </Label>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="a11y-3" className="cursor-pointer">
              Clicking this text toggles the switch
            </Label>
            <Switch id="a11y-3" />
          </div>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing label props.
 */
export const Interactive: Story = {
  args: {
    children: "Label Text",
    htmlFor: "example-input",
  },
  render: (args) => (
    <div className="space-y-2">
      <Label {...args} />
      <Input id="example-input" placeholder="Enter text..." />
    </div>
  ),
};
