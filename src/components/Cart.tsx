import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export const Cart = () => {
  const { state, dispatch } = useCart();

  console.log('Renderizando carrito con', state.items.length, 'items');

  const updateQuantity = (id: number, quantity: number) => {
    console.log('Actualizando cantidad del producto', id, 'a', quantity);
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    console.log('Eliminando producto', id, 'del carrito');
    dispatch({ type: 'REMOVE_ITEM', payload: id });
    toast.success('Producto eliminado del carrito');
  };

  const clearCart = () => {
    console.log('Limpiando carrito completo');
    dispatch({ type: 'CLEAR_CART' });
    toast.success('Carrito vaciado');
  };

  const handleCheckout = () => {
    console.log('Procesando compra por un total de €', state.total.toFixed(2));
    toast.success('¡Compra realizada con éxito! Gracias por tu pedido.');
    clearCart();
  };

  if (state.items.length === 0) {
    return (
      <Card className="sticky top-4">
        <CardHeader>
          <CardTitle className="flex items-center text-green-800">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Tu Carrito
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🛒</div>
            <p className="text-gray-500">Tu carrito está vacío</p>
            <p className="text-sm text-gray-400 mt-2">Agrega algunos productos frescos</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-green-800">
          <div className="flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Tu Carrito
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearCart}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {state.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="text-2xl">{item.image}</div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm truncate">{item.name}</h4>
              <p className="text-xs text-gray-500">€{item.price.toFixed(2)} / {item.unit}</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-3 w-3" />
              </Button>
              
              <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700 h-8 w-8 p-0"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        ))}
        
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-lg">Total:</span>
            <span className="font-bold text-xl text-green-600">€{state.total.toFixed(2)}</span>
          </div>
          
          <Button 
            onClick={handleCheckout}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            size="lg"
          >
            Finalizar Compra
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};