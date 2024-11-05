import type {Metadata} from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Trending from "./components/Trending";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg" href="/react.svg" />
      <body className="w-[100%] lg:w-[75%] mx-auto min-h-screen font-sans">
        <div className="flex flex-col lg:flex-row md:flex-row">
          <div className="basis-1/4 border-r border-neutral-700">
            <Sidebar />
          </div>
          <div className="basis-2/4">{children}</div>
          <div className="basis-1/4 border-l border-neutral-700 h-full pl-4">
            <Trending />
          </div>
        </div>
      </body>
    </html>
  );
}
