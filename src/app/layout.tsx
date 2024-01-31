import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/header";

const font = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: ".Torrent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"bg-bg0 " + font.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
