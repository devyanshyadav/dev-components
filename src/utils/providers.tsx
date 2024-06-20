import Header from "@/components/header";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <div className=" mx-auto max-w-7xl">{children}</div>
    </ThemeProvider>
  );
}
