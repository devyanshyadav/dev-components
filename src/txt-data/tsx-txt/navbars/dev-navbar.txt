"use client";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import clsx from "clsx";
import { TiUser } from "react-icons/ti";
import { LuSearch } from "react-icons/lu";

const DevNavbar = ({ navList }: { navList: string[] }) => {
  const [on, toggle] = useState(false);

  return (
    <header className="sticky top-0 flex h-14 w-full flex-col md:justify-between justify-center border-b border-cyan-500/50 bg-slate-100 p-2 px-4 text-black md:flex-row md:items-center dark:bg-slate-900 dark:text-white">
      <a href="/" className="w-fit text-xl font-semibold text-cyan-500">LOGO</a>

      <nav className={clsx("z-50 fixed inset-0 inset-x-0 top-14 w-full border-t md:border-none border-cyan-500/50 bg-slate-100 transition-all duration-300 overflow-hidden md:static md:block md:w-auto md:transition-none dark:bg-slate-900", on ? "w-full" : "w-0")}>
        <ul className="flex flex-col md:flex-row gap-5 h-full p-3 md:p-0">
          {
            navList.map((e, i) => (
              <li className="relative w-fit cursor-pointer select-none after:absolute after:bottom-0 after:left-0 after:w-0 after:border-cyan-500 after:transition-all after:duration-200 hover:text-cyan-500 hover:after:w-full hover:after:border" key={i}><a href={e.toLowerCase().replace(" ", "-").trim()}>{e}</a></li>
            ))
          }
        </ul>
      </nav>

      <div className="absolute md:static right-2 md:right-5 top-1/2 -translate-y-1/2 md:translate-y-0 flex items-center gap-2 text-2xl text-cyan-500  *:rounded-full  *:aspect-square *:h-8  *:grid *:place-items-center">
        <button className="hover:bg-cyan-500/20">
          <LuSearch />
        </button>
        <button className="text-3xl hover:bg-cyan-500/20">
          <TiUser />
        </button>
        <button className="md:hidden !h-fit">
          <Hamburger
            toggled={on}
            size={28}
            color="#22D3EE"
            toggle={() => toggle((prev) => !prev)}
            rounded
          />
        </button>
      </div>
    </header>


  );
};

export default DevNavbar;