"use client";
import React, { useState } from "react";
import { RiAddLine, RiSubtractFill } from "react-icons/ri";
import { motion } from "framer-motion";

type AccordionProps = {
  AccordData: { title: string; content: string }[];
};

const DevAccordionV1 = ({ AccordData }: AccordionProps) => {
  const [open, setOpen] = useState<number | null | boolean>(0);

  const variants = {
    open: { height: "auto" },
    closed: { height: 0 },
  };

  return (
    <div className=" bg-rtlLight dark:bg-rtlDark w-full divide-y divide-accentNeon/50 border border-accentNeon/30 rounded-xl p-2">
      {AccordData.map((elem, i) => (
        <div
          className="space-y-1 py-2"
          key={i}
          onClick={() => setOpen(open == i ? null : i)}
        >
          <h3 className="text-sm flex justify-between cursor-pointer items-center hover:text-accentNeon  font-semibold pr-5">
            {elem.title}
            <span className="text-lg">
              {open == i ? <RiSubtractFill /> : <RiAddLine />}
            </span>
          </h3>
          <motion.div
            animate={open == i ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(!open)}
            className="text-sm overflow-hidden h-0"
          >
            {elem.content}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default DevAccordionV1;
