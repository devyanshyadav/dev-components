"use client";
import React, { useEffect, useRef } from "react";

type DevRangeSliderProps = {
  currValue: number;
  setCurrValue: React.Dispatch<React.SetStateAction<number>>;
  size?: "md" | "sm" | "lg";
  minValue?: number;
  maxValue?: number;
  step?: number;
};

const DevRangeSlider: React.FC<DevRangeSliderProps> = ({
  currValue,
  setCurrValue,
  size = "md",
  minValue = 0,
  maxValue = 10,
  step=1
}) => {
  const thumbRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sizes = {
    sm: 1,
    md: 1.2,
    lg: 1.5,
  };

  const sliderSize = sizes[size] || sizes["md"];

  useEffect(() => {
    const updateThumbPosition = () => {
      if (thumbRef.current && inputRef.current) {
        const valueRange = maxValue - minValue;
        const thumbPosition =
          (Number(inputRef.current.value) - minValue) / valueRange;
        const thumbWidth = thumbRef.current.offsetWidth;
        const trackWidth = inputRef.current.offsetWidth - thumbWidth;
        thumbRef.current.style.left = thumbPosition * trackWidth + "px";
      }
    };

    updateThumbPosition();
    const inputElement = inputRef.current;
    inputElement?.addEventListener("input", updateThumbPosition);

    return () => {
      inputElement?.removeEventListener("input", updateThumbPosition);
    };
  }, [currValue, minValue, maxValue]);

  return (
    <div
      style={{ height: `${sliderSize}rem` }}
      className="relative w-full grid place-items-center border border-cyan-500 rounded-full overflow-hidden bg-cyan-700 group"
    >
      <button
        className="h-full aspect-square shadow-[-1008px_0_0_1000px] shadow-cyan-400 outline outline-cyan-400 scale-90 group-active:border-4 transition-[border] border-cyan-400 cursor-pointer border-2 bg-cyan-700 rounded-full absolute"
        ref={thumbRef}
      ></button>
      <input
        type="range"
        className="w-full absolute [&::-moz-range-thumb]:cursor-pointer opacity-0 h-6 [&::-webkit-slider-thumb]:scale-[2] [&::-webkit-slider-thumb]:cursor-pointer"
        ref={inputRef}
        min={minValue}
        max={maxValue}
        value={currValue}
        onChange={(e) => setCurrValue(Number(e.target.value))}
        step={step}
      />
    </div>
  );
};

export default DevRangeSlider;
