"use client";
import clsx from "clsx";
import React, { useState } from "react";

const DevInputV2 = ({
  scale = "sm",
  rounded = "full",
  laserActiveOnClick = true,
  reverseIcon = false,
  icon,
  className,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [childPosition, setChildPosition] = useState(0);
  const [active, setActive] = useState(false);

  const [childColor, setChildColor] = useState(
    `bg-gradient-to-r from-transparent via-ACCENT to-transparent`
  );
  const handleMouseMove = (e) => {
    const parentRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - parentRect.left - 50;

    if (x < 0) {
      setChildPosition(0);
      setChildColor(
        `bg-gradient-to-r from-ACCENT via-ACCENT to-transparent`
      );
    } else if (x > parentRect.width - 100) {
      setChildPosition(parentRect.width - 96);
      setChildColor(
        `bg-gradient-to-r from-transparent via-ACCENT to-ACCENT`
      );
    } else {
      setChildPosition(x);
      setChildColor(
        `bg-gradient-to-r from-transparent via-ACCENT to-transparent`
      );
    }
  };
  const InputSizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };
  const InputRoundness = {
    none: "rounded-none",
    sm: "rounded-md",
    md: "rounded-xl",
    full: "rounded-full",
  };
  const InputSize = InputSizes[scale] || InputSizes.md;
  const InputRounded = InputRoundness[rounded] || InputRoundness.md;

  return (
    <div
      className={clsx(
        InputSize,
        InputRounded,
        "relative w-full overflow-hidden"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <span
        className={clsx(
          "absolute top-0 bottom-0 rounded-lg ",
          active ? "bg-ACCENT" : childColor,
          isHovered || (active && laserActiveOnClick) ? "block" : "hidden",
          active ? "w-full  transition-all  duration-200 opacity-50" : "w-24"
        )}
        style={{
          left: `${active ? 0 : childPosition}px`,
        }}
      />

      <div
        className={clsx(
          InputRounded,
          "absolute text-sm px-2 inset-[2px] flex items-center justify-center flex-grow border border-ACCENT/50 bg-LIGHT dark:bg-DARK gap-2  outline outline-ACCENT/20",
          className,
          reverseIcon && "flex-row-reverse"
        )}
      >
        {icon && <span className={clsx("z-10 ACCENT")}>{icon}</span>}
        <input
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          spellCheck="false"
          {...props}
          className="w-full outline-none bg-transparent"
        />
      </div>
    </div>
  );
};

export default DevInputV2;
