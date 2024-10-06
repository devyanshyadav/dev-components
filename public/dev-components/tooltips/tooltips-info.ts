import DevTooltipV1Usage from "./(dev-tooltip-v1)/page";
import DevTooltipV2Usage from "./(dev-tooltip-v2)/page";

const TooltipsInfo = [
  {
    title: "Dev Tooltip V1",
    component: DevTooltipV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A tooltip component that displays additional information or a helpful message when hovering over an element.",
      features: [
        "Displays a tooltip with custom content",
        "Allows customization of the tooltip position",
        "Provides a smooth and visually appealing tooltip experience",
      ],
      props: [
        {
          propName: "children",
          propExample: "<h3>Hover on me</h3>",
          propDetail:
            "The element or component to which the tooltip should be attached.",
        },
        {
          propName: "place",
          propExample: '"top"',
          propDetail:
            "The position of the tooltip relative to the element (e.g., 'top', 'bottom', 'left', 'right'). Defaults to 'top'.",
        },
        {
          propName: "tipData",
          propExample: '"I am a tooltip"',
          propDetail: "The content or message to be displayed in the tooltip.",
        },
      ],
      packages: [
        {
          pckg_name: "@radix-ui/react-tooltip",
          pckg_link: "https://www.radix-ui.com/primitives/docs/components/tooltip",
        },
      ],
    },
  },
  {
    title: "Dev Tooltip V2",
    component:DevTooltipV2Usage,
    variants:{
        jsx:true,
        tsx:true
    },
    details: {
      description:
        "A tooltip component that displays additional information or a helpful message when hovering over an element.",
      features: [
        "Displays a tooltip with custom content",
        "Allows customization of the tooltip position",
        "Provides a smooth and visually appealing tooltip experience",
      ],
      props: [
        {
          propName: "children",
          propExample: "<h3>Hover on me</h3>",
          propDetail:
            "The element or component to which the tooltip should be attached.",
        },
        {
          propName: "place",
          propExample: '"top"',
          propDetail:
            "The position of the tooltip relative to the element (e.g., 'top', 'bottom', 'left', 'right'). Defaults to 'top'.",
        },
        {
          propName: "tipData",
          propExample: '"I am a tooltip"',
          propDetail: "The content or message to be displayed in the tooltip.",
        },
      ],
      doc_links: ["https://react-tooltip.com/docs/getting-started"],
      packages: [
        {
          pckg_name: "react-tooltip",
          pckg_link: "https://react-tooltip.com/docs/getting-started",
        },
      ],
    },
  },
];

export default TooltipsInfo;
