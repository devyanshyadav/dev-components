"use client";
import React, { useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ComponentDataArray from "../../public/component-data-array";
import useDevStore from "../utils/dev-store";
import CmpUrl from "@/utils/cmp-url";
import SearchComponents from "./search-components";

const SideBar = () => {
  const { sidebar, sidebarToggle } = useDevStore((state) => state);
  const params = usePathname();
  const data = ComponentDataArray.filter(
    (item) => `/components/${CmpUrl(item.name)}` === params
  );
  // useEffect(() => {
  //   sidebarToggle();
  // }, []);

  return (
    sidebar &&
    params !== "/components" && (
      <motion.section
        initial={{ left: "-100px" }}
        animate={{ left: 0 }}
        exit={{ left: 0 }}
        transition={{ duration: 0.2 }}
        className="h-full w-fit bg-light-primary dark:bg-dark-primary !overflow-y-scroll [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb]:hidden fixed md:static z-40 top-12 border-r border-accent/30 p-3"
      >
        <SearchComponents />
        <ul className="space-y-2 md:block hidden  pr-14 mt-4">
          {ComponentDataArray.map((item: any, index: number) => (
            <li
              key={index}
              className={`w-full flex group items-center gap-2 hover:text-accent rounded-lg cursor-pointer p-1 px-2 ${
                data.length > 0 && data[0].name === item.name
                  ? "text-accent"
                  : ""
              } `}
            >
              <GoDotFill className="text-xs group-hover:text-accent" />{" "}
              <Link
                href={`/components/${CmpUrl(item.name)}`}
                className="w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-2 md:hidden pr-14 mt-4">
          {ComponentDataArray.map((item, index) => (
            <li
              key={index}
              onClick={() => sidebarToggle()}
              className={`w-full  group flex items-center gap-2 hover:bg-secondary/20 hover:text-white rounded-lg cursor-pointer p-1 px-2 ${
                data.length > 0 && data[0].name === item.name
                  ? "text-accent"
                  : ""
              } `}
            >
              <GoDotFill className="text-xs group-hover:text-accent" />{" "}
              <Link
                href={`/components/${CmpUrl(item.name)}`}
                className="w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.section>
    )
  );
};

export default SideBar;
