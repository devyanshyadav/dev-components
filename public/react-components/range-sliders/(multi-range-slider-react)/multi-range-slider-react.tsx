"use client";
import React, { useEffect, useState } from "react";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import styled from "styled-components";

const RangeDiv = styled.div`
  .multi-range-slider .thumb .caption * {
    background-color: #0e7490 !important;
    box-shadow: inset 0px 0px 5px transparent !important;
    border-radius: 8px !important;
  }
  .multi-range-slider .bar-left,
  .multi-range-slider .bar-right {
    box-shadow: inset 0px 0px 5px transparent !important;

    // The height of the range container
    height: 20px !important;
  }
  .multi-range-slider .bar-inner {
    box-shadow: inset 0px 0px 5px transparent !important;
    border: none !important;
  }
  .multi-range-slider .thumb {
    border: 2px solid #22d3ee !important;
    margin-top: 6px !important;
  }
  .multi-range-slider .thumb::before {
    box-shadow: inset 0px 0px 5px transparent !important;
    border: 2px solid #22d3ee !important;
    height: 20px !important;
    width: 20px !important;

    // the position of the thumb needs to be adjusted while height of the container changes
    margin-left: -9px !important;
  }
`;

type multiRangeSliderReactProps = {
  currMinValue: number;
  currMaxValue: number;
  setCurrMinValue: React.Dispatch<React.SetStateAction<number>>;
  setCurrMaxValue: React.Dispatch<React.SetStateAction<number>>;
  min: number;
  max: number;
  step?: number;
};

function MultiRangeSliderReact({
  currMinValue,
  currMaxValue,
  setCurrMinValue,
  setCurrMaxValue,
  min,
  max,
  step = 1,
}: multiRangeSliderReactProps) {
  const handleInput = (e: ChangeResult) => {
    setCurrMinValue(e.minValue);
    setCurrMaxValue(e.maxValue);
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <RangeDiv className="w-full">
      {mounted ? (
        <MultiRangeSlider
          preventWheel={false}
          baseClassName="multi-range-slider"
          minCaption={`Rs. ${currMinValue}`}
          maxCaption={`Rs. ${currMaxValue}`}
          ruler={false}
          label={false}
          barLeftColor="#0E7490"
          barInnerColor="#22D3EE"
          barRightColor="#0E7490"
          thumbLeftColor="#0E7490"
          thumbRightColor="#0E7490"
          className="bg-transparent !border-0 !shadow-none"
          min={min}
          max={max}
          step={step}
          minValue={currMinValue}
          maxValue={currMaxValue}
          onInput={(e) => {
            handleInput(e);
          }}
        />
      ) : (
        <span>Slider loading...</span>
      )}
    </RangeDiv>
  );
}

export default MultiRangeSliderReact;
