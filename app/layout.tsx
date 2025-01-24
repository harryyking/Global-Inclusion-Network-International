import type { Metadata } from "next";
import "./globals.css";
import {Gabarito} from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const brand = Gabarito({weight:["400","600", "700","800"], subsets:['latin']})

export const metadata: Metadata = {
  title: "GINI | Global Inclusion Network International",
  description: "Empowering Every Child Regardless of Ability",
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
         <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
