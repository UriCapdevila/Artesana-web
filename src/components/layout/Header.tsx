import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Artesana Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
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
