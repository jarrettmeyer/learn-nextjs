import { PrismaClient } from "@prisma/client";
import { toDateEndOfDay, toStringOrNull } from "./helpers";

export interface UpdateTaskInput {
  assignedTo?: string;
  description: string;
  dueDateTime: string;
  id: number;
}

export default async function updateTask({ assignedTo, description, dueDateTime, id }: UpdateTaskInput) {
  const client = new PrismaClient();
  const task = await client.task.findUnique({
    where: { id: +id },
  });

  // Do not try to update a completed task.
  if (task?.completedDateTime) {
    return;
  }

  await client.task.update({
    where: { id: +id },
    data: {
      assignedTo: toStringOrNull(assignedTo),
      description: description.trim(),
      dueDateTime: toDateEndOfDay(dueDateTime),
    },
  });
}
