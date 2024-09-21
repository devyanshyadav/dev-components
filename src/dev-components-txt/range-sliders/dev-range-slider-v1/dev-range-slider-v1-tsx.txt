"use client";
import React from "react";
import * as Slider from "@radix-ui/react-slider";

type RangeSliderProps = {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: any) => void;
};
const DevRangeSliderV1 = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  onChange,
}: RangeSliderProps) => {
  return (
    <Slider.Root
      onValueChange={(e) => onChange?.(e)}
      className="relative flex items-center select-none touch-none w-full h-5 rounded-full"
      defaultValue={[defaultValue]}
      max={max}
      step={step}
      min={min}
    >
      <Slider.Track className="relative grow rounded-full h-2 bg-accentNeon/40">
        <Slider.Range className="absolute bg-accentNeon rounded-full h-2 rounded-r-none" />
      </Slider.Track>
      <Slider.Thumb
        className="block w-5 h-5 focus:outline-none bg-accentNeon transition-all rounded-full border-2 cursor-pointer active:border-4 dark:border-rtlLight border-rtlDark"
        aria-label="Slider"
      />
    </Slider.Root>
  );
};

export default DevRangeSliderV1;
