"use client";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const DevDropdownV1 = ({
  children,
  button,
  place = "bottom",
}) => {

//   /* Dropdown CSS animation  */
// .showDropDown{
//   animation: dropDownShow 400ms cubic-bezier(0.16, 1, 0.3, 1);
// }

// @keyframes dropDownShow {
//   from {
//     opacity: 0;
//     transform:scale(0.9);
//   }
//   to {
//     opacity: 1;
//     transform:scale(1);
//   }
// }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none" asChild>
        {button}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={3}
          side={place}
          className={`bg-rtlLight origin-[var(--radix-dropdown-menu-content-transform-origin)] showDropDown dark:bg-rtlDark rounded-lg p-2 border-accentNeon/30 rounded-b-lg border`}
        >
          <DropdownMenu.Item className="outline-none" asChild>
            {children}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DevDropdownV1;
