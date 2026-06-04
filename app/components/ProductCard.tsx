'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/hooks/useCart';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="flex flex-col rounded-lg border border-[#F5F0E6] dark:border-[#2E2920] bg-white dark:bg-[#1E1B15] overflow-hidden hover:shadow-lg dark:hover:shadow-[0_4px_25px_rgba(0,0,0,0.5) transition-shadow">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 w-full bg-[#F5F0E6] dark:bg-[#25211A] flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4 mix-blend-multiply dark:mix-blend-normal"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex flex-col flex-1 p-4">
        {/* Category Badge */}
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold text-white dark:text-[#14120E] bg-[#1A1A1A] dark:bg-[#FAF7F2] rounded-full capitalize">
            {product.category}
          </span>
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-semibold text-[#1A1A1A] dark:text-[#FAF7F2] line-clamp-2 hover:text-[#4B5563] dark:hover:text-[#A39E93] cursor-pointer mb-2">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-yellow-400 dark:text-amber-400">
            {'★'.repeat(Math.round(product.rating.rate))}
            {'☆'.repeat(5 - Math.round(product.rating.rate))}
          </div>
          <span className="text-xs text-[#4B5563] dark:text-[#A39E93]">
            ({product.rating.count})
          </span>
        </div>

        <div className="mb-4">
          <span className="text-lg font-bold text-[#1A1A1A] dark:text-[#FAF7F2]">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex gap-2 mt-auto">
          <div className="flex items-center border border-[#F5F0E6] dark:border-[#2E2920] rounded bg-transparent overflow-hidden">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-1 text-[#4B5563] dark:text-[#A39E93] hover:bg-[#F5F0E6] dark:hover:bg-[#25211A] transition-colors"
            >
              −
            </button>
            <span className="px-3 py-1 text-sm font-medium text-[#1A1A1A] dark:text-[#FAF7F2]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1 text-[#4B5563] dark:text-[#A39E93] hover:bg-[#F5F0E6] dark:hover:bg-[#25211A] transition-colors"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className={`flex-1 px-3 py-2 rounded font-semibold text-white dark:text-[#14120E] transition-colors ${
              isAdded
                ? 'bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 !text-white'
                : 'bg-[#1A1A1A] dark:bg-[#FAF7F2] hover:bg-[#4B5563] dark:hover:bg-[#F5F0E6]'
            }`}
          >
            {isAdded ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
