"use client";
import React, { useState } from "react";

type DevToggleProps = {
  defaultState?: boolean;
  onChange?: (checked: boolean) => void;
  labelName?: string;
};

const DevToggleV1: React.FC<DevToggleProps> = ({ defaultState = true, onChange, labelName }) => {
  const [toggle, setToggle] = useState(defaultState);
  const toggleSize = {
    width: 3,
    height: 1.5,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newState = e.target.checked;
    setToggle(newState);
    onChange?.(newState);
  };

  return (
    <>
      <div
        style={{
          width: `${toggleSize.width}rem`,
          height: `${toggleSize.height}rem`,
        }}
        className={`
          "p-1 rounded-full relative grid ",
         ${toggle ? "bg-accentNeon" : "bg-accentNeon/50"}
        `}
      >
        <input
          type="checkbox"
          defaultChecked={defaultState}
          className="opacity-0 absolute cursor-pointer inset-0"
          id={labelName || "toggleBox"}
          checked={toggle}
          onChange={handleChange}
        />
        <span
          className="h-full absolute dark:bg-rtlLight bg-rtlDark aspect-square pointer-events-none transition-all duration-400 rounded-full"
          style={{
            transform: toggle
              ? `translateX(${toggleSize.width - toggleSize.height}rem) scale(0.7)`
              : "scale(0.7)",
          }}
        />
      </div>
      {labelName && <label htmlFor={labelName || "toggleBox"}>{labelName}</label>}
    </>
  );
};

export default DevToggleV1;
