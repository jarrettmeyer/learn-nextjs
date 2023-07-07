import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
}

export interface CompleteTaskButtonProps {
  className?: string;
  id: number;
}

export interface CreateTaskForm {
  assignedTo?: string;
  description: string;
  dueDateTime?: Date;
}

export interface DeleteTaskButtonProps {
  id: number;
}

export interface EditTaskFormProps {
  id: number;
}

export interface LinkButtonProps {
  children: ReactNode;
  className?: string;
  href: string;
}

export interface Task {
  assignedTo: string | null;
  completedDateTime: Date | null;
  createdDateTime: Date | null;
  description: string;
  dueDateTime: Date | null;
  id: number | null;
  modifiedDateTime: Date | null;
}

export interface UpdateTaskForm {
  assignedTo?: string;
  description: string;
  dueDateTime: string;
  id: number;
}

export interface WithId<T = string | number> {
  id: T;
}
