import type { Meta, StoryObj } from "@storybook/react";
import {
  CheckCircle2Icon,
  KeyIcon,
  Loader2Icon,
  ShieldCheckIcon,
  SmartphoneIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../input-otp";
import { Label } from "../label";

const meta: Meta<typeof InputOTP> = {
  title: "Components/Form & Field/InputOTP",
  component: InputOTP,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    maxLength: {
      control: "number",
      description: "Maximum number of characters",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    pattern: {
      control: "text",
      description:
        "Regex pattern to validate input (e.g., '^[0-9]+$' for numbers only)",
    },
    autoFocus: {
      control: "boolean",
      description: "Auto-focus on mount",
    },
    containerClassName: {
      control: "text",
      description: "Additional class names for the container",
    },
    // Hide event handlers (belong in Actions panel)
    onComplete: { table: { disable: true } },
    onChange: { table: { disable: true } },
    // Hide internal library props
    pasteTransformer: { table: { disable: true } },
    pushPasswordManagerStrategy: { table: { disable: true } },
    noScriptCSSFallback: { table: { disable: true } },
    textAlign: { table: { disable: true } },
    render: { table: { disable: true } },
    value: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

/**
 * Two-Factor Authentication - A realistic scenario showing OTP input in context
 * of 2FA verification for the Neynar Dashboard security settings.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function TwoFactorAuthPanel() {
      const [emailOtp, setEmailOtp] = useState("");
      const [smsOtp, setSmsOtp] = useState("");
      const [authenticatorOtp, setAuthenticatorOtp] = useState("");
      const [isVerifyingEmail, setIsVerifyingEmail] = useState(false);
      const [isVerifyingSms, setIsVerifyingSms] = useState(false);
      const [isVerifyingAuthenticator, setIsVerifyingAuthenticator] =
        useState(false);
      const [emailVerified, setEmailVerified] = useState(false);
      const [smsVerified, setSmsVerified] = useState(false);
      const [authenticatorVerified, setAuthenticatorVerified] = useState(false);
      const [emailError, setEmailError] = useState(false);
      const [smsError, setSmsError] = useState(false);

      const handleEmailVerify = () => {
        if (emailOtp.length === 6) {
          setIsVerifyingEmail(true);
          setEmailError(false);
          setTimeout(() => {
            setIsVerifyingEmail(false);
            if (emailOtp === "123456") {
              setEmailVerified(true);
            } else {
              setEmailError(true);
            }
          }, 1500);
        }
      };

      const handleSmsVerify = () => {
        if (smsOtp.length === 6) {
          setIsVerifyingSms(true);
          setSmsError(false);
          setTimeout(() => {
            setIsVerifyingSms(false);
            if (smsOtp === "654321") {
              setSmsVerified(true);
            } else {
              setSmsError(true);
            }
          }, 1500);
        }
      };

      const handleAuthenticatorVerify = () => {
        if (authenticatorOtp.length === 6) {
          setIsVerifyingAuthenticator(true);
          setTimeout(() => {
            setIsVerifyingAuthenticator(false);
            setAuthenticatorVerified(true);
          }, 1500);
        }
      };

      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Header */}
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 text-primary rounded-md p-2">
              <ShieldCheckIcon className="size-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                Two-Factor Authentication
              </h2>
              <p className="text-muted-foreground text-sm">
                Verify your identity to enable 2FA on your Neynar account.
              </p>
            </div>
          </div>

          {/* Email Verification */}
          <div className="border-border bg-card rounded-lg border p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-md p-2">
                  <KeyIcon className="size-4" />
                </div>
                <div>
                  <h3 className="font-medium">Email Verification</h3>
                  <p className="text-muted-foreground text-sm">
                    Enter the 6-digit code sent to bob@neynar.com
                  </p>
                </div>
              </div>
              {emailVerified && (
                <CheckCircle2Icon className="text-green-600 size-5" />
              )}
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="email-otp">Verification Code</Label>
                <InputOTP
                  id="email-otp"
                  maxLength={6}
                  value={emailOtp}
                  onChange={setEmailOtp}
                  disabled={emailVerified || isVerifyingEmail}
                  pattern="^[0-9]+$"
                >
                  <InputOTPGroup aria-invalid={emailError}>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup aria-invalid={emailError}>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                {emailError && (
                  <p className="text-destructive text-sm">
                    Invalid code. Please try again. (Hint: try 123456)
                  </p>
                )}
                {emailVerified && (
                  <p className="text-green-600 text-sm">
                    Email verified successfully!
                  </p>
                )}
              </div>

              {!emailVerified && (
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleEmailVerify}
                    disabled={emailOtp.length !== 6 || isVerifyingEmail}
                  >
                    {isVerifyingEmail ? (
                      <>
                        <Loader2Icon
                          data-icon="inline-start"
                          className="animate-spin"
                        />
                        Verifying...
                      </>
                    ) : (
                      "Verify Code"
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setEmailOtp("");
                      setEmailError(false);
                    }}
                  >
                    Resend Code
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* SMS Verification */}
          <div className="border-border bg-card rounded-lg border p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-md p-2">
                  <SmartphoneIcon className="size-4" />
                </div>
                <div>
                  <h3 className="font-medium">SMS Verification</h3>
                  <p className="text-muted-foreground text-sm">
                    Enter the code sent to +1 (555) ***-**67
                  </p>
                </div>
              </div>
              {smsVerified && (
                <CheckCircle2Icon className="text-green-600 size-5" />
              )}
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="sms-otp">Verification Code</Label>
                <InputOTP
                  id="sms-otp"
                  maxLength={6}
                  value={smsOtp}
                  onChange={setSmsOtp}
                  disabled={smsVerified || isVerifyingSms}
                  pattern="^[0-9]+$"
                >
                  <InputOTPGroup aria-invalid={smsError}>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                {smsError && (
                  <p className="text-destructive text-sm">
                    Invalid code. Please try again. (Hint: try 654321)
                  </p>
                )}
                {smsVerified && (
                  <p className="text-green-600 text-sm">
                    Phone number verified successfully!
                  </p>
                )}
              </div>

              {!smsVerified && (
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleSmsVerify}
                    disabled={smsOtp.length !== 6 || isVerifyingSms}
                  >
                    {isVerifyingSms ? (
                      <>
                        <Loader2Icon
                          data-icon="inline-start"
                          className="animate-spin"
                        />
                        Verifying...
                      </>
                    ) : (
                      "Verify Code"
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSmsOtp("");
                      setSmsError(false);
                    }}
                  >
                    Resend Code
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Authenticator App */}
          <div className="border-border bg-card rounded-lg border p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-md p-2">
                  <ShieldCheckIcon className="size-4" />
                </div>
                <div>
                  <h3 className="font-medium">Authenticator App</h3>
                  <p className="text-muted-foreground text-sm">
                    Enter the 6-digit code from your authenticator app
                  </p>
                </div>
              </div>
              {authenticatorVerified && (
                <CheckCircle2Icon className="text-green-600 size-5" />
              )}
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="authenticator-otp">Authentication Code</Label>
                <InputOTP
                  id="authenticator-otp"
                  maxLength={6}
                  value={authenticatorOtp}
                  onChange={setAuthenticatorOtp}
                  disabled={authenticatorVerified || isVerifyingAuthenticator}
                  pattern="^[0-9]+$"
                  autoFocus={false}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                {authenticatorVerified && (
                  <p className="text-green-600 text-sm">
                    Authenticator verified successfully!
                  </p>
                )}
              </div>

              {!authenticatorVerified && (
                <Button
                  size="sm"
                  onClick={handleAuthenticatorVerify}
                  disabled={
                    authenticatorOtp.length !== 6 || isVerifyingAuthenticator
                  }
                >
                  {isVerifyingAuthenticator ? (
                    <>
                      <Loader2Icon
                        data-icon="inline-start"
                        className="animate-spin"
                      />
                      Verifying...
                    </>
                  ) : (
                    "Verify Code"
                  )}
                </Button>
              )}
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex justify-end gap-2 border-t pt-4">
            <Button variant="outline">Cancel</Button>
            <Button
              disabled={
                !emailVerified && !smsVerified && !authenticatorVerified
              }
            >
              <ShieldCheckIcon data-icon="inline-start" />
              Enable 2FA
            </Button>
          </div>
        </div>
      );
    }

    return <TwoFactorAuthPanel />;
  },
};

