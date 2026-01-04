import type { Meta, StoryObj } from "@storybook/react";
import { CheckCircle2Icon } from "lucide-react";
import { useState } from "react";

import { Button } from "../button";
import { Spinner } from "../spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Feedback & Status/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Custom CSS classes for styling the spinner",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

/**
 * Processing Indicators - A realistic scenario showing spinners in context
 * of loading states in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function ProcessingDashboard() {
      const [apiCallStatus, setApiCallStatus] = useState<
        "idle" | "loading" | "success" | "error"
      >("idle");
      const [formStatus, setFormStatus] = useState<
        "idle" | "loading" | "success" | "error"
      >("idle");
      const [dataStatus, setDataStatus] = useState<"loading" | "success">(
        "loading",
      );

      const handleApiCall = () => {
        setApiCallStatus("loading");
        setTimeout(() => {
          setApiCallStatus("success");
          setTimeout(() => setApiCallStatus("idle"), 2000);
        }, 2000);
      };

      const handleFormSubmit = () => {
        setFormStatus("loading");
        setTimeout(() => {
          setFormStatus("success");
          setTimeout(() => setFormStatus("idle"), 2000);
        }, 1500);
      };

      const handleLoadData = () => {
        setDataStatus("loading");
        setTimeout(() => setDataStatus("success"), 1500);
      };

      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* API Call with Spinner */}
          <div className="border-border bg-card rounded-lg border p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">API Request</h3>
              <p className="text-muted-foreground text-sm">
                Fetch latest cast data from Neynar API
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={handleApiCall}
                disabled={apiCallStatus === "loading"}
              >
                {apiCallStatus === "loading" && (
                  <Spinner data-icon="inline-start" />
                )}
                {apiCallStatus === "success" && (
                  <CheckCircle2Icon
                    data-icon="inline-start"
                    className="text-green-600"
                  />
                )}
                {apiCallStatus === "loading" ? "Loading..." : "Fetch Casts"}
              </Button>
              {apiCallStatus === "success" && (
                <span className="text-sm text-green-600">
                  Request completed successfully
                </span>
              )}
            </div>
          </div>

          {/* Form Submission */}
          <div className="border-border bg-card rounded-lg border p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Form Submission</h3>
              <p className="text-muted-foreground text-sm">
                Save webhook configuration
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Webhook URL</label>
                <input
                  type="text"
                  placeholder="https://api.example.com/webhook"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={formStatus === "loading"}
                />
              </div>
              <div className="flex items-center gap-3">
                <Button
                  onClick={handleFormSubmit}
                  disabled={formStatus === "loading"}
                >
                  {formStatus === "loading" && (
                    <Spinner data-icon="inline-start" />
                  )}
                  {formStatus === "success" && (
                    <CheckCircle2Icon
                      data-icon="inline-start"
                      className="text-green-600"
                    />
                  )}
                  {formStatus === "loading" ? "Saving..." : "Save Webhook"}
                </Button>
                {formStatus === "success" && (
                  <span className="text-sm text-green-600">Webhook saved</span>
                )}
              </div>
            </div>
          </div>

          {/* Data Loading State */}
          <div className="border-border bg-card rounded-lg border p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Recent Activity</h3>
                <p className="text-muted-foreground text-sm">
                  Latest casts and notifications
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLoadData}
                disabled={dataStatus === "loading"}
              >
                {dataStatus === "loading" && (
                  <Spinner data-icon="inline-start" className="size-3.5" />
                )}
                Refresh
              </Button>
            </div>
            {dataStatus === "loading" ? (
              <div className="flex min-h-[200px] flex-col items-center justify-center gap-3">
                <Spinner className="size-8" />
                <p className="text-muted-foreground text-sm">
                  Loading activity feed...
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="border-border flex items-center gap-3 border-b pb-3 last:border-0"
                  >
                    <div className="bg-muted flex size-10 items-center justify-center rounded-full">
                      <CheckCircle2Icon className="text-muted-foreground size-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Cast #{i} processed</p>
                      <p className="text-muted-foreground text-xs">
                        2 minutes ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Inline Loading States */}
          <div className="border-border bg-card rounded-lg border p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Inline Indicators</h3>
              <p className="text-muted-foreground text-sm">
                Various loading states throughout the UI
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Spinner className="size-4" />
                <span>Syncing data with Farcaster network...</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Spinner className="size-4" />
                <span>Processing webhook events...</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Spinner className="size-4" />
                <span>Generating analytics report...</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <ProcessingDashboard />;
  },
};

