import Image from "next/image";
import Link from "next/link";
import React from "react";
import ToggleHamburger from "./toggle-hamburger";
import ThemeSwitch from "./theme-switch";
import { FaGithub } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 h-12 backdrop-blur dark:bg-dark-secondary bg-light-secondary border-b border-b-accent/20 flex items-center justify-between px-2">
      <Link
        href="/"
        className="select-none hover:opacity-80 z-50 top-1 flex items-center text-base  gap-1  p-[2px] rounded-r-full px-4"
      >
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={500}
          height={500}
          className="w-8 select-none "
        />
        <h2 className="md:block hidden select-none text-lg font-light">
          Dev Components
        </h2>
      </Link>

      <span className="text-accent flex items-center justify-center gap-2">
        <Link
          target="_blank"
          href="https://github.com/devyanshyadav/Dev-Components"
        >
          <FaGithub className="text-2xl" />
        </Link>
        <ThemeSwitch />
        <span className=" bg-secondary/50 rounded-bl-xl md:hidden">
          <ToggleHamburger />
        </span>
      </span>
    </header>
  );
};

export default Header;
