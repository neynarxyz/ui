import type { Meta, StoryObj } from "@storybook/react";
import { CopyIcon, CheckIcon } from "lucide-react";
import { useState } from "react";

import { Code } from "../code";
import { Text, Caption } from "../text";
import { Title } from "../title";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Code> = {
  title: "Components/Typography/Code",
  component: Code,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "select",
      options: [
        "default",
        "muted",
        "subtle",
        "destructive",
        "success",
        "warning",
        "info",
      ],
      description: "Text color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

/**
 * API Documentation - A realistic scenario showing inline Code components
 * in technical documentation typical of developer portals.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function APIDocumentation() {
      const [copied, setCopied] = useState(false);

      const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };

      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Header */}
          <header className="space-y-2">
            <Title order={1}>Quick Start</Title>
            <Text size="lg" color="muted">
              Get started with the Neynar API in minutes.
            </Text>
          </header>

          {/* Installation */}
          <section className="space-y-3">
            <Title order={2}>Installation</Title>
            <Text>
              Install the SDK using <Code>npm install @neynar/nodejs-sdk</Code>{" "}
              or <Code>yarn add @neynar/nodejs-sdk</Code>.
            </Text>
          </section>

          {/* Configuration */}
          <section className="space-y-3">
            <Title order={2}>Configuration</Title>
            <Text>
              Initialize the client with your API key. You can find your key in
              the <Code>Settings → API Keys</Code> section of the dashboard.
            </Text>
            <div className="bg-muted/50 border rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <Caption>JavaScript</Caption>
                <Button variant="ghost" size="icon-xs" onClick={handleCopy}>
                  {copied ? (
                    <CheckIcon className="size-3" />
                  ) : (
                    <CopyIcon className="size-3" />
                  )}
                </Button>
              </div>
              <Text as="pre" size="sm" className="font-mono">
                {`const client = new NeynarAPIClient({
  apiKey: process.env.NEYNAR_API_KEY
});`}
              </Text>
            </div>
          </section>

          {/* Environment Variables */}
          <section className="space-y-3">
            <Title order={2}>Environment Variables</Title>
            <Text>
              Set up your environment by adding <Code>NEYNAR_API_KEY</Code> to
              your <Code>.env</Code> file. Never commit this file to version
              control.
            </Text>
            <div className="bg-destructive/10 border-destructive/20 border rounded-lg p-3">
              <Text size="sm" color="destructive">
                Error: Missing required environment variable{" "}
                <Code color="destructive">NEYNAR_API_KEY</Code>
              </Text>
            </div>
          </section>

          {/* Common Methods */}
          <section className="space-y-3">
            <Title order={2}>Common Methods</Title>
            <Text>The most commonly used methods are:</Text>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <Text as="span">
                  <Code>client.fetchUser(fid)</Code> - Fetch a user by FID
                </Text>
              </li>
              <li>
                <Text as="span">
                  <Code>client.publishCast(text)</Code> - Publish a new cast
                </Text>
              </li>
              <li>
                <Text as="span">
                  <Code>client.getFeed(options)</Code> - Get feed items
                </Text>
              </li>
            </ul>
          </section>

          {/* Status Codes */}
          <section className="space-y-3">
            <Title order={2}>Response Codes</Title>
            <div className="space-y-2">
              <Text>
                <Code color="success">200</Code> - Request successful
              </Text>
              <Text>
                <Code color="warning">429</Code> - Rate limit exceeded
              </Text>
              <Text>
                <Code color="destructive">500</Code> - Internal server error
              </Text>
            </div>
          </section>
        </div>
      );
    }

    return <APIDocumentation />;
  },
};

