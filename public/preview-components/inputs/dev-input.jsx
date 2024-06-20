"use client";
import clsx from "clsx";
import React, { useState } from "react";

const DevInput = ({
  variant = "base",
  scale = "md",
  labelName,
  icon,
  rounded = "full",
  reverseIcon = false,
  children,
  ...props
}) => {
  const [active, setActive] = useState(false);
  const commonStyle = "w-full flex items-center gap-2 text-white ";
  const inputVariants = {
    base: clsx(
      "bg-white dark:bg-slate-800 border border-cyan-500 outline-cyan-500 rounded-full"
    ),
    bordered:
      "bg-transparent border border-cyan-500 outline-cyan-500 rounded-full",
    faded:
      "bg-cyan-500/20 border border-cyan-500 outline-cyan-500 rounded-full text-cyan-500",
    underline: clsx(
      " border-b-4 border-cyan-700 outline-none relative after:content-[''] after:absolute after:h-1 after:bg-cyan-500 after:-bottom-1 after:w-full after:scale-x-0  after:transition after:duration-300 after:origin-center rounded-none px-0",
      active && "after:scale-x-100"
    ),
  };

  const inputRoundness = {
    none: "rounded-none",
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full",
  };

  const inputSizes = {
    sm: "p-1",
    md: "p-2",
    lg: "p-3",
  };
  const inputSize = inputSizes[scale] || inputSizes.md;
  const inputVariant = inputVariants[variant] || inputVariants.base;
  const inputRound = inputRoundness[rounded] || inputRoundness.full;

  return (
    <div>
      {labelName && (
        <label
          htmlFor={labelName}
          className={clsx("text-sm", active && "!text-cyan-500")}
        >
          {labelName}
        </label>
      )}

      <div
        className={clsx(
          active && "outline outline-2",
          inputSize,
          commonStyle,
          inputRound,
          inputVariant,
          props.className
        )}
      >
        <span className="text-xl text-cyan-500">{icon}</span>
        <input
          id={labelName && labelName}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          {...props}
          className="focus:bg-transparent rounded-xl px-1 bg-transparent text-sm outline-none w-full"
        />
      </div>
    </div>
  );
};

export default DevInput;
