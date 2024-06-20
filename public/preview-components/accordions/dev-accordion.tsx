"use client";
import React, { useState } from "react";
import { RiAddLine, RiSubtractFill } from "react-icons/ri";
import { motion } from "framer-motion";

type devAccordionProps = {
  AccordData: { title: string; description: string }[];
};

const DevAccordion = ({ AccordData }: devAccordionProps) => {
  const [open, isOpen] = useState<number | null | boolean>(0);

  const variants = {
    open: { height: "auto" },
    closed: { height: 0 },
  };

  return (
    <section className="border border-cyan-500  bg-slate-100 dark:bg-slate-800 w-full divide-y divide-cyan-600 rounded-xl p-2">
      {AccordData.map((elem, i) => (
        <div
          className="space-y-1 py-2"
          key={i}
          onClick={() => isOpen(open == i ? null : i)}
        >
          <h3 className="text-sm flex justify-between cursor-pointer items-center hover:text-cyan-500 font-semibold pr-5">
            {elem.title}
            <span className="text-lg">
              {open == i ? <RiSubtractFill /> : <RiAddLine />}
            </span>
          </h3>
          <motion.div
            animate={open == i ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.2 }}
            onClick={() => isOpen(!open)}
            className="text-xs overflow-hidden h-0"
          >
            {elem.description}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default DevAccordion;
