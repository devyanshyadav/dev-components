"use client";
import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
type DevTooltipProps = {
  children: React.ReactNode;
  place?: "top" | "bottom" | "left" | "right";
  tipData: string;
  rootProps?: Omit<React.ComponentProps<typeof Tooltip.Root>, "children">;
  contentProps?: Omit<
    React.ComponentProps<typeof Tooltip.Content>,
    "children" | "className" | "side"
  >;
};

const DevTooltipV1 = ({
  children,
  place = "top",
  tipData,
  rootProps,
  contentProps,
}: DevTooltipProps) => {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root {...rootProps}>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            {...contentProps}
            side={place}
            className="bg-ACCENT text-white text-sm px-2 rounded-md z-50"
          >
            <Tooltip.Arrow className="fill-ACCENT" />
            {tipData}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default DevTooltipV1;
