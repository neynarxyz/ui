import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "../title";
import { Text, Caption } from "../text";
import { Badge } from "@/components/ui/badge";

const meta: Meta<typeof Title> = {
  title: "Components/Typography/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    order: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
      description: "Semantic heading level - renders h1-h6",
    },
    size: {
      control: "select",
      options: [
        "xs",
        "sm",
        "base",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
      ],
      description: "Visual size override",
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
      description: "Font weight override",
    },
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
    as: {
      table: { disable: true },
    },
    render: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

/**
 * Documentation Page - A realistic scenario showing Title components
 * in a documentation layout typical of developer portals.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function DocumentationPage() {
      return (
        <div className="w-full max-w-3xl space-y-8">
          {/* Page Header */}
          <header className="border-b pb-6">
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="info">API Reference</Badge>
              <Badge variant="secondary">v2.0</Badge>
            </div>
            <Title order={1}>Getting Started with Neynar</Title>
            <Text size="lg" color="muted" className="mt-3">
              Everything you need to start building on Farcaster with the Neynar
              API.
            </Text>
          </header>

          {/* Section */}
          <section className="space-y-4">
            <Title order={2}>Authentication</Title>
            <Text>
              All API requests require an API key. You can create and manage
              your keys in the Neynar Dashboard under the API Keys section.
            </Text>

            <div className="border-border bg-card rounded-lg border p-4 space-y-3">
              <Title order={3}>API Key Types</Title>
              <Text size="sm" color="muted">
                Choose the right key type for your use case.
              </Text>

              <div className="space-y-2">
                <Title order={4}>Production Keys</Title>
                <Text size="sm">
                  Use production keys for live applications with higher rate
                  limits.
                </Text>
              </div>

              <div className="space-y-2">
                <Title order={4}>Development Keys</Title>
                <Text size="sm">
                  Use development keys for testing with relaxed validation.
                </Text>
              </div>
            </div>
          </section>

          {/* Another Section */}
          <section className="space-y-4">
            <Title order={2}>Rate Limits</Title>
            <Text>
              Rate limits vary by plan and endpoint. Exceeding limits will
              result in 429 responses.
            </Text>

            <div className="bg-destructive/10 border-destructive/20 border rounded-lg p-4">
              <Title order={5} color="destructive">
                Important
              </Title>
              <Text size="sm" color="muted">
                Production keys that exceed rate limits may be temporarily
                suspended.
              </Text>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t pt-6">
            <Title order={6} color="muted">
              Related Resources
            </Title>
            <div className="flex gap-4 mt-2">
              <Text size="sm" color="info" className="underline cursor-pointer">
                API Reference
              </Text>
              <Text size="sm" color="info" className="underline cursor-pointer">
                SDK Documentation
              </Text>
              <Text size="sm" color="info" className="underline cursor-pointer">
                Examples
              </Text>
            </div>
          </footer>
        </div>
      );
    }

    return <DocumentationPage />;
  },
};

