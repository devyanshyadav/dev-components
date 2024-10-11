"use client";
import React, { useEffect, useState } from "react";
import { HexAlphaColorPicker } from "react-colorful";
import styled from "styled-components";
import DevPopoverV1 from "../../popovers/(dev-popover-v1)/dev-popover-v1";

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

type ColorPickerProps = {
  defaultColor?: string;
  onChange?: (color: string) => void;
};

const DevColorPickerV1 = ({
  defaultColor = "#E26F1D",
  onChange,
}: ColorPickerProps) => {
  const [color, setColor] = useState(defaultColor);
  const onChangeHandler = (e: string) => {
    setColor(e);
    onChange?.(e);
  };

  useEffect(() => {
    setColor(defaultColor);
  }, [defaultColor])
  return (
    <DevPopoverV1
      button={
        <button
          data-tooltip-id="colorful-picker-popover"
          className="min-w-32  min-h-8 rounded-md border-2 border-ACCENT focus:border-white"
          style={{
            background: color,
          }}
        />
      }
    >
      <PickerDiv className="bg-LIGHT dark:bg-DARK p-1 rounded-lg w-[200px] space-y-2">
        <HexAlphaColorPicker
          color={color}
          onChange={(newColor) => onChangeHandler?.(newColor)}
        />
        <span className=" flex-col flex flex-1 text-sm text-center text-black dark:text-white">
          <input
            spellCheck={false}
            type="text"
            className="w-full px-1 outline-none border-2 border-ACCENT rounded-md border-transparent focus:border-ACCENT bg-ACCENT/50"
            value={color}
            onChange={(e) => onChangeHandler(e.target.value)}
          />
        </span>
      </PickerDiv>
    </DevPopoverV1>
  );
};

export default DevColorPickerV1;
