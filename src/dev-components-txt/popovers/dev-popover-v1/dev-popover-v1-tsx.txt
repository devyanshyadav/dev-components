import React from "react";
import * as Popover from "@radix-ui/react-popover";

interface DevPopoverV1Props {
  children: React.ReactNode;
  button: React.ReactElement;
  rootProps?: Omit<React.ComponentProps<typeof Popover.Root>, 'children'>;
  contentProps?: Omit<React.ComponentProps<typeof Popover.Content>, 'children'|'className'>;
}
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
const DevPopoverV1: React.FC<DevPopoverV1Props> = ({ 
  children,
  button,
  rootProps,
  contentProps,
}) => {
  return (
    <Popover.Root {...rootProps}>
      <Popover.Trigger asChild>{button}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={`origin-[var(--radix-popover-content-transform-origin)] z-50 showPopover rounded-lg bg-LIGHT dark:bg-DARK border border-ACCENT/30`}
          {...contentProps}
        >
          {children}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default DevPopoverV1;