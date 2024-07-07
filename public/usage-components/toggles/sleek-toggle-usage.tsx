"use client";
import React, { useState } from "react";
import SleekToggle from "../../react-components/toggles/sleek-toggle";

const SleekToggleUsage = () => {
  const [toggle, isToggle] = useState(true);
  return (
    <div className="border border-cyan-500/50 p-5 rounded-lg min-w-full md:min-w-40 grid place-content-center">
      <SleekToggle toggle={toggle} isToggle={isToggle} />
    </div>
  );
};

export default SleekToggleUsage;
