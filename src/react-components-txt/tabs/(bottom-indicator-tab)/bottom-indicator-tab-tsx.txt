"use client";
import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

type BottomIndicatorTabProps = {
  tabData: {
    title: string;
    element: React.ReactNode;
  }[];
};

const BottomIndicatorTab = ({ tabData }: BottomIndicatorTabProps) => {
  const [underNum, setUnderNum] = useState(0);
  const tabRef = useRef<HTMLUListElement>(null);
  const [tabWidth, setTabWidth] = useState(0);

  useEffect(() => {
    if (tabRef.current) {
      setTabWidth(tabRef.current.offsetWidth / tabData.length);
    }
  }, [tabData.length]);

  return (
    <main className="w-full flex flex-col gap-1 items-center pt-2">
      <ul
        className="list-none w-60 grid overflow-hidden"
        style={{ gridTemplateColumns: "repeat(" + tabData.length + ", 1fr)" }}
        ref={tabRef}
      >
        {tabData.map((elem, index) => (
          <li
            className={clsx(
              "text-sm font-semibold select-none rounded-md hover:text-cyan-500 text-center text-cyan-500 cursor-pointer",
              underNum === index && " !text-cyan-500"
            )}
            onClick={() => setUnderNum(index)}
            key={index}
          >
            {elem.title}
          </li>
        ))}
        <hr
          className="border rounded-lg border-cyan-500 transition-all duration-300"
          style={{
            width: tabWidth + "px",
            transform: "translateX(" + tabWidth * underNum + "px)",
          }}
        />
      </ul>
      <section className="bg-slate-100 w-full dark:bg-slate-900 min-h-40 border border-cyan-500/50 rounded-md grid place-content-center">
        {tabData[underNum].element}
      </section>
    </main>
  );
};

export default BottomIndicatorTab;
