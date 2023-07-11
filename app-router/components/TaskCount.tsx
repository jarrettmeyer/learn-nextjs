"use client";

import { fetchApiDbData } from "@/utils/client/fetch";
import { useEffect, useState } from "react";

export default function TaskCount() {
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    fetchApiDbData<number>("countOpenTasks", {}).then((result) => setTaskCount(result));
  });

  return <>{taskCount}</>;
}
