import { ShoppingCart, Leaf } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export const Header = () => {
  const { state } = useCart();
  
  console.log('Renderizando header con', state.items.length, 'items en el carrito');

  return (
    <header className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Leaf className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">Verduras Frescas</h1>
              <p className="text-green-100">Los mejores productos del campo</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 bg-green-700 px-4 py-2 rounded-lg">
            <ShoppingCart className="h-5 w-5" />
            <span className="font-semibold">
              {state.items.reduce((sum, item) => sum + item.quantity, 0)} productos
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};