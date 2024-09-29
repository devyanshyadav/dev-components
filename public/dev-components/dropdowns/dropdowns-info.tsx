import DevDropdownV1Usage from "./(dev-dropdown-v1)/page";
import DevDropdownV2Usage from "./(dev-dropdown-v2)/page";

const DropdownsInfo = [
  {
    title: "Dev Dropdown V1",
    component: DevDropdownV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable dropdown component using Radix UI, supporting various placement options and trigger buttons.",
      features: [
        "Triggers on click of a button",
        "Can be positioned at different locations around the trigger",
        "Flexible content display within the dropdown",
        "Customizable appearance and placement",
        "Dynamic placement based on screen size",
      ],
      props: [
        {
          propName: "children",
          propExample: `<p>Dropdown Content</p>`,
          propDetail: "Content to be displayed inside the dropdown menu.",
        },
        {
          propName: "button",
          propExample: `<button className='p-1 px-3 bg-accentNeon text-white rounded-lg'>Open</button>`,
          propDetail: "Customizable trigger button element.",
        },
        {
          propName: "place",
          propExample: `"bottom"`,
          propDetail:
            "Position of the dropdown relative to the trigger button. Can be 'top', 'bottom', 'left', or 'right'. Defaults to 'bottom'.",
        },
      ],
      packages: [
        {
          pckg_name: "@radix-ui/react-dropdown-menu",
          pckg_link:
            "https://www.radix-ui.com/primitives/docs/components/dropdown-menu",
        },
      ],
    },
  },
  {
    title: "Dev Dropdown V2",
    component: DevDropdownV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A responsive dropdown component that adapts to mobile devices, using Radix UI for desktop and DevDrawer for mobile.",
      features: [
        "Adaptive design for desktop and mobile layouts",
        "Uses Radix UI dropdown menu on desktop",
        "Utilizes DevDrawer for mobile responsiveness",
        "Customizable trigger button",
        "Supports nested menu items",
        "Responsive design",
        "Accessibility-focused",
      ],
      props: [
        {
          propName: "children",
          propExample: `<p>Dropdown Content</p>`,
          propDetail: "Content to be displayed inside the dropdown menu.",
        },
        {
          propName: "button",
          propExample: `<button className="p-1 px-3 bg-accentNeon text-white rounded-lg">Open</button>`,
          propDetail: "Customizable trigger button element.",
        },
        {
          propName: "place",
          propExample: `"bottom"`,
          propDetail: "Position of the dropdown relative to the trigger button. Can be 'top', 'bottom', 'left', or 'right'. Defaults to 'bottom'.",
        },
      ],
      helpers:[ {
        cmp_name: "DevDrawerV2",
        cmp_link: "/drawers#dev-drawer-v2",
      },],
      packages: [
        {
          pckg_name: "@radix-ui/react-dropdown-menu",
          pckg_link: "https://www.radix-ui.com/primitives/docs/components/dropdown-menu",
        },
      ],
    },
  },
];

export default DropdownsInfo;
