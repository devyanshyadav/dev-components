import DevToggleV1Usage from "./(dev-toggle-v1)/page";
import DevToggleV2Usage from "./(dev-toggle-v2)/page";

const TogglesInfo = [
  {
    title: "Dev Toggle V1",
    component: DevToggleV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable toggle switch component for toggling between two states.",
      features: [
        "Visual toggle between two distinct states",
        "Customizable size and styling",
        "Optional label support",
        "Callback function for state changes",
      ],
      props: [
        {
          propName: "defaultState",
          propExample: `true`,
          propDetail:
            "The initial state of the toggle switch. Defaults to true.",
        },
        {
          propName: "onChange",
          propExample: `(e) => console.log(e)`,
          propDetail:
            "An optional callback function triggered when the toggle state changes.",
        },
        {
          propName: "labelName",
          propExample: `"Switch"`,
          propDetail: "An optional label name for the toggle switch.",
        },
      ],
      packages: [],
    },
  },
  {
    title: "Dev Toggle V2",
    component: DevToggleV2Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable toggle switch component for toggling between two states.",
      features: [
        "Visual toggle between two distinct states",
        "Customizable size and styling",
        "Optional label support",
        "Callback function for state changes",
      ],
      props: [
        {
          propName: "defaultState",
          propExample: `true`,
          propDetail:
            "The initial state of the toggle switch. Defaults to true.",
        },
        {
          propName: "onChange",
          propExample: `(e) => console.log(e)`,
          propDetail:
            "An optional callback function triggered when the toggle state changes.",
        },
        {
          propName: "labelName",
          propExample: `"Switch"`,
          propDetail: "An optional label name for the toggle switch.",
        },
      ],
      packages: [],
    },
  },
];

export default TogglesInfo;
