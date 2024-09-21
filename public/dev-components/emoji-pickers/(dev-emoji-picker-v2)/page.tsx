"use client";
import React from "react";
import DevEmojiPickerV2 from "./dev-emoji-picker-v2";
import DevPopoverV1 from "../../popovers/(dev-popover-v1)/dev-popover-v1";

const DevEmojiPickerV2Usage = () => {
  return (
    <DevPopoverV1
      place="bottom"
      button={
        <button className="p-1 rounded-full px-3 bg-accentNeon/40 outline outline-accentNeon active:scale-90 transition-all">
          😊 Select Emojis
        </button>
      }
    >
      <DevEmojiPickerV2 onSelect={(e) => console.log(e)} />
    </DevPopoverV1>
  );
};

export default DevEmojiPickerV2Usage;
