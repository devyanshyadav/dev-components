"use client";
import React, { useState } from "react";

const DevCheckboxV1 = ({
  defaultState = true,
  onChange,
  labelName,
}) => {
  const [check, setCheck] = useState(defaultState);

  const handleChange = (e) => {
    const newState = e.target.checked;
    setCheck(newState);
    onChange?.(newState);
  };
  return (
    <>
      <span
        className={`border-2 relative border-ACCENT text-white w-6 h-6 grid place-content-center rounded-md cursor-pointer ${check ? "bg-ACCENT" : "bg-ACCENT/20"
          }`}
      >
        {check && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeDasharray={24}
              strokeDashoffset={24}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.9}
              d="M5 11L11 17L21 7"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.3s"
                values="24;0"
              ></animate>
            </path>
          </svg>
        )}
        <input
          onChange={handleChange}
          type="checkbox"
          id={labelName || "dev-checkbox"}
          className="cursor-pointer opacity-0 absolute inset-0"
          defaultChecked={defaultState}
          checked={check}
        />
      </span>
      {labelName && (
        <label htmlFor={labelName || "dev-checkbox"}>{labelName}</label>
      )}
    </>
  );
};

export default DevCheckboxV1;
