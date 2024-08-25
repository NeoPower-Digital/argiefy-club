import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Main from "@/components/Main";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Argiefy",
  description: "World ID for Argiefy - Aleph Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const MiniKitProvider = dynamic(
    () => import("@/lib/providers/minikit-provider"),
    { ssr: false }
  );

  return (
    <html lang="en" className="notranslate dark">
      <MiniKitProvider>
        <body
          className={cn(`h-svh bg-background antialiased`, inter.className)}
          suppressHydrationWarning
        >
          <div className="sticky top-0 z-50 flex w-full items-center justify-between bg-muted p-2 pl-4 h-14">
            <div className="w-full flex justify-center">
              <p className={"text-lg px-5 w-full max-w-md font-semibold"}>
                Argiefy
              </p>
            </div>
          </div>

          <Main>{children}</Main>
        </body>
      </MiniKitProvider>
    </html>
  );
}
