"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./Button";

export interface DeleteTaskButtonProps {
  id: number;
}

export default function DeleteTaskButton({ id }: DeleteTaskButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleClick() {
    setIsDeleting(true);
    await fetch("/api/db", {
      body: JSON.stringify({ action: "deleteTask", id }),
      method: "POST",
    });
    if (pathname === "/tasks") {
      return router.refresh();
    }
    return router.push("/tasks");
  }

  return (
    <Button onClick={handleClick} className="bg-red-600 hover:bg-red-400" disabled={isDeleting}>
      Delete Task
    </Button>
  );
}
