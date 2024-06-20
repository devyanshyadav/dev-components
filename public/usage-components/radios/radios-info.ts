import DevRadioUsage from "./dev-radio-usage";

const RadiosInfo = [
  {
    title: "Dev Radio",
    component: DevRadioUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A simple radio button component that allows users to select an option from a list of options.",
      features: [
        "Displays a list of radio button options",
        "Allows users to select one option from the list",
        "Provides visual feedback for the selected option",
        "Logs the selected option to the console",
      ],
      props: [
        {
          propName: "radioStatus",
          propExample: '[0, "Male"]',
          propDetail:
            "An array containing the index of the selected option and the corresponding option text.",
        },
        {
          propName: "setRadioStatus",
          propExample: "setRadioStatus",
          propDetail:
            "A function to update the radioStatus state with the selected option.",
        },
        {
          propName: "radioOptions",
          propExample: "['Male', 'Female', 'Other']",
          propDetail:
            "An array of strings representing the available radio button options.",
        },
      ],
      packages: [],
    },
  },
];
export default RadiosInfo;
