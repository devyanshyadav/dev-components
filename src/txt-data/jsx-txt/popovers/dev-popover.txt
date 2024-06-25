"use client";
import React, { useEffect, useState, useRef, useId } from "react";
import { Tooltip as Popover } from "react-tooltip";
import { createPortal } from "react-dom";

const DevPopover = ({
  children = "Popover Content",
  popButton,
  contentClick = true,
  place = "bottom"
}) => {
  const [mounted, setMounted] = useState(false);
  const popoverRef = useRef(null);
  const randomId = useId();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setMounted(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      {mounted &&
        createPortal(
          <Popover
            clickable={true}
            isOpen={mounted}
            id={randomId}
            disableStyleInjection={true}
            place={place}
            offset={1}
            opacity={1}
            className="min-h-4 text-black dark:text-white bg-slate-50 dark:bg-slate-900 shadow-md border border-cyan-500/50 min-w-36 rounded-lg p-1 z-50"
          >
            <div
              ref={popoverRef}
              onClick={() => contentClick && setMounted(!mounted)}
            >
              {children && children}
            </div>
          </Popover>,
          document.body
        )}
      <div className="w-fit" onClick={() => setMounted(!mounted)} data-tooltip-id={randomId}>
        {popButton}
      </div>
    </>
  );
};

export default DevPopover;
