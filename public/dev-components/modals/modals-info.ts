import DevModalV1Usage from "./(dev-modal-v1)/page";
import DevModalV2Usage from "./(dev-modal-v2)/page";

const ModalsInfo = [
  {
    title: "Dev Modal V1",
    component: DevModalV1Usage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A modal component that can be used to display content or prompts.",
      features: [
        "Centrally positioned modal window",
        "Customizable trigger button",
        "Optional close icon",
        "Supports dark mode",
        "Responsive design",
      ],
      props: [
        {
          propName: "children",
          propExample: "<div>Modal Content</div>",
          propDetail: "The content to be displayed inside the modal.",
        },
        {
          propName: "modalBtn",
          propExample: "<button>Open Modal</button>",
          propDetail:
            "A React element representing the button or component that opens the modal.",
        },
        {
          propName: "modalTitle",
          propExample: '"Modal Title"',
          propDetail: "The title to be displayed in the modal header.",
        },
        {
          propName: "closeIcon",
          propExample: "true",
          propDetail: "Whether to display the close icon in the modal header.",
        },
      ],
      doc_links: [],
      packages: [
        {
          pckg_name: "@radix-ui/react-dialog",
          pckg_link:
            "https://www.radix-ui.com/primitives/docs/components/dialog",
        },
      ],
    },
  },
  {
    title: "Dev Modal V2",
    component: DevModalV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable modal component for displaying content in a dialog box.",
      features: [
        "Creates a modal overlay on the screen",
        "Allows customization of title, content, and close button",
        "Supports optional close icon",
        "Can be controlled via ref or state management",
      ],
      props: [
        {
          propName: "title",
          propExample: `"Dev Modal"`,
          propDetail: "The title displayed at the top of the modal.",
        },
        {
          propName: "children",
          propExample: `<div>Modal content goes here</div>`,
          propDetail: "The content to be displayed inside the modal.",
        },
        {
          propName: "modalBtn",
          propExample: `<button className="bg-ACCENT p-2 px-4 rounded-md hover:opacity-80">Open Modal</button>`,
          propDetail:
            "The button element that triggers the modal when clicked.",
        },
        {
          propName: "closeIcon",
          propExample: `true`,
          propDetail: "Optional boolean flag to show/hide the close icon.",
        },
      ],
      packages: []},
  },
];

export default ModalsInfo;
