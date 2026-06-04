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
    <div className="flex flex-col rounded-lg border border-[#F5F0E6] bg-white overflow-hidden hover:shadow-lg transition-shadow">
      {/* Product Image Container */}
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 w-full bg-[#F5F0E6] flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex flex-col flex-1 p-4">
        {/* Category Badge */}
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-[#1A1A1A] rounded-full capitalize">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-semibold text-[#1A1A1A] line-clamp-2 hover:text-[#4B5563] cursor-pointer mb-2">
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-yellow-400">
            {'★'.repeat(Math.round(product.rating.rate))}
            {'☆'.repeat(5 - Math.round(product.rating.rate))}
          </div>
          <span className="text-xs text-[#4B5563]">
            ({product.rating.count})
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-lg font-bold text-[#1A1A1A]">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex gap-2 mt-auto">
          <div className="flex items-center border border-[#F5F0E6] rounded">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-1 text-[#4B5563] hover:bg-[#F5F0E6]"
            >
              −
            </button>
            <span className="px-3 py-1 text-sm font-medium text-[#1A1A1A]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1 text-[#4B5563] hover:bg-[#F5F0E6]"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className={`flex-1 px-3 py-2 rounded font-semibold text-white transition-colors ${
              isAdded
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-[#1A1A1A] hover:bg-[#4B5563]'
            }`}
          >
            {isAdded ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
