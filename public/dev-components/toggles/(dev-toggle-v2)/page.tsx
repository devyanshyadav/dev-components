"use client";
import React from "react";
import DevToggleV2 from "./dev-toggle-v2";

const DevToggleV2Usage = () => {
  return (
    <div className="bg-rtlLight dark:bg-rtlDark p-3 rounded-lg flex gap-3">
      <DevToggleV2 labelName="Sleek Switch" defaultState={false} onChange={(e) => console.log(e)} />
    </div>
  );
};

export default DevToggleV2Usage;
