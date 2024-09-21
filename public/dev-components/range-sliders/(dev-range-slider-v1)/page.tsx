'use client'
import React from "react";
import DevRangeSliderV1 from "./dev-range-slider-v1";

const DevRangeSliderV1Usage = () => {

  return (
   <div className="w-full bg-rtlLight dark:bg-rtlDark p-5 max-w-md rounded-md ">
     <DevRangeSliderV1
      min={10}
      max={100}
      step={5}
      onChange={(e) => console.log(e)}
    />
   </div>
  );
};

export default DevRangeSliderV1Usage;
