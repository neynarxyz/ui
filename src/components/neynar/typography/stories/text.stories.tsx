import type { Meta, StoryObj } from "@storybook/react";
import { CalendarIcon, ClockIcon, UserIcon } from "lucide-react";

import { Text, Caption, Overline } from "../text";
import { Title } from "../title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Text> = {
  title: "Components/Typography/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl", "2xl"],
      description: "Text size",
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
      description: "Font weight",
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
    align: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Text alignment",
    },
    transform: {
      control: "select",
      options: ["uppercase", "lowercase", "capitalize"],
      description: "Text transform",
    },
    wrap: {
      control: "select",
      options: ["pretty", "balance"],
      description:
        "Text wrapping: pretty avoids orphans, balance equalizes lines",
    },
    lineClamp: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
      description: "Multi-line truncation",
    },
    as: {
      table: { disable: true },
    },
    render: {
      table: { disable: true },
    },
    truncate: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

/**
 * Blog Post Card - A realistic scenario showing Text, Caption, and Overline
 * in a content-heavy layout typical of Farcaster social feeds.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function BlogPostList() {
      const posts = [
        {
          category: "Engineering",
          title: "Building Real-Time Feeds with Neynar",
          excerpt:
            "Learn how to build performant real-time social feeds using Neynar's streaming API. We'll cover WebSocket connections, efficient state management, and handling high-throughput data.",
          author: "Alice Chen",
          date: "Dec 28, 2024",
          readTime: "8 min read",
          featured: true,
        },
        {
          category: "Tutorial",
          title: "Authentication Patterns for Farcaster Apps",
          excerpt:
            "A comprehensive guide to implementing Sign In With Farcaster (SIWF) in your application.",
          author: "Bob Smith",
          date: "Dec 25, 2024",
          readTime: "5 min read",
          featured: false,
        },
      ];

      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Page Header */}
          <header className="space-y-2">
            <Title order={1}>Developer Blog</Title>
            <Text size="lg" color="muted">
              Tutorials, insights, and updates from the Neynar engineering team.
            </Text>
          </header>

          {/* Post Cards */}
          <div className="space-y-4">
            {posts.map((post, i) => (
              <article
                key={i}
                className="border-border bg-card rounded-lg border p-5 space-y-3"
              >
                {/* Category & Badge */}
                <div className="flex items-center justify-between">
                  <Overline color="info">{post.category}</Overline>
                  {post.featured && <Badge>Featured</Badge>}
                </div>

                {/* Title & Excerpt */}
                <div className="space-y-2">
                  <Title order={3} className="hover:underline cursor-pointer">
                    {post.title}
                  </Title>
                  <Text color="muted" lineClamp={2}>
                    {post.excerpt}
                  </Text>
                </div>

                {/* Meta Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center gap-4">
                    <Caption className="flex items-center gap-1">
                      <UserIcon className="size-3" />
                      {post.author}
                    </Caption>
                    <Caption className="flex items-center gap-1">
                      <CalendarIcon className="size-3" />
                      {post.date}
                    </Caption>
                  </div>
                  <Caption className="flex items-center gap-1">
                    <ClockIcon className="size-3" />
                    {post.readTime}
                  </Caption>
                </div>
              </article>
            ))}
          </div>

          {/* Lead Text Example */}
          <div className="border-l-4 border-primary pl-4 space-y-2">
            <Text size="lg" color="muted">
              "Neynar makes it incredibly easy to build on Farcaster. The API is
              well-designed and the documentation is excellent."
            </Text>
            <Caption>— Happy Developer</Caption>
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-4 border-t">
            <Text size="sm" color="subtle">
              Showing 2 of 24 posts
            </Text>
            <Button variant="outline" size="sm">
              Load More
            </Button>
          </div>
        </div>
      );
    }

    return <BlogPostList />;
  },
};

