"use client";
import React, { useState } from "react";
import DialogModal from "./dialog-modal";

const DialogModalUsage = () => {
  const [open, isOpen] = useState(false);
  return (
    <DialogModal
      open={open}
      isOpen={isOpen}
      modalTitle="Modal Title"
      openBtn={
        <button className="bg-cyan-500 text-white p-2 px-3 rounded-lg  active:scale-95 hover:bg-cyan-700/50">
          Open Modal
        </button>
      }
    >
      <div className="font-semibold text-lg">Modal Content</div>
    </DialogModal>
  );
};

export default DialogModalUsage;
