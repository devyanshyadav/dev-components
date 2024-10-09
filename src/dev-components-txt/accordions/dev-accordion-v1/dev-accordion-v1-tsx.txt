"use client";
import React, { useState } from "react";
import { RiAddLine, RiSubtractFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

type AccordionProps = {
  AccordData: { title: string; content: string }[];
};

const DevAccordion = ({ AccordData }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-LIGHT dark:bg-DARK w-full divide-y divide-ACCENT/50 border border-ACCENT/30 rounded-xl p-2">
      {AccordData.map((item, index) => (
        <div key={index} className="py-2">
          <h3 
            className="text-sm flex justify-between cursor-pointer items-center hover:text-ACCENT font-semibold pr-5"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.title}
            <span className="text-lg">
              {openIndex === index ? <RiSubtractFill /> : <RiAddLine />}
            </span>
          </h3>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-sm overflow-hidden"
              >
                {item.content}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default DevAccordion;