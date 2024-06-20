import DevAccordionUsage from "./dev-accordion-usage";

const AccordionsInfo = [
  {
    title: "Dev Accordion",
    component: DevAccordionUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description: "Simple accordion with simple click functionality",
      features: [
        "Displays a list of accordion items with their titles and descriptions",
        "Allows users to expand or collapse individual accordion items by clicking on the headers",
        "Provides smooth animations for opening and closing accordion items",
      ],
      props: [
        {
          propName: "AccordData",
          propExample: `[ {title:"Accordion", description:"This is an accordion"}, ]`,
          propDetail:
            "This is an array of objects containing the title and description of the accordion.",
        },
      ],
      packages: [
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons/",
        },
        {
          pckg_name: "framer-motion",
          pckg_link: "https://www.framer.com/motion/",
        },
      ],
    },
  },
];

export default AccordionsInfo;
