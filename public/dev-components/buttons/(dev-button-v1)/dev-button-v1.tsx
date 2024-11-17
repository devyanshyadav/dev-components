import React from "react";

// Simple implementation of the `cn` function to merge tailwind classes
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ");
};

type ButtonProps = {
  variant?: "solid" | "border" | "light" | "flat" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  rounded?: "sm" | "md" | "lg" | "full" | "none";
  ripple?: boolean;
  asIcon?: boolean;
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<"button"> &
  React.ComponentProps<"a">;

const DevButtonV1 = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = "solid",
      size = "md",
      href,
      rounded = "md",
      ripple = false,
      asIcon = false,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const baseStyle = `transition-all outline-0 flex items-center active:scale-95 justify-center  
    ${!asIcon && "gap-1.5 text-nowrap"}`;

    const variantStyles = {
      solid: "bg-ACCENT text-white hover:bg-ACCENT/90",
      light: "text-ACCENT hover:bg-ACCENT/50 hover:text-white",
      border: "border text-ACCENT border-2 border-ACCENT",
      flat: "border-ACCENT/5 bg-ACCENT/30 text-ACCENT backdrop-blur-sm",
      ghost:
        "text-ACCENT hover:bg-ACCENT hover:text-white border-2 border-ACCENT",
    };

    const sizeStyles = {
      sm: asIcon ? "*:h-3 *:w-3" : "py-1 px-4 text-sm",
      md: asIcon ? "*:h-5 *:w-5" : "py-1.5 px-5 text-base",
      lg: asIcon ? "*:h-6 *:w-6" : "py-2 px-7",
    };

    const roundedStyles = {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-2xl",
      full: "rounded-full",
      none: "rounded-none",
    };

    const Link = "a"; //Remove this for next js and import next/link
    const Component = href ? Link : "button";

    return (
      <Component
        ref={ref as any}
        href={href as string}
        {...rest}
        className={cn(
          baseStyle,
          variantStyles[variant],
          sizeStyles[size],
          roundedStyles[rounded],
          asIcon && "aspect-square p-1.5",
          href && "underline",
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

DevButtonV1.displayName = "Button";

export default DevButtonV1;
