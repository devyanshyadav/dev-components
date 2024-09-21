'use client'
import React from "react";
import DevRangeSliderV2 from "./dev-range-slider-v2";

const DevRangeSliderV2Usage = () => {

  return (
   <div className="w-full bg-rtlLight dark:bg-rtlDark p-5 max-w-md rounded-md ">
     <DevRangeSliderV2
      min={10}
      max={100}
      step={5}
      onChange={(e) => console.log(e)}
    />
   </div>
  );
};

export default DevRangeSliderV2Usage;
