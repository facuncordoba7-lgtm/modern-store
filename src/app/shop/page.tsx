import React from 'react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Shop All</h1>
        <p className="mt-4 text-lg text-slate-600">Explore our complete collection of minimalist essentials.</p>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
