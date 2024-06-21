"use client";
import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

const DevSmoothTab = ({ tabData }) => {
  const [underNum, setUnderNum] = useState(0);
  const tabRef = useRef(null);
  const [tabWidth, setTabWidth] = useState(0);

  useEffect(() => {
    if (tabRef.current) {
      setTabWidth(tabRef.current.offsetWidth / tabData.length);
    }
  }, [tabData.length]);

  return (
    <main className="w-full flex flex-col items-center gap-2 pt-2">
      <ul
        className="list-none  grid overflow-hidden outline outline-cyan-500/50 relative w-64 bg-slate-100 dark:bg-slate-900 border-2 rounded-full border-transparent"
        style={{ gridTemplateColumns: "repeat(" + tabData.length + ", 1fr)" }}
        ref={tabRef}
      >
        {tabData.map((elem, index) => (
          <li
            className={clsx(
              " py-1 text-sm text-center cursor-pointer z-10 select-none transition-all duration-300  hover:text-cyan-500",
              underNum === index && " !text-cyan-400"
            )}
            onClick={() => setUnderNum(index)}
            key={index}
          >
            {elem.title}
          </li>
        ))}
        <hr
          className="rounded-full bg-cyan-500/30 inset-0 absolute h-full transition-all duration-300 border-none"
          style={{
            width: tabWidth + "px",
            transform: "translateX(" + tabWidth * underNum + "px)",
          }}
        />
      </ul>
      <section className="bg-slate-100 w-full dark:bg-slate-900 border border-cyan-500/50 min-h-40 rounded-md grid place-content-center">
        {tabData[underNum].element}
      </section>
    </main>
  );
};

export default DevSmoothTab;
