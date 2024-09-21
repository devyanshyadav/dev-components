import DevRichTextEditorV1Usage from "./(dev-rich-text-editor-v1)/page";

const RichTextEditorInfo = [
  {
    title: "Dev Rich Text Editor V1",
    component: DevRichTextEditorV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A rich text editor component based on Quill Editor, offering advanced formatting options.",
      features: [
        "Supports various text formats (bold, italic, underline, etc.)",
        "Allows header creation and font selection",
        "Includes table support",
        "Provides image and video insertion capabilities",
        "Offers code block and formula editing",
        "Includes alignment options",
        "Supports RTL (right-to-left) text",
        "Has a clean interface for removing formatting",
      ],
      props: [
        {
          propName: "defaultContent",
          propExample: `<div><h1><strong>This is Dev-Components using Quill Editor</strong></h1><p>Some content...</p></div>`,
          propDetail: "Initial content to display in the editor.",
        },
        {
          propName: "onContentChange",
          propExample: `(value) => console.log(value);`,
          propDetail: "Callback function called whenever the content changes.",
        },
      ],
      packages: [
        {
          pckg_name: "react-quill",
          pckg_link: "https://www.npmjs.com/package/react-quill",
        },
      ],
      doc_links:["https://github.com/zenoamaro/react-quill"]
    },
  },
  ];

  export default RichTextEditorInfo