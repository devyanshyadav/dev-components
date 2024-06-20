import DevModalUsage from "./dev-modal-usage";
import DialogModalUsage from "./dialog-modal-usage";

const ModalsInfo = [
  {
    title: "Dev Modal",
    component: DevModalUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A modal component that can be used to display content or prompts.",
      features: [
        "Displays a modal window with a title and content",
        "Provides an open and close button to toggle the modal",
        "Supports customization of the modal title and content",
        "Includes animations for opening and closing the modal",
        "Rendered as a portal to prevent layout issues",
      ],
      props: [
        {
          propName: "children",
          propExample: "<div>Modal Content</div>",
          propDetail: "The content to be displayed inside the modal.",
        },
        {
          propName: "open",
          propExample: "true",
          propDetail:
            "A boolean value indicating whether the modal should be open or closed.",
        },
        {
          propName: "isOpen",
          propExample: "isOpen",
          propDetail:
            "A function to update the openModal state and toggle the modal.",
        },
        {
          propName: "openBtn",
          propExample: "<button>Open Modal</button>",
          propDetail:
            "A React element representing the button or component that opens the modal.",
        },
        {
          propName: "modalTitle",
          propExample: '"Modal Title"',
          propDetail: "The title to be displayed in the modal header.",
        },
      ],
      doc_links: [],
      packages: [
        {
          pckg_name: "framer-motion",
          pckg_link: "https://www.framer.com/motion/",
        },
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons/",
        },
      ],
    },
  },
  {
    title: "Dialog Modal",
    component: DialogModalUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A modal component that can be used to display content or prompts.",
      features: [
        "Displays a modal window with a title and content",
        "Provides an open and close button to toggle the modal",
        "Supports customization of the modal title and content",
      ],
      props: [
        {
          propName: "children",
          propExample: "<div>Modal Content</div>",
          propDetail: "The content to be displayed inside the modal.",
        },
        {
          propName: "open",
          propExample: "true",
          propDetail:
            "A boolean value indicating whether the modal should be open or closed.",
        },
        {
          propName: "isOpen",
          propExample: "isOpen",
          propDetail:
            "A function to update the openModal state and toggle the modal.",
        },
        {
          propName: "openBtn",
          propExample: "<button>Open Modal</button>",
          propDetail:
            "A React element representing the button or component that opens the modal.",
        },
        {
          propName: "modalTitle",
          propExample: '"Modal Title"',
          propDetail: "The title to be displayed in the modal header.",
        },
      ],
      doc_links: [
        "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
      ],
      packages: [
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons/",
        },
      ],
    },
   
  },
];

export default ModalsInfo