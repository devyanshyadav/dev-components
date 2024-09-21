import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";

type AccordionProps = {
  AccordData: { title: string; content: string }[];
};

const DevAccordionV2 = ({ AccordData }: AccordionProps) => {
  return (
    <div className="w-full border border-accentNeon/30 divide-y divide-accentNeon/50 bg-rtlLight dark:bg-rtlDark rounded-xl overflow-hidden px-1">
      {AccordData.map((e, i) => (
        <div key={i} className="group p-2 px-5 space-y-1">
          <button className="flex hover:text-accentNeon justify-between items-center w-full text-left focus:outline-none">
            <h2 className="text-md font-semibold">{e.title}</h2>
            <IoChevronDownOutline className="text-xl transform transition-transform duration-200 group-focus-within:rotate-180" />
          </button>
          <div className="max-h-0 overflow-hidden group-focus-within:max-h-96">
            <p className="text-sm">{e.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DevAccordionV2;
