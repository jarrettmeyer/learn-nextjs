import { PrismaClient } from "@prisma/client";

export interface DeleteTaskInput {
  id: number;
}

export default async function deleteTask({ id }: DeleteTaskInput) {
  const client = new PrismaClient();
  return client.task.delete({
    where: { id: +id },
  });
}
