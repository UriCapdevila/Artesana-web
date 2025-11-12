import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export default function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-leaf", props.className)}
      {...props}
    >
      <path d="M11 20A7 7 0 0 1 4 13V8a5 5 0 0 1 4.3-4.9C9.5 2.8 10 2.5 11 2.2c.4-.1.8.3.7.7-.3.8-.4 1.7-.3 2.6.2 1.1.6 2.1 1.2 3.1 1.1 2 2.5 3.8 4.4 5.2" />
      <path d="M11.2 12.8A4.6 4.6 0 0 0 9 17.5a2.5 2.5 0 0 1 4.8-1.7c.3-.5.5-1.1.6-1.7" />
    </svg>
  );
}
