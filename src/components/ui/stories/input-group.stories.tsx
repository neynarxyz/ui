import type { Meta, StoryObj } from "@storybook/react";
import {
  CalendarIcon,
  CheckIcon,
  CopyIcon,
  EyeIcon,
  EyeOffIcon,
  KeyIcon,
  Loader2Icon,
  LockIcon,
  SearchIcon,
  SendIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../button";
import { Field, FieldDescription, FieldLabel } from "../field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "../input-group";
import { Label } from "../label";

const meta: Meta<typeof InputGroup> = {
  title: "Components/Form & Field/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

/**
 * API Key Management - A realistic scenario showing InputGroup components
 * in the context of managing API keys in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function APIKeyManagement() {
      const [apiKey] = useState("neynar_sk_prod_a1b2c3d4_e5f6g7h8_9i0j1k2l");
      const [copied, setCopied] = useState(false);
      const [showKey, setShowKey] = useState(false);
      const [customUrl, setCustomUrl] = useState("");
      const [webhookUrl, setWebhookUrl] = useState("");
      const [webhookSecret, setWebhookSecret] = useState("");
      const [rateLimitPerMinute, setRateLimitPerMinute] = useState("1000");
      const [isSaving, setIsSaving] = useState(false);

      const handleCopy = () => {
        navigator.clipboard.writeText(apiKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };

      const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => setIsSaving(false), 1500);
      };

      const displayKey = showKey ? apiKey : apiKey.replace(/[a-z0-9]/gi, "*");

      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">API Configuration</h2>
            <p className="text-muted-foreground text-sm">
              Configure your Neynar API key and integration settings.
            </p>
          </div>

          {/* API Key Display with Copy */}
          <div className="border-border bg-card rounded-lg border p-4">
            <div className="mb-4 flex items-center gap-2">
              <div className="bg-primary/10 text-primary rounded-md p-2">
                <KeyIcon className="size-4" />
              </div>
              <div>
                <h3 className="font-medium">Production API Key</h3>
                <p className="text-muted-foreground text-xs">
                  Created on Jan 15, 2025
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="api-key">API Key</Label>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <LockIcon />
                </InputGroupAddon>
                <InputGroupInput
                  id="api-key"
                  value={displayKey}
                  readOnly
                  className="font-mono text-sm"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    size="icon-xs"
                    aria-label={showKey ? "Hide key" : "Show key"}
                    onClick={() => setShowKey(!showKey)}
                  >
                    {showKey ? <EyeOffIcon /> : <EyeIcon />}
                  </InputGroupButton>
                  <InputGroupButton
                    size="icon-xs"
                    aria-label="Copy to clipboard"
                    onClick={handleCopy}
                  >
                    {copied ? <CheckIcon /> : <CopyIcon />}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>

          {/* Custom Domain */}
          <div className="space-y-2">
            <Label htmlFor="custom-domain">Custom Domain (Optional)</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput
                id="custom-domain"
                placeholder="api.yourdomain.com"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
              />
            </InputGroup>
            <p className="text-muted-foreground text-sm">
              Use a custom domain for API requests
            </p>
          </div>

          {/* Webhook Configuration */}
          <div className="border-border bg-card rounded-lg border p-4">
            <h3 className="mb-4 font-medium">Webhook Settings</h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <InputGroupText>https://</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput
                    id="webhook-url"
                    placeholder="your-app.com/webhooks/neynar"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton size="xs" variant="ghost">
                      Test
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhook-secret">Webhook Secret</Label>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <LockIcon />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="webhook-secret"
                    type="password"
                    placeholder="••••••••••••••••"
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton size="xs" variant="outline">
                      Generate
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </div>
          </div>

          {/* Rate Limiting */}
          <div className="space-y-2">
            <Label htmlFor="rate-limit">Rate Limit (requests/minute)</Label>
            <InputGroup>
              <InputGroupInput
                id="rate-limit"
                type="number"
                value={rateLimitPerMinute}
                onChange={(e) => setRateLimitPerMinute(e.target.value)}
                min="100"
                max="10000"
                step="100"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupText>req/min</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <p className="text-muted-foreground text-sm">
              Maximum: 10,000 requests per minute
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex justify-end gap-2 border-t pt-4">
            <Button
              variant="outline"
              onClick={() => {
                setCustomUrl("");
                setWebhookUrl("");
                setWebhookSecret("");
                setRateLimitPerMinute("1000");
              }}
            >
              Reset
            </Button>
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? (
                <Loader2Icon
                  data-icon="inline-start"
                  className="animate-spin"
                />
              ) : (
                <SendIcon data-icon="inline-start" />
              )}
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      );
    }

    return <APIKeyManagement />;
  },
};

