"use client";
import React, { useId } from "react";
import { Tooltip } from "react-tooltip";

const DevTooltipV2 = ({ children, place = "top", tipData }) => {
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
                <span className="bg-ACCENT/50 border border-ACCENT text-sm px-2 rounded-full text-black z-50 dark:text-white">
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
