'use client'
import React from "react";
import DevDrawerV1, { DevDrawerRef } from "./dev-drawer-v1";

const DevDrawerV1Usage = () => {
  const closeRef = React.useRef<DevDrawerRef>(null); //optional
  const handleClose = () => closeRef.current?.setDrawer(false); //optional
  return (
    <DevDrawerV1
      ref={closeRef}
      position="right"
      title="Drawer Title"
      openBtn={
        <button className="bg-accentNeon p-2 px-3 rounded-lg text-white active:scale-95 hover:bg-accentNeon/50">
          Open Drawer
        </button>
      }
    >
      <div className="flex flex-col justify-between h-full">
        <p>Drawer Content</p>

        <button
          onClick={handleClose}
          className="p-2 rounded-md bg-accentNeon hover:bg-accentNeon/70"
        >
          Close
        </button>
      </div>
    </DevDrawerV1>
  );
};

export default DevDrawerV1Usage;

