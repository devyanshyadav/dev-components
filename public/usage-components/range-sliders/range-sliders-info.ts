import DevRangeSliderUsage from "./dev-range-slider-usage";
import MultiRangeSliderReactUsage from "./multi-range-slider-react-usage";

const RangeSlidersInfo = [
  {
    title: "Dev Range Slider",
    component: DevRangeSliderUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable range slider component for selecting numerical values.",
      features: [
        "Displays a range slider for numerical input",
        "Allows users to select a value by dragging the slider thumb",
        "Provides visual feedback for the selected value",
        "Customizable appearance and behavior",
      ],
      props: [
        {
          propName: "currValue",
          propExample: "30",
          propDetail: "The current value of the range slider.",
        },
        {
          propName: "minValue",
          propExample: "0",
          propDetail: "The current minimum value of the range slider.",
        },
        {
          propName: "maxValue",
          propExample: "100",
          propDetail: "The current maximum value of the range slider.",
        },
        {
          propName: "setCurrValue",
          propExample: "setCurrValue",
          propDetail:
            "A function to update the currValue state when the slider is moved.",
        },
        {
          propName: "size",
          propExample: "md",
          propDetail: "The size of the slider track.",
        },
      ],
      packages: [],
    },
  },
  {
    title: "Multi Range Slider React",
    component: MultiRangeSliderReactUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable range slider component for selecting dual numerical values lies in specific ranges.",
      features: [
        "Displays a range slider with two handles and numeric labels",
        "Allows users to select a value by dragging the slider thumb",
        "Provides visual feedback for the selected value",
        "Customizable appearance and behavior",
      ],
      props: [
        {
          propName: "currMinValue",
          propExample: "25",
          propDetail: "The current minimum value of the range slider.",
        },
        {
          propName: "currMaxValue",
          propExample: "75",
          propDetail: "The current maximum value of the range slider.",
        },
        {
          propName: "setCurrMinValue",
          propExample: "setCurrMinValue",
          propDetail:
            "A function to update the minValue state when the slider is moved.",
        },
        {
          propName: "setCurrMaxValue",
          propExample: "setCurrMaxValue",
          propDetail:
            "A function to update the maxValue state when the slider is moved.",
        },
        {
          propName: "min",
          propExample: "10",
          propDetail: "The minimum value of the range slider.",
        },
        {
          propName: "max",
          propExample: "100",
          propDetail: "The maximum value of the range slider.",
        },
        {
          propName: "step",
          propExample: "5",
          propDetail: "The step size of the range slider.",
        },
      ],
      packages: [
        {
          pckg_name: "multi-range-slider-react",
          pckg_link: "https://www.npmjs.com/package/multi-range-slider-react",
        },
        {
          pckg_name: "styled-components",
          pckg_link: "https://www.npmjs.com/package/styled-components",
        },
      ],
      doc_links: ["https://www.npmjs.com/package/multi-range-slider-react"],
    },
  },
];

export default RangeSlidersInfo;
