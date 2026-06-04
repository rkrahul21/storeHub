'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import ThemeToggle from './ThemeToggle';

export function Header() {
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#FAF7F2] dark:bg-[#14120E] border-b border-[#F5F0E6] dark:border-amber-500/15 sticky top-0 z-50 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.6)] transition-colors duration-200">
  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FAF7F2]" style={{ fontFamily: "var(--font-playfair)" }}>
              storeHUB
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-[#1A1A1A] dark:text-[#FAF7F2] hover:text-[#4B5563] dark:hover:text-[#A39E93] font-medium transition-colors">
              Products
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A1A1A] text-[#FAF7F2] hover:bg-[#4B5563] dark:bg-[#FAF7F2] dark:text-[#14120E] dark:hover:bg-[#F5F0E6] font-medium transition-colors"
            >
              <CartIcon />
              <span>Cart</span>
              {itemCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-[#FAF7F2] text-[#1A1A1A] dark:bg-[#14120E] dark:text-[#FAF7F2] text-xs font-bold rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
            <div className="w-px h-6 bg-[#F5F0E6] dark:bg-[#2E2920]" /> 
            
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </nav>

          <div className="flex items-center md:hidden gap-4">
             <Link href="/cart" className="relative p-2 text-[#1A1A1A] dark:text-[#FAF7F2]">
                <CartIcon />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 px-1.5 py-0.5 bg-[#1A1A1A] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#14120E] text-[10px] font-bold rounded-full">
                    {itemCount}
                  </span>
                )}
             </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#1A1A1A] dark:text-[#FAF7F2]"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] dark:bg-[#14120E] border-t border-[#F5F0E6] dark:border-[#2E2920] px-4 pt-2 pb-6 space-y-2 shadow-inner transition-colors">
          <Link 
            href="/products" 
            className="block py-3 text-lg font-medium text-[#1A1A1A] dark:text-[#FAF7F2]"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            href="/cart" 
            className="block py-3 text-lg font-medium text-[#1A1A1A] dark:text-[#FAF7F2]"
            onClick={() => setIsMenuOpen(false)}
          >
            Cart ({itemCount})
          </Link>
          
          <div className="pt-4 border-t border-[#F5F0E6] dark:border-[#2E2920] flex items-center justify-between">
            <span className="text-sm font-medium text-[#4B5563] dark:text-[#A39E93]">Switch Appearance</span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}

function CartIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}
