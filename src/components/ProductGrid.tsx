import { ProductCard } from "./ProductCard";
import { Product } from "@/contexts/CartContext";

const products: Product[] = [
  {
    id: 1,
    name: "Tomates Cherry",
    price: 3.50,
    image: "🍅",
    category: "Tomates",
    unit: "kg",
    description: "Tomates cherry frescos y dulces, perfectos para ensaladas"
  },
  {
    id: 2,
    name: "Lechuga Romana",
    price: 2.20,
    image: "🥬",
    category: "Hojas Verdes",
    unit: "unidad",
    description: "Lechuga romana crujiente y fresca"
  },
  {
    id: 3,
    name: "Zanahorias",
    price: 1.80,
    image: "🥕",
    category: "Raíces",
    unit: "kg",
    description: "Zanahorias orgánicas, dulces y nutritivas"
  },
  {
    id: 4,
    name: "Brócoli",
    price: 2.90,
    image: "🥦",
    category: "Crucíferas",
    unit: "unidad",
    description: "Brócoli fresco, rico en vitaminas y minerales"
  },
  {
    id: 5,
    name: "Pimientos Rojos",
    price: 4.20,
    image: "🫑",
    category: "Pimientos",
    unit: "kg",
    description: "Pimientos rojos dulces y crujientes"
  },
  {
    id: 6,
    name: "Espinacas",
    price: 2.50,
    image: "🥬",
    category: "Hojas Verdes",
    unit: "manojo",
    description: "Espinacas tiernas, perfectas para ensaladas y cocinar"
  },
  {
    id: 7,
    name: "Pepinos",
    price: 1.90,
    image: "🥒",
    category: "Pepinos",
    unit: "kg",
    description: "Pepinos frescos y crujientes"
  },
  {
    id: 8,
    name: "Cebolla Blanca",
    price: 1.60,
    image: "🧅",
    category: "Cebollas",
    unit: "kg",
    description: "Cebollas blancas de sabor suave"
  },
  {
    id: 9,
    name: "Apio",
    price: 2.10,
    image: "🥬",
    category: "Tallos",
    unit: "manojo",
    description: "Apio fresco y crujiente, ideal para sopas y ensaladas"
  }
];

export const ProductGrid = () => {
  console.log('Renderizando grid con', products.length, 'productos');

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-green-800 mb-2">Nuestros Productos</h2>
        <p className="text-gray-600">Verduras frescas directamente del campo a tu mesa</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};