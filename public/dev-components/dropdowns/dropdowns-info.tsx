import DevDropdownV1Usage from "./(dev-dropdown-v1)/page";

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
        "A customizable dropdown component for displaying content on demand.",
      features: [
        "Triggers on click of a button",
        "Can be positioned at different locations around the trigger",
        "Flexible content display within the dropdown",
        "Customizable appearance and placement",
      ],
      props: [
        {
          propName: "children",
          propExample: `<p>Content</p>`,
          propDetail: "The content to be displayed inside the dropdown.",
        },
        {
          propName: "button",
          propExample: `<button className='p-1 px-3 bg-accentNeon text-white rounded-lg'>open</button>`,
          propDetail: "The button element that triggers the dropdown. Should be passed as a child prop.",
        },
        {
          propName: "place",
          propExample: `"bottom"`,
          propDetail: "The position of the dropdown relative to the trigger. Options are 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'.",
        },
      ],
      packages: [
        {
          pckg_name: "rc-dropdown",
          pckg_link: "https://react-component.github.io/dropdown/",
        },
      ],
    },
  },
];

export default DropdownsInfo;
