export type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  imageId: string;
};

export const products: Product[] = [
  {
    id: "prod_1",
    name: "Diario de Cuero Rústico",
    price: "$45.00",
    description:
      "Encuadernado a mano con cuero genuino, este diario es perfecto para tus pensamientos y bocetos.",
    imageId: "product-1",
  },
  {
    id: "prod_2",
    name: "Set de Libretas Botánicas",
    price: "$25.00",
    description:
      "Tres libretas de bolsillo con hermosas cubiertas de estampado botánico, ideales para llevar a todas partes.",
    imageId: "product-2",
  },
  {
    id: "prod_3",
    name: "Cuaderno de Dibujo Grande",
    price: "$35.00",
    description:
      "Un cuaderno de dibujo espacioso con papel de alta calidad y una cubierta de papel texturizado.",
    imageId: "product-3",
  },
  {
    id: "prod_4",
    name: "Agenda Personalizada Terracota",
    price: "$50.00",
    description:
      "Organiza tu vida con estilo con nuestra agenda personalizable de tapa dura color terracota.",
    imageId: "product-4",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  handle: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "test_1",
    name: "Ana Pérez",
    handle: "@anaperez",
    quote:
      "La calidad es increíble. Se nota el amor y la dedicación en cada detalle. Mi diario es mi tesoro.",
  },
  {
    id: "test_2",
    name: "Carlos García",
    handle: "@carlosg",
    quote:
      "El regalo perfecto. Compré una libreta para mi pareja y le encantó. El servicio al cliente fue excepcional.",
  },
  {
    id: "test_3",
    name: "Sofía Rodríguez",
    handle: "@sofirod",
    quote:
      "¡Me encantan mis nuevas libretas! Son hermosas y la calidad del papel es perfecta para escribir con pluma.",
  },
];
