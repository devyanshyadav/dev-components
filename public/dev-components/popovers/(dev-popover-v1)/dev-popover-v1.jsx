import React from "react";
import { Root, Trigger, Portal, Content, Close } from "@radix-ui/react-popover";

const DevPopoverV1 = ({ children, button, closeIcon, place = "bottom" }) => {
  //   /* Popover animation  */
  // .showPopover{
  //   animation: popoverShow 400ms cubic-bezier(0.16, 1, 0.3, 1);
  // }

  // @keyframes popoverShow {
  //   from {
  //     opacity: 0;
  //     transform:scale(0.85);
  //   }
  //   to {
  //     opacity: 1;
  //     transform:scale(1);
  //   }
  // }

  const origin = {
    top: "origin-bottom",
    bottom: "origin-top",
    left: "origin-right",
    right: "origin-left",
  };
  return (
    <Root>
      <Trigger asChild>{button}</Trigger>
      <Portal>
        <Content
          side={place}
          sideOffset={2}
          className={`p-1 *:!border-0 ${
            origin[place]
          } showPopover rounded-lg bg-rtlLight dark:bg-rtlDark border border-accentNeon/30 ${
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

export default DevPopoverV1;
