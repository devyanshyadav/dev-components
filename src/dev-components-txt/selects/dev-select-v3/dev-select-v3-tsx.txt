import React from "react";
import * as Select from "@radix-ui/react-select";
import { FaChevronDown } from "react-icons/fa";
type SelectProps = {
  options: { value: string; label: string }[];
  onChange?: (e: any) => void;
  defaultValue?: { value: string; label: string };
  placeholder?: string;
  labelName?: string;
};
const DevSelectV3 = ({
  options,
  onChange,
  defaultValue,
  labelName,
  placeholder = "Select an option",
}: SelectProps) => {
  return (
    <Select.Root onValueChange={onChange} defaultValue={defaultValue?.value}>
      <Select.Trigger className="flex outline-none focus:border-accentNeon/50 items-center justify-between w-full p-1.5 px-3 rounded-md bg-rtlLight dark:bg-rtlDark border border-accentNeon/30">
        <Select.Value className="text-white" placeholder={placeholder} />
        <FaChevronDown className="text-sm" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          sideOffset={5}
          className={`z-50 origin-[var(--radix-select-content-transform-origin)] showOptions w-[var(--radix-select-trigger-width)] max-h-48 overflow-hidden bg-rtlLight border border-accentNeon/30 dark:bg-rtlDark rounded-md shadow-lg`}
        >
          <Select.ScrollUpButton className="flex items-center justify-center h-5 bg-transparent hover:text-accentNeon cursor-pointer">
            <FaChevronDown className="text-sm rotate-180 opacity-80" />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-1">
            <Select.Group>
              {labelName && (
                <Select.Label className="p-1.5 px-3 text-sm text-accentNeon">
                  {labelName}
                </Select.Label>
              )}
              {options.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="relative flex mt-0.5 items-center p-1.5 px-3 text-sm rounded select-none hover:bg-accentNeon/30 focus:bg-accentNeon/30 outline-none cursor-pointer"
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                  <Select.ItemIndicator className="absolute left-2 inline-flex items-center"></Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-5 bg-transparent hover:text-accentNeon cursor-pointer">
            <FaChevronDown className="text-sm opacity-80" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default DevSelectV3;
