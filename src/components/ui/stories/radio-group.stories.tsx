import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { useState } from "react";
import {
  CheckCircle2Icon,
  GlobeIcon,
  RocketIcon,
  ServerIcon,
  ShieldCheckIcon,
  ZapIcon,
} from "lucide-react";

import { Label } from "../label";
import { RadioGroup, RadioGroupItem } from "../radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Core Inputs/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  args: {
    onValueChange: fn(),
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disable all radio items in the group",
    },
    defaultValue: {
      control: "text",
      description: "Default selected value",
    },
    "aria-invalid": {
      control: "boolean",
      description: "Mark the radio group as invalid (error state)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

/**
 * Network and Plan Selection - Realistic scenarios showing radio groups
 * in the context of Neynar Dashboard configuration.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function NetworkSelection() {
      const [network, setNetwork] = useState("mainnet");
      const [plan, setPlan] = useState("pro");

      return (
        <div className="w-full max-w-2xl space-y-8">
          {/* Network Selection */}
          <section className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Network Configuration</h3>
              <p className="text-muted-foreground text-sm">
                Select which Farcaster network your app should connect to.
              </p>
            </div>

            <RadioGroup
              value={network}
              onValueChange={(v) => setNetwork(v as string)}
            >
              <div className="border-border rounded-lg border">
                {/* Mainnet Option */}
                <label
                  htmlFor="mainnet"
                  className="hover:bg-muted/50 flex cursor-pointer items-start gap-4 border-b p-4 last:border-0"
                >
                  <RadioGroupItem
                    value="mainnet"
                    id="mainnet"
                    className="mt-0.5"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <GlobeIcon className="text-primary size-5" />
                      <span className="font-medium">Mainnet</span>
                      <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-medium">
                        Recommended
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm">
                      Production-ready network with real users and data. Use
                      this for live applications.
                    </p>
                  </div>
                </label>

                {/* Testnet Option */}
                <label
                  htmlFor="testnet"
                  className="hover:bg-muted/50 flex cursor-pointer items-start gap-4 border-b p-4 last:border-0"
                >
                  <RadioGroupItem
                    value="testnet"
                    id="testnet"
                    className="mt-0.5"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <ServerIcon className="size-5" />
                      <span className="font-medium">Testnet</span>
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm">
                      Testing environment for development. Safe to experiment
                      without affecting production.
                    </p>
                  </div>
                </label>

                {/* Devnet Option */}
                <label
                  htmlFor="devnet"
                  className="hover:bg-muted/50 flex cursor-pointer items-start gap-4 border-b p-4 last:border-0"
                >
                  <RadioGroupItem
                    value="devnet"
                    id="devnet"
                    className="mt-0.5"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <RocketIcon className="size-5" />
                      <span className="font-medium">Devnet</span>
                      <span className="text-muted-foreground rounded-full border px-2 py-0.5 text-xs font-medium">
                        Beta
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm">
                      Experimental features and early access. May be unstable.
                    </p>
                  </div>
                </label>
              </div>
            </RadioGroup>
          </section>

          {/* Plan Selection */}
          <section className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Subscription Plan</h3>
              <p className="text-muted-foreground text-sm">
                Choose the plan that fits your application needs.
              </p>
            </div>

            <RadioGroup
              value={plan}
              onValueChange={(v) => setPlan(v as string)}
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {/* Free Plan */}
                <label
                  htmlFor="free"
                  className="hover:border-primary/50 hover:bg-muted/50 border-border relative flex cursor-pointer flex-col gap-3 rounded-lg border p-4"
                >
                  <div className="flex items-start justify-between">
                    <RadioGroupItem value="free" id="free" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <ZapIcon className="size-5" />
                      <span className="font-semibold">Free</span>
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm">
                      Perfect for testing and small projects
                    </p>
                    <div className="mt-3">
                      <span className="text-2xl font-bold">$0</span>
                      <span className="text-muted-foreground text-sm">
                        /month
                      </span>
                    </div>
                    <ul className="text-muted-foreground mt-3 space-y-1 text-xs">
                      <li className="flex items-center gap-2">
                        <CheckCircle2Icon className="size-3" />
                        1,000 requests/day
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2Icon className="size-3" />
                        Community support
                      </li>
                    </ul>
                  </div>
                </label>

                {/* Pro Plan */}
                <label
                  htmlFor="pro"
                  className="hover:border-primary/50 hover:bg-muted/50 border-primary bg-primary/5 relative flex cursor-pointer flex-col gap-3 rounded-lg border-2 p-4"
                >
                  <div className="flex items-start justify-between">
                    <RadioGroupItem value="pro" id="pro" />
                    <span className="bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs font-medium">
                      Popular
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <ShieldCheckIcon className="text-primary size-5" />
                      <span className="font-semibold">Pro</span>
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm">
                      For production applications
                    </p>
                    <div className="mt-3">
                      <span className="text-2xl font-bold">$99</span>
                      <span className="text-muted-foreground text-sm">
                        /month
                      </span>
                    </div>
                    <ul className="text-muted-foreground mt-3 space-y-1 text-xs">
                      <li className="flex items-center gap-2">
                        <CheckCircle2Icon className="size-3" />
                        100,000 requests/day
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2Icon className="size-3" />
                        Priority support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2Icon className="size-3" />
                        Advanced analytics
                      </li>
                    </ul>
                  </div>
                </label>

                {/* Enterprise Plan */}
                <label
                  htmlFor="enterprise"
                  className="hover:border-primary/50 hover:bg-muted/50 border-border relative flex cursor-pointer flex-col gap-3 rounded-lg border p-4"
                >
                  <div className="flex items-start justify-between">
                    <RadioGroupItem value="enterprise" id="enterprise" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <RocketIcon className="size-5" />
                      <span className="font-semibold">Enterprise</span>
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm">
                      Custom solutions at scale
                    </p>
                    <div className="mt-3">
                      <span className="text-2xl font-bold">Custom</span>
                    </div>
                    <ul className="text-muted-foreground mt-3 space-y-1 text-xs">
                      <li className="flex items-center gap-2">
                        <CheckCircle2Icon className="size-3" />
                        Unlimited requests
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2Icon className="size-3" />
                        24/7 dedicated support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2Icon className="size-3" />
                        SLA guarantee
                      </li>
                    </ul>
                  </div>
                </label>
              </div>
            </RadioGroup>
          </section>
        </div>
      );
    }

    return <NetworkSelection />;
  },
};

