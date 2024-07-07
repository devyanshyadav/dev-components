import DevRichTxtEditorUsage from "./(dev-rich-txt-editor)/dev-rich-txt-editor-usage";

const RichTxtEditorsInfo = [
  {
    title: "Dev Rich Txt Editor",
    component: DevRichTxtEditorUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A comprehensive rich text editor built with React, featuring a wide range of text formatting options and multimedia support.",
      features: [
        "Supports advance text formatting such as bold, italic, underline, and strikethrough.",
        "Allows users to change text color, background color, and font family.",
        "Includes options for inserting links, images, and tables.",
        "Provides tools for adjusting text alignment and creating ordered and unordered lists.",
        "Features a customizable toolbar with tooltips and popovers for easy access to formatting options.",
        "Utilizes the `use-undoable` pckg for implementing undo and redo functionalities.",
        "The editor can be customized further by modifying the toolbar buttons and adding new formatting options as needed.",
      ],
      props: [
        {
          propName: "initialText",
          propExample: `"Hello World"`,
          propDetail:
            "Initial text displayed in the editor. Default is an empty string.",
        },
      ],
      packages: [
        {
          pckg_name: "react-contenteditable",
          pckg_link: "https://www.npmjs.com/package/react-contenteditable",
        },
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons/",
        },
        {
          pckg_name: "use-undoable",
          pckg_link: "https://www.npmjs.com/package/use-undoable",
        },
      ],
      helpers:[
        {
          cmp_name:"React Tooltip",
          cmp_link:"components/tooltips#react-tooltip"
        },
        {
          cmp_name:"Dev Popover",
          cmp_link:"components/popovers#dev-popover"
        }
      ]
    },
  },
];

export default RichTxtEditorsInfo;
