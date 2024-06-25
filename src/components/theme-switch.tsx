"use client";
import { useTheme } from "next-themes";
import { MdWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="text-accent text-2xl bg-secondary/50 p-1 rounded-full">
        <IoMdMoon />
      </button>
    );
  }

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="text-accent text-2xl bg-secondary/50 p-1 rounded-full"
    >
      {theme === "dark" ? <IoMdMoon /> : <MdWbSunny />}
    </button>
  );
}
