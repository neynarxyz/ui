import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import {
  AlertCircleIcon,
  CodeIcon,
  GlobeIcon,
  Loader2Icon,
  SendIcon,
  SparklesIcon,
  WandIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../button";
import { Label } from "../label";
import { Textarea } from "../textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Core Inputs/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  args: {
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    "aria-invalid": {
      control: "boolean",
      description: "Error/invalid state",
    },
    rows: {
      control: "number",
      description: "Number of visible text rows",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

/**
 * Neynar Dashboard scenarios - Cast composer, webhook payload editor, and AI prompt input.
 * Shows realistic usage patterns for content creation and API configuration.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function CastComposer() {
      const [castText, setCastText] = useState("");
      const [webhookPayload, setWebhookPayload] = useState(
        `{\n  "event": "cast.created",\n  "data": {\n    "fid": 3,\n    "text": "gm"\n  }\n}`,
      );
      const [promptText, setPromptText] = useState("");
      const [isGenerating, setIsGenerating] = useState(false);

      const charCount = castText.length;
      const maxChars = 320;
      const isOverLimit = charCount > maxChars;

      const handleGenerate = () => {
        setIsGenerating(true);
        setTimeout(() => {
          setPromptText(
            "Create a compelling Farcaster cast about the latest Web3 development trends. Include relevant hashtags and make it engaging for developers.",
          );
          setIsGenerating(false);
        }, 1500);
      };

      return (
        <div className="w-full max-w-2xl space-y-8">
          {/* Cast Composer */}
          <div className="border-border bg-card rounded-lg border p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 text-primary rounded-md p-1.5">
                  <GlobeIcon className="size-4" />
                </div>
                <h3 className="font-semibold">New Cast</h3>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon-sm">
                  <WandIcon className="size-4" />
                </Button>
                <Button variant="ghost" size="icon-sm">
                  <SparklesIcon className="size-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <Textarea
                placeholder="What's happening?"
                value={castText}
                onChange={(e) => setCastText(e.target.value)}
                className="min-h-24 resize-none"
                aria-invalid={isOverLimit}
              />

              <div className="flex items-center justify-between">
                <p
                  className={`text-sm ${
                    isOverLimit
                      ? "text-destructive font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {charCount} / {maxChars}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Save Draft
                  </Button>
                  <Button
                    size="sm"
                    disabled={castText.length === 0 || isOverLimit}
                  >
                    <SendIcon data-icon="inline-start" />
                    Cast
                  </Button>
                </div>
              </div>

              {isOverLimit && (
                <div className="text-destructive flex items-center gap-2 text-sm">
                  <AlertCircleIcon className="size-4" />
                  <span>Cast exceeds maximum character limit</span>
                </div>
              )}
            </div>
          </div>

          {/* Webhook Payload Editor */}
          <div className="border-border bg-card rounded-lg border p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="bg-secondary/10 text-secondary-foreground rounded-md p-1.5">
                <CodeIcon className="size-4" />
              </div>
              <div>
                <h3 className="font-semibold">Webhook Configuration</h3>
                <p className="text-muted-foreground text-sm">
                  Test payload for webhook events
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <Label htmlFor="webhook-payload">Request Body (JSON)</Label>
                <Textarea
                  id="webhook-payload"
                  value={webhookPayload}
                  onChange={(e) => setWebhookPayload(e.target.value)}
                  className="font-mono text-sm"
                  rows={8}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Validate JSON
                </Button>
                <Button size="sm">
                  <SendIcon data-icon="inline-start" />
                  Send Test Request
                </Button>
              </div>
            </div>
          </div>

          {/* AI Prompt Input */}
          <div className="border-border bg-card rounded-lg border p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="bg-purple-500/10 text-purple-500 rounded-md p-1.5">
                <SparklesIcon className="size-4" />
              </div>
              <div>
                <h3 className="font-semibold">AI Content Generator</h3>
                <p className="text-muted-foreground text-sm">
                  Describe what you want to create
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Textarea
                placeholder="Example: Generate a technical analysis of the latest Farcaster protocol updates..."
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                className="min-h-20"
                disabled={isGenerating}
              />

              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm" disabled={isGenerating}>
                  Clear
                </Button>
                <Button
                  size="sm"
                  onClick={handleGenerate}
                  disabled={isGenerating || promptText.length === 0}
                >
                  {isGenerating ? (
                    <Loader2Icon
                      data-icon="inline-start"
                      className="animate-spin"
                    />
                  ) : (
                    <WandIcon data-icon="inline-start" />
                  )}
                  {isGenerating ? "Generating..." : "Generate"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <CastComposer />;
  },
};

/**
 * Complete design system reference showing all textarea variants, sizes, and states.
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
          <h3 className="text-lg font-semibold">Basic Usage</h3>
          <p className="text-muted-foreground text-sm">
            Default textarea with placeholder and auto-sizing behavior.
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="basic">Description</Label>
          <Textarea id="basic" placeholder="Enter a description..." />
        </div>
      </section>

      {/* With Rows */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Rows</h3>
          <p className="text-muted-foreground text-sm">
            Control initial height with the rows prop.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="rows-3">3 Rows</Label>
            <Textarea id="rows-3" placeholder="Small textarea..." rows={3} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rows-6">6 Rows</Label>
            <Textarea id="rows-6" placeholder="Medium textarea..." rows={6} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rows-10">10 Rows</Label>
            <Textarea id="rows-10" placeholder="Large textarea..." rows={10} />
          </div>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">States</h3>
          <p className="text-muted-foreground text-sm">
            Different states including focus, disabled, and error.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="default-state">Default</Label>
            <Textarea id="default-state" placeholder="Type something..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled">Disabled</Label>
            <Textarea
              id="disabled"
              placeholder="This field is disabled"
              disabled
              defaultValue="Cannot edit this text"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="error" className="text-destructive">
              Error State
            </Label>
            <Textarea
              id="error"
              placeholder="Invalid input..."
              aria-invalid
              defaultValue="This content contains an error"
            />
            <p className="text-destructive flex items-center gap-1.5 text-sm">
              <AlertCircleIcon className="size-4" />
              This field contains an error
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="readonly">Read Only (via disabled)</Label>
            <Textarea
              id="readonly"
              disabled
              defaultValue="This is read-only content that cannot be modified."
            />
          </div>
        </div>
      </section>

      {/* Resize Behavior */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Resize Behavior</h3>
          <p className="text-muted-foreground text-sm">
            Different resize behaviors using className overrides.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="resize-none">No Resize</Label>
            <Textarea
              id="resize-none"
              className="resize-none"
              placeholder="Cannot resize..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="resize-vertical">Vertical Only</Label>
            <Textarea
              id="resize-vertical"
              className="resize-y"
              placeholder="Resize vertically..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="resize-both">Both Directions</Label>
            <Textarea
              id="resize-both"
              className="resize"
              placeholder="Resize freely..."
            />
          </div>
        </div>
      </section>

      {/* With Character Count */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Character Counter</h3>
          <p className="text-muted-foreground text-sm">
            Textarea with character limit feedback.
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="char-count">Comment (max 280 characters)</Label>
          <CharacterCountTextarea />
        </div>
      </section>

      {/* Code Input */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Code Input</h3>
          <p className="text-muted-foreground text-sm">
            Monospace font for code or JSON input.
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="code">API Response</Label>
          <Textarea
            id="code"
            className="font-mono text-sm"
            rows={6}
            defaultValue={`{\n  "success": true,\n  "data": {\n    "fid": 3,\n    "username": "dwr"\n  }\n}`}
          />
        </div>
      </section>

      {/* Auto-growing */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Auto-growing</h3>
          <p className="text-muted-foreground text-sm">
            Uses field-sizing-content for automatic height adjustment.
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="auto-grow">Notes</Label>
          <Textarea
            id="auto-grow"
            placeholder="Start typing and this textarea will grow..."
            className="min-h-16"
          />
          <p className="text-muted-foreground text-sm">
            This textarea automatically adjusts its height based on content.
          </p>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing textarea props.
 */
export const Interactive: Story = {
  args: {
    placeholder: "Enter your text here...",
    disabled: false,
    "aria-invalid": false,
  },
};

function CharacterCountTextarea() {
  const [value, setValue] = useState("");
  const maxLength = 280;
  const remaining = maxLength - value.length;
  const isOverLimit = remaining < 0;

  return (
    <div className="space-y-2">
      <Textarea
        id="char-count"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What's on your mind?"
        aria-invalid={isOverLimit}
        className="resize-none"
        rows={4}
      />
      <p
        className={`text-sm ${
          isOverLimit
            ? "text-destructive font-medium"
            : remaining < 20
              ? "text-orange-500 font-medium"
              : "text-muted-foreground"
        }`}
      >
        {isOverLimit
          ? `${Math.abs(remaining)} characters over limit`
          : `${remaining} remaining`}
      </p>
    </div>
  );
}
