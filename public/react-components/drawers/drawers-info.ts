import DevDrawerUsage from "./(dev-drawer)/dev-drawer-usage";
import ReactModernDrawerUsage from "./(react-modern-drawer)/react-modern-drawer-usage";
import VaulDrawerUsage from "./(vaul-drawer)/vaul-drawer-usage";

const DrawersInfo = [
  {
    title: "Dev Drawer",
    component: DevDrawerUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A React component that implements a drawer (sidebar) with customizable positioning, allowing users to access secondary navigation or content without navigating away from the current view.",
      features: [
        "Customizable drawer position (left, right, top, bottom)",
        "Animated opening and closing transitions",
        "Programmatic control over drawer visibility",
        "Support for custom open button and content",
      ],
      props: [
        {
          propName: "openBtn",
          propExample: "<button>Open Drawer</button>",
          propDetail:
            "A React node representing the button or element that triggers the drawer to open.",
        },
        {
          propName: "open",
          propExample: "boolean",
          propDetail:
            "A boolean value indicating whether the drawer is currently visible.",
        },
        {
          propName: "setOpen",
          propExample: "Function",
          propDetail:
            "A function to programmatically change the visibility of the drawer.",
        },
        {
          propName: "children",
          propExample: "ReactNode",
          propDetail: "The content to be displayed inside the drawer.",
        },
        {
          propName: "position",
          propExample: "'right'",
          propDetail:
            "Specifies the position of the drawer relative to the viewport. Can be 'left', 'right', 'top', or 'bottom'. Defaults to 'right'.",
        },
      ],
      packages: [
        {
          pckg_name: "framer-motion",
          pckg_link: "https://www.framer.com/api/motion/",
          pckg_detail: "A production-ready motion library for React.",
        },
      ],
    },
  },
  {
    title: "React Modern Drawer",
    component: ReactModernDrawerUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A React component that implements a modern drawer (sidebar) with customizable positioning, offering a sleek and responsive interface for accessing secondary navigation or content.",
      features: [
        "Customizable drawer position (left, right, top, bottom)",
        "Smooth opening and closing animations",
        "Programmatic control over drawer visibility",
        "Support for custom open button and content",
      ],
      props: [
        {
          propName: "openBtn",
          propExample: "<button>Open Drawer</button>",
          propDetail:
            "A React node representing the button or element that triggers the drawer to open.",
        },
        {
          propName: "open",
          propExample: "boolean",
          propDetail:
            "A boolean value indicating whether the drawer is currently visible.",
        },
        {
          propName: "setOpen",
          propExample: "Function",
          propDetail:
            "A function to programmatically change the visibility of the drawer.",
        },
        {
          propName: "children",
          propExample: "ReactNode",
          propDetail: "The content to be displayed inside the drawer.",
        },
        {
          propName: "position",
          propExample: "'right'",
          propDetail:
            "Specifies the position of the drawer relative to the viewport. Can be 'left', 'right', 'top', or 'bottom'. Defaults to 'right'.",
        },
      ],
      packages: [
        {
          pckg_name: "react-modern-drawer",
          pckg_link: "https://www.npmjs.com/package/react-modern-drawer",
          pckg_detail:
            "A simple and flexible drawer component for React applications.",
        },
      ],
      doc_links:["https://github.com/Farzin-Firoozi/react-modern-drawer"]
    },
  },
  {
    title: "Vaul Drawer",
    component: VaulDrawerUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A React component that provides a versatile drawer (sidebar) with support for four positions (left, right, top, bottom), enabling developers to integrate UX draggable experiences seamlessly.",
      features: [
        "Positional flexibility (left, right, top, bottom)",
        "Customizable trigger button",
        "Background scaling option",
        "Stylable overlay and content areas",
      ],
      props: [
        {
          propName: "openBtn",
          propExample: "<button>Open Drawer</button>",
          propDetail:
            "A React node representing the button or element that triggers the drawer to open.",
        },
        {
          propName: "children",
          propExample: "ReactNode",
          propDetail: "The content to be displayed inside the drawer.",
        },
        {
          propName: "position",
          propExample: "'right'",
          propDetail:
            "Specifies the position of the drawer relative to the viewport. Can be 'left', 'right', 'top', or 'bottom'. Defaults to 'top'.",
        },
      ],
      packages: [
        {
          pckg_name: "vaul",
          pckg_link: "https://github.com/vaul-ui/vaul",
          pckg_detail: "A lightweight and modular UI library for React.",
        },
      ],
      doc_links:["https://github.com/emilkowalski/vaul"]
    },
  },
];
export default DrawersInfo;
