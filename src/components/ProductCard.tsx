import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Product, useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    console.log('Agregando producto al carrito:', product.name);
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast.success(`${product.name} agregado al carrito`);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-white">
      <CardHeader className="text-center pb-4">
        <div className="text-6xl mb-2">{product.image}</div>
        <h3 className="text-xl font-semibold text-green-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
      </CardHeader>
      
      <CardContent className="px-6">
        <p className="text-gray-600 text-sm mb-4 min-h-[40px]">{product.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-green-600">€{product.price.toFixed(2)}</span>
            <span className="text-gray-500 text-sm ml-1">/ {product.unit}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};