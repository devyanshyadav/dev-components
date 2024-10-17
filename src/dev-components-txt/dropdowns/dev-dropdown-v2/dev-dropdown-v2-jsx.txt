"use client";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import DevDrawerV2, {
  DrawerTrigger,
} from "../../drawers/(dev-drawer-v2)/dev-drawer-v2";

const DevDropdownV2 = ({
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

  return window.innerWidth < 768 ? (
    <DevDrawerV2
      isOverlay={false}
      accommodate={true}
      position="bottom"
      openBtn={button}
    >
      <DrawerTrigger>{children}</DrawerTrigger>
    </DevDrawerV2>
  ) : (
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

export default DevDropdownV2;
