"use client";
import React from "react";
import * as Tooltip from '@radix-ui/react-tooltip';
type DevTooltipProps = {
  children: React.ReactNode;
  place?: "top" | "bottom" | "left" | "right";
  tipData: string;
};

const DevTooltipV1 = ({
  children,
  place = "top",
  tipData,
}: DevTooltipProps) => {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side={place} className="bg-ACCENT text-sm px-2 rounded-md z-50">
            <Tooltip.Arrow className="fill-ACCENT" />
            {tipData}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default DevTooltipV1;