/**
 * Complete design system reference showing all Code variants and use cases.
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
            Inline code with monospace font and subtle background.
          </p>
        </div>
        <div className="space-y-3">
          <Text>
            Run <Code>npm install</Code> to install dependencies.
          </Text>
          <Text>
            The <Code>useState</Code> hook returns a stateful value and a
            function to update it.
          </Text>
          <Text>
            Set <Code>NODE_ENV=production</Code> before deploying.
          </Text>
        </div>
      </section>

      {/* Colors */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Colors</h3>
          <p className="text-muted-foreground text-sm">
            Semantic colors for different contexts.
          </p>
        </div>
        <div className="space-y-2">
          <div>
            <Code color="default">default</Code> - Standard inline code
          </div>
          <div>
            <Code color="muted">muted</Code> - Less emphasis
          </div>
          <div>
            <Code color="subtle">subtle</Code> - Minimal emphasis
          </div>
          <div>
            <Code color="destructive">destructive</Code> - Errors, invalid
            values
          </div>
          <div>
            <Code color="success">success</Code> - Valid values, success states
          </div>
          <div>
            <Code color="warning">warning</Code> - Warnings, deprecated
          </div>
          <div>
            <Code color="info">info</Code> - Informational, tips
          </div>
        </div>
      </section>

      {/* Status Codes Pattern */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">HTTP Status Codes</h3>
          <p className="text-muted-foreground text-sm">
            Common pattern for API documentation.
          </p>
        </div>
        <div className="border rounded-lg divide-y">
          <div className="p-3 flex items-center gap-3">
            <Code color="success">200</Code>
            <Text size="sm">OK - Request successful</Text>
          </div>
          <div className="p-3 flex items-center gap-3">
            <Code color="success">201</Code>
            <Text size="sm">Created - Resource created successfully</Text>
          </div>
          <div className="p-3 flex items-center gap-3">
            <Code color="warning">400</Code>
            <Text size="sm">Bad Request - Invalid parameters</Text>
          </div>
          <div className="p-3 flex items-center gap-3">
            <Code color="destructive">401</Code>
            <Text size="sm">Unauthorized - Authentication required</Text>
          </div>
          <div className="p-3 flex items-center gap-3">
            <Code color="destructive">404</Code>
            <Text size="sm">Not Found - Resource doesn't exist</Text>
          </div>
          <div className="p-3 flex items-center gap-3">
            <Code color="warning">429</Code>
            <Text size="sm">Too Many Requests - Rate limit exceeded</Text>
          </div>
        </div>
      </section>

      {/* Command Sequences */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Command Sequences</h3>
          <p className="text-muted-foreground text-sm">
            Multiple inline code elements for step-by-step instructions.
          </p>
        </div>
        <div className="space-y-2">
          <Text size="sm" color="muted">
            Clone and set up the project:
          </Text>
          <div className="flex flex-wrap gap-2">
            <Code>git clone repo</Code>
            <Code>cd repo</Code>
            <Code>npm install</Code>
            <Code>npm run dev</Code>
          </div>
        </div>
      </section>

      {/* Error Messages */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Error Messages</h3>
          <p className="text-muted-foreground text-sm">
            Using Code within error contexts.
          </p>
        </div>
        <div className="space-y-3">
          <div className="bg-destructive/10 border-destructive/20 border rounded-lg p-3">
            <Text size="sm" color="destructive">
              TypeError: Cannot read property{" "}
              <Code color="destructive">'map'</Code> of undefined
            </Text>
          </div>
          <div className="bg-warning/10 border-warning/20 border rounded-lg p-3">
            <Text size="sm" color="warning">
              Warning: <Code color="warning">componentWillMount</Code> has been
              renamed and is not recommended for use.
            </Text>
          </div>
          <div className="bg-success/10 border-success/20 border rounded-lg p-3">
            <Text size="sm" color="success">
              Successfully deployed to <Code color="success">production</Code>
            </Text>
          </div>
        </div>
      </section>

      {/* Color Reference */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Color Reference</h3>
          <p className="text-muted-foreground text-sm">
            All color variants at a glance.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-muted-foreground border-b text-left text-sm">
                <th className="pb-3 pr-4 font-medium">Color</th>
                <th className="pb-3 pr-4 font-medium">Example</th>
                <th className="pb-3 pr-4 font-medium">Use Case</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">default</td>
                <td className="py-3 pr-4">
                  <Code color="default">npm install</Code>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Standard inline code
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">muted</td>
                <td className="py-3 pr-4">
                  <Code color="muted">optional</Code>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Secondary emphasis
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">destructive</td>
                <td className="py-3 pr-4">
                  <Code color="destructive">error</Code>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Errors, invalid values
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">success</td>
                <td className="py-3 pr-4">
                  <Code color="success">200</Code>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Success states
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">warning</td>
                <td className="py-3 pr-4">
                  <Code color="warning">deprecated</Code>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Warnings, caution
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-sm">info</td>
                <td className="py-3 pr-4">
                  <Code color="info">tip</Code>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Tips, hints
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
 * Interactive playground for testing Code props.
 */
export const Interactive: Story = {
  args: {
    children: "const greeting = 'Hello, World!'",
    color: "default",
  },
};
