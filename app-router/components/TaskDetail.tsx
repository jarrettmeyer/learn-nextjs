"use client";

import { fetchApiDbData } from "@/utils/client/fetch";
import { toDateString } from "@/utils/client/helpers";
import { Task } from "@prisma/client";
import { useEffect, useState } from "react";
import CompleteTaskButton from "./CompleteTaskButton";
import DeleteTaskButton from "./DeleteTaskButton";
import LinkButton from "./LinkButton";
import PencilSquareIcon from "./images/PencilSquareIcon";
import TableIcon from "./images/TableIcon";

export interface TaskDetailProps {
  id: number;
}

export default function TaskDetail({ id }: TaskDetailProps) {
  const [task, setTask] = useState<Task>({} as Task);

  useEffect(() => {
    fetchApiDbData<Task>("findTaskById", { id: +id }).then((data) => {
      setTask(data);
    });
  }, [id]);

  return (
    <div>
      <div className="flex flex-row justify-start items-start mb-4">
        <LinkButton href="/tasks" className="mr-4">
          <div className="flex flex-row justify-start items-center">
            <TableIcon className="mr-2" />
            <span>List Tasks</span>
          </div>
        </LinkButton>
        <LinkButton href={`/tasks/${id}/edit`} className="mr-4">
          <div className="flex flex-row justify-start items-center">
            <PencilSquareIcon className="mr-2" />
            <span>Edit Task</span>
          </div>
        </LinkButton>
        <CompleteTaskButton id={id} className="mr-12" />
        <DeleteTaskButton id={id} />
      </div>
      <blockquote className="mb-4 border-l-2 border-green-200 pl-4">{task.description}</blockquote>
      <p>
        <strong>Assigned to:</strong> {task.assignedTo}
      </p>
      <p>
        <strong>Due date:</strong> {toDateString(task.dueDateTime)}
      </p>
    </div>
  );
}
