import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon, MailIcon, UserIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "../button";
import { Checkbox } from "../checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "../field";
import { Input } from "../input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../input-group";
import { Label } from "../label";
import { RadioGroup, RadioGroupItem } from "../radio-group";
import { Switch } from "../switch";
import { Textarea } from "../textarea";

const meta: Meta<typeof Field> = {
  title: "Components/Form & Field/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal", "responsive"],
      description: "Layout orientation of the field",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Field>;

/**
 * Webhook Configuration Form - A realistic scenario showing complete form fields
 * with validation, labels, helper text, and error states in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function WebhookConfigForm() {
      const [formData, setFormData] = useState({
        webhookUrl: "",
        description: "",
        apiKey: "",
        notificationEmail: "",
        enableRetries: true,
        enableLogging: false,
        eventType: "cast.created",
      });

      const [errors, setErrors] = useState<{
        webhookUrl?: { message: string };
        notificationEmail?: { message: string };
        apiKey?: { message: string };
      }>({});

      const [touched, setTouched] = useState<{
        webhookUrl?: boolean;
        notificationEmail?: boolean;
        apiKey?: boolean;
      }>({});

      function validateUrl(url: string) {
        if (!url) {
          return { message: "Webhook URL is required" };
        }
        if (!url.startsWith("https://")) {
          return { message: "Webhook URL must use HTTPS" };
        }
        if (!url.includes(".")) {
          return { message: "Please enter a valid URL" };
        }
        return undefined;
      }

      function validateEmail(email: string) {
        if (!email) {
          return undefined;
        }
        if (!email.includes("@") || !email.includes(".")) {
          return { message: "Please enter a valid email address" };
        }
        return undefined;
      }

      function validateApiKey(key: string) {
        if (!key) {
          return { message: "API Key is required" };
        }
        if (key.length < 32) {
          return { message: "API Key must be at least 32 characters" };
        }
        return undefined;
      }

      function handleBlur(field: keyof typeof touched) {
        setTouched((prev) => ({ ...prev, [field]: true }));

        const newErrors = { ...errors };

        if (field === "webhookUrl") {
          const error = validateUrl(formData.webhookUrl);
          if (error) {
            newErrors.webhookUrl = error;
          } else {
            delete newErrors.webhookUrl;
          }
        }

        if (field === "notificationEmail") {
          const error = validateEmail(formData.notificationEmail);
          if (error) {
            newErrors.notificationEmail = error;
          } else {
            delete newErrors.notificationEmail;
          }
        }

        if (field === "apiKey") {
          const error = validateApiKey(formData.apiKey);
          if (error) {
            newErrors.apiKey = error;
          } else {
            delete newErrors.apiKey;
          }
        }

        setErrors(newErrors);
      }

      const hasErrors = Object.keys(errors).length > 0;

      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">Configure Webhook</h2>
            <p className="text-muted-foreground text-sm">
              Set up a webhook endpoint to receive real-time Farcaster events.
            </p>
          </div>

          <form className="space-y-6">
            {/* Webhook URL - Error State Example */}
            <Field
              data-invalid={touched.webhookUrl && !!errors.webhookUrl}
              orientation="vertical"
            >
              <FieldLabel htmlFor="webhook-url">
                Webhook URL *
                <InfoIcon className="text-muted-foreground size-3.5" />
              </FieldLabel>
              <FieldContent>
                <Input
                  id="webhook-url"
                  type="url"
                  placeholder="https://api.example.com/webhooks"
                  value={formData.webhookUrl}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      webhookUrl: e.target.value,
                    }))
                  }
                  onBlur={() => handleBlur("webhookUrl")}
                  aria-invalid={touched.webhookUrl && !!errors.webhookUrl}
                />
                {!touched.webhookUrl || !errors.webhookUrl ? (
                  <FieldDescription>
                    Must be a publicly accessible HTTPS endpoint
                  </FieldDescription>
                ) : null}
                {touched.webhookUrl && errors.webhookUrl && (
                  <FieldError errors={[errors.webhookUrl]} />
                )}
              </FieldContent>
            </Field>

            {/* Description - Basic Field */}
            <Field orientation="vertical">
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <FieldContent>
                <Textarea
                  id="description"
                  placeholder="What is this webhook for?"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  rows={3}
                />
                <FieldDescription>
                  A brief description to help you remember this webhook's
                  purpose
                </FieldDescription>
              </FieldContent>
            </Field>

            {/* API Key - With Input Group */}
            <Field
              data-invalid={touched.apiKey && !!errors.apiKey}
              orientation="vertical"
            >
              <FieldLabel htmlFor="api-key">API Key *</FieldLabel>
              <FieldContent>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <UserIcon />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="api-key"
                    type="password"
                    placeholder="Enter your Neynar API key"
                    value={formData.apiKey}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        apiKey: e.target.value,
                      }))
                    }
                    onBlur={() => handleBlur("apiKey")}
                    aria-invalid={touched.apiKey && !!errors.apiKey}
                  />
                </InputGroup>
                {!touched.apiKey || !errors.apiKey ? (
                  <FieldDescription>
                    Your API key will be used to authenticate webhook requests
                  </FieldDescription>
                ) : null}
                {touched.apiKey && errors.apiKey && (
                  <FieldError errors={[errors.apiKey]} />
                )}
              </FieldContent>
            </Field>

            <FieldSeparator>Event Settings</FieldSeparator>

            {/* Event Type - Radio Group in Field */}
            <FieldSet>
              <FieldLegend variant="label">Event Type</FieldLegend>
              <FieldGroup>
                <RadioGroup
                  value={formData.eventType}
                  onValueChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      eventType: value as string,
                    }))
                  }
                >
                  <Field orientation="horizontal">
                    <FieldLabel htmlFor="event-cast-created">
                      <RadioGroupItem
                        value="cast.created"
                        id="event-cast-created"
                      />
                      <div>
                        <FieldTitle>Cast Created</FieldTitle>
                        <FieldDescription>
                          Triggered when a new cast is published
                        </FieldDescription>
                      </div>
                    </FieldLabel>
                  </Field>

                  <Field orientation="horizontal">
                    <FieldLabel htmlFor="event-user-followed">
                      <RadioGroupItem
                        value="user.followed"
                        id="event-user-followed"
                      />
                      <div>
                        <FieldTitle>User Followed</FieldTitle>
                        <FieldDescription>
                          Triggered when a user is followed
                        </FieldDescription>
                      </div>
                    </FieldLabel>
                  </Field>

                  <Field orientation="horizontal">
                    <FieldLabel htmlFor="event-reaction-added">
                      <RadioGroupItem
                        value="reaction.added"
                        id="event-reaction-added"
                      />
                      <div>
                        <FieldTitle>Reaction Added</FieldTitle>
                        <FieldDescription>
                          Triggered when a reaction is added to a cast
                        </FieldDescription>
                      </div>
                    </FieldLabel>
                  </Field>
                </RadioGroup>
              </FieldGroup>
            </FieldSet>

            <FieldSeparator>Advanced Options</FieldSeparator>

            {/* Switches - Horizontal Orientation */}
            <FieldGroup>
              <Field orientation="horizontal">
                <FieldLabel htmlFor="enable-retries">
                  <Switch
                    id="enable-retries"
                    checked={formData.enableRetries}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        enableRetries: checked,
                      }))
                    }
                  />
                  <div>
                    <FieldTitle>Automatic Retries</FieldTitle>
                    <FieldDescription>
                      Automatically retry failed webhook deliveries up to 3
                      times
                    </FieldDescription>
                  </div>
                </FieldLabel>
              </Field>

              <Field orientation="horizontal">
                <FieldLabel htmlFor="enable-logging">
                  <Switch
                    id="enable-logging"
                    checked={formData.enableLogging}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        enableLogging: checked,
                      }))
                    }
                  />
                  <div>
                    <FieldTitle>Request Logging</FieldTitle>
                    <FieldDescription>
                      Log all webhook requests and responses for debugging
                    </FieldDescription>
                  </div>
                </FieldLabel>
              </Field>
            </FieldGroup>

            {/* Notification Email - Optional Field */}
            <Field
              data-invalid={
                touched.notificationEmail && !!errors.notificationEmail
              }
              orientation="vertical"
            >
              <FieldLabel htmlFor="notification-email">
                Notification Email
              </FieldLabel>
              <FieldContent>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <MailIcon />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="notification-email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.notificationEmail}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        notificationEmail: e.target.value,
                      }))
                    }
                    onBlur={() => handleBlur("notificationEmail")}
                    aria-invalid={
                      touched.notificationEmail && !!errors.notificationEmail
                    }
                  />
                </InputGroup>
                {!touched.notificationEmail || !errors.notificationEmail ? (
                  <FieldDescription>
                    Receive alerts when webhook delivery fails
                  </FieldDescription>
                ) : null}
                {touched.notificationEmail && errors.notificationEmail && (
                  <FieldError errors={[errors.notificationEmail]} />
                )}
              </FieldContent>
            </Field>

            {/* Action Bar */}
            <div className="flex justify-end gap-2 border-t pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setFormData({
                    webhookUrl: "",
                    description: "",
                    apiKey: "",
                    notificationEmail: "",
                    enableRetries: true,
                    enableLogging: false,
                    eventType: "cast.created",
                  });
                  setErrors({});
                  setTouched({});
                }}
              >
                Reset
              </Button>
              <Button type="button" disabled={hasErrors}>
                Create Webhook
              </Button>
            </div>
          </form>
        </div>
      );
    }

    return <WebhookConfigForm />;
  },
};

