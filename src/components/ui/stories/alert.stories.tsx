import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertTriangleIcon,
  BellIcon,
  CheckCircle2Icon,
  InfoIcon,
  XCircleIcon,
  XIcon,
} from "lucide-react";

import { Alert, AlertAction, AlertDescription, AlertTitle } from "../alert";
import { Button } from "../button";

const meta: Meta<typeof Alert> = {
  title: "Components/Feedback & Status/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "success", "warning", "info"],
      description: "Visual style variant",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

/**
 * Neynar Dashboard - A realistic scenario showing alerts in the context
 * of API warnings, deprecation notices, and system notifications.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function DashboardAlerts() {
      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">Notifications</h2>
            <p className="text-muted-foreground text-sm">
              Important updates and alerts about your Neynar API usage.
            </p>
          </div>

          {/* Rate Limit Warning */}
          <Alert variant="destructive">
            <AlertTriangleIcon />
            <AlertTitle>Rate Limit Warning</AlertTitle>
            <AlertDescription>
              You've used 95% of your API rate limit for this billing period.
              Your requests may be throttled. Consider{" "}
              <a href="#upgrade">upgrading your plan</a> to increase your limit.
            </AlertDescription>
            <AlertAction>
              <Button variant="ghost" size="icon-xs" aria-label="Dismiss">
                <XIcon />
              </Button>
            </AlertAction>
          </Alert>

          {/* API Deprecation Notice */}
          <Alert>
            <InfoIcon />
            <AlertTitle>API v1 Deprecation Notice</AlertTitle>
            <AlertDescription>
              The v1 API endpoints will be deprecated on March 31, 2025. Please
              migrate to <a href="#migration">v2 endpoints</a> to avoid service
              disruption.
            </AlertDescription>
            <AlertAction>
              <Button size="xs" variant="outline">
                View Migration Guide
              </Button>
            </AlertAction>
          </Alert>

          {/* Webhook Configuration */}
          <Alert>
            <BellIcon />
            <AlertTitle>Webhook Configuration Required</AlertTitle>
            <AlertDescription>
              Set up webhooks to receive real-time notifications for cast
              events, reactions, and follows.{" "}
              <a href="#webhooks">Configure webhooks</a> in your dashboard
              settings.
            </AlertDescription>
          </Alert>

          {/* Error Alert */}
          <Alert variant="destructive">
            <XCircleIcon />
            <AlertTitle>Authentication Error</AlertTitle>
            <AlertDescription>
              Your API key has expired or is invalid. Please generate a new key
              or check your credentials in the{" "}
              <a href="#settings">API settings</a> page.
            </AlertDescription>
            <AlertAction>
              <Button variant="ghost" size="icon-xs" aria-label="Dismiss">
                <XIcon />
              </Button>
            </AlertAction>
          </Alert>

          {/* Success Alert */}
          <Alert>
            <CheckCircle2Icon />
            <AlertTitle>Plan Upgrade Successful</AlertTitle>
            <AlertDescription>
              Your account has been upgraded to the Pro plan. Your new rate
              limits and features are now active.
            </AlertDescription>
          </Alert>
        </div>
      );
    }

    return <DashboardAlerts />;
  },
};

