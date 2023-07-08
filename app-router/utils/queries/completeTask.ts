import { PrismaClient } from "@prisma/client";

export interface CompleteTaskInput {
  id: number;
}

export default async function completeTask({ id }: CompleteTaskInput) {
  const client = new PrismaClient();
  const now = new Date();

  const task = await client.task.findUnique({ where: { id: +id } });

  // Do not try to complete a task that has already been completed.
  if (task?.completedDateTime) {
    return;
  }

  await client.task.update({
    where: { id: +id },
    data: {
      completedDateTime: now,
      modifiedDateTime: now,
    },
  });
}
