"use client";
import React, { useState } from "react";
import ReactPickColor from "./react-pick-color";

const ReactPickColorUsage = () => {
  const [color, setColor] = useState({
    hex: "#F17013",
  });
  return (
    <div className="p-4 px-7 rounded-md border border-cyan-500/50">
      <p>{color.hex || "#000000"}</p>
      <ReactPickColor color={color} setColor={setColor} />
    </div>
  );
};

export default ReactPickColorUsage;
