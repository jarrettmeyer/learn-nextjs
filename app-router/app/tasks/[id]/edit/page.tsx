import EditTaskForm from "@/components/EditTaskForm";

export default async function Page({ params }: { params: { id: number } }) {
  return (
    <div>
      <h1>Edit Task</h1>
      <EditTaskForm id={params.id} />
    </div>
  );
}