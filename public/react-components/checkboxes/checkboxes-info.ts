import DevCheckboxUsage from "./(dev-checkbox)/dev-checkbox-usage";

const CheckBoxesInfo = [
  {
    title: "Dev Checkbox",
    component: DevCheckboxUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A simple checkbox component that allows users to toggle a boolean value.",
      features: [
        "Displays a checkbox with a label",
        "Allows users to toggle the checkbox state by clicking on it",
        "Provides visual feedback for the checked and unchecked states",
      ],
      props: [
        {
          propName: "checked",
          propExample: "true",
          propDetail:
            "A boolean value representing the current state of the checkbox.",
        },
        {
          propName: "isChecked",
          propExample: "isChecked",
          propDetail:
            "A function to update the checkStatus state when the checkbox is toggled.",
        },
      ],
      packages: [],
    },
  },
];

export default CheckBoxesInfo;
