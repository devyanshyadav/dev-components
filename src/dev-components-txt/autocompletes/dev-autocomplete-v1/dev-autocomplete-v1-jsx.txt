"use client";
import React from "react";
import Downshift, { DownshiftProps } from "downshift";

const DevAutocompleteV1 = ({
  items,
  onChange,
  defaultItem,
  ...props
}) => (
  <Downshift
    onChange={onChange}
    itemToString={(item) => item?.value ?? ""}
    initialInputValue={defaultItem?.value}
    {...props}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
        <label className="flex flex-col" {...getLabelProps()}>
          Enter a fruit
          <input
            className="p-1 px-3 mt-1 rounded-md focus:ring-[3px] transition-all ring-ACCENT/50 !outline-0 border  border-ACCENT bg-LIGHT dark:bg-DARK"
            autoFocus
            {...getInputProps()}
          />
        </label>
        {isOpen && (
          <ul
            className="w-full border border-ACCENT/30 space-y-1 max-h-52 overflow-y-scroll [&::-webkit-scrollbar]:hidden bg-LIGHT dark:bg-DARK mt-1 rounded-md overflow-hidden"
            {...getMenuProps()}
          >
            {items
              .filter(
                (item) =>
                  !inputValue ||
                  item.value
                    .toLocaleLowerCase()
                    .includes(inputValue.toLocaleLowerCase())
              )
              .map((item, index) => (
                <li
                  key={item.value}
                  {...getItemProps({
                    item,
                    index,
                    className: `p-0.5 px-3 ${
                      highlightedIndex === index && "bg-ACCENT text-white"
                    } ${selectedItem === item && "bg-ACCENT/30"}`,
                  })}
                >
                  {item.value}
                </li>
              ))}
          </ul>
        )}
      </div>
    )}
  </Downshift>
);

export default DevAutocompleteV1;
