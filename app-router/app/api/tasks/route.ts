import { UpdateTaskForm } from "@/types";
import {
  deleteTask,
  getTaskById,
  getTasks,
  insertTask,
  updateTask,
} from "@/utils/queries";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const body = await request.json();
  await deleteTask(body.id);
  return NextResponse.json({});
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  if (request.nextUrl.searchParams.has("id")) {
    const id = +(request.nextUrl.searchParams.get("id") || -1);
    const task = await getTaskById(id);
    return NextResponse.json(task);
  }
  const tasks = await getTasks();
  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = await request.json();
  await insertTask(body);
  return NextResponse.json({}, { status: 201 });
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
  const body = (await request.json()) as UpdateTaskForm;
  await updateTask(body);
  return NextResponse.json({});
}
