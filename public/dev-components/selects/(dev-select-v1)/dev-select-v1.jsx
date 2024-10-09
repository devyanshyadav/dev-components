import React from "react";
import Select from "react-select";

const DevSelectV1 = ({
  options,
  onChange,
  defaultValue,
  labelName,
  placeholder = "Select an option",
}) => {
  return (
    <div className="w-full">
      {labelName && (
        <label className="p-1" htmlFor={labelName?.replace(" ", "-")}>
          Frameworks
        </label>
      )}

      <Select
        id={labelName?.replace(" ", "-")}
        placeholder={placeholder}
        defaultValue={defaultValue}
        options={options}
        onChange={(e) => onChange?.(e)}
        classNames={{
          control: () =>
            "bg-LIGHT dark:bg-DARK !rounded-xl !border-ACCENT/70",
          option: ({ isFocused, isSelected }) =>
            `rounded-lg !cursor-pointer !p-1 !px-2 ${
              isSelected
                ? `!bg-ACCENT text-white`
                : isFocused && `!bg-ACCENT/20 !text-ACCENT`
            }`,
          menu: () => "!bg-LIGHT dark:!bg-DARK !rounded-xl p-1.5",
          menuList: () => "space-y-1",
          singleValue: () => `!text-black dark:!text-white`,
          input: () => "!text-black dark:!text-white",
          indicatorSeparator: () => "hidden",
          dropdownIndicator: () => "!text-ACCENT !cursor-pointer",
        }}
      />
    </div>
  );
};

export default DevSelectV1;
