import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { cn } from "@/lib/utils";

export default function WhatsappButton() {
  return (
    <Link
      href="https://wa.me/1234567890" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className={cn(
        buttonVariants({ size: "icon", variant: "default" }),
        "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-110"
      )}
      style={{
        backgroundColor: "#25D366", // Official WhatsApp green
        color: "white",
      }}
    >
      <WhatsappIcon className="h-7 w-7" />
    </Link>
  );
}
