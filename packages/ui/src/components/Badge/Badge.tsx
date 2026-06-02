import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";
import { cn } from "../../lib/cn";

/**
 * Badge — mirrors the Figma `Badge` component.
 * A pill-shaped label with variant-driven colors; all colors/spacing/radius
 * come from @ds/tokens via Tailwind theme vars.
 */
export const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Optional leading icon (any lucide-react icon). Maps to the Figma `leadingIcon` slot. */
  leadingIcon?: LucideIcon;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, leadingIcon: Leading, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      >
        {Leading ? <Leading size={12} aria-hidden /> : null}
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";
