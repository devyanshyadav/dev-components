"use client";
import { useEffect, useRef } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

type devModalProps = {
  children: React.ReactNode;
  open: boolean;
  isOpen: (open: boolean) => void;
  openBtn: React.ReactNode;
  modalTitle: string;
};

function DialogModal({
  open,
  isOpen,
  children,
  openBtn,
  modalTitle,
}: devModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [open]);

  return (
    <>
      <div className="w-fit" onClick={() => isOpen(true)}>
        {openBtn}
      </div>
      <dialog
        className="w-[90vw] md:w-[40vw] border border-cyan-500/30 backdrop:bg-black/50 overflow-hidden relative flex-none bg-white dark:bg-slate-900   min-h-60 rounded-xl"
        ref={ref}
      >
        <div className="w-full  bg-slate-100 dark:bg-slate-800  font-semibold flex items-center justify-between relative">
          <h3 className="p-3 text-cyan-500">{modalTitle}</h3>
          <IoIosCloseCircleOutline
            onClick={() => isOpen(false)}
            className="absolute top-3 right-3 text-2xl cursor-pointer text-cyan-500 hover:text-cyan-500/50"
          />
        </div>
        <div className="flex items-center justify-center flex-1">
          {children}
        </div>
      </dialog>
    </>
  );
}

export default DialogModal;
