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
  //     transform:scale(0.9);
  //   }
  //   to {
  //     opacity: 1;
  //     transform:scale(1);
  //   }
  // }

  return (
    <Root>
      <Trigger asChild>{button}</Trigger>
      <Portal>
        <Content
          side={place}
          sideOffset={2}
          className={`origin-[var(--radix-popover-content-transform-origin)] z-50 showPopover rounded-lg bg-LIGHT dark:bg-DARK border border-ACCENT/30`}
        >
          {children}
        </Content>
      </Portal>
    </Root>
  );
};

export default DevPopoverV1;
