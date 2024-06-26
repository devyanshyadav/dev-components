"use client";
import React, { useState } from "react";
import DevRangeSlider from "../../preview-components/range-sliders/dev-range-slider";

const DevRangeSliderUsage = () => {
  const [currValue, setCurrValue] = useState(10);

  return (
    <div className="w-full max-w-md border border-cyan-500/50 p-3 rounded-md space-y-2">
      <span className="flex w-full justify-between items-center">
        <h2 className="select-none font-semibold text-sm">Select Range</h2>
        <input
          type="number"
          inputMode="numeric"
          className="text-cyan-500 max-w-20 outline-none border rounded-xl  border-cyan-500/50 px-2"
          value={currValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrValue(Number(e.target.value))
          }
        />
      </span>
      <DevRangeSlider
        currValue={currValue}
        setCurrValue={setCurrValue}
        size="lg"
        minValue={0}
        maxValue={100}
        step={1}
      />
    </div>
  );
};

export default DevRangeSliderUsage;
