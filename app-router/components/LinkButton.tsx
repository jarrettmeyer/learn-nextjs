import { LinkButtonProps } from "@/types";
import Link from "next/link";

export default function LinkButton({ children, className, href }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block bg-blue-600 hover:bg-blue-400 text-lg text-white font-semibold px-4 py-1 rounded shadow ${className}`}
    >
      {children}
    </Link>
  );
}
