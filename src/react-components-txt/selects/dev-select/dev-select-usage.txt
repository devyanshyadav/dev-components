"use client";
import React, { useState } from "react";
import DevSelect from "./dev-select";

const DevSelectUsage = () => {
  const [selectValue, setSelectValue] = useState("Lion");
  const Options = ["Lion", "Elephant", "Tiger", "Horse"];
  return (
    <div className="border w-fit border-cyan-500/30 text-center space-y-3 p-5 rounded-lg">
      <span>{selectValue}</span>
      <DevSelect
        setSelectValue={setSelectValue}
        selectValue={selectValue}
        Options={Options}
      />
    </div>
  );
};

export default DevSelectUsage;
