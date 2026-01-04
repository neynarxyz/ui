import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { CodeIcon, KeyIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Layout & Structure/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  args: {
    onValueChange: fn(),
  },
  argTypes: {
    defaultValue: {
      control: "text",
      description:
        "Default open item(s) - string for single, array for multiple",
    },
    disabled: {
      control: "boolean",
      description: "Disable all accordion items",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

/**
 * Neynar Dashboard - A realistic scenario showing accordions in the context
 * of FAQ sections, API documentation, and feature explanations.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function DashboardAccordions() {
      return (
        <div className="w-full max-w-3xl space-y-12">
          {/* Developer FAQ */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-sm">
                Common questions about using the Neynar API
              </p>
            </div>

            <Accordion className="w-full" defaultValue={["item-1"]}>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How do I get started with the Neynar API?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Getting started is easy! First, sign up for a free account
                    at <a href="#signup">neynar.com</a>. Once logged in,
                    navigate to your dashboard to generate your API key. You can
                    then make your first API call using our REST endpoints or
                    SDKs available for JavaScript, Python, and Go.
                  </p>
                  <p>
                    Check out our <a href="#quickstart">Quickstart Guide</a> for
                    a step-by-step tutorial.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What are the rate limits for API requests?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Rate limits vary by plan tier. The free tier includes 1,000
                    requests per day, while our Pro plan offers 100,000 requests
                    per day. Rate limits reset at midnight UTC.
                  </p>
                  <p>
                    You can monitor your current usage in the{" "}
                    <a href="#usage">Usage Dashboard</a>. If you need higher
                    limits, consider upgrading to our Enterprise plan with
                    custom rate limits.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How do I authenticate API requests?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    All API requests require authentication using an API key.
                    Include your key in the request headers as follows:
                  </p>
                  <p className="bg-muted rounded-md p-3 font-mono text-sm">
                    Authorization: Bearer YOUR_API_KEY
                  </p>
                  <p>
                    Never expose your API key in client-side code. Always make
                    requests from your backend server to keep your credentials
                    secure.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I use webhooks for real-time notifications?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes! Webhooks are available on all paid plans. Configure
                    webhook endpoints in your{" "}
                    <a href="#webhooks">Webhook Settings</a> to receive
                    real-time notifications for events like new casts,
                    reactions, follows, and more.
                  </p>
                  <p>
                    Webhooks support custom filters, retry logic, and signature
                    verification for security. See our{" "}
                    <a href="#webhook-docs">Webhook Documentation</a> for
                    implementation details.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What SDKs and libraries are available?
                </AccordionTrigger>
                <AccordionContent>
                  <p>We offer official SDKs for multiple languages:</p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>
                      <strong>JavaScript/TypeScript</strong> - Full-featured SDK
                      with React hooks
                    </li>
                    <li>
                      <strong>Python</strong> - Async support and Pandas
                      integration
                    </li>
                    <li>
                      <strong>Go</strong> - Lightweight and performant
                    </li>
                    <li>
                      <strong>Ruby</strong> - Rails-friendly integration
                    </li>
                  </ul>
                  <p>
                    All SDKs are open source and available on{" "}
                    <a href="#github">GitHub</a>. Community SDKs are also
                    available for other languages.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* API Features */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">API Features</h2>
              <p className="text-muted-foreground text-sm">
                Learn about key capabilities of the Neynar API
              </p>
            </div>

            <Accordion className="w-full">
              <AccordionItem value="feature-1">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary rounded-md p-1.5">
                      <ZapIcon className="size-4" />
                    </div>
                    <span>Real-time Feed Updates</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Access real-time Farcaster feeds with sub-second latency.
                    Our infrastructure processes millions of casts daily,
                    providing instant access to the latest content from any
                    user, channel, or topic.
                  </p>
                  <p>
                    Use our Feed API endpoints to build dynamic social
                    experiences with automatic pagination and filtering options.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="feature-2">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary rounded-md p-1.5">
                      <ShieldCheckIcon className="size-4" />
                    </div>
                    <span>Secure Authentication</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Implement Sign-In with Farcaster (SIWF) to authenticate
                    users securely. Our authentication flow follows industry
                    best practices with OAuth 2.0 compatibility.
                  </p>
                  <p>
                    Support for wallet-based authentication, QR code login, and
                    deep linking for mobile apps. Complete user profile data
                    included with every authentication.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="feature-3">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary rounded-md p-1.5">
                      <CodeIcon className="size-4" />
                    </div>
                    <span>Developer Tools</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Access comprehensive developer tools including API
                    playground, request/response inspector, and interactive
                    documentation. Test endpoints directly from your browser
                    without writing code.
                  </p>
                  <p>
                    Integrated debugging tools help you troubleshoot issues
                    quickly with detailed error messages and request traces.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="feature-4">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary rounded-md p-1.5">
                      <KeyIcon className="size-4" />
                    </div>
                    <span>API Key Management</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Create multiple API keys for different environments
                    (development, staging, production). Each key can have custom
                    rate limits and permissions.
                  </p>
                  <p>
                    Rotate keys without downtime, monitor usage per key, and
                    revoke access instantly if credentials are compromised.
                    Audit logs track all key-related activities.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Troubleshooting */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Troubleshooting</h2>
              <p className="text-muted-foreground text-sm">
                Common issues and how to resolve them
              </p>
            </div>

            <Accordion className="w-full">
              <AccordionItem value="error-1">
                <AccordionTrigger>
                  Error: "Invalid API Key" - What does this mean?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    This error occurs when your API key is missing, malformed,
                    or has been revoked. Common causes include:
                  </p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>
                      Forgetting to include the "Bearer" prefix in the header
                    </li>
                    <li>Using an expired or regenerated key</li>
                    <li>Copy-paste errors causing whitespace or truncation</li>
                  </ul>
                  <p>
                    Double-check your API key in the dashboard and ensure it's
                    correctly formatted in your request headers.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="error-2">
                <AccordionTrigger>
                  Why am I getting rate limited?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Rate limiting protects our infrastructure and ensures fair
                    usage. You'll receive a 429 status code when limits are
                    exceeded.
                  </p>
                  <p>
                    Solutions: Implement exponential backoff, cache responses
                    where possible, upgrade to a higher tier plan, or batch
                    multiple requests into single calls using our bulk
                    endpoints.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="error-3">
                <AccordionTrigger>
                  How do I handle webhook failures?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Our webhook system automatically retries failed deliveries
                    with exponential backoff. If your endpoint is consistently
                    failing:
                  </p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Verify your endpoint is publicly accessible</li>
                    <li>Check that you're returning a 200 status code</li>
                    <li>Ensure response time is under 5 seconds</li>
                    <li>
                      Review webhook logs in your dashboard for error details
                    </li>
                  </ul>
                  <p>
                    Consider implementing a queue system for processing webhook
                    events asynchronously.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      );
    }

    return <DashboardAccordions />;
  },
};

