import { Toaster as Sonner, toast, type ToasterProps } from "sonner";
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react";

type ToasterComponentProps = ToasterProps;

/**
 * Toast notification container with themed icons and color system integration.
 *
 * Provides a pre-configured Sonner toaster with custom icons for each toast type
 * and automatic theme integration. Use the exported `toast` function to trigger notifications.
 *
 * @example
 * ```tsx
 * // Add to your app root
 * <Toaster position="bottom-right" />
 *
 * // Trigger toasts anywhere
 * toast.success("Saved successfully")
 * toast.error("Failed to save", { description: error.message })
 * ```
 */
function Toaster({
  theme = "system",
  richColors = true,
  ...props
}: ToasterComponentProps) {
  return (
    <Sonner
      data-slot="toaster"
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      richColors={richColors}
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
          // Success
          "--success-bg": "oklch(from var(--success) l c h / 10%)",
          "--success-text": "var(--success)",
          "--success-border": "oklch(from var(--success) l c h / 30%)",
          // Error
          "--error-bg": "oklch(from var(--destructive) l c h / 10%)",
          "--error-text": "var(--destructive)",
          "--error-border": "oklch(from var(--destructive) l c h / 30%)",
          // Warning
          "--warning-bg": "oklch(from var(--warning) l c h / 10%)",
          "--warning-text": "var(--warning)",
          "--warning-border": "oklch(from var(--warning) l c h / 30%)",
          // Info
          "--info-bg": "oklch(from var(--info) l c h / 10%)",
          "--info-text": "var(--info)",
          "--info-border": "oklch(from var(--info) l c h / 30%)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "group backdrop-blur-md",
        },
      }}
      {...props}
    />
  );
}

export { Toaster, toast, type ToasterComponentProps };
