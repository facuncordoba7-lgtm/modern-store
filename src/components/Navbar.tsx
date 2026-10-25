'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export const Navbar = () => {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
              MODERN<span className="text-slate-500">STORE</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
            <Link href="/shop" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Shop</Link>
            <Link href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative p-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-b border-slate-100 bg-white p-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium text-slate-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/shop" className="text-sm font-medium text-slate-600" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link href="#" className="text-sm font-medium text-slate-600" onClick={() => setIsOpen(false)}>About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};
