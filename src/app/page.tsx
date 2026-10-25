import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <span className="mb-4 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600">
              New Collection 2026
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Elevate Your Everyday <br />
              <span className="text-slate-500">with Minimalist Design.</span>
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-8 text-slate-600">
              Curated premium essentials that combine form and function.
              Designed for those who appreciate the beauty of simplicity.
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <Link
                href="/shop"
                className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 active:scale-95"
              >
                Shop Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/shop"
                className="text-sm font-semibold leading-6 text-slate-900 hover:text-slate-600 transition-colors"
              >
                View All Products <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured Essentials</h2>
              <p className="mt-2 text-slate-600">Our most loved pieces, picked just for you.</p>
            </div>
            <Link
              href="/shop"
              className="hidden sm:block text-sm font-semibold text-slate-900 hover:text-slate-600"
            >
              Explore All <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            {[
              { title: 'Free Shipping', desc: 'On all orders over $150', icon: '🚚' },
              { title: 'Secure Payment', desc: '100% encrypted transactions', icon: '🔒' },
              { title: 'Lifetime Warranty', desc: 'Quality guaranteed for life', icon: '✨' },
            ].map((prop, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="text-4xl mb-4">{prop.icon}</span>
                <h3 className="text-lg font-semibold text-slate-900">{prop.title}</h3>
                <p className="text-sm text-slate-500">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
