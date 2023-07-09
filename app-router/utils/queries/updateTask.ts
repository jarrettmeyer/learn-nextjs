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
  await client.task.update({
    where: { id: +id },
    data: {
      assignedTo: toStringOrNull(assignedTo),
      completedDateTime: null,
      description: description.trim(),
      dueDateTime: toDateEndOfDay(dueDateTime),
    },
  });
}
