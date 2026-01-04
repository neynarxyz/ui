"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";

import { cn } from "@/lib/utils";
import { MinusIcon } from "lucide-react";

type InputOTPProps = React.ComponentProps<typeof OTPInput> & {
  /** Additional class names for the container element. */
  containerClassName?: string;
};

/**
 * One-time password input with individual character slots.
 * Built on input-otp library with styled slots and separators.
 */
function InputOTP({ className, containerClassName, ...props }: InputOTPProps) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "cn-input-otp flex items-center has-disabled:opacity-50",
        containerClassName,
      )}
      spellCheck={false}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

type InputOTPGroupProps = React.ComponentProps<"div">;

/**
 * Groups multiple InputOTPSlot components together.
 * Supports error state via aria-invalid.
 */
function InputOTPGroup({ className, ...props }: InputOTPGroupProps) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn(
        "has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive rounded-md has-aria-invalid:ring-[3px] flex items-center",
        className,
      )}
      {...props}
    />
  );
}

type InputOTPSlotProps = React.ComponentProps<"div"> & {
  /** Zero-based index of this slot in the OTP sequence. */
  index: number;
};

/**
 * Individual character slot for OTP input.
 * Displays current character, active state, and animated caret.
 */
function InputOTPSlot({ index, className, ...props }: InputOTPSlotProps) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "dark:bg-input/30 border-input data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive size-9 border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:ring-[3px] relative flex items-center justify-center data-[active=true]:z-10",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000 bg-foreground h-4 w-px" />
        </div>
      )}
    </div>
  );
}

type InputOTPSeparatorProps = React.ComponentProps<"div">;

/**
 * Visual separator between InputOTPGroup components.
 * Renders a minus icon by default.
 */
function InputOTPSeparator({ ...props }: InputOTPSeparatorProps) {
  return (
    <div
      data-slot="input-otp-separator"
      className="[&_svg:not([class*='size-'])]:size-4 flex items-center"
      role="separator"
      {...props}
    >
      <MinusIcon />
    </div>
  );
}

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  type InputOTPProps,
  type InputOTPGroupProps,
  type InputOTPSlotProps,
  type InputOTPSeparatorProps,
};
