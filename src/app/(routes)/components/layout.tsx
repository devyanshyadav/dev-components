import React from "react";
import SideBar from "../../../components/sidebar";
import Pagination from "@/components/pagination";
import SideNavigation from "@/components/side-navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <main className="w-full overflow-hidden bg-gradient-to-r p-5 md:px-0 bg-light-primary dark:bg-dark-primary md:pr-3 px-2 h-screen mx-0 flex gap-2">
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
