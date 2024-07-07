import React from "react";
import DevAccordion from "./dev-accordion";

const DevAccordionUsage = () => {
  const AccordData = [
    {
      title: "Accordion #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, officiis!",
    },
    {
      title: "Accordion #2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, officiis!",
    },
    {
      title: "Accordion #3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, officiis!",
    },
    {
      title: "Accordion #4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, officiis!",
    },
  ];
  return (
    <div className="md:max-w-xl w-full ">
      <DevAccordion AccordData={AccordData} />
    </div>
  );
};

export default DevAccordionUsage;
