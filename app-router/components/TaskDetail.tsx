"use client";

import { fetchApiDbData } from "@/utils/client/fetch";
import { toDateString } from "@/utils/client/helpers";
import { Task } from "@prisma/client";
import { useEffect, useState } from "react";
import CompleteTaskButton from "./CompleteTaskButton";
import DeleteTaskButton from "./DeleteTaskButton";
import LinkButton from "./LinkButton";

export interface TaskDetailProps {
  id: number;
}

export default function TaskDetail({ id }: TaskDetailProps) {
  const [task, setTask] = useState<Task>({} as Task);

  useEffect(() => {
    fetchApiDbData<Task>({ action: "findTaskById", id: +id }).then((data) => {
      setTask(data);
    });
  }, [id]);

  return (
    <div>
      <div className="mb-4">
        <LinkButton href={`/tasks/${id}/edit`} className="mr-4">
          Edit Task
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
