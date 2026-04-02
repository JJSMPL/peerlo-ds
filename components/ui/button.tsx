"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Peerlo Button
 *
 * Variants match the Figma design system:
 *   solid   — dark green fill, white label (primary CTA)
 *   outline — transparent fill, dark green border
 *   soft    — green-50 fill, dark green label
 *   link    — no background, underline on hover
 *   secondary — brand-blue fill (seeker flow)
 *
 * Sizes:
 *   sm  — 36px height
 *   md  — 48px height (default, full-width CTA)
 *   lg  — 56px height
 *   icon — square 48px
 */
const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2",
    "font-medium whitespace-nowrap transition-all duration-150",
    "outline-none select-none cursor-pointer",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        /** Primary solid — dark green fill */
        solid:
          "bg-primary text-primary-foreground shadow-xs hover:bg-green-700 active:bg-green-900",
        /** Outline — transparent with dark border */
        outline:
          "border border-primary bg-transparent text-primary hover:bg-accent active:bg-green-100",
        /** Soft — light green background */
        soft:
          "bg-accent text-green-700 hover:bg-green-100 active:bg-green-200",
        /** Link — no background */
        link:
          "text-primary underline-offset-4 hover:underline",
        /** Secondary — brand-blue (seeker flow) */
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-blue-400 active:bg-blue-500",
        /** Destructive */
        destructive:
          "bg-red-50 text-destructive border border-red-200 hover:bg-red-100 active:bg-red-200",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-3xl",
        md: "h-12 px-6 text-base rounded-3xl",
        lg: "h-14 px-8 text-base rounded-4xl",
        icon: "size-12 rounded-full",
        "icon-sm": "size-9 rounded-full",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      fullWidth: false,
    },
  }
)

type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants>

function Button({
  className,
  variant,
  size,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
