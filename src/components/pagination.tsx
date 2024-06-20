"use client";
import { useParams } from "next/navigation";
import React from "react";
import ComponentDataArray from "../../public/component-data-array";
import CmpUrl from "@/utils/cmp-url";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Pagination = () => {
  const path = useParams();

  const getCurrentIndex = () => {
    return ComponentDataArray.findIndex(
      (item) => CmpUrl(item.name) === path?.cmp
    );
  };

  const getData = () => {
    const currentIndex = getCurrentIndex();

    if (currentIndex === -1) {
      console.log("Component not found");
    }

    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : ComponentDataArray.length - 1;
    const nextIndex = (currentIndex + 1) % ComponentDataArray.length;

    return {
      current: ComponentDataArray[currentIndex],
      prev: ComponentDataArray[prevIndex],
      next: ComponentDataArray[nextIndex],
    };
  };

  const { current, prev, next } = getData();

  return (
    <div className="w-full flex items-center justify-between">
      <Link
        href={`/components/${CmpUrl(current.name)}`}
        className="hover:bg-accent/30 p-1 justify-center text-sm rounded-full px-3 text-accent flex items-center gap-1"
      >
        <FaChevronLeft />
        {prev.name}
      </Link>
      <Link
        href={`/components/${CmpUrl(next.name)}`}
        className="hover:bg-accent/30 p-1 justify-center text-sm rounded-full px-3 text-accent flex items-center gap-1"
      >
        {next.name}
        <FaChevronRight />
      </Link>
    </div>
  );
};

export default Pagination;
