import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/cn";

/**
 * Spinner — mirrors the Figma `Spinner` component.
 * A spinning loader built on lucide-react `Loader2`; sizes map to the
 * Figma size variants (sm/md/lg) and color comes from the foreground token.
 */
const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
} as const;

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the spinner — maps to the Figma size variant. */
  size?: "sm" | "md" | "lg";
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", "aria-label": ariaLabel = "Loading", ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label={ariaLabel}
        className={cn("inline-flex", className)}
        {...props}
      >
        <Loader2 className="animate-spin text-foreground" size={sizeMap[size]} aria-hidden />
      </div>
    );
  }
);
Spinner.displayName = "Spinner";
