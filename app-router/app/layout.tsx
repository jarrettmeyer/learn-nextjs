import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import "@/styles/globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full flex flex-col justify-stretch items-stretch">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