/**
 * Complete design system reference showing all spinner sizes and usage contexts.
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
          <h3 className="text-lg font-semibold">Sizes</h3>
          <p className="text-muted-foreground text-sm">
            Different spinner sizes for various contexts and UI density.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-3" />
            <span className="text-muted-foreground text-xs font-medium">
              Extra Small (size-3)
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-4" />
            <span className="text-muted-foreground text-xs font-medium">
              Small (size-4, default)
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6" />
            <span className="text-muted-foreground text-xs font-medium">
              Medium (size-6)
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-8" />
            <span className="text-muted-foreground text-xs font-medium">
              Large (size-8)
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-12" />
            <span className="text-muted-foreground text-xs font-medium">
              Extra Large (size-12)
            </span>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Color Variants</h3>
          <p className="text-muted-foreground text-sm">
            Spinners can be styled with custom colors using className.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6" />
            <span className="text-muted-foreground text-xs font-medium">
              Default
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="text-primary size-6" />
            <span className="text-muted-foreground text-xs font-medium">
              Primary
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6 text-blue-600" />
            <span className="text-muted-foreground text-xs font-medium">
              Blue
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6 text-green-600" />
            <span className="text-muted-foreground text-xs font-medium">
              Green
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="text-destructive size-6" />
            <span className="text-muted-foreground text-xs font-medium">
              Destructive
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="text-muted-foreground size-6" />
            <span className="text-muted-foreground text-xs font-medium">
              Muted
            </span>
          </div>
        </div>
      </section>

      {/* In Buttons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">In Buttons</h3>
          <p className="text-muted-foreground text-sm">
            Common pattern for loading states in interactive elements.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>
            <Spinner data-icon="inline-start" />
            Loading...
          </Button>
          <Button variant="outline" disabled>
            <Spinner data-icon="inline-start" />
            Processing
          </Button>
          <Button variant="secondary" disabled>
            <Spinner data-icon="inline-start" />
            Saving...
          </Button>
          <Button variant="destructive" disabled>
            <Spinner data-icon="inline-start" />
            Deleting...
          </Button>
          <Button size="sm" disabled>
            <Spinner data-icon="inline-start" className="size-3.5" />
            Small Loading
          </Button>
          <Button size="lg" disabled>
            <Spinner data-icon="inline-start" className="size-5" />
            Large Loading
          </Button>
        </div>
      </section>

      {/* Centered Loading States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Centered Loading States</h3>
          <p className="text-muted-foreground text-sm">
            Full-area loading indicators for pages and containers.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border-border bg-card flex min-h-[200px] items-center justify-center rounded-lg border">
            <Spinner className="size-8" />
          </div>
          <div className="border-border bg-card flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-lg border">
            <Spinner className="size-8" />
            <p className="text-muted-foreground text-sm">Loading content...</p>
          </div>
        </div>
      </section>

      {/* Inline Usage */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Inline Usage</h3>
          <p className="text-muted-foreground text-sm">
            Spinners in text and list contexts.
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Spinner className="size-4" />
            <span className="text-sm">Loading user data...</span>
          </div>
          <div className="flex items-center gap-2">
            <Spinner className="size-4" />
            <span className="text-sm">Syncing with Farcaster...</span>
          </div>
          <div className="flex items-center gap-2">
            <Spinner className="size-4" />
            <span className="text-sm">Processing webhook events...</span>
          </div>
        </div>
      </section>

      {/* Size Reference Table */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Size Reference</h3>
          <p className="text-muted-foreground text-sm">
            Quick reference for spinner sizing in different contexts.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-muted-foreground border-b text-left text-sm">
                <th className="pb-3 pr-4 font-medium">Size Class</th>
                <th className="pb-3 pr-4 font-medium">Pixels</th>
                <th className="pb-3 pr-4 font-medium">Use Case</th>
                <th className="pb-3 pr-4 font-medium">Preview</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">size-3</td>
                <td className="py-3 pr-4 text-sm">12px</td>
                <td className="py-3 pr-4 text-sm">
                  Extra small buttons, tight spaces
                </td>
                <td className="py-3 pr-4">
                  <Spinner className="size-3" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">size-4</td>
                <td className="py-3 pr-4 text-sm">16px</td>
                <td className="py-3 pr-4 text-sm">
                  Default, inline text, small buttons
                </td>
                <td className="py-3 pr-4">
                  <Spinner className="size-4" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">size-6</td>
                <td className="py-3 pr-4 text-sm">24px</td>
                <td className="py-3 pr-4 text-sm">
                  Medium buttons, prominent indicators
                </td>
                <td className="py-3 pr-4">
                  <Spinner className="size-6" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-mono text-sm">size-8</td>
                <td className="py-3 pr-4 text-sm">32px</td>
                <td className="py-3 pr-4 text-sm">
                  Large buttons, card loading states
                </td>
                <td className="py-3 pr-4">
                  <Spinner className="size-8" />
                </td>
              </tr>
              <tr className="border-b last:border-0">
                <td className="py-3 pr-4 font-mono text-sm">size-12</td>
                <td className="py-3 pr-4 text-sm">48px</td>
                <td className="py-3 pr-4 text-sm">
                  Full page loading, empty states
                </td>
                <td className="py-3 pr-4">
                  <Spinner className="size-12" />
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
 * Interactive playground for testing spinner props.
 */
export const Interactive: Story = {
  args: {
    className: "size-6",
  },
};
