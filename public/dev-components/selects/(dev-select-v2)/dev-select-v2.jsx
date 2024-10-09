'use client'
import React from "react";

const DevSelectV2 = ({ options, labelName, onChange, defaultValue,placeholder="Select an option" }) => {
  return (
    <div className="flex flex-col w-full">
     {labelName && <label className="p-1" htmlFor={labelName?.replace(' ','-')}>Frameworks</label>}
      <select
      id={labelName?.replace(' ','-')}
      className="p-1 px-3 w-full rounded-lg !outline-none border-2 focus:border-ACCENT border-ACCENT/50 bg-LIGHT dark:bg-DARK"
      onChange={(e) => onChange?.({ value: e.target.value })}
    >
      <option value={placeholder} disabled selected>{placeholder}</option>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          selected={defaultValue?.value === option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
    </div>
  );
};

export default DevSelectV2;
