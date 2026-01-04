import type { Meta, StoryObj } from "@storybook/react";
import { QuoteIcon, StarIcon } from "lucide-react";

import { Blockquote } from "../blockquote";
import { Text, Caption, Overline } from "../text";
import { Title } from "../title";
import { Badge } from "@/components/ui/badge";

const meta: Meta<typeof Blockquote> = {
  title: "Components/Typography/Blockquote",
  component: Blockquote,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["default", "muted", "subtle"],
      description: "Text color (limited to neutral colors)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

/**
 * Testimonials Section - A realistic scenario showing Blockquote components
 * in a testimonials/reviews layout typical of landing pages.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    const testimonials = [
      {
        quote:
          "Neynar's API is incredibly well-designed. We went from zero to a production Farcaster app in less than a week. The documentation is excellent and the team is super responsive.",
        author: "Sarah Chen",
        role: "CTO at FarcasterApp",
        featured: true,
      },
      {
        quote:
          "The real-time feed API changed everything for us. Our engagement metrics improved dramatically once we could show users fresh content instantly.",
        author: "Mike Johnson",
        role: "Lead Developer",
        featured: false,
      },
      {
        quote:
          "Best developer experience I've had with any blockchain API. Just works.",
        author: "Alex Rivera",
        role: "Indie Developer",
        featured: false,
      },
    ];

    return (
      <div className="w-full max-w-3xl space-y-8">
        {/* Header */}
        <header className="text-center space-y-2">
          <Overline color="info">Testimonials</Overline>
          <Title order={1}>What Developers Say</Title>
          <Text size="lg" color="muted" className="max-w-xl mx-auto">
            Join thousands of developers building the next generation of social
            apps on Farcaster.
          </Text>
        </header>

        {/* Featured Testimonial */}
        {testimonials
          .filter((t) => t.featured)
          .map((t, i) => (
            <div
              key={i}
              className="border-border bg-card rounded-lg border p-6 space-y-4"
            >
              <div className="flex items-center gap-2">
                <Badge>
                  <StarIcon data-icon="inline-start" />
                  Featured
                </Badge>
              </div>
              <Blockquote className="text-lg">{t.quote}</Blockquote>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-full p-2">
                  <QuoteIcon className="size-4" />
                </div>
                <div>
                  <Text weight="semibold">{t.author}</Text>
                  <Caption>{t.role}</Caption>
                </div>
              </div>
            </div>
          ))}

        {/* Other Testimonials */}
        <div className="grid md:grid-cols-2 gap-4">
          {testimonials
            .filter((t) => !t.featured)
            .map((t, i) => (
              <div
                key={i}
                className="border-border bg-card rounded-lg border p-5 space-y-3"
              >
                <Blockquote color="muted">{t.quote}</Blockquote>
                <div>
                  <Text size="sm" weight="medium">
                    {t.author}
                  </Text>
                  <Caption>{t.role}</Caption>
                </div>
              </div>
            ))}
        </div>

        {/* Documentation Quote */}
        <section className="space-y-4">
          <Title order={2}>From Our Documentation</Title>
          <Text>
            Our guiding philosophy has always been to make building on Farcaster
            as simple as possible:
          </Text>
          <Blockquote>
            The best APIs are the ones you don't have to think about. They
            should just work, with sensible defaults and clear escape hatches
            when you need them.
          </Blockquote>
          <Caption>— Neynar Engineering Team</Caption>
        </section>
      </div>
    );
  },
};

/**
 * Complete design system reference showing all Blockquote variants and use cases.
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
            Blockquote with left border accent and italic text.
          </p>
        </div>
        <Blockquote>
          The best way to predict the future is to invent it.
        </Blockquote>
      </section>

      {/* Colors */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Colors</h3>
          <p className="text-muted-foreground text-sm">
            Limited to neutral colors for semantic appropriateness.
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <Caption className="mb-2">Default - Primary emphasis</Caption>
            <Blockquote color="default">
              This is a blockquote with default color for primary emphasis.
            </Blockquote>
          </div>
          <div>
            <Caption className="mb-2">Muted - Secondary emphasis</Caption>
            <Blockquote color="muted">
              This is a blockquote with muted color for secondary emphasis.
            </Blockquote>
          </div>
          <div>
            <Caption className="mb-2">Subtle - Tertiary emphasis</Caption>
            <Blockquote color="subtle">
              This is a blockquote with subtle color for minimal emphasis.
            </Blockquote>
          </div>
        </div>
      </section>

      {/* With Attribution */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Attribution</h3>
          <p className="text-muted-foreground text-sm">
            Common pattern using figure and figcaption.
          </p>
        </div>
        <figure className="space-y-2">
          <Blockquote>
            In the beginning the Universe was created. This has made a lot of
            people very angry and been widely regarded as a bad move.
          </Blockquote>
          <figcaption>
            <Caption>
              — Douglas Adams, The Restaurant at the End of the Universe
            </Caption>
          </figcaption>
        </figure>
      </section>

      {/* Long Quotes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Long Quotes</h3>
          <p className="text-muted-foreground text-sm">
            Multi-paragraph quoted content.
          </p>
        </div>
        <Blockquote className="space-y-4">
          <Text as="span" className="block">
            Simplicity is the ultimate sophistication. It takes a lot of hard
            work to make something simple, to truly understand the underlying
            challenges and come up with elegant solutions.
          </Text>
          <Text as="span" className="block">
            Most people make the mistake of thinking design is what it looks
            like. People think it's this veneer — that the designers are handed
            this box and told, "Make it look good!" That's not what we think
            design is.
          </Text>
        </Blockquote>
      </section>

      {/* Nested Content */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Nested Content</h3>
          <p className="text-muted-foreground text-sm">
            Blockquotes can contain structured content.
          </p>
        </div>
        <Blockquote>
          <Text weight="semibold" className="mb-2 not-italic">
            On API Design:
          </Text>
          <Text className="not-italic">
            A good API should be simple to use correctly and hard to use
            incorrectly. It should have sensible defaults, clear documentation,
            and predictable behavior.
          </Text>
        </Blockquote>
      </section>

      {/* In Article Context */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">In Article Context</h3>
          <p className="text-muted-foreground text-sm">
            How blockquotes typically appear in long-form content.
          </p>
        </div>
        <article className="max-w-prose space-y-4 border rounded-lg p-6">
          <Title order={3}>The Importance of Good Design</Title>
          <Text>
            The importance of good design cannot be overstated. It affects how
            users perceive and interact with our products every day.
          </Text>
          <Blockquote color="muted">
            Design is not just what it looks like and feels like. Design is how
            it works.
          </Blockquote>
          <Text>
            This philosophy has guided countless products and experiences that
            we use every day. When design is done right, it becomes invisible —
            users simply accomplish their goals without friction.
          </Text>
          <Caption>Published December 2024</Caption>
        </article>
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
                  <Blockquote color="default" className="py-1">
                    Primary quote
                  </Blockquote>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Featured testimonials, key quotes
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">muted</td>
                <td className="py-3 pr-4">
                  <Blockquote color="muted" className="py-1">
                    Secondary quote
                  </Blockquote>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Supporting quotes, article excerpts
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-sm">subtle</td>
                <td className="py-3 pr-4">
                  <Blockquote color="subtle" className="py-1">
                    Subtle quote
                  </Blockquote>
                </td>
                <td className="text-muted-foreground py-3 pr-4 text-sm">
                  Background context, less emphasis
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
 * Interactive playground for testing Blockquote props.
 */
export const Interactive: Story = {
  args: {
    children: "The only way to do great work is to love what you do.",
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
