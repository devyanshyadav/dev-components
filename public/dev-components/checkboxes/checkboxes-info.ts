import DevCheckboxV1Usage from "./(dev-checkbox-v1)/page";

const CheckboxInfo = [
  {
    title: "Dev Checkbox V1",
    component: DevCheckboxV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable checkbox component for toggling between checked and unchecked states.",
      features: [
        "Visual toggle between checked and unchecked states",
        "Customizable appearance and styling",
        "Optional label support",
        "Callback function for state changes",
      ],
      props: [
        {
          propName: "defaultState",
          propExample: `true`,
          propDetail: "The initial state of the checkbox. Defaults to true.",
        },
        {
          propName: "onChange",
          propExample: `(e) => console.log(e)`,
          propDetail:
            "An optional callback function triggered when the checkbox state changes.",
        },
        {
          propName: "labelName",
          propExample: `"Dev Checkbox"`,
          propDetail: "An optional label name for the checkbox.",
        },
        {
          propName: "required",
          propExample: `false`,
          propDetail: "Whether the checkbox is required.",
        },
      ],
      packages: [
        {
          name: "@radix-ui/react-checkbox",
          url: "https://www.radix-ui.com/primitives/docs/components/checkbox#checkbox",
        },
      ],
    },
  },
];

export default CheckboxInfo;
