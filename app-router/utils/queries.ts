import { CreateTaskForm, Task, UpdateTaskForm } from "@/types";
import { DatabaseAdapter } from "@/utils/database";

const tasksPath = "/tasks";
const tasksTable = `"public"."tasks"`;

export async function completeTask(id: number): Promise<void> {
  const db = new DatabaseAdapter();
  try {
    const sql = `update ${tasksTable} set "completedDateTime" = NOW(), "modifiedDateTime" = NOW() where "id" = $1 and "completedDateTime" is null`;
    const values = [id];
    await db.query(sql, values);
  } finally {
    await db.disconnect();
  }
}

export async function deleteTask(id: number): Promise<void> {
  const db = new DatabaseAdapter();
  try {
    const sql = `delete from "public"."tasks" where "id" = $1`;
    const values = [id];
    await db.query(sql, values);
  } finally {
    await db.disconnect();
  }
}

export async function getTaskById(id: number): Promise<Task> {
  const db = new DatabaseAdapter();
  try {
    const sql = `select * from ${tasksTable} where "id" = $1`;
    const values = [id];
    const tasks = await db.query<Task>(sql, values);
    return tasks[0];
  } finally {
    await db.disconnect();
  }
}

export async function getTasks(): Promise<Task[]> {
  const db = new DatabaseAdapter();
  try {
    const sql = `select * from ${tasksTable} order by "modifiedDateTime" desc`;
    const tasks = await db.query<Task>(sql);
    console.log(`get tasks found ${tasks.length} tasks`);
    return tasks;
  } finally {
    await db.disconnect();
  }
}

export async function insertTask(body: CreateTaskForm): Promise<void> {
  const db = new DatabaseAdapter();
  try {
    const sql = `insert into ${tasksTable} ("description", "assignedTo", "dueDateTime", "createdDateTime", "modifiedDateTime") values ($1, $2, $3, NOW(), NOW())`;
    const values = [body.description, body.assignedTo, body.dueDateTime];
    await db.query(sql, values);
  } finally {
    await db.disconnect();
  }
}

export async function updateTask(body: UpdateTaskForm): Promise<void> {
  const db = new DatabaseAdapter();
  try {
    const sql = `update ${tasksTable} set "description" = $2, "assignedTo" = $3, "dueDateTime" = $4, "modifiedDateTime" = NOW() where "id" = $1 and "completedDateTime" is null`;
    const values = [
      body.id,
      body.description,
      body.assignedTo,
      body.dueDateTime,
    ];
    await db.query(sql, values);
  } finally {
    await db.disconnect();
  }
}
