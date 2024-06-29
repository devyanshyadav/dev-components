'use client';
import React, { useState } from "react";
import DevChipInput from "../../preview-components/miscellaneous/dev-chip-input";

const DevChipInputUsage = () => {
  const [tags, setTags] = useState([
    "Dev components",
    "Next js",
    "React js",
    "Tailwind css",
    "Node js",
    "Express js",
    "MongoDB"
  ]);

  return (
    <div className="w-full">
      <DevChipInput tags={tags} setTags={setTags} tagLength={14} textLength={20} />
    </div>
  );
};

export default DevChipInputUsage;
