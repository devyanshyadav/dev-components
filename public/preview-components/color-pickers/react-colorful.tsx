"use client";
import React, { useEffect, useState } from "react";
import { HexAlphaColorPicker } from "react-colorful";
import styled from "styled-components";
import { Tooltip as PopOver } from "react-tooltip";
import { createPortal } from "react-dom";

const PickerDiv = styled.div`
  .react-colorful {
    gap: 5px;
    width: 100%;
    height: 180px;
    border-radius: 0px;
  }
  .react-colorful__saturation {
    border-radius: 5px !important;
    width: 100%;
  }
  .react-colorful__hue,
  .react-colorful__alpha {
    border-radius: 5px !important;
    width: 100%;

    height: 12px !important;
  }
  .react-colorful__hue-pointer,
  .react-colorful__alpha-pointer,
  .react-colorful__saturation-pointer {
    width: 15px !important;
    height: 15px !important;
  }
`;
const ReactColorful = ({ color, setColor }:{color:string, setColor:(color:string)=>void}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <>
            {mounted &&
                createPortal(
                    <PopOver
                        id="colorful-picker-popover"
                        clickable={true}
                        events={["click"]}
                        place="bottom"
                        offset={2} opacity={1}
                        defaultIsOpen={false}
                        delayShow={0}
                        delayHide={0}
                        style={{
                            backgroundColor: "transparent",
                            padding: "0px",
                            zIndex: 1000,
                        }}
                    >
                        <PickerDiv className="your-component bg-slate-100 dark:bg-slate-900 p-2 border border-cyan-500/50 rounded-lg w-[200px] space-y-2">
                            <HexAlphaColorPicker
                                color={color}
                                onChange={(e) => setColor(e)}
                            />
                            <span className=" flex-col flex flex-1 text-sm text-center text-black dark:text-white">
                                <input
                                    spellCheck={false}
                                    type="text"
                                    className="w-full px-1 outline-none border-2 border-cyan-500 rounded-md border-transparent focus:border-cyan-400 bg-cyan-500/50"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </span>
                        </PickerDiv>
                    </PopOver>,
                    document.body
                )}
            <button
                data-tooltip-id="colorful-picker-popover"
                className="min-w-32  min-h-8 rounded-md border-2 border-cyan-500 focus:border-white"
                style={{
                    backgroundColor: color,
                }}
            ></button>
        </>
    );
};

export default ReactColorful;
