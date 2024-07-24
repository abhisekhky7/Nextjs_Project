import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "./Provider";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB App",
  description: "This is a movie Database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider>   
          <Header />
          <Navbar/>
          <SearchBar/>
          {children}
      </Provider>
      </body>
    </html>
  );
}
