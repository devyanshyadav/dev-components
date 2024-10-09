"use client";
import styled from "styled-components";
import { ColorResult, Sketch } from "@uiw/react-color";
import DevPopoverV1 from "../../popovers/(dev-popover-v1)/dev-popover-v1";
import { useState } from "react";

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

const DevColorPickerV2 = ({
  defaultColor = { hex: "#E26F1D" },
  onChange,
}) => {
  const [color, setColor] = useState(defaultColor);

  const onChangeHandler = (e) => {
    setColor(e);
    onChange?.(e);
  };
  return (
    <DevPopoverV1
      button={
        <button
          data-tooltip-id="color-picker-popover"
          className="min-w-32 min-h-8 rounded-md border-2 border-ACCENT focus:border-white"
          style={{
            backgroundColor: color.hexa ? color.hexa : color.hex,
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
    </DevPopoverV1>
  );
};

export default DevColorPickerV2;
