import React from "react";
import DevSmoothTab from "./dev-smooth-tab";

const DevSmoothTabUsage = () => {
  const tabData = [
    {
      title: "Tab 1",
      element: <p className="font-semibold"> This is Tab 1</p>,
    },
    {
      title: "Tab 2",
      element: <p className="font-semibold"> This is Tab 2</p>,
    },
    {
      title: "Tab 3",
      element: <p className="font-semibold"> This is Tab 3</p>,
    },
  ];
  return (
    <div className="w-80">
      <DevSmoothTab tabData={tabData} />
    </div>
  );
};

export default DevSmoothTabUsage;
