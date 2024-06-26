'use client';
import React from "react";

const DevCheckbox = ({ checked, isChecked }) => {
  return (
    <div className="flex gap-2  items-center justify-start cursor-pointer w-40 border border-cyan-500/30 p-3 rounded-md">
      <span
        id="dev-checkbox"
        className={`border-2 border-cyan-500 text-white w-5  aspect-square grid place-content-center rounded-md cursor-pointer ${checked ? "bg-cyan-500" : "bg-cyan-500/20"
          }`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.9em"
            height="0.9em"
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
          type="checkbox"
          id="custom-checkbox"
          className="absolute inset-0 opacity-0 cursor-pointer"
          checked={checked}
          onChange={(e) => isChecked(e.target.checked)}
        />
      </span>
      <label htmlFor="custom-checkbox">
        {checked ? "Checked" : "Unchecked"}
      </label>
    </div>
  );
};

export default DevCheckbox;
