import type { Meta, StoryObj } from "@storybook/react";
import {
  DatabaseIcon,
  KeyIcon,
  SearchIcon,
  WebhookIcon,
  InboxIcon,
  FolderIcon,
  FileTextIcon,
  ActivityIcon,
} from "lucide-react";

import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "../empty";
import { Button } from "../button";

const meta: Meta<typeof Empty> = {
  title: "Components/Feedback & Status/Empty",
  component: Empty,
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
type Story = StoryObj<typeof Empty>;

/**
 * Realistic Neynar Dashboard scenarios showing various empty states
 * including no webhooks, no API keys, no search results, and more.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function DashboardEmptyStates() {
      return (
        <div className="w-full max-w-5xl space-y-8">
          {/* Section Header */}
          <div>
            <h2 className="text-2xl font-bold">Empty State Examples</h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Common empty states in the Neynar Dashboard
            </p>
          </div>

          {/* Grid of Empty States */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* No Webhooks */}
            <div className="border-border rounded-lg border">
              <div className="border-border border-b p-4">
                <h3 className="font-semibold">Webhooks</h3>
              </div>
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <WebhookIcon />
                  </EmptyMedia>
                  <EmptyTitle>No webhooks configured</EmptyTitle>
                  <EmptyDescription>
                    Get started by creating your first webhook to receive
                    real-time notifications.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button>
                    <WebhookIcon data-icon="inline-start" />
                    Create Webhook
                  </Button>
                </EmptyContent>
              </Empty>
            </div>

            {/* No API Keys */}
            <div className="border-border rounded-lg border">
              <div className="border-border border-b p-4">
                <h3 className="font-semibold">API Keys</h3>
              </div>
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <KeyIcon />
                  </EmptyMedia>
                  <EmptyTitle>No API keys found</EmptyTitle>
                  <EmptyDescription>
                    Create an API key to start making requests to the Neynar
                    API.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button>Create API Key</Button>
                </EmptyContent>
              </Empty>
            </div>

            {/* No Search Results */}
            <div className="border-border rounded-lg border">
              <div className="border-border border-b p-4">
                <h3 className="font-semibold">Search Results</h3>
              </div>
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <SearchIcon />
                  </EmptyMedia>
                  <EmptyTitle>No results found</EmptyTitle>
                  <EmptyDescription>
                    Try adjusting your search terms or filters to find what
                    you're looking for.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button variant="outline">Clear Filters</Button>
                </EmptyContent>
              </Empty>
            </div>

            {/* No Activity */}
            <div className="border-border rounded-lg border">
              <div className="border-border border-b p-4">
                <h3 className="font-semibold">Recent Activity</h3>
              </div>
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <ActivityIcon />
                  </EmptyMedia>
                  <EmptyTitle>No recent activity</EmptyTitle>
                  <EmptyDescription>
                    Your API usage and webhook events will appear here.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            </div>
          </div>

          {/* Full Width Examples */}
          <div className="space-y-6">
            {/* No Data - Default Variant */}
            <div className="border-border rounded-lg border">
              <div className="border-border border-b p-4">
                <h3 className="font-semibold">Database Records</h3>
              </div>
              <Empty>
                <EmptyHeader>
                  <EmptyMedia>
                    <DatabaseIcon className="text-muted-foreground size-12" />
                  </EmptyMedia>
                  <EmptyTitle>No data available</EmptyTitle>
                  <EmptyDescription>
                    Start collecting data by setting up your first integration.{" "}
                    <a href="#" className="text-primary hover:underline">
                      Learn more
                    </a>
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <div className="flex gap-2">
                    <Button variant="outline">View Documentation</Button>
                    <Button>Get Started</Button>
                  </div>
                </EmptyContent>
              </Empty>
            </div>

            {/* Empty Inbox */}
            <div className="border-border rounded-lg border">
              <div className="border-border border-b p-4">
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <InboxIcon />
                  </EmptyMedia>
                  <EmptyTitle>All caught up!</EmptyTitle>
                  <EmptyDescription>
                    You have no new notifications. We'll notify you when
                    something happens.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            </div>
          </div>
        </div>
      );
    }

    return <DashboardEmptyStates />;
  },
};

