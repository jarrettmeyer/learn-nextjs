"use client";

import { fetchApiDbData } from "@/utils/client/fetch";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./Button";
import TrashIcon from "./images/TrashIcon";

export interface DeleteTaskButtonProps {
  className?: string;
  id: number;
}

export default function DeleteTaskButton({ className, id }: DeleteTaskButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleClick() {
    setIsDeleting(true);
    const body = { id: +id };
    await fetchApiDbData("deleteTask", body);
    if (pathname === "/tasks") {
      return router.refresh();
    }
    return router.push("/tasks");
  }

  return (
    <Button onClick={handleClick} className={`bg-red-600 hover:bg-red-400 ${className}`} disabled={isDeleting}>
      <div className="flex flex-row justify-start items-center">
        <TrashIcon className="mr-2" />
        <span>Delete Task</span>
      </div>
    </Button>
  );
}
