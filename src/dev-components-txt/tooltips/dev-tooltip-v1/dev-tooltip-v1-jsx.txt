"use client";
import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

const DevTooltipV1 = ({
  children,
  place = "top",
  tipData,
  rootProps,
  contentProps,
}) => {
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
