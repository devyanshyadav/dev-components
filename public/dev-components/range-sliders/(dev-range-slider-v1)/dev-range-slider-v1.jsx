"use client";
import React from "react";
import * as Slider from "@radix-ui/react-slider";

const DevRangeSliderV1 = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  onChange,
}) => {
  return (
    <Slider.Root
      onValueChange={(e) => onChange?.(e)}
      className="relative flex items-center select-none touch-none w-full h-5 rounded-full"
      defaultValue={[defaultValue]}
      max={max}
      step={step}
      min={min}
    >
      <Slider.Track className="relative grow rounded-full h-2 bg-ACCENT/40">
        <Slider.Range className="absolute bg-ACCENT rounded-full h-2 rounded-r-none" />
      </Slider.Track>
      <Slider.Thumb
        className="block w-5 h-5 focus:outline-none bg-ACCENT transition-all rounded-full border-2 cursor-pointer active:border-4 dark:border-LIGHT border-DARK"
        aria-label="Slider"
      />
    </Slider.Root>
  );
};

export default DevRangeSliderV1;
