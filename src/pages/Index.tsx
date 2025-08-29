import { useState } from "react";
import { ProductGrid } from "@/components/ProductGrid";
import { Cart } from "@/components/Cart";
import { Header } from "@/components/Header";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  console.log("Renderizando página principal de la tienda de verduras");

  return (
    <CartProvider>
      <div className="min-h-screen bg-green-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <ProductGrid />
            </div>
            <div className="lg:col-span-1">
              <Cart />
            </div>
          </div>
        </main>
      </div>
    </CartProvider>
  );
};

export default Index;