"use client";
import React from "react";

const DevClipboard = ({ textClip = "no text provided", setCopied, className, children }) => {

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