/**
 * Complete design system reference showing all field orientations, compositions,
 * and states including validation errors.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Field Orientations */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Field Orientations</h3>
          <p className="text-muted-foreground text-sm">
            Vertical, horizontal, and responsive layout options.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Vertical (Default)</h4>
            <Field orientation="vertical">
              <FieldLabel htmlFor="vertical-input">Username</FieldLabel>
              <FieldContent>
                <Input id="vertical-input" placeholder="Enter username" />
                <FieldDescription>
                  Label and input are stacked vertically
                </FieldDescription>
              </FieldContent>
            </Field>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Horizontal</h4>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="horizontal-input">Email</FieldLabel>
              <FieldContent>
                <Input id="horizontal-input" placeholder="your@email.com" />
                <FieldDescription>
                  Label and input are side by side
                </FieldDescription>
              </FieldContent>
            </Field>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Responsive</h4>
            <FieldGroup>
              <Field orientation="responsive">
                <FieldLabel htmlFor="responsive-input">Phone</FieldLabel>
                <FieldContent>
                  <Input
                    id="responsive-input"
                    placeholder="+1 (555) 123-4567"
                  />
                  <FieldDescription>
                    Vertical on mobile, horizontal on larger screens
                  </FieldDescription>
                </FieldContent>
              </Field>
            </FieldGroup>
          </div>
        </div>
      </section>

      {/* Basic Field Components */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Basic Field Structure</h3>
          <p className="text-muted-foreground text-sm">
            Building blocks: Label, Input, Description, Error.
          </p>
        </div>

        <div className="space-y-4">
          <Field>
            <FieldLabel htmlFor="basic-1">Simple Field</FieldLabel>
            <Input id="basic-1" placeholder="Just a label and input" />
          </Field>

          <Field>
            <FieldLabel htmlFor="basic-2">With Description</FieldLabel>
            <FieldContent>
              <Input id="basic-2" placeholder="Enter value" />
              <FieldDescription>
                Helper text provides additional context
              </FieldDescription>
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel htmlFor="basic-3">With Icon in Label</FieldLabel>
            <FieldLabel htmlFor="basic-3">
              Field Name
              <InfoIcon className="text-muted-foreground size-3.5" />
            </FieldLabel>
            <Input id="basic-3" placeholder="Icon adds visual interest" />
          </Field>
        </div>
      </section>

      {/* Validation States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Validation States</h3>
          <p className="text-muted-foreground text-sm">
            Fields with error states and validation messages.
          </p>
        </div>

        <div className="space-y-4">
          <Field data-invalid="true">
            <FieldLabel htmlFor="error-1">Single Error</FieldLabel>
            <FieldContent>
              <Input
                id="error-1"
                placeholder="invalid@value"
                aria-invalid="true"
              />
              <FieldError errors={[{ message: "This field is required" }]} />
            </FieldContent>
          </Field>

          <Field data-invalid="true">
            <FieldLabel htmlFor="error-2">Multiple Errors</FieldLabel>
            <FieldContent>
              <Input
                id="error-2"
                placeholder="invalid@value"
                aria-invalid="true"
              />
              <FieldError
                errors={[
                  { message: "Password must be at least 8 characters" },
                  { message: "Password must contain a number" },
                  { message: "Password must contain a special character" },
                ]}
              />
            </FieldContent>
          </Field>

          <Field data-invalid="true">
            <FieldLabel htmlFor="error-3">Custom Error Message</FieldLabel>
            <FieldContent>
              <Input
                id="error-3"
                placeholder="invalid@value"
                aria-invalid="true"
              />
              <FieldError>
                Custom error message content can be passed as children
              </FieldError>
            </FieldContent>
          </Field>
        </div>
      </section>

      {/* With Different Input Types */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Field with Different Inputs</h3>
          <p className="text-muted-foreground text-sm">
            Field component works with all form input types.
          </p>
        </div>

        <div className="space-y-4">
          <Field>
            <FieldLabel htmlFor="textarea-field">Message</FieldLabel>
            <FieldContent>
              <Textarea
                id="textarea-field"
                placeholder="Enter your message..."
              />
              <FieldDescription>Maximum 500 characters</FieldDescription>
            </FieldContent>
          </Field>

          <Field orientation="horizontal">
            <FieldLabel htmlFor="checkbox-field">
              <Checkbox id="checkbox-field" />
              <div>
                <FieldTitle>Enable Notifications</FieldTitle>
                <FieldDescription>
                  Receive updates about your account
                </FieldDescription>
              </div>
            </FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <FieldLabel htmlFor="switch-field">
              <Switch id="switch-field" />
              <div>
                <FieldTitle>Dark Mode</FieldTitle>
                <FieldDescription>Toggle dark mode theme</FieldDescription>
              </div>
            </FieldLabel>
          </Field>
        </div>
      </section>

      {/* FieldGroup and FieldSet */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Field Groups</h3>
          <p className="text-muted-foreground text-sm">
            Grouping related fields with FieldGroup and FieldSet.
          </p>
        </div>

        <FieldSet>
          <FieldLegend variant="legend">User Information</FieldLegend>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="group-1">First Name</FieldLabel>
              <Input id="group-1" placeholder="John" />
            </Field>

            <Field>
              <FieldLabel htmlFor="group-2">Last Name</FieldLabel>
              <Input id="group-2" placeholder="Doe" />
            </Field>

            <Field>
              <FieldLabel htmlFor="group-3">Email</FieldLabel>
              <FieldContent>
                <Input
                  id="group-3"
                  type="email"
                  placeholder="john@example.com"
                />
                <FieldDescription>
                  We'll never share your email
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldGroup>
        </FieldSet>
      </section>

      {/* Field Separator */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Field Separator</h3>
          <p className="text-muted-foreground text-sm">
            Visual separation between field groups.
          </p>
        </div>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="sep-1">Account Name</FieldLabel>
            <Input id="sep-1" placeholder="My Account" />
          </Field>

          <FieldSeparator>Security Settings</FieldSeparator>

          <Field>
            <FieldLabel htmlFor="sep-2">Password</FieldLabel>
            <Input id="sep-2" type="password" placeholder="••••••••" />
          </Field>

          <Field>
            <FieldLabel htmlFor="sep-3">Confirm Password</FieldLabel>
            <Input id="sep-3" type="password" placeholder="••••••••" />
          </Field>

          <FieldSeparator />

          <Field>
            <FieldLabel htmlFor="sep-4">Two-Factor Authentication</FieldLabel>
            <Input id="sep-4" placeholder="Enter code" />
          </Field>
        </FieldGroup>
      </section>

      {/* Disabled State */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Disabled State</h3>
          <p className="text-muted-foreground text-sm">
            Fields in disabled state with reduced opacity.
          </p>
        </div>

        <Field data-disabled="true">
          <FieldLabel htmlFor="disabled-1">Disabled Field</FieldLabel>
          <FieldContent>
            <Input
              id="disabled-1"
              placeholder="Cannot edit"
              disabled
              defaultValue="Read only value"
            />
            <FieldDescription>This field cannot be modified</FieldDescription>
          </FieldContent>
        </Field>
      </section>

      {/* Complex Form Pattern */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Complete Form Pattern</h3>
          <p className="text-muted-foreground text-sm">
            A realistic form combining multiple field types and layouts.
          </p>
        </div>

        <form className="border-border rounded-lg border p-6">
          <FieldSet>
            <FieldLegend variant="legend">Contact Form</FieldLegend>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="complex-1">Name *</FieldLabel>
                <Input id="complex-1" placeholder="Your name" required />
              </Field>

              <Field>
                <FieldLabel htmlFor="complex-2">Email *</FieldLabel>
                <FieldContent>
                  <Input
                    id="complex-2"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                  <FieldDescription>
                    We'll respond to this email
                  </FieldDescription>
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel htmlFor="complex-3">Subject</FieldLabel>
                <Input id="complex-3" placeholder="What is this about?" />
              </Field>

              <Field>
                <FieldLabel htmlFor="complex-4">Message *</FieldLabel>
                <FieldContent>
                  <Textarea
                    id="complex-4"
                    placeholder="Tell us more..."
                    rows={4}
                    required
                  />
                  <FieldDescription>Minimum 10 characters</FieldDescription>
                </FieldContent>
              </Field>

              <Field orientation="horizontal">
                <FieldLabel htmlFor="complex-5">
                  <Checkbox id="complex-5" />
                  <Label>Send me a copy of this message</Label>
                </FieldLabel>
              </Field>

              <div className="flex justify-end gap-2 pt-2">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="submit">Send Message</Button>
              </div>
            </FieldGroup>
          </FieldSet>
        </form>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing field props.
 */
export const Interactive: Story = {
  render: (args) => (
    <Field {...args} className="min-w-80">
      <FieldLabel htmlFor="interactive-input">Field Label</FieldLabel>
      <FieldContent>
        <Input id="interactive-input" placeholder="Enter text..." />
        <FieldDescription>This is a helper text description</FieldDescription>
      </FieldContent>
    </Field>
  ),
  args: {
    orientation: "vertical",
  },
};
