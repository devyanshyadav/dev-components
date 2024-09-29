"use client";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import DevDrawerV2, {
  DrawerTrigger,
} from "../../drawers/(dev-drawer-v2)/dev-drawer-v2";
type DropDownProps = {
  children: React.ReactNode;
  button: React.ReactElement;
  place?: "top" | "bottom" | "left" | "right";
};
const DevDropdownV2 = ({
  children,
  button,
  place = "bottom",
}: DropDownProps) => {
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
          className="bg-rtlLight dark:bg-rtlDark rounded-lg p-2 border-accentNeon/30 rounded-b-lg border"
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
