"use client";
import React from "react";
import { useTheme } from "next-themes";
import { IoMdMoon } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";

const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <span
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="text-accent text-2xl bg-secondary/50 p-1 rounded-full"
    >
      {currentTheme === "dark" ? <IoMdMoon /> : <MdWbSunny />}
    </span>
  );
};

export default ThemeSwitch;
