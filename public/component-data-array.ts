import AccordionsInfo from "./usage-components/accordions/accordions-info";
import ButtonsInfo from "./usage-components/buttons/buttons-info";
import CheckBoxesInfo from "./usage-components/checkboxes/checkboxes-info";
import ClipboardsInfo from "./usage-components/clipboards/clipboards-info";
import InputsInfo from "./usage-components/inputs/inputs-info";
import ModalsInfo from "./usage-components/modals/modals-info";
import RadiosInfo from "./usage-components/radios/radios-info";

const ComponentDataArray = [
  {
    name: "Buttons",
    image: "button.png",
    componentData: ButtonsInfo,
    description:
      "Buttons enable users to execute actions and make selections with a simple tap",
  },
  {
    name: "Radios",
    image: "radio.png",
    componentData: RadiosInfo,
    description:
      "A radio button allows users to select a single option from a set of mutually exclusive choices.",
  },

  {
    name: "Clipboards",
    image: "clipboard.svg",
    componentData: ClipboardsInfo,
    description:
      "A Clipboard component that allows users to copy text to their clipboard on click",
  },
  {
    name: "Inputs",
    image: "input.png",
    componentData: InputsInfo,
    description:
      "A Input component that allows to input values in different formats",
  },
  {
    name: "Modals",
    image: "modal.png",
    componentData: ModalsInfo,
    description:
      "A modal component that can be used to display content or prompts.",
  },
  {
    name: "Checkboxes",
    image: "checkbox.png",
    componentData: CheckBoxesInfo,
    description:
      "A checkbox is used for boolean selection, allowing users to indicate choices by toggling a checked state.",
  },
  {
    name: "Accordions",
    image: "accordion.png",
    componentData: AccordionsInfo,
    description:
      "An accordion is a UI component that allows users to show/hide content by clicking on headers.",
  },
];

export default ComponentDataArray;
