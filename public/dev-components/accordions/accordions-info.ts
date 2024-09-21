import DevAccordionV1Usage from "./(dev-accordion-v1)/page";
import DevAccordionV2Usage from "./(dev-accordion-v2)/page";

const AccordionsInfo = [
  {
    title: "Dev Accordion V1",
    component: DevAccordionV1Usage,
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
          propExample: `[ {title:"Accordion", content:"This is an accordion"}, ]`,
          propDetail:
            "This is an array of objects containing the title and description of the accordion.",
        },
      ],
      packages: [
        {
          pckg_name: "framer-motion",
          pckg_link: "https://www.framer.com/motion/",
        },
      ],
    },
  },
  {
    title: "Dev Accordion V2",
    component: DevAccordionV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable accordion component for expanding and collapsing content sections.",
      features: [
        "Multiple expandable/collapsible sections",
        "Animated expansion and collapse",
        "Customizable styling and layout",
        "Support for dynamic content",
      ],
      props: [
        {
          propName: "AccordData",
          propExample: `[{
            title: "Accordion #1",
            content: "Lorem ipsum dolor sit amet..."
          }]`,
          propDetail:
            "An array of objects containing title and content for each accordion section.",
        },
      ],
      packages: [],
    },
  },
];

export default AccordionsInfo;
