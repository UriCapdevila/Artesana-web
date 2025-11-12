import Link from "next/link";
import { Button } from "@/components/ui/button";
import LeafIcon from "../icons/LeafIcon";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <LeafIcon className="h-6 w-6 text-primary" />
          <span className="hidden font-headline font-bold sm:inline-block">
            Artesana
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="/#products"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Productos
          </Link>
          <Link
            href="/admin/description-generator"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            AI Generator
          </Link>
        </nav>
        <div className="flex items-center justify-end">
          <Button asChild>
            <Link href="https://wa.me/1234567890">Contactar</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
