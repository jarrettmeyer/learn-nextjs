import { deleteTask, getTasks, insertTask } from "@/utils/queries";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const body = await request.json();
  await deleteTask(body.id);
  revalidatePath("/tasks");
  return NextResponse.json({});
}

export async function GET(): Promise<NextResponse> {
  const tasks = await getTasks();
  revalidatePath("/tasks");
  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = await request.json();
  await insertTask(body);
  revalidatePath("/tasks");
  return NextResponse.json({}, { status: 201 });
}
