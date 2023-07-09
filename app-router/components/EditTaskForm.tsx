"use client";

import { fetchApiDbData } from "@/utils/client/fetch";
import { toDateString } from "@/utils/client/helpers";
import { Task } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import LinkButton from "./LinkButton";

export interface EditTaskFormProps {
  id: number;
}

interface EditTaskFormInputs {
  assignedTo: string;
  description: string;
  dueDateTime: string;
  id: number;
}

export default function EditTaskForm({ id }: EditTaskFormProps) {
  const { handleSubmit, register, reset } = useForm<EditTaskFormInputs>({
    defaultValues: {
      id: +id,
    },
  });
  const router = useRouter();

  useEffect(() => {
    const body = { id: +id };
    fetchApiDbData<Task>("findTaskById", body).then((data) => {
      reset({
        assignedTo: data.assignedTo || "",
        description: data.description || "",
        dueDateTime: toDateString(data.dueDateTime) || "",
      });
    });
  }, [id, reset]);

  const onSubmit: SubmitHandler<EditTaskFormInputs> = (data) => {
    data.id = +data.id;
    console.log("onSubmit:", data);
    fetchApiDbData("updateTask", data).then(() => {
      router.push(`/tasks/${id}`);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="block">
      <input {...register("id")} type="hidden" />
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
        <LinkButton href={`/tasks/${id}`} className="bg-red-600 hover:bg-red-400 mr-8">
          Cancel
        </LinkButton>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
