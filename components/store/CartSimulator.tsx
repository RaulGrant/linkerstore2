'use client';

import { useState } from 'react';
import { ShoppingCart, Minus, Plus, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/lib/hooks/useCart';
import Image from 'next/image';

export default function CartSimulator() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    // Simular proceso de checkout
    alert('¡Funcionalidad de checkout simulada! En la versión final, esto redirigirá a Amazon para completar la compra.');
    setIsOpen(false);
  };

  const handleContinueShopping = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Carrito
          {cart.itemCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {cart.itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent side="right" className="w-full max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Carrito de compras
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full mt-6">
          {cart.items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-4">
                <ShoppingCart className="h-16 w-16 mx-auto text-gray-400" />
                <div>
                  <h3 className="font-medium text-gray-900">Tu carrito está vacío</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Agrega productos para comenzar tu compra
                  </p>
                </div>
                <Button onClick={handleContinueShopping}>
                  Continuar comprando
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Items del carrito */}
              <div className="flex-1 overflow-y-auto space-y-4">
                {cart.items.map((item) => (
                  <Card key={item.product.id} className="p-3">
                    <div className="flex gap-3">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                        <Image
                          src={`/images/products/${item.product.asin}_Prin.webp`}
                          alt={item.product.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">
                          {item.product.title}
                        </h4>
                        <p className="text-xs text-gray-500 mb-2">
                          por {item.product.brand || 'Amazon'}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-6 w-6 p-0"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium min-w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-6 w-6 p-0"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <div className="text-right">
                            <p className="font-medium text-sm">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </p>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                              onClick={() => removeFromCart(item.product.id)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Resumen y acciones */}
              <div className="border-t pt-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({cart.itemCount} items)</span>
                    <span>${cart.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Envío</span>
                    <span>Calculado en checkout</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total estimado</span>
                    <span>${cart.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button 
                    className="w-full" 
                    onClick={handleCheckout}
                    size="lg"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ir a Amazon para pagar
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={handleContinueShopping}
                    >
                      Continuar comprando
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="flex-1"
                      onClick={clearCart}
                    >
                      Limpiar carrito
                    </Button>
                  </div>
                </div>

                <div className="text-xs text-gray-500 text-center">
                  <p>
                    Al hacer clic en "Ir a Amazon para pagar", serás redirigido a Amazon
                    para completar tu compra de forma segura.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