/**
 * Complete design system reference showing all Title variants, orders, and states.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Heading Orders */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Heading Orders</h3>
          <p className="text-muted-foreground text-sm">
            Semantic heading levels h1-h6 with built-in responsive sizing.
          </p>
        </div>
        <div className="space-y-3">
          <Title order={1}>Order 1 - Page Title (h1)</Title>
          <Title order={2}>Order 2 - Section (h2)</Title>
          <Title order={3}>Order 3 - Subsection (h3)</Title>
          <Title order={4}>Order 4 - Card Title (h4)</Title>
          <Title order={5}>Order 5 - Small Heading (h5)</Title>
          <Title order={6}>Order 6 - Smallest Heading (h6)</Title>
        </div>
      </section>

      {/* Size Override */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Size Override</h3>
          <p className="text-muted-foreground text-sm">
            Visual size can be independent of semantic level.
          </p>
        </div>
        <div className="space-y-3">
          <Title order={1} size="base">
            h1 with base size (visually small)
          </Title>
          <Title order={6} size="4xl">
            h6 with 4xl size (visually large)
          </Title>
          <Title order={2} size="xl">
            h2 with xl size
          </Title>
        </div>
      </section>

      {/* Colors */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Colors</h3>
          <p className="text-muted-foreground text-sm">
            Color variants for different contexts and emphasis.
          </p>
        </div>
        <div className="space-y-2">
          <Title order={3} color="default">
            Default - Primary text
          </Title>
          <Title order={3} color="muted">
            Muted - Secondary emphasis
          </Title>
          <Title order={3} color="subtle">
            Subtle - Tertiary emphasis
          </Title>
          <Title order={3} color="destructive">
            Destructive - Errors
          </Title>
          <Title order={3} color="success">
            Success - Positive
          </Title>
          <Title order={3} color="warning">
            Warning - Caution
          </Title>
          <Title order={3} color="info">
            Info - Informational
          </Title>
        </div>
      </section>

      {/* Weights */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Font Weights</h3>
          <p className="text-muted-foreground text-sm">
            Override the default weight for specific styling needs.
          </p>
        </div>
        <div className="space-y-2">
          <Title order={3} weight="normal">
            Normal weight
          </Title>
          <Title order={3} weight="medium">
            Medium weight
          </Title>
          <Title order={3} weight="semibold">
            Semibold weight (default for h2-h4)
          </Title>
          <Title order={3} weight="bold">
            Bold weight (default for h1)
          </Title>
        </div>
      </section>

      {/* Responsive Demo */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Responsive Scaling</h3>
          <p className="text-muted-foreground text-sm">
            Resize browser to see built-in responsive sizing at md and lg
            breakpoints.
          </p>
        </div>
        <div className="border-border bg-muted/30 rounded-lg border p-6">
          <Title order={1}>This heading scales responsively</Title>
          <Caption className="mt-2">
            text-3xl → md:text-4xl → lg:text-5xl
          </Caption>
        </div>
      </section>

      {/* Order × Color Matrix */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Order × Color Matrix</h3>
          <p className="text-muted-foreground text-sm">
            Common combinations reference.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-muted-foreground border-b text-left text-sm">
                <th className="pb-3 pr-4 font-medium">Order</th>
                <th className="pb-3 pr-4 font-medium">Default</th>
                <th className="pb-3 pr-4 font-medium">Muted</th>
                <th className="pb-3 pr-4 font-medium">Subtle</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {([1, 2, 3, 4] as const).map((order) => (
                <tr key={order} className="border-b last:border-0">
                  <td className="py-3 pr-4 font-mono text-sm">order={order}</td>
                  <td className="py-3 pr-4">
                    <Title order={order} color="default">
                      Title
                    </Title>
                  </td>
                  <td className="py-3 pr-4">
                    <Title order={order} color="muted">
                      Title
                    </Title>
                  </td>
                  <td className="py-3 pr-4">
                    <Title order={order} color="subtle">
                      Title
                    </Title>
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
 * Large multi-line titles demonstrating proper line-height for 5xl and 6xl sizes.
 * These sizes use leading-[1.1] to prevent text overlap on wrapped lines.
 */
export const LargeMultiLine: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-2xl space-y-8">
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">
            Large Sizes with Multi-line Text
          </h3>
          <p className="text-muted-foreground text-sm">
            5xl and 6xl sizes with proper line-height to prevent text overlap.
          </p>
        </div>
        <div className="space-y-6 border rounded-lg p-6">
          <Title order={1} size="6xl">
            Building the Future of Social Networks Together
          </Title>
          <Title order={1} size="5xl">
            Decentralized Identity for the Next Generation of Apps
          </Title>
          <Title order={1} size="4xl">
            Create, Connect, and Collaborate on Farcaster
          </Title>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing Title props.
 */
export const Interactive: Story = {
  args: {
    children: "This is a title",
    order: 2,
    color: "default",
  },
  decorators: [
    (Story) => (
      <div className="w-[80vw]">
        <Story />
      </div>
    ),
  ],
};
