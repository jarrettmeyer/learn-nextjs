"use client";

import { Task } from "@/types";
import { parseDate } from "@/utils/parsers";
import Link from "next/link";
import { useEffect, useState } from "react";
import EyeIcon from "./images/EyeIcon";

export const revalidate = 0;

function TaskCell({ completed, value }: { completed: boolean, value: string | null | undefined }) {
  if (completed) {
    return <td className="line-through text-gray-400">{value}</td>
  }
  return <td className="text-gray-800">{value}</td>
}

function TaskRow({ task }: { task: Task }) {
  const completed = !!task.completedDateTime;
  return (
    <tr key={task.id}>
      <td>
        <Link href={`/tasks/${task.id}`}><EyeIcon /></Link>
      </td>
      <td>

      </td>
      <TaskCell completed={completed} value={task.description} />
      <TaskCell completed={completed} value={task.assignedTo} />
      <TaskCell completed={completed} value={parseDate(task.dueDateTime)?.toLocaleDateString()} />
      <TaskCell completed={completed} value={parseDate(task.completedDateTime)?.toLocaleDateString()} />
      <TaskCell completed={completed} value={parseDate(task.modifiedDateTime)?.toLocaleString()} />
    </tr>
  )
}

export default function TasksTable() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("/api/tasks", {
      headers: {
        "Accept": "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((tasks) => setTasks(tasks));
  }, []);

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>Description</th>
          <th>Assigned to</th>
          <th>Due</th>
          <th>Completed</th>
          <th>Modified</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => TaskRow({ task }))}
      </tbody>
    </table>
  )
}