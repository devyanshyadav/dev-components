"use client";
import React from "react";
import ComponentDataArray from "../../public/component-data-array";
import { usePathname } from "next/navigation";
import CmpUrl from "@/utils/cmp-url";
import Link from "next/link";

const SideNavigation = () => {
  const path = usePathname();

  const data = ComponentDataArray.find(
    (item) => `/components/${CmpUrl(item?.name)}` === path
  );
  return (
    <aside className="w-40 text-sm space-y-2 sticky top-0 md:block hidden border-l border-accent/30 py-4">
      <span className="px-4">Sub Components</span>
      <ul className="space-y-2 *:opacity-50 font-light">
        {data?.componentData.map((item: any, index: number) => (
          <li
            key={index}
            className="hover:border-l-2 px-4 text-nowrap -translate-x-[2px] border-accent"
          >
            <Link href={`#${CmpUrl(item.title)}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideNavigation;
