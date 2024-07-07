import DevPopoverUsage from "./(dev-popover)/dev-popover-usage";

const PopoversInfo = [
  {
    title: "Dev Popover",
    component: DevPopoverUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A custom popover component designed for development purposes, allowing users to display additional options or information upon clicking a button.",
      features: [
        "Dynamic content loading via children prop",
        "Click outside to close functionality",
        "Animated entrance and exit transitions",
        "Customizable trigger button",
        "Integration with react-tooltip for accessibility",
      ],
      props: [
        {
          propName: "children",
          propExample: `<div>Option</div>`,
          propDetail:
            "The content to be displayed inside the popover. This can be any valid JSX.",
        },
        {
          propName: "popButton",
          propExample: `<button><FaCircleUser /></button>`,
          propDetail:
            "The button that triggers the popover. This can be any JSX element.",
        },
        {
          propName: "contentClick",
          propExample: false,
          propDetail:
            "Enables or disables the close functionality when the content is clicked. Default is false.",
        },
      ],
      packages: [
        {
          pckg_name: "react-tooltip",
          pckg_link: "https://www.npmjs.com/package/react-tooltip",
        },
       
      ],
    },
  },
];

export default PopoversInfo;
