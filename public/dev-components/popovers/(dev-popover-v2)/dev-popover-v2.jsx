"use client";
import React from "react";
import DevDrawerV2 from "../../drawers/(dev-drawer-v2)/dev-drawer-v2";
import DevPopoverV1 from "../(dev-popover-v1)/dev-popover-v1";

const DevPopoverV2 = ({ children, button }) => {
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
    <DevPopoverV1
      contentProps={{ sideOffset: 2 }}
      rootProps={{ defaultOpen: false }}
      button={button}
    >
      {children}
    </DevPopoverV1>
  );
};

export default DevPopoverV2;
