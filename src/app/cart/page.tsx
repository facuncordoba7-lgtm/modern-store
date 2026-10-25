'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Trash2, ShoppingBag, Plus, Minus, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    // REPLACE 'TU_NUMERO_DE_WHATSAPP' with your actual phone number (e.g., '5491123456789')
    const phoneNumber = '5493804141002';

    const itemsList = cart
      .map((item) => `- ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`)
      .join('%0A');

    const message = `Hola! Quiero hacer un pedido en Modern Store:%0A%0A${itemsList}%0A%0A*Total: $${cartTotal.toFixed(2)}*%0A%0A¿Cómo podemos coordinar el pago y el envío?`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <ShoppingBag className="mx-auto h-16 w-16 text-slate-300 mb-4" />
        <h1 className="text-2xl font-bold text-slate-900">Your cart is empty</h1>
        <p className="mt-2 text-slate-600">Looks like you haven't added any essentials yet.</p>
        <Link
          href="/shop"
          className="mt-8 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-12 text-4xl font-bold tracking-tight text-slate-900">Shopping Cart</h1>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Cart Items */}
        <div className="lg:col-span-8">
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-6 rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
                <div className="h-24 w-24 overflow-hidden rounded-lg bg-slate-100">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-between py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.name}</h3>
                      <p className="text-sm text-slate-500">${item.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={clearCart}
            className="mt-6 text-sm font-medium text-slate-500 hover:text-red-500 transition-colors"
          >
            Clear all items
          </button>
        </div>

        {/* Summary */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 sticky top-24">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-medium text-slate-900">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Shipping</span>
                <span className="font-medium text-slate-900">Free</span>
              </div>
              <div className="border-t border-slate-100 pt-4 flex justify-between text-lg font-bold">
                <span className="text-slate-900">Total</span>
                <span className="text-slate-900">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="w-full rounded-full bg-slate-900 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Proceed to Checkout'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
