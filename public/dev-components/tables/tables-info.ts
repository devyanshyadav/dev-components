import DevTableUsage from "./(dev-table)/page";

const TablesInfo = [
  {
    title: "Dev Table",
    component: DevTableUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A customizable table component for displaying tabular data with pagination and sticky columns.",
      features: [
        "Supports pagination to manage large datasets",
        "Sticky columns for better visibility of important data",
        "Handles dynamic data validation against predefined columns",
        "Items per page control for efficient rendering",
      ],
      helpers: [],
      props: [
        {
          propName: "data",
          propExample: `[{ id: 1, name: 'John', age: 30, city: 'New York' }]`,
          propDetail: "An array of objects representing the rows of the table.",
        },
        {
          propName: "itemsPerPage",
          propExample: `4`,
          propDetail: "The number of items to display per page.",
        },
        {
          propName: "initialPage",
          propExample: `1`,
          propDetail: "The initial page to display when the table is rendered.",
        },
        {
          propName: "columns",
          propExample: `['id', 'name', 'age', 'city']`,
          propDetail: "An array of strings representing the column headers.",
        },
        {
          propName: "stickyColumns",
          propExample: `['id', 'name', 'occupation']`,
          propDetail:
            "An array of column names that should remain sticky while scrolling.",
        },
      ],
      packages: [],
    },
  },
];

export default TablesInfo;
