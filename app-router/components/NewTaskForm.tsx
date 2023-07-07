"use client";

import { toDueDateTimeString, toNullableString } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./Button";

export default function NewTaskForm() {
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDateTime, setDueDateTime] = useState("");
  const router = useRouter();

  async function handleSubmit() {
    console.log("handle submit");
    await fetch("/api/tasks", {
      body: JSON.stringify({
        assignedTo: toNullableString(assignedTo),
        description,
        dueDateTime: toDueDateTimeString(dueDateTime),
      }),
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
    });
    router.push("/tasks");
  }

  return (
    <form className="block">
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
