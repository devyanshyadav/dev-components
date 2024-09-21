"use client";
import React, { forwardRef, useImperativeHandle, useState, Ref } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";


const DevDrawerV1 = forwardRef(
  (
    { children, closeIcon = false, position = "right", openBtn, title },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const extraCss = {
      right: "border-l",
      left: "border-r",
      top: "border-b",
      bottom: "border-t",
    };

    // This will help to set the state of the drawer from parent component
    useImperativeHandle(ref, () => ({
      setDrawer: (newState) => {
        setOpen(newState);
      },
    }));

    return (
      <>
        <div onClick={() => setOpen(true)}>{openBtn}</div>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          direction={position}
          duration={200}
          style={{ padding: 0, backgroundColor: "transparent" }}
          className={`!bg-rtlLight flex flex-col relative ${extraCss[position]} *:p-3 dark:!bg-rtlDark border-accentNeon/50 overflow-hidden`}
        >
          {title && (
            <h2 className="border-b flex-shrink-0 border-accentNeon/50">
              {title}
            </h2>
          )}
          {!closeIcon && (
            <button
              className="absolute top-0 right-0 text-xl !p-0.5 text-accentNeon/50 hover:text-accentNeon"
              onClick={() => setOpen(false)}
              aria-label="Close drawer"
            >
              🗙
            </button>
          )}
          <div className="flex-grow overflow-auto">{children}</div>
        </Drawer>
      </>
    );
  }
);

export default DevDrawerV1;
