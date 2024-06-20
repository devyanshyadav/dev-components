import DevClipboardUsage from "./dev-clipboard-usage";

const ClipboardsInfo = [
  {
    title: "Dev Clipboard",
    component: DevClipboardUsage,
    variants: {
      tsx: false,
      jsx: true,
    },
    details: {
      description:
        "A user-friendly clipboard utility component that allows users to copy text to their clipboard with visual feedback.",
      features: [
        "Interactive button to copy text to clipboard",
        "Visual indication when text is successfully copied",
        "Uses browser's Clipboard API for copying text",
        "Reset timer for copied state after a short duration",
      ],
      props: [
        {
          propName: "text",
          propExample: `"Hello world"`,
          propDetail:
            "The text to be copied to the clipboard. Defaults to `'no text provided'` if not specified.",
        },
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


export default ClipboardsInfo;