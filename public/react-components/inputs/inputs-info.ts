import DevInputUsage from "./(dev-input)/dev-input-usage";
import DevLaserInputUsage from "./dev-laser-input-usage";

const InputsInfo = [
  {
    title: "Dev Input",
    component: DevInputUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A versatile input component designed for development purposes, supporting various styles and configurations such as variants, sizes, roundness, and more.",
      features: [
        "Supports different input variants (base, bordered, faded, underline)",
        "Adjustable input sizes (small, medium, large)",
        "Customizable roundness (none, small, medium, large, full)",
        "Ripple effect option",
        "Reverse icon position option",
      ],
      props: [
        {
          propName: "variant",
          propExample: "base",
          propDetail:
            "Determines the input's visual variant. Options include 'base', 'bordered', 'faded', and 'underline'. Default is 'base'.",
        },
        {
          propName: "scale",
          propExample: "md",
          propDetail:
            "Specifies the input's size. Options are 'sm', 'md', and 'lg'. Default is 'md'.",
        },
        {
          propName: "icon",
          propExample: "<FiSearch />",
          propDetail:
            "Allows specifying an icon to be displayed inside the input field. The icon should be a React element.",
        },
        {
          propName: "rounded",
          propExample: "full",
          propDetail:
            "Controls the roundness of the input corners. Options are 'none', 'sm', 'md', 'lg', and 'full'. Default is 'full'.",
        },
        {
          propName: "reverseIcon",
          propExample: false,
          propDetail:
            "Reverses the position of the icon within the input field. Default is false.",
        },
        {
          propName: "children",
          propExample: "Text content",
          propDetail:
            "Any child elements or text that should appear inside the input field.",
        },
      ],
      packages: [
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons/",
        },
      ],
    },
  },
  {
    title: "Dev Laser Input",
    component: DevLaserInputUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A unique input component featuring a dynamic laser effect when hovered over (Inspired by Aceternity UI).",
      features: [
        "Dynamic laser effect on hover",
        "Fully customizable appearance through props",
        "Supports different sizes and roundness options",
        "Interactive mouse movement to adjust laser position",
      ],
      props: [
        {
          propName: "scale",
          propExample: `"sm" | "md" | "lg"`,
          propDetail:
            "Determines the height of the input field. Adjusts the overall size of the component.",
        },
        {
          propName: "rounded",
          propExample: `"none" | "sm" | "md" | "full"`,
          propDetail:
            "Controls the roundness of the input field. Can be fully customized for various designs.",
        },
        {
          propName: "laserColor",
          propExample: `"#01FFF5"`,
          propDetail:
            "Allows customization of the laser color. Changes the gradient color of the laser effect.",
        },
        {
          propName: "icon",
          propExample: `<LuSearch className="text-accent text-xl" />`,
          propDetail:
            "Allows customization of the icon displayed before the input field. Adjusts the position of the icon.",
        },
        {
          propName: "laserActiveOnClick",
          propExample: "true | false",
          propDetail:
            "Allows customization and appearance of the laser effect when the input field is clicked. Defaults to true.",
        },
      ],
      packages: [
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
      ],
    },
  },
];

export default InputsInfo;
