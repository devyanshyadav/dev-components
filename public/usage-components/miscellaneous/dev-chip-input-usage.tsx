'use client'
import React, { useState } from "react";
import DevChipInput from "../../preview-components/miscellaneous/dev-chip-input";

const DevChipInputUsage = () => {
  const [tags, setTags] = useState([
    {
      id: 1,
      value: "Dev components"
    },
    {
      id: 2,
      value: "Next js"
    },
    {
      id: 3,
      value: "React js"
    },
    {
      id: 4,
      value: "Tailwind css"
    },
    {
      id: 5,
      value: "Node js"
    },
    {
      id: 6,
      value: "Express js"
    },
    {
      id: 7,
      value: "MongoDB"
    }
  ]);

  return (
    <div className="w-full">
      <DevChipInput tags={tags} setTags={setTags} tagLength={14} textLength={20} />
    </div>
  );
};

export default DevChipInputUsage;
