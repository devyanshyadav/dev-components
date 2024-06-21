"use client";
import React, { useEffect, useState, useRef, useId } from "react";
import clsx from "clsx";
import { Tooltip as Select } from "react-tooltip";
import { createPortal } from "react-dom";
import { IoIosArrowDown } from "react-icons/io";

type devSelectProps = {
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
  selectValue: string;
  Options: string[];
};

const DevSelect = ({
  setSelectValue,
  selectValue,
  Options,
}: devSelectProps) => {
  const [calcWidth, setCalcWidth] = useState(0);
  const [mounted, setMounted] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const randomId = useId();

  useEffect(() => {
    if (buttonRef.current) {
      setCalcWidth(buttonRef.current.offsetWidth);
      console.log(buttonRef.current.offsetWidth, "width");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMounted(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div>
      {mounted &&
        createPortal(
          <Select
            clickable={mounted ? true : false}
            events={["click"]}
            isOpen
            id={randomId}
            place="bottom"
            offset={2}
            opacity={1}
            style={{
              backgroundColor: "transparent",
              padding: "0px",
              zIndex: 1000,
            }}
          >
            <div
              className="flex text-black dark:text-white shadow-md flex-col gap-1 border border-cyan-500/50 bg-slate-50 dark:bg-slate-900 rounded-md p-2 max-h-64 overflow-y-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
              style={{ width: calcWidth + "px" }}
              ref={selectRef}
            >
              {Options.map((elem, i) => (
                <label
                  className={clsx(
                    "hover:bg-cyan-500/50 text-left rounded-lg p-1 overflow-hidden  px-2 cursor-pointer",
                    selectValue == elem && "bg-cyan-500"
                  )}
                  key={i}
                  htmlFor={elem}
                >
                  {elem}
                  <input
                    onChange={(e) => {
                      setSelectValue(e.target.value);
                      setMounted(false);
                    }}
                    type="radio"
                    id={elem}
                    name="select"
                    value={elem}
                    className="opacity-0"
                  />
                </label>
              ))}
            </div>
          </Select>,
          document.body
        )}
      <button
        onClick={() => setMounted(!mounted)}
        data-tooltip-id={randomId}
        className="min-w-40 transition-all flex  items-center justify-between focus:border-cyan-500/50 border-cyan-500 bg-slate-50 dark:bg-slate-900 py-1 border rounded-md px-2"
        ref={buttonRef}
      >
        {selectValue}
        <IoIosArrowDown
        className={clsx("text-lg transition-all text-cyan-500", mounted && "rotate-180")}
         />
      </button>
    </div>
  );
};

export default DevSelect;
