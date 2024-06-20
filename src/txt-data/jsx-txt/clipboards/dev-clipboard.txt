"use client";
import React, { useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";

const DevClipboard = ({ text = "no text provided" }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000); // Reset copied state after 1 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      className=" flex items-center justify-center gap-1 bg-cyan-500 p-2 px-3 rounded-lg text-white active:scale-95 active:bg-cyan-700/50"
      onClick={copyToClipboard}
    >
      {copied ? (
        <>
          <IoCheckmarkDoneSharp /> <span>Copied</span>
        </>
      ) : (
        <>
          <MdContentCopy />
          <span>Copy</span>
        </>
      )}
    </button>
  );
};

export default DevClipboard;
