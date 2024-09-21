"use client";
import React, { useId } from "react";
import { Tooltip } from "react-tooltip";

type DevTooltipV2 = {
  children: React.ReactNode;
  place?: 'top' | 'bottom' | 'left' | 'right';
  tipData: string;
};

const DevTooltipV2 = ({
  children,
  place = "top",
  tipData,
}: DevTooltipV2) => {
  const Id = useId();
  return (
    <>
      <Tooltip
        id={Id}
        place={place}
        offset={2}
        opacity={1}
        style={{ backgroundColor: "transparent", padding: "0px" }}
      >
        <span className="bg-accentNeon/50 border border-accentNeon text-sm px-2 rounded-full text-black dark:text-white">
          {tipData}
        </span>
      </Tooltip>
      <div className="w-fit" data-tooltip-id={Id}>
        {children}
      </div>
    </>
  );
};

export default DevTooltipV2;