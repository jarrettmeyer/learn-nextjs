"use client";

import { EditTaskFormProps } from "@/types";
import { toDateString } from "@/utils/client/helpers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function EditTaskForm({ id }: EditTaskFormProps) {
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDateTime, setDueDateTime] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/db`, {
      body: JSON.stringify({ action: "findTaskById", id: id }),
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        setDescription(json.task.description || "");
        setAssignedTo(json.task.assignedTo || "");
        setDueDateTime(toDateString(json.task.dueDateTime) || "");
      });
  }, [id]);

  async function handleSubmit() {
    const body = {
      action: "updateTask",
      assignedTo,
      description,
      dueDateTime,
      id,
    };
    console.log("handle submit:", body);
    await fetch("/api/db", { body: JSON.stringify(body), method: "POST" });
    router.push("/tasks");
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
