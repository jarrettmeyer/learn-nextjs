import LinkButton from "@/components/LinkButton";
import TasksTable from "@/components/TasksTable";

export const revalidate = 0;

export default async function Page() {
  return (
    <div>
      <h1 className="mb-4">Tasks</h1>
      <p className="text-right">
        <LinkButton href="/tasks/new" className="bg-green-600 hover:bg-green-500">Create New Task</LinkButton>
      </p>
      <TasksTable />
    </div>
  )
}