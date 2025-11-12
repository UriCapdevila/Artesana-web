import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  if (!heroImage) return null;

  return (
    <section className="relative h-[60vh] w-full text-white md:h-[70vh]">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="font-headline text-5xl font-bold leading-tight md:text-7xl">
          Artesana
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl">
          Conecta con la esencia. Creaciones hechas a mano con alma.
        </p>
        <Button variant="secondary" size="lg" className="mt-8">
          Explorar Productos
        </Button>
      </div>
    </section>
  );
}
