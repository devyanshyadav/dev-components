import DevFileUploaderUsage from "./(dev-file-uploader)/page";

const UploaderInfo = [
  {
    title: "Dev File Uploader",
    component: DevFileUploaderUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A file uploader component that allows users to drag and drop files or select them from their device with support for file type restrictions and size limits.",
      features: [
        "Supports multiple file uploads with a limit on the number of files",
        "File type restrictions (e.g., images and PDFs)",
        "Progress indication for each uploaded file",
        "Error handling for file size limits",
      ],
      helpers: [],
      props: [
        {
          propName: "onDrop",
          propExample: "(acceptedFiles) => console.log(acceptedFiles)",
          propDetail:
            "Callback function triggered when files are dropped or selected.",
        },
        {
          propName: "onSubmit",
          propExample: "() => console.log('submitted')",
          propDetail:
            "Callback function triggered when the submit button is clicked.",
        },
        {
          propName: "maxSize",
          propExample: "5242880",
          propDetail: "Maximum file size allowed in bytes (default is 5MB).",
        },
        {
          propName: "accept",
          propExample: "[ 'image/*', 'application/pdf' ]",
          propDetail: "Array of accepted file types.",
        },
        {
          propName: "maxFiles",
          propExample: "5",
          propDetail: "Maximum number of files that can be uploaded.",
        },
        {
          propName: "disabled",
          propExample: false,
          propDetail:
            "(Optional) A boolean indicating if the uploader is disabled.",
        },
      ],
      packages: [],
    },
  },
];

export default UploaderInfo;
