"use client";
import React, { useState } from "react";
import DevEmojiPicker from "../../react-components/emoji-pickers/(dev-emoji-picker)/dev-emoji-picker";

const DevEmojiPickerUsage = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  return (
    <div>
      <p className="text-cyan-400">Selected emoji: {selectedEmoji}</p>
      <DevEmojiPicker setSelectedEmoji={setSelectedEmoji} />
    </div>
  );
};

export default DevEmojiPickerUsage;
