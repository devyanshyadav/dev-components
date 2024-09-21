import DevDrawerV1Usage from "./(dev-drawer-v1)/page";
import DevDrawerV2Usage from "./(dev-drawer-v2)/page";

const DrawersInfo = [
  {
    title: "Dev Drawer V1",
    component: DevDrawerV1Usage,
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
        {
          propName: "closeIcon",
          propExample: "true",
          propDetail:
            "Whether to display a close icon in the top right corner of the drawer. Defaults to false.",
        },
        {
          propName: "title",
          propExample: "string",
          propDetail: "The title of the drawer. Defaults to 'Drawer'.",
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
      doc_links: ["https://github.com/Farzin-Firoozi/react-modern-drawer"],
    },
  },
  {
    title: "Dev Drawer V2",
    component: DevDrawerV2Usage,
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
        {
          propName: "title",
          propExample: "string",
          propDetail: "The title of the drawer. Defaults to 'Drawer'.",
        },
      ],
      packages: [
        {
          pckg_name: "vaul",
          pckg_link: "https://github.com/vaul-ui/vaul",
          pckg_detail: "A lightweight and modular UI library for React.",
        },
      ],
      doc_links: ["https://github.com/emilkowalski/vaul"],
    },
  },
];
export default DrawersInfo;
