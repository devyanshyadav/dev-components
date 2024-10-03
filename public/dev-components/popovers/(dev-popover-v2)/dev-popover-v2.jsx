'use client'
import React from "react";
import { Root, Trigger, Portal, Content, Close } from "@radix-ui/react-popover";
import DevDrawerV2 from "../../drawers/(dev-drawer-v2)/dev-drawer-v2";

const DevPopoverV2 = ({
  children,
  button,
  closeIcon,
  place = "bottom",
}) => {

//   /* Popover animation  */
// .showPopover{
//   animation: popoverShow 400ms cubic-bezier(0.16, 1, 0.3, 1);
// }

// @keyframes popoverShow {
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
      {children}
    </DevDrawerV2>
  ) : (
    <Root>
      <Trigger asChild>{button}</Trigger>
      <Portal>
        <Content
          side={place}
          sideOffset={2}
          className={`p-1 *:!border-0 origin-[var(--radix-popover-content-transform-origin)] showPopover rounded-lg bg-rtlLight dark:bg-rtlDark border border-accentNeon/30 ${
            closeIcon && "pt-4"
          }`}
        >
          {closeIcon && (
            <Close className="text-accentNeon rounded-full p-0.5 absolute top-0.5 right-0.5 text-sm">
              🗙
            </Close>
          )}
          {children}
        </Content>
      </Portal>
    </Root>
  );
};

export default DevPopoverV2;