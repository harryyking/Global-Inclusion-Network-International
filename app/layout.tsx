import type { Metadata } from "next";
import "./globals.css";
import {Gabarito} from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const brand = Gabarito({weight:["400","600", "700","800"], subsets:['latin']})

export const metadata: Metadata = {
  title: "GINI | Global Inclusion Network International",
  description: "Empowering Every Child Regardless of Ability",
  openGraph: {
    type: "website",
    url: "www.globalinclusionnetwork.org",
    images: [
      {
        url : 'https://utfs.io/f/cQKwx0ZpHag13i1X9PcUTOh92ABgKFbk4ctY1ZyE7JMeXwL5',
        width: 500,
        height: 500
      }
    ]
    
  },
  twitter: {
    card: "summary",
    title: "GINI | Global Inclusion Network International",
    description: "Empowering Every Child Regardless of Ability",
    images: ["https://utfs.io/f/cQKwx0ZpHag13i1X9PcUTOh92ABgKFbk4ctY1ZyE7JMeXwL5", ]

  },
  icons: {
    icon: "https://utfs.io/f/cQKwx0ZpHag13i1X9PcUTOh92ABgKFbk4ctY1ZyE7JMeXwL5",
    apple: "https://utfs.io/f/cQKwx0ZpHag13i1X9PcUTOh92ABgKFbk4ctY1ZyE7JMeXwL5"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="https://utfs.io/f/cQKwx0ZpHag13i1X9PcUTOh92ABgKFbk4ctY1ZyE7JMeXwL5" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://utfs.io/f/cQKwx0ZpHag13i1X9PcUTOh92ABgKFbk4ctY1ZyE7JMeXwL5" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://utfs.io/f/cQKwx0ZpHag13i1X9PcUTOh92ABgKFbk4ctY1ZyE7JMeXwL5" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://utfs.io/f/cQKwx0ZpHag13i1X9PcUTOh92ABgKFbk4ctY1ZyE7JMeXwL5" />
      </head>
      <body className={brand.className}
      >
         <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