/**
 * Complete design system reference showing all InputGroup variants,
 * alignment options, addon types, and composition patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Icon Addons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Icon Addons</h3>
          <p className="text-muted-foreground text-sm">
            Icons can be placed at the start or end of inputs.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Icon Start</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search..." />
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Icon End</Label>
            <InputGroup>
              <InputGroupInput placeholder="Select date..." />
              <InputGroupAddon align="inline-end">
                <CalendarIcon />
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Both Sides</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon align="inline-end">
                <XIcon />
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>With Loading State</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <Loader2Icon className="animate-spin" />
              </InputGroupAddon>
              <InputGroupInput placeholder="Loading..." />
            </InputGroup>
          </div>
        </div>
      </section>

      {/* Text Addons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Text Addons</h3>
          <p className="text-muted-foreground text-sm">
            Text prefixes and suffixes for URLs, currencies, and units.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>URL Prefix</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="example.com" />
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Currency Suffix</Label>
            <InputGroup>
              <InputGroupInput type="number" placeholder="0.00" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>USD</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Username Format</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="username" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>.eth</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Units</Label>
            <InputGroup>
              <InputGroupInput type="number" placeholder="100" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>MB</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </section>

      {/* Button Addons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Button Addons</h3>
          <p className="text-muted-foreground text-sm">
            Action buttons within input groups for common operations.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Clear Button</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search..." defaultValue="Query" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Clear">
                  <XIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Copy Button</Label>
            <InputGroup>
              <InputGroupInput
                value="neynar_sk_prod_abc123"
                readOnly
                className="font-mono text-sm"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Copy">
                  <CopyIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Action Button</Label>
            <InputGroup>
              <InputGroupInput placeholder="Enter email..." />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs">Send</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Multiple Buttons</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <LockIcon />
              </InputGroupAddon>
              <InputGroupInput type="password" placeholder="••••••••" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Toggle visibility">
                  <EyeIcon />
                </InputGroupButton>
                <InputGroupButton size="icon-xs" aria-label="Copy">
                  <CopyIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </section>

      {/* Button Sizes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Button Sizes</h3>
          <p className="text-muted-foreground text-sm">
            Different button sizes available within InputGroup.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Extra Small (xs)</Label>
            <InputGroup>
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs">Search</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Small (sm)</Label>
            <InputGroup>
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="sm">Search</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Icon Extra Small (icon-xs)</Label>
            <InputGroup>
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Search">
                  <SearchIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Icon Small (icon-sm)</Label>
            <InputGroup>
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-sm" aria-label="Search">
                  <SearchIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </section>

      {/* Mixed Combinations */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Mixed Combinations</h3>
          <p className="text-muted-foreground text-sm">
            Complex combinations of icons, text, and buttons.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label>API Endpoint Builder</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>https://api.neynar.com/</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="v2/cast/conversation" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs" variant="outline">
                  Test
                </InputGroupButton>
                <InputGroupButton size="icon-xs" aria-label="Copy">
                  <CopyIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Search with Filters</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search casts..." />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs" variant="outline">
                  Filters
                </InputGroupButton>
                <InputGroupButton size="icon-xs" aria-label="Clear">
                  <XIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Password with Actions</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <LockIcon />
              </InputGroupAddon>
              <InputGroupInput type="password" placeholder="Enter password" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Toggle visibility">
                  <EyeIcon />
                </InputGroupButton>
                <InputGroupButton size="xs" variant="outline">
                  Generate
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">States</h3>
          <p className="text-muted-foreground text-sm">
            Different input states with addons.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Default</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search..." />
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>With Value</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput defaultValue="Search query" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Clear">
                  <XIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Disabled</Label>
            <InputGroup data-disabled="true">
              <InputGroupAddon align="inline-start">
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="Disabled..." disabled />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Search" disabled>
                  <SearchIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Invalid</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput
                placeholder="Invalid input"
                aria-invalid="true"
              />
            </InputGroup>
            <p className="text-destructive text-sm">This field is required</p>
          </div>

          <div className="space-y-2">
            <Label>Read Only</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <LockIcon />
              </InputGroupAddon>
              <InputGroupInput
                value="neynar_sk_readonly"
                readOnly
                className="font-mono text-sm"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Copy">
                  <CopyIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Loading</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <Loader2Icon className="animate-spin" />
              </InputGroupAddon>
              <InputGroupInput placeholder="Loading..." />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs" disabled>
                  Search
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </section>

      {/* With Field Component */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Field Component</h3>
          <p className="text-muted-foreground text-sm">
            InputGroup used within Field for complete form patterns.
          </p>
        </div>
        <div className="grid gap-4">
          <Field>
            <FieldLabel htmlFor="webhook-field">Webhook URL</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput
                id="webhook-field"
                placeholder="your-app.com/webhooks"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs" variant="outline">
                  Verify
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            <FieldDescription>
              Enter your webhook endpoint URL to receive real-time events
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="api-key-field">API Key</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <KeyIcon />
              </InputGroupAddon>
              <InputGroupInput
                id="api-key-field"
                type="password"
                placeholder="Enter your API key"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Toggle visibility">
                  <EyeIcon />
                </InputGroupButton>
                <InputGroupButton size="icon-xs" aria-label="Copy">
                  <CopyIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            <FieldDescription>
              Keep your API key secure and never share it publicly
            </FieldDescription>
          </Field>
        </div>
      </section>

      {/* Real-World Patterns */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Real-World Patterns</h3>
          <p className="text-muted-foreground text-sm">
            Common patterns used in Neynar applications.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label>FID Lookup</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>FID:</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput type="number" placeholder="3" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs">Lookup</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Cast Hash Search</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput
                placeholder="0x..."
                className="font-mono text-sm"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs" variant="outline">
                  Search
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Username Check</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="username" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs">Check</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Channel Search</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>/</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="channel-name" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Search">
                  <SearchIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing InputGroup props.
 */
export const Interactive: Story = {
  render: () => (
    <div className="w-96 space-y-2">
      <Label>Search</Label>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="Clear">
            <XIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};
