import React from "react";
import SideBar from "../../../components/sidebar";
import Pagination from "@/components/pagination";
import SideNavigation from "@/components/side-navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <main className="w-full overflow-hidden md:px-0 bg-light-primary dark:bg-dark-primary md:pr-3 px-2 h-[92vh] flex gap-2 mx-auto max-w-7xl">
        <SideBar />
        <section className="flex-1 h-full rounded-xl p-3 md:p-5 space-y-4 overflow-y-scroll [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb]">
          {children}
          <Pagination/>
        </section>
        <SideNavigation/>
      </main>
  );
};

export default layout;
