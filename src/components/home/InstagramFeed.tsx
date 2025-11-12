import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export default function InstagramFeed() {
  const instaImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith("instagram-")
  );

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Síguenos en Instagram
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Descubre nuestras últimas creaciones, procesos artesanales y momentos
            especiales.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
          {instaImages.map((image) => (
            <a
              key={image.id}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 17vw"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="default" size="lg">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              @artesana_
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
