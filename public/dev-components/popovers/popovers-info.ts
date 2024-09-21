import DevPopoverV1Usage from "./(dev-popover-v1)/page";

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
        "A customizable popover component for displaying content on demand.",
      features: [
        "Triggers on click of a button",
        "Can be positioned at different sides of the trigger",
        "Supports closing icon",
        "Customizable appearance and placement",
      ],
      props: [
        {
          propName: "children",
          propExample: `<p>Popover Content</p>`,
          propDetail: "The content to be displayed inside the popover.",
        },
        {
          propName: "button",
          propExample: `<button className='p-1 px-3 bg-accentNeon text-white rounded-lg'>Open</button>`,
          propDetail: "The button element that triggers the popover. Should be passed as a child prop.",
        },
        {
          propName: "closeIcon",
          propExample: `true`,
          propDetail: "Whether to include a close icon in the popover. When true, adds a close button.",
        },
        {
          propName: "place",
          propExample: `"bottom"`,
          propDetail: "The position of the popover relative to the trigger. Options are 'top', 'right', 'bottom', 'left'.",
        },
      ],
      packages: [
        {
          pckg_name: "@radix-ui/react-popover",
          pckg_link: "https://github.com/radix-ui/react-popover",
        },
      ],
    },
  },
];

export default PopoversInfo;
