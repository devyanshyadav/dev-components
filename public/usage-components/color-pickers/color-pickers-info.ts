import ReactColorUsage from "./react-color-usage";
import ReactColorfulUsage from "./react-colorful-usage";
import ReactPickColorUsage from "./react-pick-color-usage";

const ColorPickersInfo = [
  {
    title: "React Color",
    component: ReactColorUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A color picker component that integrates with react-color's SketchPicker, providing a customizable and interactive way to select colors.",
      features: [
        "Interactive color selection using SketchPicker",
        "Supports RGB, HEX, HSL, and HSV color formats",
        "Customizable appearance through styled-components",
        "Tooltip as popover for color preview",
        "Alpha channel support for RGBA colors",
      ],
      props: [
        {
          propName: "color",
          propExample: "{ hex: '#F17013' }",
          propDetail:
            "The current color state passed down from the parent component. It includes properties such as hex, rgb, hsl, and hsv.",
        },
        {
          propName: "setColor",
          propExample: "(color) => {}",
          propDetail:
            "A callback function used to update the color state in the parent component. It receives the new color object as its argument.",
        },
      ],
      packages: [
        {
          pckg_name: "@uiw/react-color",
          pckg_link: "https://www.npmjs.com/package/@uiw/react-color",
        },
        {
          pckg_name: "react-tooltip",
          pckg_link: "https://www.npmjs.com/package/react-tooltip",
        },
        {
          pckg_name: "styled-components",
          pckg_link: "https://styled-components.com/",
        },
      ],
    },

    doc_links: ["https://casesandberg.github.io/react-color/"],
  },
  {
    title: "React Pick Color",
    component: ReactPickColorUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A color picker component that integrates with react-color's SketchPicker, providing a customizable and interactive way to select colors.",
      features: [
        "Interactive color selection using SketchPicker",
        "Supports RGB, HEX, HSL, and HSV color formats",
        "Customizable appearance through styled-components",
        "Tooltip as popover for color preview",
        "Alpha channel support for RGBA colors",
        "Also supports custom color presets",
      ],
      props: [
        {
          propName: "color",
          propExample: "{ hex: '#F17013' }",
          propDetail:
            "The current color state passed down from the parent component. It includes properties such as hex, rgb, hsl, and hsv.",
        },
        {
          propName: "setColor",
          propExample: "(color) => {}",
          propDetail:
            "A callback function used to update the color state in the parent component. It receives the new color object as its argument.",
        },
      ],
      packages: [
        {
          pckg_name: "react-color",
          pckg_link: "https://www.npmjs.com/package/react-pick-color",
        },
        {
          pckg_name: "react-tooltip",
          pckg_link: "https://www.npmjs.com/package/react-tooltip",
        },
        {
          pckg_name: "styled-components",
          pckg_link: "https://styled-components.com/",
        },
      ],
    },

    doc_links: [
      "https://react-pick-color.vercel.app/?path=/story/colorpicker--with-dark-theme",
    ],
  },
  {
    title: "React Colorful",
    component: ReactColorfulUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A color picker component that uses react-colorful's HexAlphaColorPicker, offering a modern and interactive way to select colors with alpha channel support.",
      features: [
        "Interactive color selection with alpha channel support",
        "Customizable appearance through styled-components",
        "Tooltip as popover for color preview",
        "Hexadecimal color input for direct editing",
      ],
      props: [
        {
          propName: "color",
          propExample: "#F17013",
          propDetail:
            "The current color state passed down from the parent component. It represents the selected color in hexadecimal format.",
        },
        {
          propName: "setColor",
          propExample: "(color) => {}",
          propDetail:
            "A callback function used to update the color state in the parent component. It receives the new color string as its argument.",
        },
      ],
      packages: [
        {
          pckg_name: "react-colorful",
          pckg_link: "https://www.npmjs.com/package/react-colorful",
        },
        {
          pckg_name: "react-tooltip",
          pckg_link: "https://www.npmjs.com/package/react-tooltip",
        },
        {
          pckg_name: "styled-components",
          pckg_link: "https://styled-components.com/",
        },
      ],
    },

    doc_links: ["https://omgovich.github.io/react-colorful/"],
  },
];

export default ColorPickersInfo;
