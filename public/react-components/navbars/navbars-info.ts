import DevNavbarUsage from "./(dev-navbar)/dev-navbar-usage";
import DevNavbarV1Usage from "./(dev-navbar-v1)/dev-navbar-v1-usage";

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
  {
    title: "Dev NavBar v1",
    component: DevNavbarV1Usage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A responsive navigation bar component best for server side rendering.",
      features: [
        "Displays a list of navigation links",
        "Includes a logo",
        "Adds dropdown animation for mobile screens",
        "Zero client side rendering",
      ],
      props: [
        {
          propName: "navList",
          propExample: "['Home', 'Blogs', 'About', 'Contact']",
          propDetail:
            "An array of strings representing the navigation links to be displayed.",
        },
      ],
      packages: [
      ],
    },
  },
];

export default NavbarsInfo;
