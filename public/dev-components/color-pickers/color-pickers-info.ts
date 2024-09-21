import DevColorPickerV2Usage from "./(dev-color-picker-v2)/page";
import DevColorPickerV1Usage from "./(dev-color-picker-v1)/page";
import DevColorPickerV3Usage from "./(dev-color-picker-v3)/page";

const ColorPickersInfo = [
  {
    title: "Dev Color Picker V1",
    component: DevColorPickerV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable color picker component for selecting colors visually.",
      features: [
        "Interactive color selection via hex-alpha color picker",
        "Support for hex color format",
        "Integration with react-colorful library",
        "Customizable appearance through styled-components",
      ],
      helpers: [
        {
          cmp_name: "DevPopoverV1",
          cmp_link: "/popovers#dev-popover-v1",
        },
      ],
      props: [
        {
          propName: "defaultColor",
          propExample: `'#E26F1D'`,
          propDetail:
            "The initial color value. Defaults to '#E26F1D' if not specified.",
        },
        {
          propName: "onChange",
          propExample: `(e) => console.log(e)`,
          propDetail:
            "A callback function triggered when the color selection changes.",
        },
      ],
      packages: [
        {
          pckg_name: "react-colorful",
          pckg_link: "https://www.npmjs.com/package/react-colorful",
        },
        {
          pckg_name: "styled-components",
          pckg_link: "https://styled-components.com/",
        },
      ],
    },
  },
  {
    title: "Dev Color Picker V2",
    component: DevColorPickerV2Usage,
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
      helpers: [
        {
          cmp_name: "DevPopoverV1",
          cmp_link: "/popovers#dev-popover-v1",
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
      doc_links: ["https://casesandberg.github.io/react-color/"],
    },

  },
  {
    title: "Dev Color Picker V3",
    component: DevColorPickerV3Usage,
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
      helpers: [
        {
          cmp_name: "DevPopoverV1",
          cmp_link: "/popovers#dev-popover-v1",
        },
      ],
      packages: [
        {
          pckg_name: "react-pick-color",
          pckg_link: "https://www.npmjs.com/package/react-pick-color",
        },
      ],
    },
  },
];

export default ColorPickersInfo;
