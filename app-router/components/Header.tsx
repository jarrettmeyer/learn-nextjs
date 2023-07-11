import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
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
  );
}
