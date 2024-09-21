"use client";
import React from "react";
import * as Tooltip from '@radix-ui/react-tooltip';

const DevTooltipV1 = ({
  children,
  place = "top",
  tipData,
}) => {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side={place} className="bg-accentNeon text-sm px-2 rounded-md">
            <Tooltip.Arrow className="fill-accentNeon" />
            {tipData}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default DevTooltipV1;