/**
 * Complete design system reference showing all Text variants and use cases.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Sizes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Text Sizes</h3>
          <p className="text-muted-foreground text-sm">
            Auto-scaling line-height and letter-spacing based on size.
          </p>
        </div>
        <div className="space-y-3">
          <Text size="xs">Extra small text (xs) - leading-4</Text>
          <Text size="sm">Small text (sm) - leading-5</Text>
          <Text size="base">Base text (base) - leading-6 (default)</Text>
          <Text size="lg">Large text (lg) - leading-7</Text>
          <Text size="xl">
            Extra large text (xl) - leading-7, tracking-tight
          </Text>
          <Text size="2xl">2XL text (2xl) - leading-8, tracking-tighter</Text>
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
          <Text color="default">Default - Primary body text</Text>
          <Text color="muted">Muted - Secondary text, descriptions</Text>
          <Text color="subtle">Subtle - Placeholders, hints</Text>
          <Text color="destructive">Destructive - Error messages</Text>
          <Text color="success">Success - Confirmation text</Text>
          <Text color="warning">Warning - Caution messages</Text>
          <Text color="info">Info - Informational text</Text>
        </div>
      </section>

      {/* Weights */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Font Weights</h3>
          <p className="text-muted-foreground text-sm">
            Different emphasis levels.
          </p>
        </div>
        <div className="space-y-2">
          <Text weight="normal">Normal weight (default)</Text>
          <Text weight="medium">Medium weight</Text>
          <Text weight="semibold">Semibold weight</Text>
          <Text weight="bold">Bold weight</Text>
        </div>
      </section>

      {/* Alignment */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Alignment</h3>
          <p className="text-muted-foreground text-sm">
            Text alignment options.
          </p>
        </div>
        <div className="space-y-2 max-w-md border rounded-lg p-4">
          <Text align="left">Left aligned text (default)</Text>
          <Text align="center">Center aligned text</Text>
          <Text align="right">Right aligned text</Text>
        </div>
      </section>

      {/* Transform */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Text Transform</h3>
          <p className="text-muted-foreground text-sm">
            Case transformation options.
          </p>
        </div>
        <div className="space-y-2">
          <Text transform="uppercase">Uppercase text (tracking-wider)</Text>
          <Text transform="lowercase">LOWERCASE TEXT</Text>
          <Text transform="capitalize">capitalize each word</Text>
        </div>
      </section>

      {/* Wrapping */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Text Wrapping</h3>
          <p className="text-muted-foreground text-sm">
            Control how text wraps for better typography.
          </p>
        </div>
        <div className="space-y-4 max-w-sm">
          <div>
            <Caption className="mb-1">Default wrapping:</Caption>
            <Text className="border rounded p-2">
              This is a paragraph that demonstrates the default text wrapping
              behavior in browsers.
            </Text>
          </div>
          <div>
            <Caption className="mb-1">Pretty - avoids orphans:</Caption>
            <Text wrap="pretty" className="border rounded p-2">
              This is a paragraph that demonstrates the pretty text wrapping
              which avoids orphans.
            </Text>
          </div>
          <div>
            <Caption className="mb-1">
              Balance - equalizes line lengths:
            </Caption>
            <Text wrap="balance" className="border rounded p-2">
              This is a paragraph that demonstrates balanced text wrapping for
              headlines.
            </Text>
          </div>
        </div>
      </section>

      {/* Truncation */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Line Clamping</h3>
          <p className="text-muted-foreground text-sm">
            Truncate text after a specified number of lines.
          </p>
        </div>
        <div className="space-y-4 max-w-sm">
          <div>
            <Caption className="mb-1">Single line (lineClamp=1):</Caption>
            <Text lineClamp={1} className="border rounded p-2">
              This is a very long text that will be truncated with an ellipsis
              when it overflows the container width.
            </Text>
          </div>
          <div>
            <Caption className="mb-1">Two lines (lineClamp=2):</Caption>
            <Text lineClamp={2} className="border rounded p-2">
              This is a very long text that will be truncated after two lines.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
          <div>
            <Caption className="mb-1">Line clamp (3 lines):</Caption>
            <Text lineClamp={3} className="border rounded p-2">
              This is a very long text that will be truncated after three lines.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </Text>
          </div>
        </div>
      </section>

      {/* Convenience Aliases */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Convenience Components</h3>
          <p className="text-muted-foreground text-sm">
            Pre-configured Text variants for common patterns.
          </p>
        </div>
        <div className="space-y-4">
          <div className="border rounded-lg p-4 space-y-3">
            <div>
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                Caption
              </code>
              <span className="text-muted-foreground text-sm ml-2">
                = Text size="xs" color="muted"
              </span>
            </div>
            <div className="space-y-1">
              <Caption>Default caption - timestamps, metadata</Caption>
              <Caption color="subtle">Caption with subtle color</Caption>
              <Caption color="default">Caption with default color</Caption>
            </div>
          </div>

          <div className="border rounded-lg p-4 space-y-3">
            <div>
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                Overline
              </code>
              <span className="text-muted-foreground text-sm ml-2">
                = Text size="xs" transform="uppercase"
              </span>
            </div>
            <div className="space-y-2">
              <div>
                <Overline>Category Label</Overline>
                <Title order={4}>Article Title Here</Title>
              </div>
              <div>
                <Overline color="info">Featured</Overline>
                <Title order={4}>Another Article</Title>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Paragraph Pattern */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Lead Paragraph Pattern</h3>
          <p className="text-muted-foreground text-sm">
            Use size="lg" color="muted" for introductory text.
          </p>
        </div>
        <div className="max-w-prose space-y-4">
          <Text size="lg" color="muted">
            This is a lead paragraph. It introduces the content that follows
            with slightly larger, muted text that draws attention without
            overwhelming.
          </Text>
          <Text>
            Regular paragraph text follows. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Text>
        </div>
      </section>

      {/* Size × Color Matrix */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Size × Color Matrix</h3>
          <p className="text-muted-foreground text-sm">
            Common combinations reference.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-muted-foreground border-b text-left text-sm">
                <th className="pb-3 pr-4 font-medium">Size</th>
                <th className="pb-3 pr-4 font-medium">Default</th>
                <th className="pb-3 pr-4 font-medium">Muted</th>
                <th className="pb-3 pr-4 font-medium">Subtle</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {(["xs", "sm", "base", "lg"] as const).map((size) => (
                <tr key={size} className="border-b last:border-0">
                  <td className="py-3 pr-4 font-mono text-sm">{size}</td>
                  <td className="py-3 pr-4">
                    <Text size={size} color="default">
                      Sample text
                    </Text>
                  </td>
                  <td className="py-3 pr-4">
                    <Text size={size} color="muted">
                      Sample text
                    </Text>
                  </td>
                  <td className="py-3 pr-4">
                    <Text size={size} color="subtle">
                      Sample text
                    </Text>
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
 * Interactive playground for testing Text props.
 */
export const Interactive: Story = {
  args: {
    children:
      "This is a paragraph of text with comfortable line height for reading.",
    size: "base",
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
