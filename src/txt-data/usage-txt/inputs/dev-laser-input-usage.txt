import DevLaserInput from "@/components/dev-laser-input";
import React from "react";
import { LuSearch } from "react-icons/lu";

const DevLaserInputUsage = () => {
  return (
    <div className="md:max-w-xl w-full ">
      <DevLaserInput
        icon={<LuSearch className="text-accent text-xl" />}
        type="text"
        rounded="full"
        scale="md"
        placeholder="Enter name"
      />
    </div>
  );
};

export default DevLaserInputUsage;
