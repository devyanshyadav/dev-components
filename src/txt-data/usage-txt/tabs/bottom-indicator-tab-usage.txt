import React from "react";
import BottomIndicatorTab from "../../preview-components/tabs/bottom-indicator-tab";

const BottomIndicatorUsage = () => {
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
      <BottomIndicatorTab tabData={tabData} />
    </div>
  );
};

export default BottomIndicatorUsage;
