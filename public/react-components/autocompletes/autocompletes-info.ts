import DevAutocompleteUsage from "./(dev-autocomplete)/dev-autocomplete-usage";

const AutocompletesInfo = [
  {
    title: "Dev Autocomplete",
    component: DevAutocompleteUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A React component that provides an autocomplete feature, allowing users to search and select from a predefined list of items as they type. Enhances user input by reducing keystrokes and improving accuracy.",
      features: [
        "Autocomplete functionality with real-time suggestions",
        "Keyboard navigation through suggestions",
        "Customizable appearance and behavior",
        "Tooltip as Dropdown for displaying suggestions",
      ],
      props: [
        {
          propName: "items",
          propExample:
            "['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew']",
          propDetail:
            "An array of strings representing the items to be suggested as the user types.",
        },
      ],
      packages: [
        {
          pckg_name: "react-tooltip",
          pckg_link: "https://www.npmjs.com/package/react-tooltip",
          pckg_detail:
            "A tooltip component for React that supports various functionalities like positioning, animation, and event handling.",
        },
      ],
    },
  },
];

export default AutocompletesInfo;
