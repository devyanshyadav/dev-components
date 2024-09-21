import clsx from "clsx";
import React from "react";

const DevInputV1 = ({
  variant = "base",
  scale = "md",
  labelName,
  className,
  icon,
  rounded = "full",
  reverseIcon = false,
  children,
  ...props
}) => {
  const commonStyle = clsx(
    "w-full flex items-center gap-2",
    reverseIcon && "flex-row-reverse"
  );
  const inputVariants = {
    base: clsx(
      "bg-rtlLight dark:bg-rtlDark border border-accentNeon outline-accentNeon rounded-full"
    ),
    bordered:
      "bg-transparent border border-accentNeon outline-accentNeon rounded-full",
    faded:
      "bg-accentNeon/20 border border-accentNeon outline-accentNeon rounded-full text-accentNeon",
    underline: "border-b-4 border-accentNeon/40 outline-none relative after:content-[''] after:absolute after:h-1 after:bg-accentNeon after:-bottom-1 after:w-full after:scale-x-0  after:transition after:duration-300 after:origin-center rounded-none px-0 has-[:focus]:after:scale-x-100"
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
        <label htmlFor={labelName} className="text-sm block m-1">
          {labelName}
        </label>
      )}

      <div
        className={clsx(
          "has-[:focus]:outline has-[:focus]:outline-2",
          inputSize,
          commonStyle,
          inputRound,
          inputVariant,
          className
        )}
      >
        <span className="text-xl text-accentNeon">{icon}</span>
        <input
          id={labelName && labelName}
          {...props}
          className="focus:bg-transparent rounded-xl px-1 bg-transparent text-sm outline-none w-full"
        />
      </div>
    </div>
  );
};

export default DevInputV1;
