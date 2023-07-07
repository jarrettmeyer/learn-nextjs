"use client";

import { DeleteTaskButtonProps } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./Button";

export default function DeleteTaskButton({ id }: DeleteTaskButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleClick() {
    setIsDeleting(true);
    await fetch("/api/tasks", {
      body: JSON.stringify({ id }),
      headers: {
        "Content-type": "application/json",
      },
      method: "DELETE",
    });
    if (pathname === "/tasks") {
      return router.refresh();
    }
    return router.push("/tasks");
  }

  return (
    <Button onClick={handleClick} className="bg-red-600 hover:bg-red-400">
      Delete Task
    </Button>
  );
}
