import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Artesana Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="font-headline text-xl font-bold text-foreground">
              Artesana
            </span>
          </Link>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Artesana. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