/**
 * Complete design system reference showing all variants and composition patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Media Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Media Variants</h3>
          <p className="text-muted-foreground text-sm">
            Two variants for the media/icon display: default (transparent) and
            icon (with background).
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Default Variant */}
          <div className="border-border rounded-lg border p-6">
            <p className="text-muted-foreground mb-4 text-sm font-medium">
              Default
            </p>
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="default">
                  <FileTextIcon className="text-muted-foreground size-12" />
                </EmptyMedia>
                <EmptyTitle>No documents</EmptyTitle>
                <EmptyDescription>
                  The default variant uses transparent background.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>

          {/* Icon Variant */}
          <div className="border-border rounded-lg border p-6">
            <p className="text-muted-foreground mb-4 text-sm font-medium">
              Icon
            </p>
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <FileTextIcon />
                </EmptyMedia>
                <EmptyTitle>No documents</EmptyTitle>
                <EmptyDescription>
                  The icon variant includes a muted background.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        </div>
      </section>

      {/* Composition Patterns */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Composition Patterns</h3>
          <p className="text-muted-foreground text-sm">
            Different ways to compose empty states based on context needs.
          </p>
        </div>
        <div className="space-y-6">
          {/* Minimal - Title Only */}
          <div className="border-border rounded-lg border p-6">
            <p className="text-muted-foreground mb-4 text-sm font-medium">
              Minimal (Media + Title)
            </p>
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <SearchIcon />
                </EmptyMedia>
                <EmptyTitle>No results</EmptyTitle>
              </EmptyHeader>
            </Empty>
          </div>

          {/* Standard - Title + Description */}
          <div className="border-border rounded-lg border p-6">
            <p className="text-muted-foreground mb-4 text-sm font-medium">
              Standard (Media + Title + Description)
            </p>
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <SearchIcon />
                </EmptyMedia>
                <EmptyTitle>No results found</EmptyTitle>
                <EmptyDescription>
                  Try adjusting your search terms or filters.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>

          {/* With Action */}
          <div className="border-border rounded-lg border p-6">
            <p className="text-muted-foreground mb-4 text-sm font-medium">
              With Action (Header + Content)
            </p>
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <FolderIcon />
                </EmptyMedia>
                <EmptyTitle>No projects</EmptyTitle>
                <EmptyDescription>
                  Get started by creating your first project.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button>Create Project</Button>
              </EmptyContent>
            </Empty>
          </div>

          {/* With Multiple Actions */}
          <div className="border-border rounded-lg border p-6">
            <p className="text-muted-foreground mb-4 text-sm font-medium">
              Multiple Actions
            </p>
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <DatabaseIcon />
                </EmptyMedia>
                <EmptyTitle>No data sources</EmptyTitle>
                <EmptyDescription>
                  Connect your first data source to start analyzing data.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button>Connect Data Source</Button>
                  <Button variant="outline">View Documentation</Button>
                </div>
              </EmptyContent>
            </Empty>
          </div>

          {/* Without Media */}
          <div className="border-border rounded-lg border p-6">
            <p className="text-muted-foreground mb-4 text-sm font-medium">
              Without Media
            </p>
            <Empty>
              <EmptyHeader>
                <EmptyTitle>No items to display</EmptyTitle>
                <EmptyDescription>
                  Empty states can work without media icons for simpler
                  contexts.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        </div>
      </section>

      {/* Different Icon Sizes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Icon Customization</h3>
          <p className="text-muted-foreground text-sm">
            Icons can be customized with different sizes and colors.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Small Icon */}
          <div className="border-border rounded-lg border p-6">
            <p className="text-muted-foreground mb-4 text-sm font-medium">
              Small (size-8)
            </p>
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <InboxIcon className="size-4" />
                </EmptyMedia>
                <EmptyTitle>Empty</EmptyTitle>
              </EmptyHeader>
            </Empty>
          </div>

          {/* Default Icon */}
          <div className="border-border rounded-lg border p-6">
            <p className="text-muted-foreground mb-4 text-sm font-medium">
              Default (size-6)
            </p>
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <InboxIcon />
                </EmptyMedia>
                <EmptyTitle>Empty</EmptyTitle>
              </EmptyHeader>
            </Empty>
          </div>

          {/* Large Icon (default variant) */}
          <div className="border-border rounded-lg border p-6">
            <p className="text-muted-foreground mb-4 text-sm font-medium">
              Large (size-12)
            </p>
            <Empty>
              <EmptyHeader>
                <EmptyMedia>
                  <InboxIcon className="text-muted-foreground size-12" />
                </EmptyMedia>
                <EmptyTitle>Empty</EmptyTitle>
              </EmptyHeader>
            </Empty>
          </div>
        </div>
      </section>

      {/* State Examples */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Use Case Examples</h3>
          <p className="text-muted-foreground text-sm">
            Common scenarios where empty states are used.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {/* No Content Yet */}
          <div className="border-border rounded-lg border p-6">
            <p className="text-muted-foreground mb-4 text-sm font-medium">
              First-Time Experience
            </p>
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <KeyIcon />
                </EmptyMedia>
                <EmptyTitle>Welcome to Neynar</EmptyTitle>
                <EmptyDescription>
                  Create your first API key to start building.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button>Create API Key</Button>
              </EmptyContent>
            </Empty>
          </div>

          {/* Filtered Results */}
          <div className="border-border rounded-lg border p-6">
            <p className="text-muted-foreground mb-4 text-sm font-medium">
              Filtered Results
            </p>
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <SearchIcon />
                </EmptyMedia>
                <EmptyTitle>No matching results</EmptyTitle>
                <EmptyDescription>
                  No items match your current filters.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button variant="outline">Clear All Filters</Button>
              </EmptyContent>
            </Empty>
          </div>

          {/* Success State */}
          <div className="border-border rounded-lg border p-6">
            <p className="text-muted-foreground mb-4 text-sm font-medium">
              Success/Completed
            </p>
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <InboxIcon />
                </EmptyMedia>
                <EmptyTitle>All done!</EmptyTitle>
                <EmptyDescription>
                  You've completed all your tasks.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>

          {/* Error/Missing Data */}
          <div className="border-border rounded-lg border p-6">
            <p className="text-muted-foreground mb-4 text-sm font-medium">
              Missing Configuration
            </p>
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <WebhookIcon />
                </EmptyMedia>
                <EmptyTitle>Setup required</EmptyTitle>
                <EmptyDescription>
                  Configure webhooks to receive notifications.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button>Go to Settings</Button>
              </EmptyContent>
            </Empty>
          </div>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing empty state props.
 */
export const Interactive: Story = {
  render: (args) => (
    <Empty {...args}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderIcon />
        </EmptyMedia>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          This is a customizable empty state. Try adjusting the controls to see
          different configurations.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Add Item</Button>
      </EmptyContent>
    </Empty>
  ),
  args: {
    className: "",
  },
};
