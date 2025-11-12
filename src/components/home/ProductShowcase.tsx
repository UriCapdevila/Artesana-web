import Image from "next/image";
import { products, type Product } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ProductCard({ product }: { product: Product }) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);
  return (
    <Card className="flex h-full transform flex-col overflow-hidden rounded-lg bg-card shadow-lg transition-transform duration-300 hover:-translate-y-2">
      {image && (
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
        <CardDescription className="text-lg font-semibold text-primary">
          {product.price}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{product.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Comprar Ahora</Button>
      </CardFooter>
    </Card>
  );
}

export default function ProductShowcase() {
  return (
    <section id="products" className="bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Nuestras Creaciones
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Cada pieza es única, hecha a mano con pasión y materiales de alta
            calidad.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
