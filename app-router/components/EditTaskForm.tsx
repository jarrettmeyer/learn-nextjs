"use client";

import { fetchApiDbData } from "@/utils/client/fetch";
import { toDateString } from "@/utils/client/helpers";
import { Task } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./Button";

export interface EditTaskFormProps {
  id: number;
}

export default function EditTaskForm({ id }: EditTaskFormProps) {
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDateTime, setDueDateTime] = useState("");
  const router = useRouter();

  useEffect(() => {
    const body = { id: +id };
    fetchApiDbData<Task>("findTaskById", body).then((data) => {
      setDescription(data.description);
      setAssignedTo(data.assignedTo || "");
      setDueDateTime(toDateString(data.dueDateTime) || "");
    });
  }, [id]);

  async function handleSubmit() {
    const body = {
      assignedTo,
      description,
      dueDateTime,
      id,
    };
    console.log("handle submit:", body);
    await fetchApiDbData("updateTask", body);
    router.push(`/tasks/${id}`);
  }

  return (
    <form className="block">
      <input type="hidden" name="id" value={id} />
      <div className="mb-6">
        <label className="block font-semibold">Description</label>
        <textarea
          value={description}
          placeholder="Describe the work to be done..."
          rows={4}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded"
        />
      </div>
      <div className="mb-6">
        <label className="block font-semibold">Assigned to</label>
        <input
          type="text"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          className="w-full rounded"
        />
      </div>
      <div className="mb-6">
        <label className="block font-semibold">Due</label>
        <input
          type="date"
          value={dueDateTime}
          onChange={(e) => setDueDateTime(e.target.value)}
          className="w-full rounded"
        />
      </div>
      <div className="mb-6">
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </form>
  );
}
