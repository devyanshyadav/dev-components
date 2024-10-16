"use client";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
type DropDownProps = {
  children: React.ReactNode;
  button: React.ReactElement;
  place?: "top" | "bottom" | "left" | "right";
};
const DevDropdownV1 = ({
  children,
  button,
  place = "bottom",
}: DropDownProps) => {

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
          className={`bg-LIGHT origin-[var(--radix-dropdown-menu-content-transform-origin)] z-50 showDropDown dark:bg-DARK rounded-lg border-ACCENT/30 border`}
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
