"use client"; // Require when ripple functionality is needed in NextJS
import React from "react";
import clsx from "clsx";
import useRipple from "use-ripple-hook";

const DevButton = ({
  variant = "solid",
  size = "md",
  href,
  rounded,
  ripple = false,
  icon,
  children,
  ...props
}) => {
  const commonStyle =
    "transition-all flex items-center gap-1 text-nowrap justify-center active:scale-95 w-fit h-fit ";

  const buttonVariants = {
    solid: " bg-cyan-500 text-white",
    border: "text-cyan-500 font-semibold border-2 border-cyan-500", // Changed from 'outline'
    light: "hover:bg-cyan-500/30 text-cyan-500 font-semibold border-2 border-cyan-500",
    flat: "border-cyan-500/5 bg-cyan-500/20 text-cyan-500 font-semibold backdrop-blur-sm ",
    ghost: "text-cyan-500 hover:bg-cyan-500 hover:text-white font-semibold border-2 border-cyan-500",
  };

  const buttonSizes = {
    sm: icon ? "p-[4px] aspect-square" : "p-1 px-3",
    md: icon ? "p-1 aspect-square" : "p-2 px-5",
    lg: icon ? "p-2 aspect-square" : "p-3 px-7",
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
  const ButtonComponent = href ? "a" : "button";

  return (
    <ButtonComponent
      ref={rippleState}
      href={href}
      {...props}
      {...(ripple && { onPointerDown: event })}
      className={clsx(
        commonStyle,
        buttonVariant,
        buttonSizeClass,
        buttonRoundnessClass,
        ButtonComponent === "a" && "underline",
        props.className
      )}
    >
      {children}
    </ButtonComponent>
  );
};

export default DevButton;