/**
 * Complete design system reference showing all radio group states and patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    const [basicValue, setBasicValue] = useState("option-1");
    const [disabledValue, setDisabledValue] = useState("option-1");
    const [invalidValue, setInvalidValue] = useState("");

    return (
      <div className="w-full max-w-4xl space-y-10">
        {/* Basic Radio Group */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Basic Radio Group</h3>
            <p className="text-muted-foreground text-sm">
              Default radio group with three options.
            </p>
          </div>
          <RadioGroup
            value={basicValue}
            onValueChange={(v) => setBasicValue(v as string)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-1" id="basic-option-1" />
              <Label htmlFor="basic-option-1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-2" id="basic-option-2" />
              <Label htmlFor="basic-option-2">Option 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-3" id="basic-option-3" />
              <Label htmlFor="basic-option-3">Option 3</Label>
            </div>
          </RadioGroup>
        </section>

        {/* Disabled State */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Disabled State</h3>
            <p className="text-muted-foreground text-sm">
              Radio group with disabled state (entire group).
            </p>
          </div>
          <RadioGroup
            value={disabledValue}
            onValueChange={(v) => setDisabledValue(v as string)}
            disabled
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-1" id="disabled-option-1" />
              <Label htmlFor="disabled-option-1">Option 1 (Disabled)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-2" id="disabled-option-2" />
              <Label htmlFor="disabled-option-2">Option 2 (Disabled)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-3" id="disabled-option-3" />
              <Label htmlFor="disabled-option-3">Option 3 (Disabled)</Label>
            </div>
          </RadioGroup>
        </section>

        {/* Individual Disabled Items */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Individual Disabled Items</h3>
            <p className="text-muted-foreground text-sm">
              Some radio items can be individually disabled.
            </p>
          </div>
          <RadioGroup defaultValue="option-1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-1" id="partial-option-1" />
              <Label htmlFor="partial-option-1">Available Option</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-2" id="partial-option-2" disabled />
              <Label htmlFor="partial-option-2">Disabled Option</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-3" id="partial-option-3" />
              <Label htmlFor="partial-option-3">Available Option</Label>
            </div>
          </RadioGroup>
        </section>

        {/* Error State */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Error State</h3>
            <p className="text-muted-foreground text-sm">
              Radio group with validation error (aria-invalid).
            </p>
          </div>
          <RadioGroup
            value={invalidValue}
            onValueChange={(v) => setInvalidValue(v as string)}
            aria-invalid={true}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-1"
                id="invalid-option-1"
                aria-invalid={true}
              />
              <Label htmlFor="invalid-option-1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-2"
                id="invalid-option-2"
                aria-invalid={true}
              />
              <Label htmlFor="invalid-option-2">Option 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-3"
                id="invalid-option-3"
                aria-invalid={true}
              />
              <Label htmlFor="invalid-option-3">Option 3</Label>
            </div>
          </RadioGroup>
          <p className="text-destructive text-sm">
            Please select an option to continue.
          </p>
        </section>

        {/* With Description */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">With Descriptions</h3>
            <p className="text-muted-foreground text-sm">
              Radio items with additional descriptive text.
            </p>
          </div>
          <RadioGroup defaultValue="email">
            <div className="flex items-start space-x-3">
              <RadioGroupItem
                value="email"
                id="notify-email"
                className="mt-0.5"
              />
              <div className="flex-1">
                <Label htmlFor="notify-email" className="font-medium">
                  Email Notifications
                </Label>
                <p className="text-muted-foreground text-sm">
                  Receive notifications via email when important events occur.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <RadioGroupItem value="sms" id="notify-sms" className="mt-0.5" />
              <div className="flex-1">
                <Label htmlFor="notify-sms" className="font-medium">
                  SMS Notifications
                </Label>
                <p className="text-muted-foreground text-sm">
                  Get instant text messages for critical updates and alerts.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <RadioGroupItem
                value="push"
                id="notify-push"
                className="mt-0.5"
              />
              <div className="flex-1">
                <Label htmlFor="notify-push" className="font-medium">
                  Push Notifications
                </Label>
                <p className="text-muted-foreground text-sm">
                  Browser and mobile push notifications for real-time updates.
                </p>
              </div>
            </div>
          </RadioGroup>
        </section>

        {/* Card-Based Layout */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Card-Based Layout</h3>
            <p className="text-muted-foreground text-sm">
              Radio group items styled as selectable cards.
            </p>
          </div>
          <RadioGroup defaultValue="standard">
            <div className="grid gap-3 sm:grid-cols-3">
              <label
                htmlFor="shipping-standard"
                className="hover:border-primary/50 border-border relative flex cursor-pointer flex-col gap-2 rounded-lg border p-4"
              >
                <div className="flex items-start justify-between">
                  <RadioGroupItem value="standard" id="shipping-standard" />
                </div>
                <div>
                  <p className="font-medium">Standard</p>
                  <p className="text-muted-foreground text-sm">
                    5-7 business days
                  </p>
                  <p className="mt-2 font-semibold">$5.00</p>
                </div>
              </label>

              <label
                htmlFor="shipping-express"
                className="hover:border-primary/50 border-border relative flex cursor-pointer flex-col gap-2 rounded-lg border p-4"
              >
                <div className="flex items-start justify-between">
                  <RadioGroupItem value="express" id="shipping-express" />
                </div>
                <div>
                  <p className="font-medium">Express</p>
                  <p className="text-muted-foreground text-sm">
                    2-3 business days
                  </p>
                  <p className="mt-2 font-semibold">$12.00</p>
                </div>
              </label>

              <label
                htmlFor="shipping-overnight"
                className="hover:border-primary/50 border-border relative flex cursor-pointer flex-col gap-2 rounded-lg border p-4"
              >
                <div className="flex items-start justify-between">
                  <RadioGroupItem value="overnight" id="shipping-overnight" />
                </div>
                <div>
                  <p className="font-medium">Overnight</p>
                  <p className="text-muted-foreground text-sm">
                    Next business day
                  </p>
                  <p className="mt-2 font-semibold">$25.00</p>
                </div>
              </label>
            </div>
          </RadioGroup>
        </section>
      </div>
    );
  },
};

/**
 * Interactive playground for testing RadioGroup props.
 */
export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState("option-1");

    return (
      <RadioGroup
        {...args}
        value={value}
        onValueChange={(v) => {
          setValue(v as string);
          args.onValueChange?.(v);
        }}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label htmlFor="option-2">Option 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-3" id="option-3" />
          <Label htmlFor="option-3">Option 3</Label>
        </div>
      </RadioGroup>
    );
  },
  args: {
    disabled: false,
  },
};
