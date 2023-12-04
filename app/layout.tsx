import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import HeaderTag from "../components/ui/header-tag"
import Provider from "./provider"
import Sidebar from "@/components/sidebar"
import Footer from "../components/footer"
export const metadata: Metadata = {
  title: "A responsive Next App with TailWindCss and Shadcn",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div id="container" className="flex flex-col overflow-x-hidden">
              <div
                id="header"
                className="flex-row rounded-2xl border-2 border-solid border-black w-full h-[10vh] p-1 m-1"
              >
                <HeaderTag />
              </div>
              <div
                id="main"
                className="flex flex-col md:flex-row flex-grow rounded-2xl p-1 m-1 w-full h-[75vh]"
              >
                <div className="p-4  flex  rounded-2xl border-2 border-solid border-black">
                  <h1 className="text-2xl md:text-4xl font-mono font-bold font-black">
                    <Sidebar />
                  </h1>
                </div>
                <div className="p-4 mx-1 flex-grow  rounded-2xl border-2 border-solid border-black w-full">
                  <h1 className="text-2xl md:text-4xl font-mono font-bold font-black ">
                    <main className="flex-1 pt-16 overflow-x-hidden overflow-y-auto ">
                      {children}
                    </main>
                  </h1>
                </div>
              </div>

              <div
                id="footer"
                className=""
              >
                <Footer />
              </div>
            </div>

          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
