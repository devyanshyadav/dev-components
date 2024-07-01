import AccordionsInfo from "./usage-components/accordions/accordions-info";
import ButtonsInfo from "./usage-components/buttons/buttons-info";
import CarouselsInfo from "./usage-components/carousels/carousels-info";
import CheckBoxesInfo from "./usage-components/checkboxes/checkboxes-info";
import ClipboardsInfo from "./usage-components/clipboards/clipboards-info";
import ColorPickersInfo from "./usage-components/color-pickers/color-pickers-info";
import EmojiPickersInfo from "./usage-components/emoji-pickers/emoji-pickers-info";
import InputsInfo from "./usage-components/inputs/inputs-info";
import MiscellaneousInfo from "./usage-components/miscellaneous/miscellaneous-info";
import ModalsInfo from "./usage-components/modals/modals-info";
import NavbarsInfo from "./usage-components/navbars/navbars-info";
import PopoversInfo from "./usage-components/popovers/popovers-info";
import RadiosInfo from "./usage-components/radios/radios-info";
import RangeSlidersInfo from "./usage-components/range-sliders/range-sliders-info";
import RichTxtEditorsInfo from "./usage-components/rich-txt-editors/rich-txt-editors-info";
import SelectsInfo from "./usage-components/selects/selects-info";
import TabsInfo from "./usage-components/tabs/tabs-info";
import TogglesInfo from "./usage-components/toggles/toggles-info";
import TooltipsInfo from "./usage-components/tooltips/tooltips-info";
import AutocompletesInfo from "./usage-components/autocompletes/autocompletes-info";

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
    image: "clipboard.png",
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
    image: "navbar.png",
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
  {
    name: "Color Pickers",
    image: "color-picker.png",
    componentData: ColorPickersInfo,
    description: "A color picker that allows to select and choose colors",
  },
  {
    name: "Rich Txt Editors",
    image: "rich-txt-editor.png",
    componentData: RichTxtEditorsInfo,
    description:
      "A rich text editor is a component that allows users to create and edit text with formatting options like bold, italics, fonts, colors, and embedded images and more.",
  },
  {
    name: "Range Sliders",
    image: "range-slider.png",
    componentData: RangeSlidersInfo,
    description:
      "A range slider component that allows users to select a value within a specific range.",
  },
  {
    name: "Popovers",
    image: "popover.png",
    componentData: PopoversInfo,
    description: "A Popover component that use to display content on trigger",
  },
  {
    name: "Emoji Pickers",
    image: "emoji-picker.png",
    componentData: EmojiPickersInfo,
    description:
      "A Emoji Picker component that allows users to add emojis to their text",
  },
  {
    name: "Autocompletes",
    image: "autocomplete.png",
    componentData: AutocompletesInfo,
    description:
      "Autocomplete component is a text input field that displays a list of suggestions as the user types filtered in real-time.",
  },
  {
    name: "Miscellaneous",
    image: "miscellaneous.png",
    componentData: MiscellaneousInfo,
    description:
      "Miscellaneous components are assorted minor parts or elements that don't fit main categories.",
  },
 
];

export default ComponentDataArray;
