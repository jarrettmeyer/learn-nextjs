import { ButtonProps } from "@/types";

export default function Button({ children, className, disabled, onClick, type }: ButtonProps) {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      disabled={disabled || false}
      className={`bg-blue-600 hover:bg-blue-400 text-lg text-white font-semibold px-4 py-1 rounded shadow ${className}`}
    >
      {children}
    </button>
  );
}
