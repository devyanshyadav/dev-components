"use client";
import React from "react";

type DevClipboardProps = {
  textClip: string
  setCopied?: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
  children?: React.ReactNode
}

const DevClipboard = ({ textClip = "no text provided", setCopied, className, children }: DevClipboardProps) => {

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textClip);
      if (setCopied) {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000); // Reset copied state after 1 seconds
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      className={className}
      onClick={copyToClipboard}
    >
      {children}
    </button>
  );
};

export default DevClipboard;


