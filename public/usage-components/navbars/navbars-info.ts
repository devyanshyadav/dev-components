import DevNavbarUsage from "./dev-navbar-usage";

const NavbarsInfo = [
  {
    title: "Dev NavBar",
    component: DevNavbarUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A responsive navigation bar component with a hamburger menu for smaller screens.",
      features: [
        "Displays a list of navigation links",
        "Includes a logo and a login button",
        "Provides a hamburger menu for mobile screens",
        "Adds hover effects and animations to navigation links",
      ],
      props: [
        {
          propName: "navList",
          propExample: "['Home', 'About', 'Contact']",
          propDetail:
            "An array of strings representing the navigation links to be displayed.",
        },
      ],
      packages: [
        {
          pckg_name: "Hamburger",
          pckg_link: "https://www.npmjs.com/package/hamburger-react",
        },
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
      ],
    },
  },
];

export default NavbarsInfo;
