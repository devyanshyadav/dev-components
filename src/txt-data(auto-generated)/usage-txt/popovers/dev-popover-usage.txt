"use client";
import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { RiProfileLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import clsx from "clsx";
import DevPopover from "../../preview-components/popovers/dev-popover";

const DevPopoverUsage = () => {        
  return (
    <section className="w-72 p-5 border border-cyan-500/50 flex items-center justify-between rounded-xl">
      {/* Example 1  */}
      <div>
        <DevPopover
          popButton={
            <button className="text-base font-semibold p-1 px-3 border border-cyan-500 text-cyan-500 bg-cyan-500/30 rounded-full">
              Click
            </button>
          }
          place="bottom"
        >
          <div className="text-center">Popup Content</div>
        </DevPopover>
      </div>

      {/* Example 2  */}
      <div>
        <DevPopover
          popButton={
            <button className="text-3xl  text-cyan-700 bg-white rounded-full shadow-lg active:opacity-80">
              <FaCircleUser className=" outline outline-cyan-500 rounded-full" />
            </button>
          }
        >
          <div className="flex flex-col">
            {[
              { icon: <RxDashboard />, text: "Dashboard" },
              { icon: <RiProfileLine />, text: "Profile" },
              { icon: <IoSettingsOutline />, text: "Settings" },
              { icon: <LuLogOut />, text: "Logout" },
            ].map((elem, index) => (
              <button
                className={clsx(
                  "p-1 px-2 flex items-center gap-2 text-left hover:bg-cyan-500/30 w-full self-start rounded-lg",
                  index === 3 && "hover:bg-red-600/20 text-red-600"
                )}
                key={index}
              >
                {elem.icon}
                <p>{elem.text}</p>
              </button>
            ))}
          </div>
        </DevPopover>
      </div>
    </section>
  );
};

export default DevPopoverUsage;
