"use client";
import React from "react";
import { usePathname } from "next/navigation";
import CmpUrl from "@/utils/cmp-url";
import Link from "next/link";
import ComponentDataArray from "../../../public/component-data-array";
import DevButtonV1 from "../../../public/dev-components/buttons/(dev-button-v1)/dev-button-v1";
import { IoIosColorPalette } from "react-icons/io";
import DevPopoverV1 from "../../../public/dev-components/popovers/(dev-popover-v1)/dev-popover-v1";
import ColorSwatch from "@/components/swatch/color-swatch";

const SideNavigation = () => {
  const path = usePathname();

  const data = ComponentDataArray.find(
    (item) => `/components/${CmpUrl(item?.name)}` === path
  );
  return (
    path !== "/components" && (
      <aside className="flex-shrink-0 h-[92vh] w-40 text-sm space-y-2 sticky top-0 md:block hidden border-l border-accentNeon/30 py-4">
        <span className="px-4">Sub Components</span>
        <ul className="space-y-2 *:opacity-50">
          {data?.componentData.map((item: any, index: number) => (
            <li
              key={index}
              className="hover:border-l-2 px-4 text-nowrap -translate-x-[2px] border-accentNeon"
            >
              <Link href={`#${CmpUrl(item.title)}`}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <div className="fixed bottom-3 right-3">
         <ColorSwatch/>
        </div>
      </aside>
    )
  );
};

export default SideNavigation;
