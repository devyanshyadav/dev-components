// DevButtonV1.tsx
"use client";
import React, { forwardRef } from "react";
import clsx from "clsx";
import useRipple from "use-ripple-hook";

type DevButton = {
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

const DevButtonV1 = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  DevButton
>(
  (
    {
      variant = "solid",
      size = "md",
      href = "",
      rounded = "md",
      ripple = false,
      asIcon,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const commonStyle =
      "transition-all flex items-center gap-1 text-nowrap justify-center active:scale-95";

    const buttonVariants = {
      solid: "bg-ACCENT text-white",
      border: "text-ACCENT font-semibold border-2 border-ACCENT",
      light:
        "hover:bg-ACCENT/30 text-ACCENT font-semibold border-2 border-ACCENT",
      flat: "border-ACCENT/5 bg-ACCENT/20 text-ACCENT font-semibold backdrop-blur-sm",
      ghost:
        "text-ACCENT hover:bg-ACCENT hover:text-white font-semibold border-2 border-ACCENT",
    };

    const buttonSizes = {
      sm: asIcon ? "p-[4px] aspect-square" : "p-1 px-3",
      md: asIcon ? "p-1 aspect-square" : "p-2 px-5",
      lg: asIcon ? "p-2 aspect-square" : "p-3 px-7",
    };

    const buttonRoundness = {
      sm: "rounded-sm",
      md: "rounded-lg",
      lg: "rounded-2xl",
      full: "rounded-full",
      none: "rounded-none",
    };

    const buttonVariant = buttonVariants[variant] || buttonVariants.solid;
    const buttonSizeClass = buttonSizes[size] || buttonSizes.md;
    const buttonRoundnessClass = buttonRoundness[rounded] || buttonRoundness.md;
    const [rippleState, event] = useRipple();

    const Link = "a"; //Remove this for next js and import next/link
    const ButtonComponent = href ? Link : "button";

    return (
      <ButtonComponent
        ref={rippleState}
        href={href}
        {...rest}
        {...(ripple && { onPointerDown: event })}
        className={clsx(
          commonStyle,
          buttonVariant,
          buttonSizeClass,
          buttonRoundnessClass,
          ButtonComponent === Link && "underline",
          className
        )}
      >
        {children}
      </ButtonComponent>
    );
  }
);

export default DevButtonV1;
