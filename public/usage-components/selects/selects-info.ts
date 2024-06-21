import DevSelectUsage from "./dev-select-usage";

const SelectsInfo = [
  {
    title: "Dev Select",
    component: DevSelectUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A more customizable select component for selecting options from a list.",
      features: [
        "Displays a select with a list of options",
        "Allows users to select an option from the list",
        "Provides visual feedback for the selected option",
        "Customizable appearance and behavior",
      ],
      props: [
        {
          propName: "selectValue",
          propExample: `"Lion"`,
          propDetail: "The current value of the selected option.",
        },
        {
          propName: "setSelectValue",
          propExample: `setSelectValue`,
          propDetail:
            "A function to update the selectValue state when an option is selected.",
        },
        {
          propName: "Options",
          propExample: `["Lion", "Elephant", "Tiger", "Horse"]`,
          propDetail: "An array of options to display in the dropdown.",
        },
      ],
      packages: [
        {
          pckg_name: "react-tooltip",
          pckg_link: "https://react-tooltip.netlify.app/",
        },
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
      ],
    },
  },
];

export default SelectsInfo;
