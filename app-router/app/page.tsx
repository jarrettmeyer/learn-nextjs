import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        This is the home page. There&apos;s nothing here. Perhaps you should check out the{" "}
        <Link href="/tasks">tasks</Link>.
      </p>
    </div>
  );
}
