import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
}

export default function Button({ children, className, disabled, onClick, type }: ButtonProps) {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      disabled={disabled || false}
      className={`inline-block bg-blue-600 hover:bg-blue-400 text-lg text-white font-semibold px-4 py-1 rounded shadow ${className}`}
    >
      {children}
    </button>
  );
}
