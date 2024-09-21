import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import { Providers } from "@/utils/providers";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Components - Fully Customizable Functional React Components",
  description:
    "Discover Dev Components, a unique platform providing fully customizable React components in TSX/JSX, seamlessly styled with Tailwind CSS. Unlock productivity and efficiency with our ready-to-use, highly flexible UI elements.",
  keywords:
    "web components, tsx react components, custom components, react components, UI components, web development, front-end development, customizable components, functional components, custom web design, reusable components, open-source components",
  // themeColor: "#1E293B",
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
      <body
        className={`${inter.className} dark:bg-dark-primary bg-light-primary overflow-hidden`}
      >
        <NextTopLoader
          color="#06b6d4"
          shadow="0 0 10px #06b6d4,0 0 5px #06b6d4"
        />
        <Providers>{children}</Providers>
        {/* svg line patterns */}
        <div className="magicpattern absolute h-52 inset-0 -z-10 opacity-60"></div>
        <GoogleAnalytics gaId={process.env.GA_ID as string} />
      </body>
    </html>
  );
}
