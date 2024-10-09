//TSX code
"use client";
import styled from "styled-components";
import { ColorResult, Sketch } from "@uiw/react-color";
import { useEffect, useState } from "react";
import ColorPopover from "./color-popover";

const PickerDiv = styled.div`
  .w-color-sketch {
    border-radius: 8px !important;
    padding-bottom: 5px !important;
  }
  .w-color-sketch div,
  .w-color-sketch input {
    border-radius: 6px !important;
    font-weight: 500 !important;
    color: black !important;
  }
`;

type DevColorPickerProps = {
  defaultColor?: {
    rgb?: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
    hex?: string;
  };
  onChange?: (color: ColorResult) => void;
};

const ColorPckr = ({
  defaultColor = { hex: "#E26F1D" },
  onChange,
}: DevColorPickerProps) => {
  const [color, setColor] = useState<ColorResult | any>(defaultColor);

  const onChangeHandler = (e: ColorResult) => {
    setColor(e);
    onChange?.(e);
  };

  useEffect(() => {
    setColor(defaultColor);
  }, [defaultColor])
  
  return (
    <ColorPopover
      button={
        <button
          data-tooltip-id="color-picker-popover"
          className="rounded-md h-10 aspect-square border-2 border-accentNeon/70 focus:border-white"
          style={{
            backgroundColor: color.hex,
          }}
        />
      }
    >

      <PickerDiv>
        <Sketch
          color={color.hex}
          onChange={onChangeHandler}
          presetColors={["#E26F1D", "#F17013", "#F8C471"]}
        />
      </PickerDiv>
    </ColorPopover>
  );
};

export default ColorPckr;
