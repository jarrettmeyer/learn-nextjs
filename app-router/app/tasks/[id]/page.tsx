import CompleteTaskButton from "@/components/CompleteTaskButton";
import DeleteTaskButton from "@/components/DeleteTaskButton";
import LinkButton from "@/components/LinkButton";
import { getTaskById } from "@/utils/queries";

export default async function Page({ params }: { params: { id: number } }) {
  const task = await getTaskById(params.id);

  return (
    <div>
      <h1>Task Details</h1>
      <p>
        <LinkButton href={`/tasks/${task.id}/edit`} className="mr-4">
          Edit Task
        </LinkButton>
        <CompleteTaskButton id={task.id || -1} className="mr-12" />
        <DeleteTaskButton id={task.id || -1} />
      </p>
      <p className="border-l-2 border-purple-500 pl-4">{task.description}</p>
      <p>Assigned to: {task.assignedTo}</p>
      <p>Due date: {task.dueDateTime?.toLocaleDateString()}</p>
    </div>
  );
}
