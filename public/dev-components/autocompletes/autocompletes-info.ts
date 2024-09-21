import DevAutocompleteV1Usage from "./(dev-autocomplete-v1)/page";

const AutocompletesInfo = [
  {
    title: "Dev Autocomplete V1",
    component: DevAutocompleteV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable autocomplete component for selecting options from a dropdown menu.",
      features: [
        "Real-time filtering of search results",
        "Support for multiple selection",
        "Customizable appearance and styling",
        "Integration with Downshift library",
      ],
      props: [
        {
          propName: "items",
          propExample: `[{ value: 'Apple' }, { value: 'Banana' }]`,
          propDetail: "An array of objects containing 'value' properties for each selectable option.",
        },
        {
          propName: "onChange",
          propExample: `(e) => alert('You selected ' + e?.value)`,
          propDetail: "A callback function triggered when an item is selected. Receives the selected item as an argument.",
        },
        {
          propName: "defaultItem",
          propExample: `{ value: 'Apple' }`,
          propDetail: "The initially selected item. If not provided, no item will be pre-selected.",
        },
      ],
      packages: [
        {
          pckg_name: "downshift",
          pckg_link: "https://www.npmjs.com/package/downshift",
        },
      ],
      doc_link:["https://www.downshift-js.com/"]
    },
  },
];

export default AutocompletesInfo;
