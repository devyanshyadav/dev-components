"use client";
import React, { useState } from "react";

const DevTabV1 = ({ tabData }) => {
  const [state, setState] = useState(0);
  return (
    <section className="w-full space-y-1">
      <div
        style={{ gridTemplateColumns: `repeat(${tabData.length}, 1fr)` }}
        className={`gap-2 relative h-10 rounded-full bg-rtlLight border border-accentNeon/50 dark:bg-rtlDark grid`}
      >
        {tabData.map((elem, index) => (
          <button
          key={index}
            className={`p-2 outline-none z-10 text-nowrap ${
              state === index && " text-accentNeon"
            }`}
            onClick={() => setState(index)}
          >
            {elem.title}
          </button>
        ))}
        <span
          style={{
            width: `calc(100%/${tabData.length})`,
            left: `calc(${state} * 100%/${tabData.length})`,
          }}
          className={`absolute border-2 border-rtlLight duration-300 dark:border-rtlDark transition-all inset-y-0  rounded-full bg-accentNeon/30`}
        />
      </div>
      <div className="bg-rtlLight w-full dark:bg-rtlDark  min-h-40 rounded-md">
        {tabData[state].element}
      </div>
    </section>
  );
};

export default DevTabV1;
