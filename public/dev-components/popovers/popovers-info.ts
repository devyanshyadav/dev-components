import DevPopoverV1Usage from "./(dev-popover-v1)/page";
import DevPopoverV2Usage from "./(dev-popover-v2)/page";

const PopoversInfo = [
  {
    title: "Dev Popover V1",
    component: DevPopoverV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable popover component that displays content in a floating container.",
      features: [
        "Flexible positioning with customizable offsets",
        "Supports animations for smooth transitions",
        "Integration with Radix UI for accessibility",
        "Customizable trigger button",
      ],
      props: [
        {
          propName: "children",
          propExample: "<p>Popover Content</p>",
          propDetail: "The content to be displayed inside the popover.",
        },
        {
          propName: "button",
          propExample: "<button>Open</button>",
          propDetail: "The button that triggers the popover when clicked.",
        },
        {
          propName: "rootProps",
          propExample: "{ defaultOpen: true }",
          propDetail:
            "Props passed to the Popover root component, such as default open state.",
        },
        {
          propName: "position",
          propExample: "bottom",
          propDetail:
            "The position of the popover relative to the trigger button. Defaults to 'bottom'.",
          options: ["left", "right", "top", "bottom"],
        },
        {
          propName: "contentProps",
          propExample: "{sideOffset: 2 }",
          propDetail:
            "Props passed to the Popover content component, allowing customization of position and offsets.",
        },
      ],
      packages: [
        {
          pckg_name: "@radix-ui/react-popover",
          pckg_link:
            "https://www.radix-ui.com/docs/primitives/components/popover",
        },
      ],
    },
  },
  {
    title: "Dev Popover V2",
    component: DevPopoverV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A responsive popover component that adapts to mobile devices, using Radix UI for desktop and DevDrawer for mobile.",
      features: [
        "Adaptive design for desktop and mobile layouts",
        "Uses Radix UI popover menu on desktop",
        "Utilizes DevDrawer for mobile responsiveness",
        "Customizable trigger button",
        "Responsive design",
        "Accessibility-focused",
      ],
      props: [
        {
          propName: "children",
          propExample: `<p>Popover Content</p>`,
          propDetail: "Content to be displayed inside the dropdown menu.",
        },
        {
          propName: "button",
          propExample: `<button className="p-1 px-3 bg-ACCENT text-white rounded-lg">Open</button>`,
          propDetail: "Customizable trigger button element.",
        },
        {
          propName: "place",
          propExample: `"bottom"`,
          propDetail:
            "Position of the dropdown relative to the trigger button. Can be 'top', 'bottom', 'left', or 'right'. Defaults to 'bottom'.",
        },
      ],
      helpers: [
        {
          cmp_name: "DevDrawerV2",
          cmp_link: "/drawers#dev-drawer-v2",
        },
        {
          cmp_name: "DevPopoverV1",
          cmp_link: "/popovers#dev-popover-v1",
        },
      ],
      packages: [
        {
          pckg_name: "@radix-ui/react-dropdown-menu",
          pckg_link: "https://github.com/radix-ui/react-popover",
        },
      ],
    },
  },
];

export default PopoversInfo;
