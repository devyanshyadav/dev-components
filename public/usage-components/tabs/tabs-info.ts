import BottomIndicatorUsage from "./bottom-indicator-tab-usage";
import DevSmoothTabUsage from "./dev-smooth-tab-usage";
import DevTabUsage from "./dev-tab-usage";

const TabsInfo = [
  {
    title: "Dev Tab",
    component: DevTabUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A custom tab component that allows users to switch between different content sections.",
      features: [
        "Displays a list of tab titles",
        "Allows users to switch between tabs by clicking on the tab titles",
        "Shows the corresponding content section for the selected tab",
        "Provides visual feedback for the currently active tab",
      ],
      props: [
        {
          propName: "tabData",
          propExample:
            "[{ title: 'Tab 1', element: <p>This is Tab 1</p> }, ...]",
          propDetail:
            "An array of objects containing the title and content element for each tab.",
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
    title: "Dev Smooth Tab",
    component: DevSmoothTabUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "An alternative implementation of a custom tab component with an animated underline indicator.",
      features: [
        "Displays a list of tab titles",
        "Allows users to switch between tabs by clicking on the tab titles",
        "Shows the corresponding content section for the selected tab",
        "Provides visual feedback for the currently active tab with an animated underline indicator",
      ],
      props: [
        {
          propName: "tabData",
          propExample:
            "[{ title: 'Tab 1', element: <p>This is Tab 1</p> }, ...]",
          propDetail:
            "An array of objects containing the title and content element for each tab.",
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
    title: "Bottom Indicator Tab",
    component: BottomIndicatorUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "An alternative implementation of a custom tab component with an animated rounded rectangle indicator.",
      features: [
        "Displays a list of tab titles",
        "Allows users to switch between tabs by clicking on the tab titles",
        "Shows the corresponding content section for the selected tab",
        "Provides visual feedback for the currently active tab with an animated rounded rectangle indicator",
      ],
      props: [
        {
          propName: "tabData",
          propExample:
            "[{ title: 'Tab 1', element: <p>This is Tab 1</p> }, ...]",
          propDetail:
            "An array of objects containing the title and content element for each tab.",
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
];

export default TabsInfo;
