import AccordionsInfo from "./usage-components/accordions/accordions-info";
import ButtonsInfo from "./usage-components/buttons/buttons-info";
import CarouselsInfo from "./usage-components/carousels/carousels-info";
import CheckBoxesInfo from "./usage-components/checkboxes/checkboxes-info";
import ClipboardsInfo from "./usage-components/clipboards/clipboards-info";
import InputsInfo from "./usage-components/inputs/inputs-info";
import ModalsInfo from "./usage-components/modals/modals-info";
import NavbarsInfo from "./usage-components/navbars/navbars-info";
import RadiosInfo from "./usage-components/radios/radios-info";
import SelectsInfo from "./usage-components/selects/selects-info";
import TabsInfo from "./usage-components/tabs/tabs-info";
import TogglesInfo from "./usage-components/toggles/toggles-info";
import TooltipsInfo from "./usage-components/tooltips/tooltips-info";

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
  {
    name: "Tabs",
    image: "tab.png",
    componentData: TabsInfo,
    description:
      " A tab component that allows users to navigate between different sections of content.",
  },
  {
    name: "Tooltips",
    image: "tooltip.png",
    componentData: TooltipsInfo,
    description:
      "A tooltip component that displays additional information or a helpful message when hovering over an element.",
  },
  {
    name: "Carousels",
    image: "carousel.png",
    componentData: CarouselsInfo,
    description:
      " A carousels component that allows users to navigate between different sections of content.",
  },
  {
    name: "Selects",
    image: "select.png",
    componentData: SelectsInfo,
    description: "A select that allows to select an option from a list.",
  },
  {
    name: "Navbars",
    image: "nav.png",
    componentData: NavbarsInfo,
    description: "A navbar provides navigation options to users.",
  },
  {
    name: "Toggles",
    image: "toggle.png",
    componentData: TogglesInfo,
    description:
      "A toggle component that allows users to turn an option on or off.",
  },
];

export default ComponentDataArray;
