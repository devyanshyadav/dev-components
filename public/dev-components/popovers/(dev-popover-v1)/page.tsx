import React from "react";
import DevPopoverV1 from "./dev-popover-v1";

const DevPopoverV1Usage = () => {
  return (
    <DevPopoverV1 button={<button className='p-1 px-3 bg-accentNeon text-white rounded-lg'>Open</button>}>
      <p>Popover Content</p>
    </DevPopoverV1>
  );
};

export default DevPopoverV1Usage;