/**
 * Complete design system reference showing all accordion variants, states, and compositions.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-12">
      {/* Single Selection (Default) */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Single Selection Mode</h3>
          <p className="text-muted-foreground text-sm">
            Only one item can be expanded at a time. Opening a new item closes
            the previous one.
          </p>
        </div>
        <Accordion className="w-full" defaultValue={["option-1"]}>
          <AccordionItem value="option-1">
            <AccordionTrigger>First Item</AccordionTrigger>
            <AccordionContent>
              This is the content of the first item. Opening another item will
              automatically close this one.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="option-2">
            <AccordionTrigger>Second Item</AccordionTrigger>
            <AccordionContent>
              This is the content of the second item. Perfect for FAQs where you
              want users to focus on one answer at a time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="option-3">
            <AccordionTrigger>Third Item</AccordionTrigger>
            <AccordionContent>
              This is the content of the third item. Single selection mode keeps
              the interface clean and focused.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Multiple Selection */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Multiple Selection Mode</h3>
          <p className="text-muted-foreground text-sm">
            Multiple items can be expanded simultaneously. Pass an array to
            defaultValue.
          </p>
        </div>
        <Accordion className="w-full" defaultValue={["multi-1", "multi-2"]}>
          <AccordionItem value="multi-1">
            <AccordionTrigger>First Item (Open by Default)</AccordionTrigger>
            <AccordionContent>
              Multiple items can be open at the same time. This is useful for
              documentation or settings where users may need to reference
              multiple sections.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="multi-2">
            <AccordionTrigger>Second Item (Also Open)</AccordionTrigger>
            <AccordionContent>
              Both this item and the first item are open by default because we
              passed an array with both values to defaultValue.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="multi-3">
            <AccordionTrigger>Third Item (Closed)</AccordionTrigger>
            <AccordionContent>
              This item starts closed but can be opened without affecting the
              other open items.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Disabled State */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Disabled State</h3>
          <p className="text-muted-foreground text-sm">
            Entire accordion or individual items can be disabled.
          </p>
        </div>
        <Accordion className="w-full">
          <AccordionItem value="active-1">
            <AccordionTrigger>Active Item</AccordionTrigger>
            <AccordionContent>
              This item is active and can be toggled normally.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="disabled-1" disabled>
            <AccordionTrigger>Disabled Item</AccordionTrigger>
            <AccordionContent>
              This content cannot be accessed because the item is disabled.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="active-2">
            <AccordionTrigger>Another Active Item</AccordionTrigger>
            <AccordionContent>
              This item is also active and works normally.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* With Icons and Complex Content */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Icons and Rich Content</h3>
          <p className="text-muted-foreground text-sm">
            Triggers can include icons and content can contain formatted text,
            lists, and links.
          </p>
        </div>
        <Accordion className="w-full">
          <AccordionItem value="rich-1">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-md p-1.5">
                  <ZapIcon className="size-4" />
                </div>
                <span>Performance Optimization</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Our API is optimized for high performance with global CDN
                distribution and intelligent caching.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Average response time under 100ms</li>
                <li>99.9% uptime SLA on Enterprise plans</li>
                <li>Auto-scaling infrastructure</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rich-2">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-md p-1.5">
                  <ShieldCheckIcon className="size-4" />
                </div>
                <span>Security Features</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Enterprise-grade security with SOC 2 compliance and advanced
                threat protection.
              </p>
              <p>
                Features include: API key rotation, IP allowlisting, webhook
                signature verification, and comprehensive audit logs. Learn more
                in our <a href="#security">security documentation</a>.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rich-3">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-md p-1.5">
                  <CodeIcon className="size-4" />
                </div>
                <span>Developer Experience</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Built by developers, for developers. Comprehensive
                documentation, interactive examples, and dedicated support.
              </p>
              <p className="bg-muted rounded-md p-3 font-mono text-sm">
                npm install @neynar/nodejs-sdk
              </p>
              <p>Get started in minutes with our SDKs and starter templates.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Nested Accordions */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Nested Accordions</h3>
          <p className="text-muted-foreground text-sm">
            Accordions can be nested for hierarchical content organization.
          </p>
        </div>
        <Accordion className="w-full">
          <AccordionItem value="parent-1">
            <AccordionTrigger>API Endpoints</AccordionTrigger>
            <AccordionContent>
              <p className="mb-3">Explore our comprehensive API endpoints:</p>
              <Accordion className="w-full">
                <AccordionItem value="child-1-1">
                  <AccordionTrigger>User Endpoints</AccordionTrigger>
                  <AccordionContent>
                    Get user profiles, followers, following lists, and user
                    activity. Supports batch operations and filtering.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="child-1-2">
                  <AccordionTrigger>Cast Endpoints</AccordionTrigger>
                  <AccordionContent>
                    Fetch, create, and manage casts. Includes reactions,
                    replies, and thread operations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="child-1-3">
                  <AccordionTrigger>Feed Endpoints</AccordionTrigger>
                  <AccordionContent>
                    Access personalized feeds, channel feeds, and trending
                    content with advanced filtering.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="parent-2">
            <AccordionTrigger>Authentication Methods</AccordionTrigger>
            <AccordionContent>
              <p className="mb-3">Multiple authentication options available:</p>
              <Accordion className="w-full">
                <AccordionItem value="child-2-1">
                  <AccordionTrigger>API Key Authentication</AccordionTrigger>
                  <AccordionContent>
                    Simple bearer token authentication for server-to-server
                    communication. Best for backend services.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="child-2-2">
                  <AccordionTrigger>Sign-In with Farcaster</AccordionTrigger>
                  <AccordionContent>
                    OAuth 2.0 compatible authentication for user-facing
                    applications. Supports QR codes and deep links.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* No Default Selection */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">All Items Closed by Default</h3>
          <p className="text-muted-foreground text-sm">
            Omit defaultValue to start with all items collapsed.
          </p>
        </div>
        <Accordion className="w-full">
          <AccordionItem value="closed-1">
            <AccordionTrigger>First Item</AccordionTrigger>
            <AccordionContent>
              All items start closed when no defaultValue is provided.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="closed-2">
            <AccordionTrigger>Second Item</AccordionTrigger>
            <AccordionContent>
              Users must click to reveal content, keeping the interface compact.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="closed-3">
            <AccordionTrigger>Third Item</AccordionTrigger>
            <AccordionContent>
              Useful for long lists of optional information.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing accordion props.
 */
export const Interactive: Story = {
  args: {
    defaultValue: ["item-1"],
  },
  render: (args) => (
    <div className="w-full max-w-xl">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Neynar?</AccordionTrigger>
          <AccordionContent>
            Neynar is the leading infrastructure platform for building on
            Farcaster. We provide APIs, SDKs, and tools to help developers
            create amazing social applications.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How do I get an API key?</AccordionTrigger>
          <AccordionContent>
            Sign up for a free account at neynar.com and navigate to your
            dashboard. You can generate a new API key from the API Keys section.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            What support options are available?
          </AccordionTrigger>
          <AccordionContent>
            We offer email support for all users, priority support for Pro
            users, and dedicated Slack channels for Enterprise customers. Our
            documentation and community Discord are available to everyone.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
