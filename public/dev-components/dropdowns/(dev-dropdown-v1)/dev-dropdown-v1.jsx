"use client";
import Dropdown from "rc-dropdown";
import React from "react";
import 'rc-dropdown/assets/index.css';

const DevDropdownV1 = ({ children, button, place = "bottom" }) => {
  return (
    <Dropdown
      trigger={["click"]}
      placement={place}
      overlay={
        <div className="bg-rtlLight dark:bg-rtlDark rounded-lg p-2 border border-accentNeon/30 md:static fixed inset-x-0 bottom-0 *:w-full rounded-b-none border-b-0 md:rounded-b-lg md:border">
          {children}
        </div>
      }
    >
      {button}
    </Dropdown>
  );
};

export default DevDropdownV1;
