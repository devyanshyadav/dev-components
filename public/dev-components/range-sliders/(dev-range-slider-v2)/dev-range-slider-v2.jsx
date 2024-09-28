"use client";
import React from "react";
import * as Slider from "@radix-ui/react-slider";
const DevRangeSliderV2 = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  onChange,
}) => {
  return (
    <Slider.Root
      onValueChange={(e) => onChange?.(e)}
      className="relative flex items-center select-none touch-none w-full h-5 overflow-hidden rounded-full"
      defaultValue={[defaultValue]}
      max={max}
      step={step}
      min={min}
    >
      <Slider.Track className="relative grow rounded-full h-full bg-accentNeon/40 overflow-hidden">
        <Slider.Thumb
          className="block h-5 focus:outline-none active:border-4 aspect-square border-2 shadow-[-1008px_0_0_1000px] shadow-accentNeon  bg-accentNeon transition-all rounded-full cursor-pointer  dark:border-rtlLight border-rtlDark"
          aria-label="Slider"
        />
      </Slider.Track>
    </Slider.Root>
  );
};

export default DevRangeSliderV2;
