import TaskCount from "@/components/TaskCount";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        There are <TaskCount /> open <Link href="/tasks">tasks</Link>. Perhaps you would like to{" "}
        <Link href="/tasks/new">create a new task</Link>.
      </p>
    </div>
  );
}
