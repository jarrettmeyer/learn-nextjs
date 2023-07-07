import { Task } from "@/types";
import { DatabaseAdapter } from "@/utils/database";

async function getTask(id: number): Promise<Task> {
  const db = new DatabaseAdapter();
  const tasks = await db.query<Task>(`select * from "public"."tasks" where "id" = $1`, [id]);
  return tasks[0];
}

export default async function Page({ params }: { params: { id: number } }) {
  const task = await getTask(params.id);

  return (
    <div>
      <h1>Edit Task</h1>
    </div>
  );
}