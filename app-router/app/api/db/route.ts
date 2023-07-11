import {
  completeTask,
  countOpenTasks,
  createTask,
  deleteTask,
  findAllTasks,
  findTaskById,
  updateTask,
} from "@/utils/queries";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const action = request.nextUrl.searchParams.get("action");
  const body = await request.json();
  console.log("POST /api/db", { action, body });

  try {
    let status = 200;
    let responseBody: any = {};
    switch (action) {
      case "completeTask":
        await completeTask(body);
        break;
      case "countOpenTasks":
        responseBody = await countOpenTasks();
        break;
      case "createTask":
        await createTask(body);
        break;
      case "deleteTask":
        await deleteTask(body);
        break;
      case "findAllTasks":
        responseBody = await findAllTasks();
        break;
      case "findTaskById":
        responseBody = await findTaskById(body);
        break;
      case "updateTask":
        await updateTask(body);
        break;
      default:
        status = 400;
    }
    return NextResponse.json(responseBody, { status });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
