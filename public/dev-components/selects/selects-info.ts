import DevSelectV1Usage from "./(dev-select-v1)/page";
import DevSelectV2Usage from "./(dev-select-v2)/page";

const SelectsInfo = [
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
        "Allows users to choose one option from the list",
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
        "Simple API for easy integration",
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
      ],
      packages: [],
    },
  },
];

export default SelectsInfo;
