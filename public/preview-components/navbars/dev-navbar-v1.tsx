import React from "react";

const DevNavbarV1 = ({ navList }: { navList: string[] }) => {
  return (
    <header className="sticky top-2 mx-auto my-2 flex h-14 w-[98%] flex-col rounded-full border border-cyan-500/50 bg-slate-100 p-2 px-4 text-black md:flex-row md:items-center md:justify-between dark:bg-slate-900 dark:text-white">
      <a href="/" className="w-fit text-xl font-semibold">
        LOGO
      </a>
      <span className="absolute right-5 top-1/2 -translate-y-1/2">
        <label
          htmlFor="nav-toggle"
          className="cursor-pointer select-none text-xl font-semibold active:opacity-50 md:hidden"
        >
          ☰
        </label>
      </span>
      <input type="checkbox" id="nav-toggle" className="peer hidden" />
      <nav className="mt-5 w-full -translate-y-[200%] rounded-xl md:border-none border md:shadow-none shadow border-cyan-500/50 bg-slate-100 transition-all duration-500 peer-checked:translate-y-0 md:mt-0 md:block md:w-auto md:translate-y-0 md:transition-none dark:bg-slate-900">
        <ul className="flex flex-col p-2 md:flex-row md:p-0">
          {navList.map((e, i) => (
            <li
              key={i}
              className="cursor-pointer rounded-full p-1 px-3 hover:bg-cyan-500/30"
            >
              <a href={e.toLowerCase().replace(" ", "-").trim()}>{e}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default DevNavbarV1;
