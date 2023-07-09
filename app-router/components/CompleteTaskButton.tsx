"use client";

import { fetchApiDbData } from "@/utils/client/fetch";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./Button";
import CheckSquareIcon from "./images/CheckSquareIcon";

export interface CompleteTaskButtonProps {
  className?: string;
  id: number;
}

export default function CompleteTaskButton({ className, id }: CompleteTaskButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isCompleting, setIsCompleting] = useState(false);

  async function handleClick() {
    setIsCompleting(true);
    const body = { id: +id };
    await fetchApiDbData("completeTask", body);
    if (pathname === "/tasks") {
      return router.refresh();
    }
    return router.push("/tasks");
  }

  return (
    <Button onClick={handleClick} className={`bg-green-600 hover:bg-green-500 ${className}`} disabled={isCompleting}>
      <div className="flex flex-row justify-start items-center">
        <CheckSquareIcon className="mr-2" />
        <span>Complete Task</span>
      </div>
    </Button>
  );
}
