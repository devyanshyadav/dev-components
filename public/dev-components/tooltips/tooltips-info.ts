import DevTooltipV1Usage from "./(dev-tooltip-v1)/page";

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
        "A customizable tooltip component that provides contextual information on hover, built using Radix UI.",
      features: [
        "Flexible positioning options (top, bottom, left, right)",
        "Smooth transitions and animations",
        "Integration with Radix UI for accessibility",
        "Customizable content and styles",
      ],
      helpers: [],
      props: [
        {
          propName: "children",
          propExample: "<h3>Hover on me</h3>",
          propDetail: "The content that triggers the tooltip on hover.",
        },
        {
          propName: "place",
          propExample: "'top'",
          propDetail:
            "Position of the tooltip relative to the trigger element.",
        },
        {
          propName: "tipData",
          propExample: "'I am tooltip'",
          propDetail: "The text displayed inside the tooltip.",
        },
        {
          propName: "rootProps",
          propExample: "{}",
          propDetail: "Additional properties for the Tooltip.Root component.",
        },
        {
          propName: "contentProps",
          propExample: "{}",
          propDetail:
            "Additional properties for the Tooltip.Content component.",
        },
      ],
      packages: [
        {
          pckg_name: "@radix-ui/react-tooltip",
          pckg_link:
            "https://www.radix-ui.com/docs/primitives/components/tooltip",
        },
      ],
    },
  },

];

export default TooltipsInfo;
