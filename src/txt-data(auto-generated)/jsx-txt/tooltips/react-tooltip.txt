"use client";
import React, { useId } from "react";
import { Tooltip } from "react-tooltip";

const ReactTooltip = ({ children, place = "top", tipData }) => {
    const Id = useId();
    return (
        <>
            <Tooltip
                id={Id}
                place={place}
                offset={2} opacity={1}
                style={{ backgroundColor: "transparent", padding: "0px" }}
            >
                <div className="bg-cyan-500/50 border border-cyan-500 text-sm px-2 rounded-full text-black dark:text-white">
                    {tipData}
                </div>
            </Tooltip>
            <div className="w-fit" data-tooltip-id={Id}>
                {children}
            </div>
        </>
    );
};

export default ReactTooltip;