/**
 * Complete design system reference showing all InputOTP variants, patterns, and states.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function OTPExample({
      title,
      description,
      children,
    }: {
      title: string;
      description: string;
      children: React.ReactNode;
    }) {
      return (
        <div className="space-y-3">
          <div>
            <h4 className="font-medium">{title}</h4>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
          {children}
        </div>
      );
    }

    return (
      <div className="w-full max-w-4xl space-y-10">
        {/* Basic Patterns */}
        <section className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Basic Patterns</h3>
            <p className="text-muted-foreground text-sm">
              Common OTP input configurations for different use cases.
            </p>
          </div>

          <OTPExample
            title="6-Digit Code with Separator"
            description="Standard 2FA code with visual grouping"
          >
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </OTPExample>

          <OTPExample
            title="6-Digit Code without Separator"
            description="Compact layout for limited space"
          >
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </OTPExample>

          <OTPExample
            title="4-Digit PIN"
            description="Shorter code for quick verification"
          >
            <InputOTP maxLength={4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </OTPExample>

          <OTPExample
            title="8-Digit Code with Multiple Groups"
            description="Longer codes with multiple separators for readability"
          >
            <InputOTP maxLength={8}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={6} />
                <InputOTPSlot index={7} />
              </InputOTPGroup>
            </InputOTP>
          </OTPExample>
        </section>

        {/* States */}
        <section className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">States</h3>
            <p className="text-muted-foreground text-sm">
              Different input states for various interaction scenarios.
            </p>
          </div>

          <OTPExample title="Default" description="Empty state ready for input">
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </OTPExample>

          <OTPExample
            title="With Value"
            description="Partially or fully filled input"
          >
            <InputOTP maxLength={6} defaultValue="123">
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </OTPExample>

          <OTPExample title="Disabled" description="Non-interactive state">
            <InputOTP maxLength={6} disabled defaultValue="123456">
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </OTPExample>

          <OTPExample
            title="Invalid / Error"
            description="Error state for invalid codes"
          >
            <div className="space-y-2">
              <InputOTP maxLength={6} defaultValue="123456">
                <InputOTPGroup aria-invalid={true}>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup aria-invalid={true}>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-destructive text-sm">
                Invalid verification code
              </p>
            </div>
          </OTPExample>
        </section>

        {/* Real-World Examples */}
        <section className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Real-World Examples</h3>
            <p className="text-muted-foreground text-sm">
              Complete examples with labels, helper text, and actions.
            </p>
          </div>

          <OTPExample
            title="Email Verification"
            description="Full verification flow with label and actions"
          >
            <div className="space-y-2">
              <Label htmlFor="email-verification">
                Enter the code sent to your email
              </Label>
              <InputOTP id="email-verification" maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-muted-foreground text-sm">
                Didn't receive a code?{" "}
                <button className="text-primary hover:underline">Resend</button>
              </p>
            </div>
          </OTPExample>

          <OTPExample
            title="SMS Verification"
            description="Phone verification with resend functionality"
          >
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="sms-verification">
                  Enter the 6-digit code from SMS
                </Label>
                <InputOTP
                  id="sms-verification"
                  maxLength={6}
                  pattern="^[0-9]+$"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <p className="text-muted-foreground text-sm">
                  Code sent to +1 (555) ***-**67
                </p>
              </div>
              <div className="flex gap-2">
                <Button size="sm">Verify</Button>
                <Button variant="ghost" size="sm">
                  Resend Code
                </Button>
              </div>
            </div>
          </OTPExample>

          <OTPExample
            title="Backup Code Entry"
            description="8-digit backup code with formatted groups"
          >
            <div className="space-y-2">
              <Label htmlFor="backup-code">Enter your backup code</Label>
              <InputOTP id="backup-code" maxLength={8}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                  <InputOTPSlot index={6} />
                  <InputOTPSlot index={7} />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-muted-foreground text-sm">
                Use one of your backup codes if you don't have access to your
                authenticator app.
              </p>
            </div>
          </OTPExample>
        </section>

        {/* Pattern Validation */}
        <section className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Pattern Validation</h3>
            <p className="text-muted-foreground text-sm">
              InputOTP with different validation patterns.
            </p>
          </div>

          <OTPExample
            title="Numeric Only"
            description="Only accepts numbers (pattern: ^[0-9]+$)"
          >
            <InputOTP maxLength={6} pattern="^[0-9]+$">
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </OTPExample>

          <OTPExample
            title="Alphanumeric"
            description="Accepts letters and numbers (no pattern)"
          >
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </OTPExample>
        </section>
      </div>
    );
  },
};

/**
 * Interactive playground for testing InputOTP props.
 */
export const Interactive: Story = {
  render: ({ render: _render, ...args }) => {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="interactive-otp">Enter Code</Label>
          <InputOTP
            id="interactive-otp"
            value={value}
            onChange={setValue}
            {...args}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-muted-foreground text-sm">
            Current value: {value || "(empty)"}
          </p>
        </div>
      </div>
    );
  },
  args: {
    maxLength: 6,
    disabled: false,
    autoFocus: false,
  },
};