/**
 * Complete design system reference showing all alert variants, states, and compositions.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-3xl space-y-10">
      {/* Visual Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Visual Variants</h3>
          <p className="text-muted-foreground text-sm">
            Different styles for different purposes and emphasis levels.
          </p>
        </div>
        <div className="space-y-3">
          <Alert variant="default">
            <InfoIcon />
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              Used for general information, updates, and notifications that
              don't require immediate action.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTriangleIcon />
            <AlertTitle>Destructive Alert</AlertTitle>
            <AlertDescription>
              Used for errors and critical information that requires immediate
              user attention.
            </AlertDescription>
          </Alert>
        </div>
        <div>
          <p className="text-muted-foreground text-sm mt-4 mb-3">
            Semantic variants for status and feedback.
          </p>
        </div>
        <div className="space-y-3">
          <Alert variant="success">
            <CheckCircle2Icon />
            <AlertTitle>Success Alert</AlertTitle>
            <AlertDescription>
              Used to confirm successful actions or positive outcomes.
            </AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTriangleIcon />
            <AlertTitle>Warning Alert</AlertTitle>
            <AlertDescription>
              Used for important warnings that require attention but aren't
              critical.
            </AlertDescription>
          </Alert>
          <Alert variant="info">
            <InfoIcon />
            <AlertTitle>Info Alert</AlertTitle>
            <AlertDescription>
              Used for informational messages, tips, and helpful context.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* With Icons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Different Icons</h3>
          <p className="text-muted-foreground text-sm">
            Icons help communicate the type and severity of the alert.
          </p>
        </div>
        <div className="space-y-3">
          <Alert>
            <InfoIcon />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              General information or tips that might be helpful.
            </AlertDescription>
          </Alert>
          <Alert>
            <CheckCircle2Icon />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Confirmation that an action completed successfully.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTriangleIcon />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Important warning that requires attention but isn't critical.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <XCircleIcon />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Critical error that needs immediate resolution.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Without Icons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Without Icons</h3>
          <p className="text-muted-foreground text-sm">
            Alerts can also work without icons for simpler messages.
          </p>
        </div>
        <div className="space-y-3">
          <Alert>
            <AlertTitle>Simple Alert</AlertTitle>
            <AlertDescription>
              This alert doesn't have an icon, useful for less critical
              information.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Simple Destructive Alert</AlertTitle>
            <AlertDescription>
              Even destructive alerts can work without icons.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* With Actions */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Actions</h3>
          <p className="text-muted-foreground text-sm">
            Alerts can include action buttons or dismiss controls.
          </p>
        </div>
        <div className="space-y-3">
          <Alert>
            <InfoIcon />
            <AlertTitle>Update Available</AlertTitle>
            <AlertDescription>
              A new version of the API is available with improved performance.
            </AlertDescription>
            <AlertAction>
              <Button size="xs">Learn More</Button>
            </AlertAction>
          </Alert>
          <Alert variant="destructive">
            <AlertTriangleIcon />
            <AlertTitle>Action Required</AlertTitle>
            <AlertDescription>
              Your payment method needs to be updated to continue service.
            </AlertDescription>
            <AlertAction>
              <Button size="xs" variant="destructive">
                Update Payment
              </Button>
            </AlertAction>
          </Alert>
          <Alert>
            <BellIcon />
            <AlertTitle>Dismissible Alert</AlertTitle>
            <AlertDescription>
              This alert can be dismissed using the close button.
            </AlertDescription>
            <AlertAction>
              <Button variant="ghost" size="icon-xs" aria-label="Dismiss">
                <XIcon />
              </Button>
            </AlertAction>
          </Alert>
        </div>
      </section>

      {/* Description Only */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Description Only</h3>
          <p className="text-muted-foreground text-sm">
            Short alerts can use just the description without a title.
          </p>
        </div>
        <div className="space-y-3">
          <Alert>
            <InfoIcon />
            <AlertDescription>
              Your changes have been saved automatically.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTriangleIcon />
            <AlertDescription>
              Connection lost. Attempting to reconnect...
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* With Links */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Links</h3>
          <p className="text-muted-foreground text-sm">
            Alert descriptions support inline links for additional context.
          </p>
        </div>
        <div className="space-y-3">
          <Alert>
            <InfoIcon />
            <AlertTitle>Documentation Updated</AlertTitle>
            <AlertDescription>
              We've updated our API documentation with new examples and best
              practices. <a href="#docs">View the updated docs</a> or{" "}
              <a href="#changelog">read the changelog</a>.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTriangleIcon />
            <AlertTitle>Breaking Changes</AlertTitle>
            <AlertDescription>
              The upcoming v3 release includes breaking changes. Please review
              the <a href="#migration">migration guide</a> before upgrading.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing alert props.
 */
export const Interactive: Story = {
  args: {
    variant: "default",
    children: (
      <>
        <InfoIcon />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </>
    ),
  },
  render: (args) => <Alert {...args} />,
};
