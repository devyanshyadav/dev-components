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
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none" asChild>
        {button}</DropdownMenu.Trigger>
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

export default DevDropdownV1;
