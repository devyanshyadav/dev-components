import DevSelectV1Usage from "./(dev-select-v1)/page";
import DevSelectV2Usage from "./(dev-select-v2)/page";
import DevSelectV3Usage from "./(dev-select-v3)/page";

const SelectsInfo = [
  {
    title: "Dev Select V3",
    component: DevSelectV3Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable select component using Radix UI, supporting multiple options and labels.",
      features: [
        "Supports multiple options with values and labels",
        "Customizable placeholder text",
        "Label name for the select field",
        "Responsive design",
        "Accessibility-focused",
        "Customizable styling",
      ],
      props: [
        {
          propName: "options",
          propExample: `[
            { value: "React JS", label: "React JS" },
            { value: "Angular", label: "Angular" },
            // ... more options
          ]`,
          propDetail: "Array of objects containing option values and labels.",
        },
        {
          propName: "onChange",
          propExample: `(e) => console.log(e)`,
          propDetail: "Callback function triggered when an option is selected.",
        },
        {
          propName: "defaultValue",
          propExample: `{
            value: "React JS",
            label: "React JS"
          }`,
          propDetail: "Option to pre-select when the component mounts.",
        },
        {
          propName: "placeholder",
          propExample: `"Select an option"`,
          propDetail: "Text displayed when no option is selected.",
        },
        {
          propName: "labelName",
          propExample: `"Frameworks"`,
          propDetail: "Label text for the select field.",
        },
      ],
      packages: [
        {
          pckg_name: "react",
          pckg_link: "https://reactjs.org/",
        },
        {
          pckg_name: "@radix-ui/react-select",
          pckg_link: "https://www.radix-ui.com/docs/primitives/select/getting-started",
        },
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons/",
        },
      ],
    },
  },
  {
    title: "Dev Select V1",
    component: DevSelectV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable select component for selecting a single option from a list.",
      features: [
        "Displays a dropdown menu with selectable options",
        "Customizable placeholder text",
        "Label name for the select field",,
        "Provides visual feedback for the selected option",
        "Customizable appearance and behavior",
      ],
      props: [
        {
          propName: "options",
          propExample: `[{"value": "React JS", "label": "React JS"}, {"value": "Angular", "label": "Angular"}]`,
          propDetail:
            "An array of options to display in the dropdown. Each option should have a 'value' and 'label'.",
        },
        {
          propName: "onChange",
          propExample: `(e) => console.log(e)`,
          propDetail:
            "A callback function triggered when the selection changes. Receives the new selection as an argument.",
        },
        {
          propName: "defaultValue",
          propExample: `{"value": "Vue JS", "label": "Vue JS"}`,
          propDetail:
            "An optional object specifying the initially selected value. This can be either an option object or undefined.",
        },
        {
          propName: "placeholder",
          propExample: `"Select an option"`,
          propDetail: "Text displayed when no option is selected.",
        },
        {
          propName: "labelName",
          propExample: `"Frameworks"`,
          propDetail: "Label text for the select field.",
        },
      ],
      packages: [
        {
          pckg_name: "react-select",
          pckg_link: "https://github.com/JedWatson/react-select",
        },
      ],
    },
  },
  {
    title: "Dev Select V2",
    component: DevSelectV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable select component for choosing options from a dropdown menu.",
      features: [
        "Support for custom labels and values",
        "Ability to set a default selected option",
        "Customizable appearance through CSS classes",
        "Customizable placeholder text",
        "Label name for the select field",
      ],
      props: [
        {
          propName: "options",
          propExample: `[
            { value: "React JS", label: "React JS" },
            { value: "Angular", label: "Angular" },
            // ... more options
          ]`,
          propDetail:
            "An array of objects containing 'value' and 'label' properties for each selectable option.",
        },
        {
          propName: "onChange",
          propExample: `(e) => console.log(e)`,
          propDetail:
            "A callback function triggered when an option is selected. Receives the selected option as an argument.",
        },
        {
          propName: "defaultValue",
          propExample: `{ value: "Vue JS", label: "Vue JS" }`,
          propDetail:
            "The initially selected option. If not provided, no option will be pre-selected.",
        },
        {
          propName: "placeholder",
          propExample: `"Select an option"`,
          propDetail: "Text displayed when no option is selected.",
        },
        {
          propName: "labelName",
          propExample: `"Frameworks"`,
          propDetail: "Label text for the select field.",
        },
      ],
      packages: [],
    },
  },
  
];

export default SelectsInfo;
