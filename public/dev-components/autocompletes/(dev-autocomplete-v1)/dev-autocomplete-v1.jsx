"use client";
import React from "react";
import Downshift from "downshift";

const DevAutocompleteV1 = ({
  items,
  onChange,
  defaultItem,
}) => (
  <Downshift
    onChange={onChange}
    itemToString={(item) => item?.value ?? ""}
    initialInputValue={defaultItem?.value}
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
            className="p-1 px-3 rounded-md !outline-none border-2 focus:border-accentNeon border-accentNeon/50 bg-rtlLight dark:bg-rtlDark"
            autoFocus
            {...getInputProps()}
          />
        </label>
        {isOpen && (
          <ul
            className="w-full border border-accentNeon/30 space-y-1 max-h-52 overflow-y-scroll [&::-webkit-scrollbar]:hidden bg-rtlLight dark:bg-rtlDark mt-1 rounded-md overflow-hidden"
            {...getMenuProps()}
          >
            {items
              .filter((item) => !inputValue || item.value.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
              .map((item, index) => (
                <li
                  key={item.value}
                  {...getItemProps({
                    item,
                    index,
                    className: `p-0.5 px-3 ${
                      highlightedIndex === index
                        && "bg-accentNeon text-white"
                    } ${
                      selectedItem === item && "bg-accentNeon/30"
                    }`,
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