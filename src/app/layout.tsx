import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "ContactMe",
  description: "Contact forms made easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#121212] font-slab`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
