"use client";
import clsx from "clsx";
import React from "react";
import { IoMdMoon } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";

type devToggleProps = {
  toggle: boolean;
  isToggle: (e: boolean) => void;
  size?: "sm" | "md" | "lg";
};

const ThemeToggle = ({ toggle, isToggle, size = "md" }: devToggleProps) => {
  const sizes = {
    sm: {
      width: 2,
      height: 1,
    },
    md: {
      width: 3,
      height: 1.5,
    },
    lg: {
      width: 4,
      height: 2,
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
        className={clsx(
          "p-1 rounded-full relative grid",
          toggle ? "bg-cyan-500" : "bg-cyan-700"
        )}
      >
        <input
          type="checkbox"
          className="opacity-0 peer absolute cursor-pointer inset-0"
          id="toggleBox"
          checked={toggle} onChange={(e) => isToggle(e.target.checked)}
        />
        <div
          className={clsx(
            " dark:bg-white bg-slate-900 h-full absolute text-cyan-500 text-xl grid place-items-center aspect-square pointer-events-none transition-all duration-400 rounded-full"
          )}
          style={{
            transform: toggle
              ? "translateX(" +
                (toggleSize.width - toggleSize.height) +
                "rem) scale(0.7)"
              : "scale(0.7)",
          }}
        >
          {toggle ? <MdWbSunny /> : <IoMdMoon />}
        </div>
      </label>
      <span className="m-3 ">{toggle ? "Light" : "Dark"}</span>
    </>
  );
};

export default ThemeToggle;
