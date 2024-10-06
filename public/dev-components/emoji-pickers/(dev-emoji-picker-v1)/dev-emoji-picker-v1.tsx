"use client";
import React from "react";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
const DevEmojiPickerV1 = ({
  onSelect
}: {
  onSelect: (emoji: string) => void;
}) => {
  return (
    <Picker data={data} onEmojiSelect={(e:any)=>onSelect(e.native)} />
  );
};

export default DevEmojiPickerV1;
