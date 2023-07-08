"use client";

import { CompleteTaskButtonProps } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./Button";

export default function CompleteTaskButton({ className, id }: CompleteTaskButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isUpdating, setIsUpdating] = useState(false);

  async function handleClick() {
    setIsUpdating(true);
    await fetch(`/api/db`, {
      body: JSON.stringify({ action: "completeTask", id }),
      method: "POST",
    });
    if (pathname === "/tasks") {
      return router.refresh();
    }
    return router.push("/tasks");
  }

  return (
    <Button onClick={handleClick} className={`bg-green-600 hover:bg-green-500 ${className}`} disabled={isUpdating}>
      Complete Task
    </Button>
  );
}
