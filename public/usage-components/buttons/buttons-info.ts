import DevButtonUsage from "./dev-button-usage";

const ButtonsInfo = [
  {
    title: "Dev Button",
    variants: {
      jsx: true,
      tsx: true,
    },
    component: DevButtonUsage,
    details: {
      description:
        "A versatile button component designed for development purposes, supporting various styles, sizes, and functionalities.",
      features: [
        "Supports different types of buttons (solid, outline, light, flat, ghost)",
        "Can display ripples effect on interaction",
        "Adjustable size (small, medium, large)",
        "Customizable roundness (none, small, medium, large, full)",
        "Can act as a link with external or internal navigation",
        "Can include icons within the button",
      ],
      props: [
        {
          propName: "type",
          propExample: "solid",
          propDetail:
            "Determines the button's appearance. Options include 'solid', 'outline', 'light', 'flat', 'ghost'.",
        },
        {
          propName: "size",
          propExample: "md",
          propDetail:
            "Specifies the button's size. Options include 'sm' for small, 'md' for medium, and 'lg' for large.",
        },
        {
          propName: "href",
          propExample: "/",
          propDetail:
            "Defines the URL for the button if it should act as a link.",
        },
        {
          propName: "rounded",
          propExample: "none",
          propDetail:
            "Controls the button's roundness. Options include 'none', 'sm', 'md', 'lg', 'full'.",
        },
        {
          propName: "ripple",
          propExample: true,
          propDetail:
            "Enables the ripple effect on button interaction. Set to true to enable.",
        },
        {
          propName: "asIcon",
          propExample: true,
          propDetail:
            "Indicates whether the button should display as an icon. Set to true to enable.",
        },
      ],
      packages: [
        {
          pckg_name: "use-ripple-hook",
          pckg_link: "https://www.npmjs.com/package/use-ripple-hook",
        },
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
      ],
    },
  },
];

export default ButtonsInfo;
