"use client";
import React from "react";

const DevRadio = ({ radioValue, setRadioValue, radioOptions }) => {
  return (
    <div className=" space-y-2 border border-cyan-500/30 p-3 rounded-md">
      {radioOptions.map((item, index) => (
        <div key={index} className="flex gap-2 items-center text-sm">
          <span className="relative overflow-hidden border border-cyan-500/50  rounded-full bg-white w-4 text-cyan-500 aspect-square place-content-center cursor-pointer grid place-items-center">
            {item.toLowerCase() === radioValue.toLocaleLowerCase() && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillOpacity={0}
                  stroke="currentColor"
                  strokeDasharray={60}
                  strokeDashoffset={60}
                  strokeLinecap="round"
                  strokeWidth={2.8}
                  d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.2s"
                    values="60;0"
                  ></animate>
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.2s"
                    dur="0.15s"
                    values="0;1"
                  ></animate>
                </path>
              </svg>
            )}
            <input
              className="absolute inset-0 cursor-pointer opacity-0 "
              type="radio"
              name="custom-radio"
              id={item}
              value={item}
              onChange={(e) => setRadioValue(e.target.value)}
            />
          </span>
          <label className="select-none" htmlFor={item} key={index}>
            {item}
          </label>
        </div>
      ))}
    </div>
  );
};

export default DevRadio;
