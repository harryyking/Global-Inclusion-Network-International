import type { Metadata } from "next";
import "./globals.css";
import {Open_Sans} from 'next/font/google'

const brand = Open_Sans({weight:["300","400","600","700","800"], subsets:['latin']})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={brand.className}
      >
        {children}
      </body>
    </html>
  );
}
