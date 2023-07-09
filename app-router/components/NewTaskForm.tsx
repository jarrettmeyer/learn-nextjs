"use client";

import { fetchApiDbData } from "@/utils/client/fetch";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import LinkButton from "./LinkButton";

interface NewTaskFormInputs {
  assignedTo: string;
  description: string;
  dueDateTime: string;
}

export default function NewTaskForm() {
  const { handleSubmit, register } = useForm<NewTaskFormInputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<NewTaskFormInputs> = (data) => {
    console.log("onSubmit:", data);
    fetchApiDbData("createTask", data).then(() => {
      router.push(`/tasks`);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="block">
      <div className="mb-6">
        <label className="block font-semibold">Description</label>
        <textarea {...register("description")} className="w-full h-20 rounded" />
      </div>
      <div className="mb-6">
        <label className="block font-semibold">Assigned to</label>
        <input {...register("assignedTo")} type="text" className="w-full rounded" />
      </div>
      <div className="mb-6">
        <label className="block font-semibold">Due</label>
        <input {...register("dueDateTime")} type="date" className="w-full rounded" />
      </div>
      <div className="mb-6">
        <LinkButton href={`/tasks`} className="bg-red-600 hover:bg-red-400 mr-8">
          Cancel
        </LinkButton>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
