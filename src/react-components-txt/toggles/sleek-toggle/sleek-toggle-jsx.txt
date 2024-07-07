"use client";
import clsx from "clsx";
import React from "react";


const SleekToggle = ({ toggle, isToggle, size = "md" }) => {
  const sizes = {
    sm: {
      width: 2,
      height: 1,
    },
    md: {
      width: 3,
      height: 1.3,
    },
    lg: {
      width: 3.5,
      height: 1.5,
    },
  };

  const toggleSize = sizes[size] || sizes["md"];

  return (
    <>
      <label
        style={{
          width: toggleSize.width + "rem",
          height: toggleSize.height + "rem",
        }}
        htmlFor="toggleBox"
        className={clsx("p-1 relative grid items-center")}
      >
        <hr
          className={clsx(
            toggle ? "bg-cyan-500" : "bg-cyan-700",
            "w-full rounded-full border-none"
          )}
          style={{
            height: toggleSize.height + 50 + "%",
          }}
        />
        <input
          type="checkbox"
          className="opacity-0 peer absolute cursor-pointer inset-0"
          id="toggleBox"
          onChange={(e) => isToggle(e.target.checked)}
        />
        <div
          className={clsx(
            "h-full absolute bg-slate-900 dark:bg-white border-2 border-cyan-500 aspect-square pointer-events-none transition-all duration-400 rounded-full"
          )}
          style={{
            transform: toggle
              ? "translateX(" + (toggleSize.width - toggleSize.height) + "rem)"
              : "none",
          }}
        ></div>
      </label>
      <span className="m-3 ">{toggle ? "ON" : "OFF"}</span>
    </>
  );
};

export default SleekToggle;
