import { PrismaClient } from ".prisma/client";

export default async function countOpenTasks(): Promise<number> {
  const prismaClient = new PrismaClient();
  return prismaClient.task.count({ where: { completedDateTime: null } });
}
