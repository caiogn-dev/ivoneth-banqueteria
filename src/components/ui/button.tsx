// src/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold rounded-xl transition focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-rose-600 text-white hover:bg-rose-700",
        outline: "border border-[color:var(--brand-ink)] text-[color:var(--brand-ink)] hover:bg-red-50",
        brand:
          "bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white hover:brightness-110",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-12 px-8 rounded-full",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
