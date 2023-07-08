import { PrismaClient } from "@prisma/client";

export default async function findAllTasks() {
  const client = new PrismaClient();
  const tasks = await client.task.findMany({ orderBy: [{ modifiedDateTime: "desc" }] });
  return tasks;
}
