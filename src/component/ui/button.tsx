import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default: "bg-yellow-500 text-black hover:bg-yellow-400",
        outline:
          "border border-black/15 bg-transparent hover:bg-neutral-100 dark:border-white/20 dark:hover:bg-neutral-900",
        ghost: "hover:bg-neutral-100 dark:hover:bg-neutral-900",
      },
      size: {
        default: "h-10 px-4 py-2",
        lg: "h-12 px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);

Button.displayName = "Button";

export { Button, buttonVariants };
