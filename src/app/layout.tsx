import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import { Providers } from "@/utils/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Components - Fully Customizable Functional Web Components",
  description:
    "Discover Dev Components, a unique platform offering a wide range of fully customizable and functional web components. Enhance your web development experience with our ready-to-use, highly flexible UI elements.",
  keywords:
    "web components, custom components, react components, UI components, web development, front-end development, customizable components, functional components, custom web design, reusable components, open-source components",
  themeColor: "#1E293B",
  // twitterTitle: "Dev Components - Fully Customizable Web Components",
  // twitterDescription:
  //   "Discover Dev Components, a unique platform offering a wide range of fully customizable and functional web components. Enhance your web development experience with our ready-to-use, highly flexible UI elements.",
  // twitterImage: "https://your-domain.com/twitter-image.jpg",
  // twitterCard: "summary_large_image",
  // twitterSite: "@your-twitter-handle",
  // twitterCreator: "@your-twitter-handle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-dark-primary bg-light-primary`}>
        <Providers>{children}</Providers>
        {/* svg line patterns */}
        {/* <div className="svg-pattern absolute h-52 inset-0 -z-10 opacity-60">
          <div className="bg-gradient-to-t from-primary to-secondary/50 w-full h-full"></div>
        </div> */}
        {/* <GoogleAnalytics gaId="G-BQTKMVNV86" /> */}
      </body>
    </html>
  );
}
