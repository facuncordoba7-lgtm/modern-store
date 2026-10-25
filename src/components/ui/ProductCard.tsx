'use client';

import React from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Plus } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 transition-all hover:shadow-xl">
      <div className="aspect-square overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
          <span className="text-lg font-medium text-slate-600">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-slate-500 mb-6 line-clamp-2">
          {product.description}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
