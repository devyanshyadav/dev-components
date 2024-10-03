import DevDynamicMenuUsage from "./(dev-dynamic-menu)/page";

const NavigationInfo = [
  {
    title: "Dev Dynamic Menu",
    component: DevDynamicMenuUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A dynamic menu component that supports multi-level navigation with collapsible submenus.",
      features: [
        "Multi-level menu structure",
        "Collapsible submenus",
        "Customizable styling",
        "Responsive design",
        "Accessibility-focused",
        "Integration with Next.js routing",
      ],
      props: [
        {
          propName: "menuItems",
          propExample: `[
            {
              name: "Home",
              path: "/",
              subLinks: [
                {
                  name: "Software",
                  path: "/products/software",
            },
            
            // ... more menu items
          ]`,
          propDetail:
            "Array of objects defining menu items, including their names, paths, and optional sublinks.",
        },
        {
          propName: "className",
          propExample: `"border-accentNeon/30 border rounded-lg"`,
          propDetail: "Optional class name for custom styling.",
        },
      ],
      packages: [],
    },
  },
];

export default NavigationInfo;
