import Container from "@/components/Container";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { Metadata } from "next";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full flex flex-col justify-stretch items-stretch">
        <header className="w-full bg-black text-white">
          <Container>
            <nav className="py-4 flex flex-row gap-6 justify-stretch items-center">
              <h1 className="block text-xl font-semibold mb-0">Learn NextJS &mdash; App Router</h1>
              <div className="flex-grow flex flex-row gap-2">
                <div>
                  <Link href="/" className="text-white">
                    Home
                  </Link>
                </div>
                <div>
                  <Link href="/tasks" className="text-white">
                    Tasks
                  </Link>
                </div>
              </div>
              <div>
                <Link href="/profile" className="text-white">
                  Guest
                </Link>
              </div>
            </nav>
          </Container>
        </header>
        <main className="flex-grow py-8">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
