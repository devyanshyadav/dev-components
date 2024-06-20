import React from "react";
import ComponentDataArray from "../../public/component-data-array";
import ComponentCard from "./component-card";
import countComponents from "../utils/count-components";

const RenderComponents = () => {
  return ComponentDataArray.map((item: any, index:number) => (
    <ComponentCard
      key={index}
      name={item.name}
      image={item.image}
      componentsNo={countComponents(item.componentData)}
      description={item.description}
    />
  ));
};

export default RenderComponents;
