"use client";

import { fetchApiDbData } from "@/utils/client/fetch";
import { toDateString } from "@/utils/client/helpers";
import { Task } from "@prisma/client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import EyeIcon from "./images/EyeIcon";
import PencilSquareIcon from "./images/PencilSquareIcon";

export const revalidate = 0;

interface TaskCellProps {
  completed: boolean;
  value: string | null | undefined;
}

interface TaskRowProps {
  task: Task;
}

function TaskCell({ completed, value }: TaskCellProps) {
  if (completed) {
    return <td className="line-through text-gray-400">{value}</td>;
  }
  return <td className="text-gray-800">{value}</td>;
}

function TaskRow({ task }: TaskRowProps) {
  const completed = !!task.completedDateTime;
  return (
    <tr key={task.id}>
      <td>
        <Link href={`/tasks/${task.id}`}>
          <EyeIcon />
        </Link>
      </td>
      <td>
        <Link href={`/tasks/${task.id}/edit`}>
          <PencilSquareIcon />
        </Link>
      </td>
      <TaskCell completed={completed} value={task.description} />
      <TaskCell completed={completed} value={task.assignedTo} />
      <TaskCell completed={completed} value={toDateString(task.dueDateTime)} />
      <TaskCell completed={completed} value={toDateString(task.completedDateTime)} />
      <TaskCell completed={completed} value={toDateString(task.modifiedDateTime)} />
    </tr>
  );
}

export default function TasksTable() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const didFetch = useRef(false);

  useEffect(() => {
    if (!didFetch.current) {
      fetchApiDbData<Task[]>("findAllTasks").then((data) => {
        setTasks(data);
      });
    }
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
      <tbody>{tasks.map((task) => TaskRow({ task }))}</tbody>
    </table>
  );
}
