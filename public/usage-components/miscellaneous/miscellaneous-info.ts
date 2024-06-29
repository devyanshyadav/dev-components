import ReactMovableUsage from "./react-movable-usage";
import ReactResizablePanelsUsage from "./react-resizable-panels-usage";
import ResponsiveGridLayoutUsage from "./responsive-grid-layout-usage";
import DevChipInputUsage from "./dev-chip-input-usage";

const MiscellaneousInfo = [
  {
    title: "React Resizable Panels",
    component: ReactResizablePanelsUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A React component that implements movable panels, allowing users to adjust the position of individual panels within a group. Ideal for creating customizable interfaces or dashboards.",
      features: [
        "Resizable panels with adjustable minimum and maximum sizes",
        "Supports both horizontal and vertical panel arrangements",
        "Interactive resize handles for intuitive resizing",
        "Styling and layout control via CSS classes and inline styles",
      ],
      props: [],
      packages: [
        {
          pckg_name: "react-resizable-panels",
          pckg_link: "https://www.npmjs.com/package/react-resizable-panels",
        },
      ],

      doc_links: ["https://react-resizable-panels.vercel.app/"],
    },
  },
  {
    title: "React Movable",
    component: ReactMovableUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A React component that provides drag-and-drop functionality for lists, enabling users to reorder items within a list. Useful for creating interactive and dynamic interfaces.",
      features: [
        "Drag-and-drop reordering of list items",
        "Locking of list orientation for vertical arrangement only",
        "Customizable rendering of list items",
        "Integration with external state management for real-time updates",
      ],
      props: [
        {
          propName: "items",
          propExample: '["Item 1", "Item 2", "Item 3", "Item4"]',
          propDetail:
            "An array of strings representing the list items. Each item corresponds to a list element.",
        },
        {
          propName: "setItems",
          propExample: "Function",
          propDetail:
            "A function to update the list items array, typically derived from React's useState hook.",
        },
      ],
      packages: [
        {
          pckg_name: "react-movable",
          pckg_link: "https://github.com/tajo/react-movable",
          },
      ],
      doc_links: ["https://github.com/tajo/react-movable"],
    },
  },
  {
    title: "Responsive Grid Layout",
    component:ResponsiveGridLayoutUsage,
    variants:{
      jsx:true,
      tsx:true
    },
    details: {
      description:
        "A React component that creates a responsive grid layout, allowing for dynamic adjustment of grid items based on screen size. Ideal for creating responsive designs with draggable and resizable elements.",
      features: [
        "Responsive design that adjusts to different screen sizes",
        "Draggable and resizable grid items",
        "Customizable breakpoints and column configurations",
        "Support for multiple layouts at different screen widths",
      ],
      props: [
        {
          propName: "layouts",
          propExample:
            '{"lg": [{"w": 1, "h": 1, "x": 0, "y": 0, "i": "1"},...]}',
          propDetail:
            "An object defining the grid layouts for different screen widths. Each key represents a breakpoint, and the value is an array of grid items.",
        },
        {
          propName: "rowHeight",
          propExample: "60",
          propDetail: "The height of each row in pixels.",
        },
        {
          propName: "compactType",
          propExample: '"horizontal"',
          propDetail:
            'Defines the compact mode type. Can be either "horizontal" or "vertical".',
        },
        {
          propName: "breakpoints",
          propExample: '{"lg": 1200, "md": 3, "sm": 2}',
          propDetail:
            "An object specifying the breakpoints for different screen widths.",
        },
        {
          propName: "cols",
          propExample: '{"lg": 12, "md": 3, "sm": 2}',
          propDetail:
            "An object defining the number of columns for different screen widths.",
        },
        {
          propName: "maxRows",
          propExample: "5",
          propDetail: "The maximum number of rows allowed in the grid.",
        },
        {
          propName: "onLayoutChange",
          propExample: "Function",
          propDetail:
            "A callback function called when the layout changes, receiving the updated layout as its argument.",
        },
      ],
      packages: [
        {
          pckg_name: "react-grid-layout",
          pckg_link: "https://github.com/react-grid-layout/react-grid-layout",
         },{
          pckg_name: "@types/react-grid-layout",
          pckg_link: "https://www.npmjs.com/package/@types/react-grid-layout",
         }
      ],
      doc_links:["https://react-grid-layout.github.io/react-grid-layout/examples/0-showcase.html"]
    },
  },
  {
    title: "Dev Chip Input",
    component: DevChipInputUsage,
    variants: {
      jsx: true,
      tsx: true 
    },
    details: {
      description:
        "A React component for managing tags with an input field to add new tags and a display of existing tags with delete functionality.",
      features: [
        "Add tags with Enter key or by typing",
        "Delete tags individually",
        "Input validation for duplicate tags and tag length",
      ],
      props: [
        {
          propName: "tags",
          propExample: "[{ id: 1, value: 'Tag1' }, { id: 2, value: 'Tag2' }]",
          propDetail: "Array of objects representing tags with unique IDs and values."
        },
        {
          propName: "setTags",
          propExample: "Function",
          propDetail: "Setter function to update the tags state."
        },
        {
          propName: "tagLength",
          propExample: "14",
          propDetail: "Maximum number of tags allowed."
        },
        {
          propName: "textLength",
          propExample: "20",
          propDetail: "Maximum length of each tag's text."
        }
      ],
      packages: [],
      doc_links: [] 
    }
  }
  
];

export default MiscellaneousInfo;
