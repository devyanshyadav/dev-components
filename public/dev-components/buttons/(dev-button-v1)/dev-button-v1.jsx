"use client"; // Require when ripple functionality is needed in NextJS
import React from "react";
import clsx from "clsx";
import useRipple from "use-ripple-hook";

const DevButtonV1 = ({
  variant = "solid",
  size = "md",
  href = "",
  rounded = "md",
  ripple = false,
  asIcon,
  children,
  className,
  ...rest
}) => {
  const commonStyle =
    "transition-all flex items-center gap-1 text-nowrap justify-center active:scale-95";

  const buttonVariants = {
    solid: "bg-accentNeon text-white",
    border: "text-accentNeon font-semibold border-2 border-accentNeon",
    light:
      "hover:bg-accentNeon/30 text-accentNeon font-semibold border-2 border-accentNeon",
    flat: "border-accentNeon/5 bg-accentNeon/20 text-accentNeon font-semibold backdrop-blur-sm ",
    ghost:
      "text-accentNeon hover:bg-accentNeon hover:text-white font-semibold border-2 border-accentNeon",
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
};

export default DevButtonV1;
