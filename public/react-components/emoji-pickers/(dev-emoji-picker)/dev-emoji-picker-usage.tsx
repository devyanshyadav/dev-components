"use client";
import React, { useState } from "react";
import DevEmojiPicker from "./dev-emoji-picker";

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
