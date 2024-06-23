"use client";
import clsx from "clsx";
import React, { useState } from "react";

const DevLaserInput = ({
  scale = "md",
  rounded = "full",
  laserColor = "#01FFF5",
  laserActiveOnClick = true,
  reverseIcon = false,
  icon,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [childPosition, setChildPosition] = useState(0);
  const [active, setActive] = useState(false);

  const [childColor, setChildColor] = useState(
    `linear-gradient(to right, transparent, ${laserColor}, transparent)`
  );
  const handleMouseMove = (e) => {
    const parentRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - parentRect.left - 50;

    if (x < 0) {
      setChildPosition(0);
      setChildColor(
        `linear-gradient(to right, ${laserColor}, ${laserColor}, transparent)`
      );
    } else if (x > parentRect.width - 100) {
      setChildPosition(parentRect.width - 96);
      setChildColor(
        `linear-gradient(to right, transparent, ${laserColor}, ${laserColor})`
      );
    } else {
      setChildPosition(x);
      setChildColor(
        `linear-gradient(to right, transparent, ${laserColor} 50%, transparent)`
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
          isHovered || (active && laserActiveOnClick) ? "block" : "hidden",
          active ? "w-full  transition-all  duration-200 opacity-50" : "w-24"
        )}
        style={{
          left: `${active ? 0 : childPosition}px`,
          background: active ? "#01FFF5" : childColor,
        }}
      />

      <div
        className={clsx(
          InputRounded,
          "absolute text-sm px-2 inset-[2px] flex items-center justify-center flex-grow border border-cyan-500/50 bg-white dark:bg-slate-900 gap-2  outline outline-cyan-500/20",
          className, reverseIcon && "flex-row-reverse"
        )}
      >
        {icon && <span className={clsx("z-10", laserColor)}>{icon}</span>}
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

export default DevLaserInput;
