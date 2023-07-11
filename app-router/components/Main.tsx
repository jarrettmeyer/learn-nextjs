import { ReactNode } from "react";
import Container from "./Container";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main className="flex-grow py-8">
      <Container>{children}</Container>
    </main>
  );
}
