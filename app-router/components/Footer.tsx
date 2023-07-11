import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-gray-200 shadow text-gray-700 text-sm">
      <Container className="py-8">
        <p className="mb-0">&copy; {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}
