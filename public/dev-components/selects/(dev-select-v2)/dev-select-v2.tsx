'use client'
import React from "react";

type SelectProps = {
  options: { value: string; label: string }[];
  onChange?: (e: any) => void;
  defaultValue?: { value: string; label: string };
};
const DevSelectV2 = ({ options, onChange, defaultValue }: SelectProps) => {
  return (
    <select
      className="p-1 px-3 w-52 rounded-lg !outline-none border-2 focus:border-accentNeon border-accentNeon/50 bg-rtlLight dark:bg-rtlDark"
      onChange={(e) => onChange?.({ value: e.target.value })}
    >
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
  );
};

export default DevSelectV2;
