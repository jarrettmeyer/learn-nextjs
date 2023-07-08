import { PrismaClient } from "@prisma/client";

export interface FindTaskByIdInput {
  id: number;
}

export default async function findTaskById({ id }: FindTaskByIdInput) {
  const client = new PrismaClient();
  const task = await client.task.findUnique({
    where: { id: +id },
  });
  return task;
}
