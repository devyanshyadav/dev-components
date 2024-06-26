import Header from "@/components/header";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <div className=" mx-auto max-w-7xl !scroll-smooth h-[92vh] overflow-y-scroll [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb]">
        {children}
      </div>
    </ThemeProvider>
  );
}
