import { PrismaClient } from "@prisma/client";
import { toDateEndOfDay } from "./helpers";

export interface CreateTaskInput {
  assignedTo?: string;
  description: string;
  dueDateTime?: Date;
}

export default async function createTask({ assignedTo, description, dueDateTime }: CreateTaskInput) {
  const client = new PrismaClient();
  const now = new Date();
  const result = await client.task.create({
    data: {
      description: description,
      assignedTo: assignedTo,
      dueDateTime: toDateEndOfDay(dueDateTime),
      createdDateTime: now,
      modifiedDateTime: now,
    },
  });
  return result;
}
