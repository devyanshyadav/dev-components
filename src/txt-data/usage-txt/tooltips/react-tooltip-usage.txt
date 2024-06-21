import React from "react";
import ReactTooltip from "../../preview-components/tooltips/react-tooltip";

const ReactTooltipUsage = () => {
  return (
    <ReactTooltip tipData="I am tooltip">
      <h3 className="text-cyan-400 ">Hover on me</h3>
    </ReactTooltip>
  );
};

export default ReactTooltipUsage;
