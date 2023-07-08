import TaskDetail from "@/components/TaskDetail";

export default async function Page({ params }: { params: { id: number } }) {
  return (
    <div>
      <h1>Task Details</h1>
      <TaskDetail id={params.id} />
    </div>
  );
}
