import DevCalendarUsage from "./(dev-calendar)/page";

const DateInfo = [
  {
    title: "Dev Calendar",
    component: DevCalendarUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A calendar component wrapper around react-calendar, providing customizable styling and integration with React hooks.",
      features: [
        "Integration with react-calendar library",
        "Customizable styling through CSS classes",
        "Support for default date selection",
        "React hook compatibility",
        "Responsive design",
      ],
      props: [
        {
          propName: "onChange",
          propExample: `(date) => setDate(date)`,
          propDetail: "Callback function triggered when a date is selected.",
        },
        {
          propName: "defaultDate",
          propExample: `new Date()`,
          propDetail: "Initial date displayed in the calendar.",
        },
      ],
      doc_links:["https://projects.wojtekmaj.pl/react-calendar/"],
      packages: [
        {
          pckg_name: "react-calendar",
          pckg_link: "https://github.com/wojtekmaj/react-calendar#readme",
        },
      ],
    },
  },
];
export default DateInfo;
