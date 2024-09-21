import React from "react";
import {
  Root,
  Trigger,
  Portal,
  Content,
  Close,
} from "@radix-ui/react-popover";

type PopoverProps = {
  children: React.ReactNode;
  button: React.ReactElement;
  closeIcon?: Boolean;
  place?: "top" | "bottom" | "left" | "right";
};
const DevPopoverV1 = ({ children, button, closeIcon, place="bottom" }: PopoverProps) => {
  return (
    <Root>
      <Trigger asChild>{button}</Trigger>
      <Portal>
        <Content
          side={place}
          sideOffset={2}
          className={`p-1 *:!border-0 rounded-lg bg-rtlLight dark:bg-rtlDark border border-accentNeon/30 ${closeIcon && "pt-4"
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
