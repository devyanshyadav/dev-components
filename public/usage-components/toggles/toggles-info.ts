import DevToggleUsage from "./dev-toggle-usage";
import SleekToggleUsage from "./sleek-toggle-usage";
import SwitchesUsage from "./switches-usage";
import ThemeToggleUsage from "./theme-toggle-usage";

const TogglesInfo = [
  {
    title: "Dev Toggle",
    component: DevToggleUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description: "A custom toggle switch component with a smooth animation.",
      features: [
        "Displays a toggle switch with a circular knob",
        "Allows toggling between two states (on/off)",
        "Provides a smooth animation when toggling",
        "Includes a label to indicate the current state",
      ],
      props: [
        {
          propName: "toggle",
          propExample: "true",
          propDetail:
            "A boolean value representing the current state of the toggle switch.",
        },
        {
          propName: "isToggle",
          propExample: "isToggle",
          propDetail:
            "A function to update the toggle state when the toggle switch is clicked.",
        },
      ],
      doc_links: [],
      packages: [
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
      ],
    },
  },
  {
    title: "Sleek Toggle",
    component: SleekToggleUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A sleek custom toggle switch component with a smooth animation.",
      features: [
        "Displays a toggle switch with a circular knob",
        "Allows toggling between two states (on/off)",
        "Provides a smooth animation when toggling",
        "Includes a label to indicate the current state",
      ],
      props: [
        {
          propName: "toggle",
          propExample: "true",
          propDetail:
            "A boolean value representing the current state of the toggle switch.",
        },
        {
          propName: "isToggle",
          propExample: "isToggle",
          propDetail:
            "A function to update the toggle state when the toggle switch is clicked.",
        },
      ],
      doc_links: [],
      packages: [
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
      ],
    },
  },
  {
    title: "Theme Toggle",
    component: ThemeToggleUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A custom toggle switch component with a smooth animation of dark and light mode with justified icons.",
      features: [
        "Displays a toggle switch with a circular knob",
        "Icons for dark and light mode",
        "Allows toggling between two states (on/off)",
        "Provides a smooth animation when toggling",
        "Includes a label to indicate the current state",
      ],
      props: [
        {
          propName: "toggle",
          propExample: "true",
          propDetail:
            "A boolean value representing the current state of the toggle switch.",
        },
        {
          propName: "isToggle",
          propExample: "isToggle",
          propDetail:
            "A function to update the toggle state when the toggle switch is clicked.",
        },
      ],
      doc_links: [],
      packages: [
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
        {
          pckg_name: "react-icons",
          pckg_link: "https://www.npmjs.com/package/react-icons",
        },
      ],
    },
  },
  {
    title: "Switches",
    component: SwitchesUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A custom toggle component that supports multiple toggles for various functionalities like notifications, mute, theme switcher, play/pause, like/dislike, and lock/unlock.",
      features: [
        "Supports multiple toggles in one component",
        "Each toggle can independently change state",
        "Uses icons for visual representation",
        "State management handled internally",
      ],
      props: [],
      packages: [
        {
          pckg_name: "react-icons",
          pckg_link: "https://www.npmjs.com/package/react-icons",
        },
      ],
      doc_links: ["https://react-icons.github.io/react-icons/"],
    },
  },
];

export default TogglesInfo;
