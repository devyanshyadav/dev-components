import React from "react";

type InputProps = {
  variant?: "base" | "bordered" | "faded" | "underline";
  scale?: "sm" | "md" | "lg";
  labelName?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  reverseIcon?: boolean;
  icon?: React.ReactNode;
  className?: string;
} & React.ComponentProps<"input">;

const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ");
};

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
}: InputProps) => {
  const commonStyle = `w-full flex outline-offset-2 border border-ACCENT outline-ACCENT items-center ${
    icon && "gap-2"
  },
    ${reverseIcon && "flex-row-reverse"}`;
  const inputVariants = {
    base: "bg-LIGHT dark:bg-DARK",
    bordered: "bg-transparent",
    faded: "bg-ACCENT/20 text-ACCENT",
    underline:
      "border-0 !outline-0 !border-ACCENT/50 border-b-4 relative after:content-[''] after:absolute after:h-1 after:bg-ACCENT after:-bottom-1 after:w-full after:scale-x-0  after:transition after:duration-300 after:origin-center rounded-none px-0 has-[:focus]:after:scale-x-100",
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
        className={cn(
          "has-[:focus]:outline has-[:focus]:outline-2",
          inputSize,
          commonStyle,
          inputRound,
          inputVariant,
          className
        )}
      >
        <span className="text-xl text-ACCENT">{icon}</span>
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
