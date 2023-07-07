"use client";

import { CompleteTaskButtonProps } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./Button";

export default function CompleteTaskButton({ className, id }: CompleteTaskButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleClick() {
    setIsDeleting(true);
    await fetch(`/api/tasks?action=complete&id=${id}`, {
      body: JSON.stringify({ id }),
      headers: {
        "Content-type": "application/json",
      },
      method: "PUT",
    });
    if (pathname === "/tasks") {
      return router.refresh();
    }
    return router.push("/tasks");
  }

  return (
    <Button onClick={handleClick} className={`bg-green-600 hover:bg-green-500 ${className}`}>
      Complete Task
    </Button>
  );
}
