"use client";
import React, { useState } from "react";

const DevToggleV2 = ({ defaultState = true, onChange, labelName }) => {
  const [toggle, setToggle] = useState(defaultState);
  const toggleSize = {
    width: 3,
    height: 1.5,
  };

  const handleChange = (e) => {
    const newState = e.target.checked;
    setToggle(newState);
    onChange?.(newState);
  };

  return (
    <>
      <div
        style={{
          width: toggleSize.width + "rem",
          height: toggleSize.height + "rem",
        }}
        className="p-1 relative grid items-center"
      >
        <hr
          className={`
            ${toggle ? "bg-ACCENT" : "bg-ACCENT"}
            " w-full rounded-full border-none "
          `}
          style={{
            height: toggleSize.height + 50 + "%",
          }}
        />
        <input
          type="checkbox"
          defaultChecked={defaultState}
          className="opacity-0 absolute cursor-pointer inset-0"
          id={labelName || "toggleBox"}
          checked={toggle}
          onChange={handleChange}
        />
        <span
          className="h-full absolute bg-DARK dark:bg-LIGHT border-2 border-ACCENT aspect-square pointer-events-none transition-all duration-400 rounded-full"
          style={{
            transform: toggle
              ? "translateX(" + (toggleSize.width - toggleSize.height) + "rem)"
              : "none",
          }}
        ></span>
      </div>
      {labelName && <label htmlFor={labelName || "toggleBox"}>{labelName}</label>}
    </>
  );
};

export default DevToggleV2;
