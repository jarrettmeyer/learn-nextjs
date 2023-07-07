import DeleteTaskButton from "@/components/DeleteTaskButton";
import { getTaskById } from "@/utils/queries";
import Link from "next/link";

export default async function Page({ params }: { params: { id: number } }) {
  const task = await getTaskById(params.id);

  return (
    <div>
      <h1>Task Details</h1>
      <p>
        <Link href={`/tasks/${task.id}/edit`} className="pr-6">
          Edit
        </Link>
        <DeleteTaskButton id={task.id || -1} />
      </p>
      <p className="border-l-2 border-purple-500 pl-4">{task.description}</p>
      <p>Assigned to: {task.assignedTo}</p>
      <p>Due date: {task.dueDateTime?.toLocaleDateString()}</p>
    </div>
  );
}
